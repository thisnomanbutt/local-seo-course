/* Level 3 · Module 3 — Service Areas, Hours and Special Cases */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"3.3.1": {
  t: "Setting service areas the right way",
  why: "Service areas are simple to set and widely misunderstood. Setting them properly communicates clearly to customers without wasting effort on a false ranking hope.",
  body: [
    "h: What a service area actually is",
    "p: A service area is a statement: **these are the places we will travel to.** It is displayed to customers and it tells Google where you claim to operate. That is its job.",
    "p: It is not a ranking instruction. Lesson 3.3.2 covers that in full, because the misunderstanding is so widespread.",

    "h: The ways you can define areas",
    "l: **By city, town or region name.** The most common and usually the clearest.|**By postal code or ZIP.** More precise, useful for tightly defined coverage.|**By radius**, where supported. Simple, but blunt — a radius ignores rivers, motorways and travel times.",

    "h: How to choose the boundary",
    "n: **Start with where you actually go.** Look at the last fifty jobs. Where were they?|**Add where you would happily go** for a normal job at normal prices.|**Stop where you would decline or surcharge.** If you would say no, it is not a service area.|**Use names customers use.** List the suburb people call it, not the administrative district nobody says aloud.|**Keep the total number reasonable.** A long list of tiny areas looks manipulative and helps nobody.",
    "tip: The invoice test|Ask the business for their last fifty invoices and plot the addresses. The real service area is almost always different from the one the owner describes, and usually smaller. This single exercise produces a more accurate and more credible configuration than any amount of discussion.",

    "h: Realistic scale",
    "table: Business type ; Typical realistic area ; Note || Emergency plumber, urban ; One city or a set of suburbs ; Travel time matters more than distance || Domestic cleaner ; A handful of suburbs ; Frequent repeat visits limit range || Wedding photographer ; A region or several counties ; High value justifies travel || Specialist equipment repair ; A large region or nationwide ; Few competitors, high specialisation || Mobile car valeting ; A small radius ; Time per job limits range",
    "warn: Implausible coverage undermines you|A one-van plumber claiming to serve an entire large country is not credible to customers and looks like manipulation. Customers do notice, and it makes the listing look less trustworthy exactly when trust matters.",

    "h: Service areas and customer expectations",
    "p: Remember that customers read this. Listing an area you will only visit for large jobs produces enquiries you must turn down, wasting their time and yours. If coverage genuinely varies by job size, state that in your services or description rather than listing areas you will usually refuse.",

    "h: Hybrids",
    "p: A hybrid business shows its address **and** service areas. Both are true. Set the areas the same way: where you genuinely travel, using names customers use.",

    "h: Maintaining them",
    "l: Review annually, or whenever the business changes what it covers.|Remove areas you have stopped serving, especially after staff changes.|Add new areas when coverage genuinely expands, not in anticipation.|Re-check after any move, since the practical range shifts with the base.",
    "ex: The honest reduction|A cleaning company listed twenty-two suburbs. Plotting six months of jobs showed ninety per cent came from six of them, and the outer areas produced occasional jobs that lost money on travel time. Reducing the list to nine areas did not reduce enquiries from the core. It reduced the enquiries they were going to decline anyway, and made the listing more credible."
  ],
  take: [
    "A service area states where you will travel — it is a communication to customers, not a ranking instruction.",
    "Define areas by city, postcode or radius, using the names customers actually use.",
    "Set the boundary where you would genuinely decline or surcharge, not where you wish you worked.",
    "The invoice test — plotting the last fifty jobs — produces a more accurate area than any discussion.",
    "Implausible coverage reduces credibility with customers and looks manipulative."
  ],
  self: [
    "I can explain what a service area communicates and what it does not do.",
    "I can use the invoice test to define an accurate boundary.",
    "I know why implausibly large areas harm rather than help.",
    "I know that hybrids set both an address and service areas."
  ],
  quiz: [
    { q: "What is the most reliable way to define a business's true service area?",
      a: ["Ask the owner where they would like to work", "Plot the addresses of the last fifty jobs actually completed", "Use the largest area Google allows", "Copy the nearest competitor"],
      c: 1,
      why: "Owners consistently describe a wider area than they actually serve. Real job locations give an accurate, credible and defensible boundary." },
    { q: "Why is claiming an implausibly large service area harmful?",
      a: ["Google charges more", "It reduces credibility with customers and looks manipulative, while producing enquiries you will decline", "It slows the profile down", "It removes your address"],
      c: 1,
      why: "Customers read the area list. Coverage that is obviously unrealistic damages trust and generates wasted enquiries on both sides." },
    { q: "How should a hybrid business configure service areas?",
      a: ["It cannot have them", "It shows both its address and its genuine service areas", "It shows only service areas", "It shows only the address"],
      c: 1,
      why: "A hybrid genuinely serves customers at its premises and travels to them, so both the address and the travel areas are accurate and both are shown." }
  ],
  ex: {
    title: "Define an evidence-based service area",
    time: "30 minutes",
    intro: "You will replace assumption with evidence.",
    steps: [
      "Obtain or estimate the locations of the last thirty to fifty jobs for your practice business.",
      "Plot them roughly on a map or list them by suburb.",
      "Identify the areas producing most of the work.",
      "Identify any outlying jobs and ask whether they were profitable and repeatable.",
      "Draft a service area list using names customers use, stopping where you would decline.",
      "Compare it with the current list and note every area you would remove or add."
    ],
    deliver: "An evidence-based service area list compared against the current one, with additions and removals justified."
  },
  chal: {
    title: "Model the profitability of the outer areas",
    brief: "For your practice business, calculate the true cost of serving the outer edge of its claimed area: travel time, fuel, the jobs not done while travelling, and the rate at which those enquiries convert. Compare that with the core area. Then make a recommendation about whether the outer areas should be kept, reduced, or kept only with a minimum job value. Present it as a business decision with numbers, not as an SEO opinion.",
    success: [
      "Your calculation includes opportunity cost, not just fuel and time.",
      "You compared conversion rates between core and outer areas where data allows.",
      "Your recommendation is framed as a business decision with supporting numbers."
    ]
  }
},

"3.3.2": {
  t: "Does your service area affect ranking?",
  why: "This is the most persistent myth in local SEO. Settling it saves businesses from months of pointless effort and helps you give honest advice.",
  body: [
    "h: The short answer",
    "box: **No. Adding service areas does not make you rank in those areas.**",
    "p: This is the single most common false belief in local search, and it costs businesses real money in wasted effort and, sometimes, in suspensions from related tactics.",

    "h: Why people believe it",
    "l: It feels logical. You tell Google where you work, so surely Google shows you there.|Some tools and articles still repeat it.|Correlation gets mistaken for cause: a business adds areas, something else changes, rankings move.|It offers an easy solution to the hardest problem, which is distance.",

    "h: What actually determines where you appear",
    "p: As Level 1 established, local ranking is driven by relevance, distance and prominence. For a service area business:",
    "n: **Distance** is measured from your real, hidden address. Not from the centre of your service areas.|**Relevance** comes from categories, services, website and reviews.|**Prominence** comes from reviews, links and mentions.",
    "p: None of those is your service area list. Changing the list changes what customers read, and nothing about the three forces.",

    "h: The evidence you can gather yourself",
    "p: You do not have to take this on trust. Run the test:",
    "l: Note your current position at a point ten kilometres away.|Add that area to your service areas.|Wait four weeks.|Check the same point again.|In almost every case, nothing will have changed.",
    "tip: Run this test once, properly, and you will never doubt it again|It is also the most persuasive thing you can show a client who insists otherwise. Evidence they watched you gather beats an assertion from an expert every time.",

    "h: Why the myth is actively harmful",
    "warn: The escalation path|Believing the myth leads to adding more areas, which produces nothing. That leads to adding implausible areas, which damages credibility. That leads to more aggressive tactics — creating a listing per town, or renting an address in the target area — which are violations that get listings suspended. The myth is the first step on a path that ends in real damage.",

    "h: What to do instead when you want wider coverage",
    "n: **Build prominence.** As lesson 1.2.5 established, prominence is the lever that genuinely extends visible radius. Reviews, links, mentions.|**Sharpen relevance.** Precise categories, real service pages, reviews that describe the work.|**Build website pages for the areas** you serve. These can rank organically for 'service in town' searches even when your profile does not appear in the Local Pack there. This is genuinely effective and entirely legitimate — covered in lesson 4.4.4.|**Consider a genuine second location**, if the business case supports it. Covered in lesson 7.2.6.|**Accept the limit** where none of the above is realistic, and focus on winning the area you can win.",

    "ex: The honest conversation|A client insisted on adding forty service areas. Rather than arguing, the consultant added them, recorded the date, and set up grid measurement at points across the new areas. Eight weeks later the grid showed no change anywhere. The client accepted it immediately, because they had watched the measurement being set up. The budget then moved to reviews and area pages, which did produce change. Measurement ended an argument that words could not.",

    "h: What service areas do affect",
    "p: To be precise rather than dismissive, the service area list does do things:",
    "l: It tells customers where you work, which affects whether they contact you.|It is displayed on your profile and read by real people.|It contributes to how your business is described and understood.|It can prevent wasted enquiries from outside your range.",
    "p: Those are real benefits. They are simply not ranking benefits."
  ],
  take: [
    "Adding service areas does not make you rank in those areas — this is the most persistent myth in local SEO.",
    "Distance is measured from your real hidden address, not from the centre of your service areas.",
    "The myth escalates into genuinely dangerous tactics like a listing per town or a rented address.",
    "To extend real coverage: build prominence, sharpen relevance, build area pages on the website, or open a genuine second location.",
    "Service areas do help customers understand where you work — a real benefit, just not a ranking one."
  ],
  self: [
    "I can state plainly that service areas do not create rankings.",
    "I can explain what does determine where a service area business appears.",
    "I can describe a test that demonstrates it to a sceptical client.",
    "I can name four legitimate ways to extend real coverage."
  ],
  quiz: [
    { q: "A plumber adds fifteen new service areas. What effect should you expect on rankings in those areas?",
      a: ["A significant improvement within days", "No meaningful change, because distance is still measured from the real address", "A temporary drop then recovery", "Improvement only on mobile"],
      c: 1,
      why: "Service areas communicate coverage to customers. They do not alter the distance calculation or any of the three ranking forces." },
    { q: "Why is the service area myth actively dangerous, not just wasteful?",
      a: ["It slows the website", "It leads to escalating tactics like a listing per town or a rented address, which cause suspensions", "It deletes reviews", "It changes your category"],
      c: 1,
      why: "When adding areas produces nothing, businesses escalate to tactics that are genuine violations, and those do real and sometimes irreversible damage." },
    { q: "Which of these genuinely helps a business get visibility in a town it does not rank in?",
      a: ["Adding the town to service areas", "Building a real page on the website for that town's service, plus prominence work", "Putting the town in the business name", "Creating a second listing in that town"],
      c: 1,
      why: "Area pages can rank organically for that town, and prominence extends visible radius. The other two options are violations or ineffective." }
  ],
  ex: {
    title: "Design and start the service area test",
    time: "25 minutes to set up",
    intro: "You will gather your own evidence rather than trusting anyone's claim, including this course's.",
    steps: [
      "Choose three measurement points in areas your practice business does not currently rank in.",
      "Record the current position at each point using a private window with the location set.",
      "Add those areas to the service area list if they are genuine.",
      "Record the date of the change.",
      "Set a reminder for four weeks and again for eight weeks.",
      "Write down in advance what result would convince you the myth is true, and what would convince you it is false."
    ],
    deliver: "A set-up test with three baseline measurements, a dated change, scheduled follow-ups and pre-stated success criteria."
  },
  chal: {
    title: "Write the client-facing explanation",
    brief: "Write the explanation you would give a client who is certain that adding service areas will make them rank in those areas. It must be respectful, clear, free of jargon, and must not make them feel foolish for believing something widely repeated. It should explain what does determine coverage, offer the measurement test as a way to settle it fairly, and present the legitimate alternatives. Keep it under 300 words and end with a specific recommendation.",
    success: [
      "The explanation corrects the belief without being condescending.",
      "It offers a fair test rather than only asserting expertise.",
      "It ends with a specific recommendation and at least two legitimate alternatives."
    ]
  }
},

"3.3.3": {
  t: "Opening hours as a ranking and conversion lever",
  why: "Hours are treated as administration. Used deliberately, they are one of the few levers that changes who you compete against at specific times of day.",
  body: [
    "h: Two separate effects",
    "n: **Visibility effect.** Businesses shown as closed are filtered out of 'open now' searches and often appear less prominently at those times. Being open when competitors are closed reduces your competition directly.|**Conversion effect.** A customer seeing 'Closed' is far less likely to click, and one seeing 'Open now, closes 8 pm' is more likely to call immediately.",

    "h: Mapping the competitive clock",
    "p: The practical technique is simple and almost nobody does it:",
    "n: List the top ten competitors for your main keyword.|Record each one's opening hours for all seven days.|Build a grid of the week in two-hour blocks.|Mark how many competitors are open in each block.|Find the blocks with fewest competitors open.",
    "p: You will usually find obvious gaps: early mornings, evenings after six, Saturday afternoons, Sundays, and public holidays. In many categories, more than half of competitors close at the same time.",
    "tip: The gap is often the evening|In a large number of service categories, almost everyone closes between 5 pm and 6 pm, while a meaningful share of customer searching happens after work. A business that genuinely staffs until 8 pm faces a much smaller field at exactly the time many decisions are made.",

    "h: Turning the gap into a decision",
    "p: This becomes a business decision, not an SEO one. Extending hours costs staff time. The question is whether the reduced competition produces enough additional work to justify it.",
    "l: Estimate search volume in the gap using profile performance data by time where available.|Consider whether your category has urgency — emergency services benefit far more.|Consider whether a phone answered is enough, or whether the premises must be open.|Consider a partial version: phone answered until 8 pm, premises closed.",
    "warn: Do not list hours you will not staff|The temptation is to list extended hours without extending staffing. This produces customers who call and get nothing, arrive and find a closed door, and leave reviews saying exactly that. The visibility gained is destroyed by the rating lost.",

    "h: Special hours and holidays",
    "p: Public holidays concentrate this effect dramatically. Many businesses fail to set holiday hours, so Google shows their hours as unconfirmed or assumes closure. A business that has explicitly confirmed it is open stands out sharply.",
    "l: Set special hours for every public holiday twelve months ahead, as covered in lesson 2.3.4.|Mark yourself open where you are open, and closed where you are closed.|Both are valuable — confirmed closure prevents wasted journeys and bad reviews.",

    "h: The 24-hour question",
    "p: 'Open 24 hours' is powerful in emergency categories and must be genuinely true, including at 3 am on a Sunday. If you answer the phone at night but do not attend until morning, that is not 24-hour service and listing it as such produces exactly the reviews you would expect.",
    "ex: The measured evening|An emergency electrician mapped competitor hours and found only two of ten were available after 7 pm. They extended genuine phone cover to 10 pm, updated the listing, and tracked calls by hour. Evening calls rose substantially and converted at a higher rate, because callers had fewer alternatives and were more urgent. The change paid for itself within two months — but it worked because the cover was real."
  ],
  take: [
    "Hours affect both visibility, through time-based filtering, and conversion, through what the customer sees.",
    "Mapping competitor hours across the week reveals blocks where few competitors are open.",
    "Evenings, weekends and public holidays are the most common gaps in most categories.",
    "Extending hours is a business decision — it only works if the cover is genuinely staffed.",
    "Setting special hours for holidays makes you stand out when competitors show as closed or unconfirmed."
  ],
  self: [
    "I can explain the two separate effects of hours.",
    "I can build a competitor hours grid across a week.",
    "I know why listing unstaffed hours destroys the benefit.",
    "I know what '24 hours' genuinely requires."
  ],
  quiz: [
    { q: "What is the main visibility benefit of being open when competitors are closed?",
      a: ["Google rewards long hours directly", "You compete against a much smaller field at that time, and you survive 'open now' filtering", "Your category improves", "Your reviews increase automatically"],
      c: 1,
      why: "Businesses shown as closed are filtered out of time-based searches. Being genuinely open reduces the competitive field at that moment." },
    { q: "A business lists extended evening hours but nobody answers after 5 pm. What is the likely outcome?",
      a: ["More customers overall", "Wasted calls, frustrated customers and negative reviews that outweigh the visibility gained", "No effect", "Automatic suspension"],
      c: 1,
      why: "The visibility only converts if the cover is real. Unanswered calls at listed open times generate specific, credible negative reviews." },
    { q: "Why are public holidays a particular opportunity?",
      a: ["Google boosts holiday listings", "Many competitors fail to set holiday hours, so they show as closed or unconfirmed while you are confirmed open", "Searches stop on holidays", "Reviews count double"],
      c: 1,
      why: "Most businesses never set special hours. Explicit confirmation stands out sharply at a moment when customer options are limited." }
  ],
  ex: {
    title: "Build the competitive hours grid",
    time: "35 minutes",
    intro: "You will find the gaps nobody else has looked for.",
    steps: [
      "List the top ten businesses for your practice business's main keyword.",
      "Record each one's opening hours for all seven days.",
      "Build a grid of the week in two-hour blocks and mark how many are open in each.",
      "Highlight the three blocks with fewest competitors open.",
      "Record your practice business's current hours on the same grid.",
      "Write one sentence identifying the single best hours opportunity available."
    ],
    deliver: "A completed competitive hours grid with the three lowest-competition blocks and one specific opportunity identified."
  },
  chal: {
    title: "Build the extended hours business case",
    brief: "Using your hours grid, build a full business case for one specific hours change. Include: the competitive gap in numbers, an estimate of the additional enquiries, the staffing cost, the minimum conversion needed to break even, how you would trial it without committing permanently, and how you would measure whether it worked. Then state honestly whether you would recommend it, including the case where the honest answer is no.",
    success: [
      "Your case quantifies the competitive gap rather than describing it.",
      "You calculated a break-even point, not just a benefit.",
      "You proposed a reversible trial with a defined measurement period."
    ]
  }
},

"3.3.4": {
  t: "Messaging, call history and lead capture",
  why: "Every enquiry the profile generates is worth money. These features capture enquiries that would otherwise be lost, but only if they are managed.",
  body: [
    "h: The features",
    "l: **Messaging.** Customers send a message directly from the listing.|**Call history**, where available, which records calls made from the profile.|**Request a quote**, in some categories.|**Booking buttons**, covered in lesson 3.2.6.",

    "h: Messaging, honestly assessed",
    "p: Messaging suits some businesses very well and others badly.",
    "table: Business type ; Messaging value ; Why || Salons, clinics, appointment services ; High ; Customers prefer messaging to phoning for bookings || Trades and emergency services ; Low to medium ; Urgent customers call; messages delay response || Retail ; Medium ; Stock and availability questions || Professional services ; Medium to high ; Initial enquiries feel lower-commitment than a call || Restaurants ; Medium ; Bookings and dietary questions",
    "warn: Response time is visible and unforgiving|Slow or absent replies are worse than not offering messaging at all. Before enabling it, identify the specific person who will answer and during which hours. If that person cannot be named, do not enable it.",

    "h: Managing messaging well",
    "n: Set a clear expectation in your profile or automatic greeting about response times.|Answer within the hour during business hours where possible.|Keep replies short and useful, and move to a call or booking quickly.|Do not use it for long negotiations — capture the enquiry and move to the appropriate channel.|Turn it off during periods when nobody can respond, rather than leaving messages unanswered.",

    "h: Call history and why it matters",
    "p: Where call history is available, it records calls originating from the profile. This is genuinely valuable for two reasons:",
    "l: It proves the profile generates calls, which is the core of local SEO reporting in Level 9.|It reveals missed calls, which is often the single largest hidden loss in a local business, as lesson 1.1.6 established.",
    "ex: The number nobody wanted to see|A home services business was proud of its rankings. Call history showed 38 per cent of calls from the profile went unanswered during stated business hours. No amount of additional ranking would have fixed that. Hiring one part-time person to answer the phone produced more revenue than a year of SEO work would have.",

    "h: The lead capture principle",
    "p: Every route a customer can use to contact you should either be answered promptly or removed. An unanswered channel is worse than a missing one, because the customer has already chosen you and been let down.",
    "n: List every contact route on the profile: call, message, booking, quote request, website form.|For each, name the person responsible and the expected response time.|Test each route yourself as a customer, from an unrecognised number or address.|Remove or disable any route nobody owns.|Re-test quarterly.",
    "tip: The mystery shop of your own business|Once a quarter, contact your own practice business through every available route, as a customer would, and record what happens. This is uncomfortable and it is the single most valuable audit in local marketing. Most businesses have never done it once.",

    "h: Data and privacy",
    "p: Messages and call records contain customer information. Handle them according to whatever privacy rules apply in your market, keep them only as long as needed, and do not use contact details gathered this way for unrelated marketing without consent. This is both a legal matter and a trust matter."
  ],
  take: [
    "Every contact route on the profile should be answered promptly or removed — an unanswered channel is worse than a missing one.",
    "Messaging suits appointment-based businesses better than urgent ones, and response time is visible.",
    "Call history proves the profile generates calls and reveals missed calls, often the largest hidden loss.",
    "Name the person responsible for each contact route and test each one yourself as a customer.",
    "Mystery-shop your own business quarterly through every route — most businesses have never done it."
  ],
  self: [
    "I can judge whether messaging suits a given business type.",
    "I can explain why an unanswered channel is worse than no channel.",
    "I know what call history reveals beyond volume.",
    "I can design a quarterly mystery shop of every contact route."
  ],
  quiz: [
    { q: "A business enables messaging but nobody checks it for days. What is the effect?",
      a: ["Neutral", "Worse than not offering messaging, because the customer chose them and was let down", "Improved rankings", "Automatic disabling by Google"],
      c: 1,
      why: "An unanswered channel fails a customer who had already decided to contact you. Response behaviour is also visible at the decision moment." },
    { q: "What is the most valuable insight call history often provides?",
      a: ["Caller names", "The proportion of calls going unanswered during stated business hours", "Competitor call volumes", "Keyword data"],
      c: 1,
      why: "Missed calls are the largest invisible loss in many local businesses. No amount of additional ranking compensates for calls nobody answers." },
    { q: "How often should a business test its own contact routes as a customer?",
      a: ["Never, it is unnecessary", "At least quarterly, through every available route", "Only when complaints arrive", "Daily"],
      c: 1,
      why: "Routes break silently through staff changes, number changes and system updates. A quarterly mystery shop catches failures before customers report them." }
  ],
  ex: {
    title: "Mystery-shop your practice business",
    time: "30 minutes plus waiting time",
    intro: "You will find out what actually happens when a customer tries to reach this business.",
    steps: [
      "List every contact route available on the listing.",
      "Contact the business through each one, as a genuine customer would, from an unrecognised number or email.",
      "Record exactly what happened for each: time to answer, manner, whether they tried to book you, whether anyone replied at all.",
      "Note any route that produced no response within a working day.",
      "Identify which route performs best and which worst.",
      "Write the three changes that would most improve the experience."
    ],
    deliver: "A mystery shop record for every contact route with response times and three prioritised improvements."
  },
  chal: {
    title: "Build the lead response system",
    brief: "Design a complete lead response system for your practice business covering every contact route. Specify who owns each route, target response times, what happens outside hours, how enquiries are recorded so none are lost, how missed enquiries are detected, and how the system is tested. Then calculate the revenue value of improving response on the worst-performing route, using the business's own average job value and a realistic conversion rate, so the case is made in money rather than in principle.",
    success: [
      "Every route has a named owner, a target response time and an out-of-hours rule.",
      "The system includes a way to detect missed enquiries, not just handle received ones.",
      "You expressed the improvement case in money using the business's own numbers."
    ]
  }
},

"3.3.5": {
  t: "Booking links, partners and link tracking",
  why: "A booking button turns a browser into a customer in one tap. Setting it up correctly, and measuring it, is where profile work meets business results.",
  body: [
    "h: The two routes to a booking button",
    "n: **Through a supported partner.** If the business uses a booking system integrated with Google, appointments can appear directly on the listing, sometimes with available times shown.|**Through a manual link.** You add the URL of your own booking page, and a button appears taking customers there.",
    "p: The partner route is more powerful where available, because it can show availability in the listing itself and reduces steps. The manual route works for everyone.",

    "h: Getting the link right",
    "l: Link to the **booking page itself**, not the homepage or a contact page.|Make sure the page works properly on a phone, since most taps come from mobile.|Make sure it loads quickly — a slow booking page loses people who were ready to buy.|Do not require an account to be created before booking if it can be avoided.|Ask only for what you need. Every extra field loses customers.",
    "warn: Test the whole path, not just the link|Businesses check that the link opens and stop there. Complete an actual test booking, on a phone, on mobile data rather than wifi, and see how many steps it takes and whether anything breaks. This reveals problems that checking the link never will.",

    "h: Tracking",
    "p: Untracked booking links make local SEO look less effective than it is, because the bookings appear as generic website traffic.",
    "n: Add tracking parameters to the booking URL, as covered in lesson 9.3.4.|Use a consistent naming scheme so bookings from the profile can be identified in reporting.|Confirm the parameters survive any redirects on the way to the booking system.|Confirm your analytics actually records them — many booking systems sit on a different domain and lose the data unless configured.|Where a partner integration is used, check what reporting it provides.",
    "tip: The cross-domain problem|If your booking system lives on a different web address from your main site, tracking commonly breaks at the handover. This is the single most common reason a business believes its bookings come from nowhere. It needs configuring once, properly, and then it works.",

    "h: Other action links",
    "p: The same principles apply to every action link on the profile:",
    "l: Order or delivery links.|Menu links.|Quote request links.|Links inside posts.|The main website link.",
    "p: Each should point somewhere specific, work on a phone, load fast and carry tracking.",

    "h: What to do when there is no online booking",
    "p: Many small businesses take bookings only by phone. That is fine, and a booking button is not mandatory. But consider:",
    "l: Some customers, particularly younger ones and those uncomfortable phoning, will simply choose a competitor who offers online booking.|A simple form that captures name, number and preferred time is better than nothing and costs little.|If bookings are phone-only, make sure the phone is answered — which brings you back to lesson 3.3.4.",
    "ex: The abandoned booking path|A clinic added a booking button linking to a system that required creating an account, confirming an email, then choosing an appointment. Analytics showed a large number of taps and very few completed bookings. Replacing it with a three-field request form, answered by reception within the hour, produced far more actual appointments from the same number of taps."
  ],
  take: [
    "A booking button can come from a supported partner integration or a manual link to your own booking page.",
    "Link directly to the booking page, and make sure it is fast and works on a phone.",
    "Complete a real test booking on mobile data — checking the link opens is not enough.",
    "Track every action link, and watch for tracking breaking when the booking system sits on another domain.",
    "Fewer steps and fewer fields convert better than a sophisticated system that demands account creation."
  ],
  self: [
    "I know the two routes to a booking button and their trade-offs.",
    "I know to complete a real test booking rather than just checking the link.",
    "I understand the cross-domain tracking problem and why it matters.",
    "I know what to advise a business that takes bookings only by phone."
  ],
  quiz: [
    { q: "What is the most common reason a business cannot tell where its bookings come from?",
      a: ["Google hides the data", "Tracking breaks when the booking system sits on a different domain from the main website", "Bookings are anonymous by law", "Analytics does not support bookings"],
      c: 1,
      why: "The handover between domains commonly drops tracking parameters. It needs configuring once, after which attribution works correctly." },
    { q: "How should you test a booking link?",
      a: ["Check it opens", "Complete a full test booking on a phone using mobile data, counting the steps", "Ask the client if it works", "Check it in a desktop browser only"],
      c: 1,
      why: "Most taps come from phones on mobile connections. Problems with speed, layout and required fields only appear when you complete the real path." },
    { q: "A booking system requires account creation and email confirmation before booking. What is the likely effect?",
      a: ["Higher quality bookings", "Many taps and few completed bookings, because each extra step loses customers", "No effect", "Better rankings"],
      c: 1,
      why: "Every additional required step reduces completion. A simple request form answered quickly often produces more real appointments than a sophisticated system." }
  ],
  ex: {
    title: "Test and fix the booking path",
    time: "30 minutes",
    intro: "You will walk the path a customer actually walks.",
    steps: [
      "Open your practice business's listing on a phone using mobile data.",
      "Tap every action link and record where each one lands.",
      "Complete a full test booking or enquiry, counting every step and every field required.",
      "Record how long the whole process took and where you would have given up as a customer.",
      "Check whether tracking parameters are present and whether they survive to the final page.",
      "List the steps and fields you would remove."
    ],
    deliver: "A step-by-step record of the real booking path with a list of steps and fields to remove."
  },
  chal: {
    title: "Rebuild the booking experience",
    brief: "Design the ideal booking path for your practice business from the listing to a confirmed appointment. Specify the minimum information genuinely required, how many steps it should take, what happens on a phone, what happens if the customer abandons partway, what confirmation they receive, and how the whole path is tracked. Then compare it with the current path and quantify the difference in steps and fields. Finally, note what would need to change operationally, not just technically, to support it.",
    success: [
      "Your ideal path is specified step by step with the minimum required fields justified.",
      "You quantified the difference from the current path in steps and fields.",
      "You identified the operational changes needed, not only the technical ones."
    ]
  }
},

"3.3.6": {
  t: "The fields that quietly trigger reviews and suspensions",
  why: "Some profile fields are watched more closely than others. Knowing which ones lets you make changes safely and avoid unnecessary risk.",
  body: [
    "h: Sensitive versus routine fields",
    "p: Not all profile edits are equal. Some are routine and take effect immediately. Others touch the core identity of the business and can trigger a review, a re-verification request, or in some cases a suspension.",

    "h: The sensitive fields",
    "table: Field ; Sensitivity ; Why || Business name ; Very high ; Core identity, common abuse vector || Address ; Very high ; Eligibility depends on it || Primary category ; High ; Changes what the business claims to be || Adding or removing a service area ; Medium ; Changes claimed operating area || Phone number ; Medium ; Identity and contact verification || Website URL ; Low to medium ; Occasionally checked || Hours ; Low ; Routine || Photos ; Low ; Routine, though content is reviewed || Description ; Low ; Content reviewed for policy || Attributes ; Low ; Routine || Services ; Low ; Routine || Posts ; Low ; Content reviewed for policy",

    "h: What triggers extra scrutiny",
    "l: Changing name and address together.|Changing several sensitive fields within a short period.|Changing a name to include keywords.|Moving an address a significant distance.|Changing category to something markedly different from the business's history.|Making changes shortly after a competitor report.|Making changes on an account with previous suspensions.",
    "warn: The compound change problem|Changing the name, address and category in the same week looks, from the outside, exactly like a listing being repurposed — which is a known abuse pattern. Even when every individual change is legitimate, the combination invites review. Space them out.",

    "h: Content that can be rejected or penalised",
    "l: Promotional text in the description, as covered in lesson 3.1.5.|Phone numbers or URLs in fields not intended for them.|Photos containing offers, watermarks or contact details.|Posts containing prohibited content.|Services or products with misleading claims.|Anything that breaches content policies around restricted or regulated goods and services.",

    "h: Making changes safely",
    "n: **Change one sensitive field at a time.**|**Wait for the change to settle** — days, not hours — before the next.|**Record every change with its date**, so effects can be attributed and so you can explain the sequence if questioned.|**Have evidence ready** before changing anything address-related.|**Avoid changes during an active review** or shortly after a suspension.|**Do not revert repeatedly.** Oscillating values look like manipulation.",
    "p: Lesson 3.4.4 covers the full safe editing sequence, including the order in which changes should be made.",

    "h: Signs that a change triggered something",
    "l: The listing shows as unverified or requires re-verification.|The change does not appear after several days.|The change appears and is then reverted by Google.|The listing stops appearing in search.|A notification arrives requesting information.",
    "p: If any of these happen, stop making further changes and investigate. Continuing to edit during a review compounds the problem.",

    "ex: The innocent sequence that looked guilty|A business genuinely moved premises, rebranded, and refocused its services, all in one month. Name, address and primary category all changed within two weeks. The listing was suspended. Everything was legitimate and it was eventually reinstated, but it took five weeks and a full evidence pack. Spacing the changes over three months would almost certainly have avoided it entirely.",
    "tip: The two-week rule|As a working habit, leave at least two weeks between changes to sensitive fields. It costs you almost nothing in a long-term engagement and removes a whole category of avoidable risk."
  ],
  take: [
    "Name, address and primary category are the most sensitive fields; hours, photos and attributes are routine.",
    "Changing several sensitive fields together resembles a known abuse pattern, even when every change is legitimate.",
    "Space sensitive changes out, record every change with its date, and have evidence ready before address changes.",
    "Signs of a triggered review include unverification, changes not appearing, reversions or disappearance from search.",
    "If a review is triggered, stop editing and investigate rather than making more changes."
  ],
  self: [
    "I can rank profile fields by sensitivity.",
    "I can explain why compound changes invite review even when legitimate.",
    "I can recognise the signs that a change triggered something.",
    "I follow a spacing rule between sensitive field changes."
  ],
  quiz: [
    { q: "Which combination of changes is most likely to trigger a review?",
      a: ["Hours and photos in the same week", "Name, address and primary category in the same week", "Description and attributes together", "Adding services and posts"],
      c: 1,
      why: "That combination resembles a listing being repurposed for a different business, which is a known abuse pattern, so it attracts scrutiny even when legitimate." },
    { q: "What should you do if a listing becomes unverified shortly after you made a change?",
      a: ["Make more changes to correct it", "Stop editing and investigate what triggered it", "Delete the listing", "Change the name back and forth until it settles"],
      c: 1,
      why: "Further edits during a review compound the problem and can look like evasion. Investigate the cause and prepare evidence before acting." },
    { q: "Which of these is a low-sensitivity, routine field?",
      a: ["Business name", "Address", "Opening hours", "Primary category"],
      c: 2,
      why: "Hours are routine and change frequently in normal business life. Name, address and primary category define the business's identity and eligibility." }
  ],
  ex: {
    title: "Build a change log and risk assessment",
    time: "25 minutes",
    intro: "You will create the record that protects you and makes diagnosis possible.",
    steps: [
      "Create a change log with columns: date, field changed, old value, new value, reason, who made it.",
      "Record every change you have made to your practice business's profile so far in this course.",
      "List any changes you still plan to make.",
      "Assign each planned change a sensitivity rating using this lesson's table.",
      "Sequence the planned changes with at least two weeks between sensitive ones.",
      "Note what evidence you would need ready before any address-related change."
    ],
    deliver: "A change log covering past changes plus a sequenced, risk-rated plan for future ones."
  },
  chal: {
    title: "Plan a high-risk transition safely",
    brief: "Plan a genuine high-risk transition for a business that is moving premises, changing its name and narrowing its category focus. Sequence every change across a realistic timeline, specify what evidence must exist before each step, state what you would monitor after each change and for how long, and define what you would do if a suspension occurred at any point. Include what you would tell the client to expect, so a temporary dip does not become a crisis of confidence.",
    success: [
      "Your sequence spaces sensitive changes appropriately with stated reasoning.",
      "Each step names the evidence required before it and the monitoring after it.",
      "You included a suspension contingency and a client expectation-setting message."
    ]
  }
}

});
