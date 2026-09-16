/* Level 1 · Module 2 — The Three Ranking Forces */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"1.2.1": {
  t: "Relevance, Distance and Prominence explained simply",
  why: "Google itself says these three things decide local rankings. Every technique in this course is really just one of these three in disguise.",
  body: [
    "h: The official answer",
    "p: Google publishes very little about ranking, but for local results it has stated clearly that three factors decide the order: **Relevance, Distance and Prominence**. This is unusually direct for Google, and it is the backbone of the whole subject.",

    "h: Relevance — do you match what was asked?",
    "term: Relevance|How well your business matches what the person searched for.",
    "p: If someone searches 'emergency plumber', a general handyman is less relevant than a plumbing company that advertises emergency callouts. Relevance comes from your category, your services, the words on your website, and the words in your reviews.",
    "p: **You control relevance more directly than anything else.** This is why Level 3 and Level 4 exist.",

    "h: Distance — how far are you from them?",
    "term: Distance|How far your business is from the searcher, or from the place they named in the search.",
    "p: This is the factor you control least. You cannot move a dental clinic. But you can influence how far your visibility stretches, and Level 7 module 2 is dedicated entirely to that problem.",

    "h: Prominence — how well known are you?",
    "term: Prominence|How well known and well regarded your business appears to be, based on evidence across the whole web.",
    "p: Prominence comes from reviews, links from other websites, mentions in news and directories, and your general footprint online. A famous local restaurant with 2,000 reviews and newspaper coverage is more prominent than an identical restaurant nobody has written about.",
    "p: Prominence is the slowest to build and the hardest for competitors to copy. It is where long-term advantage lives.",

    "h: How they work together",
    "p: Do not think of them as three separate scores that get added up. Think of them as three filters that interact.",
    "n: Google first works out roughly which businesses could serve this search at all — the right kind of business, close enough to be useful.|Then it ranks those businesses by how well they match the words and how well known they are.|Distance keeps pulling the list back towards the searcher, which is why a very prominent business far away still loses to a decent one nearby.",

    "ex: The same three forces in a real result|Search 'coffee shop' in a city centre. The winner is rarely the most famous coffee brand in the country. It is usually a shop 200 metres away with 400 good reviews. Distance narrowed the field, prominence picked the winner inside that field, relevance made sure they were all actually coffee shops.",

    "h: A simple way to remember it",
    "table: Force ; The question it answers ; Your control || Relevance ; Are you the right kind of business for this search? ; High — you set categories, services and content || Distance ; Are you close enough to be useful? ; Low — but you can widen your reach || Prominence ; Are you a business people trust and talk about? ; Medium — slow to build, hard to lose",

    "warn: The trap of ignoring what you cannot control|Beginners often obsess over distance because it is the most frustrating. Experts focus almost entirely on relevance and prominence, because those are where the wins are. When you feel stuck, ask: am I fighting physics, or am I fighting something I can change?",

    "h: Where the rest of the course maps onto this",
    "l: Level 2 and 3 — mostly relevance, with the eligibility rules that let you exist at all.|Level 4 — relevance through your website.|Level 5 and 6 — almost entirely prominence.|Level 7 — diagnosing which of the three is failing.|Levels 8 to 10 — protecting and scaling all three.",
    "tip: Use these three words with clients|Instead of a long technical explanation, say: 'You are relevant enough and close enough, but you are not well known enough yet. That is what we are fixing.' Clients understand this immediately."
  ],
  take: [
    "Google states that Relevance, Distance and Prominence decide local rankings.",
    "Relevance is how well you match the search. You control this the most.",
    "Distance is how far you are from the searcher. You control this the least.",
    "Prominence is how well known you are across the whole web. It is slow to build and hard for competitors to copy.",
    "Experts focus on relevance and prominence, because fighting distance is usually fighting physics."
  ],
  self: [
    "I can name the three ranking forces without looking.",
    "I can give a one-sentence definition of each in plain language.",
    "I can say which one I control most and which least.",
    "I can explain a ranking result using these three words."
  ],
  quiz: [
    { q: "Which of the three forces do you control the least?",
      a: ["Relevance", "Distance", "Prominence", "All three equally"],
      c: 1,
      why: "You cannot move a building. You can widen visibility somewhat, but distance is fundamentally physical and the least controllable." },
    { q: "A famous national restaurant chain ranks below a small independent cafe for 'coffee near me'. What best explains this?",
      a: ["The chain is being penalised", "Distance pulled the result towards the nearby cafe", "Prominence does not matter in local search", "The chain has the wrong category"],
      c: 1,
      why: "Prominence helps, but distance keeps narrowing results towards what is actually useful to the searcher. A famous business far away loses to a decent one nearby." },
    { q: "Which force is built mainly from reviews, links and mentions across the web?",
      a: ["Relevance", "Distance", "Prominence", "Intent"],
      c: 2,
      why: "Prominence is Google's judgement of how well known and well regarded you are, drawn from evidence across the whole web, not just your own properties." }
  ],
  ex: {
    title: "Score the top three competitors on all three forces",
    time: "25 minutes",
    intro: "You will practise seeing a real result page in terms of the three forces.",
    steps: [
      "Search your practice business's main keyword in a private window.",
      "For each of the three businesses in the Local Pack, note the category shown and how well it matches the search. Score relevance out of 5.",
      "Note roughly how far each is from the map centre. Score distance out of 5, where 5 means very close.",
      "Note each one's review count and star rating. Score prominence out of 5.",
      "Do the same for your practice business, even if it is not in the top three.",
      "Compare the scores and write one sentence identifying which force is your practice business's weakest."
    ],
    deliver: "A small table scoring four businesses on relevance, distance and prominence, with your weakest force identified."
  },
  chal: {
    title: "Find a result the three forces do not obviously explain",
    brief: "Search several local terms until you find a Local Pack result that seems strange — a business that is further away, has fewer reviews and seems less relevant, yet still outranks better-looking competitors. Investigate it. Look at its website, its category, its review text, its photos. Write down your best theory for why Google ranks it there. Keep this note. You will revisit it after Level 7 and you will almost certainly have a better answer then.",
    success: [
      "You have found a genuinely surprising result and documented it with a screenshot or notes.",
      "You have checked its category, website and reviews before forming a theory.",
      "You have written a dated theory you are willing to be wrong about."
    ]
  }
},

"1.2.2": {
  t: "Relevance: matching you to the words people type",
  why: "Relevance is the force you control most directly, which makes it the fastest place to win. This lesson shows exactly where Google reads relevance from.",
  body: [
    "h: What relevance really is",
    "p: Relevance answers one question: **when this person typed these words, are you the kind of business they meant?** Google builds that judgement from several sources, and each one is a place you can work.",

    "h: The seven sources of local relevance",
    "n: **Your primary category.** The single strongest relevance signal you own. Choosing 'Dentist' versus 'Cosmetic Dentist' genuinely changes which searches you appear for.|**Your secondary categories.** Additional categories that widen the set of searches you can match.|**Your services and service items.** Lists of what you do, written inside your profile.|**Your business name.** Google reads it, but you are not allowed to stuff keywords into it, and doing so risks suspension.|**Your website content.** Especially the page your profile links to. Google reads it and even quotes it in justifications.|**Your reviews.** The words customers use describe what you actually do. Reviews mentioning 'emergency callout' help you match that search.|**Your photos, posts, products and Q&A.** Weaker, but they add context.",

    "warn: Weight is not equal|People often add ten secondary categories and wonder why nothing changed. The primary category carries dramatically more weight than everything else on this list. If your primary category is wrong, nothing else you do will fix it. Lesson 3.1.1 covers this in full.",

    "h: Relevance is about categories first, keywords second",
    "p: Normal SEO trains people to think in keywords. Local search thinks in **categories and entities**. Google is not mainly matching the string of letters 'dentist' to your page. It has decided your business belongs to the category Dentist, and that the query 'dentist' maps to that category.",
    "term: Entity|A real thing Google knows about — a business, a person, a place. Google stores facts about it rather than just words on a page.",
    "p: This is why a page stuffed with the word 'dentist' 40 times does nothing, while setting the correct primary category can move you immediately.",

    "h: Matching the modifier, not just the main word",
    "p: The hard part of relevance is not ranking for 'dentist'. It is ranking for 'cosmetic dentist', 'paediatric dentist', 'emergency dentist'. These extra words are called **modifiers**, and they are where the money usually is.",
    "term: Modifier|An extra word that narrows a search, such as 'emergency', 'cheap', '24 hour', 'cosmetic', 'best'.",
    "p: Modifiers are matched from a different mix of sources: your secondary categories, your services list, your website subpages, and the wording of your reviews. Level 7 module 5 is a whole module on failures at this level.",

    "h: The relevance triangle",
    "p: Three things must agree for strong relevance. If they disagree, Google becomes uncertain and you rank below businesses where all three agree.",
    "l: **Your profile says** you are a cosmetic dentist.|**Your website says** you are a cosmetic dentist, with a real page about it.|**Your reviews say** customers came to you for cosmetic work.",
    "ex: A mismatch in practice|A clinic sets 'Cosmetic Dentist' as its primary category, but its website only has a generic 'Our Services' page mentioning cosmetic work in one line, and every review talks about cleanings and fillings. Google has one weak signal and two contradicting ones. It ranks the clinic for general dentistry and not for cosmetic work. The profile alone could not carry it.",

    "h: What does NOT create relevance",
    "l: Putting keywords in your business name that are not part of your real name. This breaks the rules and risks suspension.|Repeating a keyword many times on a page. Modern search does not reward this.|Adding city names in a long list at the bottom of your page. This is obvious and ignored at best.|Buying reviews that mention keywords. This is against the rules and detectable.",
    "tip: The fastest relevance win for most businesses|Check the primary category, fix it if wrong, then build one genuinely good page on your website for each main service. Those two actions outperform months of small tweaks."
  ],
  take: [
    "Relevance comes from categories, services, business name, website content, reviews and profile content.",
    "The primary category carries far more weight than anything else on that list.",
    "Local search thinks in categories and entities, not in repeated keywords.",
    "Modifier words like 'emergency' or 'cosmetic' are matched from secondary categories, services, subpages and review wording.",
    "Profile, website and reviews should all agree. Disagreement makes Google uncertain and costs you rankings."
  ],
  self: [
    "I can list at least five sources Google reads relevance from.",
    "I can explain why the primary category matters more than the others.",
    "I can explain what a modifier is and where modifier relevance comes from.",
    "I can name three things that do not create relevance despite being commonly attempted."
  ],
  quiz: [
    { q: "Which single setting carries the most relevance weight?",
      a: ["The business description", "The primary category", "The number of photos", "The business name length"],
      c: 1,
      why: "The primary category is the strongest relevance signal a business controls. Getting it wrong limits every other effort." },
    { q: "A clinic wants to rank for 'cosmetic dentist' but its website has no page about cosmetic dentistry and no reviews mention it. What is the core problem?",
      a: ["It needs more photos", "Its relevance signals do not agree with each other", "It needs a shorter business name", "It needs to post more often"],
      c: 1,
      why: "Profile, website and reviews should all support the same claim. When only one weak signal supports it, Google ranks the business for what the evidence actually shows." },
    { q: "Which of these is a rule-breaking attempt to create relevance?",
      a: ["Adding a service page to your website", "Adding accurate secondary categories", "Adding keywords to your business name that are not part of the real name", "Responding to reviews"],
      c: 2,
      why: "Google's name rule requires your real-world business name. Adding keywords is one of the most commonly reported and most commonly penalised violations." }
  ],
  ex: {
    title: "Build a relevance map for your practice business",
    time: "30 minutes",
    intro: "You will check whether all three points of the relevance triangle agree.",
    steps: [
      "Write down your practice business's current primary category exactly as shown on its profile.",
      "List its secondary categories.",
      "Write the top three services it wants to be found for.",
      "For each of those three services, check whether the website has a dedicated page. Mark yes or no.",
      "Read the ten most recent reviews and note which services customers actually mention.",
      "Draw the triangle: profile says X, website says Y, reviews say Z. Circle any place where the three disagree."
    ],
    deliver: "A relevance map showing profile, website and review signals side by side, with disagreements circled."
  },
  chal: {
    title: "Reverse-engineer a competitor's relevance",
    brief: "Take the business ranking first for a competitive modifier keyword in your industry, such as 'emergency X' or 'cosmetic X'. Work out exactly where its relevance comes from. Check its primary category, its visible services, whether its website has a dedicated page for that modifier, and whether its reviews use that wording. Then write a short report on which of those sources you believe is doing the heavy lifting, and what your practice business would need to match it.",
    success: [
      "You have documented the competitor's category, services, page structure and review wording.",
      "You have made a judgement about which signal matters most for that specific keyword.",
      "You have produced a concrete list of what your practice business would need to change."
    ]
  }
},

"1.2.3": {
  t: "Distance: how Google measures 'near me'",
  why: "Distance frustrates more people than any other part of local SEO. Understanding exactly how it is measured turns frustration into strategy.",
  body: [
    "h: What Google is actually measuring",
    "p: Google measures the distance between **two points**: a centre point for the search, and a point for your business. Almost every distance question comes down to what those two points are.",

    "h: The searcher's point",
    "p: For an implicit search, the centre point is the searcher's estimated position. Google gets this from GPS on a phone, from network information, or from a saved location in the browser or account. It is usually accurate to within a street or two on mobile, and often much less accurate on desktop.",
    "p: For an explicit search that names a place, the centre point becomes the **centroid** of that place.",
    "term: Centroid|The single point Google treats as the centre of a named area, like a city or a suburb. Roughly, the middle of that place.",

    "h: Your business's point",
    "p: For a business with a physical address, the point is that address, geocoded to latitude and longitude.",
    "term: Geocode|Turning a written address into map coordinates. Sometimes the coordinates land in the wrong spot, which quietly damages rankings.",
    "p: For a service area business with a hidden address, Google still holds your real address behind the scenes and still measures from it. **Hiding your address does not remove distance from the equation.** This is one of the most important facts in local SEO and it surprises almost everyone. We cover it properly in lesson 3.3.2.",

    "h: Distance is not a simple straight line",
    "p: It behaves more like a curve with a cliff. Within your immediate area you rank strongly. As distance grows, your ranking falls slowly at first, then very sharply, then you vanish. Where that cliff sits depends on:",
    "l: **Density of competitors.** In a city centre with 40 dentists in two square kilometres, your visible radius might be 1 km. In a rural area with three dentists in the county, it could be 30 km.|**The category.** People will travel far for a specialist surgeon and not at all for a coffee.|**Your prominence.** A very well known business holds its position further out than an unknown one. This is the key strategic lever and the subject of lesson 1.2.5.|**Whether the search was implicit or explicit.**",

    "table: Situation ; Typical visible radius ; Why || Dense city centre restaurant ; A few hundred metres ; Huge competition nearby || Suburban dentist ; 2 to 5 km ; Moderate competition, people travel a little || Rural plumber ; 20 to 50 km ; Few alternatives exist || Specialist surgeon ; City-wide or regional ; People will travel for rare expertise || Emergency service ; Wider than normal ; Urgency beats preference",

    "h: The grid effect",
    "p: Because distance is measured from the searcher, your ranking is genuinely different at every point on the map. You are not 'ranked 3rd'. You are ranked 1st here, 4th two streets away, and invisible across town. This is why professional local SEO measures rankings on a **grid of points**, which we cover fully in Level 9 module 1.",

    "warn: Never trust a single rank number in local|If a tool tells you 'you rank 4th for plumber', ask: measured from where? A single number is almost meaningless in local search. A grid is the only honest picture.",

    "h: Things that do NOT change distance",
    "l: Adding more cities to your service area list. This does not move your business.|Writing city names all over your website.|Creating a page for every town nearby. Useful for organic results, but it does not change the distance measurement in the Local Pack.|Using a virtual office address. This does change the point, but it breaks Google's rules and gets profiles suspended. Level 2 covers why.",
    "tip: The honest framing|You cannot beat distance. You can only make yourself so relevant and so prominent that Google is willing to show you a little further out than it otherwise would. That sentence is the entire strategy for distance problems."
  ],
  take: [
    "Distance is measured between a search centre point and your business point.",
    "For implicit searches the centre is the searcher. For explicit searches it is the centroid of the named place.",
    "Hiding your address as a service area business does not remove distance from the equation.",
    "Your visible radius depends on competitor density, category, prominence and search type.",
    "Because distance varies by point, a single rank number is close to meaningless — you need a grid."
  ],
  self: [
    "I can explain what a centroid is and when it is used.",
    "I know that service area businesses are still measured from their real address.",
    "I can estimate why one business type has a much wider visible radius than another.",
    "I understand why local rankings must be measured on a grid rather than a single point."
  ],
  quiz: [
    { q: "A service area business hides its address. How does this affect distance measurement?",
      a: ["Distance is no longer used for that business", "Google still measures from the real address behind the scenes", "The business ranks equally everywhere in its service area", "The business ranks from the centre of its largest service city"],
      c: 1,
      why: "Hiding the address only changes what the public sees. Google retains the real address and continues to measure distance from it." },
    { q: "Why does a rural plumber have a much larger visible radius than a city-centre cafe?",
      a: ["Rural businesses get a Google bonus", "There are far fewer competing alternatives nearby, so Google must reach further to fill results", "Rural areas have better internet", "Cafes are penalised"],
      c: 1,
      why: "Google shows the most useful businesses available. Where there are few options, it must extend the radius. Where there are forty options within a kilometre, it does not need to." },
    { q: "Which of these genuinely changes the distance between your business and a searcher?",
      a: ["Adding more cities to your service area settings", "Listing city names on your website", "Physically operating from a different real location", "Writing 'near me' in your page title"],
      c: 2,
      why: "Only the actual physical point matters. Service area lists and page text do not move your business on the map." }
  ],
  ex: {
    title: "Map your practice business's visible radius by hand",
    time: "35 minutes",
    intro: "You will find, roughly, where your practice business stops being visible.",
    steps: [
      "Open Google Maps and find five locations: your business, then points roughly 1 km, 3 km, 6 km and 12 km away in the direction of your main customer area.",
      "For each point, use a private browser window and a method of simulating that location (many browsers allow setting a location in developer tools under 'Sensors'), or physically check from those places if practical.",
      "Search your main keyword from each point and record your position in the Local Pack or local finder.",
      "Plot the five numbers. Note where the sharp drop happens.",
      "Write down the approximate radius where you are still in the top three, and where you disappear entirely."
    ],
    deliver: "A five-point distance profile showing where your visibility drops off sharply."
  },
  chal: {
    title: "Explain the distance cliff to a sceptical client",
    brief: "A business owner insists they should rank across the entire metropolitan area because 'we serve the whole city'. Write a one-page explanation, in simple language, of why Google does not work that way, what actually determines their visible radius, and what realistic options they have. Do not just say no — give them three legitimate strategies they could pursue. Keep it under 400 words and free of jargon.",
    success: [
      "Your explanation covers why Google narrows by distance and that this benefits searchers.",
      "You have given three legitimate strategies rather than only refusing the request.",
      "The whole piece is readable by someone with no marketing background."
    ]
  }
},

"1.2.4": {
  t: "Prominence: how Google decides who is well known",
  why: "Prominence is the slowest force to build and the hardest to take away. It is where durable competitive advantage lives.",
  body: [
    "h: What prominence means",
    "p: Prominence is Google's estimate of **how well known and well regarded a business is in the real world**, judged from evidence across the whole web. It is the closest thing local search has to 'reputation as a number'.",
    "p: Google's own wording mentions information from across the web such as links, articles and directories, and it says that review count and score factor into local ranking.",

    "h: The main ingredients",
    "n: **Reviews** — count, average rating, how recently they arrived, and how steadily they arrive. Covered in Level 5.|**Links from other websites** — especially local and industry sites. Covered in Level 6 module 3.|**Mentions without links** — being named in news articles, blogs, local guides and community pages. Covered in lesson 6.4.1.|**Directory and citation presence** — being consistently listed on the sites that matter. Covered in Level 6 modules 1 and 2.|**Your website's own authority** — how strong your site is in ordinary web search terms.|**Real-world signals** — how often people search for you by name, how much Maps engagement you get, offline fame.",

    "h: Why prominence is the great equaliser",
    "p: Distance is fixed. Relevance can be copied by any competitor in an afternoon — they can change a category too. **Prominence cannot be copied quickly.** A competitor cannot conjure 300 genuine reviews and 40 local links overnight. That is precisely why it is worth investing in.",
    "ex: The two-year gap|Two identical clinics open in the same year. One spends two years systematically asking every happy patient for a review and sponsoring local sports teams. The other does nothing. Year three, the second clinic hires an expert who fixes every setting perfectly in one week — and still cannot catch up, because two years of accumulated prominence is not a settings problem.",

    "h: Prominence is relative, not absolute",
    "p: There is no score you must reach. You need to be more prominent than the businesses you are competing against **in that specific area**. Thirty reviews might dominate a rural market and be invisible in Manhattan.",
    "tip: Always benchmark, never guess|Before setting a review target, look at the businesses currently ranking 1, 2 and 3 for your keyword in your area. Your target is to exceed them, not to hit a number from a blog post.",

    "h: How prominence interacts with distance",
    "p: This is the most valuable idea in Level 1. Higher prominence effectively **extends your visible radius**. Google is willing to show a well-known business a bit further from the searcher than an unknown one, because it judges that the searcher would still be satisfied.",
    "p: So when a business says 'I want to rank further out', the honest answer is almost always: build prominence. That is the lever. We return to this in lesson 1.2.5 and again in Level 7 module 2.",

    "h: What prominence is NOT",
    "l: It is not the number of social media followers. Social signals are not a direct local ranking factor.|It is not how much you spend on Google Ads. Ads do not improve organic or local rankings.|It is not how old your domain is on its own.|It is not how many low-quality directory listings you can buy. Volume of junk is not prominence, and can create cleanup work later.",

    "warn: The slow-burn problem|Prominence work rarely shows results in the first month. This is why so many businesses abandon it and stay stuck. If you are advising someone, set the expectation at the start: reviews and links compound over quarters, not weeks."
  ],
  take: [
    "Prominence is Google's estimate of how well known and well regarded a business is, based on evidence across the web.",
    "Its main ingredients are reviews, links, unlinked mentions, directory presence, website authority and real-world signals.",
    "It is slow to build, which is exactly why it creates durable advantage competitors cannot copy quickly.",
    "It is relative to your local competitors, not an absolute score.",
    "Higher prominence effectively extends how far from the searcher Google is willing to show you."
  ],
  self: [
    "I can list at least five ingredients of prominence.",
    "I can explain why prominence creates more durable advantage than relevance.",
    "I can explain the link between prominence and visible radius.",
    "I know that social followers and ad spend are not prominence."
  ],
  quiz: [
    { q: "Why is prominence considered the most durable of the three forces?",
      a: ["Because Google weights it highest", "Because competitors cannot copy accumulated reviews, links and mentions quickly", "Because it never changes", "Because it is easier to build than relevance"],
      c: 1,
      why: "A competitor can change categories in minutes but cannot manufacture years of genuine reviews and local links. That accumulation is what creates a defensible lead." },
    { q: "A business wants to be visible further from its address. What is usually the correct strategic answer?",
      a: ["Add more cities to the service area list", "Build prominence, which extends how far Google will show them", "Put city names in the business name", "Open more Google profiles"],
      c: 1,
      why: "Prominence is the lever that stretches visible radius. Service area lists and name changes do not move the physical point or the distance calculation." },
    { q: "Which of these is NOT a prominence signal?",
      a: ["Review count and rating", "Links from local news sites", "Number of Instagram followers", "Mentions in local community websites"],
      c: 2,
      why: "Social follower counts are not a direct local ranking factor. Social activity can lead to mentions and links, which do count, but the follower number itself does not." }
  ],
  ex: {
    title: "Run a prominence benchmark",
    time: "30 minutes",
    intro: "You will measure the prominence gap between your practice business and the current top three.",
    steps: [
      "List the three businesses ranking above your practice business for its main keyword.",
      "For each, record review count and average rating.",
      "For each, search their business name in quotation marks on Google and note roughly how many other websites mention them in the first two pages.",
      "Note whether each appears in local news, community sites, or industry directories.",
      "Record the same four measures for your practice business.",
      "Write down the single biggest gap you found, expressed as a number, for example 'we are 180 reviews behind the leader'."
    ],
    deliver: "A prominence benchmark table comparing four businesses on reviews, rating, mentions and coverage, with the biggest gap stated."
  },
  chal: {
    title: "Estimate how long the gap will take to close",
    brief: "Using your benchmark, calculate a realistic timeline to close the largest prominence gap. If you are 180 reviews behind and can realistically earn 15 genuine reviews a month, that is twelve months — but the competitor is also gaining reviews, so model their growth too. Produce a simple month-by-month projection showing when you would actually overtake them, and what monthly review rate would be needed to overtake them within six months instead.",
    success: [
      "Your projection accounts for the competitor continuing to grow, not standing still.",
      "You have stated a realistic monthly rate and the date of overtake.",
      "You have calculated the alternative rate needed for a six-month overtake and judged whether it is achievable."
    ]
  }
},

"1.2.5": {
  t: "How the three forces trade against each other",
  why: "The three forces are not independent. Strength in one buys you slack in another, and knowing the exchange rate is what separates experts from checklist followers.",
  body: [
    "h: The core idea",
    "p: Google is not adding up three scores. It is trying to show the most useful businesses. That means **a weakness in one force can be compensated by strength in another, up to a limit.**",
    "p: Learn the trades and you can answer almost any 'why do they rank and we do not' question.",

    "h: Trade 1 — Prominence buys distance",
    "p: The most important trade. A very well-known business stays visible further from the searcher than an unknown one. This is why the famous restaurant appears when you are three suburbs away, and the equally good unknown one does not.",
    "p: **Practical use:** when a business wants wider coverage, the lever is reviews, links and mentions — not settings.",

    "h: Trade 2 — Distance buys relevance slack",
    "p: If you are extremely close to the searcher, Google will show you even when your relevance is only approximate. This is why a general 'Dentist' two streets away can appear for 'cosmetic dentist' when no closer specialist exists.",
    "p: **Practical use:** for businesses in dense residential areas, proximity alone can carry a lot. For businesses far out, relevance must be precise.",

    "h: Trade 3 — Relevance cannot buy much distance",
    "p: This is the asymmetry that frustrates people. Being perfectly relevant does not make Google show you across the city. Relevance decides your place **within** the set of businesses close enough to be considered, more than it decides whether you enter that set.",
    "warn: The most common false hope|'If I make my website perfect for this keyword, I will rank across the whole city.' No. Perfect relevance with weak prominence gives you a strong position in a small radius. That is still valuable, but it is not city-wide coverage.",

    "h: Trade 4 — Prominence cannot rescue wrong relevance",
    "p: A famous plumbing company with 2,000 reviews will not rank for 'electrician' no matter how prominent it is. Relevance acts more like a gate: if you fail it, prominence does not help. This is why a wrong primary category is so damaging, and why lesson 7.3.1 exists.",

    "h: A simple mental model",
    "table: Your situation ; What usually happens ; What to do || Close, relevant, unknown ; Ranks well nearby, invisible further out ; Build prominence to stretch the radius || Far, relevant, prominent ; Ranks across a wide area ; Maintain, defend, and refine modifiers || Close, prominent, wrong category ; Ranks for the wrong searches ; Fix relevance first — nothing else matters || Far, irrelevant, prominent ; Barely ranks locally at all ; Rebuild relevance, then reassess || Close, prominent, relevant ; Dominates ; Defend against spam and complacency",

    "ex: Reading a real result with trades|You search 'emergency electrician'. Result 1 is 300 metres away with 80 reviews. Result 2 is 4 km away with 900 reviews and a dedicated emergency page. Result 3 is 1 km away with 200 reviews. You have just watched all three trades happen at once: result 1 won on distance, result 2 bought distance with prominence and precise relevance, result 3 balanced both.",

    "h: How to use this in diagnosis",
    "p: When a business is not ranking, do not ask 'what is missing?'. Ask **'which force are we losing on, and what could compensate?'** Then check whether the compensating force is realistically buildable. If the answer is 'we would need 500 reviews to overcome being 8 km out', that is a strategic conversation about a second location, not an SEO task.",
    "tip: The exchange-rate question|For every local SEO problem, ask: what would it take, in the force I can build, to compensate for the force I cannot change? If the answer is absurd, the honest advice is to change the business, not the settings."
  ],
  take: [
    "The forces trade against each other. Strength in one compensates for weakness in another, up to a limit.",
    "Prominence buys distance — this is the single most useful trade in local SEO.",
    "Being very close buys some relevance slack, especially where no specialist is nearby.",
    "Relevance cannot buy much distance, and prominence cannot rescue a wrong category.",
    "Diagnosis means asking which force you are losing on and whether the compensating force is realistically buildable."
  ],
  self: [
    "I can state the four trades in my own words.",
    "I can explain why a perfect website does not produce city-wide local rankings.",
    "I can explain why a wrong primary category cannot be compensated for by reviews.",
    "I can look at a Local Pack and describe which trade each result represents."
  ],
  quiz: [
    { q: "Which trade is most useful when a business wants to be visible further from its address?",
      a: ["Relevance buys distance", "Prominence buys distance", "Distance buys prominence", "Relevance buys prominence"],
      c: 1,
      why: "Google is willing to show a well-known business further out because searchers are still likely to be satisfied. Building reviews, links and mentions is the practical lever." },
    { q: "A business with 2,000 reviews sets its primary category incorrectly. What happens?",
      a: ["Prominence compensates and it ranks fine", "It ranks for the wrong searches, because relevance acts as a gate", "Google automatically corrects the category", "Nothing changes"],
      c: 1,
      why: "Relevance is closer to a gate than a score. Failing it means prominence has nothing to amplify, because you are not in the considered set for that query." },
    { q: "A business is 8 km from the searcher in a dense city and asks how to rank there. What is the most honest assessment?",
      a: ["Add that area to the service area settings", "It would need a very large prominence advantage, so a second location may be the real answer", "Write a page about that area", "Change the business name to include that area"],
      c: 1,
      why: "In a dense market, 8 km is far beyond the usual visible radius. The exchange rate required is often unrealistic, which makes it a business decision rather than an SEO task." }
  ],
  ex: {
    title: "Classify five competitors by their winning trade",
    time: "25 minutes",
    intro: "You will practise reading a results page as a set of trades rather than a list.",
    steps: [
      "Open the local finder for your main keyword and list the first five businesses.",
      "For each, record approximate distance from the map centre, review count and rating, and how precisely their category matches the search.",
      "For each, write one sentence naming the trade that explains its position, for example 'won on distance despite low reviews'.",
      "Identify which of the five is the most vulnerable, meaning its position depends on a force that could be overtaken.",
      "Write one sentence on how your practice business could realistically overtake that specific competitor."
    ],
    deliver: "Five competitors, each labelled with the trade that explains their ranking, plus one identified overtaking opportunity."
  },
  chal: {
    title: "Calculate an exchange rate",
    brief: "Pick a competitor who ranks above your practice business and is further from the map centre. Work out what they have that compensates for their distance disadvantage — reviews, links, category precision, website strength. Then estimate, as specifically as you can, what your practice business would need to achieve the same effect in the opposite direction. Present it as a concrete statement, such as: 'To be visible 3 km further out, we would need roughly to double our review count and earn 10 local links, based on what competitor X has.' State your confidence level honestly.",
    success: [
      "You have identified the specific compensating strengths of a real competitor.",
      "You have expressed the requirement as concrete numbers, not vague advice.",
      "You have stated how confident you are and what would make you more confident."
    ]
  }
},

"1.2.6": {
  t: "The local ranking factors that actually move results",
  why: "There are hundreds of claimed ranking factors. Only a handful change anything. This lesson gives you the short list so you stop wasting time on the rest.",
  body: [
    "h: Why factor lists are dangerous",
    "p: Every year, surveys ask local SEO professionals to rank local search factors. These are useful, but they are **opinions of practitioners, not Google's actual weights**. Treat them as a map drawn by experienced travellers, not as the territory itself.",
    "p: The bigger danger is that long lists make everything look equally important. In reality a small number of things do most of the work.",

    "h: The short list that genuinely moves the Local Pack",
    "n: **Primary category correctness.** Nothing else comes close for immediate effect. Level 3.|**Proximity to the searcher.** Unchangeable, but it explains most results you will ever see. Level 1 and 7.|**Review count and rating relative to local competitors.** Level 5.|**Business name, only in the sense of being legitimate and not suspended.** Level 2.|**Website relevance and authority for the query.** Level 4 and 6.|**Consistency and completeness of core business data.** Level 2 and 6.|**Local links and real-world mentions.** Level 6.|**Engagement with your profile: clicks, calls, direction requests.** Level 8 and 9.",

    "h: The medium list — real but smaller",
    "l: Secondary categories, which widen reach but rarely transform it.|Services and service items, which help with modifier searches.|Photos and their freshness, which affect user choice more than ranking.|Business description, which is weak for ranking and useful for conversion.|Google Posts, which mainly affect engagement, not ranking.|Q&A content, which is weak but occasionally visible.",

    "h: The long list — usually not worth your time",
    "l: The number of words in your description.|Posting every single day.|Adding dozens of low-quality directory listings.|Social media follower counts.|Keyword density on your pages.|Buying links from unrelated websites.|'Near me' keyword stuffing.|Obsessing over Domain Authority as a single number.",
    "term: Domain Authority|A score invented by third-party SEO tools to estimate how strong a website is. Google does not use it. It is a useful comparison tool, not a target.",

    "warn: The 80/20 of local SEO|For most struggling businesses, the problem is one of four things: wrong primary category, too few reviews, a weak or missing website page for the service, or an eligibility or suspension problem. Check those four before anything else. This single habit will make you faster than most people in this field.",

    "h: Why the same factor has different weight for different businesses",
    "p: Weights are not fixed. They shift by category and by market.",
    "table: Business type ; What matters most ; Why || Restaurants ; Reviews, photos, proximity ; Choice is emotional and immediate || Emergency services ; Proximity, hours, call answering ; Urgency dominates || Legal and medical ; Website authority, reviews, specificity ; High-stakes, researched decisions || Retail shops ; Proximity, hours, product data ; Convenience dominates || Home services ; Reviews, service area, links ; Trust plus reach both matter",

    "h: How to think about factors going forward",
    "p: Do not memorise lists. Instead, for any business, ask the three-force question: is our problem relevance, distance or prominence? Then ask which specific lever inside that force is weakest. That method survives every algorithm change, while factor lists go out of date every year.",
    "tip: Your default first five checks|1. Is the primary category right? 2. Is the profile verified and unsuspended? 3. How do reviews compare with the top three? 4. Is there a real page on the site for this service? 5. How far is the business from where the client is measuring? Five minutes, and you will have diagnosed most problems correctly."
  ],
  take: [
    "Published factor lists are practitioner opinion, not Google's weights. Use them as a guide, not gospel.",
    "A short list does most of the work: category, proximity, reviews, legitimacy, website relevance, data consistency, local links and engagement.",
    "Most struggling businesses have one of four problems: wrong category, too few reviews, no real page for the service, or an eligibility issue.",
    "Factor weights differ by industry — restaurants live on reviews and photos, emergency services on proximity and speed.",
    "Method beats memorisation: identify the failing force, then the weakest lever inside it."
  ],
  self: [
    "I can name the five checks I would run first on any struggling local business.",
    "I can explain why published ranking factor surveys should be treated cautiously.",
    "I can name at least four commonly recommended activities that are largely a waste of time.",
    "I can explain why ranking factors carry different weight in different industries."
  ],
  quiz: [
    { q: "How should you treat published local ranking factor surveys?",
      a: ["As Google's official weights", "As experienced practitioner opinion, useful but not authoritative", "As completely worthless", "As legally binding guidelines"],
      c: 1,
      why: "These surveys collect the judgements of experienced professionals. That is genuinely useful context, but it is not a measurement of Google's internal weighting." },
    { q: "Which four problems account for most struggling local businesses?",
      a: ["Logo, colours, fonts and slogan", "Wrong primary category, too few reviews, no real page for the service, or an eligibility or suspension issue", "Domain age, social followers, posting frequency, description length", "Ad spend, email list size, staff count, opening year"],
      c: 1,
      why: "These four cover the overwhelming majority of real cases. Checking them first saves enormous time compared with working through a long list." },
    { q: "Why does the weighting of factors differ between a restaurant and an emergency plumber?",
      a: ["Google uses different algorithms per country", "Customer behaviour differs — restaurants are chosen on reviews and photos, emergencies on proximity and availability", "Restaurants pay more to Google", "Emergency services are exempt from ranking"],
      c: 1,
      why: "Google optimises for what satisfies searchers. Since searcher behaviour differs sharply by category, the practical weight of each signal differs too." }
  ],
  ex: {
    title: "Run the five-minute first check",
    time: "20 minutes",
    intro: "You will practise the fastest useful diagnostic in local SEO.",
    steps: [
      "For your practice business, write down the current primary category and judge whether it is the best possible match for the main keyword.",
      "Confirm the profile is verified and not suspended.",
      "Record its review count and rating, and those of the top three competitors.",
      "Check whether the website has a dedicated page for the main service, and note its URL or write 'none'.",
      "Note the approximate distance between the business and the point you are measuring rankings from.",
      "Write a two-sentence conclusion naming the most likely problem."
    ],
    deliver: "A five-point check with a written conclusion naming the single most likely cause of underperformance."
  },
  chal: {
    title: "Test the short list against reality",
    brief: "Take five businesses ranking in the top three for five different keywords in your city. For each, check the items on the short list. Then look for a case where a business ranks well despite clearly failing one of the short-list items. Investigate what is compensating for it. Write a short analysis of what this tells you about how the forces trade in your specific market — dense or sparse, high competition or low.",
    success: [
      "You have checked the short list across five real businesses, not just one.",
      "You have found and investigated at least one exception to the pattern.",
      "You have drawn a specific conclusion about how competitive your market is and what that means for strategy."
    ]
  }
}

});
