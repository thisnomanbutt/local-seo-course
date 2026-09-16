# Keeping the course current

Google changes its local products constantly. This is how the course stays up to date.

---

## The two-minute manual method

1. Open `data/updates.js`
2. Copy an existing item block
3. Fill it in
4. Save, refresh the browser

```js
{
  "id": "2026-09-16-short-unique-name",
  "date": "2026-09-16",
  "title": "One short line saying what changed",
  "source": "Google Business Profile Help",
  "url": "https://support.google.com/business/...",
  "type": "feature",
  "status": "confirmed",
  "summary": "What changed, in plain words. Two or three sentences.",
  "whatItMeans": "What this actually means for a local business.",
  "action": "What someone should do about it, specifically.",
  "affects": ["3.2.6", "9.2.1"]
}
```

### The fields

| Field | Notes |
|---|---|
| `id` | Anything unique. Date + a few words works well. |
| `date` | `YYYY-MM-DD` |
| `type` | `feature` · `policy` · `interface` · `algorithm` · `deprecation` · `note` |
| `status` | `confirmed` · `needs-review` · `example` |
| `affects` | Lesson IDs. These become clickable links, **and** an alert appears on those lessons. |

### The `affects` field is the useful one

Put lesson IDs in it and two things happen:

- The update links straight to those lessons
- Those lessons show an amber **"1 update affects this lesson"** banner at the top

So a reader working through lesson 3.2.6 is told that something has changed since the lesson was written. That is what keeps a static course from going stale.

---

## The automatic daily method

`.github/workflows/local-seo-updates.yml` runs every day at 07:00 UTC once the project is on GitHub.

It reads the RSS feeds listed in `data/updates.js`, keeps anything whose title looks local-related, and adds it flagged **`needs-review`**. It never touches entries you wrote yourself.

### Turning it on

1. Push the project to GitHub (the `.github` folder must be included)
2. Repo → **Settings** → **Actions** → **General** → under *Workflow permissions* choose **Read and write permissions** → Save
3. Repo → **Actions** tab → select **Check for Local SEO updates** → **Run workflow** to test it immediately

### Your job afterwards

The Action finds candidates. It cannot judge them. Once a week:

1. Open the Updates page and look for entries flagged **unverified**
2. Read the actual source
3. Rewrite the summary in plain English, fill in `whatItMeans` and `action`, add the affected lesson IDs
4. Change `status` to `"confirmed"`
5. Delete anything irrelevant

This is deliberate. Auto-publishing unread third-party claims as fact is exactly what lesson 8.4.3 warns against — early reports of Google changes are frequently wrong.

### Tuning the filter

In `.github/scripts/fetch-updates.mjs`:

- `KEYWORDS` — widen or narrow what counts as local-related
- `LOOKBACK_DAYS` — how far back each run looks (default 14)

To add a feed, add a source with an `rss` field in `data/updates.js`.

---

## What the automation cannot do

Be clear about this, because it affects how much you can rely on it.

**Google Business Profile help pages have no RSS feed.** The Action can watch the Search Central blog and third-party feeds, but the GBP help centre and the guidelines pages have to be checked by a person. That is why lesson 10.3.1 sets a fifteen-minute weekly habit and an annual full read of the guidelines.

**Third-party feeds report rumours.** Search Engine Roundtable is fast and frequently reports unconfirmed community observations. That is useful as an early signal and unreliable as fact.

**Nothing fetches at page load.** The page reads a local file, so it works offline and from `file://`. The refreshing happens in the GitHub Action, not in the browser. This is deliberate — browsers block a static page from reading external feeds directly.

---

## Recommended rhythm

| When | What |
|---|---|
| Daily | The Action runs by itself |
| Weekly, 15 min | Review unverified entries, confirm or delete. Check the GBP help centre manually. |
| Monthly | Check the Search Status Dashboard if several businesses moved at once |
| Annually | Read the representation guidelines properly, end to end |

---

## Sources the course ships with

**Official**

- Google Business Profile Help
- Google Business Profile representation guidelines
- Google Search Central Blog *(RSS)*
- Google Search Status Dashboard
- Google Business Profile Help Community

**Third party — treat as unconfirmed**

- Search Engine Roundtable *(RSS)*
- Search Engine Land *(RSS)*

Lesson 10.3.1 explains why a short list of reliable sources beats following twenty.
