/* ============================================================
   Local SEO Mastery — application logic
   Everything is stored in this browser (localStorage).
   ============================================================ */
(function () {
  "use strict";

  var C = window.LSEO_CURRICULUM || { levels: [] };
  var L = window.LSEO_LESSONS || {};
  var U = window.LSEO_UPDATES || { lastChecked: null, sources: [], items: [] };
  var KEY = "lseo.v1";

  /* ---------- state ---------- */
  var S = load();

  function blank() {
    return {
      done: {}, imp: {}, book: {}, notes: {}, self: {},
      quiz: {}, ex: {}, chal: {}, opened: {}, last: null,
      readUpd: {}
    };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (!raw) return blank();
      var o = JSON.parse(raw), b = blank();
      for (var k in b) if (o[k] != null) b[k] = o[k];
      return b;
    } catch (e) { return blank(); }
  }
  var saveTimer = null;
  function save() {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(function () {
      try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {}
    }, 120);
  }

  /* ---------- flat index ---------- */
  var FLAT = [];      // [{id,title,level,levelTitle,module,moduleTitle,n}]
  var BYID = {};
  (function build() {
    var n = 0;
    C.levels.forEach(function (lv) {
      lv.modules.forEach(function (md) {
        md.lessons.forEach(function (ls) {
          var rec = {
            id: ls.id, title: ls.t,
            level: lv.n, levelTitle: lv.t,
            module: md.n, moduleTitle: md.t,
            idx: n++
          };
          FLAT.push(rec); BYID[ls.id] = rec;
        });
      });
    });
  })();
  var TOTAL = FLAT.length;

  /* ---------- helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }
  function inline(s) {
    // **bold**  *italic*  `code`
    return esc(s)
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
      .replace(/`([^`]+)`/g, "<code>$1</code>");
  }
  function pct(a, b) { return b ? Math.round((a / b) * 100) : 0; }
  function count(o) { var n = 0; for (var k in o) if (o[k]) n++; return n; }
  function noteCount() { var n = 0; for (var k in S.notes) if ((S.notes[k] || "").trim()) n++; return n; }
  function el(id) { return document.getElementById(id); }

  var toastT = null;
  function toast(msg) {
    var t = el("toast");
    t.textContent = msg; t.hidden = false;
    clearTimeout(toastT);
    toastT = setTimeout(function () { t.hidden = true; }, 1900);
  }

  /* ---------- lesson progress model ---------- */
  // 6 trackable actions per lesson
  function lessonParts(id) {
    var d = L[id] || {};
    var selfTotal = (d.self || []).length;
    var selfDone = S.self[id] ? Object.keys(S.self[id]).filter(function (k) { return S.self[id][k]; }).length : 0;
    return {
      read: !!S.opened[id],
      self: selfTotal > 0 && selfDone >= selfTotal,
      quiz: !!(S.quiz[id] && S.quiz[id].submitted),
      ex: !!S.ex[id],
      chal: !!S.chal[id],
      done: !!S.done[id]
    };
  }
  function lessonPct(id) {
    var p = lessonParts(id), n = 0, t = 6;
    for (var k in p) if (p[k]) n++;
    return Math.round((n / t) * 100);
  }
  function lessonTouched(id) {
    return !!(S.opened[id] || S.done[id] || S.imp[id] || S.book[id] ||
      (S.notes[id] || "").trim() || S.quiz[id] || S.ex[id] || S.chal[id] || S.self[id]);
  }

  /* ---------- updates ---------- */
  function updItems() {
    return (U.items || []).filter(function (i) { return i && i.id; });
  }
  function updUnread() {
    return updItems().filter(function (i) { return !S.readUpd[i.id]; }).length;
  }
  function updForLesson(id) {
    return updItems().filter(function (i) {
      return (i.affects || []).indexOf(id) > -1;
    });
  }
  var UPD_TYPE = {
    feature: ["🆕", "New feature"],
    policy: ["📋", "Policy or guideline"],
    interface: ["🖥️", "Interface change"],
    algorithm: ["📈", "Ranking update"],
    deprecation: ["⚠️", "Removed or retired"],
    note: ["📝", "Note"]
  };

  /* ---------- notification bell ---------- */
  function bellItems() {
    return updItems().slice().sort(function (a, b) {
      return String(b.date || "").localeCompare(String(a.date || ""));
    });
  }

  /* Official sources carry more weight than third-party reports — lesson 8.4.3 */
  function sourceKind(name) {
    var s = (U.sources || []).filter(function (x) { return x.name === name; })[0];
    if (!s) return { label: "Manual", cls: " manual" };
    return s.official ? { label: "Official", cls: "" } : { label: "3rd party", cls: " third" };
  }

  function renderBell() {
    var un = updUnread(), cnt = el("bellCount"), btn = el("bellBtn");
    if (cnt) { cnt.textContent = un > 9 ? "9+" : un; cnt.hidden = un === 0; }
    if (btn) btn.classList.toggle("has-new", un > 0);

    var panel = el("bellPanel");
    if (!panel) return;
    var items = bellItems().slice(0, 6);

    var h = '<div class="bp-head"><b>Announcements</b>' +
      (un ? '<button class="bp-link" id="bpReadAll">Mark all read</button>' : "") + "</div>";

    if (!items.length) {
      h += '<div class="bp-empty">Nothing recorded yet.<br>Official sources are listed below.</div>';
    } else {
      h += '<div class="bp-list">';
      items.forEach(function (it) {
        var unread = !S.readUpd[it.id];
        var ty = UPD_TYPE[it.type] || UPD_TYPE.note;
        var sk = sourceKind(it.source);
        h += '<a class="bp-item' + (unread ? " is-new" : "") + '" href="#/updates" data-bpid="' + esc(it.id) + '">' +
          '<span class="bp-top">' +
          '<span class="bp-plat' + sk.cls + '">' + sk.label + "</span>" +
          '<span class="bp-date">' + esc(it.date || "") + "</span>" +
          (unread ? '<span class="bp-new"></span>' : "") + "</span>" +
          '<span class="bp-title">' + ty[0] + " " + esc(it.title || "") + "</span>" +
          (it.summary ? '<span class="bp-sum">' + esc(String(it.summary).slice(0, 110)) +
            (String(it.summary).length > 110 ? "…" : "") + "</span>" : "") +
          "</a>";
      });
      h += "</div>";
    }

    h += '<div class="bp-foot">' +
      '<a class="bp-all" href="#/updates">View all updates →</a>' +
      '<span class="bp-checked">' + (U.lastChecked ? "Checked " + esc(U.lastChecked) : "Never checked") + "</span>" +
      "</div>";

    h += '<div class="bp-src"><b>Official sources</b>';
    (U.sources || []).filter(function (s) { return s.official; }).slice(0, 5).forEach(function (s) {
      h += '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + " ↗</a>";
    });
    h += "</div>";

    panel.innerHTML = h;

    var ra = el("bpReadAll");
    if (ra) ra.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      updItems().forEach(function (i) { S.readUpd[i.id] = true; });
      save(); renderBell(); renderSidebarTop();
      if (/^#\/updates/.test(location.hash)) renderUpdates();
      toast("All announcements marked as read");
    });
    panel.querySelectorAll("[data-bpid]").forEach(function (a) {
      a.addEventListener("click", function () {
        S.readUpd[a.dataset.bpid] = true; save();
        panel.hidden = true;
        setTimeout(function () { renderBell(); renderSidebarTop(); }, 30);
      });
    });
  }

  /* fetch the latest feed when the course is served over http(s).
     Falls back silently to the embedded data offline or from file://  */
  function refreshUpdates() {
    if (!/^https?:$/.test(location.protocol) || typeof fetch !== "function") return;
    fetch("data/updates.json?t=" + Date.now(), { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : null; })
      .then(function (d) {
        if (!d || !Array.isArray(d.items)) return;
        var before = updUnread();
        U = d;
        renderBell(); renderSidebarTop();
        if (/^#\/updates/.test(location.hash)) renderUpdates();
        var now = updUnread();
        if (now > before) toast(now - before + " new announcement" + (now - before > 1 ? "s" : ""));
      })
      .catch(function () { /* offline or blocked — embedded data stands */ });
  }

  /* ---------- ranks ---------- */
  var RANKS = [
    { n: "Beginner", at: 24 }, { n: "Foundational", at: 48 }, { n: "Intermediate", at: 96 },
    { n: "Advanced", at: 144 }, { n: "Expert", at: 174 }, { n: "Elite", at: 198 },
    { n: "Master", at: 219 }, { n: "Top 1%", at: 240 }
  ];
  function rankNow(doneN) {
    var r = "Not started", prev = 0;
    for (var i = 0; i < RANKS.length; i++) { if (doneN >= RANKS[i].at) r = RANKS[i].n; }
    return r;
  }

  /* ============================================================
     BLOCK RENDERER
     ============================================================ */
  var CO = {
    tip: ["co-tip", "💡", "Tip"],
    warn: ["co-warn", "⚠️", "Watch out"],
    stop: ["co-stop", "🚫", "Never do this"],
    ex: ["co-ex", "🔍", "Example"],
    note: ["co-note", "🧠", "Remember"],
    ask: ["co-note", "❓", "Ask yourself"],
    story: ["co-ex", "📖", "Real situation"]
  };

  function renderBlocks(arr) {
    if (!arr || !arr.length) return "";
    var out = [];
    arr.forEach(function (raw) {
      var s = String(raw);
      var i = s.indexOf(":");
      var type = i > -1 ? s.slice(0, i).trim() : "p";
      var body = i > -1 ? s.slice(i + 1).trim() : s;

      if (type === "h") { out.push("<h3>" + inline(body) + "</h3>"); return; }
      if (type === "p") { out.push("<p>" + inline(body) + "</p>"); return; }
      if (type === "l") {
        out.push("<ul>" + body.split("|").map(function (x) {
          return "<li>" + inline(x.trim()) + "</li>"; }).join("") + "</ul>"); return;
      }
      if (type === "n") {
        out.push("<ol>" + body.split("|").map(function (x) {
          return "<li>" + inline(x.trim()) + "</li>"; }).join("") + "</ol>"); return;
      }
      if (type === "term") {
        var pr = body.split("|");
        out.push('<span class="term"><b>' + inline(pr[0].trim()) + "</b> — " +
          inline((pr[1] || "").trim()) + "</span>"); return;
      }
      if (type === "code") { out.push('<pre class="codeblk">' + esc(body) + "</pre>"); return; }
      if (type === "table") {
        var rows = body.split("||").map(function (r) { return r.trim(); }).filter(Boolean);
        if (!rows.length) return;
        var head = rows.shift().split(";");
        var h = "<thead><tr>" + head.map(function (c) {
          return "<th>" + inline(c.trim()) + "</th>"; }).join("") + "</tr></thead>";
        var b = "<tbody>" + rows.map(function (r) {
          return "<tr>" + r.split(";").map(function (c) {
            return "<td>" + inline(c.trim()) + "</td>"; }).join("") + "</tr>";
        }).join("") + "</tbody>";
        out.push('<div class="tbl-wrap"><table class="tbl">' + h + b + "</table></div>"); return;
      }
      if (CO[type]) {
        var cfg = CO[type], title = cfg[2], text = body;
        var bar = body.indexOf("|");
        if (bar > -1 && bar < 60) { title = body.slice(0, bar).trim(); text = body.slice(bar + 1).trim(); }
        out.push('<div class="callout ' + cfg[0] + '"><div class="co-t">' + cfg[1] + " " +
          inline(title) + "</div>" + inline(text).replace(/\n/g, "<br>") + "</div>"); return;
      }
      out.push("<p>" + inline(s) + "</p>");
    });
    return out.join("");
  }

  /* ============================================================
     SIDEBAR
     ============================================================ */
  var filter = "all";
  var openLv = {}, openMd = {};

  function matchesFilter(id) {
    if (filter === "all") return true;
    if (filter === "done") return !!S.done[id];
    if (filter === "important") return !!S.imp[id];
    if (filter === "saved") return !!S.book[id];
    if (filter === "notes") return !!(S.notes[id] || "").trim();
    if (filter === "unfinished") return !!S.opened[id] && !S.done[id];
    return true;
  }

  function currentId() {
    var h = location.hash || "";
    var m = h.match(/^#\/l\/([\d.]+)$/);
    return m ? m[1] : null;
  }

  function renderTree() {
    var cur = currentId();
    var host = el("tree");
    var html = "", any = false;

    C.levels.forEach(function (lv) {
      var lvLessons = [];
      lv.modules.forEach(function (md) { md.lessons.forEach(function (x) { lvLessons.push(x.id); }); });
      var visLv = lvLessons.filter(matchesFilter);
      if (!visLv.length) return;
      any = true;

      var lvDone = lvLessons.filter(function (i) { return S.done[i]; }).length;
      var isOpen = openLv["L" + lv.n] !== undefined ? openLv["L" + lv.n]
        : (cur ? BYID[cur] && BYID[cur].level === lv.n : lv.n === 1);
      if (filter !== "all") isOpen = true;

      html += '<div class="tr-level">';
      html += '<button class="tr-lvhead" data-lv="' + lv.n + '">' +
        '<span class="tw' + (isOpen ? " open" : "") + '">▶</span>' +
        '<span class="tr-tag">L' + lv.n + "</span>" +
        '<span class="tr-label">' + esc(lv.t) + "</span>" +
        '<span class="tr-count">' + pct(lvDone, lvLessons.length) + "%</span></button>";

      if (isOpen) {
        lv.modules.forEach(function (md) {
          var ids = md.lessons.map(function (x) { return x.id; });
          var vis = ids.filter(matchesFilter);
          if (!vis.length) return;
          var mdDone = ids.filter(function (i) { return S.done[i]; }).length;
          var mk = lv.n + "." + md.n;
          var mOpen = openMd[mk] !== undefined ? openMd[mk]
            : (cur ? BYID[cur] && BYID[cur].level === lv.n && BYID[cur].module === md.n : false);
          if (filter !== "all") mOpen = true;

          html += '<button class="tr-mdhead" data-md="' + mk + '">' +
            '<span class="tw' + (mOpen ? " open" : "") + '">▶</span>' +
            '<span class="tr-tag">M' + (md.n < 10 ? "0" + md.n : md.n) + "</span>" +
            '<span class="tr-label">' + esc(md.t) + "</span>" +
            '<span class="tr-count">' + mdDone + "/" + ids.length + "</span></button>";

          if (mOpen) {
            html += '<div class="tr-lessons">';
            md.lessons.forEach(function (ls) {
              if (!matchesFilter(ls.id)) return;
              var dcls = S.done[ls.id] ? "done" : (lessonTouched(ls.id) ? "part" : "");
              var flags = "";
              if (S.imp[ls.id]) flags += "⭐";
              if (S.book[ls.id]) flags += "🔖";
              if ((S.notes[ls.id] || "").trim()) flags += "📝";
              html += '<a class="tr-lesson' + (cur === ls.id ? " is-current" : "") +
                '" href="#/l/' + ls.id + '">' +
                '<span class="tr-dot ' + dcls + '">●</span>' +
                '<span class="tr-num">' + ls.id.split(".").pop().padStart(2, "0") + "</span>" +
                '<span class="tr-label">' + esc(ls.t) + "</span>" +
                (flags ? '<span class="tr-flags">' + flags + "</span>" : "") +
                "</a>";
            });
            html += "</div>";
          }
        });
      }
      html += "</div>";
    });

    if (!any) html = '<div class="tree-empty">Nothing matches this filter yet. Tap <b>All</b> to see every lesson.</div>';
    host.innerHTML = html;

    host.querySelectorAll(".tr-lvhead").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = "L" + b.dataset.lv;
        var cur2 = openLv[k] !== undefined ? openLv[k] : b.querySelector(".tw").classList.contains("open");
        openLv[k] = !cur2; renderTree();
      });
    });
    host.querySelectorAll(".tr-mdhead").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.dataset.md;
        var cur2 = openMd[k] !== undefined ? openMd[k] : b.querySelector(".tw").classList.contains("open");
        openMd[k] = !cur2; renderTree();
      });
    });
  }

  function renderSidebarTop() {
    var d = count(S.done);
    var p = pct(d, TOTAL);
    el("sidePct").textContent = p + "%";
    el("sideSub").textContent = d + " of " + TOTAL + " lessons complete";
    var circ = 2 * Math.PI * 19;
    el("ringFg").style.strokeDashoffset = circ - (circ * p / 100);

    // updates card
    var un = updUnread(), cnt = el("updatesCount"), sub = el("updatesSub");
    if (cnt) { cnt.textContent = un; cnt.hidden = un === 0; }
    if (sub) {
      sub.textContent = "Official sources · " +
        (U.lastChecked ? "checked " + U.lastChecked : "never checked");
    }

    // continue card
    var next = null;
    for (var i = 0; i < FLAT.length; i++) { if (!S.done[FLAT[i].id]) { next = FLAT[i]; break; } }
    if (S.last && !S.done[S.last]) next = BYID[S.last] || next;
    if (!next) {
      el("continueTitle").textContent = "Course complete 🏆";
      el("continueSub").textContent = "You finished all " + TOTAL + " lessons";
      el("continueCard").href = "#/home";
      el("continueCard").querySelector(".sc-badge").textContent = "DONE";
    } else {
      el("continueTitle").textContent = next.title;
      el("continueSub").textContent = "Lesson " + next.id + " · Level " + next.level;
      el("continueCard").href = "#/l/" + next.id;
      el("continueCard").querySelector(".sc-badge").textContent = d ? "NEXT" : "START";
    }

    renderBell();
  }

  /* ============================================================
     HOME / DASHBOARD
     ============================================================ */
  function renderHome() {
    var d = count(S.done), p = pct(d, TOTAL);
    var quizzes = Object.keys(S.quiz).filter(function (k) { return S.quiz[k] && S.quiz[k].submitted; }).length;
    var exN = count(S.ex), chN = count(S.chal), impN = count(S.imp), bkN = count(S.book), ntN = noteCount();
    var unfinished = FLAT.filter(function (r) { return S.opened[r.id] && !S.done[r.id]; });
    var circ = 2 * Math.PI * 19;

    var h = '<div class="col">';
    h += '<h1 class="page-title">Your progress</h1>';
    h += '<p class="page-intro">Work through the levels in order. Mark each lesson complete when you have actually done the exercise, not just read the words. Everything you tick, write or save stays in this browser.</p>';

    /* hero */
    h += '<div class="card hero">' +
      '<svg class="ring hero-ring" viewBox="0 0 44 44"><circle class="ring-bg" cx="22" cy="22" r="19"></circle>' +
      '<circle class="ring-fg" cx="22" cy="22" r="19" style="stroke-dashoffset:' + (circ - circ * p / 100) + '"></circle></svg>' +
      '<div class="hero-body">' +
      '<div class="hero-pct">' + p + "% complete</div>" +
      '<div class="hero-line">' + d + " of " + TOTAL + " lessons finished · " + TOTAL + " lessons written so far</div>" +
      '<div class="hero-rank">🏆 Mastery rank: <b>' + rankNow(d) + "</b></div>";
    var nxt = null;
    for (var i = 0; i < FLAT.length; i++) { if (!S.done[FLAT[i].id]) { nxt = FLAT[i]; break; } }
    if (S.last && !S.done[S.last]) nxt = BYID[S.last] || nxt;
    h += nxt ? '<a class="btn" href="#/l/' + nxt.id + '">' + (d ? "Continue: " : "Start: ") + esc(nxt.title) + " →</a>"
             : '<a class="btn" href="#/l/' + FLAT[0].id + '">Review from the start →</a>';
    h += "</div></div>";

    /* stats */
    h += '<div class="stats">' +
      stat(quizzes, "🧠 Quizzes taken") +
      stat(exN, "💪 Exercises done") +
      stat(chN, "🎯 Challenges done") +
      stat(impN, "⭐ Important") +
      stat(bkN, "🔖 Bookmarks") +
      stat(ntN, "📝 With notes") +
      stat(unfinished.length, "◑ Left unfinished") +
      "</div>";

    /* ranks */
    h += '<div class="sec-head">🏆 Mastery ranks</div>';
    RANKS.forEach(function (r, ix) {
      var prev = ix ? RANKS[ix - 1].at : 0;
      var got = Math.max(0, Math.min(d - prev, r.at - prev));
      var need = r.at - prev;
      h += '<div class="row' + (d >= r.at ? " is-earned" : "") + '">' +
        '<span class="row-n">' + (ix + 1) + "</span>" +
        '<span class="row-t">' + r.n + (d >= r.at ? " ✅" : "") + "</span>" +
        '<span class="bar"><span style="width:' + pct(got, need) + '%"></span></span>' +
        '<span class="row-c">' + got + "/" + need + "</span></div>";
    });

    /* unfinished */
    h += '<div class="sec-head">◑ Lessons you opened but did not tick</div>';
    if (!unfinished.length) {
      h += '<div class="empty">Nothing half-finished. Open a lesson and it will appear here until you mark it complete.</div>';
    } else {
      h += unfinished.slice(0, 12).map(function (r) {
        return '<a class="lcard" href="#/l/' + r.id + '"><span class="lcard-id">' + r.id + "</span>" +
          '<span class="lcard-t">' + esc(r.title) + "</span>" +
          '<span class="lcard-m">Level ' + r.level + " · " + lessonPct(r.id) + "% done</span></a>";
      }).join("");
      if (unfinished.length > 12) h += '<div class="skip-more">…and ' + (unfinished.length - 12) + " more.</div>";
    }

    /* progress by level */
    h += '<div class="sec-head">📊 Progress by level</div>';
    C.levels.forEach(function (lv) {
      var ids = []; lv.modules.forEach(function (m) { m.lessons.forEach(function (x) { ids.push(x.id); }); });
      var dn = ids.filter(function (x) { return S.done[x]; }).length;
      h += '<div class="row"><span class="row-n">L' + lv.n + "</span>" +
        '<span class="row-t"><a href="#/level/' + lv.n + '">' + esc(lv.t) + "</a></span>" +
        '<span class="bar"><span style="width:' + pct(dn, ids.length) + '%"></span></span>' +
        '<span class="row-c">' + dn + "/" + ids.length + "</span></div>";
    });

    /* important + bookmarks */
    h += '<div class="two-col" style="margin-top:32px">';
    h += "<div>" + '<div class="sec-head" style="margin-top:0">⭐ Marked important</div>' + listOf(S.imp, "Nothing marked yet. Tap ⭐ Important on any lesson you want to return to.") + "</div>";
    h += "<div>" + '<div class="sec-head" style="margin-top:0">🔖 Bookmarked</div>' + listOf(S.book, "No bookmarks yet. Tap 🔖 Bookmark to save your place.") + "</div>";
    h += "</div>";

    /* notes */
    h += '<div class="sec-head">📝 My notes</div>';
    var nk = Object.keys(S.notes).filter(function (k) { return (S.notes[k] || "").trim(); });
    if (!nk.length) h += '<div class="empty">No notes yet. Your notes appear here as you write them.</div>';
    else h += nk.map(function (k) {
      var r = BYID[k]; if (!r) return "";
      return '<div class="note-item"><div class="note-head"><a href="#/l/' + k + '"><b>' + esc(r.title) + "</b></a>" +
        '<span class="lcard-id">' + k + "</span></div>" +
        '<div class="note-body">' + esc(S.notes[k]) + "</div></div>";
    }).join("");

    /* data controls */
    h += '<div class="sec-head">⚙️ Your data</div>' +
      '<div class="card card-pad"><p style="margin:0 0 12px;font-size:13.5px;color:var(--ink-2)">' +
      'All progress is saved inside this browser only. Export a backup file before clearing your browser data, or to move to another computer.</p>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
      '<button class="btn btn-ghost btn-sm" id="expBtn">⬇ Export backup</button>' +
      '<button class="btn btn-ghost btn-sm" id="impBtn">⬆ Import backup</button>' +
      '<button class="btn btn-ghost btn-sm" id="resetBtn">↺ Reset all progress</button>' +
      '<input type="file" id="impFile" accept="application/json" hidden></div></div>';

    h += "</div>";
    el("main").innerHTML = h;
    wireData();
  }

  function stat(n, label) {
    return '<div class="stat"><div class="stat-n">' + n + '</div><div class="stat-l">' + label + "</div></div>";
  }
  function listOf(map, emptyMsg) {
    var ks = Object.keys(map).filter(function (k) { return map[k] && BYID[k]; });
    if (!ks.length) return '<div class="empty">' + emptyMsg + "</div>";
    ks.sort(function (a, b) { return BYID[a].idx - BYID[b].idx; });
    return ks.map(function (k) {
      return '<a class="lcard" href="#/l/' + k + '"><span class="lcard-id">' + k + "</span>" +
        '<span class="lcard-t">' + esc(BYID[k].title) + "</span></a>";
    }).join("");
  }

  function wireData() {
    var e = el("expBtn"); if (!e) return;
    e.addEventListener("click", function () {
      var blob = new Blob([JSON.stringify(S, null, 2)], { type: "application/json" });
      var a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "local-seo-mastery-progress.json";
      a.click(); URL.revokeObjectURL(a.href);
      toast("Backup downloaded");
    });
    el("impBtn").addEventListener("click", function () { el("impFile").click(); });
    el("impFile").addEventListener("change", function (ev) {
      var f = ev.target.files[0]; if (!f) return;
      var fr = new FileReader();
      fr.onload = function () {
        try {
          var o = JSON.parse(fr.result), b = blank();
          for (var k in b) if (o[k] != null) b[k] = o[k];
          S = b; save(); render(); toast("Progress restored");
        } catch (er) { toast("That file could not be read"); }
      };
      fr.readAsText(f);
    });
    el("resetBtn").addEventListener("click", function () {
      if (confirm("Erase all progress, notes, quiz scores and bookmarks? This cannot be undone.")) {
        S = blank(); save(); render(); toast("Progress reset");
      }
    });
  }

  /* ============================================================
     UPDATES PAGE
     ============================================================ */
  function renderUpdates() {
    var items = updItems().slice().sort(function (a, b) {
      return String(b.date || "").localeCompare(String(a.date || ""));
    });
    var unread = updUnread();

    var h = '<div class="col">';
    h += '<h1 class="page-title">What has changed</h1>';
    h += '<p class="page-intro">Google changes its local products continuously. This page records what changed, what it actually means, and which lessons it affects. Lesson 10.3.1 explains how to keep up without chasing every rumour.</p>';

    /* status bar */
    h += '<div class="card card-pad upd-status"><div>' +
      "<b>" + items.length + "</b> update" + (items.length === 1 ? "" : "s") + " recorded · " +
      "<b>" + unread + "</b> unread</div>" +
      '<div class="upd-checked">Sources last checked: <b>' +
      (U.lastChecked ? esc(U.lastChecked) : "never") + "</b></div></div>";

    if (unread) {
      h += '<div style="margin:12px 0"><button class="btn btn-ghost btn-sm" id="updReadAll">Mark all as read</button></div>';
    }

    /* items */
    if (!items.length) {
      h += '<div class="empty" style="margin-top:18px"><b>Nothing recorded yet.</b><br><br>' +
        'Add the first update by editing <code>data/updates.js</code>, or set up the daily automation described below. ' +
        'Until then, check the official sources listed at the bottom of this page.</div>';
    } else {
      items.forEach(function (it) {
        var isRead = !!S.readUpd[it.id];
        var ty = UPD_TYPE[it.type] || UPD_TYPE.note;
        h += '<div class="upd' + (isRead ? " is-read" : "") + '">';
        h += '<div class="upd-head">' +
          '<span class="upd-type">' + ty[0] + " " + ty[1] + "</span>" +
          '<span class="upd-date">' + esc(it.date || "") + "</span>" +
          (isRead ? "" : '<span class="upd-new">NEW</span>') +
          (it.status === "needs-review" ? '<span class="upd-flag">unverified</span>' : "") +
          (it.status === "example" ? '<span class="upd-flag">example</span>' : "") +
          "</div>";
        h += '<div class="upd-title">' + inline(it.title || "") + "</div>";
        if (it.summary) h += '<p class="upd-p">' + inline(it.summary) + "</p>";
        if (it.whatItMeans) h += '<div class="upd-block"><b>What it means</b>' + inline(it.whatItMeans) + "</div>";
        if (it.action) h += '<div class="upd-block upd-action"><b>What to do</b>' + inline(it.action) + "</div>";

        if (it.affects && it.affects.length) {
          h += '<div class="upd-affects"><b>Affects these lessons:</b> ' +
            it.affects.map(function (lid) {
              var r = BYID[lid];
              return r ? '<a href="#/l/' + lid + '">' + lid + " " + esc(r.title) + "</a>" : esc(lid);
            }).join(" · ") + "</div>";
        }

        h += '<div class="upd-foot">';
        if (it.source) h += '<span class="upd-src">Source: ' + (it.url ? '<a href="' + esc(it.url) + '" target="_blank" rel="noopener">' + esc(it.source) + "</a>" : esc(it.source)) + "</span>";
        h += '<button class="act btn-sm" data-upd="' + esc(it.id) + '">' +
          (isRead ? "↩ Mark unread" : "✓ Mark as read") + "</button>";
        h += "</div></div>";
      });
    }

    /* sources */
    h += '<div class="sec-head">🔎 Sources to check</div>';
    h += '<p style="font-size:13.5px;color:var(--ink-2);margin-top:0">Official sources first. Third-party sources are faster but report unconfirmed changes — treat early claims with caution, as lesson 8.4.3 explains.</p>';
    (U.sources || []).forEach(function (s) {
      h += '<div class="src-row">' +
        '<span class="src-badge' + (s.official ? " off" : "") + '">' + (s.official ? "OFFICIAL" : "3rd party") + "</span>" +
        '<span class="src-body"><a href="' + esc(s.url) + '" target="_blank" rel="noopener"><b>' + esc(s.name) + "</b></a>" +
        (s.note ? '<span class="src-note">' + esc(s.note) + "</span>" : "") + "</span></div>";
    });

    /* how to add */
    h += '<div class="sec-head">➕ How to add an update</div>';
    h += '<div class="card card-pad" style="font-size:14px;line-height:1.7">' +
      "<p style=\"margin-top:0\"><b>By hand, two minutes.</b> Open <code>data/updates.js</code>, copy an existing item block, and change the values. Save and refresh. The fields are:</p>" +
      '<ul style="margin:0 0 14px;padding-left:20px">' +
      "<li><code>date</code> — YYYY-MM-DD</li>" +
      "<li><code>title</code> — one short line</li>" +
      "<li><code>type</code> — feature, policy, interface, algorithm, deprecation or note</li>" +
      "<li><code>summary</code> — what changed, in plain words</li>" +
      "<li><code>whatItMeans</code> — what it means for a local business</li>" +
      "<li><code>action</code> — what to actually do about it</li>" +
      "<li><code>affects</code> — lesson IDs, e.g. [\"3.2.6\", \"9.2.1\"]</li>" +
      "<li><code>source</code> and <code>url</code> — where you found it</li>" +
      "</ul>" +
      "<p><b>Automatically, daily.</b> The file <code>.github/workflows/local-seo-updates.yml</code> checks the official feeds every day and adds anything local-related, flagged <i>unverified</i> until you confirm it. It only runs once the project is on GitHub.</p>" +
      "<p style=\"margin-bottom:0\">See <code>UPDATES-GUIDE.md</code> for the full instructions.</p></div>";

    h += "</div>";
    el("main").innerHTML = h;

    var all = el("updReadAll");
    if (all) all.addEventListener("click", function () {
      updItems().forEach(function (i) { S.readUpd[i.id] = true; });
      save(); renderUpdates(); renderSidebarTop(); toast("All updates marked as read");
    });
    el("main").querySelectorAll("[data-upd]").forEach(function (b) {
      b.addEventListener("click", function () {
        var id = b.dataset.upd;
        if (S.readUpd[id]) delete S.readUpd[id]; else S.readUpd[id] = true;
        save(); renderUpdates(); renderSidebarTop();
      });
    });
    window.scrollTo(0, 0);
  }

  /* ============================================================
     LEVEL PAGE
     ============================================================ */
  function renderLevel(nStr) {
    var lv = C.levels.filter(function (x) { return String(x.n) === String(nStr); })[0];
    if (!lv) return renderHome();
    var ids = []; lv.modules.forEach(function (m) { m.lessons.forEach(function (x) { ids.push(x.id); }); });
    var dn = ids.filter(function (x) { return S.done[x]; }).length;

    var h = '<div class="col">';
    h += '<div class="crumbs"><a href="#/home">Dashboard</a> › Level ' + lv.n + "</div>";
    h += '<h1 class="page-title">' + esc(lv.t) + "</h1>";
    h += '<p class="page-intro">' + esc(lv.d || "") + "</p>";
    h += '<div class="card card-pad" style="margin-bottom:24px"><div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">' +
      "<div><b>" + dn + " of " + ids.length + "</b> lessons complete in this level</div>" +
      '<div class="lcard-id">' + pct(dn, ids.length) + "%</div></div>" +
      '<div class="lp-bar"><span style="width:' + pct(dn, ids.length) + '%"></span></div></div>';

    lv.modules.forEach(function (md) {
      var mids = md.lessons.map(function (x) { return x.id; });
      var mdn = mids.filter(function (x) { return S.done[x]; }).length;
      h += '<div class="mod-card"><h4>Module ' + lv.n + "." + md.n + " — " + esc(md.t) + "</h4>" +
        "<p>" + esc(md.d || "") + "</p>" +
        '<div class="lcard-id" style="margin-bottom:8px">' + mdn + "/" + mids.length + " complete</div>";
      md.lessons.forEach(function (ls) {
        h += '<a class="lcard" href="#/l/' + ls.id + '"><span class="lcard-id">' + ls.id + "</span>" +
          '<span class="lcard-t">' + esc(ls.t) + "</span>" +
          '<span class="lcard-m">' + (S.done[ls.id] ? "✅" : (lessonTouched(ls.id) ? "◑" : "○")) + "</span></a>";
      });
      h += "</div>";
    });
    h += "</div>";
    el("main").innerHTML = h;
  }

  /* ============================================================
     LESSON PAGE
     ============================================================ */
  function renderLesson(id) {
    var rec = BYID[id];
    if (!rec) { el("main").innerHTML = '<div class="col"><h1 class="page-title">Lesson not found</h1><p class="page-intro">Go back to the <a href="#/home">dashboard</a>.</p></div>'; return; }
    var d = L[id];
    if (!d) d = { t: rec.title, why: "", body: ["p: This lesson is being written."], take: [], self: [], quiz: [], ex: null, chal: null };

    S.opened[id] = S.opened[id] || Date.now();
    S.last = id; save();

    var h = '<div class="col">';

    /* breadcrumbs */
    h += '<div class="crumbs"><a href="#/home">Dashboard</a> › <a href="#/level/' + rec.level + '">L' + rec.level + " " + esc(rec.levelTitle) +
      "</a> › M" + rec.module + " " + esc(rec.moduleTitle) + " › " + id + "</div>";

    h += '<h1 class="lesson-h">' + esc(d.t || rec.title) + "</h1>";
    if (d.why) h += '<p class="lesson-sub">' + inline(d.why) + "</p>";

    /* ---- update alert for this lesson ---- */
    var lessonUpd = updForLesson(id);
    if (lessonUpd.length) {
      h += '<div class="upd-alert"><div class="upd-alert-t">🆕 ' + lessonUpd.length +
        " update" + (lessonUpd.length > 1 ? "s" : "") + " affect" + (lessonUpd.length > 1 ? "" : "s") +
        " this lesson</div>";
      h += "<ul class=\"skip-list\">" + lessonUpd.map(function (u) {
        return "<li><b>" + esc(u.date || "") + "</b> — " + inline(u.title || "") + "</li>";
      }).join("") + "</ul>";
      h += '<div class="skip-actions"><a class="btn btn-ghost btn-sm" href="#/updates">Read the updates →</a></div></div>';
    }

    /* ---- skipped-lesson warning ---- */
    var missed = FLAT.slice(0, rec.idx).filter(function (r) { return !S.done[r.id]; });
    if (missed.length) {
      h += '<div class="skip-warn"><div class="skip-title">⚠️ You have skipped ' + missed.length +
        " earlier lesson" + (missed.length > 1 ? "s" : "") + "</div>" +
        '<div class="skip-text">This course builds step by step. The lessons below come before this one and you have not marked them complete yet. You can keep reading, but going back first will make this lesson much easier to understand.</div>' +
        '<ul class="skip-list">' +
        missed.slice(0, 10).map(function (r) {
          return "<li><a href=\"#/l/" + r.id + "\">" + r.id + " — " + esc(r.title) + "</a></li>";
        }).join("") + "</ul>";
      if (missed.length > 10) h += '<div class="skip-more">…and ' + (missed.length - 10) + " more earlier lesson" + (missed.length - 10 > 1 ? "s" : "") + ".</div>";
      h += '<div class="skip-actions">' +
        '<a class="btn btn-ghost btn-sm" href="#/l/' + missed[0].id + '">← Go to the first one I missed</a>' +
        '<button class="btn btn-ghost btn-sm" id="ignoreSkip">Continue here anyway</button></div>';
      h += "</div>";
    }

    /* ---- action bar ---- */
    h += '<div class="actions">' +
      actBtn("done", S.done[id], "✅ Complete lesson", "✅ Completed", "on") +
      actBtn("imp", S.imp[id], "⭐ Mark as important", "⭐ Important", "on-star") +
      actBtn("book", S.book[id], "🔖 Bookmark", "🔖 Bookmarked", "on-book") +
      '<button class="act' + ((S.notes[id] || "").trim() ? " on-note" : "") + '" data-jump="notesPanel">📝 My notes</button>' +
      '<button class="act" data-jump="quizPanel">🧠 Quiz</button>' +
      '<button class="act" data-jump="exPanel">💪 Exercise</button>' +
      '<button class="act" data-jump="chalPanel">🎯 Challenge</button>' +
      "</div>";

    /* ---- body ---- */
    h += '<div class="prose">' + renderBlocks(d.body) + "</div>";

    /* ---- key takeaways ---- */
    if (d.take && d.take.length) {
      h += panel("📌", "Key takeaways", "", '<ul class="take-list">' +
        d.take.map(function (t) { return "<li>" + inline(t) + "</li>"; }).join("") + "</ul>");
    }

    /* ---- self assessment ---- */
    if (d.self && d.self.length) {
      var sv = S.self[id] || {};
      var sdone = d.self.filter(function (_, ix) { return sv[ix]; }).length;
      h += panel("☑️", "Self-assessment", sdone + "/" + d.self.length + " ticked",
        '<p style="margin-top:0;font-size:13.5px;color:var(--ink-2)">Be honest. Tick only what you could actually do right now without looking it up.</p>' +
        '<ul class="check-list" id="selfList">' +
        d.self.map(function (t, ix) {
          return "<li><label><input type=\"checkbox\" data-self=\"" + ix + "\"" + (sv[ix] ? " checked" : "") +
            "><span>" + inline(t) + "</span></label></li>";
        }).join("") + "</ul>");
    }

    /* ---- notes ---- */
    h += panel("📝", "My notes", "saved in this browser",
      '<textarea class="notes-area" id="noteBox" placeholder="Write what you want to remember, questions you still have, or how this applies to your own business…">' +
      esc(S.notes[id] || "") + "</textarea>" +
      '<div class="notes-foot"><span id="noteStatus">Your notes save automatically.</span>' +
      '<button class="btn btn-ghost btn-sm" id="clearNote">Clear</button></div>', "notesPanel");

    /* ---- quiz ---- */
    if (d.quiz && d.quiz.length) {
      var qs = S.quiz[id] || null;
      h += panel("🧠", "Quiz", (qs && qs.submitted ? "scored " + qs.score + "/" + d.quiz.length : d.quiz.length + " questions"),
        '<div id="quizBody"></div>', "quizPanel");
    }

    /* ---- exercise ---- */
    if (d.ex) {
      h += panel("💪", "Practical exercise", S.ex[id] ? "done ✅" : (d.ex.time || ""),
        '<div class="task-title">' + inline(d.ex.title) + "</div>" +
        (d.ex.time ? '<div class="task-meta">⏱ ' + esc(d.ex.time) + "</div>" : "") +
        (d.ex.intro ? "<p>" + inline(d.ex.intro) + "</p>" : "") +
        '<ol class="task-steps">' + (d.ex.steps || []).map(function (s) { return "<li>" + inline(s) + "</li>"; }).join("") + "</ol>" +
        (d.ex.deliver ? '<div class="deliver"><b>What you should end up with</b>' + inline(d.ex.deliver) + "</div>" : "") +
        '<button class="act' + (S.ex[id] ? " on" : "") + '" id="exBtn">' + (S.ex[id] ? "✅ Exercise completed" : "Mark exercise as done") + "</button>",
        "exPanel");
    }

    /* ---- challenge ---- */
    if (d.chal) {
      h += panel("🎯", "Expert challenge", S.chal[id] ? "done ✅" : "harder — optional but this is where mastery comes from",
        '<div class="task-title">' + inline(d.chal.title) + "</div>" +
        "<p>" + inline(d.chal.brief) + "</p>" +
        (d.chal.success && d.chal.success.length ?
          '<div class="deliver"><b>You have succeeded when</b><ul style="margin:6px 0 0;padding-left:18px">' +
          d.chal.success.map(function (s) { return "<li>" + inline(s) + "</li>"; }).join("") + "</ul></div>" : "") +
        '<button class="act' + (S.chal[id] ? " on" : "") + '" id="chalBtn">' + (S.chal[id] ? "✅ Challenge completed" : "Mark challenge as done") + "</button>",
        "chalPanel");
    }

    /* ---- progress tracking ---- */
    var parts = lessonParts(id), lp = lessonPct(id);
    h += '<div class="lesson-prog"><div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">' +
      "<b>📊 Progress on this lesson</b><span class=\"lcard-id\">" + lp + "% complete</span></div>" +
      '<div class="lp-bar"><span style="width:' + lp + '%"></span></div>' +
      '<div class="lp-grid">' +
      lpItem(parts.read, "📖 Opened") +
      lpItem(parts.self, "☑️ Self-assessed") +
      lpItem(parts.quiz, "🧠 Quiz taken") +
      lpItem(parts.ex, "💪 Exercise") +
      lpItem(parts.chal, "🎯 Challenge") +
      lpItem(parts.done, "✅ Marked done") +
      "</div></div>";

    /* ---- prev / next ---- */
    var prev = FLAT[rec.idx - 1], next = FLAT[rec.idx + 1];
    h += '<div class="navrow">';
    h += prev ? '<a class="nav-btn" href="#/l/' + prev.id + '"><small>← Previous</small><b>' + esc(prev.title) + "</b></a>"
              : '<span class="nav-btn" style="opacity:.4"><small>Start of course</small><b>This is lesson one</b></span>';
    h += next ? '<a class="nav-btn next" href="#/l/' + next.id + '"><small>Next →</small><b>' + esc(next.title) + "</b></a>"
              : '<a class="nav-btn next" href="#/home"><small>Finish →</small><b>Back to dashboard</b></a>';
    h += "</div></div>";

    el("main").innerHTML = h;
    wireLesson(id, d);
    window.scrollTo(0, 0);
  }

  function actBtn(key, on, offLabel, onLabel, cls) {
    return '<button class="act' + (on ? " " + cls : "") + '" data-toggle="' + key + '">' +
      (on ? onLabel : offLabel) + "</button>";
  }
  function lpItem(on, label) {
    return '<div class="lp-item' + (on ? " on" : "") + '">' + (on ? "✓ " : "") + label + "</div>";
  }
  function panel(icon, title, sub, inner, id) {
    return '<div class="panel"' + (id ? ' id="' + id + '"' : "") + '><div class="panel-h">' + icon + " " + title +
      (sub ? '<span class="ph-sub">' + esc(sub) + "</span>" : "") + '</div><div class="panel-b">' + inner + "</div></div>";
  }

  function wireLesson(id, d) {
    var main = el("main");

    main.querySelectorAll("[data-toggle]").forEach(function (b) {
      b.addEventListener("click", function () {
        var k = b.dataset.toggle;
        var map = k === "done" ? S.done : k === "imp" ? S.imp : S.book;
        if (map[id]) { delete map[id]; } else { map[id] = true; }
        save();
        toast(k === "done" ? (S.done[id] ? "Lesson marked complete ✅" : "Marked as not complete")
          : k === "imp" ? (S.imp[id] ? "Marked important ⭐" : "Removed from important")
          : (S.book[id] ? "Bookmarked 🔖" : "Bookmark removed"));
        renderLesson(id); renderSidebarTop(); renderTree();
      });
    });

    main.querySelectorAll("[data-jump]").forEach(function (b) {
      b.addEventListener("click", function () {
        var t = el(b.dataset.jump);
        if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    var ign = el("ignoreSkip");
    if (ign) ign.addEventListener("click", function () {
      var w = ign.closest(".skip-warn"); if (w) w.hidden = true;
    });

    // self assessment
    main.querySelectorAll("[data-self]").forEach(function (cb) {
      cb.addEventListener("change", function () {
        S.self[id] = S.self[id] || {};
        S.self[id][cb.dataset.self] = cb.checked;
        save(); renderLesson(id); renderSidebarTop(); renderTree();
      });
    });

    // notes
    var nb = el("noteBox");
    if (nb) {
      var t = null;
      nb.addEventListener("input", function () {
        clearTimeout(t);
        el("noteStatus").textContent = "Saving…";
        t = setTimeout(function () {
          S.notes[id] = nb.value; save();
          el("noteStatus").textContent = "Saved ✓";
          renderTree();
        }, 400);
      });
      el("clearNote").addEventListener("click", function () {
        nb.value = ""; delete S.notes[id]; save();
        el("noteStatus").textContent = "Cleared";
        renderTree();
      });
    }

    // exercise / challenge
    var eb = el("exBtn");
    if (eb) eb.addEventListener("click", function () {
      if (S.ex[id]) delete S.ex[id]; else S.ex[id] = true;
      save(); toast(S.ex[id] ? "Exercise done 💪" : "Exercise unmarked");
      renderLesson(id); renderSidebarTop();
    });
    var cb2 = el("chalBtn");
    if (cb2) cb2.addEventListener("click", function () {
      if (S.chal[id]) delete S.chal[id]; else S.chal[id] = true;
      save(); toast(S.chal[id] ? "Challenge done 🎯" : "Challenge unmarked");
      renderLesson(id); renderSidebarTop();
    });

    if (d.quiz && d.quiz.length) renderQuiz(id, d.quiz);
  }

  /* ---------- quiz ---------- */
  function renderQuiz(id, quiz) {
    var host = el("quizBody"); if (!host) return;
    var st = S.quiz[id] || { answers: {}, submitted: false, score: 0 };

    function draw() {
      var h = "";
      quiz.forEach(function (q, qi) {
        var chosen = st.answers[qi];
        h += '<div class="q"><div class="q-t"><span class="q-n">Q' + (qi + 1) + "</span>" + inline(q.q) + "</div>";
        q.a.forEach(function (opt, oi) {
          var cls = "";
          if (st.submitted) {
            if (oi === q.c) cls = " correct";
            else if (chosen === oi) cls = " wrong";
          }
          h += '<label class="opt' + cls + '"><input type="radio" name="q' + qi + '" value="' + oi + '"' +
            (chosen === oi ? " checked" : "") + (st.submitted ? " disabled" : "") + ">" +
            "<span>" + inline(opt) + "</span></label>";
        });
        if (st.submitted) {
          h += '<div class="q-fb"><b>' + (chosen === q.c ? "Correct." : "Not quite.") + "</b> " + inline(q.why) + "</div>";
        }
        h += "</div>";
      });
      h += '<div class="quiz-foot">';
      if (st.submitted) {
        var good = st.score >= Math.ceil(quiz.length * 0.7);
        h += '<span class="score ' + (good ? "good" : "bad") + '">Score: ' + st.score + "/" + quiz.length + "</span>" +
          "<span style=\"font-size:13px;color:var(--ink-2)\">" +
          (good ? "Good — you understood this lesson." : "Read the explanations above, then try again.") + "</span>" +
          '<button class="btn btn-ghost btn-sm" id="retryQuiz">Try again</button>';
      } else {
        h += '<button class="btn btn-sm" id="submitQuiz">Check my answers</button>' +
          '<span style="font-size:13px;color:var(--ink-3)">Answer all ' + quiz.length + " questions first.</span>";
      }
      h += "</div>";
      host.innerHTML = h;

      host.querySelectorAll('input[type="radio"]').forEach(function (r) {
        r.addEventListener("change", function () {
          st.answers[+r.name.slice(1)] = +r.value;
          S.quiz[id] = st; save();
        });
      });
      var sb = el("submitQuiz");
      if (sb) sb.addEventListener("click", function () {
        if (Object.keys(st.answers).length < quiz.length) { toast("Please answer every question first"); return; }
        st.score = quiz.filter(function (q, qi) { return st.answers[qi] === q.c; }).length;
        st.submitted = true; S.quiz[id] = st; save();
        draw(); renderSidebarTop(); renderLessonProgressOnly(id);
        toast("Scored " + st.score + "/" + quiz.length);
      });
      var rb = el("retryQuiz");
      if (rb) rb.addEventListener("click", function () {
        st = { answers: {}, submitted: false, score: 0 }; S.quiz[id] = st; save(); draw();
      });
    }
    draw();
  }
  function renderLessonProgressOnly(id) {
    // cheap refresh of the progress block after a quiz submit
    var box = document.querySelector(".lesson-prog");
    if (!box) return;
    var parts = lessonParts(id), lp = lessonPct(id);
    box.querySelector(".lcard-id").textContent = lp + "% complete";
    box.querySelector(".lp-bar span").style.width = lp + "%";
    var items = box.querySelectorAll(".lp-item");
    var order = [parts.read, parts.self, parts.quiz, parts.ex, parts.chal, parts.done];
    var labels = ["📖 Opened", "☑️ Self-assessed", "🧠 Quiz taken", "💪 Exercise", "🎯 Challenge", "✅ Marked done"];
    items.forEach(function (it, ix) {
      it.className = "lp-item" + (order[ix] ? " on" : "");
      it.textContent = (order[ix] ? "✓ " : "") + labels[ix];
    });
  }

  /* ============================================================
     SEARCH
     ============================================================ */
  function wireSearch() {
    var inp = el("searchInput"), box = el("searchResults");
    function run() {
      var q = inp.value.trim().toLowerCase();
      if (q.length < 2) { box.hidden = true; return; }
      var hits = FLAT.filter(function (r) {
        if (r.title.toLowerCase().indexOf(q) > -1) return true;
        if (r.id.indexOf(q) === 0) return true;
        var d = L[r.id];
        if (d && d.why && d.why.toLowerCase().indexOf(q) > -1) return true;
        return false;
      }).slice(0, 40);
      box.innerHTML = hits.length
        ? hits.map(function (r) {
            return '<a class="sr-item" href="#/l/' + r.id + '"><span class="sr-id">' + r.id + "</span>" + esc(r.title) + "</a>";
          }).join("")
        : '<div class="sr-empty">No lesson matches “' + esc(q) + '”.</div>';
      box.hidden = false;
    }
    inp.addEventListener("input", run);
    inp.addEventListener("focus", run);
    document.addEventListener("click", function (e) {
      if (!e.target.closest(".search-wrap")) box.hidden = true;
    });
    box.addEventListener("click", function (e) {
      if (e.target.closest(".sr-item")) { box.hidden = true; inp.value = ""; }
    });
  }

  /* ============================================================
     ROUTER
     ============================================================ */
  function render() {
    var h = location.hash || "#/home";
    if (/^#\/l\//.test(h)) renderLesson(h.replace("#/l/", ""));
    else if (/^#\/level\//.test(h)) renderLevel(h.replace("#/level/", ""));
    else if (/^#\/updates/.test(h)) renderUpdates();
    else renderHome();
    renderSidebarTop();
    renderTree();
    var sb = el("sidebar"); if (sb) sb.classList.remove("open");
  }

  /* ---------- boot ---------- */
  function boot() {
    var mods = 0;
    C.levels.forEach(function (l) { mods += l.modules.length; });
    el("brandMeta").textContent = TOTAL + " lessons · " + mods + " modules · " + C.levels.length + " levels";

    el("filterChips").addEventListener("click", function (e) {
      var b = e.target.closest(".chip"); if (!b) return;
      filter = b.dataset.filter;
      el("filterChips").querySelectorAll(".chip").forEach(function (c) { c.classList.toggle("is-on", c === b); });
      openLv = {}; openMd = {};
      renderTree();
    });

    // mobile menu button
    var mb = document.createElement("button");
    mb.className = "menu-btn"; mb.textContent = "☰"; mb.title = "Menu";
    mb.addEventListener("click", function () { el("sidebar").classList.toggle("open"); });
    document.querySelector(".topbar-right").prepend(mb);

    // notification bell
    var bellBtn = el("bellBtn"), bellPanel = el("bellPanel");
    if (bellBtn) {
      bellBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        bellPanel.hidden = !bellPanel.hidden;
        if (!bellPanel.hidden) { el("searchResults").hidden = true; renderBell(); }
      });
      document.addEventListener("click", function (e) {
        if (!e.target.closest(".bell-wrap")) bellPanel.hidden = true;
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") bellPanel.hidden = true;
      });
    }
    renderBell();
    refreshUpdates();
    // check again if the tab is left open all day
    setInterval(refreshUpdates, 3 * 60 * 60 * 1000);

    wireSearch();
    window.addEventListener("hashchange", render);
    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
