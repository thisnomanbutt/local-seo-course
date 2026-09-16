/* Level 5 · Module 2 — Getting Reviews */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"5.2.1": {
  t: "A review system that does not break rules",
  why: "Reviews arrive reliably only from a system, not from good intentions. This lesson builds the system, within the rules.",
  body: [
    "h: Why intentions fail",
    "p: Almost every business intends to ask for reviews. Very few do it consistently. The reason is always the same: there is no system, so it depends on someone remembering at a busy moment. It gets done for two weeks and then stops.",

    "h: The five parts of a working system",
    "n: **A trigger.** A specific moment that always happens, which starts the process. Job completed, invoice sent, appointment finished, order delivered.|**An owner.** One named person responsible. Not 'the team'.|**A method.** One channel, one message, one link.|**A record.** A way of knowing who has been asked, so nobody is asked twice and nobody is missed.|**A check.** Someone looks weekly at how many were asked and how many arrived.",
    "warn: The missing part is almost always the record|Without a record, asking becomes random, some customers are asked three times, most are never asked, and nobody can tell whether the system is working. A simple list with a date and a tick is enough.",

    "h: Designing the trigger",
    "p: The trigger should be something that already happens reliably in the business, so no new discipline is required.",
    "table: Business type ; Good trigger || Trades ; Invoice sent || Clinic ; Appointment completed || Restaurant ; Bill paid, or a follow-up if contact details exist || Retail ; Purchase with an email receipt || Professional services ; Matter concluded || Repeat services ; Third visit, not the first",
    "tip: Attach the ask to something that already happens|If the ask requires a new step, it will be forgotten. If it is part of sending the invoice, or built into the appointment follow-up, it happens automatically because the underlying task always happens.",

    "h: Who asks",
    "l: The person who delivered the service is most effective, because the customer has a relationship with them.|A central administrator is more consistent but less personal.|A combination works well: the person who did the work mentions it verbally, and the follow-up message arrives from the office.|Whoever it is, name them. Shared responsibility means no responsibility.",

    "h: What the system must never do",
    "l: Never offer anything in exchange, covered in lesson 5.2.5.|Never ask only customers you expect to be positive.|Never write or supply review text.|Never create reviews from staff, friends or family.|Never use a service that generates reviews.",

    "h: Setting the volume",
    "p: Work backwards from the target set in lesson 5.1.6:",
    "n: Decide the monthly review target.|Assume a realistic response rate. For a well-timed, personal ask, something in the range of one in four to one in ten is common, and it varies enormously by industry.|Calculate how many customers must be asked.|Check that the business actually serves that many customers.|If it does not, the target is unachievable and must be revised.",
    "ex: The arithmetic that changed the plan|A business wanted 20 reviews a month. It served 45 customers a month. Even at a one in three response rate, 20 was impossible. The realistic target was six to eight. Discovering this at the planning stage prevented a year of perceived failure and produced a plan the business could actually meet and feel good about.",

    "h: Making it survive",
    "l: Review the numbers weekly for the first month, then monthly.|If asks stop happening, find out why — it is almost always that the trigger was too easy to skip.|Keep the process to one step wherever possible.|Tell the team what arrived, since seeing the reviews come in sustains the behaviour.|Do not add a second platform until the first is running reliably."
  ],
  take: [
    "Reviews arrive from a system, not from intentions — without one, asking stops after two weeks.",
    "The five parts are a trigger, a named owner, a method, a record and a weekly check.",
    "Attach the trigger to something that already happens reliably, such as sending the invoice.",
    "The missing part is almost always the record of who has been asked.",
    "Work backwards from the target through a realistic response rate to check the volume is actually achievable."
  ],
  self: [
    "I can name the five parts of a working review system.",
    "I can design a trigger attached to an existing business process.",
    "I know why a record of who was asked is essential.",
    "I can calculate whether a review target is achievable given customer volume."
  ],
  quiz: [
    { q: "Why do most review efforts stop after a couple of weeks?",
      a: ["Customers refuse", "There is no system, so it depends on someone remembering at a busy moment", "Google blocks them", "Reviews are not valuable"],
      c: 1,
      why: "Without a trigger, an owner and a record, asking is voluntary and irregular, and voluntary tasks are the first to disappear when the business gets busy." },
    { q: "A business serves 45 customers a month and wants 20 reviews a month. What should you do?",
      a: ["Set the target anyway", "Recalculate — at realistic response rates this is unachievable, and a target of six to eight is honest", "Ask each customer four times", "Buy the remaining reviews"],
      c: 1,
      why: "Working backwards through the response rate reveals impossible targets before they create a year of perceived failure and pressure towards rule-breaking." },
    { q: "Which system component is most often missing?",
      a: ["A trigger", "A record of who has been asked", "A message", "A link"],
      c: 1,
      why: "Without a record, asks become random, customers are missed or duplicated, and nobody can tell whether the system is working at all." }
  ],
  ex: {
    title: "Design the review system",
    time: "35 minutes",
    intro: "You will build the five-part system for a real business.",
    steps: [
      "Identify a trigger that already happens reliably in your practice business.",
      "Name one specific person as the owner.",
      "Choose one channel and write the message.",
      "Design the record: where it lives, what it captures, who updates it.",
      "Define the weekly check: what is counted and by whom.",
      "Calculate the monthly review yield from customer volume and a stated response rate assumption."
    ],
    deliver: "A complete five-part review system with a named owner and a calculated realistic monthly yield."
  },
  chal: {
    title: "Stress-test the system",
    brief: "Take your designed system and deliberately try to break it. What happens when the owner is on holiday, when the business has a very busy month, when a customer is asked twice, when someone leaves a one-star review, when the trigger event is skipped, and when the owner leaves the business? For each failure mode, specify what the system does. Then simplify the system as far as possible while keeping it functional, because every step you remove increases the chance it survives.",
    success: [
      "You identified at least six failure modes and specified the system's response to each.",
      "You simplified the system after stress-testing rather than adding more steps.",
      "The final version could survive the owner leaving the business."
    ]
  }
},

"5.2.2": {
  t: "The right moment to ask",
  why: "Timing affects response rate more than wording does. Getting the moment right can double the number of reviews from the same effort.",
  body: [
    "h: The principle",
    "box: **Ask when the customer feels best about you, and while the experience is fresh.**",
    "p: Those two things usually coincide, but not always, and the gap between them is where most timing mistakes happen.",

    "h: The peak moment by business type",
    "table: Business ; Peak moment ; Why || Trades ; Immediately after the job is finished and the customer has seen the result ; Relief and satisfaction are at their highest || Restaurant ; During or just after the meal, before leaving ; The experience is immediate and positive || Clinic ; After a successful treatment or a reassuring result ; Relief is the dominant feeling || Retail ; Shortly after delivery or first use ; When the product has met expectations || Professional services ; When the matter concludes successfully ; The outcome is known || Repeat services ; After a good third or fourth visit, not the first ; The relationship is established || Emergency services ; The following day, not during the emergency ; During the crisis they are not thinking about reviews",

    "h: Too early and too late",
    "l: **Too early** means before the customer knows whether they are satisfied. Asking as you leave a job that will not be tested until tomorrow risks a review written before the outcome is known.|**Too late** means after the feeling has faded. A request three weeks after a routine service produces very few reviews, because the customer barely remembers it.|The window for most businesses is somewhere between immediately and 48 hours.",
    "warn: The automated batch problem|Many businesses send review requests in a weekly batch. This guarantees that most customers are asked at the wrong moment, some three days late and some the same day. The response rate is substantially lower than a request triggered by the individual job. If a batch is the only practical option, make it daily rather than weekly.",

    "h: The verbal plus written combination",
    "p: The most effective pattern in most service businesses:",
    "n: The person who did the work mentions it verbally at the moment of completion: 'If you were happy with how that went, a quick review really helps us.'|A written message follows shortly afterwards with the link.|The verbal ask creates the intention. The written message makes it easy to act on.",
    "p: Either alone is far weaker than both together. The verbal ask alone is forgotten. The written message alone arrives without context.",
    "tip: The single most effective sentence|'If you were happy with how that went, would you mind leaving us a review? I will send you a link.' It is short, it is honest, it sets up the message that follows, and it takes five seconds. Most staff will actually say it, which matters more than a perfect script they will not use.",

    "h: When not to ask",
    "l: When the customer was unhappy, or the job went badly. Asking then is asking for a bad review.|When something went wrong and was fixed — unless the customer has clearly expressed satisfaction with the resolution.|When the customer is in distress, in sensitive industries.|When you have asked recently for something else.|When it would be inappropriate to the profession, as covered in lesson 5.1.5.",
    "warn: The difference between timing and filtering|Not asking an obviously unhappy customer at the moment of their complaint is judgement. Systematically only asking customers you have pre-screened as happy is review gating, which is against the rules and covered in lesson 5.2.5. The distinction is between reasonable timing and building a filter into the process.",

    "ex: The timing change|A garage sent review requests every Friday. Moving to a request sent within an hour of the customer collecting their car, following a verbal mention from the person handing over the keys, roughly doubled the response rate with no other change. The message was identical. Only the moment changed."
  ],
  take: [
    "Ask when the customer feels best about you and while the experience is fresh — usually within 48 hours.",
    "Too early risks a review before the outcome is known; too late loses the feeling entirely.",
    "Weekly batch requests guarantee most customers are asked at the wrong moment — make them job-triggered, or at least daily.",
    "The verbal ask plus a written follow-up is far more effective than either alone.",
    "Reasonable timing judgement is different from systematically filtering out customers you expect to be unhappy."
  ],
  self: [
    "I can identify the peak moment for different business types.",
    "I know why weekly batch requests underperform.",
    "I can deliver the verbal plus written combination.",
    "I can distinguish timing judgement from review gating."
  ],
  quiz: [
    { q: "Why do weekly batch review requests underperform?",
      a: ["They cost more", "Most customers are asked at the wrong moment, days after the experience", "Google blocks batches", "They are against the rules"],
      c: 1,
      why: "Response rate depends heavily on freshness. A weekly batch means most requests arrive well after the feeling has faded." },
    { q: "What is the most effective asking pattern for a service business?",
      a: ["A written message only", "A verbal ask at completion followed by a written message with the link", "A verbal ask only", "A message three weeks later"],
      c: 1,
      why: "The verbal ask creates the intention while the customer is satisfied; the written message makes acting on it easy. Either alone is much weaker." },
    { q: "What is the difference between good timing and review gating?",
      a: ["There is none", "Timing means asking when the experience is fresh; gating means systematically filtering out customers you expect to be negative", "Gating is faster", "Timing applies only to restaurants"],
      c: 1,
      why: "Judgement about an individual moment is reasonable. Building a screening step into the process so only likely-positive customers are asked is against the rules." }
  ],
  ex: {
    title: "Fix the timing",
    time: "25 minutes",
    intro: "You will make the change that most improves response rate.",
    steps: [
      "Record when your practice business currently asks for reviews, relative to the service.",
      "Identify the peak satisfaction moment for this business type.",
      "Calculate the gap between the two.",
      "Redesign the timing so the ask happens within the window.",
      "Write the five-second verbal sentence the delivering staff member will say.",
      "Specify how soon after the verbal ask the written message arrives."
    ],
    deliver: "A redesigned asking sequence with the verbal sentence, the timing of the written follow-up, and the gap you closed."
  },
  chal: {
    title: "Run a timing test",
    brief: "Design a fair test of two timing approaches for your practice business: the current timing against a job-triggered ask within two hours. Specify how you would split customers between the two, how many you would need before the result is meaningful, how long the test runs, what you would measure, and what difference would be large enough to act on. Then run it if you can, and record the result. If you cannot run it, state exactly what would need to be true for you to be able to.",
    success: [
      "Your test design splits fairly and specifies a sample size before starting.",
      "You defined in advance what difference would be large enough to act on.",
      "You either ran it and recorded results, or specified precisely what prevents running it."
    ]
  }
},

"5.2.3": {
  t: "Asking in person, by SMS, by email and by QR code",
  why: "The channel changes the response rate substantially. Choosing the right one for your business is a simple decision with a large effect.",
  body: [
    "h: The four channels",
    "table: Channel ; Typical strength ; Best for ; Watch out for || In person ; Creates intention, no link ; Everyone, as the first half of the combination ; Forgotten without a follow-up || SMS ; Highest completion, immediate ; Trades, clinics, anywhere you have a mobile number ; Consent rules, cost, being seen as intrusive || Email ; Scalable, allows explanation ; Professional services, retail, anywhere you have an email ; Lower open and completion rates || QR code or printed card ; Works with no contact details ; Restaurants, shops, waiting areas ; Very low completion, easily ignored",

    "h: SMS",
    "p: Where you legitimately hold a mobile number, SMS generally produces the highest completion rate, because it is read almost immediately and the link is one tap away.",
    "l: Keep it very short. Two sentences maximum.|Include the business name, since an unfamiliar number is otherwise ignored.|Put the link at the end.|Send once. A second message is intrusive and rarely helps.|Check the consent and marketing rules in your market before sending — these vary and they matter.",
    "ex: A good SMS|'Hi Sarah, thanks for having us out to fix the boiler today - Northgate Heating. If you have a minute, a quick review really helps us: [link]'",

    "h: Email",
    "l: Subject line should be plain and specific: 'Thanks for choosing us today'.|Keep the body under 60 words.|One link, prominent, in the middle of the message.|Send from a person, not a no-reply address.|Follow up once at most, after several days.",

    "h: In person",
    "p: The verbal ask is the most persuasive part of any system, but it must be paired with something that carries the link.",
    "l: Say it simply, as covered in lesson 5.2.2.|Do not apologise for asking. Most customers are happy to help.|Do not explain why reviews matter at length. It sounds like pressure.|Tell them a link is coming, so the message that arrives is expected.",

    "h: QR codes and printed cards",
    "p: These work where you have no contact details — a shop, a restaurant table, a waiting room, an invoice.",
    "l: Completion rates are low, so they are a supplement rather than a system.|Make the code go directly to the review form, not to a website.|Put a short instruction next to it.|Place it where people wait, not where they are leaving in a hurry.|Test the code regularly — printed codes outlive the links behind them.",
    "warn: The dead QR code|Printed materials survive for years. If the link behind a QR code changes or expires, every card and sticker becomes useless and nobody notices. Use a link you control and can redirect, and test it quarterly.",

    "h: Choosing for your business",
    "n: Do you have mobile numbers? If yes, SMS is usually your primary channel.|Do you have email addresses but not numbers? Email, with an in-person ask where possible.|Do you have neither? QR codes and cards, and consider whether you could capture contact details legitimately.|In all cases, add the in-person verbal ask, which costs nothing and improves every other channel.",
    "tip: One channel, done properly|Businesses that try all four usually do none of them consistently. Pick the one that fits, build the system around it, and add the verbal ask on top. A second channel can come later once the first is reliable."
  ],
  take: [
    "SMS usually produces the highest completion where you legitimately hold a mobile number.",
    "Email is scalable but has lower completion; keep it under 60 words with one prominent link.",
    "The in-person verbal ask costs nothing and improves the performance of every other channel.",
    "QR codes and cards work without contact details but have low completion and are a supplement, not a system.",
    "Pick one primary channel, build the system around it, and add the verbal ask on top."
  ],
  self: [
    "I can compare the four channels on strength and suitability.",
    "I can write a short effective SMS review request.",
    "I know why printed QR codes need a link I control and quarterly testing.",
    "I know to build one channel properly rather than four partially."
  ],
  quiz: [
    { q: "Which channel typically produces the highest review completion rate?",
      a: ["Email", "SMS, where you legitimately hold a mobile number", "QR code", "Postal letter"],
      c: 1,
      why: "SMS is read almost immediately and the link is one tap away, which removes most of the friction between intention and action." },
    { q: "Why must a printed QR code use a link you control?",
      a: ["It looks more professional", "Printed materials outlive links, and if the destination changes every printed code becomes useless silently", "It is cheaper", "Google requires it"],
      c: 1,
      why: "Cards and stickers remain in circulation for years. A controllable, redirectable link means you can update the destination without reprinting everything." },
    { q: "What is the best approach for a business unsure which channel to use?",
      a: ["Use all four at once", "Pick the one that fits the contact details available, build the system around it, and add the verbal ask", "Use none until certain", "Only use QR codes"],
      c: 1,
      why: "Businesses attempting all four typically do none consistently. One channel done properly, reinforced by a verbal ask, produces far more reviews." }
  ],
  ex: {
    title: "Choose and build one channel",
    time: "30 minutes",
    intro: "You will build a single channel properly rather than four partially.",
    steps: [
      "Determine what contact details your practice business reliably holds for customers.",
      "Choose the primary channel based on that, and write down why.",
      "Write the exact message, keeping SMS under two sentences or email under 60 words.",
      "Write the in-person verbal sentence that precedes it.",
      "Check any consent or marketing rules that apply in your market for that channel.",
      "Specify who sends it, when, and how it is recorded."
    ],
    deliver: "One fully built channel with the exact message, the verbal ask, consent considerations and an owner."
  },
  chal: {
    title: "Build the physical asset set",
    brief: "Design the printed and physical review assets for your practice business: what cards, stickers, invoice inserts or signage would be used, what each says, where each is placed, and what link each uses. Specify how the links are controlled so they can be updated without reprinting, and how they are tested. Then estimate realistically what proportion of reviews these would contribute compared with your primary channel, and state whether the cost is justified.",
    success: [
      "Every asset specifies placement, wording and a controllable link.",
      "You included a testing routine for the links behind printed materials.",
      "You gave an honest estimate of contribution and a justified verdict on cost."
    ]
  }
},

"5.2.4": {
  t: "Review links, short links and removing friction",
  why: "Every extra step between intention and completion loses people. Getting the link right is a small technical task with a disproportionate effect.",
  body: [
    "h: The friction problem",
    "p: A customer who decides to leave a review has a small window of willingness. Every obstacle in that window loses a proportion of them:",
    "l: Having to search for the business.|Landing on the listing rather than the review form.|Being asked to sign in.|An unclear next step.|A link that does not work on their device.|A long or ugly link that looks untrustworthy.",

    "h: The direct review link",
    "p: Google provides a direct link that opens the review form for your business. Getting it is straightforward:",
    "n: Find it in your Google Business Profile, where a 'ask for reviews' or 'get more reviews' option provides a shareable link.|Alternatively, search your business, open the listing, and use the write-a-review function to obtain the URL.|Test it on a phone and a desktop.|Test it while signed out, to see what a customer who is not signed in experiences.",
    "tip: Always test signed out|As the business owner you are permanently signed in, so the link works perfectly for you. A customer who is not signed in may face an additional step. Testing signed out tells you the real experience, and it occasionally reveals that the link does not do what you assumed.",

    "h: Short links",
    "p: The direct link is usually long. A shortened version is easier to include in an SMS, on a card, or read aloud.",
    "l: Use a shortening service you control, or better, a redirect on your own domain such as example.com/review.|A link on your own domain looks trustworthy and can be changed without reprinting anything.|Avoid free shorteners for printed materials, since the service may disappear.|Keep it memorable enough to be typed if necessary.",

    "h: The review landing page question",
    "p: Some businesses send customers to a page on their own site that explains how to leave a review, then links onwards.",
    "warn: This is where gating usually creeps in|A landing page that asks 'how was your experience?' and routes happy customers to Google while directing unhappy ones to a private form is review gating. It is against the rules and covered in lesson 5.2.5. A landing page that simply explains how to leave a review, with the same path for everyone, is acceptable — but it adds a step, and the step costs completions.",
    "p: For most businesses, linking directly to the review form is better. Use a landing page only where there is a genuine need, such as offering a choice between two platforms, and never to filter.",

    "h: Removing the remaining friction",
    "l: Tell the customer it takes a minute, because they will assume it takes longer.|Do not ask for a star rating and a written review as separate requests.|Do not ask them to also share on social media at the same time.|Do not include multiple links.|Make the link tappable, not text they must copy.",

    "h: Testing the whole path",
    "n: Send yourself the message on a phone you do not normally use for the business.|Tap the link.|Note every step required, including any sign-in.|Count the total taps from message to submitted review.|Note anything confusing.|Fix whatever adds steps without adding value.",
    "ex: The four-tap difference|A business sent customers to a page on its website explaining how to find them on Google and leave a review. That path took a customer seven taps and required them to search for the business. Replacing it with a direct link reduced it to three taps. Review volume rose substantially with no increase in the number of customers asked."
  ],
  take: [
    "Every step between intention and completion loses a proportion of willing reviewers.",
    "Use the direct review link that opens the review form, and test it signed out on a real phone.",
    "A short link on your own domain looks trustworthy and can be changed without reprinting materials.",
    "Landing pages add a step and are where gating usually creeps in — link directly unless there is a genuine need.",
    "Test the whole path yourself and count the taps from message to submitted review."
  ],
  self: [
    "I know how to obtain and test the direct review link.",
    "I know why testing signed out matters.",
    "I can explain the risk that a review landing page becomes gating.",
    "I test the whole path and count the steps."
  ],
  quiz: [
    { q: "Why should you test a review link while signed out?",
      a: ["It is faster", "Because the owner is always signed in, and a signed-out customer may face additional steps you never see", "Google requires it", "To avoid leaving your own review"],
      c: 1,
      why: "The owner's experience is not the customer's. Testing signed out reveals the real path including any sign-in requirement." },
    { q: "What is the risk of routing customers through a review landing page?",
      a: ["It is always forbidden", "It adds a step that costs completions, and it is where review gating usually creeps in", "It slows the website", "It removes the link"],
      c: 1,
      why: "The extra step reduces completion, and pages that branch based on how the customer felt cross into gating, which is against the rules." },
    { q: "Which link is best for printed materials?",
      a: ["A free shortening service", "A redirect on your own domain, such as example.com/review", "The full long Google URL", "A link to the homepage"],
      c: 1,
      why: "It is short, trustworthy, and can be redirected if the destination ever changes, without reprinting everything that carries it." }
  ],
  ex: {
    title: "Build and test the review link",
    time: "25 minutes",
    intro: "You will remove friction from the most important link in the system.",
    steps: [
      "Obtain the direct review link for your practice business.",
      "Set up a short redirect on the business domain if possible, such as /review.",
      "Send the link to a phone that is not signed in to the business account.",
      "Tap it and count every step required to submit a review.",
      "Note anything confusing or unnecessary.",
      "Compare with the current path being used and record how many steps you removed."
    ],
    deliver: "A tested direct review link with a short redirect, and a count of steps before and after."
  },
  chal: {
    title: "Audit competitors' review paths",
    brief: "Find how three competitors ask for reviews — check their websites, invoices if available, any printed material you can obtain, or simply become a customer. For each, follow their path as a customer would and count the steps. Identify the friction in each. Then design the shortest legitimate path available to your practice business and state how many steps it saves against each competitor. Note any competitor practice that crosses into gating, and what makes it a violation.",
    success: [
      "You followed at least two competitor paths as a real customer would.",
      "You counted steps rather than describing the paths impressionistically.",
      "You identified any gating practice and explained precisely why it is a violation."
    ]
  }
},

"5.2.5": {
  t: "What you may never do: gating, incentives, buying",
  why: "These three practices are common, tempting and genuinely dangerous. Knowing them precisely protects your clients and your own reputation.",
  body: [
    "h: The three prohibitions",
    "n: **Review gating.** Filtering customers so only those likely to be positive are asked to review publicly.|**Incentives.** Offering anything of value in exchange for a review.|**Fake reviews.** Creating, buying, exchanging or soliciting reviews from people who were not customers.",

    "h: Review gating",
    "term: Review gating|Asking customers how they felt first, then directing only the happy ones to leave a public review while routing unhappy ones to a private channel.",
    "p: It sounds reasonable — nobody wants to invite a bad review — and it is against the rules because it produces a review profile that misrepresents the real customer experience.",
    "l: A landing page that asks 'were you satisfied?' and branches is gating.|A message sent only to customers marked as happy in your system is gating.|A staff instruction to ask only the pleased ones is gating.|Asking a genuinely annoyed customer to review you at the moment of their complaint is not required, and exercising that judgement once is different from building a filter into the process.",
    "warn: The consequence|Gating can result in reviews being removed and, where systematically applied, in wider action against the listing. It also produces a profile that does not match the business, which customers eventually notice through the gap between the reviews and their own experience.",

    "h: Incentives",
    "p: Offering a discount, a free item, a prize draw entry or anything else of value in exchange for a review is prohibited.",
    "l: This applies whether or not the review is positive.|It applies to prize draws, not only direct payment.|It applies to staff incentives that reward generating reviews, which push staff towards gating and fakes.|It applies to asking employees, friends or family to review.",
    "p: A genuine thank-you **after** a review, unprompted and unpromised, is a different matter — but any arrangement where the reward is known in advance is an incentive.",

    "h: Fake reviews",
    "l: Buying reviews from a service.|Writing reviews yourself, or having staff write them.|Exchanging reviews with another business.|Asking friends and family who were not customers.|Using any service that generates reviews from accounts, however it is described.",
    "warn: Buying reviews is the fastest way to destroy a listing|Detection has improved substantially, bought reviews are frequently removed in bulk, and the listing can be suspended. Beyond the platform risk, in many markets fake reviews breach consumer protection law and can result in regulatory action against the business. This is not only a Google rules issue.",

    "h: Why these practices are attractive and still wrong",
    "p: Every one of them works briefly. That is why they persist. The question is not whether they can produce a short-term gain but what happens when they are detected, which is:",
    "l: Reviews removed in bulk, often including legitimate ones caught in the sweep.|A rating that collapses suddenly and visibly.|Possible listing suspension.|Loss of customer trust if it becomes known.|In some markets, regulatory exposure.",

    "h: What to do instead",
    "n: Ask everyone, consistently, using the system from lesson 5.2.1.|Time the ask well, as in lesson 5.2.2.|Remove friction, as in lesson 5.2.4.|Improve the actual service so that more customers want to leave positive reviews.|Respond well to negative reviews, as covered in lesson 5.3.2.",
    "tip: The test for any tactic|Would you be comfortable if a customer, a competitor and a regulator all saw exactly how this review was obtained? If any of the three would raise an eyebrow, do not do it. That test resolves almost every borderline case without needing to memorise rules.",

    "ex: The bulk removal|A business used a service that promised 50 reviews in a month. They arrived. Four months later, 63 reviews disappeared in a single week — the 50 bought ones and 13 genuine ones caught in the removal. The rating fell from 4.8 to 4.1 overnight, and the business had to rebuild from a worse position than it had started in, having also lost four months it could have spent building real reviews."
  ],
  take: [
    "The three prohibitions are gating, incentives and fake reviews.",
    "Gating means filtering so only likely-positive customers are asked publicly — it is against the rules even though it feels reasonable.",
    "Incentives include discounts, prize draws and staff bonuses tied to review generation.",
    "Bought reviews are removed in bulk, often taking genuine reviews with them, and can breach consumer protection law.",
    "Test any tactic by asking whether you would be comfortable if a customer, a competitor and a regulator all saw exactly how the review was obtained."
  ],
  self: [
    "I can define review gating and recognise it in disguised forms.",
    "I know that prize draws and staff bonuses count as incentives.",
    "I know the consequences of bought reviews beyond platform rules.",
    "I use the customer, competitor, regulator test on borderline tactics."
  ],
  quiz: [
    { q: "A business sends customers to a page asking 'were you happy?', routing happy ones to Google and unhappy ones to a private form. What is this?",
      a: ["Good customer service", "Review gating, which is against the rules", "Required by Google", "A form of incentive"],
      c: 1,
      why: "Filtering who is asked publicly produces a review profile that misrepresents the real experience, which is precisely what gating means." },
    { q: "Which of these counts as an incentive?",
      a: ["Thanking a customer verbally after they left a review unprompted", "Entering reviewers into a prize draw", "Sending a review link", "Asking at the right moment"],
      c: 1,
      why: "Anything of value promised in advance in exchange for a review is an incentive, including prize draw entries and staff bonuses tied to review counts." },
    { q: "What typically happens when bought reviews are detected?",
      a: ["Only the bought ones are removed quietly", "Reviews are removed in bulk, often including genuine ones, and the rating can collapse overnight", "Nothing", "Google sends a warning first"],
      c: 1,
      why: "Removals are usually sweeping and take legitimate reviews caught in the pattern, leaving the business worse off than before it started." }
  ],
  ex: {
    title: "Audit a review process for violations",
    time: "25 minutes",
    intro: "You will check a real process against the three prohibitions.",
    steps: [
      "Write out your practice business's current review process step by step, including anything staff do informally.",
      "Check each step against gating: is anyone filtered out based on expected sentiment?",
      "Check against incentives: is anything of value offered or implied, including to staff?",
      "Check for any reviews that were not from genuine customers.",
      "Apply the customer, competitor, regulator test to each step.",
      "List every change required to bring the process fully within the rules."
    ],
    deliver: "A process audit against all three prohibitions with a list of required changes."
  },
  chal: {
    title: "Handle a client who wants to break the rules",
    brief: "A client asks you to set up a review landing page that filters unhappy customers away from Google, arguing that their competitors do it and it is standard practice. Write your complete response: why it is a violation, what the realistic consequences are, what evidence you would show them, what you are willing to do instead, and what you would do if they insisted. Include the exact wording you would use to decline, in a way that keeps the relationship intact where possible.",
    success: [
      "You explain the violation clearly without being condescending about a common misconception.",
      "You name the realistic consequences including any non-platform risk.",
      "You offer a concrete alternative and state your position if they insist."
    ]
  }
},

"5.2.6": {
  t: "Building review velocity that looks natural",
  why: "Steady, natural growth is both more effective and safer than bursts. This lesson covers how to build and sustain it.",
  body: [
    "h: Why steady beats bursts",
    "l: A steady flow signals an active, operating business, as established in lesson 5.1.2.|A sudden spike after a long gap looks unusual and can attract filtering or scrutiny.|Steady growth is sustainable, because it comes from a system rather than a campaign.|Customers reading the reviews see recent ones, which is what they care about.|Recovery from a bad review is faster when new reviews keep arriving.",
    "warn: The launch spike problem|A business that asks its entire customer database at once produces a large burst of reviews in a week, then nothing. Some of those reviews may be filtered because the pattern is unusual, the profile then looks stale again within months, and the business has used up its backlog with nothing left to sustain the flow.",

    "h: If you do have a backlog",
    "p: Many businesses start with years of past customers who were never asked. Do not ask them all at once.",
    "n: Ask the most recent customers first, since they remember you.|Spread the remainder over several months.|Prioritise those you have the best relationship with.|Accept that older customers will respond at a much lower rate.|Let the ongoing system run alongside, so new reviews arrive continuously.",
    "tip: Backlog plus system, not backlog instead of system|The backlog is a one-time boost. The system is what sustains the profile for years. Build the system first and use the backlog to accelerate it, not as a substitute for it.",

    "h: What natural velocity looks like",
    "p: It varies by business size, but the shape is what matters:",
    "l: Reviews arriving most weeks, not all in one week each quarter.|Volume roughly proportional to customer volume.|A mix of ratings, including the occasional four star and even the occasional lower one.|Reviews of varying length and detail.|Reviews from a range of accounts with different histories.",
    "p: A profile where every review is five stars, similar in length and arrived in three bursts looks different from one that grew organically, both to Google's systems and to an attentive customer.",

    "h: Sustaining it",
    "n: **Make it part of the job**, not a campaign. Campaigns end.|**Report the number weekly** for the first month and monthly thereafter, so it stays visible.|**Tell the team about good reviews**, because seeing the result sustains the behaviour.|**Check for drop-off** — if asks stop, find out why quickly.|**Do not increase the ask rate above what the business can genuinely support.**",

    "h: Seasonal businesses",
    "p: A seasonal business will naturally have uneven velocity, and that is fine — it matches the real pattern of the business. The goal is to ask consistently during the operating season rather than to fake year-round volume.",

    "h: Recovering velocity after a gap",
    "l: Restart with current customers, not the backlog.|Build back gradually rather than attempting to make up the gap at once.|Expect the profile to look stale for a couple of months while recent reviews accumulate.|Focus on recency first, since that is what customers see.",
    "ex: The sustainable rate|A clinic could realistically generate four to six reviews a month from its patient volume. It was tempted to run a campaign producing thirty in one month. Instead it built the system at five a month. After a year it had sixty reviews, a profile that always showed something recent, and a process that continued indefinitely. The campaign would have produced thirty and then stopped."
  ],
  take: [
    "Steady velocity signals an active business, is sustainable, and is safer than bursts.",
    "Asking an entire customer database at once produces a spike, possible filtering, and then staleness.",
    "Use a backlog to accelerate an existing system, spread over months, starting with the most recent customers.",
    "Natural profiles show reviews most weeks, varied ratings and lengths, proportional to customer volume.",
    "Sustain velocity by making it part of the job, reporting it regularly, and never exceeding what the business can genuinely support."
  ],
  self: [
    "I can explain why steady velocity beats bursts.",
    "I know how to handle a backlog of past customers correctly.",
    "I can describe what a naturally grown review profile looks like.",
    "I know how to restart velocity after a gap."
  ],
  quiz: [
    { q: "A business asks its entire past customer database at once. What is the likely outcome?",
      a: ["Steady long-term growth", "A spike that may be partly filtered, followed by staleness and no backlog left to sustain the flow", "Immediate ranking success", "No effect"],
      c: 1,
      why: "The unusual pattern risks filtering, the profile looks stale again within months, and the one-time resource has been used with nothing sustaining it." },
    { q: "How should a backlog of past customers be used?",
      a: ["All at once for maximum impact", "Spread over several months alongside an ongoing system, starting with the most recent", "Ignored entirely", "Only the happiest ones"],
      c: 1,
      why: "Spreading avoids an unnatural spike, recent customers respond better, and running the system alongside means the flow continues after the backlog is exhausted." },
    { q: "What does a naturally grown review profile look like?",
      a: ["Every review five stars, arriving in three bursts", "Reviews most weeks, varied ratings and lengths, roughly proportional to customer volume", "All reviews the same length", "No reviews for months then many at once"],
      c: 1,
      why: "Real customer behaviour produces variety in timing, rating and detail. Uniformity and bursts are what distinguish engineered profiles from organic ones." }
  ],
  ex: {
    title: "Set a sustainable velocity",
    time: "25 minutes",
    intro: "You will set a rate the business can maintain indefinitely.",
    steps: [
      "Establish how many customers your practice business serves per month.",
      "Apply a realistic response rate to estimate achievable monthly reviews.",
      "Set the target at a level the business can sustain without strain.",
      "If a backlog exists, plan how it will be spread over the next six months.",
      "Write the weekly asking requirement in plain numbers.",
      "Specify how the number will be reported and to whom."
    ],
    deliver: "A sustainable monthly velocity target with a backlog release plan and a weekly asking requirement."
  },
  chal: {
    title: "Model twelve months of velocity",
    brief: "Build a month-by-month model for your practice business showing expected reviews from the ongoing system, from the backlog release, and the cumulative total. Model the strongest competitor alongside using their observed velocity. Show when, if ever, you overtake them. Then model a second scenario where the response rate is half what you assumed, and state what you would change in that case. Finally, identify the month at which the plan is most likely to be abandoned and what you would do to prevent it.",
    success: [
      "Your model separates system reviews from backlog reviews across twelve months.",
      "You modelled the competitor growing and identified the overtake point or its absence.",
      "You built a pessimistic scenario and identified the likely abandonment point with a prevention."
    ]
  }
}

});
