/* Level 4 · Module 2 — Site Architecture for Local */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"4.2.1": {
  t: "One location, many services: structuring pages",
  why: "The most common local website mistake is cramming every service onto one page. Fixing the structure often produces more improvement than any amount of rewriting.",
  body: [
    "h: The one-page problem",
    "p: A typical small business website has a homepage listing twelve services in a bullet list, an about page, and a contact page. Every service gets one line. Then the owner wonders why they do not rank for any specific service.",
    "p: The reason is simple: **there is no page about that service.** Google has nothing specific to rank, and a customer searching for that specific thing finds nothing that addresses it.",

    "h: The rule",
    "box: **One page per service you genuinely want customers for.**",
    "p: Not one page per keyword variation. Not one page for every possible thing you could do. One page for each service that matters to the business and that people search for separately.",

    "h: How to decide what deserves a page",
    "n: **Does anyone search for it separately?** If people search 'boiler repair' distinctly from 'plumber', it deserves a page.|**Does the business want more of it?** Do not build pages for work you do reluctantly.|**Can you write 500 genuinely useful words about it?** If not, it is probably a section of another page, not its own page.|**Is it meaningfully different from another service?** 'Boiler repair' and 'boiler servicing' are different. 'Boiler fixing' and 'boiler repair' are the same thing with different words.",
    "warn: Do not create a page per synonym|Creating separate pages for 'boiler repair', 'boiler fixing' and 'boiler mending' produces three near-identical thin pages competing with each other. One good page covers all three phrasings naturally.",

    "h: The structure that works",
    "table: Page ; Purpose ; Contains || Homepage ; Who you are, main services, trust, contact ; Overview plus links to service pages || Service page, one per service ; Win that specific search and convert ; Full anatomy from lesson 4.1.2 || About page ; Trust and people ; Real staff, history, credentials || Areas page or pages ; Coverage ; Where you work, covered in lesson 4.4.4 || Contact page ; Practical detail ; NAP, hours, map, parking, access || Reviews or case studies ; Evidence ; Real work and outcomes",

    "h: Internal structure of service pages",
    "p: Where a service has genuine sub-services, a parent and child structure works well:",
    "l: Parent: 'Dental implants' — what they are, who they suit, costs, process.|Children: 'Single tooth implants', 'Full arch implants', 'Implant repairs' — each only if there is genuinely enough to say and genuine separate demand.|Each child links back to the parent, and the parent links to each child.",
    "tip: Start with three|Most small businesses do not need twelve service pages immediately. Build the three that generate the most revenue, properly and thoroughly, before building any more. Three excellent pages outperform twelve thin ones, and the work is achievable.",

    "h: Migrating from a one-page site",
    "n: List every service currently mentioned.|Rank them by revenue and by search demand.|Take the top three and write full pages for each, using the anatomy from lesson 4.1.2.|Keep the homepage as an overview that links to each of them.|Add clear navigation so the pages can be found.|Add the next services over time, only when each can be done properly.",
    "ex: The three-page transformation|A locksmith had one page listing fourteen services. Three proper pages were built: emergency lockouts, lock replacement, and safe opening. Within three months all three ranked for their specific searches, and enquiries became better qualified because callers had already read what the service involved and what it cost. The other eleven services remained as sections on the homepage and were added gradually."
  ],
  take: [
    "The most common local website failure is having no page for the service people are searching for.",
    "Build one page per service you genuinely want customers for, not one per keyword variation.",
    "A service deserves a page when it is searched separately, wanted by the business, meaningfully distinct, and supports 500 useful words.",
    "Do not create separate pages for synonyms — they compete with each other and are thin.",
    "Start with the three highest-revenue services done properly, then expand gradually."
  ],
  self: [
    "I can state the one-page-per-service rule and its four qualifying tests.",
    "I know why synonym pages are harmful rather than helpful.",
    "I can describe the standard page structure for a single-location business.",
    "I know to start with three excellent pages rather than twelve thin ones."
  ],
  quiz: [
    { q: "A business lists twelve services on its homepage and ranks for none of them specifically. What is the core problem?",
      a: ["Not enough keywords", "There is no dedicated page for any of those services", "The site is too fast", "Too many photos"],
      c: 1,
      why: "Google needs a page that is genuinely about the service, and customers need somewhere that answers their specific question. A bullet point provides neither." },
    { q: "Should 'boiler repair', 'boiler fixing' and 'boiler mending' each have their own page?",
      a: ["Yes, one per phrase", "No — they are the same service, and one good page covers all three phrasings", "Yes, but only two of them", "Only if the business is large"],
      c: 1,
      why: "Synonym pages are near-identical and thin, and they compete with each other. A single well-written page naturally covers the variations." },
    { q: "How many service pages should a small business build first?",
      a: ["All of them immediately", "The three highest-revenue services, done properly", "One per city served", "None until the site is redesigned"],
      c: 1,
      why: "Three thorough pages outperform twelve thin ones and the work is actually achievable, which means it gets finished rather than abandoned." }
  ],
  ex: {
    title: "Plan the service page structure",
    time: "30 minutes",
    intro: "You will produce a structure that fixes the most common local website problem.",
    steps: [
      "List every service your practice business offers.",
      "For each, note whether people search for it separately and whether the business wants more of it.",
      "Apply the four qualifying tests and mark which deserve their own page.",
      "Identify any services that are really synonyms of each other and merge them.",
      "Rank the qualifying services by revenue.",
      "Write the structure: which pages exist now, which need creating, and in what order."
    ],
    deliver: "A service page plan with qualifying tests applied, synonyms merged, and a build order by revenue."
  },
  chal: {
    title: "Build one complete service page",
    brief: "Write the full content for the single highest-value service page your practice business is missing. Use the anatomy from lesson 4.1.2, the writing rules from 4.1.4, the proof elements from 4.1.5 and the calls to action from 4.1.6. Include real prices or price factors, real photos or a list of photos to take, and genuinely local detail. Then check it against the ten questions customers ask on the phone and confirm it answers all of them.",
    success: [
      "The page follows the full anatomy and answers all ten customer questions.",
      "It contains real specifics: prices or price factors, named people, genuine local detail.",
      "It passes the competitor test — most sentences could not be truthfully written by a competitor."
    ]
  }
},

"4.2.2": {
  t: "Service plus city pages without creating junk",
  why: "Service-plus-city pages are the most abused tactic in local SEO. Done properly they work. Done badly they create hundreds of worthless pages.",
  body: [
    "h: What these pages are",
    "p: A page targeting a service in a specific place: 'Emergency plumber in Headingley', 'Dental implants in Clifton'. The logic is sound — people search that way, and a page about that exact thing can rank organically.",

    "h: Why they get abused",
    "p: Because the pattern is easy to multiply. A business generates 300 pages by combining twelve services with twenty-five towns, each identical except for two swapped words. This produces:",
    "l: Hundreds of near-duplicate pages that add nothing.|Pages that cannot rank because they contain no information.|A site that looks manipulative.|Internal competition where the pages dilute each other.|Real risk of the whole set being treated as low quality.",
    "warn: The generated-page trap|If your only difference between two pages is the place name, you have not made two pages. You have made one page twice. Search engines have been handling this pattern for well over a decade and it does not work.",

    "h: The test for whether a city page should exist",
    "n: **Is there genuine separate demand?** Do people actually search for this service in this place?|**Do you have something genuinely different to say about serving this place?** Local conditions, specific projects, named areas, travel times, local partners.|**Have you actually worked there?** Can you show real jobs, real customers, real photos from that area?|**Would a customer from that place find this page useful?** Or would they immediately notice it is generic?",
    "p: If you cannot answer yes to at least three, do not build the page.",

    "h: What a good city page contains",
    "l: Real examples of work completed in that area, with photos where possible.|Named neighbourhoods, roads and landmarks within it.|Genuine local specifics: common property types, typical problems, parking conditions, access issues.|Travel time or response time to that area.|Reviews from customers in that area, where you have them.|Any genuinely local connection: sponsorships, partnerships, suppliers.|The standard elements: contact, proof, calls to action.",
    "tip: The ten-page rule of thumb|Most local businesses can support genuinely good pages for perhaps five to fifteen places, not fifty. If you cannot write 400 words of genuinely specific content about serving a place, you do not yet have enough experience there to justify a page. Build it when you do.",

    "h: The alternative to fifty thin pages",
    "p: If a business serves many places but has little specific to say about most of them:",
    "n: Build excellent service pages, which is where most of the value is.|Build one strong 'areas we cover' page listing everywhere, covered in lesson 4.4.4.|Build individual pages only for the handful of places that genuinely matter most.|Add genuinely local content to those over time as real work accumulates.",

    "ex: Fifteen pages that worked|A roofing company built fifteen area pages over two years, one at a time. Each was written after completing at least five jobs in that area, and each included photos of those specific roofs, the street names, the typical roof types found there, and quotes from those customers. All fifteen ranked. A competitor generated 180 pages in a weekend and none of them ranked at all. The difference was not effort per page. It was whether there was anything real to say."
  ],
  take: [
    "Service-plus-city pages work when they contain genuinely place-specific content, and fail when they are generated from a template.",
    "If the only difference between two pages is the place name, you have made one page twice.",
    "Build a place page only when there is real demand, real local knowledge, and real completed work there.",
    "Most local businesses can support five to fifteen genuine place pages, not fifty.",
    "Where specific content does not exist, build strong service pages and one areas-covered page instead."
  ],
  self: [
    "I can state the four tests for whether a city page should exist.",
    "I know why generated city pages fail.",
    "I can list what genuinely local page content contains.",
    "I know the alternative structure when specific content is not available."
  ],
  quiz: [
    { q: "A business generates 300 pages by combining twelve services with twenty-five towns. What is the likely outcome?",
      a: ["Strong rankings across all towns", "Near-duplicate thin pages that do not rank and may be treated as low quality", "Faster indexing", "Higher conversion"],
      c: 1,
      why: "Pages differing only by a swapped place name contain no specific information. The pattern is long-established and does not produce rankings." },
    { q: "What is the strongest indicator that a place page is justified?",
      a: ["The place is nearby", "You have completed real work there and can show specific local detail and examples", "The place has a large population", "A competitor has a page for it"],
      c: 1,
      why: "Genuine completed work provides photos, examples, customer quotes and local knowledge — the things that make the page real rather than generated." },
    { q: "Roughly how many genuine place pages can a typical local business support?",
      a: ["Fifty to a hundred", "Five to fifteen", "One", "Unlimited"],
      c: 1,
      why: "The limit is how many places the business has enough genuine experience and specific content for, which for most businesses is a modest number." }
  ],
  ex: {
    title: "Decide which place pages to build",
    time: "30 minutes",
    intro: "You will apply the tests honestly rather than building everything.",
    steps: [
      "List every place your practice business serves.",
      "For each, note whether you have completed real work there and roughly how much.",
      "For each, note what genuinely specific thing you could say about serving that place.",
      "Apply the four tests and mark pass or fail.",
      "Rank the passing places by business value.",
      "Write a build order, starting with one page, and note what content you would need to gather first."
    ],
    deliver: "A tested list of place pages with a build order and the specific content needed for the first one."
  },
  chal: {
    title: "Write one genuine place page",
    brief: "Write a complete place page for the single best candidate from your list. It must contain at least five things that could only be true of that specific place: named streets or neighbourhoods, local property or business types, specific jobs completed, local access or parking conditions, or genuine local connections. Then apply the competitor test to every sentence. Finally, count how many sentences would still be true if you swapped the place name — if more than a fifth, rewrite until they are not.",
    success: [
      "The page contains at least five genuinely place-specific facts.",
      "You applied the swap test and reduced generic sentences below a fifth.",
      "The page would be useful to a real customer from that place, not just to a search engine."
    ]
  }
},

"4.2.3": {
  t: "Store locator architecture for multi-location brands",
  why: "A store locator is the backbone of multi-location local SEO. Built badly it hides every location; built well it makes each one findable.",
  body: [
    "h: What a store locator must do",
    "n: **Give every location its own page**, at its own permanent web address.|**Make those pages findable** by search engines, not only through a search box.|**Let customers find their nearest location** quickly.|**Provide each location's specific details**: address, phone, hours, services, staff, photos.|**Link from each profile** to its own page, as covered in lesson 2.3.6.",

    "h: The most common failure",
    "warn: The search-box-only locator|Many locators consist of a single page with a postcode search box. Locations only appear after a search, and each result may not have its own web address at all. Search engines cannot use the search box, so none of the locations exist as findable pages. A brand with 200 branches effectively has one page. This is extremely common and extremely costly.",

    "h: The correct structure",
    "l: **A locator index page** listing all locations, or listing regions that lead to locations.|**Region or city pages** where there are many locations, so no single page has 400 links.|**One page per location**, at a stable, readable web address.|**Text links** to every location page, reachable by clicking from the index without using a search box.|**A search or map interface as well**, for customer convenience — but never instead of the links.",

    "h: What belongs on each location page",
    "table: Element ; Why || Full name, address, phone, hours ; Core identity, must match the profile exactly || Map and directions ; Practical and expected || Parking and access detail ; Frequently decisive, rarely provided || Services offered at this location ; They often differ between branches || Staff at this location ; Real people build trust || Photos of this branch ; Never shared stock images across branches || Reviews from this location ; Specific social proof || Structured data for this location ; Covered in lesson 4.3.3 || Link back to the region and the main site ; Navigation and internal linking",

    "h: Web address structure",
    "p: Location page addresses should be readable and stable. Common workable patterns:",
    "l: /locations/leeds-headingley|/stores/leeds/headingley|/leeds-headingley — acceptable for small networks but harder to organise at scale",
    "p: Avoid addresses built from database identifiers, and avoid addresses that change when a branch is renamed. Lesson 4.2.4 covers this in more detail.",

    "h: Scale considerations",
    "l: With more than about fifty locations, use region or city pages so no page carries an unmanageable number of links.|Keep the content of each location page genuinely specific — this is the point at which brands fall back on templates, which is exactly the problem covered in lesson 4.2.6.|Make sure new branches are added to the locator promptly, and closed branches handled properly.|Ensure the locator is fast, since large interactive maps can be slow.",
    "tip: The click test|From the homepage, can you reach any individual location page by clicking links only, without typing anything into a search box? If not, your locator is invisible to search engines and needs restructuring. This test takes thirty seconds and identifies the single biggest multi-location problem.",

    "ex: The invisible chain|A retailer with 140 stores had a beautiful map-based locator. Every store appeared as a pin. None had a web address of its own. The brand ranked nowhere locally except through its Google profiles. Rebuilding the locator with a region index and 140 individual pages, each with genuine local content, produced local organic visibility for the first time in the company's history."
  ],
  take: [
    "Every location needs its own page at its own stable web address, reachable by clicking links.",
    "Search-box-only locators make every location invisible to search engines, which is extremely common.",
    "Each location page needs its own hours, phone, services, staff, photos, reviews and structured data.",
    "Use region or city pages once a network passes roughly fifty locations.",
    "Apply the click test: if you cannot reach a location page without typing, the locator needs rebuilding."
  ],
  self: [
    "I can state the five requirements of a working store locator.",
    "I can explain why search-box-only locators fail.",
    "I know what belongs on an individual location page.",
    "I can apply the click test to any multi-location site."
  ],
  quiz: [
    { q: "What is the click test for a store locator?",
      a: ["Counting how many clicks to the checkout", "Whether you can reach any individual location page by clicking links only, without typing", "Testing the map loads", "Measuring click-through rate"],
      c: 1,
      why: "Search engines follow links, not search boxes. If a location page can only be reached by typing a postcode, it is effectively invisible." },
    { q: "A chain has 140 stores shown as pins on a map, none with their own web address. What is the consequence?",
      a: ["Faster page loading", "None of the locations exist as findable pages, so the brand has almost no local organic visibility", "Better user experience only", "Improved rankings"],
      c: 1,
      why: "Without individual pages there is nothing for search engines to rank for each location, leaving the brand dependent solely on its profiles." },
    { q: "At roughly what network size should region or city pages be introduced?",
      a: ["Three locations", "Around fifty locations", "Five hundred locations", "Never"],
      c: 1,
      why: "Beyond about fifty, a single index page carries too many links to be useful for either customers or crawling, so an intermediate layer helps." }
  ],
  ex: {
    title: "Audit a real store locator",
    time: "30 minutes",
    intro: "You will test a multi-location brand's structure and find the failures.",
    steps: [
      "Choose a multi-location brand in your area with at least ten branches.",
      "Apply the click test: try to reach one specific branch page using links only.",
      "If you reach a branch page, record its web address structure.",
      "Check what the branch page contains against the elements table in this lesson.",
      "Check whether the branch photos are genuinely of that branch or shared stock.",
      "Write a list of every structural failure you found."
    ],
    deliver: "A locator audit covering the click test, address structure, page content and photo authenticity."
  },
  chal: {
    title: "Design a locator for eighty locations",
    brief: "Design the complete locator architecture for a business with eighty locations across a country. Specify the page hierarchy, the web address pattern, how customers navigate to their nearest branch, how search engines reach every page, what content each page level contains, how new branches are added, and how closed branches are handled. Then identify the two places where this design would be most likely to degrade into templated thin pages, and specify what governance would prevent it.",
    success: [
      "Your hierarchy handles eighty locations without any page carrying an unmanageable link count.",
      "You specified both customer navigation and crawlable link paths separately.",
      "You identified the specific degradation risks and the governance that prevents them."
    ]
  }
},

"4.2.4": {
  t: "URL structures that scale",
  why: "Web addresses are decided once and lived with for years. A good structure costs nothing extra to build and saves enormous pain later.",
  body: [
    "h: What makes a good local URL",
    "term: URL|The web address of a page, such as example.com/services/boiler-repair.",
    "n: **Readable.** A person can tell what the page is from the address alone.|**Stable.** It will not need to change when the business renames something.|**Consistent.** The same pattern is used throughout.|**Logical.** The structure reflects how the site is organised.|**Lowercase, hyphenated, no spaces or odd characters.**|**Short enough to be practical**, without being cryptic.",

    "h: Patterns for common situations",
    "table: Situation ; Pattern ; Example || Single location, service pages ; /services/service-name ; /services/boiler-repair || Single location, flat structure ; /service-name ; /boiler-repair || Service in a place ; /service-name-place or /areas/place/service ; /boiler-repair-headingley || Multi-location ; /locations/city-branch ; /locations/leeds-headingley || Multi-location with regions ; /locations/region/city-branch ; /locations/yorkshire/leeds-headingley || Practitioner pages ; /team/person-name ; /team/marta-kowalski",

    "h: Decisions to make once",
    "l: **Flat or nested?** Flat is simpler for small sites. Nested is clearer at scale. Pick one and stick to it.|**Trailing slash or not?** Either is fine. Be consistent, because inconsistency creates duplicate addresses.|**Include the place in service URLs?** Only for genuine place pages, not for every service page of a single-location business.|**Include dates or categories?** Generally not for local service pages, since they make addresses fragile.",

    "warn: The most expensive URL mistake|Changing web addresses without redirects. If a page moves from one address to another and nothing tells search engines and browsers where it went, every link to it breaks and its accumulated value is lost. This happens on nearly every website redesign and is the single most common cause of a post-redesign traffic collapse.",
    "term: Redirect|An instruction that sends anyone visiting an old address to the new one, and tells search engines the page has moved permanently.",

    "h: When you must change a URL",
    "n: Map every old address to its closest new equivalent.|Set a permanent redirect from each old address to the new one.|Do not redirect everything to the homepage — that loses the specificity and is treated poorly.|Update internal links to point directly at the new addresses.|Update the Google profile website link, and any links in citations you control.|Monitor for errors for at least a month afterwards.",
    "tip: Never change a URL without a reason|Tidiness is not a reason. If an address is ugly but working, leave it. Every change carries risk and cost, and the benefit of a prettier address is usually close to zero.",

    "h: Words in URLs",
    "l: Use real words, separated by hyphens.|Include the service name, since it is genuinely descriptive.|Do not stuff: /leeds-plumber-leeds-emergency-plumber-leeds is transparent and unhelpful.|Keep them short enough to be readable in a search result or a message.|Avoid stop words where they add nothing: /boiler-repair is better than /our-boiler-repair-services-page.",

    "ex: The redesign that lost everything|A business redesigned its site and changed every address from /boiler-repair to /services/repairs/boilers, with no redirects. Rankings and traffic collapsed within weeks. Every link earned over eight years pointed at addresses that now returned errors. Adding the redirects recovered most of it over the following three months, but three months of lost enquiries could not be recovered."
  ],
  take: [
    "Good local URLs are readable, stable, consistent, logical, lowercase and hyphenated.",
    "Decide flat versus nested and trailing slash conventions once, and apply them everywhere.",
    "Changing addresses without redirects is the most common cause of post-redesign traffic collapse.",
    "When you must change, map each old address to its closest equivalent and redirect permanently — never all to the homepage.",
    "Tidiness is not a sufficient reason to change a working URL."
  ],
  self: [
    "I can state six qualities of a good URL.",
    "I know patterns for single-location, place and multi-location structures.",
    "I can explain what a redirect does and why missing redirects are so damaging.",
    "I know not to change working URLs without a substantive reason."
  ],
  quiz: [
    { q: "A site redesign changes every URL with no redirects. What happens?",
      a: ["Nothing significant", "Every existing link breaks and accumulated value is lost, usually causing a traffic collapse", "Rankings improve", "Google updates the links automatically"],
      c: 1,
      why: "Links pointing at the old addresses now fail. Without redirects, the value built up over years has nowhere to flow and the pages effectively start again." },
    { q: "When URLs must change, where should old addresses redirect?",
      a: ["All to the homepage", "Each to its closest equivalent new page", "To a sitemap", "Nowhere, let them error"],
      c: 1,
      why: "Redirecting everything to the homepage discards the specificity of each page. A one-to-one mapping preserves relevance and value." },
    { q: "Which is the better URL for a boiler repair service page?",
      a: ["/page-id-4471", "/services/boiler-repair", "/leeds-boiler-repair-leeds-emergency-boiler-leeds", "/our-professional-boiler-repair-services-information-page"],
      c: 1,
      why: "It is readable, descriptive, logically structured and short, without stuffing or unnecessary words." }
  ],
  ex: {
    title: "Design the URL standard",
    time: "25 minutes",
    intro: "You will make the decisions once so they never need revisiting.",
    steps: [
      "List the page types your practice business's site has or will have.",
      "Choose flat or nested and write the reason.",
      "Write the URL pattern for each page type with an example.",
      "Decide the trailing slash convention.",
      "Check the current site against your standard and list every page that does not conform.",
      "For each non-conforming page, decide whether the benefit of changing exceeds the risk, and mark most of them as leave alone."
    ],
    deliver: "A written URL standard with patterns per page type, and a conformance check that mostly recommends leaving working addresses alone."
  },
  chal: {
    title: "Plan a safe migration",
    brief: "Plan a URL migration for a site with forty pages. Specify how you would inventory the current addresses, how you would map each to a new one, how you would handle pages with no clear equivalent, what redirect type to use, how you would test before launch, what you would monitor afterwards and for how long, and what your rollback plan would be. Then estimate how long the whole project takes and what temporary performance change you would warn the client to expect.",
    success: [
      "Your plan includes a complete one-to-one mapping step with a rule for pages that have no equivalent.",
      "You specified pre-launch testing and post-launch monitoring with durations.",
      "You set an honest expectation about temporary performance change."
    ]
  }
},

"4.2.5": {
  t: "Internal linking that pushes local pages up",
  why: "Internal links are free, entirely under your control, and the most under-used lever on most local websites.",
  body: [
    "h: What internal links do",
    "term: Internal link|A link from one page of your website to another page on the same website.",
    "n: **They help pages be found.** A page nothing links to is hard to discover and looks unimportant.|**They pass value.** Pages linked to from many places are treated as more important.|**They establish topic relationships.** Linking your boiler repair page from your heating page tells search engines they are related.|**They guide customers**, which is their original purpose and still the main one.",

    "h: The rules",
    "l: **Every important page should be linked from the homepage or one click from it.**|**Use descriptive link text.** 'Boiler repair in Leeds' tells both the reader and search engines what the destination is. 'Click here' tells neither.|**Link from relevant content**, not just from menus and footers. A link inside a paragraph carries more meaning.|**Link between related services** so customers can navigate sideways.|**Link place pages to the relevant service pages** and vice versa.|**Do not link everything to everything.** A page with 200 internal links dilutes the meaning of each one.",
    "term: Anchor text|The visible, clickable words of a link. It describes what the destination page is about.",

    "h: The structure to aim for",
    "table: From ; To ; Anchor text example || Homepage ; Each main service page ; Boiler repair || Service page ; Related service page ; boiler servicing || Service page ; Relevant place page ; boiler repair in Headingley || Place page ; The main service page ; our boiler repair service || Blog or guide ; The relevant service page ; book a boiler repair || Every page ; Contact page ; get a quote || Location page ; The region page and the main locator ; all our Yorkshire branches",

    "h: Finding orphan pages",
    "term: Orphan page|A page that no other page on the site links to. It is difficult to find and appears unimportant.",
    "p: Orphans are common, especially after redesigns and on sites where pages were added over time without updating navigation.",
    "l: Check whether every service page is reachable from the menu or homepage.|Check whether place pages are linked from anywhere other than a sitemap.|Check whether old pages still exist but are unreachable.",
    "tip: The three-click rule|Aim for every important page to be reachable within three clicks of the homepage. Beyond that, pages become progressively harder to find and appear less important. For most local sites, two clicks is achievable for everything that matters.",

    "h: Anchor text, done sensibly",
    "l: Descriptive and natural: 'our emergency plumbing service'.|Varied, not identical every time.|Not stuffed: linking with 'best emergency plumber Leeds cheap plumber Leeds' is transparent and unhelpful.|Not generic: 'click here', 'read more', 'this page' waste the opportunity entirely.",
    "warn: Do not over-optimise internal anchor text|Using the exact same keyword-rich phrase for every internal link to a page looks engineered. Vary it naturally, the way you would if you were simply writing well.",

    "ex: The five-link fix|A plumbing site had a strong emergency callout page that nothing linked to except the sitemap. Adding links from the homepage, the two related service pages, the areas page and the contact page — five links with natural descriptive text — moved the page from invisible to ranking within six weeks. Nothing else changed. The page had been good all along, and nothing pointed at it."
  ],
  take: [
    "Internal links help pages be found, pass value, establish topic relationships and guide customers.",
    "Use descriptive anchor text, link from within relevant content, and link related services to each other.",
    "Orphan pages — those nothing links to — are common and effectively invisible.",
    "Aim for every important page to be reachable within two or three clicks of the homepage.",
    "Vary anchor text naturally; identical keyword-rich text on every link looks engineered."
  ],
  self: [
    "I can explain four things internal links do.",
    "I can write descriptive anchor text instead of 'click here'.",
    "I can find orphan pages on a site.",
    "I know why identical repeated anchor text is a mistake."
  ],
  quiz: [
    { q: "What is an orphan page?",
      a: ["A page with no images", "A page that no other page on the site links to", "A page with no title", "A duplicated page"],
      c: 1,
      why: "With nothing linking to it, the page is hard to discover and carries no internal signal of importance, so it rarely performs however good it is." },
    { q: "Which anchor text is best for a link to a boiler repair page?",
      a: ["Click here", "Read more", "Boiler repair in Leeds", "Best cheap emergency boiler repair Leeds plumber Leeds"],
      c: 2,
      why: "It is descriptive and natural. Generic text wastes the signal, and stuffed text looks engineered and reads badly." },
    { q: "How many clicks from the homepage should important pages be?",
      a: ["Exactly one", "Two or three at most", "Five to seven", "It does not matter"],
      c: 1,
      why: "Pages further from the homepage are harder to find and appear less important. For most local sites, two clicks is achievable for everything that matters." }
  ],
  ex: {
    title: "Fix the internal linking",
    time: "35 minutes",
    intro: "You will apply the free lever most sites ignore.",
    steps: [
      "List every important page on your practice business's website.",
      "For each, find how many internal links point to it and from where.",
      "Identify any orphan pages or pages linked only from the menu.",
      "Count how many clicks each is from the homepage.",
      "For the three most important under-linked pages, write five new internal links each, with the source page and the anchor text.",
      "Check that no anchor text is identical to another and none says 'click here'."
    ],
    deliver: "An internal link audit with fifteen specific new links defined by source page and anchor text."
  },
  chal: {
    title: "Design the internal link map",
    brief: "Draw the complete internal linking map for your practice business's website: every page, every link that should exist between them, and the anchor text for each. Include homepage to services, service to service, service to place, place to service, and everything to contact. Then identify which page should receive the most internal links and justify why, based on what the business most wants to sell. Finally, check that no page has so many outgoing links that each one becomes meaningless.",
    success: [
      "Your map covers every page and specifies anchor text for every link.",
      "You justified which page deserves the most internal links based on business priority.",
      "You checked for pages with excessive outgoing links and addressed them."
    ]
  }
},

"4.2.6": {
  t: "Avoiding duplicate and thin location pages",
  why: "Thin and duplicate pages are the failure mode of every local page strategy at scale. Recognising and preventing them protects the whole site.",
  body: [
    "h: The two problems",
    "term: Thin page|A page with very little genuinely useful content. It exists, but it gives the reader almost nothing.",
    "term: Duplicate content|The same or near-identical content appearing on more than one page.",
    "p: Local page strategies produce both, because the natural way to cover many services and places is to repeat a pattern.",

    "h: How to recognise them",
    "l: Two pages differ only by a swapped word.|A page is under about 200 words and says nothing specific.|The same paragraph appears on many pages.|A page exists only to target a keyword and would not be useful to any reader.|Multiple pages compete for the same search and none ranks well.|You cannot say what a page is for without referring to the keyword it targets.",
    "warn: The self-competition symptom|When several near-identical pages target similar searches, they split signals and often none of them ranks. Consolidating them into one strong page frequently produces immediate improvement — which surprises people who assumed more pages meant more chances.",

    "h: Preventing them",
    "n: **Only create a page when you have something specific to say.** This single rule prevents most of the problem.|**Write the unique content first, then decide whether it is a page.** If you cannot fill it, it is a section, not a page.|**Vary structure, not just words.** Two pages with identical structure and swapped nouns still read as duplicates.|**Add genuinely unique elements**: local photos, specific examples, local reviews, area-specific detail.|**Set a minimum standard** and refuse to publish below it.",

    "h: Fixing an existing problem",
    "n: Inventory every page and identify near-duplicates and thin pages.|For each cluster of near-duplicates, decide which page should survive — usually the one with the most links, traffic or genuine content.|Merge the genuinely useful content from the others into the survivor.|Redirect the removed pages to the survivor, not to the homepage.|Update internal links to point at the survivor.|Monitor for a month.",
    "tip: Consolidation usually helps|Businesses fear that removing pages will reduce visibility. In practice, replacing eight thin pages with one strong page usually improves performance, because the strong page can compete where none of the eight could. Present it to clients as concentrating strength rather than losing pages.",

    "h: Boilerplate content",
    "term: Boilerplate|Text repeated identically across many pages, such as a company description or a service list.",
    "p: Some repetition is normal and harmless — a footer, a short company description, contact details. The problem arises when boilerplate is the majority of the page. A page that is 80 per cent shared text and 20 per cent unique is effectively a duplicate.",

    "h: The honest standard",
    "p: A useful internal rule: **would you be willing to show this page to the business owner and say 'this is the best page on the internet about this topic for this area'?** If not, it is not ready. That standard is higher than most sites meet, and pages that meet it are the ones that rank.",
    "ex: Eight into one|A cleaning company had eight pages: 'office cleaning', 'commercial cleaning', 'business cleaning', 'workplace cleaning' and four place variations, all nearly identical. None ranked. They were merged into one thorough office cleaning page covering all the terminology naturally, with real photos, real prices and real client examples, and the seven others redirected to it. The single page ranked within two months for most of the terms the eight had failed to reach."
  ],
  take: [
    "Thin and duplicate pages are the failure mode of local page strategies at scale.",
    "Near-identical pages split signals and frequently none of them ranks.",
    "Prevent the problem by writing the unique content first and only making it a page if it stands alone.",
    "Fix it by consolidating into one strong page and redirecting the rest to it, not to the homepage.",
    "Use the standard: would you claim this is the best page on the internet about this topic for this area?"
  ],
  self: [
    "I can recognise thin and duplicate pages from six symptoms.",
    "I can explain why consolidation often improves performance.",
    "I know the correct process for merging and redirecting.",
    "I apply a minimum publishing standard rather than publishing anything that exists."
  ],
  quiz: [
    { q: "Eight near-identical service pages exist and none ranks. What usually happens when they are consolidated into one strong page?",
      a: ["Visibility drops because there are fewer pages", "Performance usually improves, because the single page can compete where none of the eight could", "Nothing changes", "The site gets suspended"],
      c: 1,
      why: "Near-duplicates split signals and none accumulates enough strength. Concentrating the content and links into one page allows it to compete." },
    { q: "Where should removed duplicate pages redirect?",
      a: ["The homepage", "The page that survived the consolidation", "A sitemap", "Nowhere"],
      c: 1,
      why: "Redirecting to the surviving page preserves topical relevance and passes the accumulated value to where the content now lives." },
    { q: "What is the honest publishing standard suggested in this lesson?",
      a: ["At least 500 words", "Would you claim this is the best page on the internet about this topic for this area?", "At least three images", "One page per keyword"],
      c: 1,
      why: "It is a quality test rather than a quantity test, and pages that meet it are consistently the ones that rank." }
  ],
  ex: {
    title: "Find and plan a consolidation",
    time: "35 minutes",
    intro: "You will identify the duplication problem on a real site and plan the fix.",
    steps: [
      "List every page on your practice business's website with its main topic.",
      "Group any pages covering substantially the same topic.",
      "For each group with more than one page, identify which should survive and why.",
      "Note what unique content from the others should be merged into the survivor.",
      "Write the redirect mapping.",
      "Apply the honest publishing standard to every remaining page and mark those that fail."
    ],
    deliver: "A consolidation plan with surviving pages, content to merge, redirect mapping, and pages failing the quality standard."
  },
  chal: {
    title: "Rescue an over-built site",
    brief: "Find or imagine a local website with sixty or more generated service-and-place pages. Plan the complete rescue: how you would inventory and cluster them, how you would decide what survives, how many pages the site should end up with and why, how you would sequence the changes to avoid a sudden collapse, what you would monitor, and how you would explain to an owner who paid for those sixty pages that most of them should be removed. Include what you would do if the owner refuses.",
    success: [
      "Your plan sequences the reduction rather than removing everything at once.",
      "You justified the target page count based on genuine content available.",
      "You wrote an honest, non-blaming explanation for the owner and a fallback if they refuse."
    ]
  }
}

});
