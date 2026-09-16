/* Level 4 · Module 3 — Local Schema and Technical Signals */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"4.3.1": {
  t: "What structured data is, in plain words",
  why: "Structured data sounds technical and frightening. It is actually simple, and understanding it removes a barrier that stops many people doing genuinely valuable work.",
  body: [
    "h: The idea in one paragraph",
    "p: Your web page shows information to humans. A human reading 'Open 9am to 5pm' understands it immediately. A computer reading the same words has to guess what they mean. **Structured data is a way of writing the same facts in a form the computer cannot misunderstand.**",
    "term: Structured data|Extra information added to a web page, written in a standard format, that states facts about the page clearly for machines to read.",
    "term: Schema|The shared vocabulary that defines what those facts can be — business name, address, opening hours, price, rating and hundreds more.",

    "h: What it looks like",
    "p: It is usually a small block of code added to the page, invisible to visitors. Here is a simplified example:",
    "code: {\n  \"@type\": \"LocalBusiness\",\n  \"name\": \"Northgate Heating\",\n  \"telephone\": \"+44 113 496 0000\",\n  \"address\": {\n    \"streetAddress\": \"12 Mill Street\",\n    \"addressLocality\": \"Leeds\",\n    \"postalCode\": \"LS6 2AB\"\n  }\n}",
    "p: That is all it is: a list of facts, labelled. You do not need to write it by hand — most website systems have tools or plugins that generate it.",

    "h: Why it matters for local SEO",
    "n: **It removes ambiguity about your core data.** Your name, address and phone stated unambiguously supports the entity consistency covered in lesson 1.3.4.|**It helps confirm your profile information.** As lesson 3.4.1 explained, a website that clearly states the same hours reduces unwanted automatic changes.|**It can enable richer search results.** Ratings, prices, opening status and events can appear in results in some cases.|**It scales.** For multi-location businesses, structured data is how each location page states its own distinct facts.",

    "warn: What structured data does not do|It is not a ranking boost you can switch on. Adding schema to a weak page does not make it rank. It clarifies and can enhance how your information is understood and displayed. Treat it as plumbing, not as a lever.",

    "h: The formats",
    "l: **JSON-LD** — a separate block of code, usually in the page head. This is the recommended and easiest format, because it is separate from the visible content.|**Microdata** — attributes added inside the visible HTML. Older, more fiddly.|**RDFa** — another older format.",
    "p: Use JSON-LD unless you have a specific reason not to. It is easier to add, easier to check and easier to maintain.",

    "h: The golden rule",
    "box: **Structured data must match what is on the page and what is true.**",
    "p: Marking up a rating you do not have, an address you do not occupy, or prices you do not charge is a policy violation and can lead to the markup being ignored or penalised. It must describe reality.",
    "tip: You do not need to be a developer|Most website platforms have a plugin or built-in setting for local business schema. Fill in the fields correctly and it generates the code. The skill you need is knowing what should be there and how to check it — which lessons 4.3.2 and 4.3.5 cover. Leave the code writing to the tool."
  ],
  take: [
    "Structured data states the facts on your page in a form machines cannot misinterpret.",
    "Schema is the shared vocabulary of those facts; JSON-LD is the recommended format.",
    "For local SEO it removes ambiguity about core data, supports profile consistency and can enable richer results.",
    "It is not a ranking lever — adding it to a weak page does not make the page rank.",
    "It must match what is on the page and what is true; fabricated markup is a policy violation."
  ],
  self: [
    "I can explain structured data to a non-technical person in two sentences.",
    "I know the difference between schema and structured data.",
    "I know that JSON-LD is the format to use and why.",
    "I know the golden rule that markup must match reality."
  ],
  quiz: [
    { q: "What does structured data actually do?",
      a: ["Boosts rankings directly", "States the facts on your page in a standard form machines can read without guessing", "Makes pages load faster", "Replaces the need for content"],
      c: 1,
      why: "It removes ambiguity about facts such as name, address, hours and prices. It clarifies rather than boosts." },
    { q: "Which format should you normally use?",
      a: ["Microdata", "RDFa", "JSON-LD", "Plain text"],
      c: 2,
      why: "JSON-LD sits separately from the visible content, which makes it easier to add, check and maintain than formats embedded in the HTML." },
    { q: "What happens if you mark up a rating the business does not actually have?",
      a: ["It works fine", "It is a policy violation and the markup may be ignored or penalised", "Google corrects it", "It improves rankings"],
      c: 1,
      why: "Structured data must describe reality and match the page. Fabricated markup risks having all markup disregarded or worse." }
  ],
  ex: {
    title: "Find and read existing structured data",
    time: "25 minutes",
    intro: "You will look at real structured data and discover it is not frightening.",
    steps: [
      "Open your practice business's homepage and view the page source.",
      "Search the source for the word 'schema' or 'LocalBusiness'.",
      "If you find a JSON-LD block, copy it out and read what facts it states.",
      "Check each fact against reality: is the name, address, phone and are the hours correct?",
      "Do the same for two competitors and note what they include that you do not.",
      "Write down whether structured data exists at all and whether it is accurate."
    ],
    deliver: "A record of what structured data exists on three sites, what facts it states, and whether each is accurate."
  },
  chal: {
    title: "Explain structured data to a business owner",
    brief: "Write an explanation of structured data for a business owner with no technical knowledge, under 250 words, with no code. It should explain what it is, why it matters for their local visibility, what it will not do, roughly what it costs to add, and what you need from them to do it properly. End with a clear recommendation. The test is whether they would approve the work without feeling they were being baffled into agreeing.",
    success: [
      "Under 250 words, no code, no unexplained technical terms.",
      "You set honest expectations including what it will not do.",
      "It ends with a clear recommendation and states what you need from them."
    ]
  }
},

"4.3.2": {
  t: "LocalBusiness schema field by field",
  why: "Knowing which fields to fill, and what belongs in each, is the practical skill. This lesson gives you the checklist.",
  body: [
    "h: Choosing the right type",
    "p: LocalBusiness is the general type. There are many more specific types beneath it — Dentist, Restaurant, Plumber, LegalService, HealthAndBeautyBusiness and many others.",
    "l: **Use the most specific type that accurately describes the business.** A dentist should use Dentist, not LocalBusiness.|If no specific type fits, use LocalBusiness.|Do not use a type that is inaccurate because it sounds better.",

    "h: The core fields",
    "table: Field ; What goes in it ; Notes || name ; The business name ; Exactly as on the profile and signage || address ; Street, locality, region, postcode, country ; Must match the profile exactly || telephone ; The main business number ; The real number, not a tracking number || url ; The page this represents ; Location page for multi-location || openingHoursSpecification ; Days and times ; Include all days, and any split hours || geo ; Latitude and longitude ; Should match the map pin || image ; A real photo URL ; Not a logo, a genuine photo || priceRange ; An indication such as a symbol range or a bracket ; Optional, keep it honest || description ; Short description of the business ; Can mirror the profile description || sameAs ; URLs of official profiles ; Social pages, the Google listing, official directories",

    "h: Fields that matter more than people expect",
    "n: **geo coordinates.** Stating your exact position removes ambiguity, particularly for addresses that geocode poorly.|**sameAs.** Listing your official profiles connects your entity across the web, supporting the entity resolution covered in lesson 1.3.4.|**openingHoursSpecification.** As lesson 3.4.1 explained, a website clearly stating hours reduces unwanted automated changes to your profile.|**areaServed.** For service area businesses, this states where you operate, covered in lesson 4.3.3.",

    "h: Fields to be careful with",
    "warn: aggregateRating|Marking up a star rating is only permitted under specific conditions, and marking up reviews you collected yourself to display stars in search results has been subject to changing rules and enforcement. Never fabricate ratings, never mark up ratings from another platform as your own, and check current guidance before implementing. When in doubt, leave it out — the risk outweighs the gain.",
    "l: **priceRange** should be honest and general, not a precise claim you cannot support.|**hasMap** should point at the correct map location.|**employee** and **founder** should name real people.|Do not add fields you cannot verify.",

    "h: A practical worked example",
    "code: {\n  \"@context\": \"https://schema.org\",\n  \"@type\": \"Dentist\",\n  \"name\": \"Clifton Dental Practice\",\n  \"url\": \"https://example.com/\",\n  \"telephone\": \"+44 117 496 0000\",\n  \"image\": \"https://example.com/images/practice-exterior.jpg\",\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"streetAddress\": \"14 Mill Street\",\n    \"addressLocality\": \"Bristol\",\n    \"postalCode\": \"BS8 1AB\",\n    \"addressCountry\": \"GB\"\n  },\n  \"geo\": {\n    \"@type\": \"GeoCoordinates\",\n    \"latitude\": 51.4545,\n    \"longitude\": -2.6100\n  },\n  \"openingHoursSpecification\": [{\n    \"@type\": \"OpeningHoursSpecification\",\n    \"dayOfWeek\": [\"Monday\",\"Tuesday\",\"Wednesday\",\"Thursday\",\"Friday\"],\n    \"opens\": \"08:30\",\n    \"closes\": \"17:30\"\n  }],\n  \"sameAs\": [\n    \"https://www.facebook.com/example\",\n    \"https://g.page/example\"\n  ]\n}",

    "h: Where to put it",
    "l: On the homepage for a single-location business.|On each location page for a multi-location business, with that location's own details.|Not repeated identically on every page of a multi-location site, which would state contradictory facts.",
    "tip: Match everything to the profile character by character|The main value of this markup is corroboration. If your schema says 'Suite 3, 14 Mill Street' and your profile says '14 Mill St', you have added a contradiction rather than a confirmation. Copy and paste from your NAP standard document, never retype."
  ],
  take: [
    "Use the most specific accurate business type, not the generic LocalBusiness, where one exists.",
    "Core fields are name, address, telephone, url, hours, geo, image, description and sameAs.",
    "geo coordinates, sameAs and opening hours matter more than most people expect.",
    "Be cautious with aggregateRating — rules change and fabricated ratings are a serious violation.",
    "Match every value to the Google profile character by character, copying from your NAP standard."
  ],
  self: [
    "I can choose the correct schema type for a business.",
    "I can name the core fields and what belongs in each.",
    "I know why geo, sameAs and hours matter particularly.",
    "I know to be cautious with rating markup and why."
  ],
  quiz: [
    { q: "A dental practice is adding schema. Which type should it use?",
      a: ["LocalBusiness", "Dentist", "Organization", "WebPage"],
      c: 1,
      why: "Use the most specific accurate type available. Dentist describes the business precisely, which is more informative than the generic LocalBusiness." },
    { q: "Why must schema values match the Google profile exactly?",
      a: ["Google requires identical formatting by law", "The value of the markup is corroboration — a mismatch adds a contradiction instead", "It makes the page load faster", "It is not necessary"],
      c: 1,
      why: "Structured data exists to confirm your facts. Differing values create the entity confusion described in lesson 1.3.5 rather than resolving it." },
    { q: "What is the safe approach to aggregateRating markup?",
      a: ["Always include it with your best rating", "Be cautious, never fabricate, and check current guidance — when in doubt leave it out", "Copy ratings from other platforms", "Estimate it"],
      c: 1,
      why: "Rules and enforcement around rating markup have changed repeatedly, and fabricated or borrowed ratings are a serious violation with limited upside." }
  ],
  ex: {
    title: "Build the schema specification",
    time: "30 minutes",
    intro: "You will specify exactly what your practice business's structured data should contain.",
    steps: [
      "Determine the most specific accurate schema type for the business.",
      "Copy the exact name, address and phone from your NAP standard document.",
      "Find the correct latitude and longitude from the map pin.",
      "Write out the opening hours including any split hours.",
      "List the official profile URLs for the sameAs field.",
      "Assemble the full specification as a list of field names and values, ready to hand to a developer or enter into a plugin."
    ],
    deliver: "A complete field-by-field schema specification with values copied from the NAP standard."
  },
  chal: {
    title: "Audit and correct existing markup",
    brief: "Take a real local business website with existing structured data. Extract every field and value. Check each against the Google profile, the visible page content and reality. Document every mismatch, missing field and questionable value. Then write the corrected specification and a short explanation of which corrections matter most and why. Include any field you would recommend removing entirely, with the reasoning.",
    success: [
      "You checked every field against the profile, the page and reality, not just one of these.",
      "You distinguished important mismatches from cosmetic ones.",
      "You recommended removing at least one field where appropriate and justified it."
    ]
  }
},

"4.3.3": {
  t: "Schema for service areas, multi-location and departments",
  why: "The standard examples assume one shop at one address. Real businesses are more complicated, and these are the patterns for handling them.",
  body: [
    "h: Service area businesses",
    "p: A service area business has no public address, so the markup must reflect that.",
    "l: Use the **areaServed** field to state the places you serve.|Consider the **ServiceArea** or equivalent approach for businesses with no customer-visiting address.|Do **not** publish a full street address in schema if you are hiding it on your profile — that would defeat the privacy entirely, as lesson 2.2.4 warned.|You may still state the locality and region without the street address, where that is accurate and acceptable to the business.|Include hours, phone, services and everything else that does apply.",
    "warn: The privacy contradiction|Businesses regularly hide their address on Google and then publish it in full in their website's structured data. The address is then entirely public. Whatever you decide about privacy must be applied consistently across the profile, the visible website, the structured data and the citations.",

    "h: Multi-location businesses",
    "n: Put the markup for **each location on its own location page**, describing that location only.|Do not repeat one location's markup on every page of the site.|Optionally add **Organization** markup on the homepage describing the parent brand, with the locations as separate entities.|Each location's markup should state its own hours, phone, geo coordinates and image.|Each should link via **url** to its own page, matching what the Google profile links to.",
    "table: Page ; Markup type ; Contains || Homepage ; Organization ; Brand name, logo, sameAs, main contact || Locator index ; Optional ; Could list locations || Each location page ; LocalBusiness or specific type ; That location's full distinct details || Service page ; Service ; The service, provider, area served",

    "h: Departments",
    "p: Where a business has genuinely distinct departments with their own listings, as covered in lesson 2.2.6, the **department** field allows them to be described as part of the parent. Each department can have its own hours and phone.",
    "l: Use it where the departments are genuine and have their own profiles.|Give each its own hours, which usually differ from the parent.|Keep each department's markup on the relevant page.",

    "h: Services",
    "p: Individual service pages can use **Service** markup to describe what is offered:",
    "l: The service name.|The provider, which links back to the business.|The area served.|Where honest, an indication of price.",
    "p: This supports the modifier relevance discussed in lesson 1.2.2 by stating clearly what specific services the business offers.",

    "h: Practitioners",
    "p: For individual professionals with their own pages and listings, **Person** markup with their role, qualifications and a link to the organisation states the relationship clearly. It supports the practitioner structure from lesson 2.1.5.",

    "tip: One page, one primary entity|The simplest rule that prevents most confusion: each page should have one clear primary thing it is about, and the markup should describe that thing. A location page is about that location. A service page is about that service. A practitioner page is about that person. Mixing several primary entities into one page's markup creates ambiguity.",

    "ex: The repeated address|A chain with twenty-two branches used the same website template with the head office address in the structured data on every page, including every branch page. Every location page therefore stated the wrong address in machine-readable form while displaying the right one visibly. It took one developer afternoon to make the markup dynamic per location, and it removed twenty-two contradictions that had existed for years."
  ],
  take: [
    "Service area businesses use areaServed and must not publish a street address in schema if they hide it on the profile.",
    "Privacy decisions must be applied consistently across profile, website, structured data and citations.",
    "Multi-location businesses put each location's own markup on its own location page, never repeated site-wide.",
    "Use Organization markup for the brand, LocalBusiness for each location, Service for service pages, Person for practitioners.",
    "One page, one primary entity — the markup should describe what that page is actually about."
  ],
  self: [
    "I know how to mark up a service area business without exposing a hidden address.",
    "I can structure markup across a multi-location site.",
    "I know when to use Organization, LocalBusiness, Service and Person.",
    "I apply the one page, one primary entity rule."
  ],
  quiz: [
    { q: "A business hides its address on Google but publishes it fully in website structured data. What is the result?",
      a: ["Privacy is maintained", "The address is public, defeating the privacy decision entirely", "Google removes the schema", "The listing is suspended"],
      c: 1,
      why: "Structured data is publicly readable. Privacy only holds if the decision is applied consistently across every source." },
    { q: "Where should each location's LocalBusiness markup appear on a multi-location site?",
      a: ["On every page of the site", "On that location's own page only", "Only on the homepage", "In a single combined block"],
      c: 1,
      why: "Each location page should describe that location. Repeating one location's details site-wide states contradictory facts on every other page." },
    { q: "Which markup type suits an individual professional with their own page and listing?",
      a: ["Organization", "Service", "Person", "WebPage"],
      c: 2,
      why: "Person markup describes the individual, their role and qualifications, and links them to the organisation, matching the practitioner listing structure." }
  ],
  ex: {
    title: "Map markup to page types",
    time: "25 minutes",
    intro: "You will produce the specification for a whole site rather than one page.",
    steps: [
      "List every page type on your practice business's website.",
      "For each, decide which markup type applies.",
      "For each, list the specific fields that page should state.",
      "Identify any page currently carrying markup that describes something other than what the page is about.",
      "For a service area business, specify how the address will be handled consistently.",
      "Write the whole thing as a page-type to markup-type specification."
    ],
    deliver: "A site-wide markup specification mapping every page type to its markup type and fields."
  },
  chal: {
    title: "Specify markup for a complex organisation",
    brief: "Write the complete structured data specification for a business with a head office, twelve branches, four of which have genuinely separate departments with their own listings, plus eighteen named practitioners across the branches. Specify what markup appears on which page, how the entities relate to each other, what each states, and how you would keep it accurate as staff and branches change. Identify the two points most likely to drift out of date and specify the process that prevents it.",
    success: [
      "Your specification handles brand, branch, department and practitioner entities and their relationships.",
      "It places markup on the correct pages without repetition or contradiction.",
      "You identified the drift risks and specified a maintenance process."
    ]
  }
},

"4.3.4": {
  t: "Connecting schema, profile and NAP",
  why: "Structured data delivers its value only when it agrees with everything else. This lesson is about making all your sources say one thing.",
  body: [
    "h: The single source of truth",
    "p: You built a NAP standard in lesson 1.3.5. That document is the authority. Every other source copies from it:",
    "n: The Google Business Profile.|The visible website content, especially the footer and contact page.|The structured data.|Every citation.|Social profiles.|Invoices, signage and printed material.",
    "warn: Retyping is the enemy|Almost every inconsistency in local SEO begins with someone retyping an address from memory rather than pasting it. Make the standard document the only place the values are written, and copy from it every single time.",

    "h: The three-way check",
    "p: The most valuable quick audit in this whole module:",
    "l: Open the Google profile.|Open the website's visible contact details.|Open the website's structured data.|Compare name, address, phone, hours and website URL across all three, character by character.",
    "p: A surprising proportion of businesses fail this check, usually on a suite number, a phone format or hours.",

    "h: Why agreement matters",
    "p: As established in lesson 1.3.1, Google is trying to confirm facts. Three independent-looking sources stating identical values is strong confirmation. Three sources stating three variations is a small permanent drag on confidence.",
    "p: Structured data is particularly valuable here because it is unambiguous. Visible text can be formatted many ways. Structured data states each component in a labelled field, which removes the interpretation step entirely.",

    "h: The sameAs connection",
    "p: The sameAs field lists the official profiles that represent the same entity. Including your Google listing, your main social profiles and any authoritative directory entries helps connect the entity across the web.",
    "l: Only include profiles the business genuinely controls.|Use the canonical URL of each profile.|Do not include dozens of low-quality directory pages.|Keep it current — remove profiles that no longer exist.",

    "h: Hours as a special case",
    "p: Hours change more often than any other field, which makes them the most likely to drift. A practical approach:",
    "n: Maintain hours in one place in the website's content management system.|Have the structured data generated from that same source, not written separately.|Update the Google profile at the same time as the website, as a single task.|Set special hours for holidays in both, as covered in lesson 2.3.4.|Include hours updating in the monthly routine from lesson 3.4.6.",
    "tip: Make the website the machine-readable mirror of the profile|Aim for a state where anyone — human or machine — reading your website would produce exactly the same answers as reading your Google profile. When that is true, you have removed an entire category of problems permanently.",

    "ex: The hours that disagreed three ways|A clinic's profile said it closed at 5.30. Its website footer said 5.00. Its structured data, added two years earlier by a previous developer, said 6.00. Google periodically changed the profile hours, patients arrived at the wrong times, and nobody understood why. One afternoon of reconciliation ended a problem that had been generating complaints for two years."
  ],
  take: [
    "The NAP standard document is the single source of truth; every other source copies from it.",
    "Retyping values from memory is the origin of almost every inconsistency — always paste.",
    "Run the three-way check across profile, visible website content and structured data, character by character.",
    "Use sameAs to connect official profiles the business genuinely controls, and keep it current.",
    "Hours drift most often — generate structured data hours from the same source as the visible ones."
  ],
  self: [
    "I know what the single source of truth is and how it should be used.",
    "I can run the three-way check.",
    "I know what belongs in sameAs and what does not.",
    "I know why hours are the field most likely to drift and how to prevent it."
  ],
  quiz: [
    { q: "What is the three-way check?",
      a: ["Checking three competitors", "Comparing name, address, phone and hours across the Google profile, visible website content and structured data", "Testing three page speeds", "Checking three search engines"],
      c: 1,
      why: "These three sources should state identical values. Comparing them character by character reveals inconsistencies that quietly reduce entity confidence." },
    { q: "What should the sameAs field contain?",
      a: ["Every directory the business appears on", "The official profiles the business genuinely controls", "Competitor profiles", "Keyword variations"],
      c: 1,
      why: "sameAs connects the entity across its own official presences. Listing dozens of low-quality directory pages adds noise rather than confirmation." },
    { q: "Which field is most likely to drift out of sync between sources?",
      a: ["Business name", "Street address", "Opening hours", "Country"],
      c: 2,
      why: "Hours change frequently in normal business life, and they are usually stored in several places, so they drift unless generated from a single source." }
  ],
  ex: {
    title: "Run the three-way check",
    time: "25 minutes",
    intro: "You will find the inconsistencies that quietly cost confidence.",
    steps: [
      "Open your practice business's Google profile and record name, address, phone, hours and website URL.",
      "Open the website's footer and contact page and record the same five values.",
      "Extract the structured data and record the same five values.",
      "Compare all three character by character and mark every difference.",
      "Identify the single source of truth and correct the other two to match it.",
      "Note where each value is stored so future updates happen in one place."
    ],
    deliver: "A completed three-way check with every difference identified and a note of where each value is maintained."
  },
  chal: {
    title: "Build the single-source system",
    brief: "Design a system for your practice business where every one of its core facts is maintained in exactly one place and flows automatically or by defined process to every other. Specify where the master values live, how the website content gets them, how the structured data gets them, how the Google profile is updated, how citations are kept aligned, and who is responsible. Then identify every point where the system depends on a human remembering something, and reduce those points as far as possible.",
    success: [
      "Your system names a single master location for each core fact.",
      "You specified the flow to every downstream source including citations.",
      "You identified the human-dependent points and reduced them, rather than assuming people will remember."
    ]
  }
},

"4.3.5": {
  t: "Testing and debugging your structured data",
  why: "Unverified markup is often broken markup. Testing takes minutes and catches errors that would otherwise sit there for years doing nothing.",
  body: [
    "h: Why testing is essential",
    "p: Structured data fails silently. A missing bracket, a wrong field name or a malformed date means the whole block may be ignored, and nothing on the page looks different. Businesses routinely have markup that has done nothing since the day it was added.",

    "h: The tools",
    "l: **Google's Rich Results Test** — checks whether the markup is valid and whether it is eligible for enhanced display.|**The Schema Markup Validator** — checks the markup against the schema vocabulary generally, without the display-eligibility layer.|**Search Console** — reports structured data errors found across the whole site over time, which is the only way to catch problems at scale.|**Viewing the page source** — for confirming the markup is actually present on the live page.",

    "h: The testing sequence",
    "n: **Confirm it exists.** View the live page source and find the markup. Markup that only exists in a staging version does nothing.|**Validate it.** Run the page through a validator and fix any errors.|**Check the warnings.** Warnings are usually missing recommended fields, worth adding but not fatal.|**Check the values.** The validator confirms the format is correct, not that the facts are true. Read the extracted values and check each against reality.|**Check across templates.** Test one of each page type, not just the homepage.|**Monitor in Search Console** for errors appearing later.",
    "warn: Validators check syntax, not truth|A validator will happily accept a perfectly formatted address that belongs to a different business. Automated testing never replaces reading the values and checking them. This is where the three-way check from lesson 4.3.4 belongs.",

    "h: Common errors and what they mean",
    "table: Error ; Usual cause ; Fix || Missing required field ; Field omitted from the template ; Add it to the template || Invalid value type ; A number written as text, or a badly formatted date ; Correct the format || Markup not found ; Added to staging only, or blocked from rendering ; Confirm it is on the live page || Duplicate markup ; Two plugins both generating schema ; Disable one || Values do not match page ; Template hardcoded with head office details ; Make values dynamic per page || Broken JSON ; A missing comma or bracket ; Validate and correct",

    "h: The duplicate markup problem",
    "p: A very common issue: a website theme generates LocalBusiness markup, and a plugin generates it too. The page then contains two conflicting blocks, sometimes with different values. Check for this specifically — it is easy to miss and it undermines the whole purpose.",

    "h: After a website change",
    "p: Structured data breaks during redesigns, plugin updates and platform migrations, exactly like the broken links in lesson 2.3.6.",
    "l: Re-test after any redesign.|Re-test after any platform or plugin update.|Include it in the quarterly checks from lesson 3.4.6.|Watch Search Console for new errors, which is the only automatic warning you will get.",
    "tip: Test one page of every type|A site can have perfect homepage markup and broken location page markup. Testing only the homepage is the most common testing mistake. Test one example of each template: homepage, service page, location page, practitioner page.",

    "ex: Two years of nothing|A business proudly reported it had structured data. Testing revealed a missing closing bracket introduced during a theme update eighteen months earlier, which meant the entire block had been invalid and ignored since then. The fix took two minutes. Nobody had ever tested it."
  ],
  take: [
    "Structured data fails silently — invalid markup looks identical to working markup on the page.",
    "Test with the Rich Results Test and the Schema Markup Validator, and monitor Search Console for site-wide errors.",
    "Validators check format, not truth — always read the extracted values and check them against reality.",
    "Watch for duplicate markup from a theme and a plugin both generating it.",
    "Test one page of every template type, not just the homepage, and re-test after any site change."
  ],
  self: [
    "I know why structured data fails silently.",
    "I can name the main testing tools and what each checks.",
    "I know that validators do not check whether facts are true.",
    "I test one page of each template type and re-test after site changes."
  ],
  quiz: [
    { q: "Why is untested structured data often useless?",
      a: ["It slows the page", "It fails silently — invalid markup is ignored and the page looks identical", "Google charges for it", "It expires annually"],
      c: 1,
      why: "A missing bracket or wrong field name can invalidate the whole block with no visible symptom, so errors persist for years unnoticed." },
    { q: "A validator reports no errors. What does this confirm?",
      a: ["That all the facts are correct", "That the format is valid — it says nothing about whether the values are true", "That the page will rank", "That rich results will appear"],
      c: 1,
      why: "Validation is a syntax check. A perfectly formatted address belonging to a different business passes validation without difficulty." },
    { q: "What is the most common structured data testing mistake?",
      a: ["Testing too often", "Testing only the homepage rather than one page of each template type", "Using two validators", "Reading the values"],
      c: 1,
      why: "Different templates generate different markup. Homepage markup can be perfect while every location page is broken or carries the wrong values." }
  ],
  ex: {
    title: "Test and fix structured data",
    time: "30 minutes",
    intro: "You will find out whether the markup actually works.",
    steps: [
      "Identify every page template type on your practice business's website.",
      "Run one example of each through a structured data validator.",
      "Record every error and every warning.",
      "Read the extracted values on each and check them against reality and against the Google profile.",
      "Check the page source of each for duplicate markup blocks.",
      "Write a fix list separating syntax errors, missing fields and wrong values."
    ],
    deliver: "Test results for every template type with errors, warnings, value checks and a categorised fix list."
  },
  chal: {
    title: "Build the structured data monitoring routine",
    brief: "Design an ongoing routine that would catch structured data problems before they persist for months. Specify what is tested, how often, by whom, what triggers an immediate check, how Search Console reporting fits in, and how you would record results so degradation over time is visible. Then specify exactly what happens after a website redesign or platform change, since that is when most breakage occurs. Make it realistic for someone managing several sites.",
    success: [
      "Your routine covers periodic testing, event-triggered testing and automatic monitoring.",
      "It specifies a post-redesign procedure explicitly.",
      "It is realistic in time cost for someone managing several sites."
    ]
  }
},

"4.3.6": {
  t: "Speed, mobile and the technical basics for local",
  why: "This course deliberately excludes general technical SEO. But a handful of technical factors genuinely affect local conversions, and this lesson covers exactly those.",
  body: [
    "h: The scope of this lesson",
    "p: We are not covering general technical SEO — crawl budgets, rendering, international setups. Those matter for large sites and are a different subject. What matters here is the small set of technical issues that directly affect whether a local customer contacts you.",

    "h: The five that matter locally",
    "n: **Mobile usability.** Most local searches are on phones. If the site is hard to use on a phone, you lose customers who had already chosen you.|**Speed on a mobile connection.** A slow page loses people who are standing outside deciding where to go.|**Clickable phone numbers**, as covered in lesson 4.1.6. Technically trivial, commercially significant.|**Working forms and links.** Broken contact routes fail silently, as lesson 3.3.4 established.|**Secure connection.** A browser warning about an insecure site at the moment someone is about to enter their phone number is fatal to trust.",

    "h: Mobile usability, practically",
    "l: Text readable without zooming.|Buttons big enough to tap accurately.|No horizontal scrolling.|Menus that work with a thumb.|Forms usable on a small screen, with the correct keyboard appearing for phone and email fields.|Pop-ups that can be closed easily, and preferably not at all on arrival.|Contact details visible without scrolling on the main pages.",
    "warn: The arrival pop-up|A full-screen pop-up covering a local service page on a phone, before the visitor has read anything, is one of the most effective ways to lose a customer who was ready to call. If one exists, the first question should be whether it earns more than it costs.",

    "h: Speed, in proportion",
    "p: Speed matters, and it is easy to over-invest in. The practical standard for a local business site:",
    "l: The page should be usable within a few seconds on a mobile connection.|Large unoptimised images are the most common cause of slowness on local sites, and the easiest fix.|Too many third-party scripts — chat widgets, trackers, review widgets, map embeds — are the second most common cause.|Do not pursue perfect scores at the cost of removing things customers need.",
    "tip: Test on a real phone on mobile data|Not on a desktop, not on office wifi. Take a phone outside, turn off wifi, and load the site. That is the experience your customer has. It is frequently much worse than anyone at the business realises.",

    "h: The secure connection",
    "p: A site served insecurely may show a browser warning, particularly on pages with forms. For a local business asking for a phone number, that warning is decisive. This is a basic requirement rather than an optimisation.",

    "h: What not to worry about for a small local site",
    "l: Perfect performance scores.|Advanced crawl optimisation.|Complex internationalisation.|Heavy technical audits producing hundreds of low-priority items.",
    "p: For a twenty-page local website, these consume budget that would produce far more return spent on reviews, service pages or local links.",
    "ex: The misallocated budget|A local business spent a substantial sum on a technical audit producing 340 findings, of which perhaps six mattered. Meanwhile it had no service pages, 11 reviews, and a phone number that was not clickable on mobile. The audit was competently done and almost entirely irrelevant to its actual problem. Matching the work to the situation is part of the expertise."
  ],
  take: [
    "Only a handful of technical factors genuinely affect local conversion: mobile usability, mobile speed, clickable numbers, working contact routes and a secure connection.",
    "Test on a real phone using mobile data, not on a desktop on office wifi.",
    "Large unoptimised images and excessive third-party scripts are the two most common speed problems on local sites.",
    "Arrival pop-ups on mobile service pages are a common and costly conversion failure.",
    "For a small local site, heavy technical audits usually misallocate budget that reviews and service pages would repay better."
  ],
  self: [
    "I can name the five technical factors that matter most for local conversion.",
    "I test sites on a real phone on mobile data.",
    "I know the two most common causes of slowness on local sites.",
    "I can judge when a technical audit is the wrong investment for a small local business."
  ],
  quiz: [
    { q: "How should you test a local website's real-world speed and usability?",
      a: ["On a desktop using office wifi", "On a real phone using mobile data", "Using a score tool only", "Ask the developer"],
      c: 1,
      why: "That is the actual customer experience. Desktop and wifi testing routinely hides problems that make the site frustrating in the field." },
    { q: "What are the two most common causes of slow local business websites?",
      a: ["Too much text and too many headings", "Large unoptimised images and excessive third-party scripts", "Structured data and internal links", "Having a contact form"],
      c: 1,
      why: "Oversized images and a pile-up of chat widgets, trackers and embeds account for most slowness on small local sites, and both are fixable." },
    { q: "A twenty-page local site with no service pages and 11 reviews receives a 340-item technical audit. What is the problem?",
      a: ["The audit was done badly", "The work is competent but misallocated — reviews and service pages would repay far more", "Technical work never matters", "The site needs a redesign"],
      c: 1,
      why: "Matching the work to the actual constraint is part of the expertise. A thorough audit of a site whose problem is elsewhere consumes budget without addressing it." }
  ],
  ex: {
    title: "Run the local technical check",
    time: "30 minutes",
    intro: "You will check the five things that actually matter.",
    steps: [
      "Take a phone, turn off wifi, and load your practice business's website.",
      "Time roughly how long until the page is usable.",
      "Try to tap the phone number from three different pages.",
      "Submit a test enquiry through the contact form and confirm it arrives.",
      "Check for a browser security warning, especially on the contact page.",
      "Note any pop-up, unreadable text, tiny buttons or horizontal scrolling, and list every fix needed."
    ],
    deliver: "A five-point local technical check performed on a real phone with a prioritised fix list."
  },
  chal: {
    title: "Prioritise a technical audit for a local business",
    brief: "Take a long technical audit — either a real one or a standard checklist of common findings — and sort every item into three groups: directly affects whether a local customer contacts us, indirectly relevant, and irrelevant for this business. Then write the recommendation you would give the owner, stating which handful of items to fix and which to ignore, with the reasoning. Finally, estimate what the ignored items would cost to fix and what you would recommend spending that money on instead.",
    success: [
      "You sorted every item rather than only picking favourites.",
      "Your recommendation names a small number of fixes with clear reasoning.",
      "You proposed a specific alternative use for the money saved."
    ]
  }
}

});
