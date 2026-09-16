/* Level 1 · Module 3 — Entities and Where Google Gets Your Data */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"1.3.1": {
  t: "What an 'entity' is and why Google thinks this way",
  why: "Google does not store your business as a web page. It stores it as a thing with facts attached. Once you understand this, half of local SEO stops feeling mysterious.",
  body: [
    "h: From words to things",
    "p: Old search engines matched letters. If you typed 'dentist', they found pages containing the letters d-e-n-t-i-s-t. Modern search does something different: it recognises **things** and stores facts about them.",
    "term: Entity|A real thing that exists and can be identified — a business, a person, a city, a product. Google stores it as an item with properties, not as a string of text.",
    "p: Your business is an entity in Google's systems. Attached to that entity are facts: its name, its coordinates, its category, its phone number, its opening hours, its reviews, the website it owns, the articles that mention it.",

    "h: Why this matters practically",
    "p: Three consequences follow, and they explain a great deal of what you will see in your career.",
    "n: **Consistency matters more than repetition.** Google is trying to confirm facts. Ten sources agreeing that your phone number is X is powerful. Repeating a keyword forty times on a page is not.|**Contradiction is expensive.** If three sites say you are at 12 Oak Street and two say 14 Oak Street, Google becomes less confident about the entity, and less confidence usually means lower visibility.|**You can be relevant without the exact words.** If Google knows you are an entity of type 'Endodontist', it can show you for 'root canal specialist' without those words appearing anywhere on your site.",

    "ex: The wrong phone number problem|A clinic changed its phone number two years ago. The website and profile were updated. But eleven directory sites still show the old number. Google keeps seeing two versions. It usually resolves this, but the uncertainty is a small permanent drag — and occasionally the old number resurfaces on the profile through an automatic update. This is an entity confidence problem, not a keyword problem.",

    "h: How an entity gets built",
    "p: Google assembles your entity from many sources, which we cover in the next lesson. It looks for agreement. The more independent sources say the same thing, the more confident Google becomes.",
    "term: Confidence|How sure Google is about a fact. Not a number you can see, but its effects are visible — high-confidence businesses show richer information and rank more stably.",

    "h: Entity thinking changes how you work",
    "table: Keyword thinking ; Entity thinking || 'Add the keyword to the page' ; 'Make sure Google knows we are this kind of business' || 'Get more links' ; 'Get more independent confirmation of who we are' || 'Write a page for every city' ; 'Be genuinely connected to the places we serve' || 'Repeat the service name' ; 'Have a real page, real reviews and a real category for that service'",

    "h: The knowledge panel is the entity made visible",
    "p: When you search a business name and a box appears on the right, or at the top on mobile, with its photo, hours, reviews and address — that box is Google showing you the entity it has assembled. We look at it closely in lesson 1.3.3.",

    "tip: A test you can run any time|Search your practice business's exact name in quotation marks. Count how many different websites mention it in the first three pages. That rough number is a proxy for how much evidence Google has to build the entity from. Businesses with three mentions are nearly invisible entities. Businesses with two hundred are well-established ones.",

    "warn: A common misunderstanding|Entity thinking does not mean words stop mattering. The words on your site are one of the main ways Google learns facts about you. It means words alone, without corroboration elsewhere, are weak."
  ],
  take: [
    "Google stores your business as an entity — a thing with facts attached — not as a collection of keywords.",
    "Consistency across independent sources builds confidence. Contradiction reduces it.",
    "High confidence tends to mean richer display and more stable rankings.",
    "Entity thinking means asking 'does Google know who we are?' rather than 'did I use the keyword?'.",
    "The knowledge panel is Google showing you the entity it has assembled about your business."
  ],
  self: [
    "I can explain what an entity is without using technical words.",
    "I can explain why contradictory information across the web is harmful.",
    "I can explain why repeating a keyword does not build entity confidence.",
    "I can run the quoted-name search test and interpret the result."
  ],
  quiz: [
    { q: "What is an entity in Google's terms?",
      a: ["A page on a website", "A real thing with facts attached, such as a business", "A type of keyword", "A directory listing"],
      c: 1,
      why: "Entities are things, not text. Google stores facts about your business as an item, which is why corroboration matters more than word repetition." },
    { q: "Eleven directories show an old phone number while the website shows the new one. What is the main risk?",
      a: ["Nothing, Google always uses the newest", "Reduced confidence in the business's data, and the old number occasionally resurfacing", "The website will be removed from Google", "Reviews will be deleted"],
      c: 1,
      why: "Contradiction lowers confidence. It also creates a real risk that automated updates pull the old value back onto the profile." },
    { q: "Why can a business rank for 'root canal specialist' without those exact words on its site?",
      a: ["Google guesses randomly", "Google knows the business entity is an endodontist and understands the relationship between the two", "The words are hidden in the code", "It cannot happen"],
      c: 1,
      why: "Because Google works with entities and their known properties, it can connect a category to the phrases people use for it, even when the exact wording is absent." }
  ],
  ex: {
    title: "Measure your practice business's entity footprint",
    time: "25 minutes",
    intro: "You will find out how much evidence Google has to build your business entity from.",
    steps: [
      "Search the exact business name in quotation marks and count distinct websites mentioning it across the first three pages.",
      "Search the business name plus the city, and note anything different that appears.",
      "Search the business phone number in quotation marks and list every site where it appears.",
      "Search the street address in quotation marks and list every site where it appears.",
      "Note any contradictions you find — different names, different numbers, different suite numbers.",
      "Write a one-line summary: strong, moderate or weak entity footprint, with your reason."
    ],
    deliver: "A footprint report listing every site that mentions the business, plus every contradiction found."
  },
  chal: {
    title: "Compare a strong entity with a weak one",
    brief: "Pick the market leader in your practice business's category and city, and pick a business ranking around tenth. Run the same footprint measurement on both. Then write an analysis of the difference: not just how many mentions each has, but what kinds of sites those are, and whether the strong one has types of mentions the weak one completely lacks. Identify the two categories of mention that seem to separate them most.",
    success: [
      "You have measured both businesses using the same method.",
      "You have classified the mentions by type, not just counted them.",
      "You have named the two types of mention that most distinguish the leader."
    ]
  }
},

"1.3.2": {
  t: "Where Google gets information about your business",
  why: "You cannot fix what you cannot find. This lesson lists every source Google draws on, so you know where to look when something is wrong.",
  body: [
    "h: Google has many informants",
    "p: Your profile is the loudest voice, but it is not the only one. Google gathers business information from at least nine places, and any of them can introduce an error.",

    "h: The nine sources",
    "n: **Your Google Business Profile.** What you entered yourself. The strongest single source for most fields.|**Your website.** Especially the page your profile links to, plus contact and location pages. Google reads your address, phone, hours and services from it.|**Structured data on your website.** Machine-readable facts you add to your pages. Covered in Level 4 module 3.|**Third-party directories and citation sites.** Yelp, Yellow Pages, industry directories, chamber of commerce listings and hundreds more.|**Data aggregators.** Large companies that supply business data to many directories at once. Covered in lesson 6.2.1.|**News articles, blogs and other editorial mentions.** These build both facts and prominence.|**Users of Google Maps.** Members of the public can suggest edits to your hours, address and even whether you are closed.|**Google's own crawling and automated systems.** Google may infer hours from your site, detect a closure, or update a category on its own.|**Other Google products.** Data connected to your business from ads accounts, Search Console, Merchant Center and similar systems.",

    "warn: Sources 7 and 8 are the ones that surprise people|Members of the public can change your business information. Google's automated systems can change it too. Many business owners have no idea this is possible and only discover it when their hours are wrong. Lessons 3.4.1 and 3.4.2 cover how to control this.",

    "h: Which source wins when they disagree?",
    "p: There is no fixed public hierarchy, but in practice:",
    "l: Verified owner-entered profile data usually carries the most weight for core fields.|Strong agreement across many independent sources can override a single odd value.|Google's own automated detection can override your entry for some fields, particularly hours and closure status.|Your website matters heavily for services, descriptions and anything Google needs to quote.",

    "h: The practical mapping",
    "table: Wrong information you see ; Most likely source ; Where to fix it || Wrong hours ; Automated update or public suggestion ; Profile, then reinforce via website and structured data || Old phone number ; Directories or aggregators ; Citation cleanup, Level 6 || Wrong category label ; Your own primary category, or a Google update ; Profile, lesson 3.1.1 || Business marked permanently closed ; Public suggestion or Google detection ; Profile, urgent — lesson 3.4.2 || Address slightly wrong ; Geocoding or inconsistent citations ; Profile pin plus citation cleanup || Wrong services shown ; Website content or category defaults ; Profile services and website pages",

    "ex: A closure that never happened|A restaurant closed for two weeks of renovation. Someone marked it 'permanently closed' on Maps. It stayed that way for three weeks before the owner noticed, during which time bookings collapsed. The fix took ten minutes. The damage took months to recover. Monitoring is not optional.",

    "h: Why this lesson exists this early",
    "p: New practitioners assume that whatever appears on Google came from the business. It often did not. The first question when something looks wrong should always be: **which source did this come from?** That question saves hours of confused editing.",
    "tip: The first move on any new client|Before changing anything, search their name, phone number and address in quotation marks. You will immediately see which sources exist and which disagree. This takes ten minutes and is the single most useful ten minutes in onboarding."
  ],
  take: [
    "Google gathers business data from at least nine sources, not just your profile.",
    "Members of the public and Google's own automated systems can change your information.",
    "Verified owner data usually wins for core fields, but automated detection can override some of it, especially hours and closure status.",
    "When something looks wrong, first ask which source produced it, then fix it at the source.",
    "Searching the name, phone and address in quotation marks reveals the whole picture in ten minutes."
  ],
  self: [
    "I can name at least seven sources Google uses for business information.",
    "I know that the public can suggest changes to a business's details.",
    "I can match a specific wrong value to its most likely source.",
    "I know the ten-minute check to run at the start of any engagement."
  ],
  quiz: [
    { q: "Which of these can change your business information without your permission?",
      a: ["Only you", "Members of the public suggesting edits, and Google's automated systems", "Only your web developer", "Nobody, profiles are locked once verified"],
      c: 1,
      why: "Public suggested edits and Google's own automated updates both exist. This is why regular monitoring of the profile is essential." },
    { q: "An old phone number keeps appearing across the web. Where does the fix usually need to happen?",
      a: ["Only on the Google profile", "In directories and data aggregators feeding that number", "In the website footer only", "Nowhere, Google will fix it automatically"],
      c: 1,
      why: "If many directories carry the old number, correcting only the profile leaves the contradiction in place. The source of the bad data must be corrected." },
    { q: "What is the fastest way to see which sources hold information about a business?",
      a: ["Ask Google support", "Search the name, phone number and address in quotation marks", "Check social media", "Look at the website footer"],
      c: 1,
      why: "Quoted searches surface the exact strings wherever they appear, revealing the citation footprint and any contradictions in minutes." }
  ],
  ex: {
    title: "Trace every source for one business",
    time: "30 minutes",
    intro: "You will build a source map, which becomes the basis of your citation work later in Level 6.",
    steps: [
      "Create a simple table with columns: Source, Name shown, Address shown, Phone shown, Notes.",
      "Add a row for the Google Business Profile itself.",
      "Add a row for the business website.",
      "Search the business name in quotation marks and add a row for each directory or site you find, up to fifteen.",
      "Search the phone number in quotation marks and add any sites not already listed.",
      "Highlight every cell that differs from the profile row."
    ],
    deliver: "A source map table of up to fifteen sources with every inconsistency highlighted."
  },
  chal: {
    title: "Find the origin of a wrong data point",
    brief: "Find one piece of wrong or outdated information about any local business online — a wrong phone number, an old address, a closed business still listed as open, or an incorrect name variant. Trace it back as far as you can towards its origin. Which site seems to have published it first, and which sites appear to have copied it? Document the chain. This skill, following bad data upstream, is exactly what you will do professionally in Level 6.",
    success: [
      "You have documented at least four sites carrying the same wrong value.",
      "You have formed a reasoned view about which source is upstream.",
      "You have written down what you would do first to correct the chain."
    ]
  }
},

"1.3.3": {
  t: "The Knowledge Graph and your business panel",
  why: "The panel that appears when someone searches your business name is your entity made visible. Reading it correctly tells you what Google believes about you.",
  body: [
    "h: What the knowledge panel is",
    "p: Search a business by name and you usually see a large box with its photo, rating, address, hours, phone, website button and review snippets. On mobile it sits at the top. On desktop it sits on the right.",
    "term: Knowledge panel|The information box Google shows about a known entity. For a local business it is built largely from the Google Business Profile plus other confirmed data.",
    "term: Knowledge Graph|Google's large store of facts about entities and how they relate to each other. The panel is a window onto it.",

    "h: Why it matters more than people think",
    "l: It is often the **only** thing someone sees before calling you. They may never visit your website.|It reveals what Google currently believes, which is diagnostic gold.|Missing or wrong elements in it point to specific problems you can fix.|It carries your rating, which strongly influences whether the person contacts you.",

    "h: Reading the panel as a diagnostic tool",
    "table: What you see ; What it tells you || A clean, complete panel with photos and posts ; Google has high confidence and good data || No photos or one poor photo ; Missing profile work, weak first impression || 'Claim this business' visible ; The profile is unverified — urgent, Level 2 || Wrong or odd category label ; Primary category problem, lesson 3.1.1 || A recent unexplained change to hours or address ; Public edits or automated updates are landing — monitor closely || Related businesses under 'People also search for' ; Google's view of your competitive set || Questions with no answers ; Unmanaged Q and A, lesson 3.2.5 || No panel at all for a real business ; Entity not established or not verified",

    "h: 'People also search for' is free competitor research",
    "p: The businesses Google lists there are the ones it considers similar to you. That is Google telling you, directly, who it thinks your competitors are. If the list contains businesses in a different category, your relevance signals are confusing Google.",
    "ex: A useful mismatch|A physiotherapy clinic's panel showed 'People also search for' full of gyms and personal trainers, not other clinics. That told the owner Google had classified them closer to fitness than to healthcare — which matched a primary category that had been set to a fitness category years earlier. One category change fixed months of poor performance.",

    "h: Brand searches and the panel",
    "p: When people search your business by name, that is a **brand search**. A rising number of brand searches is a genuine prominence signal, because it indicates real-world awareness. Anything that gets your name in front of people — local sponsorship, press, signage, word of mouth — feeds this.",
    "term: Brand search|Someone searching for your business by its name rather than by what it sells.",

    "h: What you cannot control",
    "p: You cannot edit the knowledge panel like a form. You influence it through the profile, your website, structured data and other confirmed sources. Google does offer a way for official representatives to suggest changes to a panel, but for ordinary local businesses nearly everything is controlled through the profile.",

    "warn: The panel can lag|After you change something on your profile, the panel may take hours or days to update. Do not panic-edit repeatedly. Repeated rapid changes to sensitive fields can trigger review, which we cover in lesson 3.4.4.",

    "tip: Screenshot the panel monthly|Keep a dated screenshot of your practice business's panel every month. Changes are easy to miss in the moment and obvious in a series. This habit catches automated updates, category changes and review drops early."
  ],
  take: [
    "The knowledge panel is your business entity made visible, and often the only thing a customer sees.",
    "Reading it diagnostically reveals unverified profiles, wrong categories, missing photos and unmanaged questions.",
    "'People also search for' shows who Google thinks your competitors are — a mismatch there signals a relevance problem.",
    "Brand searches are a real prominence signal fed by real-world awareness.",
    "You cannot edit the panel directly. You influence it through the profile, the website and confirmed sources."
  ],
  self: [
    "I can explain what a knowledge panel is and where its information comes from.",
    "I can use 'People also search for' to check how Google classifies a business.",
    "I can identify at least four problems visible from the panel alone.",
    "I know that panel updates can lag and that rapid repeated edits are risky."
  ],
  quiz: [
    { q: "A physiotherapy clinic's panel shows gyms under 'People also search for'. What does this most likely indicate?",
      a: ["Gyms are stealing its rankings", "Google has classified it closer to fitness than healthcare, likely a category problem", "The panel is broken", "It needs more reviews"],
      c: 1,
      why: "That section reflects Google's view of similar entities. A mismatch there is a strong hint that your category and relevance signals are pointing the wrong way." },
    { q: "What does 'Claim this business' on a panel indicate?",
      a: ["The business is suspended", "The profile is unverified and nobody has claimed ownership", "The business is closed", "Someone else owns the domain"],
      c: 1,
      why: "That prompt appears on unverified profiles. It is urgent, because an unclaimed profile can be claimed by others and cannot be properly managed." },
    { q: "Why are brand searches a meaningful signal?",
      a: ["They increase ad revenue", "They show real-world awareness of the business, which supports prominence", "They change your category", "They replace reviews"],
      c: 1,
      why: "People searching your name means people know your name. That real-world awareness is exactly what prominence is trying to measure." }
  ],
  ex: {
    title: "Diagnose three knowledge panels",
    time: "25 minutes",
    intro: "You will practise reading panels as evidence rather than decoration.",
    steps: [
      "Search your practice business by exact name and screenshot the panel.",
      "Do the same for the top two competitors.",
      "For each, note: photo quality, rating and review count, category label, whether posts or products appear, and what shows under 'People also search for'.",
      "List every difference between your practice business's panel and the strongest competitor's.",
      "Identify the three differences most likely to affect whether a customer chooses them over you."
    ],
    deliver: "Three annotated panel screenshots with a list of the three most damaging differences."
  },
  chal: {
    title: "Build a monthly panel monitoring routine",
    brief: "Design a simple, repeatable monthly check that would catch every important change to a business's knowledge panel: category changes, hours changes, rating drops, new unanswered questions, photo changes, and changes to the competitive set shown. Write it as a checklist someone else could follow without your help, including what to do when each type of change is found. Aim for something that takes under ten minutes per business.",
    success: [
      "Your checklist covers at least six distinct things to check.",
      "Each item has a clear action to take if a problem is found.",
      "Someone unfamiliar with the business could follow it without asking questions."
    ]
  }
},

"1.3.4": {
  t: "How Google connects your site, profile and citations",
  why: "Google has to decide that your website, your profile and a hundred directory listings all describe the same business. This lesson shows how that connection is made and broken.",
  body: [
    "h: The connection problem",
    "p: Imagine Google finds a listing for 'Smith Dental' at 12 Oak St, a website at smithdental.com, and a directory page for 'Smith Dental Care' at 12 Oak Street Suite 3. Are these one business or three? Deciding this is called **entity resolution**, and it happens invisibly millions of times a day.",
    "term: Entity resolution|The process of deciding that several pieces of information all refer to the same real business.",

    "h: The clues Google uses to connect them",
    "n: **The website link.** Your profile links to your site. If your site also shows the same address and phone, the connection is strong.|**Matching name, address and phone.** The classic trio, usually shortened to NAP.|**Matching coordinates.** Two listings at the same geographic point are likely the same business.|**Structured data on your website** that states the business name, address and phone in machine-readable form.|**Links between the properties.** Your site linking to your social profiles, your profiles linking back.|**Shared unique values** such as a distinctive phone number or an unusual business name.",
    "term: NAP|Name, Address, Phone. The three core facts that identify a business. Keeping them identical everywhere is called NAP consistency.",

    "h: What breaks the connection",
    "l: A profile that links to a different domain than the one the business actually uses.|A profile that links to a social media page instead of a website.|A website whose contact page shows a different phone number from the profile, often because of untracked call tracking.|Address formats that differ enough to look like different places, such as missing suite numbers.|Business names that differ meaningfully across sources, such as 'Smith Dental' versus 'Dr J Smith DDS Family Dentistry'.|A website that does not mention the address at all, common on single-page sites.",

    "warn: The single most common break|Call tracking numbers. A business replaces the phone number on its website with a tracking number, and suddenly its site and profile disagree. Lesson 2.3.5 shows the safe way to do this, which keeps both the tracking and the consistency.",

    "h: Why connection strength matters",
    "p: When the connection is strong, your website's authority supports your profile, and your profile's data supports your website. When it is weak, both are weaker than they should be. This is one reason why two businesses with identical-looking profiles can perform very differently.",
    "ex: A disconnected business|A law firm had an excellent website ranking well organically, and a profile that ranked poorly. The profile linked to a landing page on a completely different domain used for advertising. Google had never firmly connected the two. Pointing the profile at the real website, and adding the address and phone to that site, produced a visible improvement within weeks.",

    "h: The website URL in your profile",
    "p: This is one of the most under-thought settings in local SEO. It should point to:",
    "l: For a single-location business: the homepage, in almost all cases.|For a multi-location business: that location's own page, never the homepage for all of them.|For a location inside a larger brand: the specific location page.",
    "p: Lesson 2.3.6 covers the rules and the exceptions in full.",

    "h: Strengthening the connection deliberately",
    "n: Put the full name, address and phone in the footer of every page of the website.|Add structured data stating the same details, covered in Level 4 module 3.|Make sure the profile links to the correct page.|Keep the same name format everywhere, including punctuation.|Use the same phone number, or implement call tracking safely.|Build citations that repeat the same NAP exactly.",
    "tip: The five-minute connection audit|Open the profile and the website side by side. Compare name, address and phone character by character. Then check that the profile URL actually loads the right page. You will find a problem in roughly one business out of three."
  ],
  take: [
    "Google must decide that your website, profile and citations all describe one business — this is entity resolution.",
    "It connects them using the website link, matching NAP, coordinates, structured data and cross-links.",
    "Call tracking numbers are the most common cause of broken connections.",
    "A strong connection lets your website's authority support your profile and vice versa.",
    "The profile URL should point to the specific location page, not a generic homepage, for multi-location businesses."
  ],
  self: [
    "I can explain what entity resolution means in plain words.",
    "I can list at least five things that break the connection between a site and a profile.",
    "I know what NAP stands for and why it must match exactly.",
    "I can run a five-minute connection audit on any business."
  ],
  quiz: [
    { q: "What is the most common cause of a broken connection between a website and a Google profile?",
      a: ["Slow website loading", "A call tracking number on the site that differs from the profile", "Too many photos", "Using HTTPS"],
      c: 1,
      why: "Replacing the phone number on the website with a tracking number creates a mismatch with the profile. There is a safe way to do it, covered in lesson 2.3.5." },
    { q: "For a business with five locations, what should each profile's website field point to?",
      a: ["The homepage, for all five", "That specific location's own page", "A contact form", "A social media profile"],
      c: 1,
      why: "Pointing every profile at the homepage wastes the connection. Each location page provides specific, matching evidence for that location's profile." },
    { q: "Why does a strong site-to-profile connection matter?",
      a: ["It makes the site load faster", "Each property's strength supports the other, so both perform better than they would separately", "It removes the need for reviews", "It prevents all suspensions"],
      c: 1,
      why: "When Google is confident they are the same entity, the website's authority and relevance can support the profile, and the profile's confirmed data supports the site." }
  ],
  ex: {
    title: "Run a connection audit",
    time: "25 minutes",
    intro: "You will check whether Google can confidently connect your practice business's properties.",
    steps: [
      "Write down the business name exactly as it appears on the profile, and exactly as it appears on the website. Compare character by character.",
      "Do the same for the address, including suite or unit numbers and abbreviations.",
      "Do the same for the phone number, including formatting.",
      "Click the website link on the profile and confirm it loads the correct page, not a redirect or a dead link.",
      "Check whether the full address appears anywhere on the website, and on how many pages.",
      "List every mismatch you found and rank them by likely impact."
    ],
    deliver: "A connection audit listing every mismatch between profile and website, ranked by impact."
  },
  chal: {
    title: "Fix a disconnected business on paper",
    brief: "Find a real local business with visible disconnection problems — a profile linking to a social page, a website with no address, or obviously different phone numbers. Write a complete remediation plan: exactly which fields to change, in what order, on which properties, and what evidence you would collect before and after to prove the change worked. Include a realistic timeline for seeing results and explain why changes should be made in that particular order.",
    success: [
      "You have identified a real business with at least two genuine disconnection problems.",
      "Your plan specifies the order of changes and justifies that order.",
      "You have defined what evidence you would collect to prove the fix worked."
    ]
  }
},

"1.3.5": {
  t: "Conflicting data: what happens when sources disagree",
  why: "Conflicts are normal, quiet and expensive. Learning to spot and resolve them is one of the highest-value routine skills in local SEO.",
  body: [
    "h: Conflicts are the default state, not the exception",
    "p: Almost every business over five years old has conflicting information somewhere online. Old addresses, old numbers, abbreviated names, a suite number that appears on some listings and not others. This is normal. What matters is the size and type of the conflict.",

    "h: The three levels of conflict",
    "n: **Cosmetic.** 'Street' versus 'St', 'Suite 3' versus 'Unit 3'. Google handles these well. Worth tidying, rarely urgent.|**Substantive.** A different phone number, a different suite, a name with extra words. These genuinely reduce confidence and are worth fixing properly.|**Critical.** A completely different address, a different business name, or a listing that says the business is permanently closed. These cause visible damage and must be fixed immediately.",
    "warn: Do not spend a week on cosmetic conflicts|New practitioners often spend enormous effort standardising 'Ave' to 'Avenue' across two hundred directories while ignoring the duplicate listing at an old address that is actually causing the problem. Triage first.",

    "h: What Google does with a conflict",
    "p: Google tries to work out the truth. It weighs how many sources say each version, how trustworthy those sources are, how recent they are, and whether the verified business owner has stated a value. Usually it gets there. The costs of the conflict are:",
    "l: Slightly lower confidence, which can mean slightly lower or less stable rankings.|A risk that the wrong version gets promoted onto your profile through an automated update.|Customers occasionally reaching the wrong number or address, which is a business cost, not just an SEO one.|Duplicate entities forming, where Google believes there are two businesses.",

    "h: Duplicates: the worst form of conflict",
    "p: If the conflict is large enough, Google may conclude there are **two businesses**. Now your reviews, links and mentions are split across two entities, and both are weaker than one would be. This is common after a move, a rebrand or a change of ownership.",
    "p: Lesson 6.1.6 covers finding, merging and removing duplicates in detail. For now, know that a duplicate is the most damaging conflict type.",

    "h: How conflicts usually start",
    "table: Cause ; Typical conflict created || Business moved address ; Old address persists across dozens of directories || Phone number changed ; Two live numbers in circulation || Rebrand or name change ; Two names, sometimes two entities || Call tracking added to website ; Site and profile disagree || Franchise or chain naming rules ; Location names differ from local signage || A staff member created a second profile ; Duplicate listing || Suite number added or dropped ; Address mismatch across sources",

    "h: Resolving a conflict properly",
    "n: Decide the single correct version of the name, address and phone. Write it down. This is now the standard.|Fix it on the Google Business Profile first.|Fix it on the website, in the footer and on the contact page, plus structured data.|Fix the top-tier directories and any data aggregators.|Work down through the remaining citations in order of importance.|Re-check after four to eight weeks, because aggregator data propagates slowly.",
    "tip: Write the standard down|Create a one-page document with the exact name, address, phone, hours and website format. Give it to everyone who might ever list the business anywhere. Most conflicts start because two people made reasonable but different choices.",

    "h: When a conflict cannot be fully resolved",
    "p: Some sites will never update. Dead directories, sites with no contact option, scraped copies of old data. This is acceptable. You are aiming for agreement among the sources that matter, not perfection across the entire internet. Lesson 6.2.5 explains how to judge which ones matter."
  ],
  take: [
    "Conflicting data is normal. Triage it into cosmetic, substantive and critical.",
    "Cosmetic differences like St versus Street rarely need urgent attention.",
    "The worst conflicts create duplicate entities, splitting your reviews and authority in two.",
    "Fix conflicts in order: profile, website, top directories, aggregators, then the long tail.",
    "Write down a single official NAP standard so future conflicts do not start."
  ],
  self: [
    "I can classify a conflict as cosmetic, substantive or critical.",
    "I can explain why duplicates are the most damaging conflict type.",
    "I know the correct order in which to fix conflicting data.",
    "I understand that perfect consistency across the whole web is not the goal."
  ],
  quiz: [
    { q: "Which conflict type should be dealt with first?",
      a: ["'St' versus 'Street'", "A duplicate listing at an old address", "A different photo on one directory", "A slightly different hours format"],
      c: 1,
      why: "A duplicate splits your reviews and authority across two entities and can outrank or confuse the real one. It is far more damaging than formatting differences." },
    { q: "In what order should conflicting data be corrected?",
      a: ["Random order, it does not matter", "Profile, website, top directories, aggregators, then the long tail", "Long tail first, then the profile", "Only the profile needs fixing"],
      c: 1,
      why: "Fixing the strongest sources first establishes the correct version, so that lower-tier sources and aggregators propagate the right data rather than reinforcing the wrong one." },
    { q: "Why is it acceptable that some websites will never be corrected?",
      a: ["Google ignores all directories", "The goal is agreement among sources that matter, not perfection across the entire internet", "Old data does not exist", "Google deletes old listings automatically"],
      c: 1,
      why: "Dead and scraped sites carry little weight. Chasing them has diminishing returns, while the important sources produce nearly all the benefit." }
  ],
  ex: {
    title: "Triage your practice business's conflicts",
    time: "30 minutes",
    intro: "You will turn your source map from lesson 1.3.2 into a prioritised fix list.",
    steps: [
      "Take the source map you built earlier, or build one now from quoted searches of the name, phone and address.",
      "Label every inconsistency as cosmetic, substantive or critical.",
      "Check specifically for any duplicate Google listing by searching the business name plus the city in Google Maps.",
      "Put the critical items at the top of a fix list, then the substantive, then the cosmetic.",
      "For each critical and substantive item, note where the correction must be made.",
      "Estimate how long the whole list would take to fix."
    ],
    deliver: "A prioritised conflict fix list with each item classified and a time estimate for completion."
  },
  chal: {
    title: "Write the NAP standard document",
    brief: "Create the one-page standard for your practice business: the exact name with exact punctuation, the exact address format including how to write the suite number, the exact phone format, the exact website URL, the official hours, and the official short description. Then write short instructions for anyone who creates a new listing in future, including what they must never change. Make it something a non-marketing employee could follow without misunderstanding.",
    success: [
      "The document specifies exact formats, not general guidance.",
      "It includes instructions for future listings and states what must never be altered.",
      "A non-specialist could use it to create a correct listing without asking questions."
    ]
  }
},

"1.3.6": {
  t: "How user behaviour teaches Google about you",
  why: "Google watches what people do with your listing. Understanding which behaviours matter changes how you think about photos, hours and even your phone.",
  body: [
    "h: The feedback loop",
    "p: Google shows results, people interact with them, and Google learns from what happened. In local search this loop is unusually tight, because the actions are clear: someone tapped Call, someone requested Directions, someone clicked through to the website.",
    "p: Google has never published exactly how it uses this data, and practitioners disagree about the weight. But the direction is not seriously disputed: **listings people choose and engage with tend to do better over time.**",

    "h: The behaviours Google can see",
    "l: Clicks on your listing from the Local Pack or Maps.|Taps on Call, Directions, Website, Message, Booking.|How long people spend looking at your profile.|Whether they returned to the results and picked someone else.|Photo views and photo uploads by customers.|Saves and shares of your business in Maps.|Searches for your business by name, which we covered in lesson 1.3.3.|Reviews being left, which is both a behaviour and a prominence signal.",
    "term: Pogo-sticking|When someone clicks a result, comes straight back, and clicks a different one. It suggests the first result did not satisfy them.",

    "h: Why this is not a trick you can game",
    "warn: Do not attempt to fake engagement|Buying clicks, using click bots, or asking staff to repeatedly search and tap your listing is both against the rules and largely ineffective. Google is very good at distinguishing genuine local behaviour from artificial patterns, partly because real behaviour has geographic and time-of-day texture that fakes lack.",

    "h: What actually improves engagement",
    "n: **Better photos.** The single biggest driver of whether someone chooses your listing over the one above it. Level 3 module 2.|**A rating above your local average.** People compare, they do not judge absolutely.|**Complete information.** Hours, services, attributes. Missing information causes people to move on.|**Correct hours, especially 'Open now'.** A listing shown as closed loses the click entirely.|**A working phone that a human answers.** This affects repeat behaviour and reviews.|**Content on your site worth quoting,** so Google can show a compelling justification line under your listing.",

    "ex: The photo effect|Two identical listings sit side by side. One has a clear, bright exterior photo showing the shopfront and signage. The other has a dark, blurry interior shot. The first gets substantially more clicks. Over months, that difference compounds — more clicks, more visits, more reviews, more prominence.",

    "h: Engagement and the three forces",
    "p: Engagement is best understood as feeding **prominence**. It is evidence that real people in the real world choose and use this business. That is exactly what prominence is trying to measure.",

    "h: What this means for your priorities",
    "p: It means that work which looks like 'conversion optimisation' is also local SEO. Improving your photos, fixing your hours, answering the phone — these are not separate from ranking. They feed the loop.",
    "tip: The compounding insight|In local search, doing well makes you do better. More clicks lead to more customers, more customers lead to more reviews, more reviews lead to higher ranking, higher ranking leads to more clicks. Your job is often just to get the loop started and keep it clean.",

    "h: Where to see your own engagement data",
    "p: Your Google Business Profile provides performance data showing how many people viewed your profile, how they found it, and how many called, requested directions or visited your website. We cover reading it properly in Level 9 module 2. For now, know that this data exists and that it is the closest view you have of the feedback loop."
  ],
  take: [
    "Google watches how people interact with your listing: calls, direction requests, website clicks, photo views and more.",
    "Listings that people choose and engage with tend to perform better over time.",
    "Faking engagement does not work and breaks the rules — real behaviour has patterns that fakes lack.",
    "Photos, ratings, complete information and correct hours are what genuinely improve engagement.",
    "Engagement feeds prominence, which means conversion work and ranking work are the same work."
  ],
  self: [
    "I can list at least six behaviours Google can observe around a local listing.",
    "I can explain why artificially generating clicks is both risky and ineffective.",
    "I can name the four changes most likely to improve genuine engagement.",
    "I can explain the compounding loop between engagement, reviews and ranking."
  ],
  quiz: [
    { q: "Which of these most directly improves how often people choose your listing over a competitor's?",
      a: ["Adding more secondary categories", "Better photos and a rating above the local average", "Writing a longer description", "Posting daily updates"],
      c: 1,
      why: "When three listings are side by side, the photo and the rating are the main visual decision points. They drive the choice far more than description length or posting frequency." },
    { q: "Why is faking engagement a bad idea?",
      a: ["It is expensive", "It breaks the rules and real local behaviour has geographic and time patterns that fakes lack", "It only works on desktop", "It requires a developer"],
      c: 1,
      why: "Beyond being against the rules, artificial engagement lacks the natural geographic spread and timing of real customer behaviour, which makes it detectable and ineffective." },
    { q: "Engagement signals are best understood as feeding which of the three forces?",
      a: ["Relevance", "Distance", "Prominence", "None of them"],
      c: 2,
      why: "Engagement is evidence that real people choose and use the business. That real-world validation is precisely what prominence measures." }
  ],
  ex: {
    title: "Improve one engagement lever and record the baseline",
    time: "30 minutes",
    intro: "You will set up a real before-and-after test on the lever with the clearest effect.",
    steps: [
      "Open your practice business's profile performance data and record the last 28 days: profile views, calls, direction requests and website clicks.",
      "Screenshot the current main photo shown in search results.",
      "Compare that photo side by side with the top three competitors' photos and judge honestly whether yours would be chosen.",
      "Replace the main photo with the best available alternative: bright, clear, showing the real premises or work.",
      "Record the date of the change.",
      "Set a reminder to check the same four numbers 28 days later."
    ],
    deliver: "A recorded 28-day baseline, a documented change with its date, and a scheduled follow-up check."
  },
  chal: {
    title: "Design an engagement improvement programme",
    brief: "For your practice business, design a three-month programme aimed only at improving genuine engagement — not rankings, not links, not citations. Include specific changes to photos, hours, information completeness, response handling and anything else that affects whether a real person chooses and contacts this business. For each item, state the metric you would expect to move and by roughly how much. Then state honestly which items you are least confident about and why.",
    success: [
      "Your programme contains at least eight specific, concrete actions.",
      "Each action names the metric it should move.",
      "You have identified your least confident items and explained the uncertainty rather than hiding it."
    ]
  }
}

});
