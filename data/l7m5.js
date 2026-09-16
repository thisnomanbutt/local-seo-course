/* Level 7 · Module 5 — Diagnosing Keyword-Level Problems */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"7.5.1": {
  t: "Case: 'Ranks for dentist, invisible for cosmetic dentist'",
  why: "This is the most valuable diagnostic case in the course, because the modifier terms are usually where the money is.",
  body: [
    "h: The case",
    "story: The complaint|'We rank second for dentist across our whole area. We do a lot of cosmetic work and it is our most profitable service, but we cannot get into the top twenty for cosmetic dentist. We have been trying for a year. The businesses that rank for it are smaller than us and have fewer reviews.'",

    "h: Step 1: define the symptom",
    "l: **What:** Local Pack and organic position for a modifier term.|**Where:** All measurement points, including at the business address.|**When:** Always — this is not a drop.|**How much:** Strong for the head term, absent for the modifier term.",
    "p: Applying the pattern table from lesson 7.1.4: one keyword set affected, all locations, not a change. This is unambiguously a relevance problem, not distance and not prominence.",
    "tip: This pattern rules out two forces immediately|If the business ranks well for the head term at the same locations, distance is clearly not the constraint and general prominence is clearly sufficient. The problem must be that Google does not consider the business relevant for this specific modifier. That single inference saves hours of misdirected investigation.",

    "h: Step 2: run the relevance triangle for the modifier term",
    "p: From lesson 7.3.4, check the modifier term specifically:",
    "n: **Profile:** is there a secondary category for it? A service entry? A mention in the description?|**Website:** is there a dedicated page for cosmetic dentistry, or one sentence on a general services page?|**Reviews:** how many of the last fifty mention cosmetic work?",

    "h: What the evidence almost always shows",
    "table: Source ; Typical finding in this case || Secondary category ; Missing entirely, or present but unsupported || Service entries ; Absent, or a bare name with no description || Website ; One line on a general page, no dedicated page || Reviews ; Two or three mentions out of fifty, unprompted || Justifications ; Competitors show justification text for the term, the client shows none",
    "warn: The head term is carrying everything|The business ranks for 'dentist' because its category, its website and its reviews all say 'dentist'. Nothing says 'cosmetic dentist' except the owner's intention. Google is not withholding the ranking; it has no evidence to give it.",

    "h: Step 3: check the competitors",
    "n: Who ranks in the top five for the modifier term?|What is their primary category? Often the specific one.|Do they have a dedicated page for it? Almost always.|Do their reviews mention it? Usually.|Are they smaller and with fewer reviews than the client? Frequently yes, which is exactly the point.",
    "ex: The revealing comparison|The three businesses ranking for the modifier term had 40, 61 and 88 reviews against the client's 340. All three had a dedicated cosmetic dentistry page with prices and before-and-after photographs. All three listed it as a service on their profile. Two used it as their primary category. The client had none of these. The client was larger, better known and more reviewed, and had no evidence of relevance for the specific term at all.",

    "h: Step 4: the diagnosis",
    "box: **The business has strong general prominence and no specific relevance for the modifier term.**",
    "p: Prominence amplifies relevance. Where relevance is absent, there is nothing to amplify, which is the asymmetry established in lesson 1.2.5.",

    "h: Step 5: the plan",
    "n: Add the specific category as a secondary, from lesson 3.1.3.|Add service entries with real descriptions, from lesson 3.1.4.|Build a thorough dedicated page for the service, from lesson 4.2.1.|Link to it internally from the homepage and the general service page, from lesson 4.2.5.|Ask customers who received that service for reviews, timed to the treatment, from lesson 5.1.3.|Measure after eight to twelve weeks.|Only then consider whether a primary category change is warranted, using the testing method from lesson 7.3.6.",
    "p: Note that the existing prominence is a large asset here. Once the relevance evidence exists, 340 reviews and an established entity will amplify it quickly — often faster than a smaller competitor could ever achieve."
  ],
  take: [
    "Strong for the head term and absent for the modifier, at all locations, with no change over time, is unambiguously a relevance problem.",
    "That pattern immediately rules out distance and general prominence, which saves hours of misdirected investigation.",
    "The usual finding is that nothing except the owner's intention says the business offers the specific service.",
    "Smaller competitors win modifier terms because they have the specific evidence the larger business lacks.",
    "Existing prominence becomes a large asset once the relevance evidence exists, so these cases often resolve faster than expected."
  ],
  self: [
    "I can recognise the modifier-term pattern and what it rules out.",
    "I run the relevance triangle for the specific term rather than the business.",
    "I can explain why smaller competitors win specific terms.",
    "I know the six-step plan and its order."
  ],
  quiz: [
    { q: "A business ranks second for 'dentist' everywhere and is invisible for 'cosmetic dentist'. What does this pattern rule out?",
      a: ["Nothing", "Distance and general prominence, since both are clearly sufficient for the head term at the same locations", "Relevance", "Everything except spam"],
      c: 1,
      why: "If the same business at the same locations ranks for the head term, neither distance nor overall prominence is the constraint. The problem must be specific relevance." },
    { q: "Why do smaller competitors with fewer reviews win modifier terms?",
      a: ["Google favours small businesses", "They have the specific relevance evidence — a dedicated page, the category, matching reviews — that the larger business lacks", "They pay for placement", "Their websites are faster"],
      c: 1,
      why: "Relevance acts as a gate. Without evidence for the specific term, prominence has nothing to amplify, so a smaller but relevant business wins." },
    { q: "What should be done last in the recovery plan, not first?",
      a: ["Adding a secondary category", "Changing the primary category", "Building the service page", "Adding service entries"],
      c: 1,
      why: "A primary change is the highest-risk action, from lesson 7.3.1. It should only be considered after the supporting evidence exists and the safer steps have been measured." }
  ],
  ex: {
    title: "Diagnose a modifier term gap",
    time: "40 minutes",
    intro: "You will work the case on your own practice business.",
    steps: [
      "Identify a valuable modifier term your practice business does not rank for but should.",
      "Confirm it ranks for the head term at the same locations.",
      "Run the relevance triangle for the modifier term specifically.",
      "Identify the three businesses ranking for it and record their category, page and review evidence.",
      "Compare their review counts and general prominence with your practice business.",
      "Write the diagnosis in one sentence and list the six plan steps in order."
    ],
    deliver: "A modifier term diagnosis with a relevance triangle, competitor evidence and an ordered plan."
  },
  chal: {
    title: "Build the modifier term asset",
    brief: "Build the full set of relevance evidence for one valuable modifier term: the secondary category decision, the service entries with descriptions, the outline of a thorough dedicated page including prices and proof elements, the internal links that would point at it, and the review asking approach that would naturally produce mentions of that service. Then predict what position you would expect after twelve weeks, and state what you would conclude if it did not move.",
    success: [
      "Every element of the relevance triangle is addressed with specific deliverables.",
      "Your page outline includes prices and proof, not just a description of the service.",
      "You made a prediction and stated what a failure to move would tell you."
    ]
  }
},

"7.5.2": {
  t: "Head terms versus modifier terms in local search",
  why: "Understanding how these two kinds of search behave differently explains most keyword-level problems and most keyword-level opportunities.",
  body: [
    "h: The distinction",
    "term: Head term|The broad category search: 'dentist', 'plumber', 'solicitor'.",
    "term: Modifier term|The head term plus a narrowing word: 'cosmetic dentist', 'emergency plumber', 'family law solicitor'.",

    "h: How they behave differently",
    "table: Aspect ; Head term ; Modifier term || Volume ; High ; Lower, sometimes much lower || Competition ; Very high ; Usually lower || Commercial value per search ; Variable ; Often much higher || What decides ranking ; Category, distance, prominence ; Specific relevance evidence || Who wins ; Established, close, well-known ; Whoever has the specific evidence || Difficulty for a strong business ; Hard, contested ; Often easy, if the evidence exists || Difficulty for a weak business ; Very hard ; Achievable",

    "h: Why modifier terms are usually the better target",
    "n: **Less competition.** Fewer businesses build the specific evidence.|**Higher intent.** Someone searching 'emergency plumber' has a more urgent and specific need than someone searching 'plumber'.|**Higher value.** Modifier terms often describe the more profitable services.|**Better qualified.** The caller already knows what they want.|**Achievable.** A business that cannot win the head term can often win several modifier terms.",
    "tip: The strategy most local businesses should follow|Compete for the head term where you can, and systematically claim every valuable modifier term. A business ranking first for six modifier terms frequently earns more than one ranking third for the head term, because the modifier searches are better qualified and less contested.",

    "h: The modifier categories",
    "l: **Service modifiers:** cosmetic, emergency, commercial, residential, mobile.|**Urgency modifiers:** emergency, same day, 24 hour, out of hours.|**Audience modifiers:** family, children's, senior, pet, women's.|**Price modifiers:** cheap, affordable, premium, private.|**Quality modifiers:** best, top rated, trusted, approved.|**Location modifiers:** the place name, covered in lesson 1.1.5.|**Method modifiers:** online, mobile, at home, no appointment.",

    "h: Which modifiers to pursue",
    "n: List every modifier that applies genuinely to the business.|Check each for local demand using the methods from lesson 4.4.1.|Check the competitive field for each — how many businesses have specific evidence?|Estimate the value of a customer from each.|Prioritise by value multiplied by achievability.|Discard any the business does not genuinely want.",
    "warn: Quality modifiers are a special case|Terms like 'best dentist' are usually won by directory and listicle pages rather than by businesses, as lesson 4.4.2 noted. You generally cannot win them directly. The route is reviews, reputation and appearing on the pages that do rank, not building a page called 'best dentist'.",

    "h: The evidence each modifier needs",
    "p: Each modifier term needs its own evidence set:",
    "l: A secondary category where one exists for it.|A service entry naming it.|A dedicated website page.|Reviews mentioning it.|Internal links using it as anchor text, from lesson 4.2.5.|In some cases, an attribute or an hours configuration, such as being genuinely open 24 hours for 'emergency'.",

    "h: The compounding opportunity",
    "p: Because most businesses never build modifier evidence, this is one of the most reliable opportunities in local SEO. A business with strong general prominence that systematically claims six modifier terms over a year typically sees a larger total gain than it would from any amount of additional head-term effort.",
    "ex: The six-term year|A plumbing business ranked third for the head term and nowhere for six valuable modifiers. Over twelve months it built a page, service entries and review evidence for one modifier per two months. By the end it ranked in the top three for five of the six. Head-term position was unchanged. Total enquiries rose by roughly half, and the new enquiries were better qualified and higher value."
  ],
  take: [
    "Head terms are decided by category, distance and prominence; modifier terms are decided by specific relevance evidence.",
    "Modifier terms usually have less competition, higher intent, higher value and better qualified callers.",
    "A business ranking first for six modifier terms often earns more than one ranking third for the head term.",
    "Quality modifiers like 'best X' are usually won by directory pages, so the route is reputation rather than a page.",
    "Because most businesses never build modifier evidence, this is one of the most reliable opportunities available."
  ],
  self: [
    "I can distinguish head and modifier terms and how each is decided.",
    "I can list the seven modifier categories.",
    "I know why quality modifiers cannot usually be won directly.",
    "I can prioritise modifier terms by value multiplied by achievability."
  ],
  quiz: [
    { q: "What primarily decides ranking for a modifier term?",
      a: ["Distance", "Specific relevance evidence for that term", "Overall prominence", "Domain age"],
      c: 1,
      why: "Distance and prominence set the general field, but the modifier is won by whichever business has the category, page, services and reviews supporting it specifically." },
    { q: "Why can a business ranking first for six modifier terms out-earn one ranking third for the head term?",
      a: ["Modifier terms have more volume", "Modifier searches are better qualified, higher intent and often describe more profitable services", "Head terms do not convert", "Google pays more for modifiers"],
      c: 1,
      why: "Lower volume is offset by higher intent, better qualification and higher value per customer, and six terms together often exceed one contested position." },
    { q: "How should a business approach 'best dentist in [city]' searches?",
      a: ["Build a page called 'Best Dentist'", "Through reviews and reputation, and by appearing on the directory and listicle pages that actually rank", "Add it to the business name", "Ignore local SEO entirely"],
      c: 1,
      why: "These searches are usually won by third-party comparison pages. The route to visibility is being featured on them and having the reputation they reflect." }
  ],
  ex: {
    title: "Build the modifier opportunity map",
    time: "40 minutes",
    intro: "You will find the terms most local businesses never claim.",
    steps: [
      "List every modifier that genuinely applies to your practice business, across all seven categories.",
      "Search each one and record whether a Local Pack appears and who ranks.",
      "For each, note how many of the top three have a dedicated page for it.",
      "Estimate the value of a customer from each modifier.",
      "Rate achievability based on how much specific evidence the current leaders have.",
      "Rank by value multiplied by achievability and select the top three."
    ],
    deliver: "A modifier opportunity map with competitive evidence, value and achievability, and three selected targets."
  },
  chal: {
    title: "Plan a twelve-month modifier programme",
    brief: "Plan a year of modifier term claiming for your practice business. Select six terms, sequence them by value and achievability, specify the evidence set each requires, assign each a two-month build window, and state what you expect each to achieve. Include how you would measure each separately so you learn which modifiers respond fastest. Then estimate the total additional enquiries and their value, and compare that against what an equivalent effort spent on the head term would produce.",
    success: [
      "Six terms are sequenced with reasoning and a defined evidence set each.",
      "Each is measured separately so the programme produces knowledge, not just results.",
      "You compared the total expected value against head-term effort rather than assuming modifiers are better."
    ]
  }
},

"7.5.3": {
  t: "Sub-page relevance and service pages",
  why: "The dedicated page is the single most reliable intervention for modifier terms. This lesson covers exactly what it must contain and how it works.",
  body: [
    "h: Why the page matters so much",
    "p: A dedicated page is the strongest possible statement that the business offers a specific service. It is:",
    "l: Something Google can read and quote, producing the justifications from lesson 1.4.3.|Something that can rank organically even where the Local Pack is out of reach.|Somewhere internal links can point with relevant anchor text.|Somewhere external links can point.|Something customers read before deciding.|Evidence that corroborates the profile's claim.",

    "h: What it must contain for a modifier term",
    "n: **The term in the title and heading**, naturally, from lesson 4.1.3.|**A genuine explanation of that specific service**, not the general service with the modifier attached.|**What it costs**, or what affects the cost.|**Who it is for**, specifically.|**Evidence of doing it**: photographs, case examples, numbers.|**Reviews from customers who had that service.**|**Questions specific to that service**, answered.|**A call to action for that service.**|**Service structured data**, from lesson 4.3.3.",
    "warn: The modifier page that is really the general page|The most common failure is a page titled 'Emergency Plumbing' that describes general plumbing with the word emergency added three times. It contains nothing about response times, out-of-hours availability, what constitutes an emergency, or emergency pricing. It ranks for nothing because it says nothing specific.",

    "h: The specificity test",
    "p: Read each paragraph and ask: could this appear unchanged on the general service page? If yes, it is not doing the job.",
    "l: A cosmetic dentistry page should discuss treatments, durations, costs, longevity, before-and-after evidence and who is a suitable candidate.|An emergency plumbing page should discuss response times, what counts as an emergency, out-of-hours charges, what to do while waiting, and which emergencies need immediate attention.|A commercial cleaning page should discuss contracts, out-of-hours working, insurance, staff vetting and compliance.",
    "tip: Write the page from the specific customer's questions|The person searching the modifier term has different questions from the person searching the head term. Someone searching 'emergency plumber' wants to know how fast you come and what it costs at 2 am. Someone searching 'plumber' wants to know whether you do their kind of job. Answer the specific questions and the page writes itself.",

    "h: Page depth versus page count",
    "p: One thorough page per genuine service beats several thin ones, as lesson 4.2.6 established. Where a service has real sub-services with separate demand, a parent and child structure works, from lesson 4.2.1.",

    "h: Supporting the page",
    "n: Link to it from the homepage.|Link to it from the general service page.|Link to it from any relevant area page.|Use descriptive anchor text including the modifier.|Add it to the navigation if it is important enough.|Point the relevant profile service entry at it where possible.|Include it in the sitemap.",

    "h: How long it takes",
    "l: Indexing: days.|Initial ranking: two to six weeks.|Settling: eight to twelve weeks.|Full effect with supporting reviews and links: three to six months.",
    "ex: The page that changed the term|A clinic had one general services page mentioning implants in a single line. Building a thorough implants page — treatment stages, costs by case type, healing times, twelve before-and-after photographs, eight answered questions and four patient reviews specifically about implants — moved the term from invisible to position three organically within seven weeks, and into the Local Pack shortly after once the profile services and reviews aligned. Nothing else changed."
  ],
  take: [
    "A dedicated page is the strongest statement that a business offers a specific service, and the most reliable modifier intervention.",
    "It must contain genuinely specific content: costs, who it is for, evidence, service-specific questions and matching reviews.",
    "The common failure is a general page with the modifier word inserted, which says nothing specific and ranks for nothing.",
    "Apply the specificity test: could this paragraph appear unchanged on the general page?",
    "Support the page with internal links using the modifier as anchor text, and expect eight to twelve weeks to settle."
  ],
  self: [
    "I can list the nine things a modifier service page must contain.",
    "I can apply the specificity test to any paragraph.",
    "I know that the specific customer has different questions from the general one.",
    "I know the realistic timeline from publication to effect."
  ],
  quiz: [
    { q: "What is the most common failure of a modifier service page?",
      a: ["It is too long", "It is the general service page with the modifier word inserted, containing nothing specific", "It has too many images", "It loads slowly"],
      c: 1,
      why: "Without content that is genuinely specific to the modifier — response times, costs, suitability, evidence — the page makes no distinct claim and ranks for nothing." },
    { q: "What is the specificity test?",
      a: ["Counting keyword occurrences", "Asking whether each paragraph could appear unchanged on the general service page", "Measuring word count", "Checking the title tag"],
      c: 1,
      why: "Anything that could appear on the general page is not doing the modifier page's job. The test quickly identifies which parts of a draft are genuinely specific." },
    { q: "How long should you expect a new service page to take to settle?",
      a: ["24 hours", "Eight to twelve weeks, with full effect over three to six months as reviews and links accumulate", "Two years", "Immediately on publication"],
      c: 1,
      why: "Indexing happens in days, initial ranking in weeks, and settling over two to three months, with further gains as supporting evidence accumulates." }
  ],
  ex: {
    title: "Write a modifier service page",
    time: "50 minutes",
    intro: "You will build the single most reliable modifier intervention.",
    steps: [
      "Choose the highest-value modifier term from your opportunity map.",
      "Write the ten questions a customer searching that specific term would have.",
      "Draft the page answering all ten, including costs and who it is for.",
      "Apply the specificity test to every paragraph and rewrite anything that fails.",
      "List the evidence needed: photographs, case examples, reviews.",
      "Specify the internal links that will point at it and their anchor text."
    ],
    deliver: "A drafted modifier service page passing the specificity test, with an evidence list and internal link plan."
  },
  chal: {
    title: "Audit the market's modifier pages",
    brief: "Examine the pages currently ranking for your three target modifier terms. For each, assess: does it pass the specificity test, what specific content does it include, what does it omit, how many internal links point at it, and how deep is it compared with the general service page on the same site. Then identify the weakest of the three ranking pages and specify exactly what your page would need to beat it. Note anything all three do that you had not planned to include.",
    success: [
      "You applied the specificity test to real competitor pages rather than judging impressionistically.",
      "You identified the weakest ranking page and what it would take to beat it specifically.",
      "You found at least one thing all three include that you had not planned."
    ]
  }
},

"7.5.4": {
  t: "Profile services, categories and keyword coverage",
  why: "The profile side of modifier relevance is fast, free and frequently left incomplete. This lesson covers how to use it properly.",
  body: [
    "h: The three profile levers for modifiers",
    "n: **Secondary categories**, where one exists for the modifier.|**Service entries**, which allow custom names and descriptions.|**The description**, which can reference the service naturally once.",
    "p: Of these, service entries are the most flexible and the most neglected, as lesson 3.1.4 established.",

    "h: Mapping modifiers to profile elements",
    "table: Modifier type ; Best profile lever ; Note || Service modifier, e.g. cosmetic ; Secondary category if one exists, plus service entries ; Categories carry more weight where available || Urgency modifier, e.g. emergency ; Service entries plus hours plus attributes ; Hours are the real evidence for 24-hour claims || Audience modifier, e.g. family ; Service entries plus attributes ; Some categories exist for specific audiences || Method modifier, e.g. mobile ; Business model configuration plus service entries ; May indicate a service area business || Price modifier ; Service entries with price information ; Products feature where available || Location modifier ; Not a profile lever ; Handled by distance and website area pages",

    "h: Building the services list for modifier coverage",
    "n: List every modifier term you want to claim.|For each, create a service entry using the exact customer wording.|Write a one or two sentence description for each, from lesson 3.1.4.|Order them with the most valuable first.|Check whether a secondary category exists for any and add it if accurate.|Check whether any attribute supports the claim and set it.",
    "tip: Service entries are free, fast and reversible|Unlike a category change, adding a service entry carries almost no risk, takes minutes, and can be undone instantly. When claiming a modifier term, it should be the first thing you do, before the page is even written. It costs nothing and occasionally produces movement on its own.",

    "h: The hours and attributes connection",
    "p: Some modifier claims are supported by configuration rather than text:",
    "l: 'Emergency' and '24 hour' are supported by genuine 24-hour opening, from lesson 3.3.3.|'Same day' is supported by hours and by response commitments in content.|'Mobile' and 'at home' are supported by the service area business configuration.|'Wheelchair accessible' and similar are supported by attributes, from lesson 3.1.6.|'Walk-in' is supported by an appointment attribute.",
    "warn: The claim must be genuine|Listing 'emergency' as a service while closing at 5 pm produces callers who cannot reach you and reviews saying so. The configuration and the claim must match reality, which is the same principle as everywhere else in this course.",

    "h: Checking your coverage",
    "n: List every modifier term you want.|For each, check whether a secondary category exists and whether you have it.|Check whether a service entry exists with a description.|Check whether hours or attributes support it where relevant.|Check whether the description references it.|Mark any term with no profile representation at all.",

    "h: The sequencing with website work",
    "p: Profile first, website second:",
    "l: Profile changes take minutes and may produce movement alone.|They also give the website page something to corroborate.|The page then provides the depth the profile cannot.|Reviews mentioning the service complete the triangle.|Measure after each stage if you can, though in practice profile and page are often done together.",
    "ex: The free half of the fix|A business added service entries with descriptions for four modifier terms it wanted, taking about twenty minutes. Two of the four appeared in the local finder for those terms within three weeks, at modest positions. The service pages, built over the following two months, moved them substantially further. The profile work alone had produced a measurable start at no cost."
  ],
  take: [
    "The three profile levers for modifiers are secondary categories, service entries and the description.",
    "Service entries are the most flexible and most neglected, and they are free, fast and reversible.",
    "Some modifier claims are supported by configuration rather than text — hours for emergency, attributes for accessibility.",
    "Any claim must match reality, or it produces callers you cannot serve and reviews saying so.",
    "Do profile work first because it takes minutes and may produce movement alone, then build the page."
  ],
  self: [
    "I can map each modifier type to the right profile lever.",
    "I know that service entries are free, fast and reversible.",
    "I know which modifier claims require configuration rather than text.",
    "I do profile work before website work when claiming a modifier."
  ],
  quiz: [
    { q: "Why should service entries be the first action when claiming a modifier term?",
      a: ["They carry the most weight", "They are free, take minutes, are reversible, and may produce movement on their own before the page exists", "They replace the need for a page", "Google requires them"],
      c: 1,
      why: "The cost and risk are near zero and the potential benefit is immediate, which makes it the obvious first step before any substantial work." },
    { q: "What genuinely supports an 'emergency' or '24 hour' modifier claim?",
      a: ["Putting the word in the description repeatedly", "Actually being open and answering at those times, reflected in the hours configuration", "Adding it to the business name", "A page title"],
      c: 1,
      why: "Hours are the checkable evidence. Claiming emergency availability while closing at 5 pm produces unreachable callers and negative reviews saying exactly that." },
    { q: "Which modifier type is NOT addressed by a profile lever?",
      a: ["Service modifiers", "Urgency modifiers", "Location modifiers", "Audience modifiers"],
      c: 2,
      why: "Location is handled by physical distance and by website area pages. No profile setting changes where the business is, as lesson 3.3.2 established." }
  ],
  ex: {
    title: "Complete modifier coverage on the profile",
    time: "30 minutes",
    intro: "You will claim the free half of modifier relevance.",
    steps: [
      "List every modifier term you want your practice business to claim.",
      "For each, check whether a secondary category exists and add it if accurate.",
      "Create a service entry for each with a one or two sentence description in customer language.",
      "Check whether hours or attributes support any of them and configure accordingly.",
      "Reference the most important one naturally in the description.",
      "Record the date and set a check for three weeks."
    ],
    deliver: "Complete profile modifier coverage with service entries, categories, configuration and a scheduled check."
  },
  chal: {
    title: "Build the coverage matrix",
    brief: "Build a matrix with every modifier term your practice business wants down one side, and the evidence sources across the top: secondary category, service entry, hours or attribute support, website page, internal links, review mentions, structured data. Fill it in completely. Then do the same for the business currently ranking first for each term. Compare. Identify the specific cells where they have evidence and you do not, and produce an ordered plan from the gaps.",
    success: [
      "Your matrix covers every term against every evidence source for both businesses.",
      "You identified specific missing cells rather than general gaps.",
      "The plan follows directly from the matrix in a defensible order."
    ]
  }
},

"7.5.5": {
  t: "Anchor text and internal links for modifier terms",
  why: "Internal links are free and directly influence what each page is understood to be about. For modifier terms they are disproportionately effective.",
  body: [
    "h: Why internal links matter for modifiers",
    "p: From lesson 4.2.5, internal links establish topic relationships and pass value. For a new modifier page they do three specific things:",
    "n: **They make the page findable**, which a new page otherwise is not.|**They tell Google what the page is about**, through the anchor text.|**They pass value from your stronger pages**, giving the new page a starting position rather than starting from nothing.",

    "h: Where the links should come from",
    "table: Source page ; Anchor text example ; Why || Homepage ; emergency plumbing ; Strongest page on most local sites || General service page ; our emergency callout service ; Topically closest, strongest relationship || Related service pages ; emergency repairs ; Reinforces the topic cluster || Area pages ; emergency plumber in Headingley ; Connects service and place || Blog or guide content ; book an emergency plumber ; Natural contextual links || Contact page ; emergency callouts ; Reaches visitors ready to act",

    "h: Writing anchor text well",
    "l: Include the modifier term, because that is the point.|Vary the exact wording across links — do not use the identical phrase every time.|Keep it natural. 'Our emergency callout service' reads better than 'emergency plumber Leeds cheap'.|Avoid generic text. 'Click here' wastes the strongest free signal you have.|Do not stuff the place name into every link.",
    "warn: Do not over-optimise|Twenty internal links all using the identical keyword-rich phrase looks engineered. Vary naturally, the way you would if you were simply writing well and linking where it made sense. The goal is that the links read as editorial, because that is what they should be.",

    "h: How many links",
    "p: There is no magic number. A useful guide for a new modifier page:",
    "l: At least three internal links before you consider it supported.|Five to eight for an important page.|From genuinely relevant pages, not from every page on the site.|Placed within content where possible, not only in menus and footers.",
    "tip: The five-link start|When publishing a new modifier page, add five internal links to it the same day from the homepage, the general service page, two related pages and any relevant area page. This takes fifteen minutes and gives the page a real starting position rather than leaving it orphaned, which is the fate of most new pages.",

    "h: The reverse links",
    "p: The modifier page should also link outward:",
    "l: Back to the general service page.|To related services.|To relevant area pages.|To the contact or booking page.|These help visitors navigate and reinforce the topical relationships in both directions.",

    "h: Checking the internal link structure",
    "n: For each modifier page, count how many internal links point at it.|Record the source page and anchor text for each.|Check whether any two links use identical anchor text.|Check that at least one comes from within body content, not just navigation.|Check that the page links outward appropriately.|Compare against how many links point at your general service page.",
    "ex: The orphan that ranked after fifteen minutes of linking|A business had built a good emergency plumbing page eight months earlier. Nothing linked to it except the sitemap. Adding five internal links with varied natural anchor text moved it from position 34 to position 9 within five weeks, with no change to the page itself. The content had always been good. Nothing had ever pointed at it."
  ],
  take: [
    "Internal links make a new modifier page findable, tell Google what it is about, and pass value from stronger pages.",
    "Link from the homepage, the general service page, related services, area pages and contextual content.",
    "Vary anchor text naturally — identical keyword-rich phrases on every link look engineered.",
    "Add five internal links the same day a modifier page is published, which takes fifteen minutes.",
    "An orphaned page with excellent content will not rank; pointing links at it can move it substantially with no content change."
  ],
  self: [
    "I know the three things internal links do for a new modifier page.",
    "I can write varied natural anchor text including the modifier.",
    "I add at least five internal links when publishing a new page.",
    "I check both inbound and outbound links for each modifier page."
  ],
  quiz: [
    { q: "A good modifier page has existed for eight months and nothing links to it. What is the likely effect of adding five internal links?",
      a: ["None, content is all that matters", "Substantial improvement, because the page was orphaned and had no internal signal of importance", "It will be penalised", "It needs a new page instead"],
      c: 1,
      why: "An orphaned page is hard to discover and carries no internal importance signal. Pointing relevant links at it frequently produces a large move with no content change." },
    { q: "Why should internal anchor text be varied?",
      a: ["To confuse competitors", "Identical keyword-rich phrases on every link look engineered rather than editorial", "Google only counts the first", "It does not matter"],
      c: 1,
      why: "Natural editorial linking produces variation. Uniform optimised anchor text across many links is a recognisable pattern and reads badly to humans too." },
    { q: "How many internal links should a new important modifier page receive on publication?",
      a: ["One", "At least three, ideally five to eight from genuinely relevant pages", "Fifty", "None until it ranks"],
      c: 1,
      why: "Three is the minimum for the page to be considered supported. Five to eight from relevant pages gives an important page a real starting position." }
  ],
  ex: {
    title: "Fix the internal linking for a modifier page",
    time: "30 minutes",
    intro: "You will apply the free lever that most sites ignore.",
    steps: [
      "Choose a modifier page on your practice business's site, or the one you drafted earlier.",
      "Count how many internal links currently point at it and from where.",
      "Identify five relevant source pages that should link to it.",
      "Write natural, varied anchor text for each, including the modifier.",
      "Add the links, placing at least two within body content.",
      "Add outbound links from the page back to the general service page and the contact page."
    ],
    deliver: "Five new internal links with varied natural anchor text, plus appropriate outbound links from the page."
  },
  chal: {
    title: "Map the internal link architecture",
    brief: "Draw the complete internal link map for your practice business's service and modifier pages. Show every link that should exist, with its anchor text, in both directions. Then count how many internal links point at each page and check whether the distribution matches the commercial priority — the pages the business most wants to sell should receive the most internal links. Identify any page receiving links out of proportion to its importance, in either direction, and correct the map.",
    success: [
      "Your map shows links in both directions with specific anchor text.",
      "You checked whether link distribution matches commercial priority.",
      "You identified and corrected disproportionate distribution rather than only adding links."
    ]
  }
},

"7.5.6": {
  t: "Building a keyword-gap recovery plan",
  why: "This lesson assembles module 5 into a systematic programme for claiming every valuable term the business is missing.",
  body: [
    "h: The inputs",
    "n: The keyword set from lesson 4.4.1.|The mapping document from lesson 4.4.2.|The modifier opportunity map from lesson 7.5.2.|The relevance triangles from lesson 7.3.4.|The coverage matrix from lesson 7.5.4.",

    "h: The gap inventory",
    "p: Build one table containing every valuable term the business does not rank for:",
    "table: Column ; Content || Term ; The exact search || Type ; Head, modifier, problem, question || Estimated value ; Customer value multiplied by likely volume || Current position ; Local Pack and organic || Who ranks ; The top three || Their evidence ; Category, page, reviews, links || Our evidence ; The same, showing what is missing || Gap ; What specifically we lack || Effort ; Hours to close || Priority ; Value divided by effort",

    "h: Prioritising",
    "l: Terms where we already have partial evidence are cheapest to close.|Terms where the current leaders have weak evidence are most winnable.|Terms with high customer value justify more effort.|Terms requiring only profile changes come first, because they cost almost nothing.|Terms requiring a second location or a business model change are not keyword problems at all.",
    "tip: Look for the term where you are closest|Somewhere in the inventory is a term where you already have a secondary category and some review mentions, and the only thing missing is a page. That is a high-value, low-effort win and it should be first. Early wins fund and sustain the rest of the programme.",

    "h: The programme structure",
    "n: **Month 1: profile coverage for every target term.** Service entries, categories, attributes, hours. Free and fast.|**Months 1 to 2: the first page.** The highest priority term, built thoroughly.|**Month 2: internal links** for that page.|**Months 2 onward: review asking** aligned to the target services.|**Months 2 to 12: one page every six to eight weeks**, in priority order.|**Quarterly: re-measure everything** and re-prioritise.",

    "h: Measuring it properly",
    "l: Record the position for every target term before starting.|Measure each term separately after each intervention.|Record which interventions moved which terms and by how much.|Note the time from publication to effect for each page.|Build this into the personal evidence base from lesson 3.4.4.",
    "warn: Measure terms individually|If you build three pages in a month and measure only the total, you learn nothing about which worked. Measuring each term separately is what turns a programme into knowledge about your market, which is what makes you better on the next client.",

    "h: What to do with terms you cannot win",
    "n: Terms dominated by directories and listicles: pursue through reputation and by being featured, from lesson 7.5.2.|Terms requiring a location you do not have: address through area pages organically, or accept, from lesson 7.2.5.|Terms describing work the business does not genuinely want: remove from the list.|Terms where the leaders have overwhelming evidence and the value is modest: deprioritise honestly.",

    "h: Reporting it",
    "p: A keyword gap programme reports well because the progress is concrete:",
    "l: Terms targeted, terms claimed, positions before and after.|Evidence built: pages, service entries, reviews, links.|Enquiries attributable to the new terms, where tracking allows.|The remaining inventory and the next targets.",
    "ex: The twelve-month programme|A business began with 22 valuable terms it did not rank for. Profile coverage in month one produced movement on four. Seven pages built over the year claimed top-five positions on nine terms. Four terms were reclassified as unwinnable and removed. The remaining nine went into the next year's plan. Total enquiries rose substantially, and the business had a documented record of exactly which interventions moved which terms — which made the second year's prioritisation far better than the first year's."
  ],
  take: [
    "Build a gap inventory listing every valuable term, who ranks, their evidence, your gap, the effort and the priority.",
    "Start with the term where you are already closest — early wins fund and sustain the programme.",
    "Do profile coverage for every target term in month one, because it is free and fast.",
    "Measure each term separately, or you learn nothing about which intervention worked.",
    "Honestly reclassify terms you cannot win rather than leaving them in the plan indefinitely."
  ],
  self: [
    "I can build a complete keyword gap inventory.",
    "I prioritise by value divided by effort and start where I am closest.",
    "I measure terms individually to learn which interventions work.",
    "I reclassify unwinnable terms honestly rather than carrying them."
  ],
  quiz: [
    { q: "Which term should usually be tackled first?",
      a: ["The highest volume one", "The one where you already have partial evidence and only one element is missing", "The hardest one", "The one a competitor just claimed"],
      c: 1,
      why: "It is the cheapest to close and produces an early win, which sustains the programme and demonstrates the approach works." },
    { q: "Why measure each target term separately?",
      a: ["Clients prefer it", "Otherwise you learn nothing about which intervention moved which term, and the programme produces results but no knowledge", "It is faster", "Google requires it"],
      c: 1,
      why: "Individual measurement is what turns a programme into an evidence base about your market, which improves every future engagement." },
    { q: "What should you do with a term dominated by directory and listicle pages?",
      a: ["Build a page with the same title", "Pursue it through reputation and by being featured on the pages that rank", "Ignore all such terms", "Add it to the business name"],
      c: 1,
      why: "You generally cannot outrank comparison pages directly for those searches. The route to visibility is appearing on them, which depends on reputation." }
  ],
  ex: {
    title: "Build the keyword gap inventory",
    time: "50 minutes",
    intro: "You will produce the document that drives a year of relevance work.",
    steps: [
      "List every valuable term your practice business does not rank for.",
      "For each, record type, estimated value, current position and who ranks.",
      "For each, record the leaders' evidence and your own, and state the specific gap.",
      "Estimate the hours to close each gap.",
      "Calculate priority as value divided by effort.",
      "Identify the term where you are closest and mark it as first."
    ],
    deliver: "A complete gap inventory with priorities calculated and the first target identified."
  },
  chal: {
    title: "Run the first gap to completion",
    brief: "Take the highest-priority term from your inventory and close the gap completely. Add the profile coverage, build the page, add the internal links, set up the review asking approach, and record the baseline before you start. Then measure at four, eight and twelve weeks. Write up the result: what you did, what moved, how long it took, and what you would do differently. This single completed cycle, properly measured, is worth more to your development than reading another ten lessons.",
    success: [
      "You recorded a genuine baseline before starting and measured at all three intervals.",
      "You closed every element of the gap, not just the easiest.",
      "You produced a written record including what you would do differently."
    ]
  }
}

});
