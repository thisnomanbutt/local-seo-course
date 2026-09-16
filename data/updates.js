/* Local SEO Mastery — updates feed
   ------------------------------------------------------------------
   This file is VALID JSON after the assignment, so it can be read and
   rewritten automatically by the GitHub Action in
   .github/workflows/local-seo-updates.yml

   To add an update by hand, copy one item block, change the values,
   and save. See UPDATES-GUIDE.md for the two-minute version.
   ------------------------------------------------------------------ */
window.LSEO_UPDATES = {
  "lastChecked": null,

  "sources": [
    {
      "name": "Google Business Profile Help",
      "url": "https://support.google.com/business",
      "official": true,
      "note": "Product help and release notes. The primary source for feature and policy changes."
    },
    {
      "name": "Google Business Profile — guidelines",
      "url": "https://support.google.com/business/answer/3038177",
      "official": true,
      "note": "The representation guidelines. Read these properly once a year — lesson 10.3.1."
    },
    {
      "name": "Google Search Central Blog",
      "url": "https://developers.google.com/search/blog",
      "official": true,
      "rss": "https://developers.google.com/search/blog/feed.xml",
      "note": "Announcements including ranking and local changes. Has an RSS feed, so it can be checked automatically."
    },
    {
      "name": "Google Search Status Dashboard",
      "url": "https://status.search.google.com/",
      "official": true,
      "note": "Confirms live incidents and ongoing ranking updates. Check this first when many clients move at once."
    },
    {
      "name": "Google Business Profile Help Community",
      "url": "https://support.google.com/business/community",
      "official": true,
      "note": "Product experts and Google staff post announcements and confirm behaviour here."
    },
    {
      "name": "Search Engine Roundtable",
      "url": "https://www.seroundtable.com/",
      "official": false,
      "rss": "https://www.seroundtable.com/index.rdf",
      "note": "Third party. Fast on local changes. Treat early reports as unconfirmed — lesson 8.4.3."
    },
    {
      "name": "Search Engine Land",
      "url": "https://searchengineland.com/library/platforms/google/google-business-profile",
      "official": false,
      "rss": "https://searchengineland.com/feed",
      "note": "Third party. Usually slower but more measured than immediate forum reports."
    }
  ],

  "items": [

    /* ----------------------------------------------------------------
       EXAMPLE — delete this entry once you add a real one.
       It exists so you can see the shape of an item.
       ---------------------------------------------------------------- */
    {
      "id": "example-entry",
      "date": "2026-09-16",
      "title": "This is an example entry — replace it with a real update",
      "source": "Course author",
      "url": "",
      "type": "note",
      "status": "example",
      "summary": "Nothing has been recorded here yet. This entry shows you the format so you can add the first real one.",
      "whatItMeans": "Each entry has a plain-English summary, what it actually means for a local business, and what you should do about it. Keep all three short.",
      "action": "Open data/updates.js, copy this block, fill in a real update, and delete this example.",
      "affects": []
    }

  ]
};
