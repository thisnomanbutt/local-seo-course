/* Level 3 · Module 4 — Maintaining and Protecting the Profile */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"3.4.1": {
  t: "Google's automatic updates and how to control them",
  why: "Google changes your profile without asking. Most businesses never notice. Knowing how and why it happens lets you catch and correct it.",
  body: [
    "h: Google edits your listing",
    "p: This surprises almost every business owner. Google's systems can change your business information based on what they find elsewhere: your website, other directories, user behaviour, or their own inference.",

    "h: What can change automatically",
    "l: **Hours**, inferred from your website or from user reports.|**Categories**, occasionally reassigned when Google reorganises or renames its category list, or infers a better match.|**Attributes**, particularly customer-reported ones.|**Business name formatting**, such as removing what it treats as extra descriptors.|**Address formatting**, standardised to its map data.|**Closure status**, if Google believes the business has closed.|**Photos shown**, which are selected rather than fixed.|**Services**, sometimes populated from category defaults or website content.",

    "warn: The two dangerous ones|A wrongly changed **primary category** can quietly cost significant ranking, and a wrongly applied **permanently closed** status can stop enquiries almost entirely. Both have happened to real businesses for weeks before anyone noticed.",

    "h: Why Google does it",
    "p: The intention is to keep information accurate when businesses do not maintain it. A restaurant that changed its hours and never updated Google is a bad experience for searchers. In aggregate these updates improve accuracy. For the individual well-maintained business, they are an occasional nuisance and a real risk.",

    "h: How to reduce unwanted changes",
    "n: **Keep your own data complete and correct.** Automated updates fill gaps. Fewer gaps, fewer updates.|**Make your website agree with your profile.** Hours, address and phone on the site should match exactly, including in structured data. Google reads your site.|**Keep citations consistent.** Contradictory external data invites correction.|**Respond promptly to any prompt Google shows you** asking to confirm information.|**Monitor**, since prevention is never complete.",
    "tip: Your website is your defence|If your site clearly and consistently states your hours, address and phone — in visible text and in structured data — Google has a strong, authoritative source that agrees with your profile. This is one of the practical reasons lesson 4.3.2 on structured data matters.",

    "h: Detecting changes",
    "l: Check the profile monthly as part of the routine from lesson 2.4.6.|Keep a dated screenshot of the knowledge panel, as suggested in lesson 1.3.3.|Watch for notifications, though these are not comprehensive.|Review the change history where available, covered in lesson 3.4.3.|Investigate any unexplained ranking change by checking the profile fields first.",

    "h: Reverting a change",
    "p: Where Google has changed something incorrectly, you can usually change it back. Points to note:",
    "l: Change it back once, deliberately, and record the date.|If it reverts again, the underlying data source is probably contradicting you — find and fix that source rather than fighting the symptom.|Do not oscillate. Repeatedly changing a value back and forth attracts scrutiny.|For persistent incorrect changes, the evidence to correct it is usually your website plus consistent citations.",
    "ex: The hours that would not stay|A cafe's hours kept reverting to an earlier closing time. The owner changed them back four times. The cause was the website, which still showed the old hours on a page nobody had updated. Google was reading the site and correcting the profile to match. Fixing the website fixed the profile permanently."
  ],
  take: [
    "Google can automatically change hours, categories, attributes, name formatting, closure status and more.",
    "The two most damaging automatic changes are a wrong primary category and a wrong permanently closed status.",
    "Complete profile data, a matching website and consistent citations all reduce unwanted changes.",
    "When a change keeps reverting, an external source is contradicting you — fix the source, not the symptom.",
    "Never oscillate values back and forth; change once, record the date, and investigate the cause."
  ],
  self: [
    "I know that Google can change profile fields automatically and which ones.",
    "I can name the two most damaging automatic changes.",
    "I know that a consistent website is the main defence against unwanted updates.",
    "I know what to do when a correction keeps reverting."
  ],
  quiz: [
    { q: "A business corrects its hours on the profile four times and they keep reverting. What is the most likely cause?",
      a: ["A Google bug", "Another source, such as the website, still shows the old hours and Google is reading it", "The account is suspended", "The category is wrong"],
      c: 1,
      why: "Automated updates draw on other sources. If the website still carries old hours, Google will keep correcting the profile to match it." },
    { q: "Which automatic change is most damaging to enquiries?",
      a: ["A photo being reordered", "A wrongly applied permanently closed status", "An attribute being added", "A description reformatted"],
      c: 1,
      why: "A closed status effectively removes the business from consideration. Businesses have lost weeks of enquiries before noticing." },
    { q: "What is the best defence against unwanted automatic updates?",
      a: ["Changing values frequently", "Keeping your profile complete and ensuring your website and citations state the same information consistently", "Removing your website link", "Disabling the profile"],
      c: 1,
      why: "Automated updates fill gaps and resolve contradictions. Complete, consistent information across your own sources removes the reason for them." }
  ],
  ex: {
    title: "Check for silent changes",
    time: "25 minutes",
    intro: "You will look for changes nobody told you about.",
    steps: [
      "Record every core field on your practice business's profile today: name, address, phone, category, hours, attributes.",
      "Compare each against what you recorded earlier in this course, or against the website and other sources.",
      "Note any field that differs from what you expect.",
      "For each difference, check whether the website or a citation could be the source.",
      "Correct any wrong value once, and record the date.",
      "Fix the underlying source where you identified one."
    ],
    deliver: "A field-by-field comparison with any differences identified, corrected once, and the underlying source addressed."
  },
  chal: {
    title: "Build the consistency defence",
    brief: "Audit every source Google could read about your practice business — website pages, structured data, major citations, social profiles — and check whether each states the same hours, address and phone. Build a table showing every source and every value. Then write a remediation plan that would make all of them agree, ordered by how much influence each source is likely to have. Finally, explain to a business owner in plain language why this work, which produces no immediate visible result, is worth doing.",
    success: [
      "Your table covers at least eight sources with their stated values.",
      "Your plan is ordered by likely influence, with reasoning.",
      "Your owner-facing explanation makes invisible work sound worthwhile without exaggerating the benefit."
    ]
  }
},

"3.4.2": {
  t: "Suggested edits from the public",
  why: "Strangers can propose changes to your business information, and those changes can be accepted. This is the risk most business owners never learn about.",
  body: [
    "h: How suggested edits work",
    "p: Anyone using Google Maps can suggest a change to a business listing: different hours, a different address, a different name, or that the business is closed. Some suggestions are reviewed, some are applied automatically, especially when several people suggest the same thing.",
    "p: The intention is crowd-sourced accuracy. Customers genuinely do notice when a business has moved or closed, and this keeps the map useful. The side effect is that your listing can be edited by people who are mistaken, or occasionally malicious.",

    "h: What can be suggested",
    "l: Hours changes.|Address changes.|Name changes.|Phone number changes.|Marking the business as permanently or temporarily closed.|Category changes.|Attribute changes.|Adding or removing features.",

    "warn: The malicious closure|The most damaging misuse is a competitor or disgruntled person marking a business as permanently closed. It is quick to do, it can take effect, and the business may lose weeks of enquiries before noticing. This is a real and recurring problem, not a theoretical one.",

    "h: How to detect them",
    "n: **Monitor the profile monthly** at minimum, and weekly for high-value businesses.|**Watch for notifications**, which sometimes arrive but should not be relied on.|**Keep dated screenshots** so changes are visible by comparison.|**Check the change history** where available, covered in lesson 3.4.3.|**Watch your enquiry volume.** A sudden unexplained drop should send you to the profile first.",
    "tip: The fastest early warning|Set up any monitoring that alerts you to changes in your listing, and check the listing itself every week if the business depends heavily on local search. The cost of checking is two minutes. The cost of not noticing a closure flag is weeks of revenue.",

    "h: Reversing a bad edit",
    "n: Correct the field back to the accurate value immediately.|If a closure flag was applied, remove it and confirm the business is open.|Record the date and what happened.|If it recurs, that pattern is itself evidence of a deliberate campaign.|Where a listing is repeatedly targeted, gather evidence and escalate through support channels. Level 8 module 1 covers evidence gathering properly.",

    "h: Reducing your exposure",
    "l: Keep all information complete and accurate, so there is nothing legitimate to correct.|Keep your website and citations consistent, so contradictory sources do not encourage edits.|Post updates during any temporary closure so customers understand the situation rather than reporting you closed.|Respond to reviews and questions, since active listings are more visibly maintained.|Make sure signage matches your listing, since mismatches prompt genuine corrections.",

    "ex: The renovation closure|A restaurant closed for three weeks of refurbishment without posting anything. Customers arrived, found it shut, and several suggested it was permanently closed. The suggestion was applied. When it reopened, the listing still showed permanently closed for another two weeks. A single post explaining the temporary closure, plus temporary closed hours set properly, would have prevented the whole episode.",

    "h: Suggested edits can also be useful",
    "p: Worth remembering: some suggestions are correct. A customer noticing that your hours changed and suggesting the right ones is doing you a favour. The problem is not the feature, it is the absence of monitoring. A business that checks its listing regularly benefits from the accurate suggestions and catches the wrong ones quickly."
  ],
  take: [
    "Members of the public can suggest changes to your listing, including marking it permanently closed.",
    "Malicious or mistaken closure flags are the most damaging misuse, and can cost weeks of enquiries.",
    "Detection depends on regular checking — notifications are not reliable enough to depend on.",
    "Reduce exposure by keeping information complete, consistent with your website, and by posting during temporary closures.",
    "Some suggestions are genuinely helpful; the real problem is the absence of monitoring."
  ],
  self: [
    "I know that the public can suggest changes and that some are applied automatically.",
    "I can explain the closure flag risk and why it is so damaging.",
    "I know how to detect and reverse a bad edit.",
    "I know how to reduce exposure during a temporary closure."
  ],
  quiz: [
    { q: "What is the most damaging public suggested edit?",
      a: ["A slightly different photo", "Marking the business as permanently closed", "Adding an attribute", "Suggesting a shorter description"],
      c: 1,
      why: "A closure flag effectively removes the business from consideration, and businesses frequently do not notice for weeks." },
    { q: "A restaurant closes for three weeks of refurbishment without announcing it. What is likely to happen?",
      a: ["Nothing", "Customers may suggest it is permanently closed, and that suggestion can be applied", "Google automatically pauses the listing", "Reviews are hidden"],
      c: 1,
      why: "People arriving to a closed business reasonably conclude it has shut. Setting temporary closed hours and posting an explanation prevents this." },
    { q: "How reliable are notifications as a way to detect suggested edits?",
      a: ["Completely reliable", "Not reliable enough to depend on — regular manual checking is necessary", "They do not exist", "They only work on mobile"],
      c: 1,
      why: "Notifications sometimes arrive and sometimes do not. Businesses that depend on local search should check the listing directly on a regular schedule." }
  ],
  ex: {
    title: "Set up suggested edit monitoring",
    time: "20 minutes",
    intro: "You will build the early warning system that prevents the most avoidable disaster in local SEO.",
    steps: [
      "Record every core field on your practice business's listing with today's date.",
      "Take a dated screenshot of the knowledge panel.",
      "Check whether any notification settings are available and enable them.",
      "Decide a checking frequency based on how much the business depends on local search.",
      "Set a recurring reminder at that frequency.",
      "Write a short procedure for what to do if a wrong change is found, including who to tell."
    ],
    deliver: "A dated baseline record, a scheduled checking routine, and a written response procedure."
  },
  chal: {
    title: "Write the closure emergency procedure",
    brief: "Write a complete emergency procedure for discovering that a business has been wrongly marked permanently closed. Cover: how to confirm it, how to reverse it immediately, what else to check for collateral damage, how to communicate with customers who may have seen it, how to estimate the revenue lost, how to detect whether it was malicious, and what monitoring to put in place afterwards. Write it so someone could follow it under pressure without prior knowledge.",
    success: [
      "The procedure starts with confirmation and immediate reversal, in that order.",
      "It addresses collateral damage and customer communication, not just the flag itself.",
      "It includes a method for judging whether the edit was malicious and what to do if so."
    ]
  }
},

"3.4.3": {
  t: "Reading a profile's change history",
  why: "When something goes wrong, the change history tells you what happened and when. It turns guessing into evidence.",
  body: [
    "h: What the history shows",
    "p: Google Business Profile provides a record of changes made to a listing — what changed, when, and often whether it was made by the owner, by Google, or accepted from a suggestion. The exact detail available varies and changes over time, but the principle is stable and extremely useful.",

    "h: Why it matters",
    "l: It identifies **when** a change happened, which lets you match it against a ranking or enquiry change.|It identifies **who** made it — you, a colleague, Google, or the public.|It reveals changes nobody knew about.|It provides evidence when disputing a change.|It is the fastest route from 'something is wrong' to 'here is what happened'.",

    "h: The diagnostic sequence",
    "p: This is one of the most useful habits in the whole course. When performance drops:",
    "n: Open the change history first, before anything else.|Look for any change in the two to six weeks before the drop.|Pay particular attention to category, name, address and hours.|Note anything changed by Google or accepted from a suggestion.|Compare the change date with the start of the performance change.|If a change matches, you have a strong candidate cause. If nothing matches, the cause is external — a competitor, an update, or a seasonal effect.",
    "tip: The two-question diagnosis|Most local SEO problems are answered by: what changed on the listing, and when? The change history answers both in under a minute. Checking it first will save you hours of investigating things that were never the problem.",

    "h: What you will typically find",
    "table: Finding ; Typical meaning ; Action || A category change you did not make ; Automated update or accepted suggestion ; Restore and check the source || Hours changed by Google ; Inference from website or user reports ; Restore, then fix the website || A name reformatted ; Automated correction of extra descriptors ; Check the name is compliant, then restore if wrong || Nothing changed at all ; The cause is external ; Look at competitors, updates and seasonality || Many changes in a short period ; Someone else is editing ; Check access, lesson 2.4.4",

    "h: Building your own history",
    "p: Whatever Google provides, keep your own log. As established in lesson 3.3.6, a change log with date, field, old value, new value, reason and who made it is the record that makes attribution possible. Google's history shows what changed. Your log shows **why**, which is the part that matters when you are explaining results months later.",

    "ex: The three-week gap|A business reported a ranking drop. The change history showed the primary category had changed nineteen days earlier, not by the owner. Rankings had begun declining seventeen days earlier. The two-day gap was consistent with processing time. Restoring the category recovered the position over the following three weeks. Without the history, the investigation would have started with reviews, citations and competitors, and could have taken weeks.",

    "h: Limitations",
    "l: Not every change is always visible.|The detail available varies by market and over time.|It will not tell you why an external source contradicted you.|It does not cover changes to reviews or to the competitive landscape.",
    "p: So it is the first check, not the only one. But it is the fastest, and it is the one most practitioners forget."
  ],
  take: [
    "The change history shows what changed on a listing, when, and often who changed it.",
    "Check it first whenever performance changes — it answers what and when in under a minute.",
    "Look especially for category, name, address and hours changes in the weeks before a drop.",
    "If nothing changed, the cause is external: competitors, an update, or seasonality.",
    "Keep your own change log too, because it records why, which Google's history cannot."
  ],
  self: [
    "I know where to look for a profile's change history.",
    "I check it first when performance changes.",
    "I can interpret common findings and know what action each implies.",
    "I keep my own change log alongside it."
  ],
  quiz: [
    { q: "When performance drops, what should you check first?",
      a: ["Competitor backlinks", "The profile change history, to see what changed and when", "The website loading speed", "Social media engagement"],
      c: 1,
      why: "It answers what and when in under a minute, and a matching change date is the strongest single clue available in local diagnosis." },
    { q: "The change history shows nothing changed in the period before a drop. What does this tell you?",
      a: ["The history is broken", "The cause is external — competitors, an algorithm update, or seasonality", "The business is suspended", "Reviews were deleted"],
      c: 1,
      why: "Ruling out internal changes is genuinely valuable. It redirects the investigation to the competitive landscape and external factors." },
    { q: "Why keep your own change log when Google provides a history?",
      a: ["Google's history is always wrong", "Your log records why each change was made, which the history cannot show", "It is legally required", "It improves rankings"],
      c: 1,
      why: "Attribution months later depends on knowing the reasoning, not just the fact. Your log also captures changes outside the profile entirely." }
  ],
  ex: {
    title: "Read the history and build the timeline",
    time: "25 minutes",
    intro: "You will practise the fastest diagnostic step in local SEO.",
    steps: [
      "Open the change history for your practice business's profile.",
      "List every change visible, with its date and who appears to have made it.",
      "Note any change you did not make and did not know about.",
      "Build a simple timeline of the last six months showing changes alongside any known performance data.",
      "Identify any change that lines up with a performance shift.",
      "Record your conclusion, or record that nothing internal explains it."
    ],
    deliver: "A six-month timeline of profile changes against performance, with a stated conclusion."
  },
  chal: {
    title: "Build the diagnostic timeline template",
    brief: "Create a reusable timeline template for diagnosing any local ranking change. It should combine profile changes, website changes, review activity, citation work, known algorithm updates and competitor changes on one time axis. Specify where each type of data comes from and how far back to look. Then use it on your practice business and write what the completed timeline reveals that looking at any single source would not have shown.",
    success: [
      "Your template combines at least five data sources on one timeline.",
      "You specified the source and lookback period for each.",
      "You completed it for a real business and identified an insight only the combined view revealed."
    ]
  }
},

"3.4.4": {
  t: "Safe editing: order, pace and timing",
  why: "How you make changes matters as much as which changes you make. A safe editing discipline prevents suspensions and makes results measurable.",
  body: [
    "h: Three principles",
    "n: **Order.** Make changes in a sequence where each one is supported by evidence already in place.|**Pace.** Leave enough time between sensitive changes that each can settle and be attributed.|**Timing.** Avoid making changes at moments when scrutiny is already high.",

    "h: The safe order for a full optimisation",
    "p: When you take over a neglected profile, resist the urge to fix everything at once. A sensible sequence:",
    "n: **Week 1: routine, low-risk fields.** Photos, attributes, services, description, hours. These are safe, produce quick wins, and carry almost no risk.|**Week 2: website and links.** Correct the website URL, add tracking, fix broken destinations.|**Week 3 to 4: the primary category**, if research supports a change. One change, recorded, then measured.|**Week 5 onward: address or name**, only if genuinely required, and only one of them, with evidence prepared first.|**Throughout: reviews, citations and content**, which are external and carry no listing risk.",
    "warn: The eager-first-week mistake|A new practitioner takes over a listing and changes the name, category, address and hours in the first two days, wanting to show progress. The listing is suspended. Everything was well intended and the sequence was the problem, not the intent.",

    "h: Pace",
    "l: Two weeks minimum between sensitive field changes, as established in lesson 3.3.6.|Allow four weeks before judging the effect of a category change.|Do not revert a change within days — give it time to be processed.|Never oscillate a value.",

    "h: Timing: when not to change things",
    "table: Moment ; Why to wait || During an active verification or review ; Edits can invalidate or complicate the process || Immediately after a suspension is lifted ; The listing is under closer observation || During a known algorithm update ; Attribution becomes impossible || Immediately after a competitor report ; Changes may look like evasion || During the business's peak season ; The cost of a temporary dip is highest || Just before a holiday period ; Nobody is available to react if something goes wrong",
    "tip: The peak season rule|Never make a significant profile change during the busiest weeks of a business's year. Even a change that will help long term can cause a short-term dip, and a dip during peak season costs far more than the same dip in a quiet month. Plan significant changes for the quiet period.",

    "h: One change, one measurement",
    "p: The discipline that makes you better over time is simple: change one thing, record the date, measure for long enough, and write down what happened. Practitioners who do this build genuine knowledge about what works in their markets. Practitioners who change ten things at once never learn anything, because they can never attribute an effect.",
    "ex: Two practitioners, two years|One changes everything at once on every client and reports the overall result. The other changes one thing at a time and records outcomes. After two years the first has two years of experience. The second has a personal evidence base of what actually moves results in their specific markets, which is worth far more and cannot be bought.",

    "h: When to break the rules",
    "p: Sometimes you must change several things quickly — a business genuinely moved, a wrong category is actively costing money, a closure flag must be removed today. In those cases:",
    "l: Do it, because the cost of waiting exceeds the risk.|Record everything with dates and reasons.|Prepare evidence in advance.|Accept that attribution will be imperfect and say so honestly in reporting.|Monitor more closely than usual for the following month."
  ],
  take: [
    "Make low-risk changes first, then links, then category, then name or address only if genuinely required.",
    "Leave at least two weeks between sensitive changes and four weeks before judging a category change.",
    "Avoid changes during verification, after a suspension, during algorithm updates, or in peak season.",
    "Change one thing, record the date, measure, and write down the result — this is how real expertise accumulates.",
    "Break the pacing rules only when the cost of waiting genuinely exceeds the risk, and say so in reporting."
  ],
  self: [
    "I can describe a safe editing sequence for a neglected profile.",
    "I know the minimum spacing between sensitive changes.",
    "I can name at least four moments when changes should be postponed.",
    "I understand why one-change-one-measurement builds expertise."
  ],
  quiz: [
    { q: "You take over a neglected profile. What should you change in the first week?",
      a: ["The name, address and category", "Low-risk fields: photos, attributes, services, description and hours", "Nothing at all for a month", "Everything simultaneously"],
      c: 1,
      why: "Low-risk fields produce quick improvement with almost no risk, while sensitive changes need evidence, spacing and measurement." },
    { q: "When is the worst time to make a significant profile change?",
      a: ["During a quiet month", "During the business's peak season", "On a Monday", "In the first quarter"],
      c: 1,
      why: "Even beneficial changes can cause a short-term dip, and a dip during the busiest weeks of the year costs far more than the same dip when demand is low." },
    { q: "Why does changing one thing at a time matter beyond safety?",
      a: ["It is faster", "It makes effects attributable, which is how a practitioner builds a real evidence base over years", "Google requires it", "It reduces cost"],
      c: 1,
      why: "Without attribution you cannot learn what works. Practitioners who isolate changes accumulate genuine market-specific knowledge that others never develop." }
  ],
  ex: {
    title: "Sequence your outstanding changes",
    time: "25 minutes",
    intro: "You will turn a list of fixes into a safe, measurable plan.",
    steps: [
      "List every change you have identified for your practice business across Level 3 so far.",
      "Rate each by sensitivity using the table from lesson 3.3.6.",
      "Group them into weeks following the safe order in this lesson.",
      "Check the business's seasonal pattern and avoid scheduling sensitive changes in peak weeks.",
      "For each sensitive change, write the measurement you will take before and the date you will assess it.",
      "Write the whole thing as a dated schedule."
    ],
    deliver: "A dated change schedule ordered by risk, avoiding peak season, with measurement points defined."
  },
  chal: {
    title: "Start your personal evidence base",
    brief: "Create a permanent record you will keep for your whole career: a simple table where every isolated change you make is logged with the business type, market density, the change, the date, the baseline measurement, the result after four weeks, and your conclusion. Populate it with every change you have made so far in this course. Then write down the three questions you most want this record to answer over the next two years, so you make changes deliberately enough to answer them.",
    success: [
      "Your record captures business type and market density, not just the change itself.",
      "You populated it with every change made so far, including ones with no result yet.",
      "You defined three specific questions you want it to answer over time."
    ]
  }
},

"3.4.5": {
  t: "Bulk management and location groups",
  why: "Managing ten locations one at a time is slow. Managing two hundred that way is impossible. Bulk tools are how multi-location work becomes feasible.",
  body: [
    "h: What bulk management provides",
    "l: **Location groups**, which let you organise many listings and share access across a team.|**Bulk upload**, usually via a spreadsheet, to create or update many listings at once.|**Bulk verification**, for organisations with many locations, which avoids verifying each individually.|**Bulk editing** of certain fields across selected locations.|**Aggregate reporting** across a group.",

    "h: Location groups",
    "p: A location group is a container holding many listings, with its own set of users. This matters because:",
    "n: Access is granted at group level rather than listing by listing.|Staff changes are handled once rather than two hundred times.|Ownership is clearer, which supports the governance principles in lesson 2.4.4.|Reporting can be viewed across the group.",

    "h: Bulk upload, used carefully",
    "p: A spreadsheet upload can create or update hundreds of listings in one action. That power cuts both ways.",
    "warn: A bad bulk upload damages everything at once|An error in a spreadsheet column applies to every row. Wrong hours across two hundred locations, or a name format change applied everywhere, can be applied in seconds and take weeks to unpick. Always test on a small subset first.",
    "l: Export the current data before any upload, so you have a rollback.|Test on three to five locations before applying to all.|Check the file for formatting errors, especially in address and phone columns.|Be careful with columns you did not intend to change — blank cells may clear existing values.|Upload during a quiet period, not before a weekend.",

    "h: Bulk verification",
    "p: Organisations with many locations may be eligible for bulk verification, which verifies a set of listings through a review of the organisation rather than location by location. It typically requires:",
    "l: A significant number of locations.|Consistent, accurate data across all of them.|Evidence of the organisation's legitimacy.|A single responsible account.",
    "p: It takes time to arrange but transforms the practicality of managing a large network.",

    "h: What should be standard versus local",
    "table: Field ; Standard across group ; Locally specific || Business name format ; Yes ; No — but the location element varies || Primary category ; Usually yes ; Sometimes varies by location type || Description ; Template with local detail ; Partly || Hours ; No ; Yes, always || Phone ; No ; Yes, local number per location || Website URL ; No ; Yes, each location's own page || Photos ; No ; Yes, real photos of that location || Attributes ; Partly ; Parking and access vary by site",
    "tip: The photo trap in multi-location|Uploading the same stock interior photo to all forty locations is fast and it undermines every one of them. Customers notice, and a listing showing a building that is not the one they will visit is actively misleading. Real photos per location is slow, unglamorous work that genuinely separates good multi-location programmes from bad ones.",

    "h: Governance",
    "p: With many locations and many people, governance becomes the main problem rather than the technical work. Lesson 10.1.3 covers this in full. At this stage the essentials are:",
    "l: Define who may change what.|Keep a single source of truth for location data, outside Google.|Require changes to go through that source, then flow to Google.|Audit regularly for drift between the source and the live listings.",
    "ex: The local manager problem|A retail chain gave every store manager edit access so they could update hours quickly. Within a year, store names had drifted into fifteen different formats, some had added keywords, and several had changed categories. The intention was good. The absence of governance made it a year of cleanup work."
  ],
  take: [
    "Location groups organise many listings and let access be managed once rather than per listing.",
    "Bulk upload is powerful and dangerous — export first, test on a few locations, and beware blank cells clearing values.",
    "Bulk verification transforms large networks but requires consistent data and organisational evidence.",
    "Hours, phone, website and photos must always be locally specific, never shared across locations.",
    "With many locations, governance is the main problem: a single source of truth plus defined change rights."
  ],
  self: [
    "I can explain what a location group is and why it helps.",
    "I know the precautions to take before any bulk upload.",
    "I can say which fields must be locally specific and which can be standardised.",
    "I understand why governance becomes the main issue at scale."
  ],
  quiz: [
    { q: "What is the most important precaution before a bulk upload?",
      a: ["Uploading on a Friday", "Exporting current data and testing on a small subset first", "Using as many columns as possible", "Uploading twice"],
      c: 1,
      why: "An error applies to every row instantly. An export provides rollback, and a small test reveals mistakes before they affect the whole network." },
    { q: "Which field must always be locally specific in a multi-location business?",
      a: ["Business name format", "Photos of the actual location", "Brand colours", "Company history"],
      c: 1,
      why: "A shared stock photo shows customers a building they will not visit. Real photos per location are essential for both accuracy and trust." },
    { q: "A chain gives every store manager edit access. What typically happens without governance?",
      a: ["Data quality improves", "Names, categories and formats drift into many inconsistent versions", "Nothing changes", "Listings get verified faster"],
      c: 1,
      why: "Many well-meaning people making independent reasonable choices produces inconsistency. Governance defines who may change what, preventing drift." }
  ],
  ex: {
    title: "Design the standard versus local specification",
    time: "30 minutes",
    intro: "You will produce the document that keeps a multi-location network consistent.",
    steps: [
      "Take a real or imagined business with ten locations.",
      "List every profile field.",
      "For each, decide whether it is standardised across the group, locally specific, or a template with local detail.",
      "For standardised fields, write the exact standard.",
      "For template fields, write the template with clearly marked local slots.",
      "Note who is permitted to change each category of field."
    ],
    deliver: "A field-by-field standard versus local specification with templates and change permissions."
  },
  chal: {
    title: "Plan a bulk update safely",
    brief: "Plan a bulk update that changes the description template and adds a new attribute across forty locations. Specify the full process: what you export first, how you construct and check the file, which locations you test on and why those, what you check after the test, how you roll out the rest, what you monitor afterwards, and exactly how you would roll back if something went wrong. Include the specific spreadsheet risks such as blank cells and formatting, and how you guard against each.",
    success: [
      "Your process includes a genuine rollback path, not just a backup.",
      "You specified test location selection criteria rather than picking arbitrarily.",
      "You named the specific spreadsheet failure modes and the guard against each."
    ]
  }
},

"3.4.6": {
  t: "A monthly profile maintenance routine",
  why: "This lesson turns everything in Level 3 into a repeatable routine that takes under half an hour and prevents most problems.",
  body: [
    "h: Why a routine beats effort",
    "p: Local SEO rewards consistency more than intensity. A business that spends twenty-five minutes a month on a structured routine will out-perform one that spends a frantic day every six months, because most damage comes from things that go unnoticed.",

    "h: The monthly routine",
    "n: **Verification and status.** Confirm the listing is verified, not suspended, and not marked closed.|**Core fields.** Check name, address, phone, primary category, hours against your standard.|**Change history.** Look for anything you did not make.|**Suggested edits.** Check for and reverse anything wrong.|**Reviews.** Read new ones, respond to all, note any pattern.|**Questions.** Answer new ones, correct wrong public answers.|**Photos.** Upload three to five new ones, check which is showing in search.|**Links.** Click the website, booking, menu and ordering links and confirm they work.|**Performance.** Record views, calls, direction requests and website clicks.|**Log.** Write the date and anything notable.",
    "p: For most single-location businesses, this is twenty to thirty minutes.",

    "h: The quarterly additions",
    "l: Mystery-shop every contact route, as in lesson 3.3.4.|Re-check competitor hours, reviews and photos.|Review the services list for anything discontinued.|Check a sample of citations for consistency.|Test the booking path end to end on a phone.",

    "h: The annual additions",
    "l: Re-check eligibility and model against current guidelines.|Audit access and remove departed people.|Refresh the verification evidence pack.|Review categories and attributes for new options.|Rewrite the description if the business has changed.|Set special hours for the next twelve months of holidays.|Review the whole NAP standard and citation set.",

    "h: What to do with what you find",
    "table: Finding ; Urgency ; Action || Listing suspended or closed ; Immediate ; Stop everything else, Level 8 || Wrong category ; Same day ; Restore, record, investigate source || Wrong hours or phone ; Same day ; Restore, check website source || Broken link ; Same week ; Fix and check tracking || Unanswered review or question ; Same week ; Respond || Photo set stale ; Same month ; Upload new photos || Citation inconsistency ; Next quarter ; Add to citation work",

    "h: Making it actually happen",
    "warn: The routine that gets abandoned|Most maintenance routines are designed too thoroughly, take too long, and are dropped by month three. Design the version that will genuinely be done every month, even if it covers less. A ten-minute routine performed twelve times a year beats a two-hour routine performed twice.",
    "tip: Same day every month|Pick a fixed day — the first Monday, say — and always do it then. Routines tied to a fixed date survive. Routines tied to 'when I get a chance' do not.",

    "h: Recording it",
    "p: Keep a simple monthly record: date, what you checked, what you found, what you did. Over a year this becomes genuinely valuable: it shows the client what ongoing work involves, it provides the timeline for any future diagnosis, and it demonstrates that the invisible work is being done. Lesson 9.3.7 builds this into a client report.",
    "ex: The value of the boring record|A client questioned whether monthly maintenance was worth paying for. The consultant produced twelve monthly records showing four reversed suggested edits, two corrected automated category changes, three broken links fixed and every review answered within a week. The client had never seen any of it happen, which was precisely the point. The contract was renewed."
  ],
  take: [
    "Consistency beats intensity — most damage comes from things that go unnoticed between infrequent reviews.",
    "The monthly routine covers status, core fields, change history, suggested edits, reviews, questions, photos, links and performance.",
    "Add quarterly items like mystery shopping and citation sampling, and annual items like eligibility and access audits.",
    "Design the routine that will genuinely be done every month, not the most thorough one.",
    "Keep a monthly record — it proves invisible work and provides the timeline for future diagnosis."
  ],
  self: [
    "I can list the ten items in the monthly routine.",
    "I know which findings require same-day action.",
    "I understand why a shorter routine actually performed beats a thorough one abandoned.",
    "I keep a monthly record and know what it is worth."
  ],
  quiz: [
    { q: "Why does a shorter monthly routine often outperform a thorough quarterly one?",
      a: ["It is cheaper", "Most damage comes from unnoticed changes, and frequent checking catches them early", "Google prefers monthly activity", "Quarterly routines are forbidden"],
      c: 1,
      why: "Wrong categories, closure flags and broken links cause damage for as long as they go undetected. Frequency of detection matters more than depth of review." },
    { q: "Which finding requires stopping everything else?",
      a: ["A stale photo set", "The listing being suspended or marked closed", "A citation inconsistency", "An unanswered question"],
      c: 1,
      why: "Suspension or closure effectively removes the business from local search. Nothing else you could do that day has comparable value." },
    { q: "What is the main value of keeping a monthly maintenance record?",
      a: ["It improves rankings directly", "It proves invisible work was done and provides the timeline for future diagnosis", "It is legally required", "It replaces reporting"],
      c: 1,
      why: "Maintenance work is invisible when it succeeds. The record makes it visible to the client and becomes the timeline any future investigation depends on." }
  ],
  ex: {
    title: "Build and run your routine once",
    time: "35 minutes",
    intro: "You will design the routine and complete it, so you know exactly how long it takes.",
    steps: [
      "Write out the ten monthly items as a checklist.",
      "Run every item on your practice business now, timing yourself.",
      "Record what you found for each item.",
      "Take action on anything requiring same-day or same-week attention.",
      "If it took more than thirty minutes, cut it down to the version you will genuinely repeat.",
      "Fix a specific day of the month and set a recurring reminder."
    ],
    deliver: "A completed first run with findings recorded, a trimmed repeatable checklist, and a fixed monthly date."
  },
  chal: {
    title: "Design the routine for a portfolio",
    brief: "Design a maintenance system for someone managing twenty client listings. Specify how the monthly routine is divided across the month, what is automated versus manual, how findings are recorded centrally, what triggers escalation to you, how the client sees the work, and how long the whole portfolio takes per month. Then calculate the time cost per client and state what you would need to charge for it to be sustainable. Be realistic rather than idealistic about what a person can sustain.",
    success: [
      "The system spreads the work across the month rather than assuming one large session.",
      "You calculated realistic per-client time and translated it into a price.",
      "You specified what the client actually sees, so the invisible work becomes visible."
    ]
  }
}

});
