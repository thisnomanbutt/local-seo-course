/* Level 2 · Module 4 — Verification and Account Health */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"2.4.1": {
  t: "How verification works today",
  why: "Verification is the gate. Nothing you learn in Levels 3 to 10 matters if you cannot get through it, and the methods have changed significantly in recent years.",
  body: [
    "h: What verification is for",
    "p: Verification proves to Google that you are connected to a real business at the location you claimed. Until it is complete, your listing is limited or invisible, and anyone else could claim it.",

    "h: The methods you may be offered",
    "n: **Video verification.** You record a live video showing your location, equipment and proof of management. This has become the most common method for many business types.|**Postcard.** A card with a code is posted to the address. Slower, and less commonly offered than it used to be.|**Phone or text.** A code is sent to the business number. Fast, but only offered for some businesses.|**Email.** A code to an email address, often one matching the business domain.|**Search Console.** For some businesses, an already-verified website ownership can verify the listing instantly.|**Bulk verification.** For organisations with many locations, covered in lesson 3.4.5.",
    "warn: You do not choose the method|Google offers what it offers, based on the business type, category, location, history and its own risk assessment. If you are offered only video, you cannot request a postcard. Arguing about the method wastes time you should spend preparing for the one you were given.",

    "h: What decides which method you get",
    "l: The category. Higher-risk categories such as locksmiths, tradespeople and legal services face stricter verification.|The address. Shared addresses, virtual office patterns and unmapped locations invite stricter methods.|The account history. A clean account with verified listings fares better than a new one.|Whether the business has been suspended or rejected before.|Country and market.",

    "h: Preparation beats improvisation",
    "p: Most failures happen because the person verifying was not ready. Before you start, have available:",
    "l: Evidence of signage at the location.|A business document showing the name and address: a utility bill, lease, licence or registration.|Branded equipment, vehicles, uniforms or tools if relevant.|Access to the premises, during daylight, with a working camera.|Proof you manage the business, such as keys, access to a till or back office, or business paperwork.",

    "h: Timescales",
    "table: Method ; Typical time ; Notes || Phone or text ; Minutes ; Instant when offered || Email ; Minutes to hours ; Domain email preferred || Search Console ; Immediate ; Only when site ownership is already verified || Video, live ; Minutes to a few days for review ; Decision may take several days || Video, recorded ; Up to a week ; Review queue varies || Postcard ; One to three weeks ; Can be lost, one resend usually allowed",

    "h: While you wait",
    "p: Do not make changes to core fields during verification review. Editing the name, address or category mid-review can invalidate the process or trigger additional scrutiny. Complete the profile fully **before** submitting, then leave it alone until the decision arrives.",
    "tip: Complete first, verify second|A fully completed profile with photos, hours, categories and description verifies more smoothly than a bare one, because it looks like a real business rather than a placeholder. Do the work before you press the button.",

    "h: If verification fails",
    "p: A failed attempt is not the end, but repeated failures make the next attempt harder. Understand why it failed before trying again. Lesson 2.4.3 covers the common causes and their fixes in detail, and lesson 8.2.3 covers what to do when a listing has been suspended rather than merely unverified.",
    "ex: The avoidable failure|A new salon attempted video verification at 8 pm in winter. The exterior was dark, the sign was unlit and unreadable, and the owner had no documents to hand. It failed. The second attempt, at 11 am with a utility bill, the lease and clear signage, took four minutes and succeeded. Nothing about the business had changed."
  ],
  take: [
    "Verification proves you are connected to a real business at the claimed location.",
    "Methods include video, postcard, phone, email, Search Console and bulk — and you do not choose which you are offered.",
    "Category, address, account history and past suspensions all influence which method you get.",
    "Complete the profile fully before verifying, and make no core changes while a review is pending.",
    "Most failures are preparation failures, not eligibility failures."
  ],
  self: [
    "I can name at least five verification methods.",
    "I know I cannot choose the method and why.",
    "I can list what evidence to have ready before starting.",
    "I know not to edit core fields during a pending review."
  ],
  quiz: [
    { q: "Can you choose your verification method?",
      a: ["Yes, always", "No — Google offers methods based on category, address, history and risk", "Yes, if you pay", "Only for new businesses"],
      c: 1,
      why: "The offered methods are determined by Google's assessment of the business and account. Requesting a different one is not generally possible." },
    { q: "What should you do to a profile while verification is under review?",
      a: ["Add categories and change the name to optimise", "Leave core fields alone — edits can invalidate the review or add scrutiny", "Delete and recreate it", "Add more listings"],
      c: 1,
      why: "Changes to name, address or category during review can restart or complicate the process. Complete everything before submitting." },
    { q: "Which factor makes stricter verification more likely?",
      a: ["Having many photos", "Being in a higher-risk category such as locksmiths or legal services", "Having a long description", "Being open at weekends"],
      c: 1,
      why: "Categories with a history of fraudulent listings receive stricter treatment, as do shared addresses, new accounts and previously suspended businesses." }
  ],
  ex: {
    title: "Build your verification readiness pack",
    time: "30 minutes",
    intro: "You will prepare everything before you need it, which is the difference between a four-minute verification and a four-week one.",
    steps: [
      "List every document that proves the business name and address: lease, utility bill, licence, registration, insurance.",
      "Note which you actually have access to and which you would need to request.",
      "Take or locate clear daylight photographs of the exterior signage.",
      "Photograph any branded vehicles, equipment or uniforms.",
      "Note what proof of management you could show: keys, back office access, paperwork.",
      "Store everything in one folder and note the date."
    ],
    deliver: "A dated verification readiness folder containing documents, signage photos and proof-of-management evidence."
  },
  chal: {
    title: "Plan verification for a difficult case",
    brief: "Choose a business type that faces strict verification: a locksmith, a service area business run from home, or a business at a shared address. Write a complete verification plan covering what method is likely to be offered, what evidence must be prepared, what time of day and conditions to attempt it in, what could go wrong, and what the fallback is for each failure mode. Include a realistic estimate of how long the whole process might take from start to verified.",
    success: [
      "You correctly anticipate the likely method and the reason for it.",
      "Your evidence list is specific to that business type, not generic.",
      "You include a fallback for each failure mode with realistic timings."
    ]
  }
},

"2.4.2": {
  t: "Passing video verification first time",
  why: "Video verification now decides the fate of most new listings. Getting it right first time saves weeks and avoids the harder second attempt.",
  body: [
    "h: What Google is checking",
    "p: The video needs to establish three things:",
    "n: **The location is real and is the business you claimed.** Signage, exterior, surroundings, street.|**The business genuinely operates there.** Equipment, stock, workspace, vehicles, tools.|**You are authorised to manage it.** Access to restricted areas, keys, till, back office, business documents.",
    "p: If any of the three is missing or unclear, expect rejection.",

    "h: The recording, step by step",
    "n: **Start outside.** Show the street, any nearby street sign or building number, then walk towards your entrance.|**Show the signage clearly.** Hold steady for several seconds. The name must be readable and must match the listing exactly.|**Show the entrance and go inside** in one continuous shot, without cutting.|**Show the working space.** Equipment, stock, treatment rooms, workshop, kitchen — whatever proves the operation.|**Show proof of management.** Unlock something, open a back office, show a till, or show business paperwork with the name and address visible.|**Show a document** such as a utility bill, lease or licence, held steady and readable.",

    "h: The rules that cause most failures",
    "warn: The video must be continuous|Do not stop, cut, edit or splice. A continuous shot is what proves the pieces belong together. Editing invalidates it immediately.",
    "l: Record in daylight with good lighting.|Do not cover or obscure the business name anywhere.|Do not use photographs of photographs or screens showing images.|Do not record on a day the business is closed and empty if you can avoid it.|Keep the camera steady enough to read text.|Do not narrate claims the video does not show — the evidence must be visible.",

    "h: Service area businesses",
    "p: An SAB has no customer-facing premises, so the evidence is different:",
    "l: Show branded vehicles, including the name and any registration.|Show tools and equipment specific to the trade.|Show stock, materials or a work van interior.|Show business documents with the name and address.|Show the base of operations, even if it is a garage or home office, without needing to display it publicly on the listing.",

    "h: Practitioners",
    "p: A practitioner listing usually requires evidence linking the individual to the location: a name on a door, an appointment system showing their name, professional registration documents, or business cards together with the premises.",

    "h: Live versus recorded",
    "p: You may be asked to record and upload, or to join a live call with a representative. For a live call, the same rules apply, plus:",
    "l: Test your camera and connection first.|Have all documents already in hand, not in another room.|Be at the location, not travelling to it.|Allow at least thirty minutes without interruption.",

    "ex: The five-second failure|A plumber recorded an excellent video showing his van, tools and paperwork — but never showed a document with his business address. Rejected. The second attempt was identical plus ten seconds of a utility bill. Approved. The only difference was one piece of evidence that took ten seconds to include.",
    "tip: Make a shot list before recording|Write the six steps on paper, tick them off mentally as you film, and do not stop recording until every one is done. Most failures are omissions, not problems."
  ],
  take: [
    "Video verification must prove the location is real, the business operates there, and you are authorised to manage it.",
    "Record continuously in daylight, without cutting, editing or obscuring anything.",
    "Show exterior, signage, entrance, working space, proof of management and a document with the address.",
    "Service area businesses show vehicles, tools, stock and documents instead of a customer-facing premises.",
    "Most rejections are omissions. Use a shot list and do not stop recording until every item is covered."
  ],
  self: [
    "I can list the three things video verification must establish.",
    "I can recite the six-step recording sequence.",
    "I know why the video must be continuous and unedited.",
    "I know how the evidence differs for a service area business."
  ],
  quiz: [
    { q: "Why must the verification video be continuous and unedited?",
      a: ["To keep the file small", "Because continuity is what proves the separate pieces of evidence belong to the same location and business", "Google's software requires MP4", "It is not required"],
      c: 1,
      why: "Cutting between shots breaks the chain of evidence. A continuous shot demonstrates that the signage, premises, equipment and documents are genuinely all in one place." },
    { q: "A service area business has no customer premises. What evidence should the video show?",
      a: ["Nothing, SABs cannot verify", "Branded vehicles, trade tools, stock, business documents and the base of operations", "Only the owner's face", "A photograph of a shopfront"],
      c: 1,
      why: "The evidence must match the business model. Vehicles, tools, materials and documents demonstrate a genuinely operating service business." },
    { q: "What is the most common cause of video verification failure?",
      a: ["Poor internet speed", "Omitting one required piece of evidence, such as a document showing the address", "Recording in the wrong language", "Using a phone rather than a camera"],
      c: 1,
      why: "Most videos fail because something required was simply not shown. A written shot list prevents nearly all of these failures." }
  ],
  ex: {
    title: "Write and rehearse a verification shot list",
    time: "30 minutes",
    intro: "You will prepare the exact sequence before ever pressing record.",
    steps: [
      "Write the six-step sequence adapted to your practice business's model.",
      "For each step, write exactly what will be visible and for how long.",
      "Identify the document you will show and confirm you can access it.",
      "Identify the proof of management you will demonstrate.",
      "Walk the route physically without recording, checking that each step is possible in one continuous movement.",
      "Note anything that would need to change: lighting, signage, access, timing."
    ],
    deliver: "A rehearsed shot list with every evidence item confirmed available and any blockers noted."
  },
  chal: {
    title: "Build the verification failure playbook",
    brief: "Create a playbook covering every realistic video verification failure mode and its remedy: unreadable signage, no signage at all, no accessible document, a location that is genuinely hard to film, a business whose premises is shared, and an owner who is not available to record. For each, specify what to do before re-attempting, how long to wait, and when the honest advice is that the business should change something in the real world rather than try again. Make it usable by a colleague under time pressure.",
    success: [
      "The playbook covers at least six distinct failure modes with specific remedies.",
      "It states how long to wait before re-attempting in each case.",
      "It identifies the cases where a real-world change is required rather than another attempt."
    ]
  }
},

"2.4.3": {
  t: "Common verification failures and their fixes",
  why: "Knowing the specific failure patterns turns verification from a frustrating mystery into a checklist you can work through.",
  body: [
    "h: The failure categories",
    "p: Almost every verification failure falls into one of five groups. Identify the group and the fix follows.",

    "h: 1. Evidence failures",
    "l: A required item was not shown.|Signage was unreadable, unlit or absent.|Documents did not show the address, or showed a different one.|The video was cut or edited.|The recording was too dark or shaky to read.",
    "p: **Fix:** re-attempt with a shot list and better conditions. These are the easiest failures to correct and the most common.",

    "h: 2. Eligibility failures",
    "l: The address is a virtual office or mailbox.|The location is not exclusively the business's.|Customers are not served at a displayed address.|The business does not genuinely operate there.",
    "p: **Fix:** change the configuration to match reality, as covered throughout module 2. Re-attempting without changing anything will fail again and worsen the account history.",
    "warn: Do not re-submit an ineligible listing repeatedly|Repeated attempts on a fundamentally ineligible listing damage the account and make future legitimate listings harder to verify. Fix the underlying situation first.",

    "h: 3. Data mismatch failures",
    "l: The listed name does not match the signage.|The listed address does not match documents.|The category does not match what the video shows.|The phone number is unreachable.",
    "p: **Fix:** correct the listing to match the real world, then re-attempt. Note the direction: the listing changes, not the evidence.",

    "h: 4. Account and history failures",
    "l: The account has previously created listings that were removed.|The same account manages many unrelated businesses at different addresses.|The account is brand new with no history.|A previous suspension is unresolved.",
    "p: **Fix:** resolve outstanding issues first. Where an account has a bad history, verifying under a clean account that genuinely belongs to the business owner is often the practical answer. Lesson 2.4.4 covers ownership properly.",

    "h: 5. Technical and access failures",
    "l: The postcard never arrived, or arrived after expiry.|The video call could not connect.|The phone number could not receive the code.|The business was unreachable during the attempt window.",
    "p: **Fix:** these are usually retriable. A postcard can normally be resent. Check that the address is deliverable and that any unit number is included.",

    "h: The diagnostic sequence",
    "n: What exactly did Google say? Read the wording carefully rather than guessing.|Was anything required simply not shown? If so, it is an evidence failure — easy.|Does the real-world situation genuinely satisfy eligibility? If not, stop and fix that.|Does every field on the listing match the physical evidence? If not, correct the listing.|Is there anything in the account history that needs resolving?|Only then re-attempt.",

    "ex: Misdiagnosis costs weeks|A consultant failed verification three times, each time improving the video. The real problem was that the listing displayed a home address for a business that did not serve customers there — an eligibility failure, not an evidence failure. No quality of video would ever have passed it. Reconfiguring as a service area business resolved it in one attempt.",
    "tip: Always ask 'which of the five is this?' before re-attempting|Re-attempting the same way is the single most common wasted effort in local SEO. Categorise the failure first, every time."
  ],
  take: [
    "Verification failures fall into five groups: evidence, eligibility, data mismatch, account history and technical.",
    "Evidence failures are the most common and the easiest to fix with a shot list and better conditions.",
    "Eligibility failures cannot be fixed by a better video — the real-world configuration must change.",
    "When data mismatches, correct the listing to match reality, not the other way round.",
    "Categorise the failure before re-attempting, or you will repeat it."
  ],
  self: [
    "I can name the five failure categories.",
    "I can tell an evidence failure from an eligibility failure.",
    "I know why repeated attempts on an ineligible listing are harmful.",
    "I follow the diagnostic sequence before re-submitting."
  ],
  quiz: [
    { q: "A consultant fails video verification three times despite improving the video each time. The listing shows a home address where customers are never served. What kind of failure is this?",
      a: ["Evidence failure", "Eligibility failure — no video can fix it", "Technical failure", "Account failure"],
      c: 1,
      why: "The configuration itself is non-compliant. Until the listing is reconfigured as a service area business with the address hidden, no quality of evidence will pass." },
    { q: "When the listing name does not match the signage, what should change?",
      a: ["The signage", "The listing, to match the real world", "Neither, it does not matter", "The category"],
      c: 1,
      why: "The listing must reflect reality. Changing signage to match a keyword-stuffed listing would be solving the problem backwards." },
    { q: "Why is repeatedly re-submitting an ineligible listing harmful?",
      a: ["It costs money", "It damages the account history and makes future legitimate verifications harder", "It deletes reviews", "It has no effect"],
      c: 1,
      why: "Repeated failures accumulate against the account, increasing scrutiny on every future listing managed from it." }
  ],
  ex: {
    title: "Categorise ten verification failures",
    time: "25 minutes",
    intro: "You will practise the diagnostic step that saves the most time.",
    steps: [
      "Write down ten realistic failure scenarios, drawing on this lesson and your own imagination.",
      "For each, assign one of the five categories.",
      "For each, write the specific first action you would take.",
      "For each, state whether re-attempting immediately is appropriate or not.",
      "Identify which of the ten cannot be fixed without changing the real-world business.",
      "Note which category you found hardest to distinguish and why."
    ],
    deliver: "Ten categorised failure scenarios with first actions and a note on which require real-world change."
  },
  chal: {
    title: "Write the verification triage script",
    brief: "Write a short script a colleague could follow when a client reports a failed verification. It should ask the right questions in the right order to categorise the failure within five minutes, without the colleague needing deep expertise. Include the exact questions to ask the client, what evidence to request, and the decision points that lead to each of the five categories. Then add a section on how to tell a client honestly that their business is not eligible in the form they wanted.",
    success: [
      "The script reaches a category within five minutes using client-answerable questions.",
      "It specifies what evidence to request at each decision point.",
      "It includes honest, usable wording for delivering an eligibility refusal."
    ]
  }
},

"2.4.4": {
  t: "Owners, managers and access levels",
  why: "Who controls the listing determines who can rescue it. Getting access right prevents the single most avoidable disaster in local SEO.",
  body: [
    "h: The access levels",
    "p: A Google Business Profile has different levels of access, which broadly work like this:",
    "n: **Primary owner.** Full control, including the ability to remove other owners and transfer ownership. There is only one.|**Owner.** Nearly full control, including adding and removing managers, but cannot remove the primary owner.|**Manager.** Can edit most information, respond to reviews, create posts and upload photos, but cannot remove people or delete the listing.",
    "p: The exact capabilities change from time to time, but the principle is stable: one primary owner, additional owners, and managers with edit access.",

    "h: The rule that prevents disasters",
    "box: **The business must always be the primary owner of its own listing.** Agencies, consultants and staff should be managers or owners, never the primary owner.",
    "warn: The agency ownership trap|An agency creates the listing under its own account and holds primary ownership. The relationship ends badly. The business now cannot access its own listing, its reviews, or its data. Recovering it is slow, sometimes impossible, and always sours the relationship further. This happens constantly and is entirely preventable.",

    "h: Setting it up correctly from the start",
    "n: The business owner creates a Google account, or uses an existing business account they control.|The listing is created and verified under that account, which becomes primary owner.|The agency or employee is added as a manager or owner.|The business records the account credentials somewhere safe and permanent, not in one person's head.|When staff leave, their access is removed the same week.",

    "h: Why the business account itself matters",
    "l: Personal accounts belonging to a departed employee are a common cause of lost access.|A shared account with a memorable address, controlled by the business, survives staff changes.|Never use an account that Google could consider abandoned.|Never let the only access route be an account nobody knows the password to.",

    "h: Auditing access",
    "p: On any business you take over, audit access immediately:",
    "l: Who is the primary owner? Is it the business?|Who else has owner access?|Who has manager access?|Are any of them former staff or former agencies?|Is there anyone on the list nobody can identify?",
    "ex: The ghost manager|A restaurant discovered that a marketing freelancer from six years earlier still had manager access. He had done nothing wrong, but he could have edited the listing, responded to reviews as the business, or uploaded photos at any point. Nobody had thought to check. This is normal, and it is why the audit is part of onboarding.",

    "h: Removing and transferring",
    "l: An owner can remove managers and other owners, but not the primary owner.|Transferring primary ownership requires the current primary owner to act, and the new owner must usually have been added first.|If the primary owner is unreachable, recovery requires a request process, which is slow and not guaranteed. Lesson 2.4.5 covers this.",
    "tip: The onboarding rule|Never begin optimisation work on a listing you do not have confirmed access to, with the client as primary owner. Sorting access out first takes a day. Sorting it out after six months of work, when something goes wrong, can cost the entire engagement."
  ],
  take: [
    "There is one primary owner, plus additional owners and managers with edit access.",
    "The business must always be the primary owner of its own listing — never the agency.",
    "Use a business-controlled account that survives staff changes, not a personal one.",
    "Audit access on every listing you take over and remove anyone unidentified or departed.",
    "Confirm access before starting optimisation work, not afterwards."
  ],
  self: [
    "I can describe the three access levels and what each can do.",
    "I can explain why an agency should never be primary owner.",
    "I know what to check in an access audit.",
    "I know that recovering a listing from an unreachable primary owner is slow and uncertain."
  ],
  quiz: [
    { q: "Who should be the primary owner of a business's listing?",
      a: ["The agency managing it", "The business itself", "The web developer", "Whoever created it first"],
      c: 1,
      why: "The business must retain ultimate control. Agency primary ownership leaves the business unable to access its own listing if the relationship ends." },
    { q: "What is the risk of creating a listing under an employee's personal Google account?",
      a: ["Slower verification", "Access is lost when that employee leaves, potentially permanently", "Reviews do not display", "It cannot be verified"],
      c: 1,
      why: "Personal accounts leave with the person. A business-controlled account survives staff changes and keeps ownership recoverable." },
    { q: "What should you do before beginning optimisation work on a new client's listing?",
      a: ["Change the categories", "Audit and confirm access, with the client as primary owner", "Add photos", "Request more reviews"],
      c: 1,
      why: "Without confirmed correct access you may be unable to act in an emergency, and the client may be unable to retain their listing later." }
  ],
  ex: {
    title: "Run an access audit",
    time: "20 minutes",
    intro: "You will document who controls the listing and fix anything unsafe.",
    steps: [
      "Open the access or users section of your practice business's profile.",
      "Record the primary owner and confirm whether it is the business.",
      "List every other owner and manager with their role.",
      "Identify anyone who is a former employee, former agency or unidentifiable.",
      "Write the removals needed and who must perform them.",
      "Note whether the primary owner account is business-controlled and recoverable."
    ],
    deliver: "An access audit listing every person with access, their role, and the specific changes required."
  },
  chal: {
    title: "Write the access governance policy",
    brief: "Create an access governance policy for a business or agency covering: who may hold each access level, what account type must be used, how credentials are stored, what happens when someone joins or leaves, how often access is reviewed, and what the escalation path is if access is ever lost. Include a short client-facing explanation of why the client must be primary owner, phrased so it builds trust in the agency rather than sounding like a disclaimer.",
    success: [
      "The policy covers joining, leaving, credential storage and periodic review.",
      "It specifies account types, not just roles.",
      "The client-facing explanation makes agency-held ownership sound like the risk it is, while positioning the agency positively."
    ]
  }
},

"2.4.5": {
  t: "Getting access to a profile someone else owns",
  why: "You will regularly meet businesses locked out of their own listing. Knowing the recovery routes turns a dead end into a solvable problem.",
  body: [
    "h: The common situations",
    "l: A former agency holds primary ownership and is unresponsive.|A former employee created it on a personal account and has left.|A previous business owner still holds it after the business was sold.|Someone unknown claimed the listing.|The listing was auto-generated and never claimed by anyone.|The business has forgotten which account it used.",

    "h: Route 1 — Find the existing owner first",
    "p: Before any formal process, try the direct route. When you request access, Google usually shows a partially masked email address of the current owner. That mask is often enough to identify who it is.",
    "n: Look at the masked address and compare it with former staff, agencies and the owner's own accounts.|Check whether the business has old emails from that address.|Contact the person directly and ask them to transfer or grant access. Most will agree.|Document the request and the response.",
    "tip: The masked email is a clue, not a dead end|'j••••@••••agency.com' usually identifies the former agency immediately. A polite email to that agency resolves a large share of these cases in days, without any formal process.",

    "h: Route 2 — The request access process",
    "p: Google provides a process to request access from the current owner. In outline:",
    "n: You attempt to claim the listing and are told it is already managed.|You submit a request, which is emailed to the current owner.|The owner has a set period to respond, typically a few days.|If they approve, access is granted. If they deny, you are told.|If they do not respond within the window, you may be able to claim the listing.",
    "warn: The response window is the weak point|If the current owner simply ignores the request, some paths let you claim after the window expires — but if they actively deny it, you will need a different route. Always attempt direct contact first, because a denial is harder to undo than silence.",

    "h: Route 3 — Appeal and support",
    "p: Where a request is denied and you genuinely represent the business, an appeal process exists. Expect to need:",
    "l: Evidence of the business relationship: registration documents, lease, utility bills.|Evidence of the business name and address matching the listing.|A clear explanation of why the current owner should not hold it.|Patience, since these processes take weeks rather than days.",

    "h: Route 4 — When the business was sold",
    "p: A change of ownership is a common case and is generally resolvable with documentation. Prepare the sale agreement or transfer documents, evidence of the new ownership, and evidence that the business continues at the same location. Lesson 8.3.5 covers business transfers in full, including what happens to the reviews.",

    "h: What not to do",
    "l: Do not create a duplicate listing because you cannot access the original. This creates the exact problem covered in lesson 6.1.6, and the duplicate will usually be merged or removed anyway.|Do not attempt to get the original listing removed as a route to creating your own.|Do not pay third parties claiming they can force access.|Do not make false statements in a request, which risks the account.",

    "ex: The three-week resolution|A dental practice could not access its listing after changing agencies. The masked email revealed the former agency. Two emails were ignored. A formal request was submitted and also ignored, and after the response window the practice was able to claim it. Total time: three weeks, no cost, no duplicate created. Had they created a duplicate in week one, they would have spent months untangling it instead."
  ],
  take: [
    "Start by identifying the current owner from the masked email — this resolves many cases in days.",
    "The formal request process notifies the owner and may allow a claim if they do not respond in time.",
    "An active denial is harder to overcome than silence, so try direct contact first.",
    "Business sales are resolvable with sale documents and evidence of continued operation.",
    "Never create a duplicate listing as a workaround — it creates a worse problem."
  ],
  self: [
    "I know to read the masked email before starting any formal process.",
    "I can describe the request access process and its response window.",
    "I know what evidence an appeal requires.",
    "I know why creating a duplicate is the wrong response to a locked listing."
  ],
  quiz: [
    { q: "What is the first thing to do when a business cannot access its listing?",
      a: ["Create a new listing", "Read the masked owner email to identify who holds it, and contact them directly", "Report the listing as fake", "File a legal complaint"],
      c: 1,
      why: "The masked address usually identifies a former agency or employee. Direct contact resolves a large share of cases quickly and without formal process." },
    { q: "Why is an active denial worse than no response?",
      a: ["It is faster", "Silence may allow a claim after the response window, whereas a denial requires a harder appeal route", "Denials cannot be appealed", "There is no difference"],
      c: 1,
      why: "The process allows for non-response. An explicit denial closes that path and pushes you into a longer, evidence-heavy appeal." },
    { q: "What should you never do when locked out of a listing?",
      a: ["Contact the current owner", "Create a duplicate listing as a workaround", "Prepare business documents", "Submit a formal request"],
      c: 1,
      why: "A duplicate splits reviews and authority, will likely be merged or removed, and creates months of cleanup on top of the original problem." }
  ],
  ex: {
    title: "Prepare a listing recovery pack",
    time: "25 minutes",
    intro: "You will assemble everything needed before starting a recovery, so the process runs at full speed.",
    steps: [
      "Write down the business's full legal name, trading name and address as they appear on documents.",
      "List every document available that proves the business relationship: registration, lease, utility bill, insurance, sale agreement.",
      "List every Google account the business or its staff might have used historically.",
      "Write out the wording of a polite direct request to a former agency or employee.",
      "Write out the wording of a formal request explaining why access is needed.",
      "Note the expected timeline for each route."
    ],
    deliver: "A recovery pack containing documents, account candidates, draft messages and expected timelines."
  },
  chal: {
    title: "Handle an acrimonious lockout",
    brief: "A business has parted badly with its former agency, which holds primary ownership and has explicitly refused to transfer it. Write the complete plan: the routes still available, the evidence required for each, the realistic timelines and success probabilities, what the business should do in the meantime to keep receiving customers, and what you would advise if every route fails. Include the point at which you would recommend involving legal advice, and be honest about what local SEO cannot solve.",
    success: [
      "You lay out every remaining route with honest probability assessments.",
      "You include interim measures to protect the business during the dispute.",
      "You identify the point at which the problem stops being an SEO problem."
    ]
  }
},

"2.4.6": {
  t: "Keeping the account healthy long term",
  why: "Account health is invisible until it matters, and then it decides whether your listings survive. These habits protect years of work.",
  body: [
    "h: What account health means",
    "p: Google builds a picture of the account managing your listings: how many it manages, whether they are legitimate, whether they have been suspended, whether edits look natural. A healthy account verifies faster, is scrutinised less, and recovers more easily. A damaged one makes everything harder.",

    "h: What damages account health",
    "l: Listings that were removed or suspended.|Creating listings at ineligible addresses.|Managing many unrelated businesses at unrelated addresses from one account, especially if new.|Repeated failed verifications.|Rapid, repeated edits to sensitive fields.|Guideline violations reported and upheld.|Attempting to create duplicates.",

    "h: What protects it",
    "n: **Fix eligibility before verifying.** Never submit a listing you know is non-compliant.|**Keep the business as primary owner** and work as a manager, so agency risk does not concentrate in one account.|**Make changes deliberately and space them out.** Lesson 3.4.4 covers safe editing in detail.|**Resolve suspensions properly** rather than abandoning listings and starting again.|**Keep documentation** so any challenge can be answered quickly.|**Monitor regularly** so problems are caught while they are small.",

    "warn: The agency concentration risk|An agency that holds primary ownership of two hundred listings across two hundred addresses under one account has concentrated enormous risk in one place. If that account is flagged, every client is affected simultaneously. Working as a manager on client-owned listings distributes the risk to where it belongs and is safer for everyone.",

    "h: The monthly health routine",
    "p: For each listing you manage, once a month:",
    "l: Confirm it is still verified and not suspended.|Check for unexpected changes to name, address, category or hours.|Check for new suggested edits from the public.|Check for new unanswered questions and reviews.|Confirm the website link still works and lands correctly.|Note anything unusual with the date.",

    "h: The annual health routine",
    "l: Re-check eligibility against current guidelines, which change.|Re-audit who has access and remove anyone departed.|Refresh the verification evidence pack — signage changes, leases renew.|Review the NAP standard and check citations still match.|Confirm the primary owner account is still controlled and recoverable.",

    "h: Warning signs to act on immediately",
    "table: Sign ; Likely meaning ; Action || Listing suddenly unverified ; Re-verification triggered or suspension ; Investigate same day, Level 8 || Name reverted to a different version ; Automated correction or public edit ; Check history, restore correct name || Sudden category change ; Automated update ; Restore and monitor || Reviews disappearing ; Filtering, policy action or a review problem ; Level 5 module 3 || Verification requested for an old listing ; Routine re-check or a report ; Prepare evidence pack immediately",

    "ex: The quiet save|An agency's monthly check found a client listing had silently changed its primary category three weeks earlier. Rankings had begun slipping but nobody had complained yet. The category was restored and the position recovered within two weeks. Without the routine, the first sign would have been the client asking why calls had halved, months later and much harder to reverse.",
    "tip: Health work is unglamorous and decisive|Nobody ever praises you for a listing that did not get suspended. But the practitioners who last in this field are the ones who do the monthly checks, keep the evidence packs current, and never submit something they know is non-compliant."
  ],
  take: [
    "Account health determines how fast you verify, how much you are scrutinised, and how easily you recover.",
    "Suspensions, ineligible listings, repeated failures and rapid edits all damage it.",
    "Agencies holding primary ownership of many listings concentrate risk dangerously in one account.",
    "Run a monthly check on verification status, unexpected changes, suggested edits and link destinations.",
    "Annually re-check eligibility, access, evidence packs and citation consistency."
  ],
  self: [
    "I can list five things that damage account health.",
    "I can explain why agencies should not concentrate ownership in one account.",
    "I can run the monthly health routine from memory.",
    "I know which warning signs require same-day action."
  ],
  quiz: [
    { q: "Why should an agency avoid holding primary ownership of hundreds of client listings under one account?",
      a: ["It costs more", "It concentrates risk, so a single account flag could affect every client at once", "Google forbids it entirely", "It slows down editing"],
      c: 1,
      why: "Risk that would otherwise be spread across many independent business accounts becomes a single point of failure affecting the entire client base." },
    { q: "A listing's primary category silently changed three weeks ago. What is the correct response?",
      a: ["Wait to see if rankings drop", "Restore the correct category and monitor, since automated and public edits do occur", "Create a new listing", "Ignore it, Google knows best"],
      c: 1,
      why: "Automated updates and public suggested edits both change categories. Restoring promptly limits the ranking damage, which is why monthly checks matter." },
    { q: "Which of these most damages account health?",
      a: ["Adding photos regularly", "Repeatedly submitting listings at ineligible addresses", "Answering reviews", "Updating hours for holidays"],
      c: 1,
      why: "Repeated ineligible submissions accumulate against the account, increasing scrutiny and making future legitimate verifications harder." }
  ],
  ex: {
    title: "Build and run the monthly health check",
    time: "25 minutes",
    intro: "You will create the routine that quietly prevents most disasters.",
    steps: [
      "Write the six monthly check items as a reusable checklist.",
      "Run every item on your practice business's listing now.",
      "Record the current state of each item with today's date.",
      "Note anything unexpected, however minor.",
      "Set a recurring monthly reminder.",
      "Write the annual items separately with a date twelve months from now."
    ],
    deliver: "A dated completed monthly check plus a scheduled recurring routine and an annual checklist."
  },
  chal: {
    title: "Design the account health system for a portfolio",
    brief: "Design a health monitoring system for an agency managing fifty client listings. Specify what is checked, how often, who does it, how findings are recorded, what triggers escalation, and how you would make it efficient enough to actually happen every month rather than being abandoned after two. Include how you would detect changes automatically where possible, and what the minimum viable version looks like for an agency with no budget for tools.",
    success: [
      "The system is realistic for fifty listings, not just theoretically complete.",
      "It defines escalation triggers and who acts on them.",
      "You have specified a minimum viable no-budget version alongside the ideal one."
    ]
  }
}

});
