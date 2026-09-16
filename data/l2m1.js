/* Level 2 · Module 1 — Business Model Types */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"2.1.1": {
  t: "The four business models Google recognises",
  why: "Google treats different kinds of business differently. Choosing the wrong model causes suspensions, invisible listings and wasted years. This is the foundation of Level 2.",
  body: [
    "h: Google sorts every business into a shape",
    "p: Before Google can rank you, it needs to know **what kind of business you are in the physical world**. There are four shapes, and each has its own rules about addresses, service areas and eligibility.",

    "n: **Storefront.** Customers come to you at a fixed address during set hours. A shop, restaurant, clinic, salon, office open to the public.|**Service Area Business (SAB).** You travel to the customer. A plumber, mobile mechanic, cleaning service, mobile dog groomer. Customers do not visit you.|**Hybrid.** Both. A bakery with a shop that also delivers. A veterinary clinic with a mobile service. Customers can visit, and you also travel out.|**Practitioner.** An individual professional who is publicly known by name — a doctor, lawyer, agent, therapist. This can exist alongside the business listing, and it is the most misunderstood of the four.",
    "term: SAB|Service Area Business. A business that goes to its customers instead of receiving them at its own address.",

    "h: Why the model decides so much",
    "table: Question ; Storefront ; SAB ; Hybrid ; Practitioner || Address shown publicly ; Yes ; No, hidden ; Yes ; Depends on setup || Must be staffed in business hours ; Yes ; N/A ; Yes ; Yes if it has an address || Can set service areas ; Sometimes ; Yes ; Yes ; Sometimes || Signage required ; Usually expected ; Not applicable ; Usually expected ; Usually expected || Common suspension cause ; Shared or virtual address ; Fake address, too many areas ; Wrong configuration ; Duplicate of the business",

    "h: The single most common beginner error",
    "warn: Treating an SAB like a storefront|A plumber who works from home lists their home address publicly, sets normal opening hours, and behaves like a shop. This breaks Google's rules, exposes a private address, and frequently leads to suspension. The correct configuration is covered in lesson 2.1.3.",

    "h: The second most common error",
    "p: Creating a practitioner listing that is really just a duplicate of the business. A single-dentist practice does not usually need both a clinic listing and a personal listing at the same address — that creates competition with yourself and risks a merge or removal. Lesson 2.1.5 covers exactly when a practitioner listing is legitimate.",

    "h: How to identify the model correctly",
    "p: Ask three questions, in this order:",
    "n: **Can a customer turn up at this address without an appointment and be served?** If yes, it is at least partly a storefront.|**Do staff travel to customers to deliver the service?** If yes, it has an SAB element.|**If both are true, it is a hybrid. If only the second is true, it is an SAB. If only the first, it is a storefront.**",
    "ex: A tricky one|A physiotherapist sees patients at a clinic three days a week and visits patients at home two days a week. Customers can attend the clinic, and the therapist also travels. That is a hybrid: a visible address plus service areas.",

    "h: Getting it wrong is expensive",
    "l: Wrong model can mean permanent ineligibility.|It can mean suspension months after everything seemed fine.|It can mean your listing shows an address customers turn up at and find nothing.|It can mean you are competing against your own second listing.",
    "tip: Decide the model before touching anything else|On any new business, write down the model in one line and get the owner to confirm it. Every later decision — address, hours, service areas, categories — follows from that one line."
  ],
  take: [
    "Google recognises four shapes: storefront, service area business, hybrid and practitioner.",
    "The model decides whether your address is public, whether you need staff at that address, and what can get you suspended.",
    "Treating a service area business like a storefront is the most common beginner error.",
    "Creating an unnecessary practitioner listing is the second most common.",
    "Identify and confirm the model in writing before making any other decision."
  ],
  self: [
    "I can name all four models and give an example of each.",
    "I can use the three questions to classify any business correctly.",
    "I can explain why a home-based plumber must not display their address.",
    "I know that the model determines address visibility, staffing rules and service areas."
  ],
  quiz: [
    { q: "A mobile dog groomer works only from a van and visits customers at home. Which model applies?",
      a: ["Storefront", "Service Area Business", "Hybrid", "Practitioner"],
      c: 1,
      why: "Customers never visit a premises. The business travels to them, which is the definition of a service area business, and the address must be hidden." },
    { q: "A bakery has a shop customers visit and also delivers across the city. Which model applies?",
      a: ["Storefront only", "Service Area Business only", "Hybrid", "Practitioner"],
      c: 2,
      why: "Customers can visit and the business also travels out. That combination is a hybrid: a visible address plus defined service areas." },
    { q: "Why is choosing the wrong model expensive?",
      a: ["It costs a Google fee", "It can cause suspension, ineligibility, wrong public information and self-competition", "It slows down the website", "It removes reviews immediately"],
      c: 1,
      why: "The model governs the rules you are judged against. A mismatch creates guideline violations that may surface as a suspension long after setup." }
  ],
  ex: {
    title: "Classify ten local businesses",
    time: "25 minutes",
    intro: "You will train your eye to identify models quickly, which is the skill you will use on every future engagement.",
    steps: [
      "Write down ten local businesses you know: a mix of shops, trades, professionals and services.",
      "For each, apply the three identification questions in order.",
      "Write the model next to each one.",
      "For any you found ambiguous, write one sentence explaining the ambiguity.",
      "Now look up three of them on Google Maps and check whether their listing matches the model you assigned.",
      "Note any mismatches you found."
    ],
    deliver: "A list of ten businesses with assigned models and at least three checked against their real listings."
  },
  chal: {
    title: "Find a misconfigured business in the wild",
    brief: "Search local trades in your area and find at least one business that appears to be configured as the wrong model — for example, a mobile-only service showing a residential address publicly, or a shop with no address shown. Document what you observe, explain which model it should be, and write out exactly what would need to change on the profile. Then note what risk the business is currently carrying by leaving it as it is.",
    success: [
      "You have found and documented a real misconfigured listing.",
      "You have stated the correct model and the specific changes needed.",
      "You have described the concrete risk the business is exposed to."
    ]
  }
},

"2.1.2": {
  t: "Storefront businesses: customers come to you",
  why: "The storefront is the simplest model and the one most guidelines are written for. Getting its details right prevents the majority of eligibility problems.",
  body: [
    "h: What makes a storefront",
    "p: A storefront is a business with a **real physical location that customers can visit**, staffed during the hours you publish. Shops, restaurants, clinics, gyms, salons, offices open to clients.",

    "h: The core requirements",
    "n: **A real address.** A genuine, permanent location, not a mailbox or a virtual office.|**Staffed during stated hours.** Someone must be there to serve customers when you say you are open.|**Accessible to customers.** Customers can come in and be served, not just collect deliveries.|**Signage is normally expected.** Google's verification increasingly looks for visible signage confirming the business is really there.|**Correct hours.** These must reflect when you are genuinely open to the public.",

    "warn: The staffing rule is real|If your listing says you are open 9 to 5 but nobody is there, you are in breach. This matters for small operations where the owner is often out. The fix is to publish the hours you are genuinely staffed, not the hours you wish you were.",

    "h: Map pin placement",
    "p: Beyond the address text, your listing has a **pin** on the map. This should sit on your actual entrance. A pin placed at the back of a building, on the wrong side of a road, or on the building's centroid in a large complex causes real problems: customers arrive at the wrong place, and distance calculations can be slightly off.",
    "tip: Always check the pin|Open your listing in Maps, tap Directions, and see where it takes you. If it does not take you to the door customers use, move the pin in the profile. This takes two minutes and is skipped by almost everyone.",

    "h: Storefronts inside larger buildings",
    "p: If you are in an office block, shopping centre or medical complex:",
    "l: Include the suite, unit or floor number in the address, consistently everywhere.|Make sure your signage exists at your own door, not just on the building directory.|Expect verification to ask for evidence of your specific unit.|Be aware that several businesses at one address is normal but invites scrutiny — see lesson 2.2.3.",

    "h: When a storefront is not really a storefront",
    "p: Some businesses have an address but do not serve customers there. Examples: a warehouse used only for storage, an office that only takes appointments off-site, a workshop customers never enter. These are usually service area businesses, and listing them as storefronts is a common and risky mistake.",
    "ex: The workshop test|A furniture restorer has a workshop. Customers never go there — everything is collected and delivered. Despite having a real, permanent, staffed address, this is a service area business, because customers are not served at that location.",

    "h: Storefront advantages",
    "l: Your address is public, which builds trust and helps customers find you.|You can appear for searches near your location with strong proximity.|Photos of the premises improve engagement.|Direction requests are a measurable conversion, covered in Level 9.|Verification is usually more straightforward than for hidden-address models."
  ],
  take: [
    "A storefront serves customers at a real, staffed, accessible address during the hours it publishes.",
    "Publishing hours when nobody is present is a guideline breach, not a harmless approximation.",
    "The map pin should sit on the entrance customers actually use — always test it with Directions.",
    "Include suite or unit numbers consistently when inside a larger building.",
    "Having an address is not enough — if customers are not served there, it is a service area business."
  ],
  self: [
    "I can state the five core requirements of a storefront listing.",
    "I can test and correct a map pin.",
    "I can explain why a workshop customers never visit is not a storefront.",
    "I know that stated hours must match when staff are genuinely present."
  ],
  quiz: [
    { q: "A furniture workshop has a real staffed address, but customers never visit. Which model is correct?",
      a: ["Storefront", "Service Area Business", "Practitioner", "Hybrid"],
      c: 1,
      why: "The defining test is whether customers are served at the address. If they are not, it is a service area business regardless of how real the premises are." },
    { q: "Why should you test the map pin with Directions?",
      a: ["It improves page speed", "To confirm it leads customers to the entrance they actually use", "It increases review count", "Google requires it monthly"],
      c: 1,
      why: "A misplaced pin sends customers to the wrong door or the wrong side of a building, and can slightly distort distance calculations." },
    { q: "A shop lists hours of 9 to 5 but the owner is often out with no staff present. What is the correct action?",
      a: ["Leave the hours as they are", "Publish only the hours the business is genuinely staffed", "Remove hours entirely", "Mark the business as temporarily closed"],
      c: 1,
      why: "Published hours must reflect reality. Overstating them breaches guidelines and produces poor customer experiences that lead to negative reviews." }
  ],
  ex: {
    title: "Run a storefront compliance check",
    time: "25 minutes",
    intro: "You will verify that a storefront listing meets every core requirement.",
    steps: [
      "Confirm the address on the profile matches the real premises exactly, including unit number.",
      "Open Directions from the listing and check where the pin actually leads.",
      "Compare published hours with the hours staff are genuinely present.",
      "Check whether photos show the exterior and signage clearly.",
      "Check whether the signage visible in photos matches the business name on the listing.",
      "List every discrepancy found and mark which ones create suspension risk."
    ],
    deliver: "A compliance check listing every discrepancy, with suspension risks marked."
  },
  chal: {
    title: "Audit pin accuracy across a whole street",
    brief: "Pick a commercial street or shopping area you know well. Open Google Maps and check the pin placement of ten businesses on it. For each, judge whether the pin would lead a customer to the right entrance. Record how many are wrong and in what way. Then write a short note on what this tells you about how common this problem is, and how you would raise it with a client without sounding trivial.",
    success: [
      "You checked ten real businesses and recorded pin accuracy for each.",
      "You categorised the types of pin error you found.",
      "You wrote a client-facing explanation that makes the issue sound as consequential as it is."
    ]
  }
},

"2.1.3": {
  t: "Service Area Businesses: you go to the customer",
  why: "Service area businesses have the strictest rules, the highest suspension rates, and the most misunderstood settings. This lesson gets them right.",
  body: [
    "h: What defines an SAB",
    "p: A service area business **travels to its customers**. Customers are not served at the business address. Plumbers, electricians, mobile mechanics, cleaners, landscapers, mobile pet services, many delivery-only food businesses.",

    "h: The four rules that matter most",
    "n: **Hide your address.** If customers are not served at your address, it must not be displayed. This is not optional and is a common suspension trigger.|**You still need a real address to verify.** You enter it during setup, Google uses it internally, and then you hide it from the public.|**Set genuine service areas.** Areas you actually serve, not everywhere you would like to work.|**Do not use a fake or rented address.** Virtual offices, mailboxes and coworking desks used only for an address are against the rules — see lesson 2.2.2.",

    "warn: The biggest SAB myth|'If I add more service areas, I will rank in more places.' This is false. Service areas tell Google and customers where you are willing to travel. They do not change where you rank. Ranking is still driven by distance from your real address, plus relevance and prominence. Lesson 3.3.2 covers this in full because it causes so much wasted effort.",

    "h: How many service areas should you set?",
    "p: Google allows a limited number of areas, and the practical guidance is:",
    "l: Set areas you genuinely serve and would actually travel to.|Keep the total geographic spread realistic — a plumber covering an entire large country is not credible.|Prefer meaningful units: towns, cities, postcodes or regions that match how customers think.|Avoid stuffing dozens of tiny areas hoping for coverage. It does not work and looks manipulative.",

    "h: Hours for an SAB",
    "p: Hours mean 'when can customers reach you and book', not 'when is our office open to visitors'. Set the hours during which someone will answer. If you offer 24-hour emergency service and genuinely answer at night, say so — it is a real competitive advantage, as covered in lesson 1.4.5.",

    "h: The honest disadvantage of being an SAB",
    "p: SABs generally find local ranking harder than storefronts. Their address is hidden but still used for distance, they often operate from residential areas away from commercial centres, and they cannot benefit from foot traffic signals. This is not unfair, it is structural — and it makes prominence work disproportionately important for them.",
    "ex: The suburban plumber|A plumber works from home in an outer suburb. Their strongest ranking area is around their home, which is exactly where the fewest commercial searches happen. Their realistic strategy is not to fight distance but to build enough prominence, reviews and local links that they hold position further towards the busier areas. Level 7 module 2 works through this case in detail.",

    "h: Common SAB mistakes",
    "l: Displaying a home address publicly.|Using a virtual office to appear closer to a city centre.|Setting fifty service areas covering an implausible region.|Creating multiple listings for different towns served. This is a violation — one business, one listing.|Setting hours that nobody answers.",
    "tip: One business, one listing|The rule that catches most SABs out. You may serve twenty towns, but you get one listing. Creating a listing per town is a fast route to suspension of all of them."
  ],
  take: [
    "A service area business travels to customers and must hide its address.",
    "You still supply a real address for verification — Google keeps it internally and measures distance from it.",
    "Adding more service areas does not make you rank in more places.",
    "Set realistic service areas and hours during which someone genuinely answers.",
    "One business gets one listing, no matter how many towns it serves."
  ],
  self: [
    "I can explain why an SAB must hide its address.",
    "I know that service areas do not create rankings.",
    "I can explain why SABs face a structural ranking disadvantage.",
    "I know that creating a listing per town served is a violation."
  ],
  quiz: [
    { q: "Does adding more service areas make a business rank in more places?",
      a: ["Yes, directly", "No — ranking still depends on distance from the real address, relevance and prominence", "Only for storefronts", "Only if you add more than twenty"],
      c: 1,
      why: "Service areas communicate where you will travel. They do not move your business or alter the distance calculation that drives local ranking." },
    { q: "A plumber serves fifteen towns. How many Google listings should they have?",
      a: ["One per town", "One in total", "One per five towns", "Two, to cover the extremes"],
      c: 1,
      why: "One business gets one listing. Creating a listing for each town served is a guideline violation that commonly leads to all of them being suspended." },
    { q: "Why must an SAB still enter a real address during setup?",
      a: ["For billing", "Because verification and distance measurement both require it, even though it is hidden from the public", "To display it on Maps", "It is optional"],
      c: 1,
      why: "The address is used internally for verification and for measuring distance. Hiding it changes only what the public sees." }
  ],
  ex: {
    title: "Configure an SAB correctly on paper",
    time: "25 minutes",
    intro: "You will write out the complete correct configuration for a service area business.",
    steps: [
      "Choose a real or imagined service area business and write down its real base address.",
      "Write the instruction 'address hidden from public' and note why.",
      "List the service areas you would set, with a one-line justification for the outer boundary.",
      "Write the hours, defined as when someone will genuinely answer.",
      "Write down what the business must never do: list of at least four prohibited actions.",
      "Check your service area list against the question 'would we actually drive there for a normal job?'"
    ],
    deliver: "A complete written SAB configuration with justified service areas and a list of prohibited actions."
  },
  chal: {
    title: "Find SAB violations in your market",
    brief: "Search two or three trade categories in your area and look specifically for service area businesses breaking the rules: addresses displayed that look residential, multiple listings from the same business in different towns, or implausible service areas. Document at least three violations with evidence. Then write a short analysis of what competitive advantage these businesses are currently gaining, and what risk they are carrying. Do not report anything yet — spam handling is covered properly in Level 8 module 1.",
    success: [
      "You have documented at least three genuine violations with evidence.",
      "You have assessed the advantage each violation currently provides.",
      "You have assessed the risk each business is carrying and noted which are most exposed."
    ]
  }
},

"2.1.4": {
  t: "Hybrid businesses: both at once",
  why: "Hybrids are increasingly common and frequently misconfigured. Setting one up correctly gives you the benefits of both models without the risks of either.",
  body: [
    "h: What a hybrid is",
    "p: A hybrid business **serves customers at its address and also travels to them**. Both are genuinely true. Examples: a bakery with a shop and delivery, a vet clinic with home visits, a computer repair shop that also visits offices, a florist with a shop and delivery.",

    "h: How a hybrid is configured",
    "n: **Address is shown publicly**, because customers really can visit.|**Service areas are also set**, covering where you travel.|**Hours reflect when the premises is open to visitors.**|**Both aspects should be visible in your content** — your website and profile should make clear that customers can visit and that you also come out.",

    "warn: Do not claim hybrid status to show an address you should hide|Some service area businesses add token 'you can visit us by appointment' language to justify displaying an address. If customers do not genuinely get served there, this is a violation. Google's verification process increasingly checks. The risk is a hard suspension that is difficult to reverse.",

    "h: The honest test",
    "p: Ask: **if a customer turned up during stated hours without warning, would they be served?** If yes, hybrid is legitimate. If the honest answer is 'they would be told to go away' or 'nobody would be there', it is a service area business.",

    "h: Advantages of a genuine hybrid",
    "l: Public address builds trust and enables direction requests.|Proximity signals work in your favour around the premises.|Service areas communicate your travel range to customers.|You can earn both walk-in and travel-based business from the same listing.|Photos of the premises improve engagement.",

    "h: Risks and complications",
    "l: More rules apply to you, because you must satisfy storefront requirements as well.|Hours must genuinely be staffed.|If your premises is residential, displaying it may be undesirable even when permitted.|Customers may arrive expecting a full retail experience and find a small operation, which can harm reviews.",

    "ex: A well-run hybrid|A tile supplier has a small showroom open 9 to 4, staffed, with signage. It also delivers and fits tiles across the county. The listing shows the showroom address, real hours, and service areas covering the county. Photos show both the showroom and fitting work. Everything the listing claims is true and checkable, which is exactly the standard to aim for.",

    "h: Deciding when hybrid is worth it",
    "p: If you genuinely serve customers at your premises, be a hybrid. If serving them there is marginal and inconvenient, consider whether it is worth the additional obligations. Some businesses deliberately open a small genuine reception capability to qualify — that is legitimate, provided it is real and staffed. What is not legitimate is claiming it without doing it.",
    "tip: Write the claim down and test it|Write one sentence describing what a walk-in customer would experience. If you cannot describe it confidently and truthfully, you are not a hybrid."
  ],
  take: [
    "A hybrid genuinely serves customers at its address and also travels to them.",
    "It shows the address publicly and sets service areas, with staffed hours.",
    "Claiming hybrid status to justify showing an address you should hide is a serious violation risk.",
    "The honest test is whether an unannounced customer would actually be served during stated hours.",
    "Hybrids gain trust and proximity benefits but must satisfy storefront obligations too."
  ],
  self: [
    "I can define a hybrid and give two real examples.",
    "I can apply the walk-in test to decide whether hybrid status is legitimate.",
    "I can list the additional obligations a hybrid takes on.",
    "I understand why falsely claiming hybrid status is high risk."
  ],
  quiz: [
    { q: "What is the honest test for hybrid status?",
      a: ["Whether the business has an address", "Whether an unannounced customer would actually be served there during stated hours", "Whether the business delivers", "Whether it has more than one employee"],
      c: 1,
      why: "The defining question is whether customers are genuinely served at the premises. Having an address or offering delivery does not settle it." },
    { q: "A service area business adds 'visit by appointment' wording to justify showing its home address. What is this?",
      a: ["A clever optimisation", "A guideline violation that risks a hard suspension", "Required by Google", "Only a problem in some countries"],
      c: 1,
      why: "If customers are not genuinely served there, displaying the address breaches the rules. Verification increasingly checks, and the resulting suspension is difficult to reverse." },
    { q: "What additional obligation does a hybrid take on compared with an SAB?",
      a: ["More reviews", "Storefront requirements including staffed hours and a genuinely accessible premises", "A larger advertising budget", "Monthly verification"],
      c: 1,
      why: "By displaying an address and inviting visitors, the business must meet the storefront standards of being staffed, accessible and accurately represented." }
  ],
  ex: {
    title: "Test a hybrid claim",
    time: "20 minutes",
    intro: "You will apply the walk-in test rigorously to a real business.",
    steps: [
      "Find a local business that shows an address and also advertises that it travels to customers.",
      "Write down what its listing claims: address, hours, service areas.",
      "Check its photos for evidence of a customer-facing premises and signage.",
      "Read recent reviews for any mention of visiting the premises.",
      "Judge whether the hybrid claim is supported by the evidence.",
      "Write one sentence on what additional evidence would settle the question."
    ],
    deliver: "A written judgement on whether a real hybrid claim is supported, with the evidence you used."
  },
  chal: {
    title: "Advise a borderline case",
    brief: "A carpet fitter works from a small industrial unit. Customers occasionally come to see samples, but only by appointment, and the unit is often empty because the fitter is out on jobs. They want to display the address because they believe it will help rankings. Write the advice you would give: what the rules require, what the genuine options are, what each option would cost or require operationally, and what you would recommend and why. Be specific about the trade-offs rather than simply refusing.",
    success: [
      "You correctly identify that the current setup does not support a public address.",
      "You present at least two legitimate options with their operational requirements.",
      "You give a clear recommendation with reasoning, not just a refusal."
    ]
  }
},

"2.1.5": {
  t: "Practitioner listings: the person and the business",
  why: "Practitioner listings are legitimate, valuable and routinely misused. Knowing exactly when they apply prevents duplicate listings and wasted competition against yourself.",
  body: [
    "h: What a practitioner listing is",
    "p: Some professionals are publicly known by their own name, and customers search for them personally. A practitioner listing represents **the individual**, separate from the business they work in.",
    "p: Typical cases: doctors, dentists, lawyers, real estate agents, financial advisers, therapists, insurance agents.",

    "h: When a practitioner listing is legitimate",
    "n: The practitioner is **publicly contactable at that location** and customers ask for them by name.|The practitioner works at a business with **multiple practitioners**, such as a clinic with six dentists or a firm with twelve lawyers.|The practitioner has their own direct phone number or extension where possible.|They are a genuine individual, not a job title or department.",

    "h: When it is NOT legitimate",
    "warn: The single-practitioner rule|If the business has only one practitioner, the business listing and the practitioner listing would represent the same thing. Google's guidance is that these should be a single listing, not two. Creating both produces a duplicate that competes with itself, splits reviews, and is liable to be merged or removed.",
    "l: A solo dentist practice should have one listing, not a clinic listing plus a personal one.|A one-person law firm should have one listing.|Departments, teams or job titles are not practitioners.|A practitioner who has left the business must have their listing removed or updated.",

    "h: The self-competition problem",
    "p: Two listings at the same address in the same category split everything: reviews go to different places, links point to different listings, and the two can appear to compete. In a market with three Local Pack slots, taking two of them with your own listings sounds appealing — but Google generally filters near-duplicate listings, so in practice you usually end up weaker, not stronger.",
    "term: Filtering|When Google hides one of two very similar listings to avoid showing the same business twice.",

    "h: Getting practitioner listings right in a multi-practitioner business",
    "n: One listing for the **business** itself, using the business name.|One listing per genuine practitioner, using the practitioner's real name in the correct format.|Practitioner listings should use the practitioner's specific category, which may be narrower than the clinic's.|Where possible, give each practitioner a distinct contact route.|Each practitioner listing should link to that practitioner's own page on the website, not the homepage.",
    "ex: A well-structured clinic|A dental practice with four dentists has five listings: the practice, plus one for each dentist. Each dentist listing uses their real name, their own specialism as the category, and links to their own biography page on the practice website. Reviews mentioning a dentist by name reinforce the right listing. This is exactly how the system is designed to work.",

    "h: Leavers and changes",
    "p: When a practitioner leaves, their listing must be removed or transferred, not left pointing at the old address. Stale practitioner listings are a common source of wrong information, bad customer experiences and duplicate confusion. Lesson 8.3.2 covers the cannibalisation problems these create in detail.",
    "tip: The rule of thumb|More than one practitioner at the location? Practitioner listings are allowed and often valuable. Only one? One listing, always."
  ],
  take: [
    "A practitioner listing represents an individual professional who is publicly known by name.",
    "It is legitimate where multiple practitioners work at one location and customers ask for them by name.",
    "A single-practitioner business should have one listing only, not a business listing plus a personal one.",
    "Duplicate listings split reviews and links, and Google usually filters them anyway.",
    "Practitioner listings should use the practitioner's real name, their own category, and their own website page."
  ],
  self: [
    "I can state when a practitioner listing is legitimate and when it is not.",
    "I can explain the self-competition and filtering problem.",
    "I can describe the correct structure for a four-dentist clinic.",
    "I know what must happen to a practitioner listing when the person leaves."
  ],
  quiz: [
    { q: "A solo lawyer runs a one-person firm. How many listings should exist?",
      a: ["Two: one for the firm, one for the lawyer", "One", "Three", "One per practice area"],
      c: 1,
      why: "With a single practitioner, the business and the person are effectively the same entity. Two listings create a duplicate that competes with itself and is liable to be merged." },
    { q: "What usually happens when two near-duplicate listings exist at one address?",
      a: ["Both rank in the top three", "Google filters one of them, and the pair is often weaker than a single strong listing", "Reviews are combined automatically", "Both receive double visibility"],
      c: 1,
      why: "Filtering hides near-duplicates so the same business is not shown twice. Meanwhile reviews and links are split across the two, weakening both." },
    { q: "What should a practitioner listing link to on the website?",
      a: ["The homepage", "That practitioner's own biography or profile page", "A contact form", "A social media page"],
      c: 1,
      why: "Linking to the individual's own page gives Google matching, specific evidence for that listing, strengthening the connection between person and profile." }
  ],
  ex: {
    title: "Design the listing structure for a multi-practitioner business",
    time: "25 minutes",
    intro: "You will plan a complete, compliant listing structure.",
    steps: [
      "Choose a real multi-practitioner business in your area — a clinic, firm or agency.",
      "List every practitioner who works there and is publicly contactable.",
      "Write out the full listing structure: one business listing plus one per practitioner.",
      "For each practitioner listing, write the name format, the category, and the website page it should link to.",
      "Check Google Maps to see what currently exists.",
      "Note every gap and every listing that should not exist."
    ],
    deliver: "A complete listing structure plan compared against what currently exists, with gaps and excess listings identified."
  },
  chal: {
    title: "Find a self-competition problem",
    brief: "Search medical, legal or real estate categories in your area and find a case where a business and a practitioner listing appear to be competing at the same address, or where a stale practitioner listing still exists for someone who appears to have left. Document what you find. Then write a recommendation covering which listing should be kept, what should happen to the other, what would happen to the reviews on it, and in what order the steps should be taken to minimise disruption.",
    success: [
      "You found a real case of duplication or a stale practitioner listing.",
      "Your recommendation states clearly which listing survives and why.",
      "You addressed what happens to existing reviews and the order of operations."
    ]
  }
},

"2.1.6": {
  t: "Choosing the right model and the cost of choosing wrong",
  why: "This lesson brings module 1 together into a decision you can make confidently, and shows you exactly what it costs when the decision is wrong.",
  body: [
    "h: The decision tree",
    "n: **Are customers served at a fixed address?** No, go to step 3.|Yes. **Do you also travel to customers?** No, it is a **storefront**. Yes, it is a **hybrid**.|Not served at an address. It is a **service area business**. Hide the address.|**Separately:** are there multiple named professionals customers ask for by name? If yes, add **practitioner** listings alongside the business listing.",

    "h: The questions that resolve hard cases",
    "l: Would an unannounced customer be served during stated hours? Decides storefront and hybrid eligibility.|Is the address a real, permanent, exclusive place of business? Decides whether any address can be shown.|Does the business genuinely travel to customers for normal jobs? Decides whether service areas apply.|Is there more than one practitioner at this location? Decides practitioner listings.",

    "h: What it costs to get it wrong",
    "table: Wrong choice ; Likely consequence ; Difficulty of recovery || SAB listed as storefront ; Suspension, exposed private address ; Moderate to hard || Storefront listed as SAB ; Lost proximity benefit, no direction requests ; Easy to fix || Fake hybrid claim ; Hard suspension ; Very hard || Listing per town served ; All listings suspended ; Hard || Unnecessary practitioner listing ; Filtered listing, split reviews ; Moderate || Virtual office address ; Hard suspension, possible permanent ineligibility ; Very hard",

    "warn: Suspensions do not always arrive immediately|A wrongly configured listing can run for two years without incident and then be suspended after a routine re-verification, a competitor report, or a system update. The absence of a problem today is not evidence that the configuration is safe. This is one of the most important things to explain to clients who say 'it has been fine for years'.",

    "h: Changing model later",
    "p: You can change model, but do it carefully:",
    "n: Make sure the real-world situation genuinely supports the new model first.|Change one significant thing at a time, not everything at once.|Expect a re-verification request, especially when adding or revealing an address.|Update the website, citations and structured data to match, so the evidence agrees.|Document the date, so you can attribute any ranking change correctly.",
    "tip: Never change model and address in the same week|Two large changes at once makes both re-verification more likely and attribution impossible. Space them, and record the dates.",

    "h: The professional standard",
    "p: On every business you ever work on, the model should be written down, confirmed with the owner, and matched by the real-world operation. That one line of documentation prevents most of the disasters covered in Level 8.",
    "ex: The two-year time bomb|An agency inherited a client whose profile had shown a virtual office address since 2021. Everything worked. In year three, Google requested re-verification, the address failed, and the listing was suspended with all its reviews inaccessible. The correct configuration had been available the whole time at no cost. The delay simply made the eventual loss larger."
  ],
  take: [
    "Use the four-step decision tree: served at an address, also travels, practitioners present.",
    "Hard cases are resolved by asking whether an unannounced customer would genuinely be served.",
    "Wrong models cost suspensions, lost proximity, filtered listings or permanent ineligibility.",
    "A configuration that has been fine for years is not proven safe — re-verification can arrive at any time.",
    "When changing model, change one thing at a time, update all supporting evidence, and record dates."
  ],
  self: [
    "I can run the decision tree without looking at it.",
    "I can name the consequence of at least four wrong-model choices.",
    "I can explain why 'it has been fine for years' is not evidence of safety.",
    "I know how to change model safely, one step at a time."
  ],
  quiz: [
    { q: "A client says their virtual office address has worked fine for three years. What is the correct assessment?",
      a: ["It is proven safe", "It is a live risk that can trigger suspension at any re-verification", "It only matters for new listings", "Google has approved it"],
      c: 1,
      why: "Time without incident is not approval. Re-verification, a competitor report or a system change can surface the violation years later, usually with worse consequences." },
    { q: "What is the main cost of listing a genuine storefront as a service area business?",
      a: ["Suspension", "Lost proximity benefit and no direction requests, though it is easy to fix", "Permanent ineligibility", "Loss of all reviews"],
      c: 1,
      why: "This error is conservative rather than dangerous. You lose the public address advantages, but it is a straightforward correction with no penalty." },
    { q: "Why should you avoid changing model and address in the same week?",
      a: ["Google charges a fee", "It increases re-verification risk and makes it impossible to attribute any ranking change", "It is forbidden", "It resets your reviews"],
      c: 1,
      why: "Two major changes together compound the disruption and destroy your ability to tell which change caused what, which makes future diagnosis impossible." }
  ],
  ex: {
    title: "Document the model for your practice business",
    time: "20 minutes",
    intro: "You will produce the one-line documentation that every professional engagement should start with.",
    steps: [
      "Run the decision tree on your practice business and write down the resulting model.",
      "Write the evidence supporting that model in two sentences.",
      "Check the current profile configuration and note whether it matches.",
      "If it does not match, list every change needed and the order you would make them.",
      "Note any change likely to trigger re-verification.",
      "Write the date and file this as your model record."
    ],
    deliver: "A dated model record stating the correct model, the supporting evidence, and any changes required."
  },
  chal: {
    title: "Build a model audit checklist for any business",
    brief: "Create a one-page checklist that lets you or a colleague determine the correct model for any local business in under five minutes, including the hard-case questions and the red flags that indicate a current misconfiguration. Include a short section on what to do when the owner insists on a configuration you believe is non-compliant — how to document your advice and protect both parties. Make it usable by someone who has not taken this course.",
    success: [
      "The checklist resolves all four models and includes the hard-case questions.",
      "It lists concrete red flags visible on an existing listing.",
      "It includes a documented process for disagreeing with an owner professionally."
    ]
  }
}

});
