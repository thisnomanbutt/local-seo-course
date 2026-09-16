/* Level 6 · Module 2 — Advanced Citation Work */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"6.2.1": {
  t: "Data aggregators and how data actually flows",
  why: "Understanding the flow of business data explains why corrections stick in some places and keep reverting in others.",
  body: [
    "h: The flow",
    "p: Business data moves through the web in a rough hierarchy:",
    "n: **Primary sources.** You: your website, your Google profile, your direct submissions.|**Aggregators.** Companies that collect business data at scale and license it onward.|**Downstream directories.** Sites that populate listings from aggregator feeds.|**Scrapers and copies.** Sites that copy from directories, often without any update mechanism.",
    "p: Data flows downward and is slow to change. A correction at level one may take months to reach level four, and may never reach it at all.",

    "h: Why this matters practically",
    "warn: The reversion explained|You correct a directory listing. Six weeks later the old data returns. The directory refreshed from its aggregator feed, which still holds the old value. Correcting the directory again achieves nothing. The aggregator must be corrected, and then the directory refreshed from it.",

    "h: Who the aggregators are",
    "p: The specific companies differ substantially by country, and the landscape changes as companies merge and exit. Rather than memorising names that will age:",
    "l: Search for the major business data providers in your specific country.|Look at where the largest directories in that market say they source data.|Ask what feeds the mapping and navigation services used locally.|Check whether industry-specific aggregators exist for regulated professions.",
    "p: In some markets a handful of aggregators feed most directories. In others the ecosystem is fragmented and going direct to the main directories is more effective.",

    "h: How to work with aggregators",
    "n: **Identify which ones actually matter** in your market.|**Check whether your business already appears** in their data, which it usually does.|**Establish the submission or correction route** — direct submission, a claim process, a partner, or a paid service.|**Submit the correction** using the exact NAP standard.|**Record the date**, because propagation is measured in weeks.|**Re-check downstream** after six to twelve weeks to see whether the correction spread.",

    "h: Timescales",
    "table: Stage ; Typical time || Submission accepted ; Days to weeks || Aggregator data updated ; Weeks || Downstream directories refreshed ; 4 to 12 weeks || Scraped copies updated ; Often never",
    "tip: Set the expectation before you start|Citation cleanup is slow. Telling a client 'we should see this settle over the next two to three months' before starting prevents the conversation where they ask why nothing has changed after ten days. It is honest, and it removes an entirely avoidable source of friction.",

    "h: Paid aggregator submission services",
    "p: Several services offer to submit and maintain your data across aggregators and directories for an annual fee.",
    "l: For a single-location business with a stable address, the value is limited after the initial cleanup.|For a multi-location business, the time saved can be substantial.|For a business that has just moved or rebranded, a one-off push through the aggregator layer can be genuinely useful.|Check what happens when you stop paying — some services revert listings, which is a significant consideration.",
    "warn: Ask what happens if you cancel|Some managed citation services remove or revert the listings they created when the subscription ends. Ask this question explicitly before subscribing, and get the answer in writing. Businesses have discovered the answer the hard way.",

    "h: When aggregators do not matter much",
    "l: Markets where the ecosystem is fragmented.|Businesses whose relevant directories are industry-specific rather than general.|Businesses that have never moved and have a long-stable NAP.|Small local markets where the main directories can simply be handled directly.",
    "ex: The direct approach|A market research exercise found that in one country, four directories accounted for nearly all the citations that ranked for local searches, and all four accepted direct submission. Going direct to those four took two hours and achieved more than an aggregator subscription would have, at no cost."
  ],
  take: [
    "Data flows from primary sources through aggregators to directories and finally to scraped copies, slowly and imperfectly.",
    "Listings that revert after correction are usually being refreshed from an uncorrected aggregator feed.",
    "Which aggregators matter differs substantially by country, and the landscape changes.",
    "Propagation takes four to twelve weeks — set that expectation before starting any cleanup.",
    "Before subscribing to any managed citation service, ask in writing what happens to the listings if you cancel."
  ],
  self: [
    "I can describe the four levels of the data flow.",
    "I can explain why a corrected listing reverts.",
    "I know realistic propagation timescales and set expectations accordingly.",
    "I know to ask what happens to listings when a managed service is cancelled."
  ],
  quiz: [
    { q: "A directory listing reverts to old data six weeks after correction. What is happening?",
      a: ["The directory is malicious", "It refreshed from an aggregator feed that still holds the old value", "Google overwrote it", "The correction was never saved"],
      c: 1,
      why: "Downstream directories repopulate from their source. Until the aggregator is corrected, every local fix will eventually be overwritten." },
    { q: "How long should you expect citation corrections to take effect across the ecosystem?",
      a: ["24 hours", "Four to twelve weeks, and some scraped copies never update", "One week", "Six months minimum"],
      c: 1,
      why: "Propagation through aggregators and downstream refreshes is measured in weeks, which is why the expectation should be set before work begins." },
    { q: "What must you ask before subscribing to a managed citation service?",
      a: ["How many listings they build", "What happens to the listings if you cancel the subscription", "Whether they are the cheapest", "How fast they work"],
      c: 1,
      why: "Some services revert or remove the listings they created when payment stops, which can undo the entire investment. Get the answer in writing." }
  ],
  ex: {
    title: "Trace the data flow for one wrong value",
    time: "30 minutes",
    intro: "You will follow a piece of bad data upstream to its source.",
    steps: [
      "Find one wrong value about your practice business appearing on at least three sites.",
      "For each site, look for any indication of where its data comes from — a credit, an 'update your listing' link, or a data provider name.",
      "Identify which site appears to be furthest upstream.",
      "Establish the correction route for that upstream source.",
      "Submit the correction and record the date.",
      "Schedule checks at six and twelve weeks on all three downstream sites."
    ],
    deliver: "A traced data chain with the upstream source identified, a correction submitted, and follow-up checks scheduled."
  },
  chal: {
    title: "Build the market-specific aggregator map",
    brief: "Research and document the business data ecosystem for your practice business's country. Identify which aggregators operate, which directories they feed, how each accepts corrections, what it costs, and how long propagation takes. Then assess honestly how important this layer is in this market compared with going direct. Produce a recommendation with a specific action list and a time estimate. Note anything you could not determine and how you would find out.",
    success: [
      "You researched the actual market rather than assuming a generic ecosystem.",
      "You documented correction route, cost and propagation time for each source found.",
      "Your recommendation is specific, time-estimated, and honest about what you could not determine."
    ]
  }
},

"6.2.2": {
  t: "Citation tools compared, and when to do it by hand",
  why: "Tools can save real time or waste real money. Knowing what each type does lets you choose deliberately rather than by sales pitch.",
  body: [
    "h: The three types of tool",
    "n: **Audit tools.** Scan the web and report where your business appears and what is inconsistent. They find problems; they do not fix them.|**Submission tools.** Push your data to directories and aggregators, usually for an annual fee.|**Management platforms.** Ongoing services that maintain listings, monitor changes and report.",

    "h: Audit tools",
    "l: **What they do well:** find listings quickly across many sites, spot inconsistencies, produce a report a client understands.|**What they do badly:** they miss industry-specific and local directories, they report cosmetic differences as problems, and they often overstate the severity to sell a fix.|**When worth it:** at the start of an engagement, to establish the current state quickly.|**The manual alternative:** the quoted searches from lesson 6.1.5, which take longer but find things tools miss.",
    "warn: Audit tool scores are marketing|A tool reporting 'your listings are 34 per cent accurate' has usually counted every abbreviation difference as an error. Read the actual findings rather than the score, and classify them yourself using the severity framework from lesson 6.1.2.",

    "h: Submission tools",
    "l: **What they do well:** push consistent data to many places quickly, handle aggregators that are hard to reach directly, save time for multi-location businesses.|**What they do badly:** submit to many low-value directories to inflate the count, and sometimes create listings you would not have chosen.|**The cancellation question:** always ask, as covered in lesson 6.2.1.|**When worth it:** multi-location businesses, or a one-off push after a move or rebrand.",

    "h: Management platforms",
    "l: **What they do well:** ongoing monitoring, change alerts, multi-location reporting, saving substantial time at scale.|**What they do badly:** cost accumulates per location, and much of what they monitor rarely changes.|**When worth it:** more than roughly ten locations, or an agency managing many clients.",

    "h: When to do it by hand",
    "table: Situation ; Approach ; Why || Single location, stable, small target list ; By hand ; Twenty listings is an afternoon, and you control quality || Industry-specific directories ; By hand ; Tools rarely cover them || Trade bodies and accreditation schemes ; By hand ; Require membership details tools do not have || Manufacturer installer pages ; By hand ; Tools do not know about them || Multi-location, 20 plus ; Tool ; Manual does not scale || Post-move or rebrand cleanup ; Tool for the push, by hand for the important ones ; Combination works best",
    "tip: The hybrid approach is usually right|Use a tool to find and to push the bulk, and do the important, industry-specific and relationship-based listings by hand. The valuable citations are almost always the ones tools cannot reach, because they require knowing the business.",

    "h: Evaluating any tool",
    "n: What does it actually cover in your specific country and industry?|Does it find the niche directories that matter, or only the obvious ones?|What happens if you cancel?|Can you export your data?|Does it report cosmetic differences as errors?|What does it cost per location per year?|Who will actually use it?",

    "h: The honest assessment",
    "p: For most single-location local businesses, citation tools are not necessary. The target list is finite, the work is a day, and the maintenance is annual. For multi-location businesses and agencies, tools move from optional to essential somewhere around ten to twenty locations.",
    "ex: The tool that found less|An audit tool reported 47 listings for a business and a 62 per cent consistency score. Manual searching found 71 listings, including four industry directories and two manufacturer pages the tool had missed entirely — and those six were the most valuable of the whole set. The tool was faster; the manual search was better."
  ],
  take: [
    "Tools divide into audit, submission and management types, each solving a different part of the problem.",
    "Audit tool consistency scores usually count cosmetic differences as errors — read the findings, not the score.",
    "Tools rarely cover industry directories, trade bodies, accreditation schemes or manufacturer pages, which are often the most valuable.",
    "The hybrid approach is usually right: tool for the bulk, by hand for the important and relationship-based listings.",
    "Tools become genuinely necessary somewhere around ten to twenty locations, not before."
  ],
  self: [
    "I can distinguish audit, submission and management tools.",
    "I know why consistency scores overstate problems.",
    "I know which citation types tools typically miss.",
    "I can judge when a tool is genuinely necessary."
  ],
  quiz: [
    { q: "An audit tool reports a 34 per cent consistency score. What should you do?",
      a: ["Buy the fix package immediately", "Read the actual findings and classify them yourself, since scores usually count cosmetic differences as errors", "Ignore the tool entirely", "Rebuild all listings"],
      c: 1,
      why: "Scores are designed to motivate a purchase. Classifying the findings as critical, substantive or cosmetic gives you the real picture." },
    { q: "Which citations do tools typically miss?",
      a: ["Major national directories", "Industry bodies, accreditation schemes and manufacturer installer pages", "Social media profiles", "Mapping services"],
      c: 1,
      why: "These require knowing the business's memberships and supplier relationships, which no automated scan can determine, and they are often the most valuable." },
    { q: "At roughly what scale does a citation management tool become genuinely necessary?",
      a: ["One location", "Around ten to twenty locations", "Five hundred locations", "Never"],
      c: 1,
      why: "Below that, the target list is small enough to handle by hand with better quality. Above it, manual maintenance stops being feasible." }
  ],
  ex: {
    title: "Compare tool output against manual research",
    time: "40 minutes",
    intro: "You will find out what tools miss before relying on one.",
    steps: [
      "Run a free citation audit tool on your practice business and record every listing it reports.",
      "Separately, run the six manual searches from lesson 6.1.5 and record every listing found.",
      "Compare the two lists and identify what each found that the other did not.",
      "Assess which of the uniquely manual findings were valuable.",
      "Note how long each method took.",
      "Write a recommendation on whether a tool is warranted for this business."
    ],
    deliver: "A comparison of tool and manual findings with time taken, value assessment, and a tool recommendation."
  },
  chal: {
    title: "Build the tool evaluation framework",
    brief: "Create a reusable framework for evaluating any citation tool a client might be sold. Include the seven evaluation questions, the specific things to test before buying, the questions to put in writing to the vendor, and a scoring approach that would let you compare two options fairly. Then apply it to one real tool and produce a verdict. Include what you would say to a client who has already bought a tool you would not have recommended.",
    success: [
      "Your framework includes specific pre-purchase tests, not just questions.",
      "You applied it to a real tool and reached a verdict.",
      "You wrote constructive advice for a client who already owns a tool you would not have chosen."
    ]
  }
},

"6.2.3": {
  t: "Citations for SABs, practitioners and multi-location",
  why: "The standard citation advice assumes one shop at one public address. These three situations each need a different approach.",
  body: [
    "h: Service area businesses",
    "p: An SAB hides its address, which creates an immediate problem: most directories require one.",
    "n: **Use the same address you gave Google**, and hide or omit it where the directory allows.|**Where a directory requires a public address**, decide deliberately: either provide it, accepting that it becomes public, or skip that directory.|**Be consistent.** If you provide the address on some directories and hide it on others, you create exactly the inconsistency you are trying to avoid.|**Prioritise directories that support service areas**, which many trade directories do.|**Use locality and region without the street address** where the format allows.",
    "warn: The accidental disclosure|A business hides its address on Google for privacy, then publishes it on fifteen directories because each form required it. The privacy is gone and the business does not realise. Decide the policy once, write it into the NAP standard, and apply it everywhere — this is the same consistency point made in lessons 2.2.4 and 4.3.3.",

    "h: Practitioners",
    "p: Where legitimate practitioner listings exist, as covered in lesson 2.1.5, citations need care:",
    "l: The business has its own citation set using the business name.|Each practitioner may have their own on professional registers and directories.|Practitioner citations should use the practitioner's real name in a consistent format, including or excluding titles and qualifications consistently.|Practitioner listings should point to that practitioner's own page, not the business homepage.|Do not create business citations under a practitioner's name or vice versa — that creates the duplicate problem from lesson 6.1.6.",
    "l: Professional registers are usually the most valuable practitioner citations, because they are authoritative, trusted and often required.",

    "h: Multi-location businesses",
    "p: This is where citation work becomes genuinely complex.",
    "n: **Each location needs its own citations** with its own NAP, hours, phone and page URL.|**Never use the head office phone or address** for branch listings.|**Each should link to its own location page**, as covered in lesson 2.3.6.|**Maintain a master data file** with every location's details, which becomes the single source for all submissions.|**Bulk submission becomes worthwhile** at scale, as covered in lesson 6.2.2.|**Governance matters more than technique** — see lesson 10.1.3.",
    "table: Field ; Shared across locations ; Per location || Business name format ; Yes ; The location element varies || Street address ; No ; Yes || Phone ; No ; Yes, local number || Website URL ; No ; Yes, location page || Hours ; No ; Yes || Description ; Template ; With local detail || Categories ; Usually yes ; Occasionally varies",
    "tip: The master data file is the whole job|For a multi-location business, citation work is really data management. Build one accurate, complete, maintained file of every location's details and the submissions become mechanical. Without it, every submission is a fresh research exercise and errors are guaranteed.",

    "h: Combinations",
    "p: Real businesses combine these. A multi-location clinic with named practitioners and one branch that operates as a service area business is entirely normal. Handle each element by its own rules rather than looking for a single approach.",
    "ex: The head office number|A twelve-branch chain submitted citations using the head office number for every branch, because the submission form was filled in centrally. Customers calling any branch reached a central switchboard, the branches had no distinct phone identity, and the entity signals for each location were weakened. Correcting it across all twelve took three weeks and immediately improved both customer experience and local performance."
  ],
  take: [
    "Service area businesses must apply one consistent address policy everywhere, or the privacy decision is undone.",
    "Practitioner citations use the practitioner's name consistently and link to their own page; professional registers are the most valuable.",
    "Multi-location citations need each location's own address, phone, hours and page URL — never the head office details.",
    "For multi-location work, the master data file is the real job; submissions become mechanical once it exists.",
    "Real businesses combine these situations — handle each element by its own rules."
  ],
  self: [
    "I know how to handle an address policy for a service area business across directories.",
    "I know how practitioner citations differ from business citations.",
    "I know which fields must be per location in a multi-location business.",
    "I understand that multi-location citation work is fundamentally data management."
  ],
  quiz: [
    { q: "A service area business hides its address on Google but supplies it on fifteen directories because the forms required it. What has happened?",
      a: ["Nothing significant", "The privacy decision has been undone, since the address is now public", "The listings will be rejected", "Google will hide them too"],
      c: 1,
      why: "Privacy only holds if applied consistently everywhere. The policy must be decided once, written into the standard, and followed on every submission." },
    { q: "Which field must always be specific to each location in a multi-location business?",
      a: ["Brand name format", "The phone number, address, hours and website URL", "Company history", "Logo"],
      c: 1,
      why: "Using head office details for branch listings destroys each location's distinct identity and weakens its local signals, as well as confusing customers." },
    { q: "What is the most valuable citation type for a practitioner?",
      a: ["General business directories", "Professional registers, which are authoritative, trusted and often required", "Social bookmarking sites", "Article directories"],
      c: 1,
      why: "Registers carry professional authority, are frequently checked by prospective clients, and often confer credibility that general directories cannot." }
  ],
  ex: {
    title: "Build the master data file",
    time: "35 minutes",
    intro: "You will produce the artefact that makes all future citation work mechanical.",
    steps: [
      "Determine which of the three situations applies to your practice business, or which combination.",
      "Create a data file with one row per location or practitioner.",
      "Include every field needed for a citation submission: name, address, phone, hours, website URL, description, categories, email.",
      "For a service area business, record the address policy decision explicitly.",
      "For practitioners, record the name format decision including titles and qualifications.",
      "Note who maintains the file and how changes are made."
    ],
    deliver: "A complete master data file with every submission field, explicit policy decisions recorded, and a named maintainer."
  },
  chal: {
    title: "Plan citations for a complex organisation",
    brief: "Plan the complete citation approach for an organisation with six clinic locations, eleven named practitioners across them, and one mobile service operating as a service area business. Specify how many citation sets exist, what each contains, which directories apply to which, how the address policy works for the mobile service, what the practitioner name format is, and how the whole thing is maintained. Identify the two places this would most likely go wrong and how you would prevent each.",
    success: [
      "You correctly identified how many distinct citation sets are needed and why.",
      "Your address and name format policies are stated explicitly and applied consistently.",
      "You identified the two likely failure points with specific preventions."
    ]
  }
},

"6.2.4": {
  t: "Moving address or rebranding without losing rankings",
  why: "A move or rebrand is the highest-risk event in local SEO. Handled well the loss is temporary; handled badly it can take years to recover.",
  body: [
    "h: Why moves are so damaging",
    "l: Distance changes, which is the one force you cannot compensate for, as lesson 1.2.3 established.|Every citation now carries the wrong address.|Duplicates frequently form, as covered in lesson 6.1.6.|Reviews mention the old location.|Links point to pages that may change.|The business becomes a different entity in a different place, from Google's point of view.",
    "warn: Expect a drop|A genuine move to a different area will change rankings, and no technique prevents this entirely. Being honest about it beforehand is the professional approach. What you control is how large the drop is and how fast the recovery.",

    "h: The move sequence",
    "n: **Before the move:** prepare the new NAP standard, list every citation from the record sheet, prepare the new location page on the website, and prepare verification evidence for the new address.|**On the move date:** update the Google profile address. Do not create a new listing.|**Within the first week:** update the website, the structured data, the top five citations and the aggregators.|**Weeks two to six:** work through the remaining citations in order of importance.|**Week six onward:** check for duplicates forming at either address.|**Ongoing:** monitor for old-address data reappearing.",
    "tip: Never create a new listing for a move|Updating the existing listing preserves the reviews and the history. Creating a new one starts from zero and leaves a duplicate at the old address. This is the single most damaging mistake made during moves, and it is irreversible in practice.",

    "h: Handling the old address",
    "l: If the business has genuinely left, the old address must not remain on any listing.|If another business takes over the premises, leaving your data there causes real problems for both of you.|Search the old address in quotation marks after six weeks and again after three months.|Expect old-address data to keep resurfacing from aggregators for several months.",

    "h: Rebranding",
    "p: A name change is less damaging than a move but still significant:",
    "n: Change the real world first — signage, vehicles, paperwork — as covered in lesson 2.3.2.|Update the website, including a page explaining the former name.|Update the Google profile name.|Update citations in order of importance.|Keep the old name mentioned in website content for at least a year so search continues to connect them.|Record the date.",

    "h: Doing both at once",
    "warn: Avoid moving and rebranding simultaneously|As lesson 3.3.6 explained, changing name, address and category together resembles a listing being repurposed and frequently triggers review or suspension. Where the business genuinely must do both, space them by at least a month, prepare full evidence, and expect a verification request.",

    "h: What recovery looks like",
    "table: Timeframe ; What to expect || Weeks 1 to 2 ; Visible drop, inconsistent data across the web || Weeks 3 to 8 ; Gradual stabilisation as citations update || Months 2 to 4 ; Rankings settle around the new location's realistic level || Months 4 to 12 ; Prominence rebuilds in the new area, reviews from new customers accumulate",
    "p: Note that the new level may be genuinely different from the old, because the new location has different competitors and different distances. The goal is to reach the best achievable position at the new address, not to recreate the old one.",
    "ex: The move done properly|A business moved four kilometres. It updated the existing listing rather than creating a new one, corrected fifteen citations within two weeks, monitored for duplicates, and set client expectations before the move. Rankings dropped for three weeks and recovered to a comparable level by week nine. A similar business that created a new listing lost 180 reviews and was still rebuilding two years later."
  ],
  take: [
    "A move changes distance, which cannot be compensated for — expect a drop and say so beforehand.",
    "Always update the existing listing rather than creating a new one; creating a new one loses the reviews permanently.",
    "Prepare the new NAP standard, citation list, location page and verification evidence before the move date.",
    "Search the old address after six weeks and three months, because old data keeps resurfacing from aggregators.",
    "Avoid moving and rebranding at the same time — space them by at least a month."
  ],
  self: [
    "I can explain why moves are the highest-risk event in local SEO.",
    "I know the correct sequence before, during and after a move.",
    "I know never to create a new listing for a move and why.",
    "I can set realistic recovery expectations with a timeline."
  ],
  quiz: [
    { q: "A business is moving premises. What should happen to its Google listing?",
      a: ["Create a new listing at the new address", "Update the existing listing's address, preserving reviews and history", "Delete it and start again", "Leave it at the old address"],
      c: 1,
      why: "Updating preserves reviews, history and accumulated authority. Creating a new listing starts from zero and leaves a damaging duplicate at the old address." },
    { q: "How long after a move should you search the old address in quotation marks?",
      a: ["Once, on the move date", "At six weeks and again at three months, because old data resurfaces from aggregators", "Never", "Daily for a year"],
      c: 1,
      why: "Aggregator propagation is slow and old values reappear downstream for months, so a single check at the time of the move is insufficient." },
    { q: "Why should a business avoid moving and rebranding at the same time?",
      a: ["It costs more", "Changing name, address and category together resembles listing repurposing and frequently triggers review or suspension", "Google charges a fee", "Customers get confused only"],
      c: 1,
      why: "The combination matches a known abuse pattern. Even when entirely legitimate it invites scrutiny, so the changes should be spaced." }
  ],
  ex: {
    title: "Write the move plan",
    time: "35 minutes",
    intro: "You will produce the plan that turns a risky event into a managed one.",
    steps: [
      "Assume your practice business is moving to a new address five kilometres away.",
      "Write the before-the-move preparation list, including evidence for verification.",
      "Write the move-day actions.",
      "List the first five citations to update and where the rest fall in priority.",
      "Write the monitoring schedule for duplicates and old-address data.",
      "Write the two-sentence expectation you would set with the owner before the move."
    ],
    deliver: "A complete move plan with preparation, move-day actions, citation priority, monitoring schedule and an owner expectation statement."
  },
  chal: {
    title: "Plan a combined move and rebrand",
    brief: "Plan a transition for a business that must both move premises and change its name within six months. Sequence every change across a timeline, specify the gap between the two events and justify it, state what evidence must exist before each stage, what you monitor after each, what you would do if the listing is suspended at any point, and what expectations you would set with the owner at the start. Include the point at which you would advise delaying one of the changes entirely.",
    success: [
      "Your sequence spaces the two events with a stated and justified gap.",
      "Each stage names its required evidence and post-change monitoring.",
      "You identified the conditions under which you would advise delaying, rather than assuming both must proceed."
    ]
  }
},

"6.2.5": {
  t: "Auditing a messy citation profile",
  why: "Most established businesses have years of accumulated citation mess. This lesson turns that into a finite, prioritised project.",
  body: [
    "h: The audit sequence",
    "n: **Establish the standard.** You cannot judge anything wrong without knowing what is right. The NAP standard from lesson 1.3.5 comes first.|**Find everything.** The six systematic searches from lesson 6.1.5, plus a tool if available.|**Record everything** in one table.|**Classify each finding** by severity and by fix route.|**Check for duplicates** specifically, using the methods from lesson 6.1.6.|**Identify the upstream sources** feeding any repeated wrong value.|**Prioritise.**|**Estimate the time.**",

    "h: The audit table",
    "table: Column ; Purpose || Site ; Identification || URL ; Access || Name shown ; Comparison || Address shown ; Comparison || Phone shown ; Comparison || What is wrong ; Specific issue || Severity ; Critical, substantive, cosmetic || Site value ; High, medium, low || Fix route ; Edit, claim, request, aggregator, none || Estimated effort ; Minutes || Priority ; Calculated from severity and site value",

    "h: Prioritising properly",
    "p: Priority is severity multiplied by site value, not severity alone.",
    "l: A critical error on a high-value site is the top priority.|A critical error on a dead directory is low priority despite being critical.|A cosmetic difference on a high-value site is worth fixing while you are there.|A cosmetic difference on a low-value site should be ignored entirely.",
    "tip: Judge site value in thirty seconds|Does it rank for anything relevant when you search its name plus a keyword? Would a customer plausibly use it? Does it feed other sites? Three quick questions, and you can classify any directory as high, medium or low value without research.",

    "h: The realistic scope",
    "warn: Do not promise to fix everything|A business with 200 citations accumulated over a decade will have problems on many of them. Fixing all of them is not the goal and would not be a good use of the budget. Fix the critical and substantive issues on sites that matter, handle any duplicates, correct the upstream sources, and stop. Say this explicitly at the start.",

    "h: Presenting the audit",
    "n: Lead with the number of critical issues and what they are, not with a total count.|Show the duplicates separately, since they matter most.|Group the rest by fix route, so the plan is visible.|State what you will not be fixing and why.|Give a time estimate and a realistic expectation of when effects appear.|Include a before-state record so improvement can be demonstrated later.",

    "h: The time estimate",
    "table: Task ; Typical time || Listings you control, simple edit ; 5 minutes each || Claimable listings ; 15 to 30 minutes each including verification || Correction requests ; 10 minutes each plus follow-up || Duplicate resolution ; 1 to 4 hours plus weeks of waiting || Aggregator submission ; 30 to 60 minutes plus propagation || Full audit for an established business ; 3 to 6 hours",
    "ex: The scoped project|An audit found 164 listings with issues. Classification showed nine critical, twenty-three substantive on sites that mattered, one duplicate, and the rest cosmetic or on worthless sites. The project was scoped as: resolve the duplicate, fix thirty-two listings, correct two upstream sources. Twelve hours of work instead of an open-ended commitment to 164 listings, addressing everything that actually mattered."
  ],
  take: [
    "Establish the NAP standard before auditing — you cannot judge anything wrong without knowing what is right.",
    "Record everything in one table with severity, site value, fix route and effort.",
    "Priority is severity multiplied by site value, not severity alone.",
    "Do not promise to fix everything — scope explicitly to critical and substantive issues on sites that matter.",
    "Present the audit by leading with critical issues and duplicates, not with a total count."
  ],
  self: [
    "I can run the eight-step audit sequence.",
    "I can judge a directory's value in thirty seconds.",
    "I can prioritise by severity multiplied by site value.",
    "I can scope a citation project honestly rather than open-endedly."
  ],
  quiz: [
    { q: "How should citation issues be prioritised?",
      a: ["By severity alone", "By severity multiplied by the value of the site it appears on", "By how easy they are to fix", "Alphabetically by site name"],
      c: 1,
      why: "A critical error on a dead directory matters less than a substantive one on a site customers actually use. Both dimensions must be considered." },
    { q: "An audit finds 164 listings with issues. What is the correct scope?",
      a: ["Fix all 164", "Fix the critical and substantive issues on sites that matter, resolve duplicates, correct upstream sources, and stop", "Fix none, they are all cosmetic", "Fix only the first ten found"],
      c: 1,
      why: "Most of the 164 will be cosmetic or on worthless sites. Scoping to what matters delivers nearly all the benefit for a fraction of the effort." },
    { q: "How can you judge a directory's value quickly?",
      a: ["Check its design", "Ask whether it ranks for anything relevant, whether a customer would plausibly use it, and whether it feeds other sites", "Count its listings", "Check its age"],
      c: 1,
      why: "Those three questions capture ranking value, discovery value and propagation value, which is everything that matters, in about thirty seconds." }
  ],
  ex: {
    title: "Run the full citation audit",
    time: "60 minutes",
    intro: "You will produce a scoped, prioritised project from a messy situation.",
    steps: [
      "Confirm the NAP standard for your practice business.",
      "Run all six systematic searches and record every listing found.",
      "Build the audit table with all eleven columns.",
      "Classify severity and site value for every row.",
      "Check specifically for duplicates and record any found.",
      "Produce the prioritised action list with a total time estimate and a statement of what you will not be fixing."
    ],
    deliver: "A complete audit table with prioritised actions, a time estimate, and an explicit out-of-scope statement."
  },
  chal: {
    title: "Write the audit presentation",
    brief: "Turn your audit into a presentation for a business owner with no technical knowledge. Lead with what matters, explain the duplicate if there is one in plain language, show the scope of work and what it will cost in time or money, set expectations about how long effects take to appear, and explain clearly why you are not fixing everything. Include a before-state record so improvement can be demonstrated later. Keep it to two pages.",
    success: [
      "It leads with the critical issues rather than a total count.",
      "It explains explicitly why most findings will not be fixed, without sounding like laziness.",
      "It includes a before-state record and an honest timeline for effects."
    ]
  }
},

"6.2.6": {
  t: "Measuring whether citation work did anything",
  why: "Citation work is easy to do and hard to prove. Measuring it honestly protects your credibility and improves your judgement.",
  body: [
    "h: The measurement problem",
    "p: Citation work rarely produces a dramatic, isolatable ranking change. It happens slowly, alongside other work, and its main benefits — accuracy and entity confidence — are not directly visible. This makes it easy to claim credit dishonestly and easy to dismiss unfairly.",

    "h: What you can measure directly",
    "n: **Consistency.** The proportion of important citations stating the correct NAP. This is the actual output of the work and it can be measured precisely.|**Coverage.** How many of the target list exist and are correct.|**Duplicates resolved.** A binary, verifiable outcome.|**Upstream corrections made** and whether they propagated.|**Wrong data eliminated** — does the old phone number still appear anywhere that matters?",
    "tip: Measure the output, not only the outcome|You can prove that eighteen listings now state the correct number where twelve did not. That is a real, verifiable result. Claiming that this caused a ranking change is usually not provable. Report what you did and what it fixed, and be careful about causal claims.",

    "h: What you can measure indirectly",
    "l: Ranking changes across a grid, from Level 9 module 1, though these are influenced by everything else too.|Profile views and actions, though the same applies.|Referral traffic from directories, which is directly attributable and often revealing.|Calls from listings, where tracking permits.|Whether automated changes to the profile stop occurring, which can indicate improved data consistency.",

    "h: Referral traffic is under-used",
    "p: If a directory sends visitors to your website, that is directly measurable and unambiguous. Check your analytics for referral sources and you will learn:",
    "l: Which directories actually send customers, as opposed to merely existing.|Which are worth maintaining and which are not.|Whether newly built citations produce anything.|Real evidence for the platform prioritisation in lesson 5.4.1.",

    "h: Setting expectations before starting",
    "n: State that citation work is foundational rather than transformational.|State that effects take four to twelve weeks to propagate.|State what you will measure and report.|State that you will not claim ranking improvements caused by citations unless the evidence is unusually clear.|Agree what a successful outcome looks like before beginning.",
    "warn: The credibility trap|Claiming that a ranking improvement was caused by citation work, when three other things changed in the same period, is the fastest way to lose credibility with a knowledgeable client — and to mislead yourself. Over years, practitioners who make careful causal claims develop accurate judgement. Those who claim credit for everything never learn what actually works.",

    "h: The honest report",
    "table: Section ; Contents || What we found ; The audit summary, critical issues, duplicates || What we did ; Listings corrected, duplicates resolved, upstream sources fixed || Verified outcome ; Consistency before and after, with numbers || Observed alongside ; Ranking and traffic changes, without causal claims || What we did not do ; The out-of-scope items and why || What happens next ; Monitoring, annual review",

    "h: Building your own evidence over time",
    "p: This connects to the personal evidence base from lesson 3.4.4. Over many clients, if you record citation work in isolation where possible and note what followed, you will develop a genuine sense of when it matters and when it does not. That judgement is rare and valuable, and it only comes from honest measurement.",
    "ex: The isolated test|On one client with no other work in progress, an agency resolved a duplicate and corrected fourteen listings, changing nothing else for eight weeks. Grid rankings improved noticeably in the fourth and fifth weeks. That single clean observation was worth more to their judgement than fifty engagements where everything changed at once."
  ],
  take: [
    "Citation work is foundational and slow, which makes it easy to overclaim and easy to dismiss unfairly.",
    "Measure the output directly: consistency, coverage, duplicates resolved, wrong data eliminated.",
    "Referral traffic from directories is directly attributable and reveals which listings genuinely matter.",
    "Do not claim ranking improvements were caused by citations when several things changed at once.",
    "Isolated observations, where nothing else changed, are worth far more to your judgement than many mixed engagements."
  ],
  self: [
    "I can list what citation work can be measured directly.",
    "I know why referral traffic is a valuable and under-used measure.",
    "I make careful causal claims rather than claiming credit for everything.",
    "I understand why isolated observations build real judgement."
  ],
  quiz: [
    { q: "What is the most reliably measurable result of citation work?",
      a: ["Ranking improvement", "Consistency and coverage — how many important citations now state the correct information", "Review growth", "Conversion rate"],
      c: 1,
      why: "Consistency is the direct output of the work and can be counted precisely. Ranking changes are influenced by everything else happening at the same time." },
    { q: "Three things changed in the same period and rankings improved. How should citation work be reported?",
      a: ["Claim the citation work caused it", "Report what was done and what it verifiably fixed, noting the ranking change alongside without a causal claim", "Do not mention rankings at all", "Claim it caused half the improvement"],
      c: 1,
      why: "Overclaiming destroys credibility with knowledgeable clients and prevents you from ever learning what actually works." },
    { q: "Why is directory referral traffic a valuable measure?",
      a: ["It is the largest traffic source", "It is directly attributable and reveals which directories genuinely send customers rather than merely existing", "It affects rankings", "Google reports it automatically"],
      c: 1,
      why: "Unlike ranking changes, a referral visit is unambiguous evidence that a particular listing produced a real person, which informs where to invest." }
  ],
  ex: {
    title: "Measure your citation work",
    time: "30 minutes",
    intro: "You will produce an honest, verifiable record of what the work achieved.",
    steps: [
      "Record the consistency state before your work: how many important citations stated the correct NAP.",
      "Record the state now.",
      "Record any duplicates resolved and any upstream corrections made.",
      "Check whether the old phone number or address still appears anywhere that matters.",
      "Check the website analytics for referral traffic from directories over the period.",
      "Write the honest summary, separating verified outcomes from observations made alongside."
    ],
    deliver: "A before-and-after consistency measurement with verified outcomes and observations reported separately."
  },
  chal: {
    title: "Design an isolated citation test",
    brief: "Design a test that would genuinely isolate the effect of citation work. Specify what business it would run on, what other work would have to be paused and for how long, what baseline you would record, what exactly you would change, how long you would wait, what you would measure, and what result would convince you either way. Then assess honestly how practical this is in commercial reality, and what the closest practical approximation would be.",
    success: [
      "Your design genuinely isolates the variable, including pausing other work.",
      "You defined the convincing result in advance rather than afterwards.",
      "You assessed commercial practicality honestly and proposed a workable approximation."
    ]
  }
}

});
