/* Level 8 · Module 2 — Suspensions and Reinstatement */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"8.2.1": {
  t: "Soft and hard suspensions",
  why: "The two types have different causes, different consequences and different recovery paths. Telling them apart is the first step in every suspension case.",
  body: [
    "h: What a suspension is",
    "term: Suspension|Google removing or restricting a business listing because it believes a guideline has been breached.",
    "p: A suspension is not a penalty in the sense of a ranking demotion. It is a removal of your ability to manage or display the listing.",

    "h: The two types",
    "table: Aspect ; Soft suspension ; Hard suspension || What happens ; The listing loses its verified status ; The listing disappears from Maps and search entirely || Is it still visible to customers? ; Usually yes, unverified ; No || Can you still manage it? ; Limited ; No || Reviews ; Usually still visible ; Not visible while suspended || Typical cause ; A guideline issue with the listing details ; A more serious eligibility or policy breach || Recovery difficulty ; Moderate ; Harder || Urgency ; High ; Critical",

    "h: Recognising which you have",
    "n: **Search the business by exact name.** If nothing appears, it is likely a hard suspension.|**Check whether it appears in Maps.** Gone entirely indicates hard.|**Check the management interface.** A suspended notice with the listing still visible publicly indicates soft.|**Check whether reviews are visible.** Visible usually means soft.|**Check for a notification** explaining the suspension, though these are not always given.",
    "warn: Verify before panicking|Before concluding a suspension, rule out the alternatives: the listing being wrongly marked closed, from lesson 3.4.2, a duplicate being filtered, from lesson 6.1.6, or a measurement error. Each looks similar at first glance and each has a completely different fix.",

    "h: Why the distinction matters",
    "l: A soft suspension leaves the business visible, so the immediate revenue impact is smaller and you have time to prepare a proper appeal.|A hard suspension removes the business entirely, so the impact is immediate and severe, and speed matters more.|The evidence required differs — soft suspensions often concern a specific field, hard suspensions usually concern eligibility itself.|The likelihood of reinstatement differs.",

    "h: What does not cause a suspension",
    "p: Worth stating clearly, because businesses frequently assume the wrong cause:",
    "l: A negative review.|A competitor reporting you, on its own — a report triggers a review, but the suspension follows from an actual breach.|Poor rankings.|Low review counts.|Changing your hours or photos.|Ordinary profile maintenance.",

    "h: What usually does",
    "p: Covered fully in lesson 8.2.2, but in summary: eligibility problems, address problems, name violations, multiple listings, and rapid changes to sensitive fields, from lesson 3.3.6.",

    "h: The immediate response",
    "n: **Confirm it is a suspension** and which type.|**Screenshot everything** before making any change, from lesson 7.1.3.|**Do not edit anything.** Editing during a suspension complicates the appeal and can look like evasion.|**Do not create a new listing.** This is the single most damaging response and is covered in lesson 8.2.5.|**Establish the likely cause** before appealing.|**Gather evidence**, from lesson 8.2.4.|**Then appeal**, from lesson 8.2.3.",
    "tip: The first hour matters most|In the first hour after discovering a suspension: confirm the type, screenshot everything, stop anyone from making changes, and begin identifying the cause. Businesses that panic-edit or create a replacement listing in that hour make their situation substantially worse and often irreversibly so.",

    "ex: The costly first hour|A business discovered its listing was gone. Within two hours, staff had created a new listing at the same address, hoping to restore visibility. The original suspension concerned an address eligibility issue. The new listing was suspended too, the account now had two violations rather than one, and the reinstatement of the original — which held 240 reviews — became substantially harder. The correct action in that hour was to do nothing except gather evidence."
  ],
  take: [
    "A soft suspension removes verification while the listing usually stays visible; a hard suspension removes the listing entirely.",
    "Verify it is genuinely a suspension before acting — a closure flag, a filtered duplicate or a measurement error all look similar.",
    "Negative reviews, poor rankings and ordinary maintenance do not cause suspensions.",
    "In the first hour: confirm the type, screenshot everything, stop all edits, and begin identifying the cause.",
    "Never create a replacement listing — it compounds the violation and makes reinstating the original far harder."
  ],
  self: [
    "I can distinguish a soft from a hard suspension.",
    "I know what to rule out before concluding a suspension has occurred.",
    "I know the five actions for the first hour.",
    "I know why creating a replacement listing is the most damaging response."
  ],
  quiz: [
    { q: "A listing has lost its verified status but is still visible to customers with its reviews. What is this?",
      a: ["A hard suspension", "A soft suspension", "A closure flag", "Normal behaviour"],
      c: 1,
      why: "Soft suspensions remove verification and management ability while the listing generally remains publicly visible, which gives you time to prepare properly." },
    { q: "What is the most damaging immediate response to a suspension?",
      a: ["Screenshotting everything", "Creating a replacement listing", "Gathering evidence", "Doing nothing for a day"],
      c: 1,
      why: "A replacement listing usually inherits the same violation, creates a second offence on the account, and makes reinstating the original with its reviews far harder." },
    { q: "Which of these does NOT cause a suspension?",
      a: ["An ineligible address", "A name violation", "Receiving a negative review", "Multiple listings for one business"],
      c: 2,
      why: "Reviews do not affect eligibility. Suspensions follow from guideline breaches concerning the business's identity, location or listing configuration." }
  ],
  ex: {
    title: "Build the suspension first-hour procedure",
    time: "25 minutes",
    intro: "You will prepare the response before you need it, which is when procedures actually get followed.",
    steps: [
      "Write the checks to confirm a suspension and determine its type.",
      "Write what must be ruled out first: closure flag, duplicate filtering, measurement error.",
      "Write the evidence capture list for the first ten minutes.",
      "Write the explicit list of what must not be done, and who must be told not to do it.",
      "Write who is notified and in what order.",
      "Write the two-sentence message you would send the business owner immediately."
    ],
    deliver: "A first-hour suspension procedure with confirmation checks, evidence capture, prohibitions and an owner message."
  },
  chal: {
    title: "Audit your own suspension exposure",
    brief: "Assess your practice business's exposure to suspension. Check every eligibility factor from Level 2: the business model configuration, the address type, the name, whether any duplicate exists, whether the account manages other unrelated listings, and whether any sensitive field has been changed recently. Rate each as safe, questionable or at risk. Then produce a remediation plan for anything questionable, and state honestly what would happen to the business if it were suspended tomorrow.",
    success: [
      "You checked every eligibility factor rather than assuming compliance.",
      "You rated each honestly, including anything questionable you would rather not flag.",
      "You stated the concrete business impact of a suspension, not just the technical one."
    ]
  }
},

"8.2.2": {
  t: "Why profiles get suspended: the real causes",
  why: "Accurate knowledge of the causes lets you prevent suspensions and diagnose them quickly when they happen.",
  body: [
    "h: The main causes, in rough order of frequency",
    "n: **Address eligibility.** A virtual office, mailbox, coworking desk or address where the business does not genuinely operate, from lesson 2.2.2.|**Business name violations.** Keyword stuffing, from lesson 2.3.1.|**Multiple listings.** More than one listing for a single business, from lesson 2.1.1.|**Model mismatch.** A service area business displaying an address, or a business claiming a storefront it does not have, from lesson 2.1.6.|**Rapid changes to sensitive fields.** Name, address and category changed together, from lesson 3.3.6.|**Account history.** Suspensions or removals on the same account.|**Category or content policy breaches.** Restricted or prohibited business types and content.|**Ownership disputes.** Contested claims on a listing.|**Verification failures** that escalate.",

    "h: The suspension triggers",
    "p: A breach does not always produce an immediate suspension. Something usually triggers the review:",
    "l: A competitor report, from lesson 8.1.5.|A routine re-verification request.|An automated detection sweep, particularly for address patterns.|A change to a sensitive field prompting a review.|A pattern across an account.|An algorithm or policy update changing what is detected.",
    "warn: This is why long-standing violations suddenly matter|A business can operate non-compliantly for years and then be suspended in a week, because a sweep or a report triggered the review. The absence of a suspension is not evidence of compliance, which is the point lesson 2.1.6 made about the two-year time bomb.",

    "h: Causes people assume wrongly",
    "table: Assumed cause ; Reality || A negative review ; Reviews do not cause suspensions || A competitor reported us maliciously ; A report triggers a review, but the suspension follows an actual breach || Our rankings dropped first ; Ranking and suspension are different things || We changed our photos ; Routine fields do not cause suspensions || Google does not like us ; There is always an identifiable cause, even if not disclosed",

    "h: Diagnosing the cause",
    "n: Read any notification received, which sometimes names the issue.|Check the listing against every Level 2 eligibility requirement, one by one.|Check the change history for recent sensitive changes, from lesson 3.4.3.|Check for duplicate listings.|Check whether the account manages other listings that might be implicated.|Check whether anything about the address would fail an inspection.|Be honest about what you find, including about your own recent changes.",
    "tip: Be honest with yourself first|The most common reason reinstatement appeals fail is that the business appeals while the violation still exists. If the address is a virtual office, no appeal will succeed until that changes. Diagnosing honestly, including finding a cause you would rather not find, is the only route to a successful appeal.",

    "h: Multiple causes",
    "p: Suspensions frequently have more than one contributing factor: an address that is borderline, a name that is slightly stuffed, and a rapid change that triggered the review. Address all of them, not only the most obvious.",

    "h: Prevention",
    "l: Get eligibility right at the start, from Level 2.|Never use an ineligible address.|Keep the name compliant.|Maintain one listing per genuine location.|Pace sensitive changes, from lesson 3.4.4.|Keep the account clean, from lesson 2.4.6.|Keep the evidence pack current, from lesson 2.2.3.",
    "ex: The three contributing causes|A suspension appeared after a category change. Investigation found three factors: the category change triggered a review, the address was a coworking space, and the business name included a service keyword. Only fixing all three produced reinstatement. Addressing only the category — the apparent trigger — would have failed, because the trigger and the cause were different things."
  ],
  take: [
    "The main causes are address eligibility, name violations, multiple listings, model mismatch, rapid sensitive changes and account history.",
    "A breach does not suspend immediately — something triggers the review, which is why long-standing violations suddenly matter.",
    "Reviews, ranking drops and routine field changes do not cause suspensions.",
    "The most common reason appeals fail is appealing while the violation still exists.",
    "Suspensions often have several contributing causes, and the trigger is frequently not the same as the cause."
  ],
  self: [
    "I can name the main suspension causes in order of frequency.",
    "I can distinguish a trigger from a cause.",
    "I know that the absence of a suspension is not evidence of compliance.",
    "I diagnose honestly, including finding causes I would rather not find."
  ],
  quiz: [
    { q: "Why can a business operate non-compliantly for years and then be suspended in one week?",
      a: ["Google changed the rules", "A trigger such as a report, a re-verification or a detection sweep initiated a review of a long-standing breach", "The business grew too fast", "Their competitors got stronger"],
      c: 1,
      why: "The breach existed throughout. Something simply caused it to be examined, which is why time without incident is not evidence of compliance." },
    { q: "What is the most common reason reinstatement appeals fail?",
      a: ["Poor formatting", "The business appeals while the underlying violation still exists", "Submitting too quickly", "Not enough reviews"],
      c: 1,
      why: "If the address is still ineligible or the name still stuffed, no appeal can succeed. The violation must be genuinely corrected before appealing." },
    { q: "A category change appears to have triggered a suspension. What must you check?",
      a: ["Only the category", "Every eligibility factor, because the trigger is frequently not the same as the cause", "The review count", "The website speed"],
      c: 1,
      why: "The change prompted a review that examined everything. The actual violation may be an address or name issue that had existed for years unnoticed." }
  ],
  ex: {
    title: "Diagnose a suspension cause systematically",
    time: "35 minutes",
    intro: "You will practise the honest audit that a real suspension requires.",
    steps: [
      "Take your practice business and assume it has just been suspended.",
      "Check it against every Level 2 eligibility requirement in turn, recording pass or fail.",
      "Check the name against the rules in lesson 2.3.1.",
      "Check for any duplicate listing.",
      "Check the change history for sensitive changes in the last three months.",
      "List every factor that could plausibly have contributed, ranked by likelihood."
    ],
    deliver: "A systematic eligibility audit with every potential contributing cause identified and ranked."
  },
  chal: {
    title: "Write the honest cause assessment",
    brief: "Write the assessment you would give a business owner whose listing has been suspended, where your investigation found that the address is a coworking desk they have used for three years. Explain what the cause is, why it has only surfaced now, why no appeal can succeed while it remains, what their genuine options are, what each would cost, and what you recommend. Do it without blame, since they may not have known, and without softening the conclusion into ambiguity.",
    success: [
      "You explained why a long-standing violation surfaced now.",
      "You stated plainly that no appeal can succeed without a real change.",
      "You presented genuine options with costs rather than only delivering bad news."
    ]
  }
},

"8.2.3": {
  t: "The reinstatement process step by step",
  why: "Reinstatement is a process with a specific shape. Following it properly substantially improves the odds.",
  body: [
    "h: The sequence",
    "n: **Confirm the suspension and its type**, from lesson 8.2.1.|**Capture all evidence** of the current state before changing anything.|**Diagnose the cause honestly**, from lesson 8.2.2.|**Fix the underlying violation genuinely.** This is the step that decides everything.|**Assemble the evidence pack**, from lesson 8.2.4.|**Submit the reinstatement request** through the appropriate channel.|**Wait**, without submitting duplicates.|**Respond to any request for further information** promptly and completely.|**If rejected, reassess** rather than resubmitting identically, from lesson 8.2.5.",

    "h: Fixing the violation first",
    "warn: This is the whole game|Everything else is administration. If the address is ineligible, it must genuinely change — either to a real eligible premises, or by reconfiguring as a service area business. If the name is stuffed, it must be corrected to the real name. Submitting a reinstatement request while the violation persists wastes the attempt and may make subsequent attempts harder.",
    "table: Violation ; Genuine fix || Virtual office address ; Move to a real premises, or reconfigure as a service area business with the real base || Stuffed name ; Change to the real business name as shown on signage || Multiple listings ; Remove or merge the extras, keeping one || Model mismatch ; Reconfigure correctly and hide the address if customers are not served there || Rapid changes ; Restore a stable correct configuration and stop changing",

    "h: Submitting the request",
    "l: Use the reinstatement route provided for the listing, usually through the management interface or a dedicated form.|Identify the listing precisely.|State what the business is and what it does.|State what you believe the issue was.|State exactly what you have changed to resolve it.|Attach the evidence.|Keep it factual and brief.|Provide contact details.",

    "h: What to include in the statement",
    "ex: A clear reinstatement statement|'Northgate Heating is a plumbing and heating business operating in Leeds since 2011. We believe the listing was suspended because our address was configured as a storefront while we do not serve customers at that address. We have reconfigured the listing as a service area business and the address is now hidden. Our real operating base is [address], evidenced by the attached lease, utility bill and photographs of our branded vehicles and equipment at that location. We serve customers at their own premises across Leeds.'",

    "h: Timescales",
    "l: Acknowledgement, where given, within days.|Decision typically within one to several weeks.|Requests for further information can extend it substantially.|Some cases take months.|Some receive no response at all.",
    "tip: Set the expectation before submitting|Tell the business owner: this may take several weeks, the outcome is not guaranteed, we must not create a replacement listing meanwhile, and here is what we will do in the interim to keep enquiries coming. That conversation, held before submission, prevents the weekly 'has it come back yet' pressure that leads to damaging decisions.",

    "h: What to do while waiting",
    "n: Do not edit the listing.|Do not create a replacement.|Do not submit duplicate requests.|Do focus on everything not dependent on the listing: the website, organic rankings, paid advertising, direct marketing, existing customers.|Do keep the evidence pack ready for any follow-up question.|Do record everything with dates.",

    "h: If reinstated",
    "l: Verify that all information is correct.|Verify that reviews have returned.|Do not immediately make changes — let it settle for several weeks.|Record what happened and what fixed it.|Address any remaining compliance risks carefully and slowly.|Put the prevention measures from lesson 8.2.6 in place."
  ],
  take: [
    "The sequence is confirm, capture, diagnose, fix genuinely, assemble evidence, submit, wait, respond, reassess if rejected.",
    "Fixing the underlying violation genuinely is the step that decides the outcome; everything else is administration.",
    "The statement should say what the business is, what you believe the issue was, and exactly what you changed.",
    "Expect weeks rather than days, set that expectation before submitting, and never submit duplicate requests.",
    "While waiting, focus on everything not dependent on the listing, and never create a replacement."
  ],
  self: [
    "I can recite the nine-step reinstatement sequence.",
    "I know that fixing the violation genuinely is the decisive step.",
    "I can write a clear reinstatement statement.",
    "I know what to do and not do while waiting."
  ],
  quiz: [
    { q: "What is the decisive step in a reinstatement?",
      a: ["Writing a persuasive appeal", "Genuinely fixing the underlying violation before submitting", "Submitting quickly", "Including many documents"],
      c: 1,
      why: "No appeal succeeds while the breach persists. The quality of the writing and the evidence only matter once the actual problem has been resolved." },
    { q: "What should a business do while waiting for a reinstatement decision?",
      a: ["Create a temporary replacement listing", "Focus on the website, organic rankings, advertising and direct marketing, and change nothing on the listing", "Submit the request weekly", "Edit the listing to improve it"],
      c: 1,
      why: "Replacement listings and repeated submissions both harm the case. Non-listing channels keep enquiries coming without jeopardising the appeal." },
    { q: "What should the reinstatement statement include?",
      a: ["An apology and a promise", "What the business is, what you believe the issue was, and exactly what you changed to resolve it", "A complaint about the suspension", "Ranking data"],
      c: 1,
      why: "Whoever reviews it needs to understand the business, the likely breach and the specific remediation, supported by evidence. Nothing else helps." }
  ],
  ex: {
    title: "Write a reinstatement submission",
    time: "35 minutes",
    intro: "You will produce the document that decides a real case.",
    steps: [
      "Take the suspension cause you identified in lesson 8.2.2.",
      "Write exactly what the genuine fix would be, not a workaround.",
      "Write the statement: what the business is, the believed issue, and the specific change made.",
      "List the evidence you would attach.",
      "Write the expectation-setting message you would send the owner before submitting.",
      "Write the interim plan for keeping enquiries coming while waiting."
    ],
    deliver: "A complete reinstatement submission with a genuine fix, a statement, an evidence list, an owner message and an interim plan."
  },
  chal: {
    title: "Build the reinstatement playbook",
    brief: "Write a complete playbook for handling a suspension from discovery to resolution. Cover the first hour, the diagnosis, the decision about what genuine fix is required and who authorises it, the evidence assembly, the submission, the waiting period, the interim revenue protection plan, the response to rejection, and the post-reinstatement stabilisation. Include the specific conversations to have with the owner at each stage. Make it usable by a colleague under pressure who has never handled one.",
    success: [
      "The playbook covers all stages including interim revenue protection, not just the appeal.",
      "It specifies who authorises the genuine fix, since it may require a business decision.",
      "It includes the specific owner conversations at each stage."
    ]
  }
},

"8.2.4": {
  t: "Building a reinstatement evidence pack",
  why: "The evidence pack is what proves the business is real and eligible. Assembling it properly is the difference between a decision in your favour and a rejection.",
  body: [
    "h: What the evidence must prove",
    "n: **The business is real** and genuinely trades.|**It operates from where it claims**, or from a genuine base if the address is hidden.|**The person appealing is authorised** to manage it.|**The violation has been corrected.**",

    "h: The core documents",
    "table: Document ; What it proves ; Notes || Business registration or licence ; The business legally exists ; Must show the name || Lease or ownership documents ; Right to occupy the premises ; Current, showing the address || Utility bill ; Genuine occupation ; Recent, in the business name || Business insurance ; Operating legitimacy ; Shows the address || Tax documentation ; Genuine trading ; Where appropriate in your market || Bank statement header ; Name and address ; Redact financial details || Vehicle registration or branding ; Operating capability, for service businesses ; Shows the branded vehicles are real",

    "h: The photographic evidence",
    "l: Exterior of the premises showing signage and the street.|The business name clearly readable.|The entrance customers use.|Interior showing genuine operation.|Equipment, stock or tools appropriate to the trade.|Branded vehicles, including registration plates where relevant.|Staff at work, where appropriate.|Any accreditation certificates displayed.",
    "tip: Take the photographs as though for video verification|The standard is the same as lesson 2.4.2: daylight, clear, readable signage, nothing obscured. A pack of well-lit photographs showing a real operating business is often more persuasive than any document, because it is harder to fake and easier to assess quickly.",

    "h: For service area businesses",
    "p: Where there is no customer-facing premises, the evidence is different:",
    "l: The genuine operating base, even if it is a home or a unit.|Branded vehicles and equipment.|Trade tools and materials.|Business documents showing the address.|Evidence of work: invoices with addresses redacted, job photographs.|Trade body memberships and accreditations.",

    "h: Proving the violation is fixed",
    "n: A screenshot of the corrected listing configuration.|Where a name was changed, evidence of the real name on signage and the website.|Where an address changed, evidence of the new premises.|Where duplicates were removed, evidence that only one now exists.|Where a model was reconfigured, a statement of how customers are actually served.",

    "h: Presenting it",
    "l: Label every file clearly.|Keep it proportionate — a focused pack of six to ten strong items beats forty weak ones.|Redact genuinely sensitive information such as bank details, but do not redact the name or address.|Provide a short index explaining what each item shows.|Keep the originals.",
    "warn: Do not send anything misleading|Altered documents, photographs of somewhere else, or a lease for premises you do not occupy will be discovered and will end the case permanently. If the genuine evidence does not exist, the business is not eligible and the honest answer is to change the real situation, not the evidence.",

    "h: Preparing in advance",
    "p: Every business should hold this pack before it is ever needed, as lesson 2.2.3 recommended. When a suspension arrives, a business with a current pack submits within hours. A business without one spends two weeks gathering documents while losing revenue daily.",
    "ex: The pack that was ready|A business at a shared address kept a folder containing its lease, a recent utility bill, insurance, photographs of its door signage and interior, and its trade body certificate, refreshed annually. When a suspension arrived, the reinstatement was submitted the same afternoon and granted in nine days. A comparable business without a pack took five weeks to assemble equivalent evidence, during which it lost its peak trading period."
  ],
  take: [
    "The evidence must prove the business is real, operates where it claims, that you are authorised, and that the violation is fixed.",
    "Core documents are registration, lease, utility bill, insurance and tax or banking headers with financial details redacted.",
    "Photographs to the video verification standard are often more persuasive than documents.",
    "A focused pack of six to ten strong items beats forty weak ones — include a short index.",
    "Never send anything misleading; if the genuine evidence does not exist, the real situation must change instead."
  ],
  self: [
    "I know the four things the evidence must prove.",
    "I can list the core documents and photographic evidence required.",
    "I know how the evidence differs for a service area business.",
    "I keep an evidence pack current before it is needed."
  ],
  quiz: [
    { q: "What standard should reinstatement photographs meet?",
      a: ["Any photograph is sufficient", "The video verification standard: daylight, clear, readable signage, nothing obscured", "Professional studio quality", "Photographs are not needed"],
      c: 1,
      why: "Clear photographs of a real operating business are often more persuasive than documents, because they are harder to fake and quicker to assess." },
    { q: "How large should an evidence pack be?",
      a: ["As large as possible", "Focused: six to ten strong items with a short index explaining each", "One document only", "At least fifty items"],
      c: 1,
      why: "Whoever reviews it has limited time. A focused, well-labelled pack of strong evidence is assessed properly; a large weak one is not." },
    { q: "What should you do if the genuine evidence of eligibility does not exist?",
      a: ["Create something that looks close enough", "Recognise that the business is not eligible and change the real situation instead", "Submit without evidence", "Appeal repeatedly"],
      c: 1,
      why: "Misleading evidence is discovered and ends the case permanently. If the business cannot prove eligibility, it must become eligible, not appear to be." }
  ],
  ex: {
    title: "Assemble the evidence pack",
    time: "40 minutes",
    intro: "You will prepare before you need it, which is the entire point.",
    steps: [
      "List every core document your practice business could provide and note which you actually have access to.",
      "Take or locate the photographic evidence: exterior with signage, entrance, interior, equipment, vehicles.",
      "For a service area business, gather the alternative evidence set instead.",
      "Write the short index explaining what each item shows.",
      "Store everything in one dated folder.",
      "Note what is missing and how you would obtain it."
    ],
    deliver: "A dated, indexed evidence pack with documents and photographs, and a note of anything missing."
  },
  chal: {
    title: "Build the evidence pack standard",
    brief: "Write the standard evidence pack specification you would apply to every business you work with. Specify what documents and photographs are required for a storefront, a service area business, a practitioner and a multi-location business. Specify capture instructions, how often it is refreshed, where it is stored, who maintains it, and what redaction is appropriate. Then write the one-page instruction sheet you would give a business owner so they could assemble it themselves in an afternoon.",
    success: [
      "The specification covers all four business types with appropriate evidence for each.",
      "It includes capture instructions, refresh frequency and redaction guidance.",
      "The owner instruction sheet is genuinely achievable in one afternoon by a non-specialist."
    ]
  }
},

"8.2.5": {
  t: "Appeals, rejections and second attempts",
  why: "Many reinstatements are rejected first time. Knowing how to handle a rejection properly is what turns a setback into an eventual success.",
  body: [
    "h: Why reinstatements get rejected",
    "n: **The violation was not actually fixed.** By far the most common reason.|**The evidence did not prove eligibility.**|**The wrong cause was addressed** — the trigger rather than the actual breach, from lesson 8.2.2.|**The evidence was insufficient or unclear.**|**The account has a history** that weighs against it.|**The business genuinely is not eligible.**|**An error**, which does occasionally happen.",

    "h: The first response to a rejection",
    "warn: Do not immediately resubmit the same request|An identical resubmission produces an identical result and can count against you. Stop, reassess, and establish what was insufficient before doing anything else. The time spent reassessing is what makes the second attempt different from the first.",
    "n: Read any reason given, carefully and literally.|Re-examine the eligibility question honestly, assuming you were wrong about something.|Check whether another violation exists that you did not address.|Check whether the evidence actually proved what you thought it proved.|Ask someone else to review the case, because a second reader spots what you did not.|Only then prepare a second attempt.",

    "h: What to change on a second attempt",
    "table: Rejection reason ; What to change || Violation not fixed ; Fix it genuinely, then reapply || Insufficient evidence ; Stronger, clearer evidence, especially photographs || Wrong cause addressed ; Re-diagnose completely and address the real breach || Unclear submission ; Rewrite plainly, with a clear index || Genuine ineligibility ; Change the real situation or accept the outcome",

    "h: When the business genuinely is not eligible",
    "p: This is the hardest conversation in local SEO and it must be had honestly:",
    "l: If the address is a virtual office and the business will not move or reconfigure, there is no reinstatement.|If the business is not genuinely staffed at the claimed address, no evidence will prove it is.|Continuing to appeal in that situation wastes money and damages the account.|The honest advice is to reconfigure to a compliant model, which for most affected businesses means a service area listing.|That may mean starting a new compliant listing from zero, with the loss of the old reviews.",
    "tip: The reconfiguration is usually available|Most businesses suspended for address eligibility are actually service area businesses that were misconfigured. The compliant version has been available all along, costs nothing, and removes the problem permanently. The loss is the delay and sometimes the reviews, not the ability to have a listing at all.",

    "h: How many attempts",
    "l: A second attempt with genuinely changed circumstances or evidence is reasonable.|A third, if something material has changed again.|Beyond that, the pattern itself becomes a problem.|Repeated identical appeals damage the account and reduce the chance of any future success.",

    "h: The alternative routes",
    "n: Community forums, where experienced contributors sometimes identify what is wrong with a case.|Support channels where available.|A fresh, genuinely compliant listing, only where the original is definitively lost and the configuration is now correct.|Professional help from someone who handles reinstatements regularly, for high-value cases.",

    "h: Recording the case",
    "p: Whatever the outcome, record it: the cause, the fix, the evidence, the submission, the result and the timeline. Reinstatement cases are among the most valuable entries in the evidence base from lesson 3.4.4, because each one teaches you something specific about what works.",
    "ex: The rejection that revealed the real cause|A reinstatement was rejected after the business corrected a stuffed name. Reassessment found the actual issue was a second listing created three years earlier by a former employee, which nobody knew about. Removing the duplicate and resubmitting produced reinstatement in eleven days. The name had needed correcting anyway, but it was never the cause."
  ],
  take: [
    "The most common rejection reason is that the violation was not actually fixed.",
    "Never resubmit an identical request — reassess honestly, assuming you were wrong about something.",
    "Get a second person to review the case, because a fresh reader spots what you did not.",
    "Where the business genuinely is not eligible, the honest answer is reconfiguration, usually to a service area listing.",
    "A second and occasionally a third attempt with materially changed circumstances is reasonable; beyond that the pattern itself harms."
  ],
  self: [
    "I know the main reasons reinstatements are rejected.",
    "I reassess rather than resubmitting identically.",
    "I know how to have the conversation when a business genuinely is not eligible.",
    "I record every reinstatement case for my evidence base."
  ],
  quiz: [
    { q: "A reinstatement is rejected. What should you do first?",
      a: ["Resubmit the same request immediately", "Stop and reassess honestly, assuming you were wrong about the cause or the evidence", "Create a new listing", "Complain publicly"],
      c: 1,
      why: "An identical resubmission produces an identical result and can count against the account. The reassessment is what makes a second attempt different." },
    { q: "A business suspended for an ineligible address refuses to move or reconfigure. What is the honest advice?",
      a: ["Keep appealing until it works", "There is no reinstatement while the violation persists; the compliant option is usually a service area configuration", "Create listings under a different name", "Use a different virtual office"],
      c: 1,
      why: "No appeal can succeed while the breach remains. Most affected businesses are actually service area businesses and the compliant configuration is available at no cost." },
    { q: "Why should a second person review a rejected case?",
      a: ["To share the blame", "A fresh reader spots what the original investigator missed, and the original diagnosis may have been wrong", "Google requires two reviewers", "It speeds up the process"],
      c: 1,
      why: "The commonest failure is addressing the wrong cause. Someone without the original assumptions is far more likely to notice the overlooked violation." }
  ],
  ex: {
    title: "Reassess a rejected case",
    time: "30 minutes",
    intro: "You will practise the discipline that turns a rejection into an eventual success.",
    steps: [
      "Take a hypothetical rejection of the reinstatement you drafted in lesson 8.2.3.",
      "Assume your original diagnosis was wrong and re-examine every eligibility factor.",
      "Check specifically for anything you did not previously consider: duplicates, account history, other listings.",
      "Assess honestly whether your evidence actually proved what you claimed.",
      "Identify what you would change on a second attempt.",
      "Write the revised statement."
    ],
    deliver: "A reassessment identifying a different potential cause and a revised submission."
  },
  chal: {
    title: "Write the ineligibility conversation",
    brief: "Write the conversation you would have with a business owner when the honest conclusion is that their listing cannot be reinstated while they continue operating from an ineligible address. Explain why, what the compliant alternatives are, what each would cost in money and in lost reviews, what you recommend, and what happens if they do nothing. Be direct without being harsh, and do not leave any false hope. Then write the paragraph explaining why continuing to appeal would waste their money.",
    success: [
      "You stated plainly that reinstatement is not possible while the situation persists.",
      "You presented compliant alternatives with honest costs including any review loss.",
      "You explained why further appeals would waste money, without sounding defeatist."
    ]
  }
},

"8.2.6": {
  t: "Preventing suspensions before they happen",
  why: "Every hour spent on prevention is worth many spent on reinstatement. This lesson assembles the preventive practice.",
  body: [
    "h: The prevention checklist",
    "n: **Get eligibility right at the start.** The single highest-value action, from Level 2.|**Never use an ineligible address.** No virtual offices, mailboxes or address-only arrangements.|**Keep the name compliant.** The real name, always, from lesson 2.3.1.|**Maintain one listing per genuine location.** Audit for duplicates annually, from lesson 6.1.6.|**Match the model to reality.** Hide the address if customers are not served there, from lesson 2.1.6.|**Pace sensitive changes.** Two weeks minimum between name, address and category changes, from lesson 3.3.6.|**Keep the account clean.** Business as primary owner, no unrelated listings concentrated, from lesson 2.4.4.|**Keep the evidence pack current.** Refreshed annually, from lesson 8.2.4.|**Monitor monthly**, from lesson 3.4.6.",

    "h: The annual compliance review",
    "p: Once a year, review every business against current guidelines:",
    "l: Has the address situation changed? Is it still genuinely occupied and staffed?|Is the name still exactly the real-world name?|Has a duplicate appeared?|Has the business model changed — do customers now visit, or no longer visit?|Have the guidelines changed in a way that affects this business?|Is the evidence pack current?|Who has access, and should they?",
    "tip: Guidelines change and businesses change|A configuration that was compliant three years ago may not be now, either because the guidelines moved or because the business did. A clinic that stopped seeing walk-in patients, or a trade business that gave up its unit, has changed its eligibility without anyone noticing. The annual review catches this.",

    "h: Risk rating your portfolio",
    "table: Risk level ; Characteristics ; Action || Low ; Owned or leased premises, real signage, compliant name, single listing, stable ; Annual review only || Medium ; Shared address, home-based with visible address, recent changes ; Evidence pack current, six-monthly review || High ; Coworking or serviced office, borderline name, multiple listings, account history ; Remediate now, do not wait || Critical ; Virtual address, known ineligibility ; Reconfigure immediately before it is discovered",

    "h: The conversation to have early",
    "warn: Raise compliance risk before it becomes a crisis|If you take on a business with a compliance problem, raise it in the first month, in writing, with the options and the risk. Businesses that are told about a risk and choose to accept it are in a different position from those who were never told. So are you.",

    "h: What to do about an inherited violation",
    "n: Document it and inform the owner in writing.|Explain the risk plainly and the realistic consequences.|Present the compliant options with their costs.|Recommend one.|If they decline, record that you advised it, and decide whether you are willing to continue the engagement.|Do not build on an ineligible foundation without disclosing it.",

    "h: The cost comparison",
    "p: Prevention costs a few hours a year. A suspension costs:",
    "l: Weeks of lost visibility and revenue.|The fee time spent on reinstatement.|Potential permanent loss of reviews.|Account damage affecting future listings.|Client relationship damage.|Sometimes the business itself, for businesses entirely dependent on local search.",
    "ex: The two-hour prevention|An agency ran an annual compliance review across its client base. One review found a client that had quietly given up its serviced office eighteen months earlier and was now working from home while still displaying the office address. Reconfiguring it as a service area business took an hour. Six months later, a detection sweep suspended four businesses at that serviced office address. The client was not among them, because it was no longer there."
  ],
  take: [
    "Prevention is a nine-point checklist: eligibility, address, name, single listing, model match, pacing, account health, evidence pack and monitoring.",
    "Run an annual compliance review, because both guidelines and businesses change without anyone noticing.",
    "Risk-rate your portfolio and remediate the high and critical cases immediately rather than waiting.",
    "Raise any inherited compliance risk in writing in the first month, with options and consequences.",
    "Prevention costs a few hours a year; a suspension can cost weeks of revenue, the reviews, and sometimes the business."
  ],
  self: [
    "I can recite the nine-point prevention checklist.",
    "I run an annual compliance review on every business.",
    "I risk-rate businesses and remediate high risk immediately.",
    "I raise inherited violations in writing rather than building on them silently."
  ],
  quiz: [
    { q: "Why is an annual compliance review necessary even for a business that was compliant when set up?",
      a: ["Google requires it", "Both the guidelines and the business can change — a business may give up premises or stop seeing customers without anyone noticing", "Listings expire annually", "Reviews need refreshing"],
      c: 1,
      why: "Eligibility depends on the current real situation. A clinic that stopped taking walk-ins or a trade that gave up its unit has changed its eligibility silently." },
    { q: "You inherit a client with a virtual office address. What should you do?",
      a: ["Say nothing and hope it is not noticed", "Raise it in writing in the first month with the risk, the options and a recommendation", "Immediately create a new listing", "Report them"],
      c: 1,
      why: "Building on an undisclosed ineligible foundation exposes both the client and you. Written disclosure with options protects both parties whatever they decide." },
    { q: "What does a suspension potentially cost that prevention does not?",
      a: ["Only some time", "Weeks of revenue, the reviews, account damage, the client relationship, and sometimes the business itself", "A small fee", "Nothing measurable"],
      c: 1,
      why: "The consequences extend well beyond the listing, which is why a few preventive hours a year is among the best-value work in local SEO." }
  ],
  ex: {
    title: "Run the compliance review",
    time: "30 minutes",
    intro: "You will do the work that prevents the crisis.",
    steps: [
      "Run the nine-point prevention checklist against your practice business.",
      "Check whether the address situation has changed since the listing was created.",
      "Check whether the name still exactly matches real-world signage.",
      "Check for duplicates and for who has account access.",
      "Assign a risk rating: low, medium, high or critical.",
      "Write the remediation actions for anything above low, with dates."
    ],
    deliver: "A completed compliance review with a risk rating and dated remediation actions."
  },
  chal: {
    title: "Build the portfolio compliance system",
    brief: "Design a compliance system for someone managing thirty client listings. Specify how each is risk-rated, how often each rating band is reviewed, what is checked, who does it, how findings are recorded, what triggers immediate action, how inherited violations are disclosed, and what the escalation path is when a client declines a recommended remediation. Then calculate the annual time cost per client and confirm it is low enough to actually happen.",
    success: [
      "Your system varies review frequency by risk band rather than treating all clients identically.",
      "It specifies a written disclosure process for inherited violations.",
      "The annual time cost per client is calculated and realistic."
    ]
  }
}

});
