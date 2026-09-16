/* Level 2 · Module 2 — Eligibility Rules */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"2.2.1": {
  t: "The golden rule of eligibility",
  why: "Every eligibility rule Google has comes from one simple principle. Learn the principle and you can answer questions the rulebook never covers.",
  body: [
    "h: The principle behind every rule",
    "p: Google's local listings exist so that a person can find a real business and go to it or contact it. Everything follows from that. The golden rule is:",
    "box: **A listing must represent a real business, with a real point of contact, that genuinely operates where it says it does.**",
    "p: Whenever you hit a situation the guidelines do not explicitly cover, ask whether the listing would mislead a customer. If it would, it is not eligible, whatever clever argument exists.",

    "h: The three tests",
    "n: **Real.** The business genuinely exists and trades. Not a plan, not a brand name with no operation behind it.|**Staffed or contactable.** A person can be reached. For storefronts, someone is physically present during stated hours. For service area businesses, someone answers.|**Where it says it is.** The address is a genuine place of business, not a convenience.",

    "h: What each test rules out",
    "table: Test ; Rules out || Real ; Fake businesses, brands with no operation, listings created to capture leads for someone else || Staffed ; Unattended offices, addresses where nobody can be reached, listings with hours nobody works || Where it says ; Mailboxes, virtual offices, rented desks used only for an address, competitors' addresses, random map points",

    "h: One business, one listing, one location",
    "p: A closely related rule: you get one listing per genuine location of a business. Not one per service, one per town served, one per keyword, or one per staff member who is not a genuine practitioner.",
    "warn: The multiplication temptation|Every local SEO career includes a moment where creating extra listings looks like an easy win. It works briefly and then removes everything. Google actively detects listing networks, and when it does, it usually removes all of them, not just the extras.",

    "h: What eligibility does NOT depend on",
    "l: How long the business has existed. New businesses are eligible.|Whether the business has a website. Not required.|Whether the business is registered as a company. Sole traders are eligible.|How much revenue it makes.|Whether it has any reviews.",

    "h: Where the grey areas live",
    "p: Most difficult cases fall into a handful of recurring situations, each covered in this module:",
    "l: Virtual offices and coworking — lesson 2.2.2.|Two businesses at one address — lesson 2.2.3.|Working from home — lesson 2.2.4.|Seasonal and temporary businesses — lesson 2.2.5.|Departments and businesses inside other businesses — lesson 2.2.6.",

    "ex: Applying the principle to a new case|A tutoring business wants a listing at a library where it rents a room two evenings a week. Apply the tests: is it real? Yes. Is it staffed during stated hours? Only two evenings. Is it where it says it is? Only sometimes, and not exclusively. The honest answer is that a listing at the library is not appropriate, but a service area business listing, with the tutor's real base hidden, is. The principle gave you the answer without a specific rule existing.",

    "tip: The customer test|Ask: if a customer drove to this address during the stated hours, would they find this business and be served? If the honest answer is no, something in your configuration is wrong. That single question resolves the majority of eligibility questions you will ever face."
  ],
  take: [
    "Every eligibility rule comes from one principle: a listing must represent a real business, contactable, operating where it says.",
    "The three tests are: real, staffed or contactable, and genuinely located there.",
    "One business gets one listing per genuine location, not per service, town or keyword.",
    "Eligibility does not depend on age, revenue, a website, company registration or reviews.",
    "The customer test — would someone driving there during stated hours be served? — resolves most grey areas."
  ],
  self: [
    "I can state the golden rule in one sentence.",
    "I can apply the three tests to a new situation the guidelines do not cover.",
    "I know what eligibility does not depend on.",
    "I use the customer test before creating or defending any listing."
  ],
  quiz: [
    { q: "What is the single question that resolves most eligibility grey areas?",
      a: ["How old is the business?", "Would a customer arriving at this address during stated hours find the business and be served?", "Does the business have a website?", "How many reviews does it have?"],
      c: 1,
      why: "The customer test captures all three eligibility principles at once: real, staffed and genuinely located there." },
    { q: "Which of these does eligibility NOT depend on?",
      a: ["Whether the business genuinely operates there", "Whether someone can be contacted", "Whether the business has a website", "Whether the address is a real place of business"],
      c: 2,
      why: "A website strengthens relevance and prominence, but it is not an eligibility requirement. Many verified businesses have no website at all." },
    { q: "What typically happens when Google detects a network of extra listings for one business?",
      a: ["Only the extras are removed", "All of them, including the legitimate one, are commonly removed", "A warning email is sent", "Nothing, if the extras are accurate"],
      c: 1,
      why: "Detection of deliberate listing multiplication usually results in action against the whole set, which is why the tactic is far more dangerous than it first appears." }
  ],
  ex: {
    title: "Apply the three tests to five awkward cases",
    time: "25 minutes",
    intro: "You will practise reasoning from the principle rather than looking for a rule.",
    steps: [
      "Write down these five cases: a market stall trader, a pop-up shop open three months, a consultant renting a hot desk, a food truck, and a business operating from a friend's shop counter.",
      "For each, apply the three tests: real, staffed, genuinely located there.",
      "Write your conclusion for each: eligible as storefront, eligible as SAB, or not eligible.",
      "For any you found difficult, write down what additional information would settle it.",
      "Apply the customer test to each and check whether it changes your answer."
    ],
    deliver: "Five reasoned eligibility judgements with the information needed to settle any remaining doubt."
  },
  chal: {
    title: "Write the eligibility decision guide",
    brief: "Create a one-page guide that a business owner could use to determine whether they are eligible for a listing and in what form. It must handle the common cases without requiring them to read Google's full guidelines, and it must be written in simple language. Include a short section on what to do if they are not eligible in the way they hoped, so the guide leaves them with options rather than a refusal.",
    success: [
      "The guide resolves at least six common situations without jargon.",
      "It is built on the principle, not on a memorised rule list.",
      "It gives genuine alternatives to anyone who is not eligible as they hoped."
    ]
  }
},

"2.2.2": {
  t: "Virtual offices, coworking spaces and mailboxes",
  why: "This is the single most common eligibility violation in local SEO, and the one most likely to destroy a listing permanently.",
  body: [
    "h: The rule",
    "p: You may not use an address that is not a genuine place of business. That rules out:",
    "l: **Mailbox services** and post office boxes.|**Virtual office addresses** that provide only a mailing address and call answering.|**Registered agent or accountant addresses** used only for paperwork.|**Coworking desks** rented only to obtain an address, where you are not genuinely and consistently based.|**A friend's or relative's address** where you do not operate.",

    "h: Why businesses do it anyway",
    "p: The temptation is obvious. A virtual office in a city centre appears to place you closer to where the searches are. Since distance is the force you cannot control, buying a better address looks like buying better rankings.",
    "warn: It does not work reliably, and the downside is catastrophic|Google actively detects virtual office providers — the same address appearing under dozens of business names is an obvious pattern. Listings at these addresses are removed in waves. When yours is caught, you lose the listing and its reviews, and the account may be flagged, making future listings harder.",

    "h: The coworking question, which is genuinely nuanced",
    "p: Coworking is not automatically forbidden. The question is whether you genuinely operate from there.",
    "table: Situation ; Eligible? ; Why || Dedicated private office in a coworking building, staffed during your hours, your own signage ; Usually yes ; It is a real, exclusive place of business || Fixed dedicated desk you use daily, with signage ; Borderline ; Depends on exclusivity and customer access || Hot desk used occasionally ; No ; Not exclusive, not consistently staffed || Address-only membership, no physical presence ; No ; Plainly a virtual address || Coworking address shared by many listed businesses ; High risk ; Pattern detection applies even if you are legitimate",
    "p: Note the last row. Even a legitimate coworking tenant is exposed to risk, because Google may act on the address pattern. If you must use one, having a dedicated private unit with your own signage is the only configuration that gives you a reasonable defence.",

    "h: What to do instead",
    "n: If you travel to customers, configure as a **service area business** with the address hidden. This is legitimate, costs nothing, and removes the entire problem.|If you genuinely need a city-centre presence, rent a real one you genuinely occupy.|If you cannot, accept the structural distance disadvantage and compete on prominence — which, as lesson 1.2.5 explained, is the lever that genuinely extends your reach.",

    "h: How Google detects it",
    "l: Many business names at one address.|Addresses matching known virtual office providers.|Video verification showing a shared reception rather than your business.|Street imagery showing no sign of your business.|Competitor reports, which are common and effective for this violation.|Re-verification requests that the business cannot satisfy.",

    "ex: The wave|A local SEO agency set up eleven clients at the same city-centre virtual office over two years. All eleven ranked well. In one month, all eleven were suspended following a bulk detection. Reinstatement was refused for every one, and several clients lost hundreds of reviews. The agency lost the clients too.",

    "tip: The question to ask a new client|'Is there a person from your business at that address during your stated opening hours?' If they hesitate, investigate before you touch anything else. Discovering this in week one is uncomfortable. Discovering it after a suspension is far worse."
  ],
  take: [
    "Mailboxes, virtual offices and address-only memberships are not eligible, and this is the most common serious violation.",
    "Google detects them through address patterns, verification and competitor reports, and acts in waves.",
    "Coworking can be eligible only with a dedicated, exclusive, staffed space and your own signage — and still carries pattern risk.",
    "The legitimate alternative for most affected businesses is a service area listing with the address hidden.",
    "Losing a listing this way usually means losing its reviews too, and reinstatement is often refused."
  ],
  self: [
    "I can list five address types that are not eligible.",
    "I can explain why a virtual office is detected even when nothing else looks wrong.",
    "I can explain when coworking might be acceptable and what risk remains.",
    "I know the legitimate alternative to offer a business that is currently using a virtual address."
  ],
  quiz: [
    { q: "A business uses a virtual office and has ranked well for two years. What is the correct assessment?",
      a: ["It is proven acceptable", "It is a live risk — detection happens in waves and reinstatement is often refused", "It is fine if the business pays for the service", "Only new listings are checked"],
      c: 1,
      why: "Virtual office detection is pattern-based and periodic. Years of success do not indicate approval, and the eventual loss usually includes the reviews." },
    { q: "Which coworking arrangement has the best chance of being eligible?",
      a: ["An address-only membership", "A hot desk used twice a week", "A dedicated private office, staffed during stated hours, with your own signage", "A mailbox at the coworking building"],
      c: 2,
      why: "Exclusivity, consistent staffing and visible signage are what make a location a genuine place of business. The other options fail one or more of those tests." },
    { q: "What is usually the correct alternative for a business currently using a virtual address?",
      a: ["Use a competitor's address", "Configure as a service area business with the address hidden", "Remove the listing entirely", "Buy a second virtual office"],
      c: 1,
      why: "Most businesses using virtual addresses actually travel to customers. The service area configuration is legitimate, free, and removes the violation completely." }
  ],
  ex: {
    title: "Detect virtual addresses in your market",
    time: "30 minutes",
    intro: "You will learn to spot the pattern that Google spots.",
    steps: [
      "Pick a competitive category and city.",
      "Open the local finder and list fifteen businesses with their addresses.",
      "Search each address in quotation marks and note how many different business names appear at it.",
      "Flag any address with three or more unrelated businesses listed.",
      "Look at Street View for the flagged addresses and note what is actually there.",
      "Write a short summary of how many of the fifteen appear to be using shared or virtual addresses."
    ],
    deliver: "A list of fifteen businesses with flagged shared addresses and Street View evidence for each flag."
  },
  chal: {
    title: "Write the remediation plan for a caught business",
    brief: "Imagine a client whose listing has been suspended for using a virtual office. Write the complete plan: what you would tell them first, what the realistic chances of reinstatement are, what the legitimate reconfiguration options are, what happens to their existing reviews, how long recovery might take, and what you would do in the meantime to keep their phone ringing. Be honest about the parts where the outcome is outside your control.",
    success: [
      "You lead with an honest assessment of reinstatement chances rather than false hope.",
      "You address what happens to the existing reviews specifically.",
      "You include interim measures to protect the business while the listing is unavailable."
    ]
  }
},

"2.2.3": {
  t: "Sharing an address with another business",
  why: "Many legitimate businesses share addresses. Knowing which arrangements are acceptable prevents both unnecessary fear and genuine violations.",
  body: [
    "h: Sharing is common and often fine",
    "p: Office buildings, medical centres, shopping malls and business parks all contain many businesses at one street address. This is entirely normal. The rules exist to distinguish genuine co-location from address abuse.",

    "h: What makes shared addresses acceptable",
    "n: Each business occupies its **own distinct space** — a suite, unit, floor or clearly defined area.|Each has its **own signage** at its own entrance or door.|Each is **separately staffed** during its stated hours.|Each has **distinct contact details** where possible.|The suite or unit number appears consistently in the address.",

    "h: What makes it a violation",
    "l: Multiple businesses listed at one address with no distinct spaces.|One person operating several 'businesses' from the same desk to occupy more Local Pack slots.|A business listing at an address occupied by a different business it has no relationship with.|Using a partner's or supplier's address where you do not operate.",

    "warn: The multi-brand trap|A single operator runs three trading names from one office — say a plumbing brand, a heating brand and a drainage brand — and creates three listings. Even if all three are genuine registered names, if they share staff, space and phone, Google generally treats this as one business. Expect filtering at best and removal at worst.",

    "h: Related businesses at one address",
    "p: Genuinely distinct businesses that happen to be related can co-exist, but they must be genuinely distinct in operation:",
    "table: Situation ; Usually acceptable? ; Key requirement || A salon and a separate barber in the same unit ; Sometimes ; Distinct spaces, staff, signage and contact details || A restaurant and its separate catering company ; Sometimes ; Genuinely separate operation, not just a second name || Two brands, one owner, one desk ; No ; Not distinct businesses in practice || A clinic and its individual practitioners ; Yes ; This is the practitioner model, lesson 2.1.5 || A shop and a franchise counter inside it ; Sometimes ; See lesson 2.2.6",

    "h: The scrutiny effect",
    "p: Even where sharing is legitimate, addresses with many listings attract more checks. Expect:",
    "l: More frequent re-verification.|Video verification focused on your specific space and signage.|Higher likelihood of competitor reports.|Occasional automated merges that you may need to reverse.",

    "ex: A legitimate case that still needed defending|Four therapists shared a wellness centre, each with their own room, own sign on the door, own phone and own hours. All four had listings. A competitor reported them as fake. All four survived, because each could produce photographs of their door signage, their own appointment system and their own lease agreement. The lesson is not that they were wrong — it is that legitimate businesses need evidence ready.",

    "tip: Keep an evidence pack|For any business at a shared address, keep photographs of your signage, a copy of your lease or licence, a utility bill, and photos of your space. If verification is ever requested, you will complete it the same day instead of scrambling for a week. This pack is also the core of the reinstatement pack in lesson 8.2.4."
  ],
  take: [
    "Sharing a street address is normal and acceptable when each business has its own distinct, signed, staffed space.",
    "One operator running several brands from one desk is treated as one business, however many names are registered.",
    "Shared addresses attract extra scrutiny, re-verification and competitor reports, even when legitimate.",
    "Suite or unit numbers must appear consistently in the address everywhere.",
    "Keep an evidence pack — signage photos, lease, utility bill — ready before it is requested."
  ],
  self: [
    "I can state the five requirements that make a shared address acceptable.",
    "I can explain why multiple brands run by one person from one desk is a violation.",
    "I know what extra scrutiny shared addresses attract.",
    "I know what belongs in an evidence pack and why to prepare it in advance."
  ],
  quiz: [
    { q: "One person runs three trading names from a single office with shared staff and phone. How does Google generally treat this?",
      a: ["As three separate businesses", "As one business, with filtering or removal likely", "As a franchise", "As a practitioner group"],
      c: 1,
      why: "Separate registered names do not create separate businesses. Without distinct spaces, staff and contact details, it is one operation seeking extra listings." },
    { q: "What is the key requirement for two genuinely distinct businesses to share one street address?",
      a: ["Different logos", "Their own distinct, signed, separately staffed spaces with distinct contact details", "Different websites only", "Different owners only"],
      c: 1,
      why: "Physical distinctness and independent operation are what matter. Branding differences alone do not satisfy the requirement." },
    { q: "Why should a legitimate business at a shared address keep an evidence pack?",
      a: ["Google charges less", "Because re-verification and competitor reports are more likely, and fast evidence resolves them", "It improves rankings directly", "It is legally required"],
      c: 1,
      why: "Shared addresses attract scrutiny. Having signage photos, a lease and utility evidence ready turns a potential suspension into a same-day resolution." }
  ],
  ex: {
    title: "Assess a shared-address business",
    time: "25 minutes",
    intro: "You will judge a real shared-address situation against the five requirements.",
    steps: [
      "Find a real business listed at an address shared with others — a medical centre, office block or salon suite is ideal.",
      "Search the address in quotation marks and list every business at it.",
      "For your chosen business, check whether the listing includes a suite or unit number.",
      "Check its photos and Street View for evidence of distinct signage.",
      "Judge it against the five requirements and note which it satisfies.",
      "List what evidence it would need if challenged."
    ],
    deliver: "An assessment against the five requirements plus a list of evidence the business would need."
  },
  chal: {
    title: "Build the shared-address evidence pack",
    brief: "Assemble a complete evidence pack template for a business at a shared address. Specify every document and photograph needed, how each should be captured — angles, what must be visible, what must not be cropped out — and how it should be stored and kept current. Then write short instructions for the business owner explaining why each item matters and when it will be used. Make it something they could assemble in one afternoon.",
    success: [
      "The pack specifies at least six distinct evidence items with capture instructions.",
      "It explains how often each item must be refreshed.",
      "The owner-facing explanation makes the purpose clear without alarming them unnecessarily."
    ]
  }
},

"2.2.4": {
  t: "Home-based businesses and hiding your address",
  why: "A huge share of local businesses run from home. Handling this correctly protects privacy, satisfies the rules and preserves ranking.",
  body: [
    "h: Working from home is completely legitimate",
    "p: Google has no rule against running a business from home. Millions of eligible businesses do. The question is only **how the listing must be configured**.",

    "h: The two situations",
    "n: **Customers do not come to your home.** This is the normal case: plumbers, electricians, consultants, mobile services. Configure as a **service area business** and hide the address. Your home address is entered for verification and never shown publicly.|**Customers do come to your home.** A home salon, a home studio, a home clinic. If customers genuinely visit and you are willing to display the address, you may configure as a storefront or hybrid. You are not obliged to — hiding it and operating as an SAB remains an option if you prefer privacy.",

    "h: Why hiding matters beyond privacy",
    "l: Displaying a residential address invites unwanted visitors.|Some residential leases and local rules restrict visible commercial operation.|It exposes a family home to the public, including to hostile reviewers.|If customers are not genuinely served there, displaying it is a guideline violation regardless of your preference.",

    "warn: Hiding does not reduce your ranking|A persistent myth says hidden-address listings rank worse. The address being hidden from the public does not change the data Google holds. What genuinely affects ranking is that home-based businesses are often located away from commercial centres — that is a distance issue, not a hiding issue. Do not display a home address hoping for a ranking benefit that does not exist.",

    "h: Getting the configuration right",
    "n: Enter the real home address during setup, accurately.|Choose the option indicating you serve customers at their locations.|Confirm the address is hidden — check the public listing afterwards, not just the settings.|Set genuine service areas.|Set hours during which someone answers.|Make sure your website does not display the home address either, or you have undone the privacy you configured.",
    "tip: Check the website too|Businesses regularly hide the address on Google and then publish it in the website footer, in structured data and on their contact page. Privacy is only as strong as the weakest place it appears. See lesson 4.3.3 for how to handle structured data for hidden-address businesses.",

    "h: Verification for home-based businesses",
    "p: Expect verification to require evidence that the business operates from that address. Video verification may ask to see the exterior, any vehicles with branding, tools or equipment, and business documents. This is normal. Prepare in advance rather than improvising — lesson 2.4.2 covers the whole process.",

    "ex: The home salon decision|A hairdresser converts a room at home into a salon. Clients come by appointment only. She has three options: display the address as a storefront, display it as a hybrid if she also travels, or hide it and operate as an SAB with appointment-only contact. All three can be legitimate depending on the facts. The deciding factors are whether unannounced clients would be served, and her own comfort with publishing a home address. There is no single correct answer — which is exactly why you ask rather than assume.",

    "h: The most common home-business mistakes",
    "l: Displaying the address when customers never visit.|Setting the service area but forgetting to hide the address.|Publishing the address on the website while hiding it on Google.|Setting hours implying a walk-in service that does not exist.|Creating separate listings for each town served."
  ],
  take: [
    "Running a business from home is fully legitimate — only the configuration differs.",
    "If customers do not visit, hide the address and configure as a service area business.",
    "Hiding the address does not reduce ranking; the real factor is being located away from commercial centres.",
    "Privacy is only as strong as the weakest place the address appears, including your website and structured data.",
    "Expect verification to ask for evidence that the business genuinely operates from that address."
  ],
  self: [
    "I know that home-based businesses are eligible and how to configure them.",
    "I can refute the myth that hiding an address lowers rankings.",
    "I know to check the website and structured data as well as the profile.",
    "I can explain the options available to a home salon and what decides between them."
  ],
  quiz: [
    { q: "Does hiding a service area business's address reduce its ranking?",
      a: ["Yes, significantly", "No — the data Google holds is unchanged; location relative to commercial centres is the real factor", "Only on mobile", "Only for new businesses"],
      c: 1,
      why: "Hiding changes only the public display. Home-based businesses often rank less widely because of where they are located, not because the address is hidden." },
    { q: "A consultant hides their home address on Google but publishes it in the website footer. What is the result?",
      a: ["Privacy is preserved", "The address is still public, so the privacy benefit is lost", "Google will remove it from the website", "The listing will be suspended"],
      c: 1,
      why: "Privacy only works if the address is absent everywhere. Websites, structured data and directory listings all need to be consistent with the decision." },
    { q: "A home hairdresser sees clients by appointment only. Which configurations could be legitimate?",
      a: ["Only storefront", "Only service area business", "Storefront, hybrid or service area business, depending on the facts and her preference", "None, home businesses are ineligible"],
      c: 2,
      why: "The deciding factors are whether customers are genuinely served there and whether she wishes to display a home address. More than one configuration can be legitimate." }
  ],
  ex: {
    title: "Configure a home-based business end to end",
    time: "25 minutes",
    intro: "You will produce a complete configuration including the parts people forget.",
    steps: [
      "Choose a real or imagined home-based business and determine whether customers visit.",
      "Write the correct model and whether the address is displayed or hidden.",
      "List the service areas with a justification for the boundary.",
      "Write the hours, defined as when someone answers.",
      "List every other place the address might appear: website footer, contact page, structured data, invoices, directories, social profiles.",
      "Write the action needed for each of those places."
    ],
    deliver: "A complete configuration including a checklist of every place the address must be removed or kept consistent."
  },
  chal: {
    title: "Advise on a privacy versus visibility trade-off",
    brief: "A home-based therapist genuinely sees clients at home and is eligible to display the address, but is uncomfortable doing so. They ask whether hiding it will cost them business. Write your advice covering: what actually changes for their ranking, what changes for customers trying to find them, what alternatives exist for building trust without publishing the address, and what you would recommend. Address the emotional concern as well as the technical one.",
    success: [
      "You correctly separate ranking effects from customer-experience effects.",
      "You offer at least three ways to build trust without publishing the address.",
      "Your advice acknowledges the personal concern rather than treating it as irrational."
    ]
  }
},

"2.2.5": {
  t: "Seasonal, temporary and event businesses",
  why: "Businesses that do not operate year-round have their own rules. Handling them badly causes closures, lost reviews and duplicate listings.",
  body: [
    "h: Three different situations",
    "n: **Seasonal.** Operates every year during part of the year: a ski hire shop, an ice cream kiosk, a tax preparation service, a Christmas tree lot.|**Temporary.** Exists for a defined limited period and then stops: a pop-up shop, a short-term exhibition.|**Event.** A one-off or recurring event rather than a business: a festival, a market, a conference.",

    "h: Seasonal businesses",
    "p: A seasonal business with a permanent location may keep its listing year-round. The correct handling is:",
    "l: Keep the listing live all year.|Use the hours settings to show it as closed during the off-season rather than deleting anything.|Where the business closes for months, mark it **temporarily closed** for that period and reopen it when the season starts.|Never mark it permanently closed. That signals the business no longer exists and is damaging to recover from.|Never delete and recreate the listing each year. You lose reviews, history and ranking every time.",
    "warn: Temporarily closed is reversible, permanently closed is not, easily|Marking a listing permanently closed can be reversed, but it often causes a visible ranking loss and sometimes needs support intervention. Marking it temporarily closed is the correct tool for a seasonal pause.",

    "h: Off-season visibility",
    "p: A business marked closed will still appear in searches, but with a closed label, and it will be excluded by 'open now' filters. Rankings frequently soften during a long closure and recover when it reopens. Plan for this rather than panicking about it. Keep posting, keep answering questions, and reopen promptly.",

    "h: Temporary businesses",
    "p: A pop-up that will exist for three months is generally eligible if it meets the normal tests while it operates: real, staffed, at that address. When it ends, mark it permanently closed. Do not leave it live, because customers will travel to nothing.",
    "l: Be realistic about whether a three-month pop-up justifies the setup effort.|Verification may take a meaningful part of the trading period.|Reviews earned will belong to a listing you close, so they do not transfer to a future venture.",

    "h: Events",
    "p: An event is not a business and should not have a business listing. A festival, a market day, a one-off conference does not qualify. The organising business may have a listing at its own premises, and the event should be promoted through the website, posts and other channels instead.",
    "ex: Getting it wrong|A summer food market created a listing at the park where it ran. Out of season it sat at a park with no business present, accumulating confused reviews and suggested edits marking it closed. The correct approach was a listing for the organising company at its real office, plus posts and a website page for the market.",

    "h: Businesses that move between locations",
    "p: Food trucks, market traders and mobile units that trade at different places on different days are generally **service area businesses**, not storefronts. Their base is hidden and their service area reflects where they trade. Some platforms support more dynamic location handling, but the safe default is the service area configuration.",
    "tip: Seasonal calendar reminder|For any seasonal business, put two dates in a calendar: the date to mark temporarily closed, and the date to reopen. The most common seasonal failure is simply forgetting to reopen the listing, and losing weeks of the short trading season."
  ],
  take: [
    "Seasonal businesses keep one permanent listing and use temporarily closed for the off-season.",
    "Never mark a seasonal business permanently closed, and never delete and recreate the listing each year.",
    "Rankings often soften during a long closure and recover on reopening — plan for it rather than panic.",
    "Temporary pop-ups are eligible while they genuinely operate, and should be marked permanently closed when they end.",
    "Events are not businesses and should not have listings. Mobile traders are usually service area businesses."
  ],
  self: [
    "I know the difference between temporarily and permanently closed and when to use each.",
    "I know not to delete and recreate a seasonal listing each year.",
    "I can explain why an event should not have a business listing.",
    "I know how to configure a food truck or market trader."
  ],
  quiz: [
    { q: "How should a ski hire shop handle its summer closure?",
      a: ["Delete the listing and recreate it in winter", "Mark it permanently closed", "Mark it temporarily closed and reopen at the start of the season", "Leave the hours as normal"],
      c: 2,
      why: "Temporarily closed is the correct, reversible tool. Deleting loses reviews and history, and permanently closed signals the business no longer exists." },
    { q: "A summer food market wants a listing at the park where it runs. What is the correct advice?",
      a: ["Create the listing at the park", "Events are not businesses — list the organising company at its real premises and promote the market through posts and the website", "Create a seasonal listing and delete it each autumn", "Create one listing per market day"],
      c: 1,
      why: "An event has no permanent staffed business at that location. A listing there misleads customers out of season and attracts closure edits." },
    { q: "How should a food truck trading at different locations be configured?",
      a: ["One listing per trading location", "A storefront at its most common location", "A service area business with the base hidden", "It is not eligible"],
      c: 2,
      why: "There is no single permanent customer-serving address, so the service area configuration is the safe and compliant default." }
  ],
  ex: {
    title: "Build a seasonal management plan",
    time: "25 minutes",
    intro: "You will produce the plan that prevents the most common seasonal failures.",
    steps: [
      "Choose a seasonal business type and define its trading season with real dates.",
      "Write down the date to mark temporarily closed and the date to reopen.",
      "List what should still be maintained during the closure: questions, reviews, posts, photos.",
      "Write what you expect to happen to rankings during closure and on reopening.",
      "Write a short pre-season checklist for the two weeks before reopening.",
      "Note who is responsible for each action."
    ],
    deliver: "A dated seasonal management plan with off-season maintenance and a pre-season checklist."
  },
  chal: {
    title: "Recover a wrongly closed listing",
    brief: "Find or imagine a business that has been marked permanently closed in error — this happens frequently through public suggested edits. Write the complete recovery plan: how you would confirm the current state, what steps you would take to reverse it, what evidence might be needed, what secondary damage to check for such as lost rankings or confused reviews, and what monitoring you would put in place so it cannot happen again unnoticed. Include realistic timelines at each stage.",
    success: [
      "Your plan includes confirming the state before acting, not assuming.",
      "You address secondary damage, not just the closed flag itself.",
      "You include specific ongoing monitoring to prevent a repeat."
    ]
  }
},

"2.2.6": {
  t: "Departments, counters inside stores, and brands inside brands",
  why: "Businesses inside other businesses are common and confusing. These rules decide whether you get one listing, several, or none.",
  body: [
    "h: The situations covered here",
    "l: A pharmacy counter inside a supermarket.|A bank branch inside a store.|A coffee brand operating a concession inside a bookshop.|A car dealership's separate service department.|A hospital's individual departments.|A hotel's restaurant.",

    "h: The general rule",
    "p: A department or business inside another can have its own listing when it is **genuinely distinct**: it has its own public entrance or clearly defined customer-facing area, its own hours, its own phone where possible, and its own management or brand. If it is simply part of the parent business, it does not get a separate listing.",

    "h: Departments",
    "table: Department type ; Separate listing? ; Requirement || Car dealership service department ; Often yes ; Distinct customer area, own hours and phone || Hospital department ; Often yes ; Publicly accessible, distinct, own contact route || Supermarket bakery counter ; Usually no ; Not distinctly branded or separately managed || Hotel restaurant with its own entrance and brand ; Usually yes ; Own entrance, own hours, own name || Store's customer service desk ; No ; Part of the same business",

    "h: Brands inside other businesses",
    "p: A concession or franchise operating inside a host business can qualify if it is genuinely a separate business with its own staff, branding and customer area. The key questions are whether a customer would recognise it as a distinct business and whether it is separately operated.",
    "warn: Do not create listings for aisles, sections or product lines|A shop that sells three brands does not get three listings. A garden centre does not get a listing for its cafe unless that cafe is genuinely a distinct, separately branded and operated business. This is one of the easiest ways to create listings that get removed.",

    "h: Naming rules for departments",
    "p: When a department qualifies, the name usually follows a specific pattern: the parent brand plus the department, for example 'BrandName Service Centre' or 'BrandName Pharmacy'. Inventing a name that does not appear in the real world breaks the name rules covered in lesson 2.3.1.",

    "h: Addresses and distinctness",
    "n: Each qualifying department or concession uses the same street address.|Where possible, distinguish with a suite, unit or floor reference.|Place the map pin at the department's own entrance if it has one.|Ensure each has its own hours, which frequently differ from the parent.|Give each its own phone number or extension if at all possible.",

    "ex: A hotel restaurant done correctly|A hotel has a restaurant with its own street entrance, its own name, its own opening hours that differ from the hotel, its own phone line and its own website page. It qualifies for its own listing. The pin sits at the restaurant entrance, not the hotel lobby. Guests and locals both find what they expect.",
    "ex: The same case done incorrectly|Another hotel creates a listing for its breakfast room, which has no separate entrance, no separate brand, no separate phone and is only open to guests. This is part of the hotel and the listing is likely to be removed or merged.",

    "h: The practical test",
    "p: Ask: **would a member of the public describe this as a separate business?** If a customer says 'I am going to the pharmacy', that is a distinct business. If they say 'I am going to the supermarket to pick up a prescription', it is a department of the supermarket. Public perception is a surprisingly accurate guide here.",
    "tip: When in doubt, one listing|A single strong listing almost always outperforms two weak ones that Google may filter. Unless the department is clearly distinct with its own entrance, brand and hours, keep it as one."
  ],
  take: [
    "A department or in-store business can have its own listing only when it is genuinely distinct in space, branding, hours and contact.",
    "Aisles, sections, product lines and internal service desks never qualify.",
    "Qualifying departments are usually named as the parent brand plus the department, matching real-world usage.",
    "Set the pin at the department's own entrance and give it its own hours and phone where possible.",
    "The public-perception test — would a customer call it a separate business? — is a reliable guide."
  ],
  self: [
    "I can state the requirements for a department to qualify for its own listing.",
    "I can apply the public-perception test to a borderline case.",
    "I know the naming pattern for qualifying departments.",
    "I know that when in doubt, one strong listing beats two filtered ones."
  ],
  quiz: [
    { q: "A supermarket wants separate listings for its bakery counter, deli counter and flower section. What is the correct advice?",
      a: ["Create all three", "None qualify — they are sections of one business, not distinct businesses", "Create one for the bakery only", "Create them but hide the addresses"],
      c: 1,
      why: "Sections and counters within one shop are not separate businesses. They have no distinct entrance, brand, management or hours that a customer would recognise as separate." },
    { q: "Which factor most strongly supports a hotel restaurant having its own listing?",
      a: ["It serves food", "Its own street entrance, own brand name, own hours and own phone line", "It has a menu online", "It is inside a hotel"],
      c: 1,
      why: "Genuine distinctness in entrance, branding, hours and contact is what makes it recognisable to the public as a separate business." },
    { q: "What is the public-perception test?",
      a: ["Asking Google support", "Asking whether a member of the public would describe it as a separate business", "Counting reviews", "Checking the company registry"],
      c: 1,
      why: "How customers naturally describe and seek out the operation is a strong practical indicator of whether it functions as a distinct business." }
  ],
  ex: {
    title: "Judge five in-store situations",
    time: "25 minutes",
    intro: "You will apply the distinctness requirements to real cases.",
    steps: [
      "Write down five real examples you know of a business or department inside another business.",
      "For each, note whether it has its own entrance, brand, hours, phone and management.",
      "Apply the public-perception test to each.",
      "Decide whether each qualifies for its own listing.",
      "Check Google Maps to see what actually exists for each.",
      "Note any mismatch between your judgement and reality, and consider why."
    ],
    deliver: "Five judged cases compared against what exists on Maps, with reasoning for any mismatch."
  },
  chal: {
    title: "Plan the listing structure for a complex site",
    brief: "Choose a genuinely complex location — a hospital, a large shopping centre, a car dealership group, or a university. Plan the complete listing structure: which entities qualify for their own listings, what each should be named, where each pin should sit, what hours and phone arrangements are needed, and which website page each should link to. Then identify the two hardest judgement calls in your plan and explain how you decided them.",
    success: [
      "Your plan covers at least six entities with named, justified decisions.",
      "You specify pin placement and website linking for each qualifying listing.",
      "You have identified and reasoned through the two hardest calls explicitly."
    ]
  }
}

});
