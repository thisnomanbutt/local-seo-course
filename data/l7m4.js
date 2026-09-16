/* Level 7 · Module 4 — Diagnosing Prominence and Review Gaps */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"7.4.1": {
  t: "Case: '500 reviews but a competitor with 80 beats us'",
  why: "This case destroys the assumption that review count decides rankings, and teaches you to decompose prominence properly.",
  body: [
    "h: The case",
    "story: The complaint|'We have 512 reviews at 4.7 stars. The business ranking above us has 80 reviews at 4.6. We have been in business for twenty years and they opened four years ago. How is this possible? Are they doing something they should not be?'",

    "h: Step 1: define the symptom",
    "l: **What:** Local Pack position for the main service term.|**Where:** Needs establishing — at which points does the competitor outrank them?|**When:** Establish whether this is a change or a long-standing state.|**How much:** From what position to what position.",
    "warn: The first question is almost always unasked|'Where?' If the competitor is closer to the measurement point, the entire question may dissolve. Before investigating prominence at all, check the distances. This resolves a meaningful share of these cases in two minutes.",

    "h: Step 2: generate hypotheses",
    "n: **Distance.** The competitor is closer to the measurement points.|**Relevance.** Their category matches the search more precisely than ours.|**Other prominence components.** Reviews are one part; links, mentions and authority are others.|**Review quality factors.** Velocity, recency and distribution, not just count.|**Website strength.** Theirs may be substantially stronger for this term.|**Something is wrong on our side.** A duplicate, a filtered listing, a technical problem.|**Spam.** Possible, but the last hypothesis, not the first.",
    "tip: Never start with 'they must be cheating'|It is the most emotionally satisfying hypothesis and the least often correct. Investigate every legitimate explanation first. If you conclude spam without eliminating the alternatives, you will usually be wrong, and you will have wasted the investigation.",

    "h: Step 3: the decomposition",
    "p: Compare the two businesses across every prominence component, not just reviews:",
    "table: Component ; Us ; Them ; Who wins || Review count ; 512 ; 80 ; Us || Review rating ; 4.7 ; 4.6 ; Us || Reviews in last 90 days ; ? ; ? ; ? || Most recent review ; ? ; ? ; ? || Referring domains ; ? ; ? ; ? || Local organisation links ; ? ; ? ; ? || Distance from measurement point ; ? ; ? ; ? || Primary category match ; ? ; ? ; ? || Dedicated page for this term ; ? ; ? ; ? || Website strength ; ? ; ? ; ?",

    "h: What this usually reveals",
    "p: In the large majority of these cases, one or more of the following is true:",
    "l: The competitor is meaningfully closer to where the ranking was checked.|The competitor's category is a more precise match for the search.|The competitor has a dedicated, thorough page for that exact service and the client does not.|The client's 512 reviews arrived over fifteen years and eleven arrived last year, while the competitor gained forty in the last ninety days.|The competitor has fourteen local links and the client has three generic directory listings.|The client has a duplicate listing splitting its signals.",
    "ex: The typical resolution|Decomposition showed the competitor was 900 metres from the check point against the client's 2.8 kilometres, used a more specific category, had a dedicated page for the searched service, and had gained thirty-one reviews in ninety days against the client's four. The client's 512 reviews were real and valuable, and they were not enough to overcome four separate disadvantages. Nobody was cheating.",

    "h: The lesson about review count",
    "box: **Review count is one component of one force. It is not a ranking system.**",
    "p: A large count built over many years, with low recent velocity, is a weaker signal than it appears. It says the business has been around, not that it is currently the most relevant, closest or most active option.",

    "h: Step 4: conclude and act",
    "n: State which specific components the competitor wins on.|Identify which of those are addressable.|Identify which are structural, such as distance.|Build the plan around the addressable gaps.|If a review velocity gap exists, that is usually the first fix, because it is directly controllable.",
    "p: Lesson 7.4.6 builds the catch-up plan in full."
  ],
  take: [
    "Check distance before investigating prominence — a closer competitor resolves a meaningful share of these cases immediately.",
    "Review count is one component of one force, not a ranking system.",
    "A large count built slowly with low recent velocity is weaker than it appears.",
    "Decompose across every component: velocity, recency, links, category precision, dedicated pages and website strength.",
    "Never begin with the assumption that the competitor is cheating — it is the most satisfying hypothesis and the least often correct."
  ],
  self: [
    "I check distance before investigating prominence in this case.",
    "I can decompose a competitor's prominence across ten components.",
    "I understand why a large old review count can be a weak current signal.",
    "I investigate legitimate explanations before considering spam."
  ],
  quiz: [
    { q: "A business with 512 reviews is outranked by one with 80. What should you check first?",
      a: ["Whether the competitor is buying reviews", "The distance of each business from the point where the ranking was checked", "The competitor's website design", "The review wording"],
      c: 1,
      why: "Distance is the dominant force and the cheapest thing to check. A closer competitor explains the result completely and resolves many of these cases immediately." },
    { q: "Why can 512 reviews built over fifteen years be a weaker signal than 80 built over four?",
      a: ["Old reviews expire", "Velocity and recency matter — a business gaining forty reviews in ninety days is currently far more active than one gaining eleven a year", "Google deletes old reviews", "Rating matters more than count"],
      c: 1,
      why: "Count reflects history; velocity and recency reflect the present. Customers and Google both respond to what the business looks like now." },
    { q: "Why should 'they must be cheating' be the last hypothesis rather than the first?",
      a: ["Cheating never happens", "It is emotionally satisfying and least often correct — investigating it first wastes the investigation", "It is illegal to investigate", "Google forbids reporting"],
      c: 1,
      why: "Most of these cases have legitimate explanations across distance, relevance and other prominence components. Concluding spam prematurely usually means being wrong." }
  ],
  ex: {
    title: "Decompose a competitor's prominence",
    time: "45 minutes",
    intro: "You will work the full case on a real competitor.",
    steps: [
      "Identify a competitor outranking your practice business despite appearing weaker on an obvious measure.",
      "Measure the distance of each business from the point where you check rankings.",
      "Build the ten-row comparison table from this lesson.",
      "Fill in every row for both businesses.",
      "Identify every component the competitor wins on.",
      "Classify each as addressable or structural."
    ],
    deliver: "A completed ten-component decomposition with each competitor advantage classified as addressable or structural."
  },
  chal: {
    title: "Write the client explanation",
    brief: "Write the explanation you would give the client in this case. It must acknowledge that their review count is genuinely impressive, explain without condescension why it is not sufficient on its own, present the specific components the competitor wins on with the evidence, separate what can be changed from what cannot, and end with a plan. It must not leave them feeling that twenty years of work was wasted. Keep it under 400 words.",
    success: [
      "You acknowledged the value of their review base before explaining its limits.",
      "Every competitor advantage is stated with evidence rather than asserted.",
      "The explanation separates addressable from structural and ends with a plan."
    ]
  }
},

"7.4.2": {
  t: "Taking a competitor's prominence apart piece by piece",
  why: "Competitor analysis is usually superficial. This lesson gives you the method that produces a genuinely useful picture.",
  body: [
    "h: What most competitor analysis misses",
    "l: It counts reviews and stops.|It looks at one keyword and one location.|It records totals without composition.|It does not distinguish what is copyable from what is not.|It produces a report rather than a decision.",

    "h: The full decomposition",
    "n: **Identity.** Category, name, business model, how long established.|**Position.** Grid positions across the area, not one point.|**Distance.** From each measurement point.|**Reviews.** Count, rating, velocity, recency, distribution, what they mention.|**Links.** Count, and composition by type: local organisations, industry bodies, suppliers, media, directories.|**Mentions.** Total name occurrences across the web.|**Website.** Pages for each service, depth, whether it has area pages, structured data.|**Profile completeness.** Photos, posts, services, attributes, questions answered.|**Engagement signals.** Photo counts, question activity, response rates.|**Real-world presence.** Memberships, sponsorships, accreditations, media coverage.",

    "h: Composition matters more than totals",
    "table: Measure ; Superficial reading ; Useful reading || Reviews ; 'They have 80' ; '80, gaining 31 in 90 days, 60 per cent mentioning the specific service' || Links ; 'They have 14' ; '14, of which 9 are local organisations and 3 are suppliers' || Website ; 'They have a website' ; 'Dedicated page for each of six services, plus four area pages' || Profile ; 'It looks complete' ; '94 photos, 41 added this year, all services listed, 12 questions answered'",
    "tip: The composition question|For every total you record, ask 'made of what?' A competitor's fourteen links and your fourteen links can represent completely different positions. The composition is where the actionable information is, and it is what almost nobody records.",

    "h: Classifying their advantages",
    "p: Every advantage falls into one of three groups, and the classification determines your strategy:",
    "l: **Structural.** Cannot be changed: their location, how long they have existed, their size.|**Accumulated.** Could be matched over time: reviews, links, mentions, content.|**Configurable.** Could be matched immediately: category, services, attributes, profile completeness.",
    "warn: Fix the configurable first|If a competitor wins partly because their category is more precise and their profile is complete, those are free to match. Chasing their accumulated advantages while leaving configurable gaps open is the most common sequencing error in competitive work.",

    "h: What to do with structural advantages",
    "n: Accept them explicitly.|Calculate what would be needed to compensate, using the trade framework from lesson 1.2.5.|If compensation is realistic, plan it.|If not, say so and focus where you can win.|Consider whether a structural response is warranted, such as a second location.",

    "h: Doing this for more than one competitor",
    "p: Analysing three competitors reveals what the market rewards, not just what one business does:",
    "l: What do all three have that you do not? That is likely a requirement.|What does only one have? That may be their particular strength rather than a market standard.|What do none of them have? That may be an opportunity.|Where do they differ most from each other? That indicates what is optional.",
    "ex: The pattern across three|All three leading competitors had dedicated service pages, more than ten local links, and review velocity above twenty a quarter. None had area pages or answered questions on their profile. The client matched none of the three requirements and could easily claim both opportunities. That analysis produced a six-item plan in ninety minutes, and every item was justified by evidence rather than assumption."
  ],
  take: [
    "Full decomposition covers identity, position, distance, reviews, links, mentions, website, profile, engagement and real-world presence.",
    "Composition matters more than totals — for every number, ask what it is made of.",
    "Classify every competitor advantage as structural, accumulated or configurable.",
    "Fix the configurable gaps first; chasing accumulated advantages while leaving free ones open is the common sequencing error.",
    "Analysing three competitors reveals what the market requires, what is optional, and what nobody has claimed."
  ],
  self: [
    "I can run a ten-part competitor decomposition.",
    "I record composition rather than only totals.",
    "I classify advantages as structural, accumulated or configurable.",
    "I analyse three competitors to distinguish market requirements from individual strengths."
  ],
  quiz: [
    { q: "Why does link composition matter more than link count?",
      a: ["Counts are hard to measure", "Fourteen local organisation links represent a completely different position from fourteen generic directory listings", "Google counts types separately", "Composition is easier to find"],
      c: 1,
      why: "Local relevance is what local prominence rewards. Identical totals can conceal entirely different compositions, and composition is where the actionable information is." },
    { q: "Which competitor advantages should you address first?",
      a: ["Structural ones", "Configurable ones, such as category precision and profile completeness, because they are free to match", "Accumulated ones", "Whichever is largest"],
      c: 1,
      why: "Configurable gaps cost nothing but time to close. Chasing accumulated advantages while leaving free gaps open is the most common sequencing error." },
    { q: "What does analysing three competitors reveal that analysing one cannot?",
      a: ["Nothing extra", "What the market requires, what is optional, and what nobody has claimed", "Their revenue", "Their marketing budget"],
      c: 1,
      why: "A feature all three share is likely a requirement; one unique to a single competitor may be their particular strength; something none has may be an opportunity." }
  ],
  ex: {
    title: "Decompose three competitors",
    time: "60 minutes",
    intro: "You will produce a picture of what your market actually rewards.",
    steps: [
      "Select the three businesses ranking highest for your practice business's main term.",
      "Run the ten-part decomposition for each, recording composition not just totals.",
      "Add your practice business as a fourth column.",
      "Identify what all three have that you do not.",
      "Identify what none of them has.",
      "Classify every gap as structural, accumulated or configurable."
    ],
    deliver: "A four-column decomposition across ten components with gaps classified and market requirements identified."
  },
  chal: {
    title: "Build the evidence-based plan",
    brief: "Turn your three-competitor decomposition into a plan. Start with every configurable gap, since those are free. Then the accumulated gaps, in order of how much they appear to matter in this market. Then state plainly what is structural and what you will do about it. For each item, state the evidence that justifies it — which competitors have it and what that suggests. Finally, identify the unclaimed opportunity nobody in the market has taken and say whether it is worth pursuing.",
    success: [
      "Every item in the plan is justified by specific competitor evidence, not assumption.",
      "Configurable gaps come first and structural constraints are stated plainly.",
      "You assessed the unclaimed opportunity rather than only closing gaps."
    ]
  }
},

"7.4.3": {
  t: "Review quality versus review quantity",
  why: "Two businesses with the same review count can be in very different positions. Understanding quality dimensions makes your analysis far more accurate.",
  body: [
    "h: The dimensions beyond count",
    "n: **Velocity.** Rate of arrival, from lesson 5.1.2.|**Recency.** When the most recent arrived.|**Distribution.** How the ratings are spread, not just the average.|**Depth.** Whether reviews contain substantial text or are ratings only.|**Specificity.** Whether they describe particular services.|**Reviewer profile.** Whether reviewers have review histories or are single-review accounts.|**Response rate.** What proportion have owner replies.|**Spread across platforms.**",

    "h: Why each matters",
    "table: Dimension ; Why it matters || Velocity ; Signals an actively operating business; a leading indicator of future count || Recency ; Customers read recent reviews; stale profiles look inactive || Distribution ; The same average can hide a pattern of one-star reviews || Depth ; Substantive reviews persuade; rating-only reviews do not || Specificity ; Enables justifications and answers specific customer doubts || Reviewer profile ; A profile of single-review accounts looks different from established reviewers || Response rate ; Signals attentiveness and is visible to every reader || Platform spread ; Resilience and reach, from lesson 5.1.4",

    "h: Reading a profile properly",
    "p: Two examples with identical counts and averages:",
    "l: **Profile A:** 120 reviews, 4.6 average. 38 in the last quarter. Most recent yesterday. Mostly five stars with a few fours. Average length two sentences, many naming specific services and staff. 96 per cent have owner responses.|**Profile B:** 120 reviews, 4.6 average. Two in the last quarter. Most recent four months ago. Mostly fives with fourteen ones. Most are ratings only with no text. No owner responses.",
    "p: These are entirely different businesses. Profile B has an active service problem, no acquisition system, and a visible pattern of failures that any reader will notice.",
    "tip: Read the one-star reviews first|The average tells you almost nothing. Reading the low-rated reviews tells you whether the business has a recurring operational failure, a handful of unreasonable customers, or something worse. It takes five minutes and changes the entire diagnosis.",

    "h: Quality signals that concern you",
    "warn: Patterns worth investigating|Many single-review accounts arriving close together. Reviews with similar phrasing. A large cluster arriving on one day after a long gap. Reviewers whose other reviews are all in a different country. Reviews describing services the business does not offer. None of these proves anything individually, but a combination is worth noting — and it belongs in the spam analysis of Level 8 module 1, not in an accusation.",

    "h: Using quality in a competitive comparison",
    "n: Record all eight dimensions for each business, not just count and rating.|Identify where the difference actually lies.|A competitor with a lower count but far higher velocity is gaining, and the comparison will look different in six months.|A competitor with a similar count and no recent reviews is stalling.|A competitor with high specificity is earning justifications you are not.",

    "h: Improving quality rather than only quantity",
    "l: Velocity: build the system from lesson 5.2.1.|Recency: keep asking continuously rather than in bursts.|Depth and specificity: time the ask to the job, from lesson 5.2.2.|Response rate: reply to everything, from lesson 5.3.1.|Distribution: fix the operational causes of the low ratings, from lesson 5.4.4.",
    "ex: The stalled leader|A client was behind on count by 90 reviews and concluded it was hopeless. Quality analysis showed the competitor had gained three reviews in the last six months while the client was gaining nine a month, and the competitor's most recent eleven reviews included four one-stars describing the same staffing problem. The client was not behind. It was overtaking, and the comparison in twelve months would look completely different."
  ],
  take: [
    "Review quality has eight dimensions beyond count: velocity, recency, distribution, depth, specificity, reviewer profile, response rate and platform spread.",
    "Two profiles with identical count and average can represent entirely different businesses.",
    "Read the one-star reviews first — the average tells you almost nothing about what is happening.",
    "A competitor with lower count but higher velocity is gaining, and the comparison will look different in six months.",
    "Improve quality through timing, responding and fixing operational causes, not only through asking more people."
  ],
  self: [
    "I can list the eight quality dimensions beyond count.",
    "I read low-rated reviews before judging a profile.",
    "I can tell a gaining competitor from a stalling one.",
    "I know how to improve each quality dimension specifically."
  ],
  quiz: [
    { q: "Two profiles both show 120 reviews at 4.6. What could make them entirely different?",
      a: ["Nothing, they are equivalent", "Velocity, recency, distribution, depth, specificity and response rate can all differ dramatically", "Only the business names", "The platform they are on"],
      c: 1,
      why: "One may be gaining 38 reviews a quarter with detailed recent reviews and full responses; the other may be stalled with a cluster of one-stars. The headline numbers hide all of it." },
    { q: "What should you read first when assessing a review profile?",
      a: ["The five-star reviews", "The one-star and two-star reviews", "The average rating", "The review count"],
      c: 1,
      why: "Low-rated reviews reveal whether there is a recurring operational failure, which changes the entire diagnosis and cannot be seen in the average." },
    { q: "A competitor has 90 more reviews but gained three in six months while you gained nine a month. What is the real situation?",
      a: ["You are hopelessly behind", "You are overtaking them, and the comparison will look very different in twelve months", "Counts are all that matter", "They have stopped trading"],
      c: 1,
      why: "Velocity is the leading indicator. A stalled competitor with a larger total is being caught, and the trajectory matters more than the current snapshot." }
  ],
  ex: {
    title: "Compare review quality, not just quantity",
    time: "40 minutes",
    intro: "You will produce a far more accurate picture than a count comparison.",
    steps: [
      "Record all eight quality dimensions for your practice business.",
      "Do the same for the two strongest competitors.",
      "Read every one-star and two-star review for all three and note the themes.",
      "Calculate velocity for each over the last quarter.",
      "Identify which business is gaining and which is stalling.",
      "State where the real difference lies, which may not be the count."
    ],
    deliver: "An eight-dimension quality comparison across three businesses with low-rating themes and a trajectory assessment."
  },
  chal: {
    title: "Project the twelve-month comparison",
    brief: "Using the velocity figures from your quality comparison, project all three businesses forward twelve months on count, and estimate how recency and distribution would evolve if current patterns continue. Then identify what would have to change for the projection to be wrong. Finally, write the two-paragraph summary you would give a client who currently believes the gap is hopeless, using the trajectory rather than the snapshot.",
    success: [
      "Your projection covers all three businesses and includes recency and distribution, not only count.",
      "You identified what would invalidate the projection.",
      "Your client summary uses trajectory evidence to change the framing honestly, not just to reassure."
    ]
  }
},

"7.4.4": {
  t: "Link and authority gaps",
  why: "When reviews do not explain a competitor's advantage, links usually do. This lesson finds and quantifies that gap.",
  body: [
    "h: What to measure",
    "n: **Referring domains.** How many distinct websites link to them, which matters far more than total link count.|**Composition by type.** Local organisations, industry bodies, suppliers, media, community, directories.|**Locality.** How many links come from sites in their actual area.|**Relevance.** How many come from sites in their industry.|**Page-level links.** Which of their pages attract links, since a strong service page matters more than a strong homepage.|**Growth rate.** How many acquired recently.",
    "term: Referring domain|A distinct website that links to you. Ten links from one site count as one referring domain, which is why it is the more meaningful measure.",

    "h: Doing it without paid tools",
    "l: Free tools usually show a sample of referring domains, which is often enough for a comparison.|Searching the competitor's name in quotation marks reveals most local and industry links, as lesson 6.4.4 established.|Searching their name plus 'sponsor', plus the area name, or plus 'member' surfaces community and association links.|Checking their website footer and about page reveals memberships and accreditations they display.|Local news sites can be searched directly for their name.",

    "h: Reading the gap",
    "table: Finding ; Interpretation ; Action || They have far more referring domains ; A genuine authority gap ; Build links, from Level 6 module 3 || Similar counts, different composition ; A relevance gap, not a volume gap ; Build local and industry links specifically || They have links to their service pages, you have links only to your homepage ; A page-level gap ; Build content worth linking to, from lesson 6.4.2 || They gained twelve links last year, you gained none ; A momentum gap ; Start the programme; the gap is widening || You have more links but rank lower ; Links are not the constraint ; Investigate distance, relevance or a technical problem",
    "tip: Page-level links are the overlooked measure|Two businesses can have similar domain-level authority while one has fifteen links pointing at its main service page and the other has none. For ranking a specific service term, that difference matters enormously and almost nobody checks it.",

    "h: Quantifying the gap honestly",
    "n: State the difference in referring domains.|State the difference in local and industry links specifically.|State the difference in growth rate.|Estimate what closing it would require at a realistic acquisition rate, from lesson 6.3.1.|Model the competitor continuing to gain.|State the resulting timeline.",
    "warn: The timeline is often uncomfortable|If a competitor has eighteen local links and the business has three, and a realistic rate is one a month, that is fifteen months before parity — during which they will also gain some. Saying this honestly is far better than implying a faster result and failing to deliver it.",

    "h: What is actually copyable",
    "p: Examine each of their links and ask whether you could obtain something equivalent:",
    "l: A supplier page listing — yes, if you use that supplier, and immediately.|A trade body directory — yes, if you qualify.|A chamber membership — yes, at a cost.|A sponsorship of a club you have no connection with — possible but weak, from lesson 6.3.6.|A local news article about something they did — not directly, but you could do something newsworthy.|A link from a business the owner's family runs — no.",
    "ex: The copyable half|A competitor had sixteen referring domains. Examination showed nine were directly copyable: four supplier pages the client also qualified for, two trade bodies, the chamber, and two local directories. Five required equivalent effort rather than copying: sponsorships and media coverage. Two were not copyable at all. The plan wrote itself: claim the nine, work towards equivalents for the five, ignore the two."
  ],
  take: [
    "Measure referring domains, composition by type, locality, relevance, page-level distribution and growth rate.",
    "Most of this can be measured without paid tools using quoted searches and direct inspection.",
    "Similar totals with different composition is a relevance gap, not a volume gap.",
    "Page-level links to service pages matter enormously for specific terms and are almost never checked.",
    "Examine each competitor link and classify it as directly copyable, requiring equivalent effort, or not copyable."
  ],
  self: [
    "I know why referring domains matter more than total link count.",
    "I can measure a link gap without paid tools.",
    "I check page-level link distribution, not only domain-level.",
    "I classify competitor links by whether they are copyable."
  ],
  quiz: [
    { q: "Why do referring domains matter more than total link count?",
      a: ["They are easier to count", "Ten links from one site count as one referring domain, so domains measure genuine independent endorsement", "Google only counts domains", "Total links are meaningless"],
      c: 1,
      why: "Many links from a single site represent one relationship. Distinct domains represent distinct independent sources, which is what the signal is about." },
    { q: "Two businesses have similar referring domain counts but very different rankings. What should you check?",
      a: ["The domain age", "The composition — local and industry links versus generic directories, and which pages the links point to", "The page speed", "The number of photos"],
      c: 1,
      why: "Local relevance and page-level distribution both matter substantially, and either can differ completely between two businesses with matching totals." },
    { q: "A competitor has eighteen local links, you have three, and you can realistically gain one a month. What should you tell the client?",
      a: ["We will catch up in three months", "Honestly, that parity is around fifteen months away and they will gain some meanwhile", "Links do not matter", "We should buy links"],
      c: 1,
      why: "Implying a faster result and failing to deliver destroys trust. An honest uncomfortable timeline is better than a comfortable false one." }
  ],
  ex: {
    title: "Measure and classify the link gap",
    time: "45 minutes",
    intro: "You will produce a gap analysis that turns directly into a plan.",
    steps: [
      "Find as many referring domains as you can for the strongest competitor, using free tools and quoted searches.",
      "Classify each by type: local organisation, industry body, supplier, media, community, directory.",
      "Note which of their pages each links to.",
      "Do the same for your practice business.",
      "State the gap in total and by type.",
      "Classify each competitor link as directly copyable, requiring equivalent effort, or not copyable."
    ],
    deliver: "A classified link gap analysis with each competitor link marked for copyability."
  },
  chal: {
    title: "Build the link catch-up timeline",
    brief: "Using your gap analysis, build a realistic timeline to parity. Model your acquisition rate based on the copyable links available and a realistic rate for the rest. Model the competitor continuing to gain at their observed rate. Show when, if ever, parity is reached. Then produce a second scenario where you claim all the directly copyable links in the first two months, and show how much that accelerates it. Finally, state honestly whether parity is the right goal at all, or whether exceeding them on a different dimension would be faster.",
    success: [
      "Your timeline models both businesses gaining, not just yours.",
      "You showed the acceleration from claiming copyable links immediately.",
      "You questioned whether parity on links is the right goal rather than assuming it."
    ]
  }
},

"7.4.5": {
  t: "Behaviour signals you cannot see but can influence",
  why: "Part of prominence comes from what people do, which you cannot measure directly. Knowing how to influence it anyway is a genuine skill.",
  body: [
    "h: What you cannot see",
    "p: From lesson 1.3.6, Google observes how people interact with listings: clicks, calls, direction requests, dwell time, whether they returned to the results and chose someone else. You cannot see the competitor's version of any of this, and you can only partially see your own.",

    "h: Why it matters in diagnosis",
    "p: When decomposition shows a competitor winning without any measurable advantage, engagement is one of the plausible remaining explanations. It is also the hardest to prove, which means it should be held as a hypothesis rather than a conclusion.",
    "warn: Engagement is the refuge of lazy diagnosis|Because it cannot be measured, 'they must have better engagement' is unfalsifiable and therefore comfortable. Do not reach for it until you have genuinely eliminated distance, relevance, reviews, links and technical causes. An unfalsifiable explanation is rarely a useful one.",

    "h: What you can partially observe",
    "l: Your own profile performance data: views, calls, direction requests, website clicks, from lesson 9.2.1.|Your ratio of actions to views, which is a proxy for how compelling your listing is.|The competitor's photo count and quality, which strongly influences clicks.|Their rating relative to yours, which influences choice.|Whether their listing is shown as open when yours is closed.|Whether their justification text is more compelling than yours.",

    "h: How to influence it",
    "n: **Better main photo.** The single largest driver of whether a listing is chosen, from lesson 3.2.1.|**A rating above the local average.**|**Correct and generous hours**, so you are shown as open when competitors are not, from lesson 3.3.3.|**Complete information**, so people do not move on to a listing that answers their question.|**Compelling justification text**, earned through website and service content, from lesson 1.4.3.|**A phone that is answered** and a website that loads fast, so the experience after the click is good.|**Everything in lesson 1.1.6** about the customer journey.",
    "tip: Measure your own conversion ratio|Divide actions by views on your profile performance data. Track it over time. If your ratio improves after a photo change, that is genuine evidence of engagement improvement, even though you cannot see the competitor's number. Your own trend is measurable and actionable even when the comparison is not.",

    "h: The compounding argument",
    "p: As lesson 1.3.6 established, engagement feeds prominence, which feeds ranking, which feeds engagement. A competitor who has been winning the click for two years has accumulated an advantage you cannot see and cannot directly measure — but you can begin accumulating your own by winning more clicks from today.",

    "h: What not to do",
    "l: Do not attempt to generate artificial engagement, which does not work and breaks the rules.|Do not conclude engagement is the cause without eliminating everything measurable.|Do not report it to a client as a finding when it is an unfalsifiable hypothesis.|Do not ignore it entirely either — the influencing actions are worth doing regardless of whether engagement is the cause.",

    "h: The practical resolution",
    "p: Here is the useful part: **everything that improves engagement is worth doing anyway.** Better photos, correct hours, complete information, a fast website and an answered phone all improve conversion directly, whatever their ranking effect. So when engagement is your remaining hypothesis, the action is the same whether or not the hypothesis is correct.",
    "ex: The hypothesis that paid either way|Decomposition eliminated distance, relevance, reviews and links, leaving engagement as the only plausible explanation. Rather than claiming it as a finding, the consultant proposed a programme of photo improvement, hours extension and profile completion, framed honestly as 'these are worth doing regardless, and they also address the only remaining hypothesis'. Calls rose 34 per cent over three months. Whether the ranking effect followed was never provable, and it did not matter — the work paid for itself in conversion alone."
  ],
  take: [
    "Engagement signals are real but unobservable for competitors and only partially observable for yourself.",
    "Because it is unfalsifiable, engagement is the refuge of lazy diagnosis — eliminate everything measurable first.",
    "You can influence it through photos, ratings, hours, complete information, justification text and the post-click experience.",
    "Track your own actions-to-views ratio, which is measurable and actionable even when the comparison is not.",
    "Everything that improves engagement improves conversion anyway, so the action is the same whether or not the hypothesis is correct."
  ],
  self: [
    "I know why engagement should be the last hypothesis, not the first.",
    "I can list six ways to influence engagement.",
    "I track my own actions-to-views ratio as a measurable proxy.",
    "I frame engagement honestly as a hypothesis rather than reporting it as a finding."
  ],
  quiz: [
    { q: "Why should engagement be the last hypothesis considered?",
      a: ["It is never a real factor", "It is unfalsifiable, which makes it comfortable and therefore likely to be reached for before measurable causes are eliminated", "Google does not use it", "It cannot be influenced"],
      c: 1,
      why: "An explanation that cannot be tested is rarely useful. Reaching for it early means measurable causes go uninvestigated." },
    { q: "What can you measure about your own engagement?",
      a: ["Nothing", "The ratio of actions to views on your profile performance data, tracked over time", "Competitor click-through rates", "Dwell time on competitor listings"],
      c: 1,
      why: "Your own trend is measurable and responds to changes you make, which makes it actionable even though the competitor comparison is unavailable." },
    { q: "Why does it not matter greatly whether engagement is the actual cause?",
      a: ["Because it never is", "Because everything that improves engagement also improves conversion directly, so the actions are worth doing either way", "Because rankings do not matter", "Because it cannot be changed"],
      c: 1,
      why: "Better photos, hours, information and post-click experience all increase enquiries regardless of any ranking effect, so the work is justified independently." }
  ],
  ex: {
    title: "Measure and improve your engagement ratio",
    time: "35 minutes",
    intro: "You will establish a measurable proxy and act on it.",
    steps: [
      "Record your practice business's profile views, calls, direction requests and website clicks for the last 28 days.",
      "Calculate the ratio of total actions to views.",
      "Compare your main photo, rating and hours against the top three competitors.",
      "Identify the single change most likely to improve the ratio.",
      "Make it and record the date.",
      "Set a reminder to recalculate the ratio in 28 days."
    ],
    deliver: "A recorded engagement ratio baseline, a competitive comparison, one documented change and a scheduled re-measurement."
  },
  chal: {
    title: "Build the engagement improvement case",
    brief: "Build the case for an engagement improvement programme for your practice business, framed honestly. State what can and cannot be measured, what the remaining diagnostic hypothesis is and why it is only a hypothesis, what actions you propose, what each would improve directly regardless of ranking, and what you would measure. Then write the sentence that explains to a client why you are recommending work whose ranking effect you cannot promise, without it sounding like a hedge.",
    success: [
      "You stated clearly what is hypothesis and what is measurable.",
      "Every proposed action has a direct conversion justification independent of ranking.",
      "Your client sentence is honest without sounding evasive."
    ]
  }
},

"7.4.6": {
  t: "Building the prominence catch-up plan",
  why: "This lesson turns the whole module into a plan with numbers, a timeline and an honest verdict on whether catching up is possible.",
  body: [
    "h: The inputs",
    "n: The decomposition from lesson 7.4.2.|The review quality comparison from lesson 7.4.3.|The link gap analysis from lesson 7.4.4.|The engagement assessment from lesson 7.4.5.|The distance measurement from module 2.",

    "h: The structure of the plan",
    "table: Stage ; Content ; Timing || Immediate ; Every configurable gap: category, services, attributes, profile completeness, copyable links ; Weeks 1 to 4 || Short term ; Review system running at a sustainable rate, engagement improvements ; Weeks 1 to 12 || Medium term ; Local link acquisition, website service and area pages ; Months 2 to 9 || Long term ; Community involvement, media relationships, content authority ; Months 3 to 24 || Structural ; Second location or business model change, if warranted ; Only if the numbers support it",

    "h: The arithmetic",
    "p: For each accumulated gap, calculate honestly:",
    "l: The current difference.|Your realistic acquisition rate.|Their observed acquisition rate.|The net closing rate, which is yours minus theirs.|The months to parity, or the statement that parity is not reachable at these rates.",
    "warn: If the net closing rate is negative, say so|If they gain fourteen reviews a month and you can sustain six, the gap is widening. No plan that ignores this is honest. The correct response is either to raise your rate substantially, to compete on a different dimension, or to accept that overtaking is not the goal and aim for a defensible position instead.",

    "h: When catching up is not the right goal",
    "p: Overtaking the leader is one possible objective among several:",
    "n: **Overtake the leader.** Sometimes realistic, often not.|**Overtake the business immediately above you.** Usually achievable and moves you up.|**Defend and dominate a smaller area** where you can be first, from lesson 7.2.4.|**Win a different keyword set** where the competitive field is weaker.|**Compete on a dimension they neglect**, such as hours, response time or an unclaimed service.",
    "tip: Find the dimension they neglect|The decomposition usually reveals something no competitor has done: nobody answers questions, nobody has area pages, nobody is open on Sunday, nobody has a page for a specific service. Claiming an unclaimed dimension is usually faster than closing a gap on a contested one.",

    "h: Writing the plan",
    "l: Lead with the honest assessment of whether the gap is closeable and over what period.|List the immediate free items first.|Give each item an owner and a date.|State the expected effect of each, and be honest where the effect is uncertain.|Set the measurement schedule: quarterly decomposition re-runs.|State what would cause you to change the plan.",

    "h: Reviewing it",
    "n: Re-run the decomposition quarterly.|Compare the gaps against the previous quarter.|Check whether the net closing rate is what you projected.|Adjust the plan based on what actually happened, not on what you hoped.|Record the outcomes in your evidence base.",
    "ex: The plan that changed target|Decomposition showed the market leader was unreachable within three years at any realistic rate. The business ranked fifth. The business ranking fourth had lower velocity and no area pages. The plan targeted fourth place within six months rather than first place within three years. It was achieved in five months, the client was pleased, and the next plan targeted third. Momentum and achievable targets produced more progress than an unreachable ambition would have."
  ],
  take: [
    "Structure the plan as immediate configurable items, short-term systems, medium-term acquisition, long-term authority, and structural options if warranted.",
    "Calculate the net closing rate — yours minus theirs — and say plainly when the gap is widening.",
    "Overtaking the leader is one objective among several; overtaking the business immediately above you is usually more achievable.",
    "Look for the dimension no competitor has claimed, which is usually faster than closing a contested gap.",
    "Re-run the decomposition quarterly and adjust based on what happened rather than what you hoped."
  ],
  self: [
    "I can structure a catch-up plan across five stages.",
    "I calculate net closing rates rather than only current gaps.",
    "I can identify when a different objective is more appropriate than overtaking the leader.",
    "I re-run the decomposition quarterly and adjust from evidence."
  ],
  quiz: [
    { q: "A competitor gains fourteen reviews a month and you can sustain six. What is the honest statement?",
      a: ["We will catch up eventually", "The gap is widening, so either the rate must rise substantially or the objective must change", "Reviews do not matter", "We should buy reviews"],
      c: 1,
      why: "A negative net closing rate means the gap grows regardless of effort. Any plan that ignores this is dishonest and will fail visibly." },
    { q: "Which objective is usually most achievable?",
      a: ["Overtaking the market leader", "Overtaking the business immediately above you", "Ranking first everywhere", "Matching the leader's review count"],
      c: 1,
      why: "The next business up is a smaller gap, moves you forward, and builds momentum. Targeting only the leader is often unrealistic and demoralising." },
    { q: "What is usually faster than closing a contested gap?",
      a: ["Buying links", "Claiming a dimension no competitor has taken, such as unanswered questions or a missing service page", "Changing the category repeatedly", "Reducing prices"],
      c: 1,
      why: "An unclaimed dimension has no incumbent to overtake, so progress there is faster and cheaper than competing on a dimension everyone is already contesting." }
  ],
  ex: {
    title: "Build the catch-up plan",
    time: "50 minutes",
    intro: "You will assemble the whole module into an honest, actionable plan.",
    steps: [
      "Gather your decomposition, quality comparison, link gap and distance measurements.",
      "Calculate the net closing rate for reviews and for links.",
      "State honestly whether parity with the leader is reachable and over what period.",
      "Choose the objective: leader, next business up, smaller area, different keywords, or unclaimed dimension.",
      "Build the five-stage plan with owners and dates.",
      "Set the quarterly re-measurement schedule and state what would change the plan."
    ],
    deliver: "A five-stage catch-up plan with net closing rates, a chosen objective with justification, and a re-measurement schedule."
  },
  chal: {
    title: "Write the honest verdict",
    brief: "Write the assessment you would give a client whose stated goal — overtaking the market leader — your analysis shows is not reachable within three years. Explain the arithmetic, present the alternative objectives with what each would achieve and by when, recommend one, and explain why it is a better use of their money. Do it without sounding defeatist and without diminishing what they have built. Then write the paragraph you would use at the twelve-month review to show progress against the objective you actually chose.",
    success: [
      "The arithmetic is shown, not asserted, including the competitor's growth.",
      "You presented alternatives and recommended one with commercial reasoning.",
      "Your twelve-month review paragraph measures against the chosen objective, not the abandoned one."
    ]
  }
}

});
