/* Level 1 · Module 4 — Inside the Local Pack Machine */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"1.4.1": {
  t: "How the local index differs from the web index",
  why: "Local results are not pulled from the same list as normal web results. Knowing they are separate systems explains a lot of confusing behaviour.",
  body: [
    "h: Two different libraries",
    "p: Think of Google as running two libraries side by side. One holds **web pages**. The other holds **places**. A normal search looks in the pages library. A local search looks in the places library first, then adds pages underneath.",
    "term: Web index|Google's store of web pages it has found and read.",
    "term: Local index|Google's store of real-world places and businesses, with their locations, categories, hours and reviews.",

    "h: Why this matters",
    "l: Your website can be removed, broken or slow and your Local Pack listing can still appear. They are separate records.|You can have no website at all and still rank in the Local Pack. Millions of businesses do.|Ranking first in the normal results does not automatically put you in the Local Pack.|Fixing a website problem may not fix a Local Pack problem, and vice versa.",

    "ex: The website that went offline|A restaurant's site expired and went dead for a month. Its Local Pack listing kept ranking first and the phone kept ringing. Nobody noticed for weeks. Two separate systems, two separate failures.",

    "h: What the local index holds about you",
    "p: A place record contains, roughly: the business name, coordinates, address, category or categories, phone, website, hours, attributes, photos, reviews, and links to related entities such as the chain it belongs to.",

    "h: How the two libraries talk to each other",
    "p: They are separate but connected. Your website feeds the place record: Google reads your site to confirm your address, understand your services, and find text worth quoting in justifications. Your place record influences which of your web pages Google shows for local searches.",
    "p: This is why lesson 1.3.4 mattered. The stronger the connection, the more each library helps the other.",

    "h: Practical consequences for diagnosis",
    "table: Symptom ; Which index is involved ; Where to look || Listing missing from Maps entirely ; Local ; Verification, eligibility, suspension — Level 2 || Website pages not appearing at all ; Web ; Indexing and technical — Level 4 || Listing appears but with old information ; Local ; Data sources — lesson 1.3.2 || Ranks organically but not in the Pack ; Both, weak connection ; Lesson 1.3.4, then Level 3 || Pack listing appears but no website button ; Local ; Website field empty on the profile",

    "tip: Ask which library|Whenever something goes wrong, your first structural question is: is this a places problem or a pages problem? It narrows the search enormously, and it is a question most beginners never think to ask."
  ],
  take: [
    "Google keeps a web index of pages and a local index of places. They are separate systems.",
    "A business can rank locally with no website at all, and a website can rank with no local listing.",
    "The two are connected: your site feeds facts to your place record, and your place record influences which pages appear locally.",
    "Diagnosing starts with asking whether the problem is a places problem or a pages problem."
  ],
  self: [
    "I can explain the difference between the web index and the local index.",
    "I can give an example of a failure in one that does not affect the other.",
    "I can name three things stored in a place record.",
    "I ask 'places or pages?' before investigating any problem."
  ],
  quiz: [
    { q: "A business's website goes offline. What usually happens to its Local Pack listing?",
      a: ["It disappears immediately", "It often keeps ranking, because the place record is separate from the website", "All reviews are deleted", "The profile is suspended"],
      c: 1,
      why: "The local index holds a separate place record. A dead website is a problem for many reasons, but it does not instantly remove the local listing." },
    { q: "Can a business rank in the Local Pack with no website at all?",
      a: ["No, a website is required", "Yes, millions of businesses do", "Only if it pays for ads", "Only in rural areas"],
      c: 1,
      why: "A website strengthens relevance and prominence, but the place record can exist and rank without one." },
    { q: "What is the most useful first structural question when something goes wrong?",
      a: ["How old is the domain?", "Is this a places problem or a pages problem?", "How many keywords do we target?", "What is our ad budget?"],
      c: 1,
      why: "Separating the two systems immediately narrows where to look and prevents wasted effort fixing the wrong thing." }
  ],
  ex: {
    title: "Separate the two systems for your practice business",
    time: "20 minutes",
    intro: "You will document the health of each library independently.",
    steps: [
      "Search the exact business name and confirm the place record appears with correct information. Note anything wrong.",
      "Search site:yourdomain.com in Google to see which pages of the website are indexed. Note roughly how many.",
      "Check whether the main service page appears when you search its exact title.",
      "Write two separate health notes: one for the place record, one for the website.",
      "State which of the two looks weaker and why."
    ],
    deliver: "Two separate health notes, one per index, with a judgement on which is weaker."
  },
  chal: {
    title: "Find a business strong in one index and absent from the other",
    brief: "Find a real local business that ranks well in the Local Pack but whose website barely appears in normal search, and a second business with the opposite pattern. For each, work out why. Check whether the profile links to the site, whether the site mentions the address, and how many pages the site has indexed. Write a short comparison explaining what each business would need to do to fix its weaker side.",
    success: [
      "You have found genuine examples of both patterns.",
      "You checked the connection between site and profile in both cases.",
      "You have written a specific fix recommendation for each."
    ]
  }
},

"1.4.2": {
  t: "Why results change every few streets",
  why: "This single fact explains more client confusion than anything else in local SEO, and it is the reason professional measurement uses grids.",
  body: [
    "h: There is no single ranking",
    "p: Because distance is measured from the searcher, your position changes as the searcher moves. You might be first outside your shop, fourth two streets away, and nowhere across town. **All of these are true at the same time.**",
    "p: This means the question 'what is our ranking?' has no single correct answer. The honest answer is a map, not a number.",

    "h: What causes the change",
    "n: **Distance shifts.** You get further from the searcher, competitors get closer.|**The competitive set changes.** Move two kilometres and there is a different group of businesses within range.|**The centre point moves.** Google recalculates which businesses are most useful from this new point.|**Density changes.** A dense commercial area has more competitors packed together than a residential one.",

    "ex: The three-street drop|A dentist ranks first at their own address. Three streets north, a competitor's clinic sits closer to the new searcher, and the first dentist falls to third. Nothing changed about either business. Only the observer moved.",

    "h: How far you can travel before your rank changes",
    "p: It depends entirely on density. In a city centre, ranking can change within a few hundred metres. In a rural area, it may hold steady for twenty kilometres. There is no universal number, which is why you measure rather than assume.",

    "h: Why clients get confused",
    "l: They check from home, from the office, and on their phone in the car, and get three different answers.|They assume a drop means something broke.|A staff member 'checks Google' from a different suburb and reports a problem that does not exist.|Competitors appear to move up and down for no reason.",
    "warn: Never let a client's single check drive strategy|One search from one point is a single data point in a system with thousands of points. Responding to it is how businesses end up making random changes that damage a healthy profile.",

    "h: The grid answer",
    "p: Professionals measure on a **grid**: a set of points laid out across the service area, checking ranking at each one. The result is a map showing where you are strong and where you fade. We build this properly in Level 9 module 1, and use it for diagnosis in Level 7 module 2.",
    "term: Geo-grid|A grid of measurement points across a map, each checked separately, producing a picture of where a business ranks rather than a single number.",

    "tip: How to introduce this to a client early|Show them a grid in the first month. Once they have seen the map, they stop reporting single-point checks as emergencies, and your working life becomes much calmer."
  ],
  take: [
    "There is no single ranking in local search — position changes as the searcher moves.",
    "Rank changes because distance, the competitive set, the centre point and density all shift.",
    "How far you can travel before rank changes depends entirely on local density.",
    "Single-point checks by clients cause most false alarms in local SEO.",
    "The professional answer is a geo-grid: a map of rankings, not a number."
  ],
  self: [
    "I can explain why one business can be first and fourth at the same time.",
    "I can name the four reasons rank changes as the searcher moves.",
    "I know why a single check from one location is unreliable.",
    "I can explain what a geo-grid is in one sentence."
  ],
  quiz: [
    { q: "A client checks from home and reports a drop, but the business is fine. What is the likely explanation?",
      a: ["Google is broken", "They measured from a different point, where the competitive set and distances differ", "The profile was suspended", "Their browser is out of date"],
      c: 1,
      why: "Ranking is point-specific. A different starting location naturally produces a different result without anything having changed." },
    { q: "In which environment does ranking change over the shortest distance?",
      a: ["A rural county", "A dense city centre", "A suburb", "A coastal town"],
      c: 1,
      why: "Density decides it. Where many competitors are packed close together, a few hundred metres can reorder the results completely." },
    { q: "What is the professional way to answer 'what is our ranking?'",
      a: ["A single number from the office", "A geo-grid showing rankings across many points", "The best rank found anywhere", "An estimate based on reviews"],
      c: 1,
      why: "A grid reflects reality. A single number hides where you are strong and where you disappear, which is the information that actually matters." }
  ],
  ex: {
    title: "Build a manual five-point grid",
    time: "35 minutes",
    intro: "You will produce your first ranking map by hand, before you ever use a tool.",
    steps: [
      "On a map, mark your practice business and four points roughly north, south, east and west of it, each about two to three kilometres away.",
      "For each point, use a private window with the location set to that point, or physically check from there.",
      "Search the main keyword and record your position at each of the five points.",
      "Draw the five numbers on a simple sketch of the map.",
      "Write one sentence describing the shape of your visibility — is it even, or stretched in one direction?",
      "Note which competitor beats you at each outer point."
    ],
    deliver: "A hand-drawn five-point ranking map with a written description of the visibility shape."
  },
  chal: {
    title: "Explain the grid to a business owner",
    brief: "Write a short client-facing explanation, under 200 words with no jargon, that answers the question 'why do I see different results than you do?'. It must leave the owner confident rather than suspicious, and it must set up why you will report using a map instead of a number. Include one analogy from everyday life. Test whether a non-marketing person understands it on first reading.",
    success: [
      "Under 200 words, no jargon, includes one everyday analogy.",
      "It explains both why results differ and why a map is the honest measure.",
      "A non-specialist understood it without asking follow-up questions."
    ]
  }
},

"1.4.3": {
  t: "Filters, refinements and justification text",
  why: "The small buttons and grey lines around local results are not decoration. They tell you what Google understands and how people narrow their choices.",
  body: [
    "h: Filters and refinement chips",
    "p: Above or below local results you often see small buttons: 'Open now', 'Top rated', 'Delivery', or subcategory chips like 'Emergency', 'Walk-in', 'Cosmetic'. These let the searcher narrow the list.",
    "p: Two practical consequences:",
    "n: **If you fail a filter, you vanish for people who use it.** A business with no hours set may disappear when someone taps 'Open now'.|**The chips reveal Google's subcategories.** If Google offers a 'Emergency' chip for your industry, it has a concept of emergency providers — and you want to be in that set.",

    "h: What decides whether you survive a filter",
    "table: Filter ; What it checks ; What you must have || Open now ; Your hours ; Accurate, complete opening hours || Top rated ; Rating and review count ; A competitive rating || Delivery / takeaway ; Attributes and order links ; The relevant attributes switched on || Wheelchair accessible ; Accessibility attributes ; Attributes completed honestly || Subcategory chips ; Categories, services, site content ; Matching category or service entries",
    "warn: Empty attributes cost you silently|A business that never filled in attributes will simply not appear for anyone filtering on them. There is no error message. You just lose those customers invisibly.",

    "h: Justification text",
    "p: Under a Local Pack listing, Google sometimes adds a short grey line explaining why this business matched. Common forms:",
    "l: **Review justification** — a quoted phrase from a customer review, such as 'Great for emergency repairs'.|**Website justification** — 'Their website mentions same-day service'.|**Service justification** — naming a service you listed on your profile.|**Product or menu justification** — naming an item you sell.|**Post justification** — text from a recent Google Post.",
    "term: Justification|A short explanatory line under a local listing showing which piece of evidence matched the search.",

    "h: Why justifications are so useful",
    "p: They are Google telling you, publicly, which source it read and found relevant. That is free diagnostic information that most people scroll past.",
    "ex: Reverse-engineering a competitor|You search 'same day appliance repair'. The top result shows 'Their website mentions same day repair'. You now know exactly what to add, and where. You did not have to guess.",
    "p: They also improve click-through, because they answer the searcher's specific worry right in the results.",

    "h: How to earn justifications",
    "n: Put the exact service phrases customers use on your website, in normal sentences on a real page.|Add matching entries to your profile services list.|Encourage reviews that describe specific jobs, by asking specific questions — covered in lesson 5.2.2.|Keep products, menus or services populated where relevant.|Post occasionally about specific services, covered in lesson 3.2.4.",
    "tip: Collect justifications as research|Search ten variations of your main keyword and write down every justification line you see across all competitors. That list is a ready-made content plan for your website and services."
  ],
  take: [
    "Filters can remove you from results entirely if the relevant fields or attributes are empty.",
    "Refinement chips reveal the subcategories Google recognises in your industry.",
    "Justification text shows which source Google read and matched — free diagnostic information.",
    "Justifications come from reviews, website text, services, products and posts.",
    "Collecting competitors' justification lines produces a ready-made content plan."
  ],
  self: [
    "I can explain how a filter can make a business disappear.",
    "I can name five sources a justification can come from.",
    "I can use competitor justifications to decide what to add to a website.",
    "I know why empty attributes are a silent loss."
  ],
  quiz: [
    { q: "A business does not appear when a searcher taps 'Open now'. What is the most likely cause?",
      a: ["It is suspended", "Its opening hours are missing or incomplete", "It has too few reviews", "Its website is slow"],
      c: 1,
      why: "The 'Open now' filter checks hours. Without complete hours, Google cannot confirm the business is open, so it is excluded." },
    { q: "What does a justification line under a listing tell you?",
      a: ["How much the business paid", "Which source Google read and matched to the search", "The business's rating", "The distance to the business"],
      c: 1,
      why: "Justifications name the evidence — a review phrase, website text, a service, a product. That reveals exactly what Google is reading." },
    { q: "What is the best use of competitors' justification lines?",
      a: ["Report them to Google", "Use them as a ready-made list of what to add to your site and services", "Ignore them, they are random", "Copy the competitor's whole website"],
      c: 1,
      why: "They show what Google considers relevant for those searches, which turns guessing about content into evidence-based planning." }
  ],
  ex: {
    title: "Harvest justifications across your market",
    time: "30 minutes",
    intro: "You will build a content plan directly from what Google is already quoting.",
    steps: [
      "List eight keyword variations for your practice business's main service.",
      "Search each one in a private window.",
      "Record every justification line that appears under any listing, along with which business it belonged to.",
      "Sort them by source type: review, website, service, product, post.",
      "Mark any phrase your practice business does not currently have anywhere.",
      "Turn the marked phrases into a short to-do list of website additions and service entries."
    ],
    deliver: "A justification harvest sorted by source type, with a to-do list of missing phrases."
  },
  chal: {
    title: "Audit filter survival",
    brief: "For your practice business, work through every filter and refinement chip that Google offers in its category and city. For each one, determine whether the business would survive it, and if not, exactly which field or attribute is missing. Then estimate roughly what share of searchers might use each filter, and prioritise the fixes accordingly. Present it as a table a client could act on without further explanation.",
    success: [
      "You have tested every filter and chip available in that category.",
      "Each failure is traced to a specific missing field or attribute.",
      "Fixes are prioritised by likely usage, not listed arbitrarily."
    ]
  }
},

"1.4.4": {
  t: "Personalisation, history and search settings",
  why: "What you see is not what your customers see. Knowing which factors personalise results stops you from making decisions on bad data.",
  body: [
    "h: Your results are partly about you",
    "p: Google adjusts results based on things it knows about the person searching. For local results, the main personalising factors are:",
    "n: **Location.** Your device position or a location you have set.|**Search history.** Businesses you have looked at or visited before.|**Your Google account.** Saved places, reviews you have written, places you have starred.|**Language and country settings.**|**Device type.** Mobile and desktop can differ.|**Whether you are signed in.**",

    "h: How much does personalisation change local results?",
    "p: Less than people fear, but enough to mislead you. The businesses you have visited or reviewed can appear higher for you than for a stranger. The biggest distorting factor is not personalisation at all — it is location, covered in lesson 1.4.2.",

    "warn: The owner's illusion|Business owners search their own business constantly, click their own listing, and often have it saved. Their results are the least reliable results in existence. When an owner says 'I always rank first', treat it as unverified.",

    "h: How to check rankings more honestly",
    "n: Use a private or incognito window, which ignores your history.|Sign out of your Google account.|Set the location deliberately rather than relying on where you happen to be.|Check on more than one device.|Best of all, use a grid tool that checks from defined points without a personal account.",
    "tip: The quickest honest check|Private window, signed out, location set to the point you care about. Thirty seconds, and far more trustworthy than a normal search.",

    "h: Setting a location in a browser",
    "p: Most desktop browsers let you override your location in developer tools, usually under a 'Sensors' or 'Location' panel where you can enter coordinates. Some people also use the search settings page to set a location. Both approaches work for spot checks, and neither replaces a proper grid tool for ongoing measurement.",

    "h: What personalisation does not do",
    "l: It does not permanently change your ranking for other people.|It does not mean rankings are random.|It does not explain large, sustained drops. Those have real causes.|It cannot be used to boost your business by searching for yourself repeatedly.",

    "h: Why this lesson protects you professionally",
    "p: A surprising amount of bad local SEO advice comes from people making decisions based on their own personalised, location-biased searches. If your evidence is unreliable, every conclusion built on it is unreliable too. Getting clean evidence is the first discipline of diagnosis, which is why Level 7 module 1 returns to it in depth."
  ],
  take: [
    "Local results are personalised by location, history, account, device and sign-in state.",
    "Location is by far the biggest distorting factor, not personalisation itself.",
    "A business owner's own searches are the least reliable evidence available.",
    "Check in a private window, signed out, with the location set deliberately.",
    "Personalisation never explains a large sustained drop — those have real causes."
  ],
  self: [
    "I can name at least five factors that personalise local results.",
    "I can explain why an owner's own search is unreliable evidence.",
    "I know how to run a cleaner ranking check.",
    "I know that personalisation cannot explain a large sustained drop."
  ],
  quiz: [
    { q: "Why are a business owner's own searches unreliable?",
      a: ["Owners use old browsers", "Their history, saved places and location all bias the result towards their own business", "Google blocks owners", "Owners search too fast"],
      c: 1,
      why: "Repeated visits, saved places and proximity to their own premises all push their listing up for them personally, which does not reflect what customers see." },
    { q: "Which factor distorts local ranking checks the most?",
      a: ["Browser choice", "Location of the person checking", "Screen size", "Time zone"],
      c: 1,
      why: "Because distance is central to local ranking, where you check from changes the result more than any personalisation factor." },
    { q: "A business drops from first to eighth for three weeks. Can personalisation explain this?",
      a: ["Yes, always", "No — sustained drops have real causes and must be investigated", "Only on mobile", "Only if signed in"],
      c: 1,
      why: "Personalisation produces small, individual variation. A large sustained drop indicates a genuine change in relevance, prominence, eligibility or the competitive set." }
  ],
  ex: {
    title: "Compare four ways of checking the same ranking",
    time: "25 minutes",
    intro: "You will see for yourself how much the checking method changes the answer.",
    steps: [
      "Search your practice business's main keyword while signed in, in a normal browser window. Record the result.",
      "Repeat in a private window while signed out. Record the result.",
      "Repeat on a phone. Record the result.",
      "Repeat in a private window with the location deliberately set to the business's own address. Record the result.",
      "Compare all four and note the largest difference.",
      "Write one sentence stating which method you will use from now on, and why."
    ],
    deliver: "Four recorded results from four methods, with a stated standard method for future checks."
  },
  chal: {
    title: "Write your evidence standard",
    brief: "Create a written standard for how ranking evidence will be collected for every business you work on. Specify the browser state, sign-in state, how location is set, which points are checked, how often, and how results are recorded. Then write a short paragraph explaining to a client why you will not act on their single search from home. This document should be reusable across every client you ever take on.",
    success: [
      "Your standard specifies browser state, sign-in, location method, points and frequency.",
      "It defines how results are recorded so they can be compared over time.",
      "It includes a client-facing paragraph that is polite and convincing."
    ]
  }
},

"1.4.5": {
  t: "Why two people at one address see different results",
  why: "Even with identical location, two searchers can see different businesses. Understanding the remaining causes completes your picture of local variability.",
  body: [
    "h: Same place, different answers",
    "p: You have already learned that location changes results. But two people standing together can still see different Local Packs. Here is why.",

    "h: The remaining causes",
    "n: **Account history.** One has reviewed or visited some of these businesses before.|**Device and app.** Maps app results can differ slightly from browser results.|**Live testing.** Google constantly runs experiments, showing different versions to different users.|**Timing.** Results update continuously. Two searches a minute apart can differ if something changed.|**Open-now status.** If a business closes at 5 pm, the result set at 4.59 differs from 5.01.|**Language and region settings.**|**Signal precision.** One phone has good GPS, the other is estimating from a network, so their assumed positions differ by a few hundred metres.",

    "term: Live testing|Google continuously trials changes on small groups of users. You may be in a test group and see a version others do not.",

    "h: The hours effect is bigger than people expect",
    "p: Many local results favour businesses that are currently open, and some searchers filter for it explicitly. A business with correct hours gains visibility at exactly the moments when competitors with wrong or missing hours lose it. This is one of the cheapest wins available, and it is covered fully in lesson 3.3.3.",
    "ex: The 6 pm shift|An urgent-care clinic listed hours ending at 6 pm. A competitor listed 'Open 24 hours' accurately. From 6 pm onwards, the first clinic effectively left the market every evening. Extending genuine evening hours and listing them correctly changed their evening call volume substantially.",

    "h: What this means for your reporting",
    "l: Never report a single observation as fact. Report trends across points and time.|Record the date and time of every check, because hours change the result set.|Expect small differences and do not chase them.|Investigate only sustained, repeated changes.",

    "warn: Do not diagnose from one screenshot|A client sends a screenshot showing a competitor above them. It may be a different time, a different device, a different account, or a live test. Ask for the time, the location and the device before drawing any conclusion.",

    "tip: Build a simple observation log|Date, time, location, device, signed-in state, keyword, result. Five columns. Keeping this log for a month makes you dramatically better at telling real changes from noise — and it is the raw material for the diagnostic work in Level 7."
  ],
  take: [
    "Two people at the same spot can see different results because of account history, device, live tests, timing, hours and signal precision.",
    "Google continuously runs experiments, so some users see different versions.",
    "Opening hours change the result set at specific times of day, which is a cheap and under-used advantage.",
    "Never diagnose from a single screenshot — ask for time, location and device first.",
    "Keep an observation log so you can separate real change from normal noise."
  ],
  self: [
    "I can name at least five reasons two people at one place see different results.",
    "I can explain how opening hours change who appears at different times.",
    "I know what information to ask for before acting on a client's screenshot.",
    "I keep or can design an observation log."
  ],
  quiz: [
    { q: "A competitor appears above you at 7 pm but below you at 2 pm. What is the most likely cause?",
      a: ["Google is unstable", "Opening hours — one of you is shown as closed in the evening", "Review manipulation", "A suspension"],
      c: 1,
      why: "Result sets shift around opening and closing times. A business shown as closed loses visibility at exactly those moments." },
    { q: "What should you ask for before acting on a client's screenshot?",
      a: ["Their budget", "The time, location, device and sign-in state", "Their domain age", "Their social followers"],
      c: 1,
      why: "Without those four details the screenshot cannot be interpreted, and acting on it risks changing a healthy profile for no reason." },
    { q: "What is 'live testing' in this context?",
      a: ["Testing your website speed", "Google trialling different result versions on small groups of users", "A paid Google service", "A type of review"],
      c: 1,
      why: "Google continuously experiments. Being in a test group is one reason two users can genuinely see different results at the same moment." }
  ],
  ex: {
    title: "Run a time-of-day test",
    time: "20 minutes spread across one day",
    intro: "You will observe the hours effect directly.",
    steps: [
      "Choose your practice business's main keyword.",
      "Check the Local Pack at three times: mid-morning, late afternoon, and after typical closing time.",
      "Use the same location, same device, private window, signed out each time.",
      "Record the three businesses shown at each check.",
      "Note which businesses appear or disappear between checks.",
      "Write one sentence on whether extending or correcting hours would create an opportunity."
    ],
    deliver: "Three timed observations with a written conclusion about the hours opportunity."
  },
  chal: {
    title: "Build and run an observation log for one week",
    brief: "Create a five-column observation log and fill it in twice a day for seven days for one keyword and one business. At the end of the week, analyse it: how much did position vary, what was the range, and can you identify any pattern by time of day? Then write a short statement about what size of change you would consider meaningful for this business, and what you would treat as noise. That threshold is a genuinely professional judgement most people never make explicit.",
    success: [
      "You have fourteen dated observations collected consistently.",
      "You have stated the observed range of variation.",
      "You have defined an explicit threshold separating meaningful change from noise."
    ]
  }
},

"1.4.6": {
  t: "Setting realistic expectations with clients and bosses",
  why: "Most local SEO relationships fail on expectations, not on work quality. This lesson gives you the language to set them correctly from day one.",
  body: [
    "h: Why expectations decide everything",
    "p: You can do excellent work and still lose the client, because they expected something different. You can do modest work and keep them for years, because they understood what was realistic. Expectations are not a soft skill here. They are the main risk.",

    "h: The five things to establish before you start",
    "n: **Where they will be measured.** Agree the grid points and the keywords now, in writing. Otherwise every random check becomes a debate.|**How long things take.** Category changes can move quickly. Reviews and links take months. Suspension recovery takes weeks with no guarantee.|**What is outside your control.** Distance. Competitor behaviour. Google's changes. Whether staff answer the phone.|**What success means in business terms.** Calls, bookings, revenue — not positions alone.|**What could go wrong.** Suspensions, spam competitors, algorithm updates. Naming these in advance turns them from disasters into anticipated events.",

    "h: Realistic timelines to quote",
    "table: Work ; Typical time to see effect ; Notes || Fixing a wrong primary category ; Days to a few weeks ; Sometimes fast and dramatic || Completing profile fields ; Days to weeks ; Small but reliable || Photo and hours improvements ; Weeks ; Affects choice more than position || New location pages on the website ; 4 to 12 weeks ; Needs indexing and maturity || Citation cleanup ; 4 to 12 weeks ; Aggregators propagate slowly || Review growth programme ; 3 to 12 months ; Compounds, does not spike || Local link building ; 3 to 9 months ; Slowest and most durable || Suspension reinstatement ; Days to several weeks ; Uncertain outcome",

    "warn: Never promise a position|Promising 'first in the Map Pack' is unprofessional and, because of the grid effect, close to meaningless. Promise process, effort, evidence and honest reporting. Let the results speak.",

    "h: The three sentences that prevent most conflict",
    "l: 'Your ranking is different in different places, so we will measure it as a map, not a number.'|'The fastest work takes weeks and the strongest work takes months. Here is what belongs in each.'|'Here is what I control, here is what I influence, and here is what neither of us controls.'",

    "h: Handling the 'my friend ranks first' conversation",
    "p: Clients compare themselves to businesses in different situations. Often the comparison business is closer to the city centre, older, or in a less competitive category. Do not dismiss the comparison — investigate it, then explain the specific structural difference. Clients accept structural reasons far better than vague ones.",

    "h: Reporting that builds trust",
    "n: Always show the same measurements the same way each month.|Report what you did, what changed, and what you will do next.|Report bad news first and plainly.|Translate into business terms: calls, direction requests, bookings.|Keep a dated log so you can show history when memory disagrees.",
    "tip: The single best habit|Send a short written summary after every significant change you make, including the date. When something moves three weeks later, you will be able to connect cause and effect — and so will the client.",

    "h: This applies to internal roles too",
    "p: If you work inside a business rather than an agency, everything above still applies. Your boss is the client. The same five items, the same timelines, the same honesty about what is outside your control."
  ],
  take: [
    "Most local SEO relationships fail on expectations, not on work quality.",
    "Agree measurement points, keywords, timelines, limits of control and the definition of success before starting.",
    "Category fixes can move in days, reviews and links take months, suspensions are uncertain.",
    "Never promise a specific position — promise process, evidence and honest reporting.",
    "Send a dated written summary after every significant change so cause and effect stay traceable."
  ],
  self: [
    "I can list the five things to establish before starting work.",
    "I can quote realistic timelines for at least five types of work.",
    "I can explain why promising a position is unprofessional.",
    "I have a habit, or a plan, for dated change logging."
  ],
  quiz: [
    { q: "Why should you never promise a specific Local Pack position?",
      a: ["It is illegal", "Position varies by location and is influenced by factors outside your control", "Google forbids all guarantees in writing", "Positions do not exist"],
      c: 1,
      why: "Because of the grid effect and competitor behaviour, a single guaranteed position is both unmeasurable and outside your control." },
    { q: "Which type of work typically takes the longest to show results?",
      a: ["Fixing a wrong primary category", "Completing profile fields", "Local link building", "Updating opening hours"],
      c: 2,
      why: "Links accumulate slowly and depend on other people. They are the slowest work and also the most durable advantage." },
    { q: "A client says a friend's business ranks first. What is the best response?",
      a: ["Dismiss the comparison", "Investigate it and explain the specific structural difference", "Promise to match them within a month", "Change the strategy immediately"],
      c: 1,
      why: "Comparisons usually hide a structural difference such as location, age or competition level. Explaining it specifically builds trust, while dismissing or over-promising destroys it." }
  ],
  ex: {
    title: "Write your expectations document",
    time: "40 minutes",
    intro: "You will produce a reusable document that will save you repeated arguments for the rest of your career.",
    steps: [
      "Write a section defining how ranking will be measured, including points, keywords and frequency.",
      "Write a timeline table for at least six types of work.",
      "Write a section listing what you control, what you influence and what neither party controls.",
      "Write a section defining success in business terms for your practice business specifically.",
      "Write a short risks section naming suspensions, spam competitors and algorithm changes.",
      "Read it aloud and remove every sentence a non-marketer would not understand."
    ],
    deliver: "A reusable expectations document covering measurement, timelines, control, success and risks."
  },
  chal: {
    title: "Rehearse the hardest conversation",
    brief: "Write out, word for word, how you would tell a client that after three months of good work their rankings have not improved because a well-funded competitor entered the market and two of your planned tactics were blocked by their own internal delays. Be honest, take appropriate responsibility, avoid blame, and finish with a clear plan. Then read it back and check whether you buried the bad news or led with it. Leading with it is the professional choice.",
    success: [
      "The bad news appears in the first two sentences, not the last paragraph.",
      "You have distinguished honestly between external causes and your own responsibility.",
      "It ends with a specific plan, not a vague reassurance."
    ]
  }
}

});
