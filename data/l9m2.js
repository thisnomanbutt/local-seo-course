/* Level 9 · Module 2 — Performance Data and Search Console */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"9.2.1": {
  t: "Profile performance metrics field by field",
  why: "Google gives you data about your own listing for free. Most businesses never look at it properly, and it answers questions rankings cannot.",
  body: [
    "h: What is available",
    "p: The Google Business Profile performance section reports how people found and interacted with your listing. The exact fields change over time, but the categories are stable:",
    "n: **Views or impressions**, split by where they occurred and by device.|**Searches** that led to your listing appearing, including the actual search terms.|**Interactions**: calls, direction requests, website clicks, messages, bookings.|**Photo data**, where available.|**Comparison over time**, usually across recent months.",

    "h: The field-by-field meaning",
    "table: Field ; What it counts ; What it does not tell you || Views on Search ; Times your listing appeared or was viewed in ordinary search ; Whether the person noticed it || Views on Maps ; The same within Maps ; Whether they were nearby || Searches breakdown ; How people found you, by category of search ; Individual user behaviour || Search terms ; The actual phrases used ; Complete data, since terms are aggregated and limited || Calls ; Taps on the call button ; Whether the call connected or was answered || Directions ; Direction requests ; Whether the person arrived || Website clicks ; Taps on the website button ; What happened after || Messages ; Messages initiated ; Whether they were answered || Bookings ; Bookings started through the profile ; Whether they completed",
    "warn: Every metric counts an action, not an outcome|A call metric counts the tap, not the conversation. A direction request counts the tap, not the visit. Treating these as customers overstates results, sometimes substantially. They are indicators of intent, and the conversion from intent to customer is a separate measurement covered in module 3.",

    "h: Why this data matters more than rankings",
    "l: It reflects what real people did, not simulated positions.|It is Google's own data about your listing.|It shows whether visibility converted into contact.|It reveals problems rankings cannot, such as good positions with no calls.|It is free and requires no tool.|It is the fastest way to check whether a reported drop is real, from lesson 7.1.6.",

    "h: Reading it properly",
    "n: **Look at trends, not single months.** Monthly figures fluctuate with seasonality and working days.|**Compare like with like.** A month with more working days produces more calls.|**Look at ratios, not just totals.** Actions divided by views is more informative than either alone, from lesson 7.4.5.|**Split Search from Maps**, since they behave differently.|**Note the date ranges available**, which are limited, so export regularly.|**Record it monthly** in your own spreadsheet, because the history available in the interface is finite.",
    "tip: Export it every month|The interface holds a limited history. A business that exports monthly builds a multi-year record that the interface itself cannot show, and that record is what makes year-on-year comparison and real diagnosis possible. It takes two minutes and almost nobody does it.",

    "h: The most useful single figure",
    "p: The ratio of total actions to total views. It answers the question rankings cannot: **when people see this listing, do they contact the business?** A listing with high views and low actions has a presentation problem — photos, rating, hours or information — not a visibility problem.",

    "h: What to do with it",
    "l: Track the trend monthly.|Investigate any sharp change.|Use it to verify whether reported ranking drops are real.|Use the actions ratio to assess presentation quality.|Use the search terms to inform keyword work, from lesson 9.2.3.|Report it alongside rankings, because it is closer to business results.",
    "ex: The good rankings that produced nothing|A business ranked in the top three across most of its grid and was disappointed with enquiries. Performance data showed high views and an unusually low actions ratio. The listing had one dark photograph, a 3.9 rating, and hours showing it closed at 4 pm. Visibility was not the problem. The listing was being seen and rejected, which no amount of further ranking work would have fixed."
  ],
  take: [
    "Profile performance data reports views, searches, search terms and interactions, free and without any tool.",
    "Every metric counts an action, not an outcome — a call metric counts the tap, not the conversation.",
    "It reflects what real people did, which makes it more valuable than simulated ranking positions.",
    "The ratio of actions to views answers whether people who see the listing contact the business.",
    "Export it monthly, because the interface history is limited and a multi-year record enables real diagnosis."
  ],
  self: [
    "I can explain what each performance field counts and does not tell me.",
    "I know that these metrics count actions rather than outcomes.",
    "I use the actions-to-views ratio as a presentation quality indicator.",
    "I export the data monthly to build a history the interface cannot show."
  ],
  quiz: [
    { q: "What does the calls metric actually count?",
      a: ["Customers gained", "Taps on the call button, not whether the call connected or was answered", "Completed conversations", "Revenue"],
      c: 1,
      why: "It measures the action taken on the listing. Whether the call was answered and converted is a separate measurement, and treating taps as customers overstates results." },
    { q: "A listing has high views and a very low actions ratio. What does this indicate?",
      a: ["A visibility problem", "A presentation problem — photos, rating, hours or information are causing people to reject it", "A tracking error", "Too many competitors"],
      c: 1,
      why: "People are seeing it and choosing not to act. Further ranking work would only increase views into the same rejection, as lesson 1.1.6 established." },
    { q: "Why should performance data be exported monthly?",
      a: ["Google deletes it", "The interface holds a limited history, so exporting builds a multi-year record it cannot itself show", "It is required", "To share with competitors"],
      c: 1,
      why: "Year-on-year comparison and long-term diagnosis need history beyond what the interface retains, and two minutes a month builds it." }
  ],
  ex: {
    title: "Read and record the performance data",
    time: "30 minutes",
    intro: "You will start the record that makes future diagnosis possible.",
    steps: [
      "Open your practice business's profile performance section.",
      "Record views on Search and on Maps for the last available period.",
      "Record calls, direction requests, website clicks, messages and bookings.",
      "Calculate the actions-to-views ratio.",
      "Create a spreadsheet with a row per month and enter this month's figures.",
      "Set a monthly reminder to repeat it."
    ],
    deliver: "A performance data record with all fields, a calculated actions ratio and a scheduled monthly routine."
  },
  chal: {
    title: "Diagnose from performance data alone",
    brief: "Using only the profile performance data for your practice business, produce a diagnosis of its current situation. Assess whether visibility or presentation is the constraint, whether Search or Maps is stronger, what the actions ratio indicates, and what has changed over the available period. Then state what you would investigate next and why. Finally, compare your conclusion against what the grid data suggests, and note where the two sources agree and where they do not.",
    success: [
      "You reached a conclusion using performance data before consulting the grid.",
      "You distinguished visibility constraints from presentation constraints.",
      "You compared the two sources and noted any disagreement rather than only where they agreed."
    ]
  }
},

"9.2.2": {
  t: "Searches, views and interactions: what each counts",
  why: "These terms are used loosely and mean specific things. Precision here prevents both misreporting and misdiagnosis.",
  body: [
    "h: The chain",
    "p: There is a sequence, and each stage counts something different:",
    "n: **A search happens.** Someone types something.|**Your listing becomes eligible** and may be shown.|**A view or impression** is recorded when your listing appears or is viewed.|**An interaction** occurs if they tap something.|**A business outcome** occurs if that interaction leads somewhere.",
    "p: Profile data covers stages three and four. Stage five is your own measurement, from module 3.",

    "h: Views and impressions",
    "l: The exact definition and naming have changed over time, so check current documentation rather than relying on memory.|Broadly, a view or impression records that your listing was shown or seen.|It is split by surface — Search and Maps — and sometimes by device.|It does not mean the person read it, noticed it or considered it.|Large view counts with few interactions is the presentation problem from lesson 9.2.1.",
    "warn: Do not compare view counts across different definitions|If the metric's definition changed, figures before and after are not comparable, exactly like a tool change in lesson 9.1.6. When a metric is renamed or redefined, note the date in your record and do not present the step change as performance.",

    "h: Search breakdowns",
    "p: Data is often split by how people found you:",
    "table: Category ; Meaning ; What it tells you || Direct or branded ; Searched your name or address ; Brand awareness, from lesson 1.3.3 || Discovery ; Searched a category, product or service ; New customer acquisition || Branded through a related brand ; Found via a brand you carry or are associated with ; Partnership and supplier value",
    "l: A high proportion of direct searches means people already know you, which is good but means little new acquisition.|A high proportion of discovery searches means the listing is winning new customers.|A shift from discovery to direct may indicate reduced visibility for category searches.|Both matter; the balance tells you what the listing is doing.",

    "h: Interactions",
    "n: **Calls.** The most direct indicator of intent for most service businesses.|**Direction requests.** Strongest indicator for businesses customers visit.|**Website clicks.** Indicates research intent, and connects to the website measurement in module 3.|**Messages.** Where enabled, from lesson 3.3.4.|**Bookings.** The closest thing to a direct outcome.",
    "tip: Weight interactions by business type|For an emergency plumber, calls are almost everything and direction requests are near-meaningless. For a shop, direction requests matter more than website clicks. Reporting all interactions with equal weight obscures which ones actually indicate business. Decide which one or two matter for this business and lead with those.",

    "h: Seasonality and working days",
    "l: Months have different numbers of working days, which affects calls substantially.|Holiday periods distort monthly comparisons.|Many trades are strongly seasonal.|Compare with the same month last year as well as with last month.|Note any unusual event in the period.",

    "h: The limits",
    "n: The data is aggregated and sampled in places.|Date ranges available are limited.|Definitions change.|It covers only the profile, not the website or other channels.|It cannot attribute a customer to a specific search.",
    "ex: The misread improvement|A business celebrated a 30 per cent rise in calls month on month. The previous month had contained a two-week holiday closure and had four fewer working days. Comparing against the same month the previous year showed a modest decline. The monthly comparison had not been wrong arithmetically; it had simply compared two periods that were not comparable."
  ],
  take: [
    "Views record that a listing was shown or seen; interactions record taps; business outcomes are a separate measurement.",
    "Metric definitions and names change over time, so note the date of any change and do not present a step change as performance.",
    "Search breakdowns show the balance between people who already know you and genuinely new discovery.",
    "Weight interactions by business type — calls dominate for emergency services, directions for shops.",
    "Compare with the same month last year as well as last month, because working days and seasonality distort monthly comparisons."
  ],
  self: [
    "I can describe the chain from search to business outcome and which stages profile data covers.",
    "I know that metric definitions change and handle that in my records.",
    "I can interpret the discovery versus direct balance.",
    "I compare year on year as well as month on month."
  ],
  quiz: [
    { q: "A business celebrates a 30 per cent month-on-month rise in calls. What should you check?",
      a: ["Nothing, it is clearly good", "Whether the previous month had fewer working days or a closure, and how it compares year on year", "Whether the tool is accurate", "Their review count"],
      c: 1,
      why: "Working days and holiday periods distort monthly comparisons substantially. Year-on-year comparison is the check that reveals whether anything genuinely improved." },
    { q: "A high proportion of direct or branded searches indicates what?",
      a: ["Strong new customer acquisition", "People already know the business — good for awareness but limited new acquisition", "A ranking problem", "Fake searches"],
      c: 1,
      why: "Branded searches come from people who already know the name. Discovery searches are where new customers come from, and the balance tells you what the listing is doing." },
    { q: "Why should interactions be weighted by business type?",
      a: ["Google requires it", "Calls are almost everything for an emergency service while direction requests are near-meaningless, and the reverse applies to a shop", "To reduce reporting length", "All interactions are equal"],
      c: 1,
      why: "Reporting all interactions with equal weight obscures which ones actually indicate business for this specific type of operation." }
  ],
  ex: {
    title: "Analyse the interaction mix",
    time: "30 minutes",
    intro: "You will establish which metrics actually matter for this business.",
    steps: [
      "Record every interaction type for your practice business over the last available period.",
      "Determine which one or two genuinely indicate business for this business type.",
      "Record the discovery versus direct search balance.",
      "Compare the period against the same period last year if data allows.",
      "Note the number of working days and any unusual events in both periods.",
      "Write a two-sentence assessment of what the data actually shows."
    ],
    deliver: "An interaction analysis with the key metrics identified, a year-on-year comparison and a written assessment."
  },
  chal: {
    title: "Build the comparable measurement standard",
    brief: "Write a standard for recording profile performance data so that it remains comparable over years. Specify which fields are recorded, how metric definition changes are noted, how working days and closures are recorded alongside, how seasonality is handled, which comparisons are used in reporting, and how you would present a period that is genuinely not comparable. Then design the spreadsheet structure, with the columns needed to make year-on-year comparison possible without further work.",
    success: [
      "The standard records context such as working days and closures alongside the figures.",
      "It specifies how definition changes are handled without misrepresenting them.",
      "Your spreadsheet structure makes year-on-year comparison possible without additional work."
    ]
  }
},

"9.2.3": {
  t: "Reading profile search terms data",
  why: "The search terms report tells you what people actually typed to find this specific business. No keyword tool can match that.",
  body: [
    "h: What it shows",
    "p: The performance section reports the search terms people used before your listing appeared, usually as a ranked list with approximate volumes.",
    "l: It is specific to your business and your area.|It reflects actual behaviour, not estimates.|It includes terms you never thought to target.|It includes branded searches, showing name recognition.|It is free.",

    "h: The limits",
    "warn: The data is incomplete and approximate|Terms are aggregated, low-volume terms may be grouped or omitted, and the figures are approximate. It tells you what people searched, not exhaustively and not precisely. Use it as the best available evidence about real behaviour, not as a complete census.",
    "l: Some terms are withheld or grouped.|Volumes are approximate.|The date range is limited.|It shows terms that produced an appearance, not terms where you were invisible.|It does not tell you position or whether the person clicked.",

    "h: The blind spot that matters most",
    "p: **It only shows terms where you appeared.** The searches where you are invisible produce no data at all. That means the report shows your existing visibility, not your opportunity. The opportunity analysis comes from lesson 7.5.6, not from here.",

    "h: What to extract",
    "n: **Branded versus unbranded balance**, from lesson 9.2.2.|**Terms you did not expect**, which often reveal services or phrasings you had not considered.|**Modifier terms** that are already producing appearances, which are the cheapest to strengthen.|**Customer vocabulary**, which feeds the content work in lesson 4.4.1.|**Misspellings and variations**, which indicate how people actually type.|**Competitor names**, if people search a competitor and find you.|**Problem phrasings**, from lesson 4.4.1.",
    "tip: The unexpected terms are the most valuable|Every business finds terms in this report it never considered. A plumber finds 'water meter moved'. A dentist finds 'tooth glued back'. These are real customer phrasings producing real appearances, and building content for them is low-competition work that no keyword tool would have suggested.",

    "h: Turning it into action",
    "l: Add unexpected but relevant terms to the keyword mapping from lesson 4.4.2.|Use the vocabulary in service entries, from lesson 3.1.4.|Use it in page content, from lesson 4.1.4.|Check whether terms producing appearances have a relevant page — if not, that is a quick win.|Compare the term list against your target list to find both gaps and surprises.|Export it monthly so you can see how the mix changes.",

    "h: Watching the mix change",
    "n: A rising proportion of branded searches suggests growing awareness.|A rising proportion of discovery searches suggests improving category visibility.|New terms appearing suggests expanding relevance.|Terms disappearing suggests lost visibility for those searches.|A narrowing term list is a warning sign worth investigating.",
    "ex: The term nobody had thought of|A garage's search terms report showed a meaningful number of appearances for a phrase describing a specific warning light that nobody at the business had ever considered as a search term. Building a short page explaining that warning light, what causes it and what it costs to diagnose produced a steady stream of enquiries within two months. No keyword tool had suggested it, because the volume was too low to appear in any national dataset."
  ],
  take: [
    "The search terms report shows what people actually typed to find this specific business in this specific area.",
    "The data is aggregated and approximate, and low-volume terms may be grouped or omitted.",
    "It only shows terms where you appeared, so it reveals existing visibility rather than opportunity.",
    "The unexpected terms are the most valuable, because they are real customer phrasings no keyword tool would suggest.",
    "Export it monthly and watch the mix change — a narrowing term list is a warning sign."
  ],
  self: [
    "I know what the search terms report shows and what it omits.",
    "I know that it reveals existing visibility rather than opportunity.",
    "I extract unexpected terms and customer vocabulary from it.",
    "I export it monthly and watch how the mix changes."
  ],
  quiz: [
    { q: "What is the search terms report's most important blind spot?",
      a: ["It shows too many terms", "It only shows terms where you appeared, so searches where you are invisible produce no data", "It is delayed by a year", "It only covers branded searches"],
      c: 1,
      why: "It reflects existing visibility. Opportunity analysis must come from competitor and gap research, because terms you never appear for are simply absent." },
    { q: "Why are unexpected terms in this report particularly valuable?",
      a: ["They have high volume", "They are real customer phrasings producing real appearances that no keyword tool would suggest, often with low competition", "They are branded", "They are easier to rank for than any other term"],
      c: 1,
      why: "Local volumes are frequently too low to appear in national keyword datasets, so these terms are both genuine and largely unclaimed." },
    { q: "A business's search term list narrows over several months. What does this suggest?",
      a: ["Improved focus", "Lost visibility for searches it previously appeared for, which is worth investigating", "Better data quality", "Nothing"],
      c: 1,
      why: "Fewer terms producing appearances means the listing is matching fewer searches, which usually indicates a relevance or competitive change." }
  ],
  ex: {
    title: "Mine the search terms report",
    time: "35 minutes",
    intro: "You will extract information no keyword tool could give you.",
    steps: [
      "Open the search terms data for your practice business and record every term listed.",
      "Categorise each as branded, category, modifier, problem phrasing or other.",
      "Calculate the branded versus unbranded balance.",
      "Identify every term you had not considered.",
      "For each unexpected term, check whether a relevant page or service entry exists.",
      "Write a list of three quick wins from terms producing appearances with no supporting content."
    ],
    deliver: "A categorised search terms analysis with unexpected terms identified and three quick wins listed."
  },
  chal: {
    title: "Build the search terms monitoring routine",
    brief: "Design a routine that extracts maximum value from the search terms report every month. Specify what is recorded, how the mix is tracked over time, how new and disappearing terms are flagged, how unexpected terms are assessed for content potential, and how the findings feed into the keyword mapping from lesson 4.4.2. Then run it for your practice business and produce the first month's output, including any term that would justify new content.",
    success: [
      "The routine tracks the mix over time, not just the current list.",
      "It flags both new and disappearing terms.",
      "You produced a real first month's output including at least one content justification."
    ]
  }
},

"9.2.4": {
  t: "Search Console for local pages",
  why: "Search Console measures your website's performance in search, which is the half of local visibility the profile data cannot see.",
  body: [
    "h: What Search Console provides",
    "term: Search Console|A free Google service reporting how your website performs in search: which queries produce impressions and clicks, which pages, average positions, and technical issues.",
    "n: **Query data.** What people searched before your pages appeared.|**Page data.** Which of your pages appear and for what.|**Position data.** Average position for each query and page.|**Click and impression counts.**|**Device and country breakdowns.**|**Indexing status**, showing whether pages are in the index at all.|**Technical reports** including structured data errors, from lesson 4.3.5.",

    "h: Why it matters for local",
    "l: Your website reaches areas the Local Pack cannot, from lesson 7.2.5, and this is where you measure that.|It shows whether service and area pages are working.|It reveals queries your pages rank for that you never targeted.|It confirms whether new pages have been indexed.|It reports structured data problems.|It is the only place you can see organic local performance separately from profile performance.",

    "h: The local-specific analysis",
    "n: **Filter by page** to see how each service and area page performs individually.|**Filter by query** containing place names to see local organic performance.|**Compare periods** to see whether a new page is gaining.|**Check average position** for target terms, remembering that this is averaged across locations and is therefore a summary, not a fact about any point.|**Check impressions versus clicks**, which is the organic equivalent of the actions ratio.",
    "warn: Average position in Search Console is an average|It combines results across locations, devices and times. A page with an average position of 8 might be second in one area and twentieth in another. Treat it as a trend indicator rather than a ranking, for exactly the reasons set out in lesson 9.1.1.",

    "h: The most useful local reports",
    "table: Report ; What it answers || Queries filtered by place name ; Is our local organic content working? || Pages filtered to service pages ; Is each service page gaining impressions and clicks? || Pages filtered to area pages ; Are the area pages reaching the intended areas? || Queries with impressions but few clicks ; Are our titles and descriptions compelling? || Indexing status for new pages ; Has the new page been indexed at all? || Structured data reports ; Is our markup valid site-wide?",
    "tip: Check indexing before diagnosing anything else|A new service page that is not indexed cannot rank, and it is the most common reason a new page produces nothing. Confirming indexing takes thirty seconds and eliminates the simplest explanation before you investigate anything more complex.",

    "h: Setting it up",
    "n: Verify ownership of the website, which also enables the Search Console verification option in lesson 2.4.1.|Submit a sitemap.|Confirm that the important pages are indexed.|Set up regular checking.|Export data periodically, since the retained history is limited.",

    "h: Using it with profile data",
    "p: The two data sources answer different questions and are strongest together:",
    "l: Profile data: how the listing performed.|Search Console: how the website performed.|Together they show whether the business is visible through both routes, from lesson 1.1.2.|A business strong in one and weak in the other has a specific, identifiable gap.|Lesson 9.2.5 covers connecting them properly.",
    "ex: The page that was never indexed|A business built a thorough service page and saw no results after three months. Search Console showed the page had never been indexed, because it was not linked from anywhere and was not in the sitemap. Adding internal links, from lesson 7.5.5, and submitting it produced indexing within days and first-page positions within six weeks. Three months had been lost to a thirty-second check nobody had run."
  ],
  take: [
    "Search Console reports how your website performs in search, which the profile data cannot see.",
    "It shows queries, pages, positions, clicks, impressions, indexing status and technical issues, all free.",
    "Average position in Search Console combines locations and devices — treat it as a trend indicator, not a ranking.",
    "Check indexing before diagnosing anything else, because an unindexed page is the commonest reason new content produces nothing.",
    "Profile data and Search Console answer different questions and are strongest used together."
  ],
  self: [
    "I know what Search Console provides and why it matters for local.",
    "I can run the local-specific analyses by page and by query.",
    "I treat average position as a trend indicator rather than a ranking.",
    "I check indexing first when a new page produces nothing."
  ],
  quiz: [
    { q: "A new service page produces no results after three months. What should you check first?",
      a: ["The content quality", "Whether the page has been indexed at all", "The competitor pages", "The review count"],
      c: 1,
      why: "An unindexed page cannot rank, it is the commonest cause of new content producing nothing, and the check takes thirty seconds." },
    { q: "How should Search Console average position be interpreted?",
      a: ["As the page's actual ranking", "As an average across locations, devices and times — a trend indicator rather than a fact about any point", "As the best position achieved", "As identical to Local Pack position"],
      c: 1,
      why: "It combines results across many contexts, so a page averaging position 8 might be second in one area and twentieth in another." },
    { q: "What does Search Console show that profile performance data cannot?",
      a: ["Call volumes", "How the website performs in search, including which pages and queries produce impressions and clicks", "Direction requests", "Review counts"],
      c: 1,
      why: "The two cover different properties. Profile data covers the listing; Search Console covers the website, which reaches areas the Local Pack cannot." }
  ],
  ex: {
    title: "Run the local Search Console analysis",
    time: "35 minutes",
    intro: "You will measure the half of local visibility the profile cannot show.",
    steps: [
      "Confirm Search Console is set up for your practice business's website, and set it up if not.",
      "Check the indexing status of every service and area page.",
      "Filter queries to those containing place names and record the top twenty.",
      "Filter pages to your service pages and record impressions, clicks and average position for each.",
      "Identify any page with impressions but very few clicks.",
      "Write three findings and the action each implies."
    ],
    deliver: "A local Search Console analysis covering indexing, local queries, page performance and three actionable findings."
  },
  chal: {
    title: "Build the website measurement routine",
    brief: "Design a monthly Search Console routine for local businesses. Specify what is checked, in what order, what is recorded, what triggers investigation, how new pages are monitored after publication, how structured data errors are handled, and how the findings connect to the profile data. Then specify the additional checks performed after any website change or redesign, since that is when most problems appear, as lesson 4.3.5 established.",
    success: [
      "The routine specifies an order and what triggers investigation, not just a list of reports.",
      "It includes specific monitoring for newly published pages.",
      "It includes a post-redesign check sequence."
    ]
  }
},

"9.2.5": {
  t: "Connecting profile data, Search Console and analytics",
  why: "Each source shows part of the picture. Connecting them is what allows you to follow a customer from search to enquiry.",
  body: [
    "h: The three sources",
    "n: **Profile performance data.** What happened on the listing.|**Search Console.** What happened in search for the website.|**Website analytics.** What happened on the website after arrival.",
    "p: Together they cover the whole path from search to enquiry, which no single source does.",

    "h: What each answers",
    "table: Question ; Source || How many people saw our listing? ; Profile data || How many called from the listing? ; Profile data || How many clicked through to the website from the listing? ; Profile data, and analytics if tagged || What did people search before finding our website? ; Search Console || Which pages produce organic traffic? ; Search Console and analytics || What did visitors do on the website? ; Analytics || How many enquiries came from each channel? ; Analytics, with goals configured || Which channel produces the most customers? ; Analytics plus your own records",

    "h: The connection points",
    "l: **Tagged listing links.** Tagging the website, appointment and menu links lets analytics identify listing-driven visits, from lesson 2.3.6.|**Search Console linked to analytics**, which brings query data alongside behaviour data.|**Consistent date ranges**, so figures can be compared.|**Goals or conversions configured** in analytics, so enquiries are counted, from lesson 9.3.3.|**Your own record** of what happened offline, since calls and visits do not appear in analytics.",
    "warn: Without tagged links the connection breaks|Untagged listing links appear in analytics as generic traffic, usually grouped with organic or direct. The result is that profile-driven website visits are invisible, and local SEO appears to produce less than it does. Tagging takes ten minutes and is the single most important connection step.",

    "h: Building the combined view",
    "n: Record profile views and interactions monthly.|Record Search Console impressions, clicks and top queries monthly.|Record analytics sessions, sources and conversions monthly.|Record tagged listing traffic separately.|Record offline enquiries where possible: calls answered, walk-ins, bookings.|Put them in one sheet, one row per month.",
    "tip: One sheet, one row per month|The combined monthly record is the single most useful measurement artefact in local SEO. It takes fifteen minutes a month to maintain and it answers almost every question anyone will ask, including the ones that arrive two years later about what happened in a particular period.",

    "h: What the combined view reveals",
    "l: Whether visibility gains produced interaction gains.|Whether website traffic from the listing converts differently from other traffic.|Whether a ranking change affected enquiries at all.|Which channel produces the most enquiries per unit of effort.|Whether a drop in one source appears in the others, which distinguishes a real change from a measurement artefact.|Seasonality across all channels at once.",

    "h: The gaps that remain",
    "n: Phone calls that do not go through a tracked route.|Walk-in customers.|Word of mouth generated by online visibility.|Customers who researched online and bought offline weeks later.|Anything where the customer did not tell you how they found you.",
    "p: These gaps are real and permanent. The honest position is that measurement covers most but not all, which is covered fully in lesson 9.3.5.",
    "ex: The invisible channel|A business's analytics showed almost no traffic attributable to its Google listing, and the owner concluded local SEO was not working. The listing links had never been tagged. Adding tags revealed that listing-driven visits were the largest single source of website enquiries. Nothing about the business changed; the measurement had simply been blind to its best channel."
  ],
  take: [
    "Profile data, Search Console and analytics each cover part of the path from search to enquiry.",
    "Tagging listing links is the single most important connection step, and takes ten minutes.",
    "Without tagging, profile-driven website visits are invisible and local SEO appears to produce less than it does.",
    "Maintain one sheet with one row per month combining all three sources plus offline enquiries.",
    "Gaps remain — untracked calls, walk-ins, word of mouth and delayed purchases — and the honest position acknowledges them."
  ],
  self: [
    "I know which source answers which question.",
    "I know that untagged listing links make the best channel invisible.",
    "I maintain a combined monthly record across all sources.",
    "I acknowledge the permanent measurement gaps honestly."
  ],
  quiz: [
    { q: "What happens to profile-driven website visits when listing links are untagged?",
      a: ["They are counted correctly", "They appear as generic organic or direct traffic, making the listing's contribution invisible", "They are not counted at all", "They are counted twice"],
      c: 1,
      why: "Without tagging there is no way to distinguish them, so the channel that may be producing the most enquiries appears to produce none." },
    { q: "What is the most useful single measurement artefact in local SEO?",
      a: ["A ranking report", "A combined monthly record with one row per month covering profile, Search Console, analytics and offline enquiries", "A keyword list", "A competitor analysis"],
      c: 1,
      why: "It answers almost every question that will be asked, including those arriving years later, and takes about fifteen minutes a month to maintain." },
    { q: "Which of these remains permanently outside measurement?",
      a: ["Website clicks from the listing", "Word of mouth generated by online visibility", "Organic search impressions", "Direction requests"],
      c: 1,
      why: "Recommendations passed between people leave no digital trace, along with walk-ins and delayed offline purchases, which is why honest reporting acknowledges the gap." }
  ],
  ex: {
    title: "Build the combined monthly record",
    time: "40 minutes",
    intro: "You will create the artefact that answers most future questions.",
    steps: [
      "Create a spreadsheet with one row per month and columns for every source.",
      "Add profile views, calls, directions and website clicks.",
      "Add Search Console impressions, clicks and average position for the main term.",
      "Add analytics sessions, listing-attributed sessions and conversions.",
      "Add a column for offline enquiries recorded by the business.",
      "Fill in the last three months and confirm the listing links are tagged."
    ],
    deliver: "A combined monthly record populated for three months with listing links confirmed tagged."
  },
  chal: {
    title: "Connect the full path for one customer type",
    brief: "Trace the complete measurable path for one type of customer at your practice business, from the initial search to the enquiry. Identify every point where the path is measured, every point where it is not, and what would be needed to close each gap. Then estimate what proportion of the path is currently visible. Finally, specify the three changes that would most improve visibility of the path, and estimate what each would cost in setup time.",
    success: [
      "You traced a real path step by step rather than describing the sources generally.",
      "You identified specific measurement gaps and what would close each.",
      "You estimated the proportion currently visible and prioritised three improvements with setup costs."
    ]
  }
},

"9.2.6": {
  t: "Telling seasonality apart from a real drop",
  why: "Many reported problems are seasonal patterns. Distinguishing them prevents both false alarms and missed real declines.",
  body: [
    "h: Why this matters",
    "p: A drop in enquiries produces pressure to act. If the cause is seasonal, acting wastes money and sometimes causes damage, as lesson 7.1.6 established. If it is real and dismissed as seasonal, a genuine problem goes unaddressed.",

    "h: How to tell",
    "n: **Compare with the same period last year**, which is the single most reliable test.|**Check whether competitors also declined**, which indicates a market effect.|**Check whether rankings changed**, which distinguishes a demand change from a visibility change.|**Check working days and holidays** in both periods.|**Check whether the decline matches a known pattern** for this industry.|**Check whether all channels declined together**, which indicates demand rather than a channel problem.",
    "tip: The diagnostic distinction|If rankings are stable and enquiries fell, demand probably fell. If rankings fell and enquiries fell, visibility probably caused it. If rankings are stable, enquiries fell and competitors also fell, it is almost certainly the market. Those three checks resolve most cases in ten minutes.",

    "h: Typical seasonal patterns",
    "table: Industry ; Peak ; Trough || Heating and boilers ; Autumn and winter ; Summer || Air conditioning ; Summer ; Winter || Garden services ; Spring and summer ; Winter || Tax and accounting ; Around filing deadlines ; Immediately after || Removals and estate agency ; Spring and summer ; Midwinter || Dentistry and healthcare ; Varies, often quieter in holiday periods ; Major holiday weeks || Hospitality ; Varies by location and type ; Varies || Legal services ; Often steadier ; Holiday periods",
    "warn: Do not assume a pattern without evidence|Industry generalisations are starting points. The actual pattern for this business in this market should come from its own historical data. A business may have a seasonal pattern that differs from its industry, and assuming otherwise produces wrong conclusions.",

    "h: Building the seasonal baseline",
    "n: Use the combined monthly record from lesson 9.2.5.|After twelve months you have a first pattern.|After twenty-four months you can distinguish the pattern from noise.|Record unusual events that distorted particular months.|Use the pattern to set expectations in advance rather than explaining declines afterwards.",
    "l: A business without a year of data cannot distinguish seasonality confidently, and the honest position is to say so.",

    "h: Managing it with clients",
    "l: Forecast the seasonal low before it arrives, so it is expected rather than alarming.|Report year-on-year alongside month-on-month.|Plan work to match the pattern: build during the quiet period, defend during the peak, from lesson 3.4.4.|Set annual rather than monthly targets where seasonality is strong.|Explain that a decline against last month may be an improvement against last year.",

    "h: When it is not seasonal",
    "n: Enquiries fell and the same period last year was much stronger.|Competitors did not decline.|Rankings changed.|The decline began at a date that does not match the pattern.|One channel fell while others held.|Then it is a real problem and the diagnostic framework from lesson 7.1.2 applies.",
    "ex: The seasonal low that was not|A heating business reported a summer decline and was told it was seasonal. Comparing with the previous summer showed enquiries roughly 40 per cent lower than the equivalent period, while competitors were flat. It was not seasonality. A category change three months earlier had reduced visibility, and the seasonal explanation had delayed the diagnosis by two months."
  ],
  take: [
    "Comparing with the same period last year is the single most reliable test for seasonality.",
    "If rankings are stable and enquiries fell, demand probably fell; if rankings fell too, visibility probably caused it.",
    "Industry seasonal generalisations are starting points — the actual pattern must come from this business's own data.",
    "A business without a year of data cannot distinguish seasonality confidently, and should say so.",
    "Forecast the seasonal low before it arrives so it is expected, and plan work to build during quiet periods."
  ],
  self: [
    "I can run the six checks that distinguish seasonality from a real decline.",
    "I know the three-check shortcut that resolves most cases in ten minutes.",
    "I build a seasonal baseline from the business's own data rather than assuming the industry pattern.",
    "I forecast seasonal lows in advance rather than explaining them afterwards."
  ],
  quiz: [
    { q: "What is the single most reliable test for whether a decline is seasonal?",
      a: ["Asking the client", "Comparing with the same period last year", "Checking the review count", "Looking at the industry average"],
      c: 1,
      why: "Year-on-year comparison removes the seasonal effect entirely, which month-on-month comparison cannot do." },
    { q: "Rankings are stable, enquiries fell, and competitors also declined. What does this indicate?",
      a: ["A visibility problem", "A market or demand effect rather than anything wrong with the business", "A suspension", "A tracking error"],
      c: 1,
      why: "Stable visibility with a market-wide decline points to demand rather than to anything specific to this business." },
    { q: "A heating business declines in summer, but enquiries are 40 per cent below last summer while competitors are flat. What is this?",
      a: ["Normal seasonality", "A real problem that the seasonal explanation is concealing", "A measurement error", "Expected variation"],
      c: 1,
      why: "The comparison is against the equivalent seasonal period, and competitors did not decline. The seasonal explanation is false and is delaying diagnosis." }
  ],
  ex: {
    title: "Build the seasonal baseline",
    time: "30 minutes",
    intro: "You will establish the pattern that prevents false alarms.",
    steps: [
      "Gather twelve months of enquiry or interaction data for your practice business if available.",
      "Plot it by month.",
      "Identify the apparent peak and trough.",
      "Note the number of working days and any unusual events in each month.",
      "Check whether the pattern matches the industry generalisation or differs.",
      "Write the forecast for the next six months, including the expected low."
    ],
    deliver: "A twelve-month seasonal baseline with peak and trough identified and a forward forecast."
  },
  chal: {
    title: "Write the seasonality protocol",
    brief: "Write the protocol for handling any reported decline. Specify the checks in order, the evidence required to conclude seasonality, the evidence required to conclude a real problem, what to do when there is insufficient history to tell, how you would communicate a seasonal explanation without sounding dismissive, and how you would avoid the trap of using seasonality to explain a real decline. Then write the annual forecast document you would give a client at the start of each year.",
    success: [
      "The protocol requires evidence for a seasonal conclusion rather than accepting it as a default.",
      "It addresses the insufficient-history case explicitly.",
      "The annual forecast sets expectations in advance rather than explaining declines afterwards."
    ]
  }
},

"9.2.7": {
  t: "Building a monitoring dashboard",
  why: "A dashboard turns scattered data into something someone actually looks at every month. That is the difference between measurement and reporting.",
  body: [
    "h: What a dashboard is for",
    "l: Making the important figures visible without effort.|Catching problems early, from lesson 3.4.6.|Showing the client what is happening.|Providing the history that future diagnosis depends on.|Reducing the time spent assembling reports.",
    "warn: A dashboard nobody opens is worse than a spreadsheet somebody maintains|Elaborate dashboards are built, admired briefly and abandoned. The version that survives is the one that is simple enough to maintain and useful enough to be consulted. Build the version you will actually use every month.",

    "h: What to include",
    "n: **Grid summary.** Top three percentage and one trend metric, from lesson 9.1.5.|**Profile interactions.** Calls, directions, website clicks, with the actions ratio.|**Search Console.** Impressions, clicks and average position for the main terms.|**Website conversions.** Enquiries from each channel, from module 3.|**Reviews.** Count, rating, velocity, from lesson 5.1.2.|**Competitor snapshot.** Their review counts and top three percentage.|**Annotations.** What was done, with dates.",

    "h: What to leave out",
    "l: Metrics nobody acts on.|Five ranking metrics where two suffice.|Vanity figures such as total impressions without context.|Anything requiring explanation every time it is seen.|Data that cannot be maintained consistently.",

    "h: The minimum viable dashboard",
    "table: Row ; Source ; Time to update || Top three percentage ; Grid ; 2 minutes || Calls and direction requests ; Profile data ; 2 minutes || Website clicks from listing ; Profile data or analytics ; 2 minutes || Website enquiries ; Analytics ; 2 minutes || Review count and rating ; Listing ; 1 minute || Competitor review count ; Competitor listing ; 2 minutes || What we did this month ; Your change log ; 3 minutes",
    "p: Fourteen minutes a month. That is the version that survives.",
    "tip: Build the fourteen-minute version first|Once it has run for six months and proved useful, add to it if genuinely needed. Almost nobody regrets starting simple. A great many people abandon elaborate dashboards in month three and lose the history entirely.",

    "h: Format",
    "l: A spreadsheet is entirely adequate and often better than a tool.|One row per month, columns for each metric.|A chart or two for the figures that matter most.|Annotations alongside, not in a separate document.|Shared with the client if appropriate, so they can look whenever they want.",

    "h: Automation",
    "n: Automate only what is reliably automatable.|Manual entry of six figures takes minutes and never breaks.|Automated connections break silently, which is worse than manual entry.|Where automation is used, check it monthly.|Do not let automation complexity delay starting.",

    "h: Using it",
    "l: Look at it every month, not only when producing a report.|Compare against last month and the same month last year.|Investigate anything unexpected.|Add the annotation before the detail is forgotten.|Review the whole series quarterly for trends invisible month to month.",
    "ex: The dashboard that answered a two-year-old question|A client asked why their enquiries had fallen in a particular quarter two years earlier. The maintained monthly sheet showed the exact months, the ranking figures alongside, the competitor review counts, and an annotation recording a website migration in the first of those months. The question was answered in four minutes from a record that had taken about a quarter of an hour a month to keep."
  ],
  take: [
    "A dashboard makes the important figures visible, catches problems early and provides the history diagnosis depends on.",
    "Elaborate dashboards are abandoned — build the version simple enough to maintain and useful enough to consult.",
    "The minimum viable version covers grid, profile interactions, website enquiries, reviews, a competitor snapshot and annotations.",
    "Fourteen minutes a month is the version that survives; add to it only after six months of proven use.",
    "Automate only what is reliably automatable, because automated connections break silently."
  ],
  self: [
    "I know what belongs in a dashboard and what to leave out.",
    "I can build the fourteen-minute minimum viable version.",
    "I know why elaborate dashboards get abandoned.",
    "I add annotations before the detail is forgotten."
  ],
  quiz: [
    { q: "Why do elaborate dashboards usually fail?",
      a: ["They are technically difficult", "They are too time-consuming to maintain, so they are abandoned and the history is lost", "Clients dislike them", "They cost too much"],
      c: 1,
      why: "Maintenance burden is what kills them. A simple version consistently maintained produces a multi-year record that an abandoned elaborate one never does." },
    { q: "What is the risk of automating dashboard data connections?",
      a: ["They are too fast", "They break silently, which is worse than manual entry that never breaks", "They cost money", "They are inaccurate"],
      c: 1,
      why: "A broken automated connection produces missing or stale data with no warning, while manual entry of a few figures is reliable and takes minutes." },
    { q: "What makes a dashboard genuinely valuable over time?",
      a: ["The number of metrics", "Consistent maintenance producing a multi-year annotated history", "Visual design", "Automation"],
      c: 1,
      why: "The record's ability to answer questions years later, with annotations explaining what happened, is where the compounding value lies." }
  ],
  ex: {
    title: "Build the fourteen-minute dashboard",
    time: "40 minutes",
    intro: "You will build the version that will still exist in two years.",
    steps: [
      "Create a spreadsheet with one row per month.",
      "Add the seven minimum viable rows from this lesson as columns.",
      "Populate it for the current month, timing how long it takes.",
      "Add an annotations column and record what has been done this month.",
      "Add one chart for the metric that matters most.",
      "Set a monthly reminder and note the time taken."
    ],
    deliver: "A populated monthly dashboard with annotations, one chart, and a recorded update time."
  },
  chal: {
    title: "Design the portfolio dashboard",
    brief: "Design a dashboard system for someone managing twenty client businesses. Specify what is recorded per client, how it rolls up into a portfolio view, what triggers attention, who updates it, how long it takes per client and in total, what the client sees versus what you see, and how annotations are captured consistently across twenty businesses. Then calculate the total monthly time and confirm it is sustainable, cutting scope if it is not.",
    success: [
      "The system produces both per-client and portfolio views with exception triggers.",
      "You calculated the realistic total monthly time.",
      "You cut scope where the time proved unsustainable rather than assuming it would be done."
    ]
  }
}

});
