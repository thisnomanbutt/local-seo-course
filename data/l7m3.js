/* Level 7 · Module 3 — Diagnosing Category and Relevance Drops */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"7.3.1": {
  t: "Case: 'We changed our category and rankings collapsed'",
  why: "Category changes produce the fastest and largest swings in local SEO. This case teaches you to diagnose and reverse them.",
  body: [
    "h: The case",
    "story: The complaint|'We changed our primary category from Dentist to Cosmetic Dentist about three weeks ago, because cosmetic work is what we want more of. Since then we have almost disappeared. We still show for cosmetic dentist searches but we have lost everything else, and cosmetic searches are much rarer. Our enquiries have halved.'",

    "h: Step 1: define the symptom",
    "l: **What:** Local Pack position for general dentistry terms.|**Where:** All measurement points.|**When:** Beginning roughly three to five days after the category change.|**How much:** From consistent top-three to outside the top twenty for general terms, while cosmetic terms improved.",
    "p: Note the shape: one set of keywords lost, another gained, everywhere, suddenly. Applying the pattern table from lesson 7.1.4, this is unambiguously a relevance change.",

    "h: Step 2: what actually happened",
    "p: This is not a fault. It is the system working exactly as designed.",
    "n: The primary category defines what kind of business Google considers you, as lesson 3.1.1 established.|Changing from a broad category to a narrow one narrows the set of searches you are eligible for.|The business gained precision and lost reach.|Total visibility fell because the narrow term has far less volume than the broad one.",
    "warn: The trade was real and was not understood|Nobody did anything wrong technically. The business made a strategic choice without understanding the trade. The lesson is not 'do not change categories', it is 'model the trade before you make it', which is exactly what lesson 3.1.1 warned about.",

    "h: Step 3: gather the evidence",
    "n: Confirm the change date from the change history, from lesson 3.4.3.|Confirm the effect began days after, not before.|Measure the current position for both keyword sets.|Estimate the relative search volume of the two sets.|Check whether the website supports the narrow category — is there a genuine cosmetic dentistry page?|Check whether reviews mention cosmetic work.|Check whether secondary categories still cover the general work.",

    "h: Step 4: the diagnosis",
    "p: Usually one of three:",
    "table: Finding ; Diagnosis ; Action || Secondary categories do not include the broad term ; Reach lost unnecessarily ; Add the broad category as secondary || Website and reviews do not support the narrow category ; Narrow position also weak ; Build the supporting relevance, or revert || Everything is correct and the trade was simply unfavourable ; Strategic error, not technical ; Revert the primary and reconsider",

    "h: Step 5: the recovery",
    "n: If the broad category is missing from secondaries, add it. This often recovers much of the lost reach while keeping the narrow precision.|If that is insufficient, revert the primary category to the broad term and keep the narrow one as secondary.|Record the date of any change.|Wait four weeks before judging, from lesson 3.4.4.|Meanwhile, build the website page and service entries that would make the narrow category viable in future.",
    "tip: The usual best answer|Broad category as primary, narrow category as secondary, plus a genuinely strong website page and service entries for the narrow term. This keeps the reach and builds the precision. Most businesses that make this mistake did not need to choose at all.",

    "h: The deeper lesson",
    "p: A narrow category is the right choice when the business genuinely specialises, the narrow term has enough volume to sustain it, and the website and reviews support it. It is the wrong choice when it is aspirational — when the business wants that work but the evidence does not yet exist.",
    "ex: The corrected sequence|The practice reverted to Dentist as primary, kept Cosmetic Dentist as secondary, built a thorough cosmetic dentistry page with prices and before-and-after photographs, added cosmetic services to the profile, and began asking cosmetic patients for reviews mentioning their treatment. Eight months later, with the supporting evidence in place, it changed the primary category again — and this time the cosmetic position was strong and the general position barely moved, because the secondary category and the site now carried it."
  ],
  take: [
    "A category change that loses one keyword set and gains another, everywhere, suddenly, is a relevance change working as designed.",
    "Narrowing the primary category trades reach for precision — the loss is not a fault, it is the trade.",
    "Check first whether the broad term is missing from secondary categories, which often recovers most of the loss.",
    "The usual best answer is broad primary, narrow secondary, plus genuine website and review support for the narrow term.",
    "A narrow primary category is right when the specialisation is real and supported, and wrong when it is aspirational."
  ],
  self: [
    "I can recognise the pattern of a category-driven relevance change.",
    "I know that narrowing trades reach for precision, and can model that trade.",
    "I check secondary categories before recommending a revert.",
    "I know when a narrow primary category is justified and when it is aspirational."
  ],
  quiz: [
    { q: "A business narrows its primary category and loses general-term visibility while gaining narrow-term visibility. What is this?",
      a: ["A bug", "The trade working exactly as designed — reach exchanged for precision", "A suspension", "A competitor attack"],
      c: 1,
      why: "The primary category defines eligibility. Narrowing it necessarily reduces the set of searches you can appear for, in exchange for a better match on fewer." },
    { q: "What should you check first after a damaging category narrowing?",
      a: ["The website speed", "Whether the broad term is still present as a secondary category", "The review count", "The opening hours"],
      c: 1,
      why: "If the broad category was dropped entirely rather than moved to secondary, much of the lost reach can be recovered immediately by adding it back." },
    { q: "When is a narrow primary category the right choice?",
      a: ["Whenever the business wants that type of work", "When the specialisation is genuine, the term has enough volume, and the website and reviews support it", "Always", "Never"],
      c: 1,
      why: "Aspirational narrowing loses reach without gaining a strong narrow position, because the supporting relevance evidence does not yet exist." }
  ],
  ex: {
    title: "Model a category trade before making it",
    time: "35 minutes",
    intro: "You will do the analysis that would have prevented this case.",
    steps: [
      "Identify a narrower category your practice business could plausibly move to.",
      "List the searches it would gain and the searches it would lose.",
      "Estimate the relative volume of each set using the methods from lesson 4.4.1.",
      "Check whether the website has a genuine page supporting the narrow category.",
      "Check whether reviews mention that specific work.",
      "State whether the trade would be favourable, and what would need to exist first to make it so."
    ],
    deliver: "A modelled category trade with gained and lost search sets, supporting evidence checked, and a verdict."
  },
  chal: {
    title: "Write the recovery plan",
    brief: "Write the complete recovery plan for the case in this lesson. Include the immediate action, the evidence you would gather first, what you would change and in what order, what you would predict and by when, what you would build so the narrow category becomes viable later, and how you would explain to the owner that their strategic instinct was right but the sequence was wrong. Include the timeline for when the category change could be safely attempted again.",
    success: [
      "Your plan checks secondary categories before recommending any revert.",
      "It includes building the supporting evidence for a future successful change.",
      "Your owner explanation validates the strategic intent while correcting the sequence."
    ]
  }
},

"7.3.2": {
  t: "How category changes get reprocessed",
  why: "Understanding the timing and mechanics of a category change tells you when to worry, when to wait, and when to act.",
  body: [
    "h: What happens when you change a category",
    "n: The change is saved to your profile, usually immediately.|It may be reviewed, particularly for sensitive categories or accounts with history.|Systems reprocess what searches you are eligible for.|Your position in those searches recalculates against the existing competitive field.|The visible effect appears, typically over days rather than hours.",

    "h: Typical timing",
    "table: Stage ; Typical time ; What you see || Change saved ; Immediate ; The field shows the new value || Category label updated in results ; Hours to days ; The grey label under your listing changes || Eligibility shifts ; Days ; You appear or disappear for different terms || Position stabilises ; 2 to 4 weeks ; Fluctuation settles || Full effect visible ; 4 to 6 weeks ; Reliable measurement possible",
    "warn: Do not judge in the first week|The first week after a category change is the least reliable period to measure. Positions fluctuate as the system reprocesses. Businesses regularly panic in week one, revert, and then panic again — producing instability that is worse than either category alone.",

    "h: Why effects can be delayed",
    "l: Reprocessing is not instantaneous across all searches or all locations.|Some searches update before others.|Grid points can update at different times, producing a temporarily patchy picture.|If a review was triggered, the change may not take effect at all until it completes.",

    "h: Signs the change did not take effect",
    "n: The category label in search results still shows the old value after several days.|The field shows the new value but nothing changed in eligibility.|A review notification arrived.|The listing became unverified.",
    "p: If any of these appear, stop and investigate rather than changing again, following lesson 3.3.6.",

    "h: Reverting",
    "p: If you must revert:",
    "l: Wait at least two weeks before deciding, unless the damage is severe and obvious.|Revert once, cleanly.|Record both dates.|Expect another two to four weeks for the revert to settle.|Do not oscillate — repeated changes look like manipulation and produce instability.",
    "tip: The two-change limit|Allow yourself at most two category changes in a quarter: the change and, if genuinely necessary, the revert. Beyond that, you are no longer testing, you are thrashing, and the instability itself becomes the problem.",

    "h: Categories that Google changes for you",
    "p: As lesson 3.4.1 covered, Google sometimes changes categories automatically. This has the same reprocessing effect but arrives without warning:",
    "l: Check the change history whenever performance shifts unexpectedly.|Restore the correct category once, cleanly.|Investigate why it happened — usually a contradicting source.|Fix the contradicting source, or it will recur.",

    "h: Category retirement and renaming",
    "p: Google occasionally retires or renames categories, moving businesses automatically. The effect can be significant and arrives without any action on your part.",
    "l: Check periodically whether your category still exists under the same name.|If a category was retired, review whether the replacement is the best match.|This is one of the checks in the annual review from lesson 3.4.6.",
    "ex: The retired category|A business found its performance had shifted with no change in the history it could see. Investigation showed its category had been retired and businesses using it moved to a broader replacement. The broader category was a worse match. Selecting a better-fitting current category restored the position over the following month. Nobody had done anything wrong; the category list had changed underneath them."
  ],
  take: [
    "Category changes take days to shift eligibility and two to four weeks to stabilise.",
    "The first week after a change is the least reliable period to measure — do not judge or revert then.",
    "Signs the change did not take effect include an unchanged label, a review notification, or the listing becoming unverified.",
    "Allow at most two category changes in a quarter; beyond that you are thrashing rather than testing.",
    "Google sometimes changes or retires categories automatically, which has the same effect and arrives without warning."
  ],
  self: [
    "I know the typical timeline of a category change taking effect.",
    "I do not judge or revert in the first week.",
    "I can recognise signs that a change did not take effect.",
    "I know that categories can be retired or renamed without any action from me."
  ],
  quiz: [
    { q: "How long should you wait before judging the effect of a category change?",
      a: ["24 hours", "At least two weeks, with four weeks for a reliable measurement", "Six months", "Immediately"],
      c: 1,
      why: "Eligibility shifts over days and positions stabilise over two to four weeks. Judging in week one produces false conclusions and damaging reverts." },
    { q: "Performance shifts with nothing in your change log and nothing visible in the history. What should you check?",
      a: ["The website speed", "Whether the category was retired or renamed, or automatically changed by Google", "The number of photos", "The business description"],
      c: 1,
      why: "Category lists change over time and businesses are moved automatically. The effect is identical to a deliberate change but arrives with no action on your part." },
    { q: "How many category changes should you allow yourself in a quarter?",
      a: ["As many as needed", "At most two: the change and, if genuinely necessary, the revert", "One per month", "Unlimited, it does not matter"],
      c: 1,
      why: "Repeated changes create instability that is worse than either option, prevent any measurement, and resemble manipulation." }
  ],
  ex: {
    title: "Verify a category change took effect",
    time: "20 minutes",
    intro: "You will practise checking rather than assuming.",
    steps: [
      "Record the current primary category of your practice business and the label shown in search results.",
      "Confirm these match.",
      "Check the change history for any category change you did not make.",
      "Search the category name in the profile picker to confirm it still exists under that name.",
      "Check whether any secondary category has been removed or altered.",
      "Record the findings with today's date."
    ],
    deliver: "A verification that the set category matches the displayed label, with any automatic changes or retirements identified."
  },
  chal: {
    title: "Design a safe category test",
    brief: "Design a proper test of a category change for your practice business. Specify the baseline measurement, the exact change, the date, the measurement schedule, how long you will wait before any judgement, what result would count as success, what would count as failure, what would trigger an early revert despite the waiting rule, and how you would record the outcome for your personal evidence base. Then state what you would conclude if the result were ambiguous.",
    success: [
      "Your test defines success and failure criteria before the change is made.",
      "You specified a genuine early-revert trigger rather than only a waiting period.",
      "You addressed what to conclude from an ambiguous result."
    ]
  }
},

"7.3.3": {
  t: "Primary and secondary category conflicts",
  why: "Categories can work against each other. Recognising conflict explains a class of problems that otherwise looks inexplicable.",
  body: [
    "h: What conflict looks like",
    "l: The business appears for searches it does not want and not for those it does.|The category label shown in results is not the one you expected.|'People also search for' shows the wrong kind of business, from lesson 1.3.3.|Adding a secondary category coincided with a loss elsewhere.|The business competes in a field it does not belong to.",

    "h: The main conflict types",
    "n: **Primary too broad, secondaries too specific.** The broad primary dominates and the specific secondaries achieve little.|**Primary too specific, secondaries missing the broad term.** The case from lesson 7.3.1.|**Contradictory categories.** Categories implying different business types, which muddies the entity.|**Categories that change available features.** Adding one removes a feature you relied on, from lesson 3.1.3.|**Aspirational categories.** Categories describing work the business barely does, unsupported by the website or reviews.",

    "h: How to detect a conflict",
    "n: Check what label appears under your listing in results — this reveals what Google considers your primary identity.|Check 'People also search for' — a mismatch indicates classification confusion.|Search several of your important terms and note which you appear for and which you do not.|Compare your category set with the businesses winning each of those terms.|Check whether any recently added category coincided with a change.",
    "tip: The label is the ground truth|Whatever you set, the label shown under your listing in search results is what Google is actually presenting you as. If that label is not what you expected, something is wrong with your category configuration, and that is a two-second check almost nobody performs.",

    "h: Resolving conflicts",
    "table: Conflict ; Resolution || Broad primary, specific secondaries achieving nothing ; Accept it, or narrow the primary only with supporting evidence || Specific primary, broad term missing ; Add the broad term as secondary || Contradictory categories ; Remove the ones that do not describe genuine core work || Feature lost after adding a category ; Remove that category if the feature matters more || Aspirational categories ; Remove, and build the supporting evidence before adding back",

    "h: The clean category set",
    "p: A well-configured business usually has:",
    "l: One primary category that accurately describes what it mainly is.|Two to five secondary categories describing genuine additional services it wants.|No category describing work it does not do or does not want.|Every category supported by something: a service entry, a website page, or review content.|No category that removes a feature the business relies on.",
    "warn: Every category should be defensible|For each category on the listing, you should be able to answer: what real service does this represent, and what evidence on our website or in our reviews supports it? Any category that fails that test is adding confusion rather than reach.",

    "h: Testing a secondary category",
    "n: Record the baseline for the searches you expect it to affect, and for your main terms.|Add one category. Only one.|Record the date.|Wait four weeks.|Measure both sets of searches.|Keep it if it gained something and cost nothing; remove it otherwise.",
    "ex: The category that cost more than it gained|A business added a secondary category hoping to capture an additional service. Four weeks later it had gained nothing for that service, because it had no website page or reviews supporting it, and its main term had slipped slightly. Removing the category restored the main term. The category was not wrong in principle — it was simply unsupported, and the confusion cost more than the unclaimed opportunity was worth."
  ],
  take: [
    "Category conflicts show up as appearing for the wrong searches, an unexpected label, or a mismatched 'People also search for'.",
    "The label shown under your listing is the ground truth about how Google classifies you — check it.",
    "A clean set is one accurate primary, two to five genuine secondaries, and nothing aspirational or unsupported.",
    "Every category should be defensible: what real service does it represent and what evidence supports it?",
    "Test secondary categories one at a time, with a baseline, and remove those that gain nothing."
  ],
  self: [
    "I can recognise the signs of a category conflict.",
    "I check the label shown in results against what I set.",
    "I can apply the defensibility test to every category on a listing.",
    "I test secondary categories one at a time against a baseline."
  ],
  quiz: [
    { q: "What is the fastest check on how Google actually classifies a business?",
      a: ["The profile settings", "The category label shown under the listing in search results", "The website title", "The number of reviews"],
      c: 1,
      why: "The settings show what you chose; the label shows what Google presents. A mismatch between them indicates a configuration problem worth investigating." },
    { q: "What is the defensibility test for a category?",
      a: ["Whether competitors use it", "What real service it represents and what evidence on the website or in reviews supports it", "Whether it has high search volume", "Whether it was suggested by a tool"],
      c: 1,
      why: "Unsupported categories add classification confusion without producing reach, because nothing corroborates the claim they make about the business." },
    { q: "A newly added secondary category produced no gain and coincided with a slight loss on the main term. What should you do?",
      a: ["Add more categories", "Remove it and restore the previous set", "Wait another six months", "Change the primary category instead"],
      c: 1,
      why: "It cost more than it gained, which is exactly what a one-at-a-time test is designed to reveal. Removing it restores the previous configuration." }
  ],
  ex: {
    title: "Audit the category set for conflict",
    time: "30 minutes",
    intro: "You will apply the defensibility test to a real listing.",
    steps: [
      "List every category on your practice business's listing, primary and secondary.",
      "For each, state what real service it represents.",
      "For each, identify the evidence supporting it: a service entry, a website page, or review content.",
      "Mark any that fail the defensibility test.",
      "Check the label shown in search results against your primary category.",
      "Check 'People also search for' and note whether the businesses shown are the right kind."
    ],
    deliver: "A category audit with defensibility assessed for each, plus label and competitive-set checks."
  },
  chal: {
    title: "Rebuild the category set from evidence",
    brief: "Rebuild your practice business's category set from first principles. Start from what the business actually does and wants, check what categories the winners of each target search use, apply the defensibility test to each candidate, and check what features each affects. Produce the proposed set with justification for every entry and every omission. Then sequence the changes safely using the pacing rules from lesson 3.4.4, and state what you would measure after each.",
    success: [
      "Every proposed category has a stated justification and supporting evidence.",
      "You justified omissions as well as inclusions.",
      "Your change sequence respects the pacing rules and specifies measurement after each step."
    ]
  }
},

"7.3.4": {
  t: "Relevance mismatch between profile, site and reviews",
  why: "The relevance triangle from lesson 1.2.2 becomes a diagnostic tool here. Finding the mismatch usually finds the problem.",
  body: [
    "h: The triangle restated",
    "p: Three sources should agree about what the business does:",
    "n: **The profile** — categories, services, description.|**The website** — pages, headings, content.|**The reviews** — what customers say they came for.",
    "p: Where all three agree, relevance is strong. Where they disagree, Google becomes uncertain and ranks the business for whatever the evidence actually supports rather than what it claims.",

    "h: The diagnostic",
    "table: Profile says ; Website says ; Reviews say ; Diagnosis || X ; X ; X ; Strong, aligned relevance || X ; nothing ; nothing ; Claim unsupported — expect weak performance for X || X ; X ; something else ; Customers come for something else; the claim may be aspirational || nothing ; X ; X ; Profile is under-claiming; add the category and services || X ; something else ; X ; Website is the weak link; build the page || something else ; X ; X ; Profile category is wrong; this is the lesson 7.3.1 case in reverse",

    "h: How to run it",
    "n: Pick the target search the business wants to win.|Check the profile: is there a category, a service entry and a description reference for it?|Check the website: is there a dedicated page for it, and does the page genuinely cover it?|Check the reviews: read the last thirty and count how many mention it.|Mark each of the three as strong, weak or absent.|The weakest is your action.",
    "tip: Run it per keyword, not per business|Relevance is not a single property of a business. It is specific to each search. A dental practice can have perfect alignment for 'dentist' and none for 'dental implants'. Run the triangle separately for each important term, and you will usually find the answer to 'why do we rank for this but not that?' immediately.",

    "h: The most common finding",
    "warn: The missing page|By far the most frequent result of this diagnostic is: profile claims the service, reviews occasionally mention it, and the website has no page about it. The fix is the single most reliable relevance intervention available — build a genuinely good page for that service, as covered in lesson 4.2.1.",

    "h: Strengthening each point",
    "l: **Profile:** add the category if accurate, add service entries with descriptions, reference it naturally in the description.|**Website:** build a real page, link to it internally, add service structured data, from Level 4.|**Reviews:** ask at the moment that service is delivered, so reviews naturally mention it, from lesson 5.1.3.",

    "h: The order to strengthen them",
    "n: Profile first, because it is fastest and cheapest.|Website second, because it is the most reliable and durable.|Reviews third, because they accumulate slowly but compound.|Measure after each, with enough time between, from lesson 3.4.4.",

    "h: When all three are strong and it still does not rank",
    "p: If the triangle is fully aligned and the business still does not rank for the term, relevance is not the constraint. Move to distance or prominence. This is a valuable negative result, because it eliminates a whole category of cause.",
    "ex: The triangle that identified it in four minutes|A clinic could not rank for a specific treatment. The triangle showed: profile had the service listed, reviews mentioned it eleven times in thirty, and the website had a single sentence about it on a general services page. The website was the weak point, unambiguously. A thorough page for that treatment, built over two days, produced a first-page position within six weeks. The diagnosis took four minutes."
  ],
  take: [
    "The relevance triangle is profile, website and reviews — where they agree relevance is strong, where they disagree Google follows the evidence.",
    "Run the triangle per keyword, not per business, because relevance is specific to each search.",
    "The most common finding is a missing website page for a service the profile claims.",
    "Strengthen in order: profile first because it is fastest, website second because it is most durable, reviews third because they compound.",
    "If all three are strong and the business still does not rank, relevance is not the constraint — a valuable negative result."
  ],
  self: [
    "I can run the relevance triangle for a specific keyword.",
    "I know that relevance is per search, not per business.",
    "I know the most common finding and the fix.",
    "I treat a fully aligned triangle as a useful negative result."
  ],
  quiz: [
    { q: "Why should the relevance triangle be run per keyword rather than per business?",
      a: ["It is faster", "Relevance is specific to each search — a business can be strongly aligned for one term and absent for another", "Google requires it", "Keywords change weekly"],
      c: 1,
      why: "Running it per term immediately answers 'why do we rank for this but not that?', which a business-level assessment cannot." },
    { q: "The profile lists a service, reviews mention it, and the website has no page about it. What is the fix?",
      a: ["Add more categories", "Build a genuinely good page for that service", "Ask for more reviews", "Change the business name"],
      c: 1,
      why: "The website is the weak point and also the most reliable and durable place to strengthen relevance, which makes this the highest-return intervention." },
    { q: "All three points of the triangle are strong and the business still does not rank for the term. What does this tell you?",
      a: ["The triangle is useless", "Relevance is not the constraint — investigate distance or prominence instead", "More content is needed", "The category must be wrong"],
      c: 1,
      why: "Eliminating relevance as a cause is genuinely valuable, because it redirects investigation to the remaining forces rather than to more relevance work." }
  ],
  ex: {
    title: "Run the triangle for three keywords",
    time: "35 minutes",
    intro: "You will diagnose relevance term by term.",
    steps: [
      "Choose the three most valuable searches your practice business wants to win.",
      "For each, check the profile: category, service entry, description reference.",
      "For each, check the website: is there a dedicated page and does it genuinely cover the term?",
      "For each, read the last thirty reviews and count mentions.",
      "Mark each point as strong, weak or absent for all three keywords.",
      "Identify the weakest point for each and state the action."
    ],
    deliver: "Three completed relevance triangles with the weakest point and action identified for each."
  },
  chal: {
    title: "Build the relevance strengthening plan",
    brief: "Take the weakest point from each of your three triangles and build a plan to strengthen it. Specify what would be created or changed, who would do it, how long it would take, and what result you would predict and by when. Sequence the work so effects can be attributed. Then identify which of the three keywords would produce the most commercial value if won, and justify why it should be first even if it is not the easiest.",
    success: [
      "Your plan specifies concrete deliverables with owners and timings for each keyword.",
      "The sequence allows effects to be attributed rather than bundling everything.",
      "You prioritised by commercial value with reasoning, not by ease."
    ]
  }
},

"7.3.5": {
  t: "Recovering from a bad category change",
  why: "Category damage is usually reversible. Knowing the recovery process and its timeline turns a crisis into a managed situation.",
  body: [
    "h: First, establish that it was the category",
    "n: Confirm the change date from the change history.|Confirm the effect began after, not before.|Confirm the pattern matches a relevance change: specific keywords, all locations, from lesson 7.1.4.|Rule out a coinciding cause: a competitor entering, an update, a suspension.|Only then proceed on the basis that the category caused it.",
    "warn: Do not assume|Category changes are so commonly blamed that other causes get missed. If a competitor opened nearby in the same fortnight, the category change may be irrelevant. Confirm the pattern before acting.",

    "h: The recovery sequence",
    "n: **Check secondary categories first.** If the previous primary is missing from secondaries, add it. This alone recovers much of the loss in many cases, and it is a smaller change than a revert.|**Wait two weeks and measure.** If recovery is sufficient, stop.|**If not, revert the primary** to the previous value, once, cleanly.|**Record both dates.**|**Wait four weeks** before judging the revert.|**Meanwhile, build the supporting evidence** that would make the intended change viable later.",

    "h: Expected recovery timeline",
    "table: Action ; Recovery time ; Note || Adding the missing broad secondary ; 1 to 3 weeks ; Often substantial and the least disruptive || Reverting the primary ; 2 to 4 weeks ; Usually returns close to the previous state || Both, sequenced ; 4 to 6 weeks total ; The safe approach || Repeated changes ; Indefinite ; Instability becomes the problem itself",
    "p: Recovery is usually close to complete, but not always identical. The competitive field may have moved during the period, and other businesses may have gained ground.",

    "h: What can go wrong",
    "l: The revert triggers a review, which delays everything.|The competitive field changed during the affected period, so the previous position is no longer available.|The original category has been retired, so an exact revert is impossible.|The business panics and changes several times, producing instability worse than the original problem.|The category was not actually the cause, so the revert changes nothing and the real cause remains.",

    "h: Managing the client through it",
    "n: Explain what happened plainly: the category defines what searches you are eligible for, and narrowing it reduced the set.|State that it is reversible and give the timeline.|State what you are doing and why in that order.|Set the four-week expectation explicitly, so week two does not produce another panic.|Explain what you are building meanwhile so the original goal is still achievable later.",
    "tip: Give a date, not a hope|'We should see this recover over the next four weeks, and I will check on the 14th' is far more reassuring than 'it should come back soon'. Clients cope with a wait when it has an end date and a check they can hold you to.",

    "h: Preventing a repeat",
    "l: Record the lesson in the change log with the dates and the outcome.|Add category changes to the pacing rules from lesson 3.4.4.|Model the trade before any future change, from lesson 3.1.1.|Build the supporting evidence first.|Agree with the client that category changes require a modelled case and a baseline measurement.",
    "ex: The full recovery|A business narrowed its category and lost general visibility. Adding the broad term back as a secondary recovered roughly two-thirds within eleven days. Reverting the primary was not needed. Over the following six months the business built the website page and review base to support the narrow category, then changed the primary again with a proper baseline. The second attempt cost almost nothing, because the supporting evidence carried the general terms."
  ],
  take: [
    "Confirm the category was actually the cause before acting — the pattern and dates must match, and other causes must be ruled out.",
    "Check secondary categories first; adding the missing broad term often recovers much of the loss with the smallest change.",
    "Revert the primary only if that is insufficient, once, cleanly, with both dates recorded.",
    "Recovery is usually close to complete within two to six weeks, though the competitive field may have moved.",
    "Give the client a date and a check, not a hope — and build the supporting evidence so the original goal remains achievable."
  ],
  self: [
    "I confirm the cause before acting on a suspected category problem.",
    "I try the secondary category fix before a revert.",
    "I know the expected recovery timelines for each action.",
    "I give clients a specific date and check rather than a vague reassurance."
  ],
  quiz: [
    { q: "What should you try before reverting a primary category?",
      a: ["Adding five new secondary categories", "Adding the previous primary back as a secondary category", "Changing the business name", "Rebuilding the website"],
      c: 1,
      why: "It is a much smaller change and frequently recovers a substantial part of the loss without the disruption of another primary change." },
    { q: "Why must you confirm the category was the cause before reverting?",
      a: ["Google requires proof", "Category changes are so commonly blamed that coinciding causes such as a new competitor get missed", "Reverting is expensive", "It is not necessary"],
      c: 1,
      why: "If something else caused the drop, the revert changes nothing, wastes weeks, and the real cause continues unaddressed." },
    { q: "What is the most reassuring thing to tell a client during a category recovery?",
      a: ["It should come back soon", "A specific expected recovery window and a date on which you will check", "That it might not recover", "Nothing until it recovers"],
      c: 1,
      why: "A defined end date and a scheduled check give the client something concrete, which prevents the week-two panic that leads to further damaging changes." }
  ],
  ex: {
    title: "Write the recovery sequence",
    time: "30 minutes",
    intro: "You will produce the plan you would follow under pressure.",
    steps: [
      "Write the confirmation checks you would run before accepting that a category change caused a drop.",
      "Write the recovery sequence in order, with the waiting period after each step.",
      "Write the expected timeline for each action.",
      "Write the list of things that could go wrong and what you would do for each.",
      "Write the client explanation, including a specific date.",
      "Write what you would build meanwhile to make the original goal achievable later."
    ],
    deliver: "A complete recovery sequence with confirmation checks, timelines, failure modes, a client explanation and a forward plan."
  },
  chal: {
    title: "Diagnose an ambiguous case",
    brief: "Construct a case where a category change and a new competitor both occurred within the same fortnight, followed by a ranking drop. Work out what evidence would distinguish between the two causes, what you would check and in what order, what you would conclude if the evidence were genuinely ambiguous, and what you would do first in that situation. Then write the honest client explanation for an ambiguous diagnosis, following the confidence guidance from lesson 7.1.5.",
    success: [
      "You identified evidence that genuinely distinguishes the two causes rather than being consistent with both.",
      "You specified what to do first when the evidence remains ambiguous.",
      "Your client explanation states the uncertainty honestly using an explicit confidence level."
    ]
  }
},

"7.3.6": {
  t: "Testing category changes safely",
  why: "Category changes are powerful and risky. A proper testing method lets you capture the upside without the crises of this module.",
  body: [
    "h: Why formal testing matters here",
    "p: The primary category is the highest-leverage setting you control and the one most capable of causing damage. Changing it casually is the single riskiest routine action in local SEO. A testing method makes the upside accessible safely.",

    "h: The method",
    "n: **Model the trade first.** List the searches gained and lost, and estimate their relative value, from lesson 3.1.1.|**Check the supporting evidence exists.** Website page, service entries, review content for the new category.|**Record the baseline.** Grid positions for both the current terms and the target terms, plus profile views and calls.|**Choose the timing.** Not in peak season, not during a review, not alongside another sensitive change, from lesson 3.3.6.|**Make the single change.** Nothing else in the same fortnight.|**Record the date.**|**Wait four weeks without judging.**|**Measure both sets of terms.**|**Decide against the pre-stated criteria.**|**Record the outcome in your evidence base.**",

    "h: Setting the criteria in advance",
    "warn: Decide what success looks like before you change anything|If you define success afterwards, you will rationalise whatever happened. Write down beforehand: what gain on target terms would justify what loss on current terms. Then the decision at week four is arithmetic rather than argument.",
    "p: A workable form: 'We will keep the change if target-term visibility improves by at least X and main-term visibility falls by no more than Y.'",

    "h: The safer alternative to testing",
    "p: In many cases you do not need to test at all, because the safer configuration captures most of the benefit:",
    "l: Keep the broad category as primary.|Add the specific category as secondary.|Build a thorough website page for the specific service.|Add service entries for it.|Ask for reviews mentioning it.|Measure whether the specific term improves.",
    "p: If it does, you have gained the precision without risking the reach. Only if it does not, and the specific term matters enough, does a primary change become worth testing.",
    "tip: Try the safe configuration for a quarter first|Most businesses that want to narrow their category have not yet built the supporting evidence. Spending a quarter building it, with the broad category still primary, either solves the problem without any risk, or leaves you in a far stronger position to make the change successfully.",

    "h: When not to test",
    "l: During peak season.|When the business cannot tolerate a temporary drop.|When the supporting evidence does not exist.|When the account has a recent suspension or review.|When another significant change is in progress.|When you cannot measure properly, because an untestable change is just a gamble.",

    "h: Recording the outcome",
    "p: Whatever happens, record it in the personal evidence base from lesson 3.4.4: the business type, market density, the categories involved, the baseline, the change, the result and your conclusion. Over a career this builds genuine knowledge about when category narrowing works, which almost nobody possesses because almost nobody records it.",
    "ex: The test that was not needed|A business wanted to narrow its category. Instead it spent a quarter building a thorough service page, adding service entries, and asking relevant customers for reviews. The specific term moved from invisible to position 4 without any category change at all. The test was never run, because the safe configuration had already achieved the goal."
  ],
  take: [
    "The primary category is the highest-leverage and highest-risk setting — a testing method makes its upside safely accessible.",
    "Model the trade, verify supporting evidence, record a baseline, change one thing, wait four weeks, decide against pre-stated criteria.",
    "Write the success and failure criteria before the change, or you will rationalise whatever happens.",
    "The safer configuration — broad primary, specific secondary, plus a real page and reviews — often captures the benefit with no risk.",
    "Record every outcome in your evidence base, because almost nobody does and it is where real judgement comes from."
  ],
  self: [
    "I can describe the ten-step category testing method.",
    "I set success and failure criteria before making a change.",
    "I know the safer configuration and try it first.",
    "I record every category outcome for my own evidence base."
  ],
  quiz: [
    { q: "Why must success criteria be set before a category change?",
      a: ["For the client report", "Because defining them afterwards means rationalising whatever happened rather than deciding", "Google requires it", "It saves time"],
      c: 1,
      why: "Pre-stated criteria turn the week-four decision into arithmetic. Criteria written afterwards inevitably fit the outcome, which teaches you nothing." },
    { q: "What is the safer configuration that often removes the need to test at all?",
      a: ["Narrow primary with no secondaries", "Broad primary, specific secondary, plus a thorough website page, service entries and relevant reviews", "Many secondary categories", "No categories"],
      c: 1,
      why: "It builds the precision without sacrificing the reach, and frequently achieves the goal outright, making the risky primary change unnecessary." },
    { q: "When should you not test a category change?",
      a: ["When the business is growing", "During peak season, without supporting evidence, during a review, or when you cannot measure properly", "In winter", "When competitors are weak"],
      c: 1,
      why: "Each of those conditions either raises the cost of a temporary drop or makes the result uninterpretable, which turns a test into a gamble." }
  ],
  ex: {
    title: "Design a category test with criteria",
    time: "35 minutes",
    intro: "You will produce a test that will give a clear answer.",
    steps: [
      "Model the trade for a category change your practice business might make.",
      "Check whether the supporting evidence exists, and note what is missing.",
      "Record the baseline for both current and target terms.",
      "Write the success and failure criteria as specific numbers.",
      "Choose the timing and justify it.",
      "Write what you would do for each of the three possible outcomes: success, failure, ambiguous."
    ],
    deliver: "A designed category test with a baseline, numeric criteria, justified timing and a response for each outcome."
  },
  chal: {
    title: "Run the safe configuration for a quarter",
    brief: "Instead of testing a category change, commit to the safe configuration for a quarter. Record the baseline for the target term, add the specific category as secondary, build the service page, add the service entries, and ask relevant customers for reviews. Measure at four, eight and twelve weeks. Then assess: did the target term improve without a primary change? If yes, document why the risky change was unnecessary. If no, document what you learned and whether the primary change is now better supported than it was.",
    success: [
      "You recorded a genuine baseline and measured at all three intervals.",
      "You reached a clear conclusion about whether the primary change is still needed.",
      "You documented the outcome for your evidence base either way."
    ]
  }
}

});
