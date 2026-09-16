/* Level 8 · Module 1 — Spam Fighting */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"8.1.1": {
  t: "The types of local spam you will meet",
  why: "Local spam is common, it costs honest businesses real money, and reporting it is one of the few tactics where you can directly improve your own position.",
  body: [
    "h: Why spam matters to you",
    "l: A spam listing occupying a Local Pack slot is a slot you cannot have.|Removing one can move you up immediately, which almost no other tactic does.|Spam is often the reason a weaker-looking business outranks you, though as lesson 7.4.1 warned, it should be your last hypothesis rather than your first.|Reporting is free.|Google does act on well-evidenced reports, though not always and not quickly.",

    "h: The main types",
    "n: **Keyword-stuffed business names.** Adding service and location words to the listed name, from lesson 2.3.1.|**Fake locations.** Listings at addresses where the business does not operate: virtual offices, residential addresses of friends, empty units, or entirely invented addresses.|**Listing multiplication.** One business creating multiple listings for different towns or services.|**Lead generation listings.** Listings created by marketing companies to capture calls and sell them on, not representing a real business at all.|**Hijacked listings.** Someone claiming a listing they do not own, often a closed business, and repurposing it.|**Fake reviews.** Bought, exchanged or created reviews, from lesson 5.2.5.|**Category abuse.** Listing categories the business does not genuinely serve to appear in more searches.|**Fake practitioner listings.** Creating practitioner listings that are really duplicates, from lesson 2.1.5.",

    "h: How common each is",
    "table: Type ; Frequency ; Ease of proving ; Likelihood of action || Keyword-stuffed names ; Very common ; Very easy ; Good || Fake or virtual addresses ; Common ; Moderate ; Good with evidence || Listing multiplication ; Common ; Moderate ; Good || Lead generation listings ; Common in some trades ; Hard ; Variable || Hijacked listings ; Less common ; Moderate ; Good with evidence || Fake reviews ; Very common ; Hard ; Variable || Category abuse ; Common ; Hard ; Low || Fake practitioners ; Occasional ; Moderate ; Moderate",
    "tip: Start with name stuffing|It is the most common violation, the easiest to prove with a screenshot, and among the most likely to be actioned. If you are going to spend an hour on spam reporting, spend it there first — the return per hour is substantially higher than on any other type.",

    "h: Which trades are worst affected",
    "l: Locksmiths, historically the most heavily spammed category of all.|Garage door and appliance repair.|Towing and roadside assistance.|Plumbing, electrical and heating.|Pest control.|Rubbish removal.|Legal services in some markets.|Anything with urgent demand and high customer value, because urgency reduces how carefully people choose.",

    "h: The honest framing",
    "warn: Spam fighting is not a strategy|Removing a spam listing can produce an immediate gain, and it is worth doing. But it is reactive, the results are uncertain, spammers frequently return, and time spent on it is time not spent building your own position. Treat it as periodic housekeeping that occasionally produces a windfall, not as the core of your work.",

    "h: What to do before reporting anything",
    "n: Confirm the listing is genuinely in breach, not merely a competitor you dislike.|Gather evidence, from lesson 8.1.4.|Check whether it is actually affecting your position at points that matter.|Estimate whether the effort is worth the likely outcome.|Then report, from lesson 8.1.5.",
    "ex: The slot that opened|A client ranked fourth for a competitive term. Position two was held by a listing named with four service keywords and a city name, at an address that Street View showed to be a residential house with no signage. A well-evidenced report removed it after five weeks. The client moved to third, then second as the field settled. Total effort: about ninety minutes."
  ],
  take: [
    "Local spam occupies Local Pack slots that honest businesses cannot then have, and removing one can move you up immediately.",
    "The main types are stuffed names, fake locations, listing multiplication, lead generation listings, hijacking, fake reviews, category abuse and fake practitioners.",
    "Keyword-stuffed names are the most common, easiest to prove and most likely to be actioned — start there.",
    "Urgent, high-value trades such as locksmiths and towing are the worst affected.",
    "Spam fighting is periodic housekeeping that occasionally produces a windfall, not a core strategy."
  ],
  self: [
    "I can name at least six types of local spam.",
    "I know which type gives the best return per hour of reporting effort.",
    "I know which trades are worst affected and why.",
    "I treat spam fighting as housekeeping rather than strategy."
  ],
  quiz: [
    { q: "Which spam type offers the best return per hour of reporting effort?",
      a: ["Fake reviews", "Keyword-stuffed business names", "Category abuse", "Lead generation listings"],
      c: 1,
      why: "They are the most common, provable with a single screenshot against the business's own branding, and among the most reliably actioned." },
    { q: "Why are locksmiths and towing services the worst affected categories?",
      a: ["They have the most businesses", "Urgent demand and high customer value mean people choose quickly without careful checking", "They have no regulation", "Their customers do not use Google"],
      c: 1,
      why: "Urgency reduces scrutiny. A person locked out at midnight calls the first number they see, which makes those categories worth spamming." },
    { q: "How should spam fighting be positioned within a local SEO programme?",
      a: ["As the main strategy", "As periodic housekeeping that occasionally produces a windfall", "As something to ignore entirely", "As the first thing to try"],
      c: 1,
      why: "It is reactive, uncertain and spammers return. It is worth doing periodically, but time spent there is time not spent building your own durable position." }
  ],
  ex: {
    title: "Survey the spam in your market",
    time: "35 minutes",
    intro: "You will find out how much of your competitive field is genuine.",
    steps: [
      "Open the local finder for your practice business's main keyword.",
      "List the first fifteen businesses with their names and addresses.",
      "Flag any name containing service or location keywords that look added.",
      "Search each flagged business's name and check its own website for the real name.",
      "Check the addresses in Street View for evidence of a real business.",
      "Count how many of the fifteen appear to be in breach and note which types."
    ],
    deliver: "A survey of fifteen competitors with suspected violations flagged by type and initial evidence noted."
  },
  chal: {
    title: "Estimate the value of a spam clearance",
    brief: "For the suspected spam listings you found, estimate what would happen to your practice business's position if each were removed. Which slots would open, and how far would you move? Then estimate the effort required to evidence and report each, and the realistic probability of action. Produce a ranked list by expected value: the gain multiplied by the probability, divided by the effort. State honestly whether any of it is worth doing.",
    success: [
      "You estimated the position change from each removal rather than assuming any removal helps.",
      "You included a realistic probability of action, not an assumption of success.",
      "You reached an honest verdict, including the possibility that none of it is worth the effort."
    ]
  }
},

"8.1.2": {
  t: "Spotting keyword-stuffed business names",
  why: "This is the most common and most actionable violation. Learning to spot and prove it precisely is a genuinely useful skill.",
  body: [
    "h: What the rule requires",
    "p: From lesson 2.3.1: the listed name must be the real-world business name, as shown on signage, paperwork and branding. Anything added beyond that is a violation.",

    "h: What stuffing looks like",
    "l: 'Smith Plumbing Emergency Plumber 24 Hour Leeds'.|'Best Dental Clinic - Cosmetic Dentistry Bristol'.|'ABC Locksmith Car Key Replacement Near Me'.|'Johnson Law Firm | Personal Injury Attorney Houston'.|'Quick Fix Appliance Repair Washer Dryer Fridge'.",
    "p: The pattern is recognisable: a plausible business name followed by services, locations, or both.",

    "h: The grey areas",
    "warn: Not every keyword in a name is a violation|If the business is genuinely called 'Leeds Emergency Plumbing' and that is what is on the van and the paperwork, that is its name and it is compliant. Before reporting, check the evidence. Reporting a legitimate name wastes your effort and, repeated, damages your credibility with the reporting process.",
    "table: Name ; Likely verdict ; How to check || 'Leeds Emergency Plumbing' ; Possibly legitimate ; Check their website, signage, company registration || 'Smith Plumbing Leeds Emergency Plumber' ; Very likely stuffed ; Their own website will say 'Smith Plumbing' || 'Smith Plumbing and Heating' ; Legitimate if that is the real name ; Website and signage will confirm || 'Smith Plumbing - Fast Reliable Service' ; Tagline added, violation ; The tagline is not part of the name || 'Smith Plumbing #1 Plumber' ; Superlative added, violation ; Obviously not part of any registered name",

    "h: How to check properly",
    "n: **Visit their website.** The name in the logo and the footer is usually the real one.|**Check the company registration**, where public registers exist in your market.|**Check their social profiles**, which often use the real name.|**Check Street View** for signage at the address.|**Check their own reviews** — customers usually refer to the real name.|**Check their other directory listings**, which frequently show the unstuffed version.",
    "tip: Their own website is the best evidence|A listing named 'Smith Plumbing Emergency Plumber 24 Hour Leeds' linking to a website whose logo and footer say 'Smith Plumbing' is a complete, self-contained proof. Two screenshots. That is the strongest and simplest evidence you can gather for any local spam report.",

    "h: What to record",
    "l: A screenshot of the listing showing the full name.|A screenshot of their website showing the real name in the logo or footer.|The URL of both.|Any Street View image showing signage.|A one-line statement identifying exactly which words are not part of the real name.",

    "h: Why it works",
    "p: Name stuffing is unambiguous. There is no interpretation required: either the words are part of the real business name or they are not. That clarity is why reports on this violation are actioned more reliably than on any other type.",
    "ex: The two-screenshot report|A competitor listing read 'Elite Garage Doors Repair Installation Opener Service Denver'. Their own website header said 'Elite Garage Doors'. Two screenshots, one sentence identifying the added words, submitted through the standard process. The name was corrected within three weeks and the listing's position fell noticeably. The whole task took eleven minutes."
  ],
  take: [
    "Name stuffing is a plausible business name followed by added services, locations, taglines or superlatives.",
    "Not every keyword is a violation — a genuine registered name containing service words is compliant.",
    "Check the business's own website, registration, social profiles, signage and other listings before concluding.",
    "The strongest evidence is a screenshot of the listing beside a screenshot of their own website showing the real name.",
    "Name stuffing is actioned more reliably than any other violation because it requires no interpretation."
  ],
  self: [
    "I can recognise the pattern of a stuffed name.",
    "I know that some keyword-containing names are legitimate and how to check.",
    "I know the six ways to verify a real business name.",
    "I can assemble a two-screenshot proof."
  ],
  quiz: [
    { q: "A listing reads 'Leeds Emergency Plumbing'. Is this necessarily a violation?",
      a: ["Yes, it contains a city and a service", "No — if that is the genuine registered and signed name, it is compliant", "Yes, city names are never allowed", "Only if they have many reviews"],
      c: 1,
      why: "The rule requires the real-world name. A business genuinely trading under that name may use it, which is why verification must precede any report." },
    { q: "What is the strongest evidence for a name stuffing report?",
      a: ["Your opinion that it looks wrong", "A screenshot of the listing beside a screenshot of their own website showing the real name", "The number of reviews they have", "Their ranking position"],
      c: 1,
      why: "It is self-contained and unambiguous: their own branding contradicts their listed name, which requires no interpretation by whoever reviews the report." },
    { q: "Why are name stuffing reports actioned more reliably than other types?",
      a: ["They are reported more often", "The violation is unambiguous — either the words are part of the real name or they are not", "They are easier to fix", "Google prioritises them by policy"],
      c: 1,
      why: "Most other violations require judgement about whether a business genuinely operates somewhere or whether reviews are authentic. Name stuffing requires none." }
  ],
  ex: {
    title: "Verify three suspected stuffed names",
    time: "30 minutes",
    intro: "You will practise proving a violation rather than assuming one.",
    steps: [
      "From your market survey, select three listings with suspected stuffed names.",
      "For each, visit their website and record the name shown in the logo and footer.",
      "Check their social profiles and any other directory listings.",
      "Check Street View for signage where an address is shown.",
      "For each, state whether the name is a violation and identify exactly which words are added.",
      "Assemble the two-screenshot evidence for any confirmed violation."
    ],
    deliver: "Three verified assessments with the specific added words identified and evidence assembled for confirmed violations."
  },
  chal: {
    title: "Measure the prevalence in your market",
    brief: "Survey the top twenty listings for three different competitive keywords in your practice business's market. For each listing, verify the real business name against their own website. Calculate what proportion are using stuffed names. Then assess: is this a market where name stuffing is providing a meaningful competitive advantage, and would a systematic reporting effort be worth the time? Produce a specific recommendation with an estimated time cost and expected outcome.",
    success: [
      "You verified names against the businesses' own websites rather than judging by appearance.",
      "You calculated an actual prevalence figure across sixty listings.",
      "Your recommendation includes an estimated time cost and expected outcome, not just a judgement."
    ]
  }
},

"8.1.3": {
  t: "Spotting fake and virtual locations",
  why: "Fake addresses are the violation with the largest unfair advantage, because they let a business appear where it has no right to be.",
  body: [
    "h: Why fake addresses matter most",
    "p: Distance is the one force you cannot compete with, as Level 1 established. A business that fakes an address in a target area has bought the one advantage that cannot otherwise be earned. That is why the violation is so damaging to honest competitors and so tempting to dishonest ones.",

    "h: The types",
    "n: **Virtual offices.** Addresses rented purely for the listing, from lesson 2.2.2.|**Mailboxes and post boxes.**|**Residential addresses** where no business operates, often a friend or relative.|**Empty or unrelated commercial units.**|**Another business's address** used without any relationship.|**Entirely invented addresses** that do not correspond to any real premises.|**Coworking desks** used only for an address.",

    "h: How to investigate",
    "n: **Street View the address.** Look for signage, a shopfront, any evidence of the business.|**Search the address in quotation marks.** Many unrelated businesses at one address indicates a virtual office or mailbox service.|**Check whether the address is a known virtual office provider** by searching the address plus 'virtual office' or 'mail forwarding'.|**Check the business's own website** for what address it advertises.|**Look at the listing's photos** — fake listings often have stock photos, no exterior photo, or photos of somewhere else.|**Check the listing's other details** — a mobile number, no website, few reviews, recently created.|**Compare with their other listings** — a business with listings in eight towns is likely multiplying.",
    "tip: The quoted address search is the fastest test|Searching the exact address in quotation marks takes ten seconds. If twenty unrelated businesses appear at it, you have found a virtual office or mailbox service, and that single search is most of your evidence.",

    "h: Signs of a fake location listing",
    "table: Sign ; Strength of indication || Street View shows a house with no signage, for a commercial service ; Strong || Many unrelated businesses at one address ; Strong || The business's own website shows a different address ; Strong || No exterior photos, only stock images ; Moderate || Very few reviews, all recent, all generic ; Moderate || Address is a known mail forwarding provider ; Strong || The same business appears at several addresses across a region ; Strong || Listing created recently in a competitive area ; Weak alone",

    "h: The service area business complication",
    "warn: A hidden address is not evidence of anything|Service area businesses legitimately hide their addresses, from lesson 2.1.3. You cannot see where they are, which means you cannot assess whether the address is genuine. Do not report a service area business for hiding its address — that is the compliant configuration. What you can assess is whether they have multiple listings, which is a separate and provable violation.",

    "h: What is provable and what is not",
    "l: **Provable:** many businesses at one address, Street View showing no business, their own website showing a different address, multiple listings for one business.|**Suspected but hard to prove:** a residential address that might genuinely be a home-based business legitimately displayed.|**Not assessable:** a hidden service area business address.",

    "h: Building the case",
    "n: Screenshot the listing showing the address.|Screenshot Street View at that address.|Screenshot the quoted address search showing other businesses, if applicable.|Screenshot their own website showing a different address, if applicable.|Screenshot any other listings by the same business.|Write one paragraph stating what the evidence shows.",
    "ex: The eight-town business|A client noticed the same business name appearing in eight surrounding towns, each at a different address. Quoted searches showed six of the eight addresses hosted multiple unrelated businesses. Street View showed no signage at any of them. The business's own website listed one office. A single report covering all eight, with the pattern documented, resulted in seven being removed over two months. The client moved up in every one of those towns."
  ],
  take: [
    "Fake addresses buy the one advantage that cannot otherwise be earned, which is why they are so damaging.",
    "Investigate with Street View, quoted address searches, the business's own website, photos and other listings.",
    "The quoted address search takes ten seconds and is most of the evidence for virtual offices and mailboxes.",
    "Never report a service area business for hiding its address — that is the compliant configuration.",
    "Documenting a pattern across multiple listings is more persuasive than reporting one listing alone."
  ],
  self: [
    "I know why fake addresses are the most damaging violation.",
    "I can run the seven investigation steps.",
    "I know that hidden service area addresses are compliant and not reportable.",
    "I can distinguish provable from merely suspected."
  ],
  quiz: [
    { q: "What is the fastest test for a virtual office or mailbox address?",
      a: ["Calling the business", "Searching the exact address in quotation marks to see how many unrelated businesses appear at it", "Checking their reviews", "Looking at their photos"],
      c: 1,
      why: "It takes ten seconds and a result showing twenty unrelated businesses at one address is strong, self-contained evidence of an address service." },
    { q: "A service area business hides its address. Should you report it?",
      a: ["Yes, hiding an address is suspicious", "No — that is the compliant configuration for a service area business", "Only if it has many reviews", "Only if it ranks above you"],
      c: 1,
      why: "Hiding the address is exactly what the guidelines require when customers are not served there. Reporting it wastes effort and damages your credibility." },
    { q: "Why is documenting a pattern across several listings more effective than reporting one?",
      a: ["It takes less time", "A pattern of multiple listings at multiple questionable addresses is far harder to explain innocently than a single listing", "Google only accepts bulk reports", "Single reports are ignored"],
      c: 1,
      why: "One listing at an odd address might have an explanation. Eight listings across eight towns at shared addresses demonstrates deliberate multiplication." }
  ],
  ex: {
    title: "Investigate three addresses",
    time: "35 minutes",
    intro: "You will practise building a location evidence case.",
    steps: [
      "Select three listings in your market with addresses you want to verify.",
      "Street View each address and record what is visible.",
      "Search each address in quotation marks and record how many unrelated businesses appear.",
      "Check each business's own website for the address it advertises.",
      "Check whether each business appears at other addresses.",
      "For each, state whether the location is provably fake, suspected, or appears genuine."
    ],
    deliver: "Three investigated addresses with Street View, quoted search and website evidence, and a verdict for each."
  },
  chal: {
    title: "Map a suspected listing network",
    brief: "Find a business that appears to operate multiple listings across several towns in your region. Map every listing you can find: name variations, addresses, phone numbers, website URLs. Investigate each address. Identify what connects them — a shared phone, a shared website, a shared name pattern. Then assemble the pattern into a single evidenced case document. Assess honestly whether the pattern is conclusive or whether there could be a legitimate explanation such as genuine multiple branches.",
    success: [
      "You mapped at least four listings and investigated every address.",
      "You identified the specific connections linking them.",
      "You considered and addressed the possibility of a legitimate multi-branch explanation."
    ]
  }
},

"8.1.4": {
  t: "Evidence gathering that gets action",
  why: "Most spam reports fail because the evidence is weak, not because the violation is not real. This lesson covers what actually works.",
  body: [
    "h: Why reports fail",
    "l: The report asserts a violation without showing it.|The evidence is a screenshot of the listing only, which shows nothing wrong on its own.|The report describes the reporter's frustration rather than the policy breach.|The evidence does not rule out innocent explanations.|The violation reported is not actually a violation.|The report is vague about which listing and which policy.",

    "h: What makes evidence strong",
    "n: **Self-contained.** Whoever reviews it should not need to do their own research.|**Specific.** It names the exact policy breached and the exact facts.|**Contradictory.** It shows the business's own sources disagreeing with its listing.|**Dated.** Screenshots with visible dates or a record of when taken.|**Complete.** It rules out the obvious innocent explanation.|**Unemotional.** It states facts, not grievance.",

    "h: The evidence pack, by violation type",
    "table: Violation ; Essential evidence || Name stuffing ; Listing screenshot plus their own website showing the real name || Fake address ; Listing screenshot, Street View, quoted address search, their website's stated address || Multiple listings ; Screenshots of each listing, showing the shared name, phone or website || Hijacked listing ; Evidence of the real business, evidence the current listing is different || Lead generation listing ; Evidence that the number routes elsewhere, no real business at the address || Fake practitioner ; The business listing and the practitioner listing at the same address in the same category",

    "h: Capturing evidence properly",
    "l: Screenshot the full listing including the name and address, not a crop.|Screenshot the browser address bar where it shows the source.|Capture Street View with the address visible.|Save the URLs of everything.|Note the date and time you captured each item.|Keep the originals rather than only annotated versions.",
    "tip: Capture it before you report|Spam listings change. A stuffed name may be corrected between your noticing it and your reporting it, and then your report describes something that no longer exists. Screenshot everything at the moment you find it, before doing anything else.",

    "h: Ruling out innocent explanations",
    "p: This is what separates a strong report from a weak one. For each violation, ask what an innocent explanation would be and address it:",
    "l: **Name stuffing:** could that genuinely be the registered name? Show their own branding.|**Fake address:** could it be a legitimate home-based storefront? Show the absence of signage and the presence of other businesses at the address.|**Multiple listings:** could they be genuine branches? Show the shared phone number, the single office on their website, or the absence of any premises at the addresses.|**Fake practitioner:** could there genuinely be multiple practitioners? Show that the website lists only one.",

    "h: Writing the statement",
    "p: One short paragraph, factual, specific:",
    "ex: A strong statement|'The listing at [URL] is named Elite Garage Doors Repair Installation Opener Service Denver. The business's own website at [URL] shows the name Elite Garage Doors in its logo and footer, and its contact page uses the same. The words Repair, Installation, Opener, Service and Denver are not part of the business name and appear to have been added. Screenshots of both are attached, captured on 14 March.'",
    "warn: Never overstate|If you claim a business is fake and it turns out to be a genuine home-based operation, your report fails and your credibility with the process suffers. Claim exactly what the evidence shows and no more. A narrow, provable claim succeeds where a broad, dramatic one fails.",

    "h: Keeping records",
    "n: Keep a file for each report: evidence, statement, date submitted, method used.|Record the outcome.|Record how long it took.|Over time this tells you which violation types are worth reporting in your market, which is genuinely useful knowledge."
  ],
  take: [
    "Most reports fail on weak evidence, not on the violation being unreal.",
    "Strong evidence is self-contained, specific, shows contradiction from the business's own sources, and rules out innocent explanations.",
    "Capture everything at the moment you find it, because spam listings change.",
    "Address the obvious innocent explanation explicitly — this is what separates strong reports from weak ones.",
    "Claim exactly what the evidence shows and no more; narrow provable claims succeed where dramatic ones fail."
  ],
  self: [
    "I can list six qualities of strong evidence.",
    "I know the essential evidence for each violation type.",
    "I rule out innocent explanations explicitly in every report.",
    "I capture evidence before taking any other action."
  ],
  quiz: [
    { q: "Why must evidence be captured immediately on finding a violation?",
      a: ["Google requires timestamps", "Spam listings change — a stuffed name may be corrected before you report, leaving your report describing something that no longer exists", "It is faster", "Screenshots expire"],
      c: 1,
      why: "The violation may be fixed or altered at any time. Contemporaneous evidence is the only reliable record of what existed when you found it." },
    { q: "What most distinguishes a strong spam report from a weak one?",
      a: ["Its length", "Whether it explicitly rules out the obvious innocent explanation", "How angry it sounds", "How many listings it covers"],
      c: 1,
      why: "Whoever reviews it will consider whether there is a legitimate explanation. A report that has already addressed and excluded it is far more likely to be actioned." },
    { q: "What is the risk of overstating a claim in a report?",
      a: ["A fine", "The report fails and your credibility with the process suffers for future reports", "Legal action", "Nothing"],
      c: 1,
      why: "A claim that a business is fake, when it turns out to be a genuine home-based operation, undermines both that report and your standing on subsequent ones." }
  ],
  ex: {
    title: "Build one complete evidence pack",
    time: "35 minutes",
    intro: "You will assemble a report that could actually succeed.",
    steps: [
      "Select the strongest suspected violation from your market survey.",
      "Capture every screenshot listed for that violation type, with URLs and dates.",
      "Identify the obvious innocent explanation for this violation.",
      "Gather the specific evidence that rules it out.",
      "Write the one-paragraph factual statement.",
      "Review it and remove anything that overstates what the evidence shows."
    ],
    deliver: "A complete evidence pack with dated screenshots, an innocent explanation ruled out, and a factual statement."
  },
  chal: {
    title: "Build the evidence standard",
    brief: "Write a reusable standard for gathering spam evidence covering all the violation types in this module. For each, specify exactly what must be captured, what the innocent explanation is, what rules it out, and what the statement should say. Include the capture procedure, the record-keeping format, and a checklist to run before submitting any report. Then add a section on when not to report — the cases where the violation is real but reporting is not worth the effort.",
    success: [
      "Every violation type has specified evidence, an innocent explanation and what excludes it.",
      "You included a pre-submission checklist and a record-keeping format.",
      "You specified when not to report, not only how to report."
    ]
  }
},

"8.1.5": {
  t: "Filing redressal forms and business complaints",
  why: "Knowing the correct route, the correct wording and the correct expectations makes the difference between a report that works and wasted effort.",
  body: [
    "h: The available routes",
    "n: **Suggest an edit on the listing.** Available to anyone. Suitable for simple factual corrections, including a stuffed name.|**The business redressal form.** A dedicated process for reporting listings that violate guidelines. This is the main route for substantive reports.|**Reporting through the profile management interface**, where you manage listings.|**Support channels**, where available to verified business owners.|**Community forums**, where experienced volunteers can sometimes escalate genuine issues.|**Reporting reviews**, which is a separate process, from lesson 5.3.4.",

    "h: Choosing the route",
    "table: Situation ; Best route || Stuffed name, clear evidence ; Suggest an edit, and the redressal form if it does not stick || Fake address ; Redressal form with full evidence || Multiple listings ; Redressal form documenting the pattern || Hijacked listing ; Redressal form, and support channels if you are the real business || Fake reviews ; Review reporting process || Repeated violations after action ; Escalation, from lesson 8.1.6",
    "tip: Try the simple edit first for names|Suggesting an edit to correct a stuffed name to the real name is quick and sometimes works immediately. If the change is rejected or reverts, escalate to the redressal form with your evidence pack. Starting with the lighter route costs two minutes and sometimes resolves it entirely.",

    "h: Completing a redressal form well",
    "n: Identify the exact listing, with its URL.|State which specific guideline is breached.|State the facts, not your frustration.|Attach or link the evidence.|Address the innocent explanation.|Keep it short — whoever reads it has many to process.|Provide your contact details if the form requests them.",

    "h: What to expect",
    "l: No acknowledgement in many cases.|No explanation of the outcome.|Timescales from days to months.|A substantial proportion of reports produce no visible action.|Sometimes action occurs weeks later with no notification.|Occasionally a violation is corrected rather than the listing removed, which is still a win.",
    "warn: Set expectations before doing this for a client|Do not tell a client you will have a competitor removed. Tell them you will report a violation with evidence, that the outcome is outside your control, that it may take weeks or produce nothing, and that you will spend a defined amount of time on it. Promising removals you cannot deliver is how this work damages relationships.",

    "h: Following up",
    "n: Record the submission date.|Check the listing weekly for four weeks.|If nothing happens, consider one resubmission with stronger evidence.|Do not submit the same report repeatedly, which achieves nothing.|Consider escalation only for clear, well-evidenced, high-impact cases, from lesson 8.1.6.",

    "h: What not to do",
    "l: Do not submit reports anonymously in bulk hoping volume helps. It does not.|Do not encourage clients or staff to submit duplicate reports.|Do not fabricate or exaggerate evidence.|Do not report legitimate competitors out of frustration.|Do not discuss reports publicly in a way that identifies you, which can invite retaliation.",
    "ex: The two-stage approach|A stuffed name was corrected by a simple suggested edit within four days. Three weeks later it reverted to the stuffed version. A redressal form submission with the full evidence pack, including the reversion, resulted in a permanent correction. The two-stage approach cost fifteen minutes in total and worked where either step alone might not have."
  ],
  take: [
    "Routes include suggested edits, the business redressal form, profile reporting, support channels and community forums.",
    "Try a suggested edit first for a stuffed name — it costs two minutes and sometimes resolves it entirely.",
    "Complete the redressal form with the exact listing, the specific guideline, the facts, the evidence and the ruled-out explanation.",
    "Expect no acknowledgement, no explanation, timescales of weeks, and a substantial proportion producing no action.",
    "Never promise a client that a competitor will be removed — promise an evidenced report and a defined amount of effort."
  ],
  self: [
    "I know the available reporting routes and when to use each.",
    "I try the lighter route first for name violations.",
    "I can complete a redressal form properly.",
    "I set honest expectations before reporting on a client's behalf."
  ],
  quiz: [
    { q: "What should you try first for a clearly stuffed business name?",
      a: ["The redressal form immediately", "A suggested edit correcting it to the real name, escalating if it is rejected or reverts", "A support ticket", "Legal action"],
      c: 1,
      why: "It takes two minutes, sometimes works immediately, and costs nothing. Escalating to the full form is straightforward if the lighter route fails." },
    { q: "What should you tell a client before reporting a competitor?",
      a: ["That the competitor will be removed", "That you will report an evidenced violation, that the outcome is outside your control, and how much time you will spend", "Nothing", "That it always works"],
      c: 1,
      why: "A substantial proportion of reports produce no action. Promising removal creates an expectation you cannot meet and damages the relationship when it fails." },
    { q: "What should you do if a report produces no action after four weeks?",
      a: ["Submit the identical report ten times", "Consider one resubmission with stronger evidence, then stop unless the case is clear and high-impact", "Give up on all spam reporting", "Post about it publicly"],
      c: 1,
      why: "Repeated identical submissions achieve nothing. One improved resubmission is reasonable; beyond that the effort is better spent elsewhere." }
  ],
  ex: {
    title: "Submit one report properly",
    time: "30 minutes",
    intro: "You will complete the full process on a genuine violation.",
    steps: [
      "Take your strongest evidence pack from lesson 8.1.4.",
      "Decide the appropriate route and justify the choice.",
      "If a name violation, submit a suggested edit first and record the date.",
      "Complete the report with the listing URL, the specific guideline, the facts and the evidence.",
      "Record the submission date and method in your report log.",
      "Set weekly check reminders for four weeks."
    ],
    deliver: "A submitted report with the route justified, a logged submission date and scheduled follow-up checks."
  },
  chal: {
    title: "Build the reporting log and expectations brief",
    brief: "Create a report log template recording violation type, listing, evidence, route, submission date, follow-up dates and outcome. Then write the client-facing expectations brief you would send before doing any spam reporting: what you will do, what the realistic outcomes are, how long it may take, how much time you will spend, what you will not promise, and what you will report back. Keep the brief under 250 words and make it honest enough that a disappointing outcome would not damage the relationship.",
    success: [
      "The log captures enough to learn which violation types are worth reporting in your market.",
      "The brief states plainly that removal cannot be promised.",
      "It defines a bounded amount of effort rather than an open commitment."
    ]
  }
},

"8.1.6": {
  t: "Escalation paths, and when to give up",
  why: "Some cases justify persistence and most do not. Knowing the difference protects your time and your client's budget.",
  body: [
    "h: When escalation is justified",
    "l: The violation is clear, provable and documented.|It has a large, measurable impact on your position.|Standard reporting has been tried and failed.|The pattern is substantial — multiple listings, a network, repeated reoffending.|The case would be obvious to any reasonable reviewer.|The commercial value of resolution justifies further effort.",
    "p: If any of these is missing, escalation is usually not worth pursuing.",

    "h: The escalation routes",
    "n: **Resubmit with stronger evidence.** Often the most effective next step, and the least costly.|**Support channels available to verified business owners**, where the issue affects your own listing.|**Community forums** where experienced contributors sometimes escalate genuinely clear cases.|**Documenting a pattern across many listings**, which is more compelling than individual reports.|**Persistence over time**, since enforcement varies and a resubmission months later sometimes succeeds where an earlier one did not.",
    "warn: There is no guaranteed escalation route|Local SEO has no appeals court. Enforcement is inconsistent, explanations are rarely given, and genuinely clear violations sometimes persist for years. Anyone promising you a reliable escalation path is overstating. Persistence helps; certainty is not available.",

    "h: When to give up",
    "n: Two well-evidenced reports have produced nothing.|The violation is real but the impact on you is small.|The case requires interpretation rather than being self-evident.|The time spent has exceeded the likely commercial return.|The competitor's advantage comes mostly from legitimate factors anyway, from lesson 7.4.1.|Pursuing it has become emotional rather than commercial.",
    "tip: The two-report rule|Give any single violation two properly evidenced attempts, then stop and reassess. If it has not been actioned after two good reports, the probability of a third succeeding is low, and the time is almost always better spent building your own position. Revisit it in six months if it still matters.",

    "h: The opportunity cost",
    "p: This is the decisive consideration. An hour spent on a third report is an hour not spent on a service page, ten link requests, or a review system. Those produce reliable returns. Spam reporting produces uncertain ones.",
    "l: Calculate what the hour could produce elsewhere.|Compare against the probability-weighted value of the report.|In most cases the comparison is not close.",

    "h: Living with unresolved spam",
    "p: Sometimes a spam listing simply persists. The professional response:",
    "n: Document it and move on.|Focus on the factors you control.|Recognise that you can often outrank a spam listing by being genuinely stronger, particularly on reviews and relevance.|Revisit periodically, since enforcement waves do occur.|Do not let it dominate the strategy or the client conversation.",

    "h: Retaliation and ethics",
    "warn: Do not become the thing you are reporting|Frustration at unresolved spam leads some practitioners towards the same tactics, or towards malicious reporting of legitimate competitors. Both are wrong, both are detectable, and both end badly. Report genuine violations with genuine evidence, accept the outcome, and compete honestly.",
    "ex: The letting go|A client spent four months and considerable fee time pursuing a spam competitor across six reports, none of which produced action. Redirecting that time to reviews and two service pages moved the client above the spam listing within five months through legitimate strength. The spam listing was still there. It no longer mattered."
  ],
  take: [
    "Escalation is justified only when the violation is clear, provable, high-impact and standard reporting has failed.",
    "There is no guaranteed escalation route — enforcement is inconsistent and certainty is not available.",
    "Apply the two-report rule: two properly evidenced attempts, then stop and reassess.",
    "Opportunity cost is decisive — an hour on a third report is an hour not spent on work with reliable returns.",
    "You can often outrank a spam listing by being genuinely stronger, which makes the listing irrelevant without removing it."
  ],
  self: [
    "I can state the conditions that justify escalation.",
    "I apply the two-report rule rather than pursuing indefinitely.",
    "I weigh spam reporting against its opportunity cost.",
    "I know that frustration must not lead towards the same tactics or malicious reporting."
  ],
  quiz: [
    { q: "What is the two-report rule?",
      a: ["Report every violation twice simultaneously", "Give any violation two properly evidenced attempts, then stop and reassess", "Only report two violations per month", "Report to two different channels"],
      c: 1,
      why: "After two good reports produce nothing, the probability of a third succeeding is low and the time is almost always better spent building your own position." },
    { q: "What is the decisive consideration when deciding whether to keep pursuing a spam report?",
      a: ["How annoying the competitor is", "The opportunity cost — what that hour could produce if spent on work with reliable returns", "How long ago you first reported", "Whether the client asked"],
      c: 1,
      why: "Spam reporting has uncertain returns. A service page, link requests or review work have reliable ones, and the comparison is usually not close." },
    { q: "A spam listing persists after several reports. What is the professional response?",
      a: ["Use the same tactics yourself", "Document it, focus on legitimate strength, and recognise you can often outrank it by being genuinely stronger", "Report legitimate competitors in retaliation", "Tell the client it is hopeless"],
      c: 1,
      why: "Building genuine relevance and prominence can move you above a spam listing without removing it, and it produces durable advantage regardless of enforcement." }
  ],
  ex: {
    title: "Decide whether to continue",
    time: "25 minutes",
    intro: "You will make an explicit commercial decision rather than a frustrated one.",
    steps: [
      "Take any report you have submitted that has not produced action.",
      "Count how many attempts you have made and how much time you have spent.",
      "Estimate the position gain if the listing were removed.",
      "Estimate the probability that a further report would succeed.",
      "Calculate what the same time could produce spent on reviews, links or a service page.",
      "Make and record an explicit decision: continue, pause and revisit, or stop."
    ],
    deliver: "An explicit documented decision with the opportunity cost comparison that produced it."
  },
  chal: {
    title: "Write the spam policy",
    brief: "Write your standing policy on spam reporting for all client work. Cover: when you will investigate, what evidence standard you require, how many attempts you will make, how much time you will allocate per case per quarter, what you will and will not promise, when you will escalate, when you will stop, and what you will never do regardless of provocation. Then write the paragraph you would give a client who wants you to keep pursuing a case you have decided to stop, explaining the decision commercially rather than as giving up.",
    success: [
      "Your policy specifies a time and attempt budget rather than open-ended commitment.",
      "It includes an explicit list of what you will never do.",
      "Your client paragraph frames stopping as a commercial reallocation, not as defeat."
    ]
  }
}

});
