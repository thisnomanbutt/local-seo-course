/* Level 8 · Module 3 — Hard Edge Cases */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"8.3.1": {
  t: "Service area address hiding and its side effects",
  why: "Hiding an address is required for service area businesses and creates a set of second-order problems most practitioners never anticipate.",
  body: [
    "h: What hiding actually does",
    "p: From lesson 2.1.3, hiding the address removes it from public display. Google still holds it and still measures distance from it. That single fact produces most of the side effects.",

    "h: The side effects",
    "n: **Directories still want an address.** Many citation sites require one, creating the consistency dilemma from lesson 6.2.3.|**Structured data becomes awkward.** You must not publish in schema what you hide on the profile, from lesson 4.3.3.|**Customers cannot verify you are local.** Some people are less willing to trust a business with no visible address.|**You cannot receive direction requests**, which removes a conversion signal and a data point.|**Trust signals must come from elsewhere** — reviews, photographs, accreditations.|**You cannot benefit from the storefront signals** that help visible businesses.|**Diagnosis is harder**, because you cannot see competitors' hidden addresses either.",

    "h: The consistency dilemma",
    "warn: Decide the policy once and apply it everywhere|The single biggest mistake is hiding on Google and publishing everywhere else. The decision must cover the profile, the website, the structured data, every citation, social profiles, invoices and printed material. Write it into the NAP standard from lesson 1.3.5 and follow it without exception.",
    "table: Situation ; Consistent approach || Directory requires a full address ; Provide locality and region only where permitted, or skip the directory || Directory requires a street address with no alternative ; Decide: provide it and accept publication, or omit the listing || Website contact page ; Show locality, service areas, phone and form; no street address || Structured data ; areaServed, no street address || Invoices and quotes ; A business decision; these are not usually public || Vehicle branding ; Phone and website, not the address",

    "h: Building trust without an address",
    "p: This is the practical consequence that matters commercially:",
    "l: Real photographs of the team, vehicles and completed work.|A named owner with a photograph.|Accreditations and trade body memberships displayed prominently.|Insurance details stated.|Local specifics in content that prove genuine local presence, from lesson 4.1.5.|Reviews from customers in named areas.|A landline number where possible, alongside mobiles.|A clear statement of the areas served and response times.",
    "tip: Say where you are based without giving the street address|'Based in Headingley, covering all of north Leeds' provides the local reassurance customers want without publishing a home address. It is honest, it is specific enough to build trust, and it is entirely compatible with hiding the address.",

    "h: The verification consequence",
    "p: Service area businesses often face stricter verification, from lesson 2.4.1, because the address cannot be checked from the street. Expect video verification and prepare the alternative evidence set from lesson 2.4.2: vehicles, tools, stock and documents.",

    "h: The diagnosis consequence",
    "p: You cannot see a competitor's hidden address, which means you cannot measure their distance from your grid points. This limits the decomposition in lesson 7.4.2. Workarounds:",
    "l: Their grid pattern reveals approximately where they are — the strongest point is near their base.|Their service area list indicates their rough centre.|Their reviews sometimes mention locations.|Their website may reveal a locality.|Accept the uncertainty and note it in the analysis.",

    "h: When to consider revealing",
    "p: Some service area businesses could legitimately display an address, if customers genuinely can be served there. That is a hybrid, from lesson 2.1.4. It is worth reconsidering when:",
    "l: The business acquires a genuine premises customers can visit.|It moves from home to a commercial unit with a customer-facing capability.|It genuinely begins taking appointments at its base.",
    "warn: But only if it is genuinely true|Revealing an address the business cannot support is the violation from lesson 2.1.4, and it is one of the highest-risk configurations. The walk-in test decides it, not the desire for the trust benefit.",
    "ex: The trust rebuild|A home-based service business worried that hiding its address cost it credibility. Rather than revealing it, the business added photographs of its branded van and equipment, a named owner profile, three accreditation logos with registration numbers, an insurance statement, and a line saying 'based in Headingley, covering north Leeds'. Enquiry-to-booking conversion improved noticeably. The address was never published."
  ],
  take: [
    "Hiding removes the address from display but not from Google's distance calculation.",
    "The consistency policy must cover the profile, website, structured data, citations, social profiles and printed material without exception.",
    "Build trust through photographs, named people, accreditations, insurance, local specifics and a stated base locality.",
    "Expect stricter verification and prepare the vehicle, tool and document evidence set instead.",
    "Only reveal an address if customers genuinely can be served there — the walk-in test decides it, not the trust benefit."
  ],
  self: [
    "I can name six side effects of hiding an address.",
    "I can apply a consistent address policy across every source.",
    "I know how to build trust without publishing an address.",
    "I know when revealing an address is legitimate and when it is a violation."
  ],
  quiz: [
    { q: "A service area business hides its address on Google and publishes it on twelve directories. What is the result?",
      a: ["The privacy benefit is preserved", "The address is public, the decision is undone, and the inconsistency also creates entity confusion", "The listings will be removed", "Google will hide them"],
      c: 1,
      why: "Privacy only holds if applied everywhere, and mixed publication also creates the contradictory data problem from lesson 1.3.5." },
    { q: "How can a hidden-address business provide local reassurance to customers?",
      a: ["By publishing the street address anyway", "By stating the base locality and areas covered, with photographs, accreditations and named people", "By using a virtual office address", "It cannot"],
      c: 1,
      why: "'Based in Headingley, covering north Leeds' gives the specificity customers want without publishing a private address, and trust signals do the rest." },
    { q: "When may a service area business legitimately reveal its address?",
      a: ["Whenever it wants the trust benefit", "Only when customers genuinely can be served there, which makes it a hybrid", "After two years of trading", "If competitors do"],
      c: 1,
      why: "The walk-in test from lesson 2.1.4 decides it. Displaying an address where customers cannot be served is one of the highest-risk configurations." }
  ],
  ex: {
    title: "Write the address policy and trust set",
    time: "30 minutes",
    intro: "You will resolve the dilemma consistently and build the compensating trust signals.",
    steps: [
      "Decide the address policy for your practice business and write it into the NAP standard.",
      "List every place the address currently appears and mark each for action.",
      "Write the locality statement: where the business is based and what it covers.",
      "List the trust signals currently present on the website.",
      "Identify the four strongest trust signals that are missing.",
      "Write the plan to add them."
    ],
    deliver: "A written address policy applied across every source, plus a locality statement and a trust signal plan."
  },
  chal: {
    title: "Audit hidden-address competitors",
    brief: "Find four service area businesses competing with your practice business. For each, work out as much as you can about their base location from their grid pattern, their service area list, their reviews and their website. Then assess how each handles the trust problem: what signals do they use in place of an address, and how convincing are they? Identify the strongest approach in the market and what would beat it. Note where your inference about their location is uncertain and how that limits your analysis.",
    success: [
      "You inferred approximate locations from multiple sources rather than guessing.",
      "You assessed each competitor's trust signal approach specifically.",
      "You stated where your inference is uncertain and how that limits the analysis."
    ]
  }
},

"8.3.2": {
  t: "Practitioner and business cannibalisation",
  why: "Practitioner listings are legitimate and frequently create self-competition. This lesson shows how to structure them so they help rather than harm.",
  body: [
    "h: What cannibalisation means here",
    "term: Cannibalisation|When two of your own listings compete for the same searches, splitting signals and weakening both.",
    "p: From lesson 2.1.5, practitioner listings are legitimate where multiple named professionals work at one location. The risk is that they compete with the business listing rather than complementing it.",

    "h: When it happens",
    "l: A single-practitioner business has both a business listing and a personal one.|A practitioner listing uses the same category as the business listing.|A practitioner listing links to the same page as the business listing.|The practitioner listing carries the business name rather than the person's name.|Several practitioner listings are effectively identical.|The business listing is neglected while practitioner listings are optimised, or vice versa.",

    "h: What Google usually does",
    "p: Near-duplicate listings at one address are commonly filtered, from lesson 2.1.5, so only one appears. The result:",
    "n: One listing is hidden, so the second listing provides no additional visibility.|Reviews are split between them, so both look weaker than the combined total.|Links and mentions are split.|Customers are confused about which to contact.|Neither accumulates full strength.",
    "warn: The appealing theory that does not work|The idea that multiple listings let you occupy several Local Pack slots is intuitive and generally wrong. Filtering exists precisely to prevent it. What you usually get is one visible listing that is weaker than a single consolidated one would have been.",

    "h: The correct structure",
    "table: Element ; Business listing ; Practitioner listing || Name ; The business name ; The practitioner's real name || Category ; The business's category ; The practitioner's own specialism, ideally different || Website link ; The homepage or location page ; That practitioner's own biography page || Phone ; The main number ; A direct line or extension where possible || Description ; About the business ; About that individual || Reviews ; From general customers ; From that practitioner's own clients || Photos ; The premises and team ; That practitioner",
    "tip: Difference is what prevents filtering|The more genuinely different the two listings are — different name, different category, different page, different phone, different photographs — the less they look like duplicates and the more likely both are to be useful. Sameness is what triggers filtering.",

    "h: Diagnosing cannibalisation",
    "n: Search the business name and see which listings appear.|Search the practitioner's name and see what appears.|Check whether both ever appear together for a service search.|Check whether reviews are split.|Check whether both link to the same page.|Check whether the categories are identical.",

    "h: Fixing it",
    "l: **Single practitioner:** consolidate to one listing, from lesson 2.1.5.|**Identical categories:** differentiate where genuinely accurate.|**Same website link:** build individual biography pages and point each listing at its own.|**Same phone:** assign extensions or direct lines where possible.|**Split reviews:** direct each practitioner's clients to review the correct listing, over time.|**Neglected listings:** either maintain them properly or remove them.",

    "h: Leavers",
    "p: When a practitioner leaves, their listing must be handled immediately:",
    "n: Remove it, or transfer it if they are moving to another practice and it is theirs.|Do not leave it at the old address pointing at a person who is not there.|Do not repurpose it for a new practitioner, which is effectively hijacking.|Update the website to remove their biography page, or redirect it.|Expect some review loss, which is unavoidable and is one reason practitioner listings carry a cost as well as a benefit.",
    "ex: The clinic that consolidated|A two-dentist practice had a business listing and two practitioner listings, all in the same category, all linking to the homepage, with reviews split roughly evenly across three listings. Only one ever appeared in results. Consolidating to the business listing plus two genuinely differentiated practitioner listings — distinct specialisms, individual biography pages, separate extensions — produced a stronger business listing and, within six months, practitioner listings that appeared for their own specialist searches. The total was greater than before, because the listings finally complemented rather than duplicated."
  ],
  take: [
    "Practitioner listings are legitimate but risk competing with the business listing, splitting reviews, links and signals.",
    "Near-duplicate listings at one address are usually filtered, so the second listing adds no visibility and weakens both.",
    "Prevent filtering through genuine difference: different name, category, website page, phone and photographs.",
    "A single-practitioner business should have one listing only.",
    "When a practitioner leaves, remove or transfer their listing immediately and never repurpose it."
  ],
  self: [
    "I can identify when practitioner listings are cannibalising.",
    "I know that multiple listings do not produce multiple Local Pack slots.",
    "I can specify the correct differentiated structure.",
    "I know how to handle a practitioner who leaves."
  ],
  quiz: [
    { q: "Why does creating multiple listings at one address rarely produce multiple Local Pack slots?",
      a: ["Google charges for extra slots", "Near-duplicate listings are filtered, so usually only one appears while signals are split across both", "The slots are reserved", "It works reliably"],
      c: 1,
      why: "Filtering exists to avoid showing the same business twice. The result is one visible listing weaker than a single consolidated one would have been." },
    { q: "What most prevents a practitioner listing being filtered alongside the business listing?",
      a: ["Having more reviews", "Genuine difference: distinct name, category, website page, phone and photographs", "Being created later", "Using the same category"],
      c: 1,
      why: "Sameness triggers filtering. The more genuinely distinct the two entities are, the more likely both serve a useful and separate purpose." },
    { q: "A practitioner leaves the practice. What should happen to their listing?",
      a: ["Repurpose it for the new practitioner", "Remove it, or transfer it if it is theirs and they are moving practice", "Leave it as it is", "Change the name to the business name"],
      c: 1,
      why: "Leaving it misleads customers, and repurposing it for a different person is effectively hijacking a listing representing someone else." }
  ],
  ex: {
    title: "Audit a practitioner structure",
    time: "30 minutes",
    intro: "You will check whether practitioner listings are helping or competing.",
    steps: [
      "Find a multi-practitioner business in your area and list every listing associated with it.",
      "For each, record the name, category, website link, phone and photographs.",
      "Identify which elements are identical across listings.",
      "Search a service term and see which listings appear, and whether more than one does.",
      "Check whether reviews appear split across listings.",
      "State whether the structure is complementary or cannibalising, with the evidence."
    ],
    deliver: "A practitioner structure audit with the shared elements identified and a verdict on cannibalisation."
  },
  chal: {
    title: "Design the differentiated structure",
    brief: "Design the correct listing structure for a five-practitioner clinic currently running five identical practitioner listings plus a business listing, all in the same category and all linking to the homepage. Specify for each listing the name, category, website page, phone arrangement, description focus, photographs and review strategy. Then specify the sequence of changes, since six listings cannot all be altered at once, and state what you would measure to confirm the structure is working.",
    success: [
      "Every listing is genuinely differentiated across at least five elements.",
      "Your change sequence respects pacing rather than altering six listings simultaneously.",
      "You defined what measurement would confirm the structure is complementary rather than competing."
    ]
  }
},

"8.3.3": {
  t: "Two businesses, one address",
  why: "Co-located businesses are common and their listings interact in ways that surprise people. This lesson covers the practical handling.",
  body: [
    "h: The legitimate cases",
    "p: From lesson 2.2.3, businesses may share a street address when each has its own distinct, signed, separately staffed space. The common cases:",
    "l: Offices in a shared building.|Units in a business park.|Retail units in a shopping centre.|Therapy rooms in a wellness centre.|Two genuinely separate businesses run by the same owner in one unit.|A business and a franchise concession inside it, from lesson 2.2.6.",

    "h: What goes wrong",
    "n: **Suite numbers omitted**, so the addresses look identical and the entities blur.|**One business's data contaminating the other**, particularly after automated updates.|**Filtering**, where Google treats them as duplicates.|**Extra scrutiny and verification requests** for both.|**Reviews landing on the wrong listing**, especially where names are similar.|**Photographs of one appearing on the other**, uploaded by confused customers.|**Competitor reports** alleging that one is fake.",

    "h: Preventing confusion",
    "table: Measure ; Why || Consistent suite or unit numbers everywhere ; The primary distinguisher between the two entities || Distinct phone numbers ; Separates identity and prevents misrouted enquiries || Distinct website URLs pointing at each business's own site or page ; Independent evidence for each || Distinct categories where genuinely different ; Reduces filtering risk || Distinct photographs showing each business's own signage ; Visual separation for customers and verification || Separate map pins at each entrance where possible ; Practical and diagnostic || Clear door signage for each ; Essential for verification",
    "tip: The suite number is the whole game|Two businesses at '12 Mill Street' look like one entity. Two businesses at '12 Mill Street, Suite 1' and '12 Mill Street, Suite 3' are clearly distinct. Getting the suite number consistent across the profile, the website, the structured data and every citation is the single most effective thing you can do for a co-located business.",

    "h: When the same owner runs both",
    "warn: The multi-brand test|Two trading names, one owner, one office, shared staff and one phone is one business, from lesson 2.2.3. Two genuinely separate operations with their own staff, spaces, phones and customers may be two. The test is whether they function as separate businesses, not whether they are registered separately. Getting this wrong is a common route to losing both listings.",

    "h: Handling scrutiny",
    "p: Co-located businesses face more verification and more competitor reports. Prepare for it:",
    "n: Keep an evidence pack for each business, from lesson 8.2.4.|Photograph each business's own door signage.|Keep leases or licences showing the specific unit.|Keep utility or service bills where available.|Be ready to complete video verification showing your specific space, from lesson 2.4.2.",

    "h: If the listings merge or get filtered",
    "l: Check that the suite numbers are present and consistent everywhere.|Check that the categories differ where genuinely accurate.|Check that the website links point to different destinations.|Check that the phone numbers differ.|If a merge has occurred, request separation with evidence of the two distinct businesses.|Expect it to take weeks.",
    "ex: The two clinics that blurred|A physiotherapy clinic and a podiatry clinic shared a building, both listed at the street address with no unit numbers, both linking to a shared landing page, both with the same phone. Google merged them. Separating them required adding unit numbers everywhere, building two distinct websites, assigning two phone numbers and providing evidence of two leases. It took nine weeks. Adding the unit numbers at the outset would have prevented the whole episode."
  ],
  take: [
    "Businesses may share an address when each has a distinct, signed, separately staffed space.",
    "Consistent suite or unit numbers everywhere are the single most effective preventive measure.",
    "Distinct phones, websites, categories, photographs and pins all reduce the risk of filtering or merging.",
    "Two trading names with one owner, one office, shared staff and one phone is one business, not two.",
    "Co-located businesses attract more verification and more competitor reports, so keep an evidence pack for each."
  ],
  self: [
    "I know the legitimate cases for sharing an address.",
    "I can list the seven measures that prevent confusion.",
    "I can apply the multi-brand test.",
    "I know what to do if two co-located listings merge."
  ],
  quiz: [
    { q: "What is the single most effective measure for two businesses sharing a street address?",
      a: ["Different logos", "Consistent suite or unit numbers across the profile, website, structured data and every citation", "Different opening hours", "More reviews"],
      c: 1,
      why: "The unit number is the primary distinguisher. Without it the two addresses are identical and the entities blur, risking merging and filtering." },
    { q: "One owner runs two trading names from one office with shared staff and one phone. How many businesses is this?",
      a: ["Two, because they are registered separately", "One, because they do not function as separate businesses", "Three", "It depends on revenue"],
      c: 1,
      why: "Separate registration does not create separate businesses. Without distinct spaces, staff and contact details it is one operation seeking extra listings." },
    { q: "Why do co-located businesses attract more verification requests?",
      a: ["They are penalised", "Shared addresses are a known abuse pattern, so legitimate businesses there are checked more often", "Their listings expire faster", "They have more reviews"],
      c: 1,
      why: "Because address sharing is used to create fake listings, addresses with many businesses receive extra scrutiny even when every business there is genuine." }
  ],
  ex: {
    title: "Audit a co-located situation",
    time: "30 minutes",
    intro: "You will check whether two co-located listings are properly distinguished.",
    steps: [
      "Find two businesses sharing an address, or use your practice business if it shares one.",
      "Check whether each listing includes a suite or unit number, and whether it is consistent with their websites.",
      "Check whether they use distinct phone numbers and website links.",
      "Check whether their categories differ.",
      "Check whether their photographs show distinct signage.",
      "List every measure that is missing and the risk it creates."
    ],
    deliver: "A co-location audit against the seven distinguishing measures with missing items and risks listed."
  },
  chal: {
    title: "Plan a separation after a merge",
    brief: "Plan the full separation of two co-located businesses whose listings have been merged. Specify how you would confirm the merge, what evidence you would gather for each business, what distinguishing measures you would implement first, the order of changes, how you would request separation, what you would expect the timeline to be, and what you would do if the request failed. Include what you would tell both business owners about the interim period and about what happens to the combined reviews.",
    success: [
      "Your plan implements the distinguishing measures before requesting separation, not after.",
      "You addressed what happens to the merged reviews honestly.",
      "You included a failure contingency and interim communication for both owners."
    ]
  }
},

"8.3.4": {
  t: "Franchise conflicts and brand control",
  why: "Franchises create a specific set of local SEO problems arising from divided control between the brand and the franchisee.",
  body: [
    "h: The structural problem",
    "p: In a franchise, the brand owns the name and the standards; the franchisee owns the local operation. Local SEO requires decisions about both, and neither party fully controls the outcome.",

    "h: The recurring conflicts",
    "n: **Who owns the listing?** The franchisor, the franchisee, or an agency working for either.|**Naming.** The brand's standard versus what the franchisee wants.|**Website.** A brand-controlled location page versus a franchisee's own site.|**Reviews.** Who responds, and in what voice.|**Territory.** Overlapping service areas between franchisees.|**Consistency.** Brand standards versus local adaptation.|**Marketing spend.** Who pays for local SEO and who benefits.",

    "h: Listing ownership in a franchise",
    "warn: The franchisee usually should hold the listing|The franchisee operates the location, is present at it, and can complete verification. If the franchisor holds every listing centrally and a franchisee leaves, the situation is the ownership trap from lesson 2.4.4 at scale. The common and workable arrangement is franchisee as primary owner with the franchisor as a manager, which allows brand oversight without concentrating risk.",

    "h: Naming",
    "l: Follow the franchisor's naming standard, since it is the real-world brand name.|The standard usually includes a location element: 'BrandName Leeds' or 'BrandName - Headingley'.|Do not deviate locally, since inconsistency across a network is visible and confusing.|Do not add keywords, which breaches the name rule regardless of what the franchisor prefers, from lesson 2.3.1.",

    "h: The website question",
    "table: Arrangement ; Advantages ; Problems || Brand site with location pages ; Consistent, authoritative, shared strength ; Franchisee has little control, page may be thin || Franchisee's own site ; Local control, local content ; Fragmented brand, weaker individual sites, inconsistency || Both ; Flexibility ; Duplication, competing pages, confusion about which the listing links to",
    "p: The usual best answer is a brand site with genuinely substantial location pages, from lesson 4.2.3, with the listing linking to the franchisee's own location page rather than the brand homepage.",

    "h: Territory overlap",
    "p: Franchisees frequently compete with each other, which is the multi-location cannibalisation problem from lesson 10.1.7:",
    "l: Overlapping service areas produce competition between franchisees for the same searches.|The nearer franchisee usually wins, which may not match the agreed territory.|Territory agreements are commercial, not technical — Google does not know about them.|The practical response is clear differentiation by location and genuinely local content for each.",

    "h: Reviews in a franchise",
    "n: Reviews belong to the location, not the brand.|Responses should come from the franchisee, who knows the customer and the incident.|Brand guidelines on response tone are reasonable; brand-written responses to local incidents are not.|A brand-wide review problem is an operational problem, not a marketing one.|Franchisees with poor reviews damage the brand and vice versa.",
    "tip: The brand should set standards, the franchisee should execute|The workable division is that the franchisor defines naming, categories, description templates, photograph standards and response guidelines, while the franchisee owns the listing, adds local content, responds to reviews and builds local links. Both parties do what they are actually positioned to do.",

    "h: When the franchisee leaves",
    "l: The listing must transfer to the incoming franchisee or the franchisor, not be abandoned.|The reviews stay with the location, which is usually correct.|Update the details rather than creating a new listing, from lesson 6.2.4.|Handle it as a change of ownership, from lesson 8.3.5.",
    "ex: The network that fixed ownership|A franchise with forty locations held every listing centrally under one account. When three franchisees left in a year, the transitions were messy and one account issue briefly affected multiple locations. Restructuring so each franchisee held their own listing with the franchisor as manager distributed the risk, simplified transitions, and made each franchisee more engaged with their own local performance."
  ],
  take: [
    "Franchise problems arise from divided control between the brand, which owns the name and standards, and the franchisee, who owns the operation.",
    "The franchisee should usually be primary owner with the franchisor as manager, which allows oversight without concentrating risk.",
    "Follow the franchisor's naming standard, but never add keywords, which breaches the name rule regardless of brand preference.",
    "The usual best website arrangement is a brand site with substantial location pages, each listing linking to its own page.",
    "The franchisor should set standards and the franchisee should execute — each doing what they are positioned to do."
  ],
  self: [
    "I can name the seven recurring franchise conflicts.",
    "I know why the franchisee should usually hold the listing.",
    "I can explain the website arrangement trade-offs.",
    "I know the workable division of responsibility between brand and franchisee."
  ],
  quiz: [
    { q: "Who should usually be the primary owner of a franchise location's listing?",
      a: ["The franchisor centrally", "The franchisee, with the franchisor as a manager", "An agency", "Nobody"],
      c: 1,
      why: "The franchisee operates and can verify the location, and distributed ownership avoids concentrating risk and complicating transitions when franchisees leave." },
    { q: "A franchisor's naming standard includes added service keywords. What should you do?",
      a: ["Follow it, the brand decides", "Follow the brand's real name but not the added keywords, since the name rule applies regardless of brand preference", "Ignore the standard entirely", "Use a different name locally"],
      c: 1,
      why: "The name rule requires the real-world business name. A franchisor's preference does not override it, and following it risks the listing." },
    { q: "Two franchisees have overlapping territories and compete for the same searches. What is the reality?",
      a: ["Google respects territory agreements", "Google does not know about territory agreements — the nearer franchisee usually wins", "Both will be suspended", "The franchisor can allocate rankings"],
      c: 1,
      why: "Territory agreements are commercial arrangements. Ranking is determined by distance, relevance and prominence, with no awareness of contracts." }
  ],
  ex: {
    title: "Map a franchise structure",
    time: "30 minutes",
    intro: "You will examine how a real franchise handles local SEO.",
    steps: [
      "Find a franchise brand with several locations in your region.",
      "Check the naming convention used across its listings and whether it is consistent.",
      "Check what each listing links to: brand homepage, brand location page or franchisee site.",
      "Check whether location pages contain genuinely local content or a shared template.",
      "Check whether reviews receive responses and in what voice.",
      "Identify the three biggest weaknesses in their structure."
    ],
    deliver: "A franchise structure analysis covering naming, linking, content and reviews, with three identified weaknesses."
  },
  chal: {
    title: "Write the franchise local SEO standard",
    brief: "Write the local SEO standard a franchisor would issue to its franchisees. Specify listing ownership and access, the naming convention, categories, description template with local slots, photograph requirements, what the franchisee must maintain, what the brand maintains, review response guidelines and tone, territory guidance, and what franchisees must never do. Then write the short section explaining to franchisees why they benefit from following it, since compliance depends on their willingness.",
    success: [
      "The standard divides responsibility clearly between brand and franchisee.",
      "It includes an explicit list of what franchisees must never do.",
      "The franchisee-facing rationale is persuasive rather than merely instructional."
    ]
  }
},

"8.3.5": {
  t: "Mergers, closures, moves and rebrands",
  why: "Business change is constant and each type of change has a correct handling. Getting it wrong loses reviews, rankings and sometimes the listing.",
  body: [
    "h: The four situations",
    "n: **Closure.** The business stops trading at that location permanently.|**Move.** The same business relocates, covered fully in lesson 6.2.4.|**Rebrand.** The same business under a new name, from lesson 2.3.2.|**Merger or acquisition.** Two businesses become one, or one takes over another.",

    "h: Closure",
    "l: Mark the listing permanently closed. Do not delete it.|A closed listing retains its reviews and history, which matters if the business ever returns.|Do not leave it open, which sends customers to nothing and generates negative reviews.|Do not repurpose it for a different business, which is effectively hijacking.|If the business is moving rather than closing, do not mark it closed — update the address instead.",
    "warn: Closed is not the same as moved|Marking a listing closed and creating a new one at the new address loses the reviews and the history. A move is an address change on the existing listing. This distinction costs businesses their entire review base more often than almost any other error.",

    "h: Acquisition where the business continues",
    "p: A business bought and continuing at the same location with the same name:",
    "n: Transfer ownership of the listing, from lesson 2.4.5.|Keep the listing; do not create a new one.|The reviews stay, which is usually correct since they describe that location.|Update any details that genuinely changed: phone, hours, website.|Do not rebrand immediately if the local name has value, from lesson 2.3.2.|Update citations to reflect any changed details.",

    "h: Acquisition with a rebrand",
    "l: Complete the ownership transfer first.|Change the real world first: signage, vehicles, paperwork.|Then update the listing name.|Keep the old name referenced on the website for at least a year.|Expect a temporary dip while the entity is re-established.|Do not change the name and address simultaneously, from lesson 3.3.6.",

    "h: Merger of two businesses",
    "table: Situation ; Handling || Two locations merging into one ; Keep the surviving location's listing, mark the other closed || Two businesses merging at a new location ; Update one listing's address, close the other || One brand absorbing another, both locations continuing ; Keep both listings, rebrand each in sequence || Merging the entities but keeping both premises ; Two listings, both rebranded, sequenced",
    "tip: The surviving listing should usually be the one with the reviews|As with duplicates in lesson 6.1.6, reviews are the hardest thing to recover. Where a choice exists, keep the listing with the stronger review base and update its details, rather than keeping the one with the more convenient configuration.",

    "h: Temporary closure",
    "l: Use temporarily closed, not permanently closed, from lesson 2.2.5.|Post an explanation so customers and Google understand.|Set a reopening date if known.|Reopen promptly.|Expect some ranking softening during a long closure and recovery after reopening.",

    "h: The sequence that works",
    "n: Decide which listing survives.|Transfer ownership if needed.|Change the real world.|Update the surviving listing, one sensitive field at a time.|Close or merge the others.|Update the website.|Update citations in order of importance.|Monitor for duplicates and for old data resurfacing.|Record every date.",
    "ex: The acquisition that kept everything|A well-reviewed local garage was bought by a regional group. Rather than rebranding immediately, the group transferred ownership, kept the name for eighteen months, updated only the phone and website, and built the group's reputation locally through the existing listing. When the rebrand eventually happened, the listing had 400 reviews and an established entity, and the transition cost far less than an immediate rebrand would have."
  ],
  take: [
    "Closure means marking permanently closed, never deleting, and never repurposing the listing for another business.",
    "A move is an address change on the existing listing — closing and recreating loses the entire review base.",
    "In an acquisition where the business continues, transfer ownership and keep the listing rather than creating a new one.",
    "Where listings must be consolidated, keep the one with the stronger review base and update its details.",
    "Change the real world first, then the listing, one sensitive field at a time, with every date recorded."
  ],
  self: [
    "I can distinguish the correct handling of closure, move, rebrand and acquisition.",
    "I know why closing and recreating a listing for a move is so damaging.",
    "I know that the listing with the stronger review base should usually survive.",
    "I know the nine-step sequence for a business change."
  ],
  quiz: [
    { q: "A business is relocating. What should happen to its listing?",
      a: ["Mark it closed and create a new one", "Update the address on the existing listing, preserving reviews and history", "Delete it", "Create a second listing and keep both"],
      c: 1,
      why: "Closing and recreating loses the entire review base and history permanently, which is one of the most costly and common errors in local SEO." },
    { q: "A well-reviewed local business is acquired by a regional group. What is usually the best immediate action?",
      a: ["Rebrand immediately to the group name", "Transfer ownership, keep the listing and the local name, and update only what genuinely changed", "Create a new listing under the group brand", "Close the listing"],
      c: 1,
      why: "The local name and review base have real value. Transferring and keeping them preserves that, and any rebrand can be sequenced later at much lower cost." },
    { q: "Two listings must be consolidated into one. Which should survive?",
      a: ["The newer one", "The one with the stronger review base, with its details updated", "The one with the better address", "Either, it makes no difference"],
      c: 1,
      why: "Reviews are the hardest asset to recover. Updating details on the review-holding listing is far cheaper than rebuilding a review base." }
  ],
  ex: {
    title: "Plan a business change",
    time: "35 minutes",
    intro: "You will produce the sequence for a real change scenario.",
    steps: [
      "Choose one of the four situations and apply it to your practice business.",
      "Decide which listing survives and justify it.",
      "Write the real-world changes that must happen first.",
      "Write the listing changes in sequence, respecting pacing rules.",
      "Write what happens to citations, the website and structured data.",
      "Write the monitoring plan and the expected temporary impact."
    ],
    deliver: "A complete change sequence with the surviving listing justified, pacing respected and monitoring planned."
  },
  chal: {
    title: "Write the business change playbook",
    brief: "Write a playbook covering all four situations: closure, move, rebrand and acquisition, plus temporary closure. For each, specify the correct handling, what must never be done, the sequence, what happens to reviews, the expected temporary impact, the monitoring required, and the conversation to have with the owner. Include a decision tree at the front so someone can identify which situation they are in, since businesses frequently describe a move as a closure or an acquisition as a rebrand.",
    success: [
      "The decision tree correctly distinguishes situations that businesses commonly confuse.",
      "Each situation specifies what must never be done, not only what to do.",
      "Every situation addresses what happens to reviews explicitly."
    ]
  }
},

"8.3.6": {
  t: "Legal, medical and other regulated verticals",
  why: "Regulated professions have constraints that override general marketing advice. Ignoring them can cause real professional consequences for your client.",
  body: [
    "h: Why these are different",
    "p: In many professions, what you may say in marketing is governed by a regulator, not only by platform rules. Those regulations can restrict testimonials, comparative claims, specialisation claims and advertising generally, and they carry consequences a platform violation does not.",
    "warn: Professional rules override marketing advice|If a regulator prohibits testimonials, no amount of review strategy changes that. If a regulator restricts how a practitioner may describe their specialism, that governs the category and services too. Always establish the applicable rules before designing anything, as lesson 5.1.5 covered for reviews.",

    "h: The common constraint areas",
    "n: **Testimonials and reviews.** Some professions restrict or prohibit soliciting them, or restrict how they may be used in marketing.|**Specialisation claims.** Many regulators restrict who may describe themselves as a specialist, which affects categories and services.|**Comparative and superlative claims.** 'Best', 'leading' and similar are frequently prohibited.|**Guarantees of outcome.** Almost universally prohibited in legal and medical fields.|**Patient or client confidentiality.** Affects review responses, case studies and photographs.|**Advertising approval.** Some professions require marketing material to be approved.|**Practitioner registration display.** Some require registration numbers to be shown.",

    "h: The practical consequences",
    "table: Constraint ; Local SEO consequence || Testimonials restricted ; Review strategy must be adapted or limited, from lesson 5.1.5 || Specialisation claims restricted ; Category and service naming must match permitted terms || Superlatives prohibited ; Descriptions, titles and content must avoid them || Confidentiality ; Review responses must not confirm a person was a client or patient || Outcome guarantees prohibited ; Content and calls to action must avoid implying results || Registration display required ; Must appear on the website and often the profile description",

    "h: Review responses under confidentiality",
    "p: This is the most frequent practical problem. Responding to a review can confirm that the reviewer was a patient or client, which may itself breach confidentiality.",
    "l: Establish what the applicable rules permit.|Where responses are permitted, keep them generic: thank the person, invite contact, do not reference any detail.|Never confirm or deny a specific matter, treatment or outcome.|Never correct a factual error by disclosing information.|Where responses are not permitted, say so to the client rather than encouraging a breach.",

    "h: Content constraints",
    "l: Avoid outcome claims: 'we win your case', 'guaranteed results'.|Avoid superlatives where prohibited.|Be careful with before-and-after imagery, which is restricted in some medical fields.|Include required disclaimers and registration information.|Have content reviewed where approval is required.",

    "h: What still works",
    "p: Regulation constrains claims, not competence signals. Most of what this course teaches remains available:",
    "n: Accurate categories and services within permitted terminology.|Genuinely useful content explaining processes, costs and what to expect.|Practitioner biography pages with qualifications and registrations.|Local relevance, areas served, access information.|Citations and professional register listings, which are often the most valuable links available.|Photographs of premises and staff.|Accurate hours, attributes and profile completeness.",
    "tip: Professional registers are the best links in regulated fields|Regulated professions have authoritative registers and professional body directories. These are trusted, relevant, often required, and frequently unclaimed or incomplete. In a regulated vertical they are usually the single highest-value link and citation opportunity available, and they carry no regulatory risk.",

    "h: Your professional responsibility",
    "n: Ask what regulations apply before designing anything.|Ask the client to confirm with their regulator or professional body where uncertain.|Do not rely on what competitors do, since they may be in breach.|Document the constraints you were told about.|Decline to implement anything you believe breaches professional rules, and say why in writing.",
    "ex: The competitor who was in breach|A clinic asked why a competitor displayed patient testimonials with names and photographs when they had been told they could not. The competitor was in breach of their professional body's rules and was later required to remove them. Copying a competitor's approach in a regulated field is a route to the same consequence, not evidence that something is permitted."
  ],
  take: [
    "Professional regulations override marketing advice and carry consequences a platform violation does not.",
    "Common constraints cover testimonials, specialisation claims, superlatives, outcome guarantees, confidentiality and advertising approval.",
    "Review responses under confidentiality must never confirm that a person was a client or patient, or reference any detail.",
    "Regulation constrains claims, not competence signals — most of this course remains available within the rules.",
    "Professional registers are usually the highest-value link and citation opportunity in regulated fields, with no regulatory risk."
  ],
  self: [
    "I establish the applicable professional rules before designing anything.",
    "I know the main constraint areas and their local SEO consequences.",
    "I can write a compliant review response under confidentiality rules.",
    "I know not to treat a competitor's practice as evidence that something is permitted."
  ],
  quiz: [
    { q: "A competitor in a regulated profession displays patient testimonials with names and photographs. What does this prove?",
      a: ["That it is permitted", "Nothing — they may be in breach, and copying them is a route to the same consequence", "That the rules changed", "That the regulator approves"],
      c: 1,
      why: "Competitor practice is not evidence of compliance. Regulated professions have enforcement, and businesses in breach are frequently required to remove material later." },
    { q: "What is the main constraint on review responses in confidential professions?",
      a: ["Response length", "A response can confirm that the reviewer was a client or patient, which may itself breach confidentiality", "Response speed", "The platform used"],
      c: 1,
      why: "Acknowledging a specific person's engagement discloses the relationship. Where responses are permitted at all, they must be generic and reference no detail." },
    { q: "What is usually the highest-value link opportunity in a regulated vertical?",
      a: ["Guest posts", "Professional registers and professional body directories", "Paid directories", "Social media"],
      c: 1,
      why: "They are authoritative, trusted, relevant, often required by the profession, frequently incomplete, and carry no regulatory risk whatsoever." }
  ],
  ex: {
    title: "Establish the regulatory constraints",
    time: "35 minutes",
    intro: "You will do the research that must precede any work in a regulated field.",
    steps: [
      "Choose a regulated profession relevant to your practice business or your likely clients.",
      "Research the applicable professional body and its advertising or marketing rules.",
      "Record what it says about testimonials, specialisation claims, superlatives and outcome claims.",
      "Record what it requires to be displayed, such as registration numbers.",
      "List which elements of this course would need adapting and how.",
      "Identify the professional registers and directories available and whether the business is listed and complete on each."
    ],
    deliver: "A documented regulatory constraint summary with adaptations required and register opportunities identified."
  },
  chal: {
    title: "Design a compliant programme",
    brief: "Design a complete local SEO programme for a regulated professional practice that works within the constraints you researched. Specify what you will do, what you will not do and why, how reviews are handled, how content avoids prohibited claims, what must be displayed, what approval process applies, and where the register and directory opportunities are. Then write the paragraph you would use to decline a client request that would breach their professional rules, in a way that protects them rather than sounding obstructive.",
    success: [
      "The programme works entirely within the documented constraints rather than assuming exceptions.",
      "It identifies the register and directory opportunities as a central element.",
      "Your declining paragraph frames the refusal as protecting the client's professional standing."
    ]
  }
}

});
