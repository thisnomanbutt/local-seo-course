/* Level 10 · Module 1 — Multi-Location Mastery */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"10.1.1": {
  t: "How multi-location local SEO is genuinely different",
  why: "Managing fifty locations is not managing one location fifty times. The differences change what you do, not just how much of it.",
  body: [
    "h: What stays the same",
    "p: Every principle from Levels 1 to 9 still applies to each location individually. Relevance, distance and prominence still decide rankings. Categories, reviews, pages and links still matter. Nothing in the fundamentals changes.",

    "h: What genuinely changes",
    "n: **Governance replaces technique as the main problem.** Deciding who may change what matters more than knowing what to change, from lesson 3.4.5.|**Data management becomes the core work.** One accurate maintained source of location data determines everything downstream.|**Consistency and localisation must be balanced.** Too much standardisation produces templated thinness; too little produces chaos.|**Errors multiply instantly.** A mistake in a bulk process affects every location at once.|**Reporting must aggregate and exceptionalise.** Nobody reads fifty individual reports.|**Your own locations compete**, which does not happen with one, from lesson 10.1.7.|**The website architecture becomes central**, from lesson 4.2.3.",

    "h: The scale thresholds",
    "table: Locations ; What changes || 2 to 5 ; Manual management still works; treat each individually || 6 to 20 ; A master data file becomes necessary; bulk tools start to pay || 21 to 100 ; Governance becomes the main issue; exception reporting essential || 100 plus ; Systems and process dominate; individual attention is impossible",
    "tip: The failure mode at every scale is the same|Multi-location programmes fail because nobody owns the data. Not because the SEO was wrong, but because nobody could say with confidence what the correct hours, phone number and manager were for location 34. Solve data ownership and most of the rest follows.",

    "h: The two opposite failures",
    "warn: Over-centralisation and under-centralisation|Over-centralised: every location gets the same description, the same stock photographs, the same hours pulled from a template, and none of them looks like a real business. Under-centralised: every manager edits their own listing, names drift into fifteen formats, categories diverge, and the brand becomes incoherent. Both are common and both are avoidable with the specification from lesson 3.4.5.",

    "h: What multi-location gains",
    "l: Shared authority from a strong brand website.|Economies of scale in process and tooling.|The ability to test on a subset before rolling out.|Cross-location learning: what works at one location can be applied at forty.|Aggregate data that reveals patterns invisible at one location.|Coverage that no single location could achieve.",

    "h: What multi-location loses",
    "l: Local specificity, unless deliberately preserved.|The owner's personal knowledge of the area, from lesson 4.1.4.|Individual attention to each listing.|Speed of response to local issues.|Local review response in an authentic voice, unless delegated well.",

    "h: The strategic point",
    "p: The best multi-location programmes get the scale benefits while preserving what makes individual locations work. That means centralising the things that benefit from consistency — data, standards, process, tooling — and devolving the things that benefit from local knowledge — photographs, local content, review responses, community involvement.",
    "ex: The chain that looked like forty real businesses|A forty-location retailer centralised its data, standards and reporting, and devolved photographs, review responses and local content to store managers with a simple monthly checklist. Each listing showed the real store, real staff and real local detail, within a consistent brand framework. It outperformed a larger competitor whose listings were identical templated entries, because customers could tell which ones represented real places."
  ],
  take: [
    "Every principle from earlier levels still applies to each location individually — the fundamentals do not change.",
    "Governance and data management replace technique as the main problem at scale.",
    "The failure mode at every scale is the same: nobody owns the location data.",
    "Over-centralisation produces templated thinness; under-centralisation produces incoherence. Both are common.",
    "Centralise data, standards, process and tooling; devolve photographs, local content, review responses and community involvement."
  ],
  self: [
    "I can explain what changes and what stays the same at multi-location scale.",
    "I know the scale thresholds and what each demands.",
    "I can describe the two opposite failure modes.",
    "I know what should be centralised and what should be devolved."
  ],
  quiz: [
    { q: "What is the main problem at multi-location scale?",
      a: ["Keyword research", "Governance and data ownership — knowing who may change what and what the correct data is", "Link building", "Review responses"],
      c: 1,
      why: "Technique does not change. Programmes fail because nobody can say with confidence what the correct data is for a given location, or who may alter it." },
    { q: "What should be devolved to individual locations rather than centralised?",
      a: ["Business name format and categories", "Photographs, local content, review responses and community involvement", "The master data file", "Reporting standards"],
      c: 1,
      why: "These depend on local knowledge and authenticity, which central teams cannot supply. Data, standards and process benefit from consistency and should be central." },
    { q: "What does over-centralisation produce?",
      a: ["Better consistency with no downside", "Templated thinness — identical descriptions and stock photographs so no location looks like a real business", "Faster response times", "Better local content"],
      c: 1,
      why: "Customers can tell the difference between a listing representing a real place and a templated entry, and the templated version performs accordingly." }
  ],
  ex: {
    title: "Assess a multi-location brand",
    time: "35 minutes",
    intro: "You will diagnose whether a real brand has got the balance right.",
    steps: [
      "Find a brand with at least eight locations in your region.",
      "Examine five of its listings side by side.",
      "Check whether the descriptions, photographs and hours are identical or locally specific.",
      "Check whether the names and categories are consistent across locations.",
      "Check whether reviews receive responses and whether they sound local or templated.",
      "Diagnose whether the brand is over-centralised, under-centralised or balanced."
    ],
    deliver: "A multi-location assessment of five listings with a diagnosis of the centralisation balance."
  },
  chal: {
    title: "Design the centralise-devolve split",
    brief: "For a hypothetical thirty-location business, produce the complete specification of what is centralised and what is devolved. Cover every profile field, website content, reviews, photographs, citations, links and community involvement. For each, state who owns it, who may change it, and why that allocation is correct. Then identify the three items where the allocation is genuinely debatable, and argue the decision you would make.",
    success: [
      "Every element is allocated with a stated owner and a reason.",
      "You identified genuinely debatable allocations rather than treating all as obvious.",
      "You argued your decision on the debatable items rather than avoiding them."
    ]
  }
},

"10.1.2": {
  t: "Location data management at scale",
  why: "The master data file is the foundation of all multi-location work. Everything else depends on it being correct and maintained.",
  body: [
    "h: What the master file is",
    "p: A single authoritative record of every location's details, from which every downstream system is populated: profiles, website pages, citations, structured data, internal systems.",
    "box: **One source of truth, maintained by one owner, feeding everything else.**",

    "h: What it contains",
    "n: **Identity:** location identifier, business name in the standard format, location element.|**Address:** street, suite, locality, region, postcode, country, formatted to the NAP standard from lesson 1.3.5.|**Coordinates:** latitude and longitude for the correct pin, from lesson 2.1.2.|**Contact:** local phone, any tracking number, email.|**Hours:** regular, and any special hours.|**Web:** the location page URL.|**Classification:** primary category, secondary categories, services, attributes.|**Content:** the local description, from the template with local slots.|**People:** manager, who responds to reviews, who may edit.|**Status:** open, opening, temporarily closed, permanently closed, with dates.|**History:** when each field was last changed and by whom.",

    "h: Maintaining it",
    "l: One named owner, with a named deputy.|A defined process for requesting a change.|A defined process for approving it.|A record of every change with its date and reason.|A periodic audit comparing the file against the live listings, from lesson 10.1.6.|A review whenever a location opens, closes, moves or changes manager.",
    "warn: The file that drifts|A master file that is not audited against reality becomes wrong within a year. Managers change hours locally, phone numbers change, staff leave. Without a periodic comparison against live listings, the file becomes a record of what was true once, which is worse than useless because it is trusted.",

    "h: The change process",
    "n: A change is requested, with the reason.|It is checked against the standards.|It is approved by the owner.|It is recorded in the file with the date.|It is pushed to the profile, the website and the citations.|It is verified as applied.|Anything that did not apply is followed up.",
    "tip: Changes flow one way|Never let anyone change a listing directly without the file being updated. If listings can be edited independently, the file stops being authoritative within weeks and you lose the ability to know what is correct. The rule is simple: change the file, then push. Never push, then hope someone updates the file.",

    "h: Format and tooling",
    "l: A spreadsheet is entirely adequate below roughly thirty locations.|Above that, a proper database or a location management platform becomes worthwhile.|Whatever the format, it must be exportable, backed up and accessible to whoever needs it.|It must accommodate the bulk upload format used for profiles, from lesson 3.4.5.|Avoid formats that only one person can use.",

    "h: Opening and closing locations",
    "n: A new location is added to the file before anything is created.|Every downstream item is created from the file.|A closing location is marked in the file with the date.|The closure process from lesson 8.3.5 is followed.|The file retains closed locations with their status, rather than deleting the row.|Historical records matter for later questions.",
    "ex: The audit that found forty errors|A twenty-two location business audited its master file against live listings for the first time in three years. Forty discrepancies were found: six wrong phone numbers, eleven hours mismatches, four categories changed by managers, two wrong addresses, and seventeen listings pointing at the brand homepage rather than their own location page. None had been noticed. Correcting them, and establishing a quarterly audit, produced a measurable improvement across the network."
  ],
  take: [
    "The master file is one authoritative record of every location, maintained by one owner, feeding every downstream system.",
    "It contains identity, address, coordinates, contact, hours, web, classification, content, people, status and change history.",
    "Changes flow one way: change the file, then push — never push directly and hope the file is updated.",
    "A file that is not audited against live listings becomes wrong within a year and is worse than useless because it is trusted.",
    "A spreadsheet is adequate below about thirty locations; above that a database or platform becomes worthwhile."
  ],
  self: [
    "I know what a master location data file must contain.",
    "I know that changes must flow from the file outward, never the reverse.",
    "I audit the file against live listings periodically.",
    "I retain closed locations in the file rather than deleting them."
  ],
  quiz: [
    { q: "What is the rule about how changes flow?",
      a: ["Change the listing, then update the file", "Change the file, then push to the listing — never the reverse", "Either order is fine", "Only the listing matters"],
      c: 1,
      why: "If listings can be edited independently, the file stops being authoritative within weeks and nobody can say what the correct data is any more." },
    { q: "What happens to a master file that is never audited against live listings?",
      a: ["It stays accurate", "It becomes wrong within a year and is worse than useless because it is still trusted", "It updates automatically", "Nothing changes"],
      c: 1,
      why: "Managers change hours, numbers change, staff leave. Without comparison against reality the file records what was true once while being relied on as current." },
    { q: "What should happen to a location that closes?",
      a: ["Delete the row from the file", "Mark it closed with the date and retain the row, because historical records matter for later questions", "Leave it as open", "Move it to a separate system"],
      c: 1,
      why: "Deleting the record destroys the history needed to answer questions later about what existed and when, which is exactly when it is most needed." }
  ],
  ex: {
    title: "Build a master data file",
    time: "40 minutes",
    intro: "You will create the foundation of all multi-location work.",
    steps: [
      "Create a spreadsheet with one row per location and the eleven field groups from this lesson as columns.",
      "Populate it for a real multi-location business, or for three imagined locations.",
      "Add a change log section recording date, field, old value, new value and who approved.",
      "Write the change request and approval process.",
      "Name the owner and the deputy.",
      "Write the audit procedure and set its frequency."
    ],
    deliver: "A populated master data file with a change log, a documented change process, named owners and an audit procedure."
  },
  chal: {
    title: "Run a master file audit",
    brief: "Take a multi-location business, real or constructed, and audit its listings against what a master file would contain. For each location check the name, address, phone, hours, category, website URL and pin. Record every discrepancy. Then categorise the discrepancies by type, identify which are most common, and work out what process failure produced each type. Finally, design the process changes that would prevent each category recurring.",
    success: [
      "You audited every location against every field rather than sampling.",
      "You categorised discrepancies and identified the process failure behind each type.",
      "Your process changes address causes rather than only correcting the current errors."
    ]
  }
},

"10.1.3": {
  t: "Governance: who may change what",
  why: "At scale, governance determines outcomes more than technique does. This lesson sets out how to construct it.",
  body: [
    "h: The governance question",
    "p: Three things must be decided for every element: **who owns it, who may change it, and who approves the change.** Without explicit answers, either everyone changes everything or nobody changes anything.",

    "h: The three tiers",
    "table: Tier ; Elements ; Who may change ; Approval || Locked ; Business name format, primary category, address, website URL structure ; Central only ; Data owner || Controlled ; Description template, secondary categories, services, attributes ; Central, with local input ; Data owner || Local ; Photographs, review responses, posts, local content, hours within policy ; Location manager ; None required within policy",
    "tip: Make the locked tier genuinely small|Every element in the locked tier creates a request queue and a delay. Lock only what genuinely must be consistent: the name format, the category, the address and the URL structure. Everything else can be controlled or local, which keeps the system moving and keeps managers engaged.",

    "h: Access management",
    "n: The business, or each location's operating entity, holds primary ownership, from lesson 2.4.4.|Central team holds owner or manager access across all locations.|Location managers hold manager access to their own listing only.|Agencies hold manager access, never primary ownership.|Access is reviewed when anyone joins or leaves.|A named person is responsible for the access register.",
    "warn: The departed manager problem|In a network of fifty locations with manager turnover, stale access accumulates rapidly. Within two years a typical network has former employees holding access to a dozen listings. Reviewing access quarterly and removing leavers as part of the offboarding process is the only thing that prevents it.",

    "h: The change request process",
    "l: A simple form or channel for requests.|A defined turnaround, so requests do not disappear.|A clear statement of what does not need a request, which should be most things.|A record of every request and its outcome.|An escalation route for urgent changes such as a closure.|A fast path for anything affecting customer safety or accuracy.",

    "h: Training location managers",
    "n: Explain why consistency matters, in terms of customers finding the right information.|Give them the short list of what they may change freely.|Give them the short list of what they must request.|Show them how to do the things they own: photographs, review responses, posts.|Give them a monthly checklist, from lesson 10.1.4.|Tell them who to contact and how fast to expect a response.",
    "tip: Managers follow rules they understand|A manager told 'do not change the category' will change it when they think it is wrong. A manager told 'the category determines which searches we appear for, and changing it has caused a location to lose half its calls before' will not. Explaining the reason is what produces compliance at scale.",

    "h: Handling non-compliance",
    "l: Most non-compliance is well-intentioned, from lesson 3.4.5.|Correct it, explain why, and check whether the underlying need was legitimate.|If many managers make the same change, the standard may be wrong.|Repeated deliberate non-compliance is a management issue, not a marketing one.|Monitoring, from lesson 10.1.6, is what detects it.",

    "h: Documenting it",
    "p: The governance document should be one page, state the three tiers with their elements, name the owners, state the request process and turnaround, and be given to every manager. A long document is not read and therefore does not govern anything.",
    "ex: The governance that worked|A forty-location chain replaced a twelve-page policy nobody had read with a one-page sheet listing eight locked items, six controlled items and everything else marked local. Compliance improved sharply, because for the first time managers could remember what the rules were. The twelve-page version had governed nothing."
  ],
  take: [
    "Decide for every element who owns it, who may change it and who approves the change.",
    "Use three tiers: locked, controlled and local — and keep the locked tier genuinely small.",
    "Review access quarterly and remove leavers during offboarding, or stale access accumulates rapidly.",
    "Managers follow rules they understand, so explain the reason rather than only stating the rule.",
    "The governance document must be one page, or it will not be read and will govern nothing."
  ],
  self: [
    "I can allocate every element to locked, controlled or local.",
    "I keep the locked tier small to avoid request queues.",
    "I manage access reviews and leaver removal.",
    "I explain reasons to managers rather than only issuing rules."
  ],
  quiz: [
    { q: "Why should the locked tier be kept small?",
      a: ["To reduce documentation", "Every locked element creates a request queue and delay, which slows the system and disengages managers", "Google limits it", "Locked elements cost more"],
      c: 1,
      why: "Locking only what genuinely must be consistent keeps the system moving and keeps location managers engaged rather than obstructed." },
    { q: "Why do managers comply better when given reasons?",
      a: ["They enjoy reading", "A manager who understands that changing a category has previously cost a location half its calls will not change it, whereas one told only 'do not' will when they think it is wrong", "It is a legal requirement", "Reasons are shorter"],
      c: 1,
      why: "Compliance at scale depends on understanding, because central teams cannot supervise every decision at every location." },
    { q: "Many managers make the same non-compliant change. What does this suggest?",
      a: ["They should be disciplined", "The standard may be wrong and worth re-examining", "Access should be removed", "Nothing"],
      c: 1,
      why: "A pattern of identical well-intentioned deviations usually indicates a genuine need the standard does not accommodate." }
  ],
  ex: {
    title: "Write the one-page governance sheet",
    time: "35 minutes",
    intro: "You will produce the document that actually governs.",
    steps: [
      "List every profile and website element for a multi-location business.",
      "Allocate each to locked, controlled or local.",
      "Check that the locked list is short enough to be memorable.",
      "Name the owner for each tier and the approval route.",
      "Write the change request process and turnaround.",
      "Compress the whole thing onto one page and test whether a manager could remember the locked list."
    ],
    deliver: "A one-page governance sheet with three tiers, named owners, a request process and a memorable locked list."
  },
  chal: {
    title: "Design the access management system",
    brief: "Design access management for a network of sixty locations with regular manager turnover. Specify who holds what access at every level, how access is granted, how it is removed during offboarding, how the register is maintained, how often it is audited, what the audit checks, and what happens when an unidentified person is found with access. Then calculate the ongoing time cost and design the version that would still be done in year three rather than abandoned in month four.",
    success: [
      "The system integrates access removal into the offboarding process rather than relying on a separate audit.",
      "It specifies what happens when unidentified access is discovered.",
      "You designed for year-three sustainability, not just initial implementation."
    ]
  }
},

"10.1.4": {
  t: "Rolling out changes across hundreds of profiles",
  why: "A change that is trivial for one location is a project for two hundred. The rollout method determines whether it works or breaks everything.",
  body: [
    "h: The rollout principles",
    "n: **Test on a subset first.** Always, without exception.|**Change one thing at a time**, from lesson 3.4.4, which applies at scale too.|**Have a rollback.** Know how you would undo it before you start.|**Stage it**, rather than applying to every location at once.|**Verify after each stage.**|**Record everything**, so the effect can be attributed.",

    "h: The staged rollout",
    "table: Stage ; Scope ; Purpose || 1 ; 3 to 5 locations ; Detect errors in the change itself || 2 ; 10 to 20 per cent ; Detect effects and verify the process scales || 3 ; The remainder ; Complete the rollout || Verify ; All ; Confirm the change applied everywhere it should",
    "l: Wait long enough between stages to see effects, which for sensitive fields means weeks.|Choose test locations that represent the network, not the easiest ones.|Include at least one high-performing and one underperforming location in the test set.",
    "warn: The bulk change that broke everything|A network applied a description template update to two hundred locations in one action. A formatting error in the template placed the wrong locality in every description. It took six weeks to correct, and during that period every location's description contained an error. A five-location test would have caught it in ten minutes.",

    "h: Before any bulk change",
    "n: Export the current state of every location, so you have a rollback.|Verify the export is complete and readable.|Document what is changing and why.|Identify which locations should be excluded, and why.|Check the change against the governance tiers from lesson 10.1.3.|Confirm the timing is appropriate, avoiding peak periods, from lesson 3.4.4.",

    "h: The spreadsheet risks",
    "l: Blank cells that clear existing values, from lesson 3.4.5.|Columns misaligned after a sort.|Formatting changes applied by the spreadsheet software, particularly to phone numbers and postcodes.|Truncated values.|Character encoding problems with accented characters.|Rows accidentally included or excluded.",
    "tip: Check the file, not the intention|Before any bulk upload, open the file and read ten random rows completely. Check that every column contains what it should, that no cell is unexpectedly blank, and that formatting is intact. This takes five minutes and catches the errors that affect every location.",

    "h: Verification after rollout",
    "n: Spot check at least ten per cent of locations manually.|Confirm the change applied, not merely that the upload reported success.|Check for unintended changes to other fields.|Check that excluded locations were genuinely excluded.|Record the completion date.|Monitor performance for the following month, from lesson 10.1.6.",

    "h: Communicating a rollout",
    "l: Tell location managers before it happens, not after.|Explain what is changing and why.|Tell them what they might notice.|Tell them what to do if something looks wrong.|Confirm when it is complete.|Managers who are informed report problems; managers who are surprised assume someone else is handling it.",
    "ex: The staged rollout that caught it|A network rolled out new service entries in three stages. The first five locations revealed that one service name exceeded the field length and was truncated mid-word. It was corrected before the remaining 195 locations received it. The test stage cost two days. The alternative would have been 200 truncated entries and a second full rollout to fix them."
  ],
  take: [
    "Test on three to five locations first, without exception, then stage the rollout and verify at each stage.",
    "Export the current state before any bulk change, so a rollback exists.",
    "Spreadsheet risks include blank cells clearing values, misaligned columns, formatting changes and encoding problems.",
    "Read ten random rows completely before any upload — five minutes catches errors that would affect every location.",
    "Verify after rollout by spot checking manually rather than trusting the upload's success report."
  ],
  self: [
    "I always test on a small subset before any bulk change.",
    "I export the current state before starting so a rollback exists.",
    "I know the specific spreadsheet failure modes and check for them.",
    "I verify by manual spot check rather than trusting an upload report."
  ],
  quiz: [
    { q: "What must happen before any bulk change to many locations?",
      a: ["Notify Google", "Export the current state so a rollback exists, and test on three to five locations", "Increase the budget", "Pause all other work"],
      c: 1,
      why: "The export provides the only route back, and a small test catches errors in the change itself before they are applied everywhere." },
    { q: "Which spreadsheet risk most commonly damages bulk uploads?",
      a: ["Too many columns", "Blank cells that clear existing values", "Long file names", "Too many rows"],
      c: 1,
      why: "A blank cell is frequently interpreted as an instruction to clear the field, silently removing correct data across every affected location." },
    { q: "How should a rollout be verified?",
      a: ["By trusting the upload's success report", "By manually spot checking at least ten per cent of locations", "By waiting a month", "By asking managers"],
      c: 1,
      why: "An upload can report success while applying values incorrectly or affecting fields it should not. Only manual checking confirms the actual state." }
  ],
  ex: {
    title: "Plan a staged rollout",
    time: "35 minutes",
    intro: "You will design a rollout that cannot break everything at once.",
    steps: [
      "Choose a change to apply across a multi-location network.",
      "Write the export and rollback procedure.",
      "Select the test locations and justify the selection.",
      "Define the three stages with their scope and waiting periods.",
      "Write the pre-upload file check list.",
      "Write the verification procedure and the manager communication."
    ],
    deliver: "A staged rollout plan with rollback, justified test selection, file checks, verification and manager communication."
  },
  chal: {
    title: "Write the bulk change standard",
    brief: "Write the standard governing every bulk change across a location network. Specify the pre-change requirements, the test stage criteria, the staging pattern, the file validation checklist, the verification requirement, the communication steps, the record kept, and the circumstances under which a bulk change is not permitted at all. Then write the incident procedure for when a bulk change goes wrong: how it is detected, who is notified, how the rollback runs, and what is communicated to managers and to any client.",
    success: [
      "The standard specifies circumstances where bulk change is prohibited, not only how to do it.",
      "The file validation checklist addresses the specific spreadsheet failure modes.",
      "The incident procedure covers detection, rollback and communication."
    ]
  }
},

"10.1.5": {
  t: "Local page templates that do not look templated",
  why: "Multi-location websites live or die on their location pages. This lesson covers building them at scale without producing thin duplicates.",
  body: [
    "h: The tension",
    "p: You need hundreds of location pages built consistently and quickly, and you need each one to be genuinely specific, from lesson 4.2.6. Those requirements pull against each other, and the resolution is structural.",
    "box: **Template the structure. Never template the content.**",

    "h: The template as a data-driven frame",
    "n: The structure is identical: the same sections in the same order.|The data is location-specific and comes from the master file: name, address, hours, phone, map, services.|The content slots are filled locally: description, photographs, staff, local detail.|The result is consistent in form and genuinely different in substance.",

    "h: The required local slots",
    "table: Slot ; Who fills it ; Minimum requirement || Opening paragraph ; Central template with local variables ; Names the location and what it offers || Local description ; Location manager or local writer ; 100 words genuinely specific to this place || Photographs ; Location manager ; At least four real photographs of this location || Staff ; Location manager ; Named people with roles || Access and parking ; Location manager ; Specific practical detail, from lesson 4.1.5 || Services offered here ; Central, adjusted locally ; Where they differ between locations || Reviews ; Automated from this location's reviews ; Real reviews from this location || Local landmarks or orientation ; Location manager ; How to find it",
    "tip: Four photographs and a hundred words|If every location page has four genuine photographs of that location and one hundred words written by someone who has been there, it will not read as templated even though its structure is identical to every other page. That is a realistic ask of a location manager and it is the difference between a network of real pages and a network of thin ones.",

    "h: Getting the local content",
    "warn: Central teams cannot write local content|A copywriter at head office cannot produce genuinely local content for two hundred locations, and attempting it produces exactly the generic text that fails. The content must come from people who are there. The central job is to make that easy: a short form, clear prompts, a deadline and a reminder.",
    "n: Send a short form with five specific questions, from lesson 4.4.3.|Ask for photographs with clear instructions on what to capture.|Give a deadline and chase it.|Edit for consistency of tone, not for content.|Publish, and show the manager the result.|Refresh annually.",

    "h: What the template must include",
    "l: The location's full NAP, matching the master file exactly.|A map and directions.|Hours, including special hours.|Services available at this location.|Structured data for this location, from lesson 4.3.3.|Links to the region page and the locator, from lesson 4.2.3.|A clear call to action with this location's contact details.|Reviews from this location.",

    "h: Measuring template success",
    "n: Compare the word count of unique content across pages — if it is near zero, the template has failed.|Check whether pages rank for their own location terms.|Check whether the pages receive organic impressions individually, from lesson 9.2.4.|Check whether any two pages are near-identical.|Ask whether you would be willing to show any given page as the best page about that location.",
    "ex: The hundred-word difference|A chain's location pages were identical except for the address, and none ranked. Adding a requirement for four local photographs and a hundred words from each manager, collected through a short form over six weeks, produced pages that ranked for their own location terms within three months. The structure never changed. Only the substance did."
  ],
  take: [
    "Template the structure and never the content — that is the resolution to the consistency-versus-specificity tension.",
    "The frame is data-driven from the master file; the content slots are filled locally.",
    "Four genuine photographs and one hundred locally written words per page is enough to avoid reading as templated.",
    "Central teams cannot write local content — the central job is making it easy for local people to supply it.",
    "Measure success by unique content volume, individual page impressions and whether any two pages are near-identical."
  ],
  self: [
    "I can explain the template structure versus content distinction.",
    "I know the minimum local requirement that prevents a page reading as templated.",
    "I know why central teams cannot produce genuine local content.",
    "I can measure whether a location page template has succeeded."
  ],
  quiz: [
    { q: "What is the resolution to the tension between consistency and specificity in location pages?",
      a: ["Accept thin pages", "Template the structure and never the content", "Write every page from scratch centrally", "Use fewer pages"],
      c: 1,
      why: "An identical structure filled with genuinely local substance produces pages that are consistent in form and different in content, which is what works." },
    { q: "Why can a central copywriter not produce genuine local content for two hundred locations?",
      a: ["It takes too long", "They have not been to the locations, so the content is necessarily generic, which is exactly what fails", "It is too expensive", "It breaches guidelines"],
      c: 1,
      why: "Local specificity comes from knowledge of the place. Without it, the writing defaults to generic claims that any location could make." },
    { q: "What is a realistic minimum local requirement per location page?",
      a: ["A thousand words of bespoke copy", "Four genuine photographs and one hundred locally written words", "Nothing beyond the address", "A full local blog"],
      c: 1,
      why: "It is achievable for a location manager and it is sufficient to make the page read as representing a real place rather than a template." }
  ],
  ex: {
    title: "Design the location page template",
    time: "40 minutes",
    intro: "You will produce a template that scales without thinning.",
    steps: [
      "Write the full section structure for a location page.",
      "For each section, mark whether it is data-driven, central content or a local slot.",
      "Write the five-question form you would send location managers.",
      "Write the photograph instructions.",
      "Write the minimum acceptance standard for a page to be published.",
      "Draft one complete page for a real or imagined location using the template."
    ],
    deliver: "A location page template with marked slots, a manager form, photograph instructions, a publication standard and one completed page."
  },
  chal: {
    title: "Design the local content collection programme",
    brief: "Design the programme for collecting local content from fifty location managers. Specify the form, the instructions, the deadline, the chasing process, who edits and to what standard, how photographs are collected and stored, what happens when a manager does not respond, how the content is refreshed annually, and what proportion of managers you realistically expect to comply. Then design the fallback for non-responding locations that is better than generic text but does not require the manager.",
    success: [
      "The programme includes a realistic compliance expectation and a chasing process.",
      "You designed a genuine fallback for non-responders rather than defaulting to generic text.",
      "The annual refresh is built in rather than treated as a one-off collection."
    ]
  }
},

"10.1.6": {
  t: "Measuring a whole location network",
  why: "Nobody can read fifty individual reports. Network measurement requires aggregation and exception reporting.",
  body: [
    "h: The three views",
    "n: **The network view.** Aggregate performance across all locations.|**The exception view.** Locations requiring attention.|**The individual view.** One location in detail, used only when the exception view surfaces it.",
    "p: Most reporting time should be spent on the second, because that is where action comes from.",

    "h: The network view",
    "table: Metric ; Why || Total enquiries across the network ; The business outcome || Average top three percentage ; Aggregate visibility || Distribution of performance ; How wide the gap is between best and worst || Average rating and total reviews ; Network reputation || Number of locations with any compliance issue ; Risk exposure || Month on month and year on year change ; Trend",
    "tip: Report the distribution, not just the average|A network averaging 60 per cent top three could be every location at 60, or half at 95 and half at 25. Those are completely different situations requiring completely different responses. The distribution is the more informative figure and it is almost never reported.",

    "h: The exception view",
    "p: Define thresholds that trigger attention, from lesson 5.4.5:",
    "l: Any location below a defined visibility threshold.|Any location with a rating below a threshold.|Any location with no new reviews in a defined period.|Any location with a compliance issue.|Any location whose performance dropped by more than a defined amount.|Any location with an unanswered review or question beyond a defined age.|Any location whose data differs from the master file.",
    "n: The exception report lists only these.|Each has an owner and an action.|The list should be short enough to act on.|If it is always long, the thresholds are wrong or the network has a systemic problem.",

    "h: The comparison that reveals most",
    "p: Comparing locations against each other is the most informative analysis available in a network, because the brand, the standards and the process are constant:",
    "l: Why does location 12 outperform location 34 when both are in similar markets?|What do the top-performing locations have in common?|What do the underperformers share?|Is the difference market conditions, local execution, or something structural?|Can what works at the best locations be applied elsewhere?",
    "warn: Control for market conditions before drawing conclusions|A location in a dense competitive city will show worse absolute figures than one in a small town regardless of execution. Comparing raw performance across different market types produces wrong conclusions. Compare against the local competitive field, not against other locations in different markets.",

    "h: The aggregate insight",
    "p: Network data reveals patterns invisible at one location:",
    "n: Which interventions produced results across many locations, which is far stronger evidence than a single case, from lesson 8.4.6.|Whether a seasonal pattern is genuine or local.|Whether an algorithm change affected the whole network, which distinguishes it from a local problem.|Which market types the business performs best in, which informs expansion.|What the realistic performance range is for this brand.",

    "h: The reporting rhythm",
    "l: Monthly: network view plus exception report.|Quarterly: distribution analysis and cross-location comparison.|Annually: full review, including which interventions worked across the network.|Individual location reports only on request or when surfaced by exception.",
    "ex: The comparison that produced a network-wide gain|A chain compared its top ten and bottom ten locations. The top ten averaged eleven local photographs added in the previous year and responded to 90 per cent of reviews; the bottom ten averaged two photographs and responded to 20 per cent. Market conditions were similar across both groups. Making photographs and review responses a required monthly task for all locations produced measurable improvement across the network within six months."
  ],
  take: [
    "Use three views: network aggregate, exception report and individual detail on demand.",
    "Report the distribution as well as the average, because the same average can conceal completely different situations.",
    "Define thresholds that trigger the exception report, and keep the list short enough to act on.",
    "Cross-location comparison is the most informative analysis available, but control for market conditions first.",
    "Network data provides far stronger evidence about what works than any single location can."
  ],
  self: [
    "I can construct network, exception and individual views.",
    "I report distribution as well as average.",
    "I define thresholds that produce a short actionable exception list.",
    "I control for market conditions before comparing locations."
  ],
  quiz: [
    { q: "Why report the distribution as well as the average?",
      a: ["It looks more thorough", "A network averaging 60 per cent could be every location at 60 or half at 95 and half at 25, which are completely different situations", "Averages are inaccurate", "Clients request it"],
      c: 1,
      why: "The two situations require entirely different responses, and the average alone cannot distinguish them." },
    { q: "What must you control for before comparing locations against each other?",
      a: ["The number of staff", "Market conditions, since a dense competitive city produces worse absolute figures regardless of execution", "The opening date", "The building size"],
      c: 1,
      why: "Comparing raw figures across different market types attributes market conditions to execution, producing wrong conclusions about what causes performance." },
    { q: "Why is network data stronger evidence than a single location's results?",
      a: ["There is more of it", "An intervention producing results across many locations is far stronger evidence of causation than one case", "It is easier to collect", "Clients prefer it"],
      c: 1,
      why: "A single case could be coincidence or a local factor. A consistent effect across many locations with different conditions is genuinely persuasive." }
  ],
  ex: {
    title: "Build the network measurement views",
    time: "40 minutes",
    intro: "You will design reporting that produces action rather than volume.",
    steps: [
      "Define the network view metrics for a multi-location business.",
      "Define the exception thresholds that would trigger attention.",
      "Design the exception report format with owner and action columns.",
      "Design the distribution display for the main visibility metric.",
      "Define what a cross-location comparison would control for.",
      "Specify the monthly, quarterly and annual reporting rhythm."
    ],
    deliver: "Network measurement views with defined thresholds, an exception report format, a distribution display and a reporting rhythm."
  },
  chal: {
    title: "Run a top-versus-bottom analysis",
    brief: "For a real or constructed network, compare the top five and bottom five performing locations. Control for market conditions by assessing each location's local competitive field. Then identify what the top group has that the bottom group does not, across photographs, reviews, review responses, local content, data accuracy and manager engagement. Produce a hypothesis about what causes the difference, and design the network-wide intervention that would test it.",
    success: [
      "You controlled for market conditions rather than comparing raw figures.",
      "You compared across at least six dimensions, not only the obvious ones.",
      "Your proposed intervention is designed as a testable hypothesis, not an assumption."
    ]
  }
},

"10.1.7": {
  t: "When your own locations compete with each other",
  why: "Self-competition is unique to multi-location businesses and is frequently misunderstood as a problem when it is sometimes the correct outcome.",
  body: [
    "h: What happens",
    "p: When two of your locations are close enough that both could serve a search, they compete. Usually only one appears, because near-duplicate businesses are filtered, from lesson 2.1.5. The nearer one to the searcher generally wins.",

    "h: When it is not a problem",
    "warn: Self-competition is often the correct outcome|If two locations are four kilometres apart and a searcher sits between them, one of them appearing is correct — the searcher gets the nearer option. The business captures the customer either way. Treating this as a problem to solve leads to unnecessary and sometimes damaging interventions.",
    "l: The customer is captured by the business regardless of which location appears.|The nearer location is usually the right one to serve them.|Both locations appearing would occupy two slots with the same business, which is exactly what filtering prevents.|Revenue is not lost, only allocated between locations.",

    "h: When it is a genuine problem",
    "n: **Locations are too close** and one consistently suppresses the other across its entire catchment.|**The wrong location wins** — a small satellite outranks a flagship for searches the flagship should serve.|**Internal allocation is unfair**, affecting managers' performance measurement and pay.|**Marketing spend is duplicated** for overlapping catchments.|**Web pages compete**, which is the cannibalisation problem from lesson 4.4.2 applied to location pages.|**Customers are confused** about which location to use.",

    "h: Diagnosing it",
    "l: Run grids for both locations on the same keyword and overlay them.|Identify the boundary where one gives way to the other.|Check whether the boundary is roughly midway, which is normal, or skewed, which is not.|Check whether either location has weak configuration causing it to lose unfairly.|Check whether their website pages target the same terms.|Check whether the review and photograph work differs between them.",
    "tip: The overlay is the whole diagnosis|Two grids overlaid immediately show whether the split is sensible. A clean boundary roughly equidistant between two locations is healthy. A boundary pushed hard towards one location indicates that location is underperforming, which is a fixable execution problem rather than a structural one.",

    "h: Fixing a genuine problem",
    "table: Problem ; Fix || One location underperforming and losing its own catchment ; Fix its configuration, reviews and local content || Web pages competing ; Differentiate each page's targeting and local content, from lesson 4.2.2 || Wrong location winning for a specific service ; Differentiate services between locations where genuine || Unfair internal allocation ; Change how performance is measured internally, not the SEO || Duplicate marketing spend ; Allocate campaigns by catchment rather than by location",

    "h: What not to do",
    "l: Do not deliberately weaken one location to help another.|Do not remove a listing to stop competition, which loses its reviews and its customers.|Do not set service areas to try to divide territory, which does nothing, from lesson 3.3.2.|Do not create artificial differentiation that misrepresents what each location offers.",

    "h: The planning implication",
    "p: Self-competition is mostly determined at the point of opening a location, from lesson 7.2.6. Locations placed too close will overlap heavily, and no amount of subsequent optimisation changes that. The measurement in this lesson is most valuable **before** opening a new site, where it can inform the placement decision.",
    "ex: The overlap measured in advance|A chain considering a new site four kilometres from an existing one ran grids first. The existing location already held the top three across most of the proposed catchment. Modelling showed the new site would capture perhaps a third of additional area and cannibalise the rest. The site was moved seven kilometres out instead, where the grid showed genuine unserved territory. The measurement cost two hours and changed a substantial property decision."
  ],
  take: [
    "Self-competition is often the correct outcome — the customer is captured regardless of which location appears.",
    "It is a genuine problem when locations are too close, the wrong one wins, allocation is unfair, or web pages compete.",
    "Overlay two grids to diagnose it: a boundary roughly midway is healthy, a skewed one indicates underperformance.",
    "Never weaken or remove a location to stop competition, and never use service areas to try to divide territory.",
    "Self-competition is mostly determined at the point of opening, so the measurement is most valuable before a site is chosen."
  ],
  self: [
    "I know when self-competition is the correct outcome and when it is a problem.",
    "I can diagnose it by overlaying two location grids.",
    "I know what must never be done to reduce it.",
    "I know that the measurement is most valuable before a new location is opened."
  ],
  quiz: [
    { q: "Two locations four kilometres apart compete, and one appears for searchers between them. Is this a problem?",
      a: ["Yes, always", "Usually not — the customer is captured by the business either way and the nearer location is the right one to serve them", "Yes, one should be closed", "Only if they have different managers"],
      c: 1,
      why: "Revenue is allocated between locations rather than lost, and filtering prevents one business occupying two slots, which is the intended behaviour." },
    { q: "What does a boundary pushed hard towards one location indicate?",
      a: ["Correct territorial division", "That location is underperforming, which is a fixable execution problem", "The grid is wrong", "The locations are too far apart"],
      c: 1,
      why: "A healthy split is roughly equidistant. A skewed boundary means one location is losing catchment it should hold, usually through weaker configuration or reviews." },
    { q: "When is overlap measurement most valuable?",
      a: ["After both locations have been open a year", "Before opening a new location, where it can inform the placement decision", "Only during a rebrand", "It is never valuable"],
      c: 1,
      why: "Overlap is largely determined by placement. Measuring in advance can change a property decision, whereas measuring afterwards can only describe a fixed situation." }
  ],
  ex: {
    title: "Measure an overlap",
    time: "35 minutes",
    intro: "You will diagnose whether self-competition is healthy or a problem.",
    steps: [
      "Identify two locations of a multi-location business within about ten kilometres of each other.",
      "Run or estimate a grid for each on the same keyword.",
      "Overlay them and identify the boundary where one gives way to the other.",
      "Assess whether the boundary is roughly midway or skewed.",
      "If skewed, check the weaker location's configuration, reviews and local content.",
      "State whether this is healthy self-competition or a fixable problem."
    ],
    deliver: "An overlap analysis with the boundary identified and a verdict on whether it is healthy or fixable."
  },
  chal: {
    title: "Build the new location placement model",
    brief: "Design the analysis you would run before a business opens a new location, to assess overlap with existing sites. Specify what grids you would run, how you would identify genuinely unserved territory, how you would estimate the proportion of the new catchment that would be cannibalised, what demand data you would gather, and how you would present the finding to whoever makes the property decision. Then apply it to a real or imagined proposed site and produce a recommendation.",
    success: [
      "Your analysis distinguishes genuinely new catchment from cannibalised catchment.",
      "You included demand data, not only visibility.",
      "You produced a recommendation framed for a property decision-maker rather than a marketer."
    ]
  }
}

});
