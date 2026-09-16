/* ------------------------------------------------------------------
   Local SEO Mastery — daily update fetcher
   Run by .github/workflows/local-seo-updates.yml

   What it does:
     1. Reads data/updates.js
     2. Fetches the RSS feeds listed in that file's "sources"
     3. Keeps only items whose title looks local-SEO related
     4. Adds anything new, flagged "needs-review"
     5. Updates "lastChecked" and writes the file back

   It never deletes or edits an item you have already written.
   Everything it adds is marked unverified until you confirm it.
   ------------------------------------------------------------------ */

import { readFile, writeFile } from "node:fs/promises";

const FILE = "data/updates.js";     // embedded fallback (works offline / file://)
const JSON_FILE = "data/updates.json"; // fetched live by the page when hosted

/* Titles must contain one of these to be kept.
   Edit this list to make the filter wider or narrower. */
const KEYWORDS = [
  "local", "business profile", "google business", "my business", "gbp",
  "maps", "local pack", "storefront", "store", "location", "listing",
  "review", "local search", "merchant", "nearby"
];

/* How many days of history to consider on each run. */
const LOOKBACK_DAYS = 14;

/* ---------- read the existing file ---------- */
function parseDataFile(raw) {
  // strip /* block comments */ only — line comments are unsafe because URLs contain //
  const noComments = raw.replace(/\/\*[\s\S]*?\*\//g, "");
  const start = noComments.indexOf("{");
  const end = noComments.lastIndexOf("}");
  if (start === -1 || end === -1) throw new Error("Could not locate the data object in " + FILE);
  return JSON.parse(noComments.slice(start, end + 1));
}

/* ---------- very small RSS / Atom reader ---------- */
function tag(block, name) {
  const m = block.match(new RegExp("<" + name + "[^>]*>([\\s\\S]*?)<\\/" + name + ">", "i"));
  if (!m) return "";
  return m[1]
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, " ")
    .trim();
}

function linkOf(block) {
  const direct = tag(block, "link");
  if (direct) return direct;
  const href = block.match(/<link[^>]*href="([^"]+)"/i);
  return href ? href[1] : "";
}

function parseFeed(xml) {
  const blocks = xml.match(/<(item|entry)[\s\S]*?<\/\1>/gi) || [];
  return blocks.map(b => ({
    title: tag(b, "title"),
    url: linkOf(b),
    date: tag(b, "pubDate") || tag(b, "updated") || tag(b, "published") || tag(b, "dc:date")
  })).filter(i => i.title);
}

/* ---------- helpers ---------- */
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60);
const isoDate = d => { const t = new Date(d); return isNaN(t) ? null : t.toISOString().slice(0, 10); };
const relevant = t => { const l = t.toLowerCase(); return KEYWORDS.some(k => l.includes(k)); };

/* ---------- main ---------- */
const raw = await readFile(FILE, "utf8");
const data = parseDataFile(raw);
data.items ||= [];
data.sources ||= [];

const known = new Set(data.items.map(i => i.id));
const cutoff = new Date(Date.now() - LOOKBACK_DAYS * 86400000);
const added = [];

for (const src of data.sources) {
  if (!src.rss) continue;
  let xml;
  try {
    const res = await fetch(src.rss, {
      headers: { "user-agent": "local-seo-mastery-updates/1.0" },
      signal: AbortSignal.timeout(20000)
    });
    if (!res.ok) { console.log(`skip ${src.name}: HTTP ${res.status}`); continue; }
    xml = await res.text();
  } catch (e) {
    console.log(`skip ${src.name}: ${e.message}`);
    continue;
  }

  for (const it of parseFeed(xml)) {
    if (!relevant(it.title)) continue;
    const date = isoDate(it.date);
    if (!date || new Date(date) < cutoff) continue;

    const id = `${date}-${slug(it.title)}`;
    if (known.has(id)) continue;
    known.add(id);

    added.push({
      id,
      date,
      title: it.title,
      source: src.name,
      url: it.url,
      type: src.official ? "feature" : "note",
      status: "needs-review",
      summary: "Picked up automatically from " + src.name + ". Read the source, then rewrite this summary in plain English and remove the unverified flag.",
      whatItMeans: "",
      action: "",
      affects: []
    });
  }
}

/* newest first, then whatever was already there */
data.items = [...added, ...data.items];
data.lastChecked = new Date().toISOString().slice(0, 10);

const header = `/* Local SEO Mastery — updates feed
   Valid JSON after the assignment so it can be read and rewritten by
   .github/workflows/local-seo-updates.yml
   Items marked "needs-review" were added automatically. Read the source,
   rewrite the summary in plain English, add whatItMeans / action / affects,
   then change status to "confirmed".
   Last automated run: ${data.lastChecked} */
`;

const body = JSON.stringify(data, null, 2);

// the page fetches this when hosted over http(s)
await writeFile(JSON_FILE, body + "\n", "utf8");

// and falls back to this when offline or opened from file://
await writeFile(FILE, header + "window.LSEO_UPDATES = " + body + ";\n", "utf8");

console.log(`added ${added.length} new item(s); ${data.items.length} total`);
if (added.length) for (const a of added) console.log(` + ${a.date}  ${a.title}`);
