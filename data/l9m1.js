/* Level 9 · Module 1 — Local Rank Tracking */
window.LSEO_LESSONS = window.LSEO_LESSONS || {};
Object.assign(window.LSEO_LESSONS, {

"9.1.1": {
  t: "Why a single rank number lies in local search",
  why: "Almost all local SEO reporting is built on a number that cannot be correct. Understanding why is the foundation of honest measurement.",
  body: [
    "h: The problem restated",
    "p: From lesson 1.4.2, your position changes at every point on the map. You are first outside your premises, fourth two streets away, and absent across town. A single number cannot represent that.",
    "box: **'We rank third for plumber' is not a fact. It is a fact about one point, at one time, measured one way.**",

    "h: What a single number hides",
    "n: **Where you are strong.** The area where you genuinely dominate.|**Where you fade.** The boundary of your visibility.|**Which direction you are weak in**, which often indicates a competitor cluster or a barrier.|**Whether you improved or simply moved the measurement point.**|**Whether a change affected everywhere or one area.**",

    "h: The ways a single number misleads",
    "table: Practice ; Why it misleads || Checking from the office ; The business's own address is its strongest point || Checking from home ; A single arbitrary point, plus personalisation || Using a tool's default location ; Often a city centroid, which may be far from the business || Reporting the best position found ; Selects the most favourable point || Averaging across keywords ; Hides which specific terms moved || Comparing numbers measured differently ; Not comparable at all",
    "warn: The most damaging version|Reporting improvement by changing where you measure from. It happens more often through carelessness than dishonesty — a tool's location setting changes, or someone checks from a different place — but the effect is the same: a reported improvement that did not occur.",

    "h: What honest measurement requires",
    "n: **Multiple points**, covering the service area, from lesson 9.1.2.|**Consistent points**, the same every time.|**Consistent method**, from lesson 1.4.4.|**Recorded settings**, so anyone can check what was measured.|**The same keywords**, tracked separately.|**Dates and times recorded.**",

    "h: What to report instead of a number",
    "l: The grid: a visual map of positions across the area.|The proportion of points where you appear in the top three.|The average position across points, which is more honest than a single point though still a summary.|The visible radius: how far out you hold the top three.|The change in each of these over time.|Share of local voice, from lesson 9.1.5.",
    "tip: The one-sentence explanation for clients|'Your ranking is different in every part of your area, so we measure it at twenty points and show you the map rather than a single number, which would be misleading.' Say it in the first meeting and you will never have the argument later.",

    "h: The exception",
    "p: A single number is acceptable for one purpose: tracking organic website rankings for terms where the searcher's location has less effect, such as informational queries. Even then, local personalisation applies. For Local Pack positions there is no defensible single number.",
    "ex: The improvement that was not|An agency reported a client's move from position 6 to position 2. Investigation showed the earlier measurement had been taken from a city centroid and the later one from the business address. Nothing had improved. The client had been paying for eight months on the strength of a measurement artefact. When a proper grid was established, the true picture was considerably worse than the reports had suggested."
  ],
  take: [
    "A single local rank number is a fact about one point, at one time, measured one way — not a fact about the business.",
    "It hides where you are strong, where you fade, and which direction you are weak in.",
    "The most damaging version is reporting improvement caused by changing where you measure from.",
    "Honest measurement requires multiple consistent points, a consistent method, recorded settings and dated results.",
    "Report the grid, the proportion of points in the top three, the visible radius and the change over time."
  ],
  self: [
    "I can explain why a single local rank number cannot be correct.",
    "I know the six ways single-number measurement misleads.",
    "I know what honest measurement requires.",
    "I can explain this to a client in one sentence."
  ],
  quiz: [
    { q: "Why can a single local rank number never be correct?",
      a: ["Tools are inaccurate", "Position differs at every point on the map, so one number represents one point rather than the business", "Google hides rankings", "Rankings change daily"],
      c: 1,
      why: "Local ranking is point-specific by design. A single figure necessarily describes one arbitrary location and conceals the entire shape of visibility." },
    { q: "What is the most damaging measurement error in local reporting?",
      a: ["Checking too often", "Reporting an improvement that was actually caused by changing the measurement point", "Using too many keywords", "Measuring on mobile"],
      c: 1,
      why: "It produces a report of progress where none occurred, which misleads the client and prevents the real situation from being addressed." },
    { q: "What should be reported instead of a single number?",
      a: ["The best position found anywhere", "The grid, the proportion of points in the top three, the visible radius and the change over time", "An average of all keywords", "Nothing"],
      c: 1,
      why: "These describe the actual shape of visibility and its movement, which is what the business needs to know and what a single figure conceals." }
  ],
  ex: {
    title: "Demonstrate the single-number problem",
    time: "30 minutes",
    intro: "You will prove the point with your own measurements.",
    steps: [
      "Choose your practice business's main keyword.",
      "Measure its position from five different points: the business address, and four points at increasing distances.",
      "Record all five positions.",
      "Note the range between the best and worst.",
      "Write down what a single number would have reported depending on which point was chosen.",
      "Write the one-sentence explanation you would give a client."
    ],
    deliver: "Five measured positions showing the range, with a demonstration of how different single numbers could be reported."
  },
  chal: {
    title: "Audit an existing reporting approach",
    brief: "Find a real local SEO report — your own, a competitor agency's sample, or a template published online. Assess its ranking measurement honestly: how many points, is the method stated, are the settings recorded, could the numbers be compared across months, and could an improvement be manufactured by changing the measurement? Then rewrite the ranking section as you believe it should be presented, and write the explanation you would give a client about why the new version is different.",
    success: [
      "You assessed a real report against specific measurement criteria.",
      "You identified whether an improvement could be manufactured under that method.",
      "Your rewritten section is more honest without being less useful to the client."
    ]
  }
},

"9.1.2": {
  t: "Geo-grid tracking explained",
  why: "The grid is the standard instrument of honest local measurement. This lesson explains what it is and what it produces.",
  body: [
    "h: What a grid does",
    "p: A grid places measurement points across a map and checks your ranking at each one for a given keyword. The output is a picture of where you appear and where you do not, as covered in lesson 7.2.2.",
    "term: Geo-grid|A set of measurement points arranged across an area, each checked individually, producing a map of ranking positions rather than a single figure.",

    "h: What it produces",
    "n: **A position at each point**, usually displayed as a number on a coloured pin.|**A visual shape**, showing where you are strong and where you fade.|**Summary figures**: average position, proportion of points in the top three, visible radius.|**A comparable record**, if the settings stay constant.|**A change picture**, when compared with previous runs.",

    "h: The core settings",
    "table: Setting ; What it controls ; Guidance || Centre point ; Where the grid is centred ; Usually the business address || Grid size ; The number of points, such as 3x3, 5x5, 7x7 ; 5x5 is a good default || Distance between points ; The area covered ; Match the realistic service area || Keyword ; The search measured ; One per grid, never mixed || Frequency ; How often it runs ; Monthly is sufficient for most || Device ; Mobile or desktop ; Mobile reflects most local searching",

    "h: Choosing the area",
    "l: Cover the realistic service area plus a margin, from lesson 7.2.3.|Too small and you only see where you are already strong.|Too large and most points are meaningless empty space.|In dense urban areas use tighter spacing; in rural areas use wider.|Keep it the same every time, or the comparison is worthless.",
    "tip: Set it once and never change it|The value of a grid comes almost entirely from comparability across time. Changing the size, spacing or centre point makes every previous measurement incomparable. Decide the settings carefully at the start, record them, and leave them alone even when you are tempted to improve them.",

    "h: What a grid does not tell you",
    "warn: A grid measures visibility, not business results|A grid can improve while enquiries do not, and enquiries can rise while a grid is flat. It measures one thing: where you appear. Conversions, calls and revenue are separate measurements, covered in module 3. Reporting only the grid is a more sophisticated version of reporting only a number.",
    "l: It does not tell you whether anyone searched at those points.|It does not weight points by population or demand.|It does not measure organic results, only local ones, unless the tool also tracks those.|It is a snapshot, subject to fluctuation, from lesson 7.2.2.",

    "h: Weighting by demand",
    "p: An advanced consideration: not all grid points are equally valuable. A point in an industrial estate with no residents matters less than one in a dense residential area. Some tools allow weighting; where they do not, interpret the grid with demand in mind rather than treating all points equally.",

    "h: Running one without a tool",
    "n: Choose nine points on a map.|For each, set the browser location to those coordinates using developer tools.|Search the keyword in a private window while signed out.|Record the position.|Repeat for all nine.|Plot the results on a sketch.",
    "p: This takes roughly thirty minutes and is entirely viable for one business and one keyword. Tools become necessary when tracking many keywords, many locations or frequent runs.",
    "ex: The grid that reframed a business|A business believed it served its whole city. A 7x7 grid showed the top three at nineteen of forty-nine points, all clustered in one quadrant. The owner had never seen the shape of their own visibility. The conversation moved immediately from 'why are we not first' to 'how do we extend this quadrant and dominate within it', which was a far more productive discussion."
  ],
  take: [
    "A grid checks your ranking at many points and produces a map of visibility rather than a single figure.",
    "Core settings are the centre point, grid size, point spacing, keyword, frequency and device.",
    "Set the settings once and never change them, because comparability across time is where the value lies.",
    "A grid measures visibility, not business results — reporting only the grid is a sophisticated version of reporting only a number.",
    "A nine-point manual grid takes about thirty minutes and is viable without any tool."
  ],
  self: [
    "I can explain what a grid is and what it produces.",
    "I know the six core settings and sensible defaults.",
    "I know why settings must never change once established.",
    "I know what a grid does not measure."
  ],
  quiz: [
    { q: "Why must grid settings stay constant once established?",
      a: ["Tools require it", "The value comes from comparability across time, which changing the settings destroys", "It saves money", "Google requires it"],
      c: 1,
      why: "A grid with different size, spacing or centre point produces numbers that cannot be compared with previous runs, which removes the entire purpose." },
    { q: "What does a grid NOT tell you?",
      a: ["Where you rank", "Whether anyone actually searched at those points, or whether enquiries changed", "The shape of your visibility", "Your average position"],
      c: 1,
      why: "It measures visibility only. Demand at each point and actual business results are separate measurements requiring separate instruments." },
    { q: "Can a useful grid be run without a paid tool?",
      a: ["No", "Yes — nine points checked manually takes about thirty minutes for one business and one keyword", "Only on desktop", "Only in rural areas"],
      c: 1,
      why: "Manual measurement is entirely viable at small scale. Tools become necessary for many keywords, many locations or frequent runs." }
  ],
  ex: {
    title: "Run a manual nine-point grid",
    time: "40 minutes",
    intro: "You will produce your first proper local measurement.",
    steps: [
      "Choose nine points: the business address and eight surrounding it, spaced to cover the realistic service area.",
      "Record the coordinates of each.",
      "For each, set the browser location and search the main keyword in a private window, signed out.",
      "Record the position at each point.",
      "Plot the nine numbers on a sketch of the map.",
      "Record the settings and the date so the grid can be repeated identically."
    ],
    deliver: "A completed nine-point grid with recorded coordinates, positions, settings and date."
  },
  chal: {
    title: "Design the measurement specification",
    brief: "Write the grid measurement specification you will use for every business. Specify how the centre point is chosen, how the size and spacing are decided for dense versus sparse markets, how many keywords are tracked and how they are chosen, the frequency, the device, how settings are recorded, and the rule about never changing them. Then specify how you would handle the awkward case where the original settings turn out to be wrong — since changing them destroys comparability but keeping bad settings wastes the measurement.",
    success: [
      "The specification gives decision rules rather than fixed numbers, so it works in different market types.",
      "It includes a settings record format.",
      "You addressed the awkward case of originally wrong settings with a defensible approach."
    ]
  }
},

"9.1.3": {
  t: "Setting up a grid that tells the truth",
  why: "A badly configured grid is worse than none, because it produces confident-looking numbers that are wrong.",
  body: [
    "h: The configuration decisions",
    "n: **Centre point.** Usually the business address. For a service area business, the real base, even though it is hidden.|**Size.** How many points. 5x5 is a sensible default; 3x3 for a quick picture; 7x7 for detail.|**Spacing.** The distance between adjacent points, which with the size determines the total area.|**Keywords.** Which searches to track, and how many.|**Frequency.** How often to run it.|**Device and method.** Mobile, signed out, consistent.",

    "h: Getting the area right",
    "table: Market type ; Suggested spacing ; Total area from a 5x5 || Dense city centre ; 0.5 km ; 2 km square || Urban ; 1 km ; 4 km square || Suburban ; 2 km ; 8 km square || Semi-rural ; 5 km ; 20 km square || Rural ; 10 km ; 40 km square",
    "p: These are starting points. Adjust to the realistic service area established in lesson 7.2.3.",
    "warn: The two configuration errors|Too small, and every point shows a good position because you are only measuring where you are already strong, producing a falsely reassuring picture. Too large, and most points are beyond any realistic reach, producing a falsely alarming one. Match the grid to the area the business genuinely serves.",

    "h: Choosing keywords",
    "l: Track the terms that genuinely produce customers, from lesson 4.4.1.|Three to eight keywords is usually enough for a single-location business.|Include the head term and the two or three most valuable modifiers.|Track each separately, never combined.|Do not track terms the business does not want customers for.|Do not track so many that nobody reads the report.",
    "tip: Fewer keywords, tracked properly|A grid for four keywords that someone actually reads and acts on is worth more than a grid for forty that produces a report nobody opens. Choose the terms that decide the business's revenue and track those well.",

    "h: Frequency",
    "l: Monthly is sufficient for most businesses.|Weekly is justified during an active change or a recovery.|Daily is almost never justified and mostly measures noise.|More frequent measurement tempts reaction to fluctuation, from lesson 7.1.6.|Keep the frequency consistent so the series is comparable.",

    "h: Recording the configuration",
    "n: Centre coordinates.|Grid size and spacing.|Keyword list.|Device and method.|Tool used, or the manual procedure.|Date of first run.|Any change ever made, with the date and reason.",
    "p: This record is what allows anyone, including a future you, to know what the numbers mean.",

    "h: Validating the setup",
    "l: Does the grid cover the area the business actually serves?|Does the centre point match the real business location?|Do the keywords match what customers actually search?|Is the outermost ring genuinely relevant, or is it empty countryside?|Run it twice a few days apart — do the results look plausibly stable?|Does the first run match what you observe manually at two or three points?",
    "ex: The grid that flattered|An agency configured 3x3 grids with 500 metre spacing for suburban clients. Every client appeared in the top three at nearly every point, and every report looked excellent. The grids covered a 1 km square around each business, which is well inside anyone's strong zone. Reconfiguring to 5x5 at 2 km revealed that most clients faded within 2.5 km. The original configuration had not been dishonest, but it had been producing a systematically misleading picture for two years."
  ],
  take: [
    "Configure the centre point, size, spacing, keywords, frequency, device and method deliberately, then record them.",
    "Too small a grid flatters by measuring only where you are strong; too large alarms by measuring beyond any realistic reach.",
    "Three to eight keywords tracked properly beats forty that nobody reads.",
    "Monthly frequency is sufficient for most businesses; more frequent measurement mostly captures noise.",
    "Validate the setup by checking coverage, centre accuracy, keyword relevance and stability across two runs."
  ],
  self: [
    "I can configure a grid appropriately for different market densities.",
    "I know the two configuration errors and their opposite effects.",
    "I choose a small number of revenue-deciding keywords.",
    "I record the full configuration so the numbers remain interpretable."
  ],
  quiz: [
    { q: "A 3x3 grid with 500 metre spacing in a suburban market shows the business in the top three everywhere. What is the likely problem?",
      a: ["The business is doing very well", "The grid is too small and only measures the area where the business is already strong", "The tool is broken", "The keywords are wrong"],
      c: 1,
      why: "A 1 km square around the business is well inside any business's strong zone. The configuration produces a systematically flattering picture." },
    { q: "How many keywords should a single-location business typically track?",
      a: ["One", "Three to eight that genuinely produce customers", "Forty or more", "Every keyword in the industry"],
      c: 1,
      why: "A small set of revenue-deciding terms tracked well produces reports that are read and acted upon; large sets produce reports nobody opens." },
    { q: "What frequency is appropriate for most businesses?",
      a: ["Daily", "Monthly, with weekly during an active change or recovery", "Annually", "Hourly"],
      c: 1,
      why: "Monthly captures genuine movement without measuring noise, and more frequent measurement tempts reaction to normal fluctuation." }
  ],
  ex: {
    title: "Configure and validate a grid",
    time: "40 minutes",
    intro: "You will set up a measurement you can trust for years.",
    steps: [
      "Determine your practice business's realistic service area from lesson 7.2.3.",
      "Choose the centre point, grid size and spacing to match it.",
      "Choose three to six keywords that genuinely produce customers.",
      "Set the frequency, device and method.",
      "Record the full configuration in a settings document.",
      "Run it once and validate against two manual spot checks."
    ],
    deliver: "A fully configured and validated grid with a recorded settings document."
  },
  chal: {
    title: "Rebuild a misconfigured grid",
    brief: "Take a grid configuration that is wrong — too small, wrongly centred, or tracking the wrong keywords — either a real one or the flattering example from this lesson. Diagnose what is wrong and what picture it has been producing. Then design the correct configuration, and write the explanation you would give a client whose reports are about to look considerably worse because the measurement is becoming honest. Include how you would demonstrate that the business has not declined, only the measurement has improved.",
    success: [
      "You diagnosed the specific distortion the misconfiguration produced.",
      "Your client explanation distinguishes a worse measurement from a worse business.",
      "You proposed a way to demonstrate that nothing actually declined."
    ]
  }
},

"9.1.4": {
  t: "Reading grid changes over time",
  why: "A single grid is a snapshot. The comparison between grids is where the information actually is.",
  body: [
    "h: What to compare",
    "n: **Average position** across all points.|**Number of points in the top three.**|**Number of points where you appear at all.**|**The visible radius**, from lesson 7.2.2.|**The shape**, and whether it has stretched in any direction.|**Individual weak points** and whether they improved.",

    "h: Reading a change",
    "table: Change ; Likely meaning || Improvement at outer points only ; Prominence increased, extending radius || Improvement at all points evenly ; A general relevance or prominence gain || Improvement at inner points only ; Competitive change nearby, or a relevance gain in a contested area || Decline at outer points only ; Prominence fell relative to competitors, or a new competitor entered || Decline everywhere, sudden ; Listing-level issue, from lesson 7.1.4 || Shape stretched one way ; Competitive change in the opposite direction || No change ; Nothing moved, which is itself information",
    "tip: The outer ring is the most sensitive indicator|Your position at the edge of your visibility responds first to prominence changes, because that is where the margin is thinnest. Watching the outer ring gives you earlier warning of both gains and losses than the average position does.",

    "h: Separating signal from noise",
    "warn: One grid difference is not a trend|Positions fluctuate. A point moving from 3 to 4 between two monthly grids means very little. What matters is a consistent direction across many points, or a sustained change across several months. Reacting to single-point movements between two grids is the measurement equivalent of the false alarms in lesson 7.1.6.",
    "l: Look at aggregate figures before individual points.|Require a change to persist across two measurements before treating it as real.|Compare against the same month last year where seasonality applies.|Check whether competitors moved too, which indicates an external cause.",

    "h: Annotating the series",
    "p: A grid series becomes far more useful when annotated with what you did:",
    "n: Mark the date of every significant change on the timeline.|Mark known external events: algorithm updates, competitor entries, seasonal peaks.|Mark measurement changes, if any were ever made.|This turns the series into the diagnostic timeline from lesson 3.4.3.",

    "h: Reporting the change",
    "l: Lead with the aggregate figures, not individual points.|Show the two grids side by side so the shape change is visible.|State what changed and what you believe caused it, with an explicit confidence level, from lesson 7.1.5.|State what did not change.|Do not claim credit for changes you cannot attribute.",

    "h: What a flat grid means",
    "p: No change is a legitimate and common result, and it should be reported as such:",
    "l: If you made changes and nothing moved, that is information about those changes.|If you made no changes and nothing moved, the position is stable, which may be fine.|If competitors are gaining and you are flat, you are losing relative position even though your numbers are unchanged.|Always check the relative picture as well as your own numbers.",
    "ex: The flat grid that was actually a decline|A client's grid showed identical figures across six months and the reports described it as stable. Adding competitor tracking showed two competitors had moved from outside the top ten into the top five at most points. The client's absolute position was unchanged while its relative position had weakened substantially. The grid had been reporting accurately and interpreting incompletely."
  ],
  take: [
    "Compare average position, points in the top three, points appearing at all, visible radius and shape.",
    "The outer ring responds first to prominence changes, giving earlier warning than the average.",
    "One grid difference is not a trend — require persistence across two measurements before treating it as real.",
    "Annotate the series with your changes and known external events, turning it into a diagnostic timeline.",
    "A flat grid can conceal a relative decline if competitors are gaining — always check the relative picture."
  ],
  self: [
    "I can read what different patterns of grid change indicate.",
    "I know that the outer ring is the most sensitive indicator.",
    "I require persistence before treating a change as real.",
    "I check relative position, not only my own numbers."
  ],
  quiz: [
    { q: "Which part of a grid gives the earliest warning of a prominence change?",
      a: ["The centre point", "The outer ring, where the margin is thinnest", "The average across all points", "The best-performing point"],
      c: 1,
      why: "The edge of visibility is where small changes in relative prominence tip you in or out, so it moves before the centre or the average does." },
    { q: "A grid shows identical figures across six months. Is this necessarily stability?",
      a: ["Yes", "No — if competitors have improved, the relative position has weakened despite unchanged numbers", "Only in rural markets", "It means the tool is broken"],
      c: 1,
      why: "Absolute position can be flat while relative position declines. Competitor tracking is what reveals this, and reporting stability without it is incomplete." },
    { q: "A single point moves from position 3 to position 4 between two monthly grids. What should you do?",
      a: ["Investigate urgently", "Treat it as normal fluctuation and look at aggregate figures and persistence instead", "Change the category", "Report it as a decline"],
      c: 1,
      why: "Positions fluctuate. Single-point movements between two measurements are noise, and reacting to them causes the same damage as reacting to false alarms." }
  ],
  ex: {
    title: "Compare two grids",
    time: "30 minutes",
    intro: "You will practise extracting information from a comparison.",
    steps: [
      "Run a second grid for your practice business, at least four weeks after the first, using identical settings.",
      "Calculate the average position, points in the top three and points appearing at all, for both.",
      "Compare the visible radius and the shape.",
      "Identify which points changed and in which direction.",
      "Annotate the comparison with anything you changed and any external events.",
      "Write a two-sentence interpretation with an explicit confidence level."
    ],
    deliver: "A two-grid comparison with aggregate figures, shape analysis, annotations and an interpretation."
  },
  chal: {
    title: "Build the annotated series",
    brief: "Create a grid measurement series document for your practice business designed to run for two years. Specify the aggregate figures recorded each month, how changes and external events are annotated, how the visual comparison is presented, how competitor positions are tracked alongside, and the rules for when a change is treated as real. Then write the interpretation guide: what each pattern of change means and what action it implies, so that someone else could read the series correctly.",
    success: [
      "The series records aggregates and competitor positions, not only your own points.",
      "Annotation rules cover both your changes and external events.",
      "The interpretation guide maps patterns to actions rather than only describing them."
    ]
  }
},

"9.1.5": {
  t: "Share of Local Voice and other grid metrics",
  why: "Summary metrics make grids reportable. Understanding what each measures prevents misusing them.",
  body: [
    "h: The common metrics",
    "n: **Average position.** The mean position across all grid points. Simple, but it treats a position of 20 and a position of 21 as equivalent to 1 and 2.|**Average map rank.** The same idea, sometimes calculated differently by different tools.|**Share of Local Voice.** An estimate of what proportion of the available local visibility you hold across the grid.|**Top three percentage.** The proportion of points where you appear in the top three.|**Visibility percentage.** The proportion of points where you appear at all.|**Visible radius.** The distance at which you fall out of the top three.",

    "h: Share of Local Voice",
    "term: Share of Local Voice|A metric estimating the proportion of local search visibility a business holds across a grid, weighting higher positions more heavily than lower ones.",
    "l: It weights position, so first place counts for more than tenth.|It is expressed as a percentage.|Different tools calculate it differently, so figures are not comparable across tools.|It is more informative than average position, because it reflects that top positions matter disproportionately.|It is an estimate and a model, not a measurement of actual traffic.",
    "warn: Do not present modelled metrics as measurements|Share of Local Voice is a useful summary. It is not a count of anything real. Presenting it as though it measures actual visibility received, rather than modelling relative position, overstates what it is. Describe it accurately and it remains genuinely useful.",

    "h: Choosing which to report",
    "table: Metric ; Best for ; Weakness || Top three percentage ; Client reporting, intuitive ; Ignores movement outside the top three || Share of Local Voice ; Tracking overall trend ; Modelled, tool-specific, easily over-interpreted || Average position ; Simple trend ; Treats all positions as equally spaced || Visibility percentage ; Showing reach ; Does not distinguish position 4 from position 19 || Visible radius ; Strategic discussion ; A single figure again, though a more meaningful one",
    "tip: Report two, not five|A report with five ranking metrics is harder to act on than one with two. Choose the top three percentage for intuitive reporting and one trend metric for tracking, and use the others for your own analysis rather than the client's report.",

    "h: The comparison problem",
    "l: Metrics calculated by different tools are not comparable.|Changing tools breaks the series, as changing grid settings does.|Where a tool change is unavoidable, run both in parallel for a period and document the relationship.|Never present a tool change as a performance change.",

    "h: Competitor metrics",
    "p: The same metrics can be calculated for competitors, which is far more informative than your own figures alone:",
    "n: Track the top three competitors' share alongside yours.|The relative movement is the meaningful figure.|Your share rising while a competitor's falls is a genuine gain.|Both rising may indicate a new entrant losing share, or a market change.|Your share flat while competitors rise is the hidden decline from lesson 9.1.4.",
    "ex: The metric that told the real story|A business reported a Share of Local Voice rising from 18 to 22 per cent over six months and considered it a good result. Adding competitor tracking showed the market leader had fallen from 41 to 29 per cent because of a suspension. The client's rise was largely a redistribution rather than a gain, and when the competitor was reinstated much of it reversed. Tracking competitors alongside turned a misleading success into an accurate picture."
  ],
  take: [
    "Common metrics are average position, Share of Local Voice, top three percentage, visibility percentage and visible radius.",
    "Share of Local Voice weights position and is more informative than average position, but it is a model rather than a measurement.",
    "Do not present modelled metrics as counts of anything real — describe them accurately and they remain useful.",
    "Report two metrics rather than five, and use the rest for your own analysis.",
    "Track competitors' metrics alongside yours, because relative movement is what actually matters."
  ],
  self: [
    "I can describe what each common grid metric measures.",
    "I know that Share of Local Voice is a model and describe it accurately.",
    "I report a small number of metrics rather than all of them.",
    "I track competitor metrics alongside my own."
  ],
  quiz: [
    { q: "What is Share of Local Voice?",
      a: ["A count of actual searches received", "A modelled estimate of the proportion of local visibility held, weighting higher positions more heavily", "The number of points you appear at", "Your average position"],
      c: 1,
      why: "It is a weighted model of relative position, not a measurement of traffic. Describing it accurately keeps it useful without overstating it." },
    { q: "Your Share of Local Voice rose from 18 to 22 per cent. What should you check before celebrating?",
      a: ["Nothing, it is a clear gain", "Whether competitors' shares fell, which could mean the rise is a redistribution rather than a gain", "The weather", "Your review count"],
      c: 1,
      why: "A competitor's suspension or decline redistributes share without your position genuinely improving, and the change reverses when they recover." },
    { q: "Why are metrics from different tools not comparable?",
      a: ["They measure different keywords", "Each tool calculates them differently, so a tool change breaks the series just as a settings change does", "Tools are unreliable", "They are comparable"],
      c: 1,
      why: "Calculation methods differ. Presenting figures from a new tool alongside old ones as a trend misrepresents a methodology change as a performance change." }
  ],
  ex: {
    title: "Calculate and compare metrics",
    time: "30 minutes",
    intro: "You will produce the summary figures that make a grid reportable.",
    steps: [
      "From your grid, calculate the top three percentage and the visibility percentage.",
      "Calculate the average position across all points.",
      "Estimate the visible radius.",
      "Calculate the same top three percentage for your two strongest competitors.",
      "Compare your figures against theirs.",
      "Choose the two metrics you would report and justify the choice."
    ],
    deliver: "Calculated metrics for your business and two competitors, with two chosen for reporting and a justification."
  },
  chal: {
    title: "Design the metric reporting standard",
    brief: "Write the standard for how ranking metrics will be reported to clients. Specify which metrics are reported, how each is described in plain language, how competitor figures are included, how modelled metrics are labelled so they are not mistaken for measurements, how tool changes are handled, and what is included for your own analysis but not shown to the client. Then write the two-sentence plain-language description of each reported metric that a client could actually understand.",
    success: [
      "You selected a small reportable set and justified what is excluded.",
      "Modelled metrics are explicitly labelled as estimates.",
      "The plain-language descriptions are genuinely understandable by a non-specialist."
    ]
  }
},

"9.1.6": {
  t: "Rank tracking tools compared",
  why: "Tools differ in what they measure and how. Choosing deliberately prevents both overspending and misleading data.",
  body: [
    "h: The categories",
    "n: **Grid tools.** Purpose-built for local, producing geo-grid maps. The core instrument.|**General rank trackers.** Track positions for keywords, usually from a set location, sometimes with local options.|**Profile performance data.** Google's own figures, covered in module 2. Not a rank tracker but essential context.|**Manual measurement.** Free, viable at small scale, from lesson 9.1.2.",

    "h: What to evaluate",
    "table: Question ; Why it matters || Does it produce genuine geo-grids? ; Single-location tracking is not local measurement || What grid sizes and spacings does it support? ; Must match your market types || How does it calculate its metrics? ; Affects comparability and interpretation || Can it track competitors? ; Relative movement is the meaningful figure || What does it cost per location per month? ; Costs escalate quickly with locations and keywords || Can data be exported? ; Avoids lock-in and preserves your series || Does it track organic as well as local? ; Both matter, from lesson 1.1.2 || How often does it run and can you control that? ; Frequency should match your reporting || Does it cover your country and market? ; Coverage varies substantially",

    "h: What tools cannot do",
    "warn: A tool measures position, not truth|Every tool simulates a search from a location. Results can differ from what a real person at that location sees, because of personalisation, device, timing and the tool's own method. Treat tool data as a consistent, comparable proxy rather than as a perfect record of reality. Its value is in comparability over time, not in absolute accuracy.",
    "l: Tools cannot see personalised results.|They cannot measure what a real customer experienced.|They cannot tell you whether anyone searched at a point.|They cannot attribute causes.|They sometimes fail silently, returning stale or missing data.",

    "h: Cost management",
    "n: Costs usually scale with locations multiplied by keywords multiplied by frequency.|Reducing frequency from weekly to monthly often cuts cost substantially with little information loss.|Reducing keywords to the revenue-deciding set, from lesson 9.1.3, has the same effect.|For a single location, manual measurement may genuinely be sufficient.|For an agency with many clients, a tool becomes necessary quickly.",
    "tip: Calculate the cost per client per month before committing|A tool at a modest monthly price can become expensive across twenty clients with six keywords each running weekly. Work out the actual figure for your portfolio, then decide whether the reporting quality justifies it, and whether reducing frequency would preserve most of the value.",

    "h: Switching tools",
    "l: Switching breaks the comparability of your series, from lesson 9.1.5.|Run both in parallel for at least two months where possible.|Document the relationship between the two tools' figures.|Explain the change to clients before the first report using the new tool.|Never present the resulting difference as a performance change.",

    "h: The minimum viable setup",
    "p: For a single-location business with no budget:",
    "n: A manual nine-point grid, monthly, for three keywords.|Profile performance data, from module 2.|A spreadsheet recording both.|Competitor review counts and positions recorded alongside.",
    "p: This takes about an hour a month and produces genuinely honest measurement. Tools add efficiency and detail, not legitimacy.",
    "ex: The tool that was not needed|A single-location business was paying a substantial monthly fee for a tool tracking forty keywords weekly across three grid sizes. Nobody read the reports. Reducing to five keywords monthly on one grid produced everything anyone actually used, at a fraction of the cost, and the reports began to be read because they were short enough to be."
  ],
  take: [
    "Tool categories are grid tools, general rank trackers, profile performance data and manual measurement.",
    "Evaluate grid support, metric calculation, competitor tracking, cost per location, export, coverage and frequency control.",
    "Tools measure a simulated position, not what a real customer saw — their value is comparability, not absolute accuracy.",
    "Cost scales with locations times keywords times frequency; reducing frequency or keywords often preserves most of the value.",
    "A manual nine-point grid plus profile data takes about an hour a month and is genuinely honest measurement."
  ],
  self: [
    "I can evaluate a rank tracking tool against nine criteria.",
    "I know what tools cannot do and treat their data as a proxy.",
    "I can calculate the real cost per client per month.",
    "I know how to switch tools without misrepresenting the change."
  ],
  quiz: [
    { q: "What is a rank tracking tool's data best understood as?",
      a: ["A perfect record of what customers see", "A consistent, comparable proxy whose value lies in comparability over time rather than absolute accuracy", "A measurement of traffic", "An estimate of revenue"],
      c: 1,
      why: "Tools simulate searches and cannot see personalised results. Their usefulness comes from measuring the same way every time, not from perfect fidelity." },
    { q: "What usually drives rank tracking costs?",
      a: ["The number of reports produced", "Locations multiplied by keywords multiplied by frequency", "The size of the business", "The number of competitors"],
      c: 1,
      why: "These three multiply together. Reducing frequency or trimming to revenue-deciding keywords often cuts cost substantially with little information loss." },
    { q: "What should you do when switching rank tracking tools?",
      a: ["Switch immediately and continue the series", "Run both in parallel for at least two months, document the relationship, and never present the difference as a performance change", "Restart reporting from zero with no explanation", "Avoid telling the client"],
      c: 1,
      why: "Different calculation methods make figures incomparable. Parallel running and explicit documentation prevent a methodology change looking like a performance change." }
  ],
  ex: {
    title: "Evaluate the tooling decision",
    time: "30 minutes",
    intro: "You will make a deliberate decision rather than a default one.",
    steps: [
      "Determine how many locations, keywords and runs per month you actually need.",
      "Calculate what a tool would cost at that scale.",
      "Estimate how long the manual equivalent would take per month.",
      "Evaluate one tool against the nine criteria from this lesson.",
      "Decide: tool or manual, and justify it.",
      "If choosing manual, write the monthly procedure; if a tool, write what you will and will not use it for."
    ],
    deliver: "A tooling decision with cost and time calculations, a criteria evaluation and a written procedure."
  },
  chal: {
    title: "Build the minimum viable measurement system",
    brief: "Design a measurement system for a business with no tool budget that is nonetheless genuinely honest. Specify the grid procedure, the keywords, the frequency, what profile data is recorded, what competitor data is recorded, how it is all stored, how long it takes each month, and what report it produces. Then specify at what point a tool becomes genuinely necessary, with the specific threshold rather than a vague judgement. Finally, test the system by running it once and timing it.",
    success: [
      "The system produces honest measurement without any paid tool.",
      "You specified a concrete threshold at which a tool becomes necessary.",
      "You ran it once and recorded the actual time taken."
    ]
  }
},

"9.1.7": {
  t: "Reporting rankings without misleading anyone",
  why: "Ranking reports are where local SEO most often misleads, usually through carelessness. This lesson covers how to report honestly.",
  body: [
    "h: The ways ranking reports mislead",
    "n: **Changing the measurement point** and presenting the difference as improvement.|**Reporting the best position found** rather than a consistent measure.|**Changing keywords** so that the tracked set improves.|**Changing tools** without disclosure.|**Selecting favourable time comparisons.**|**Presenting modelled metrics as measurements.**|**Attributing improvements to your work without evidence.**|**Omitting the terms that declined.**",
    "warn: Most of these happen through carelessness, not dishonesty|A tool's location setting changes, a keyword is added, a report template is updated. The effect on the client is identical whatever the intent. The protection is a documented method that does not change, from lesson 9.1.3.",

    "h: The honest report structure",
    "table: Section ; Content || Method ; The grid settings, keywords and frequency, stated once and unchanged || This period ; Aggregate figures for every tracked keyword, including declines || Change ; Comparison with last period and with the same period last year || Competitors ; Their figures alongside, for relative context || What we did ; The specific actions taken, with dates || Interpretation ; What we believe caused what, with explicit confidence || Business results ; Calls, enquiries, conversions, from module 3 || Next ; What happens next period",

    "h: Reporting declines",
    "l: Report them plainly and first, from lesson 1.4.6.|Explain what you believe caused them, with a confidence level.|Say what you are doing about it.|Do not bury them among improvements.|Do not omit a keyword because it declined.",

    "h: Attribution discipline",
    "p: This is where most reports overstate:",
    "n: State what you did and when.|State what changed and when.|Where the timing and pattern support a causal link, say so with appropriate confidence, from lesson 7.1.5.|Where several things changed, say that attribution is uncertain.|Where an external factor is a plausible cause, name it.|Never claim credit for a competitor's suspension or a seasonal effect.",
    "tip: Clients trust careful attribution more than confident attribution|A report saying 'positions improved at the outer points, which is consistent with the link and review work, though a competitor also lost its listing in the same period, so we cannot attribute this cleanly' builds far more trust than one claiming a clean win. Knowledgeable clients notice the difference, and unknowledgeable ones notice when careful reports prove reliable over time.",

    "h: Making it readable",
    "l: Lead with the summary, which most people read and nothing else.|Two ranking metrics, not five, from lesson 9.1.5.|A visual grid comparison, which communicates more than numbers.|Business results prominently, since that is what the client cares about.|Keep the whole thing short enough to be read.|Put the detail in an appendix for anyone who wants it.",

    "h: The standing explanation",
    "p: Include, once, in every report or in an accompanying document: what the grid is, why a single number is not used, what the metrics mean, and what the method is. Clients forget, new people join, and the explanation prevents the same conversation repeatedly.",
    "ex: The report that survived scrutiny|An agency's client hired a consultant to review its local SEO reporting. The consultant found consistent grid settings documented for eighteen months, every tracked keyword reported including three that had declined, competitor figures alongside, and attribution statements that explicitly declined to claim credit in two periods where external factors were present. The review concluded the reporting was unusually honest, and the relationship strengthened as a result."
  ],
  take: [
    "Reports mislead through changed measurement points, changed keywords, changed tools, selective comparisons and overstated attribution.",
    "Most of this happens through carelessness, and the protection is a documented method that does not change.",
    "Report declines plainly and first, never omitting a keyword because it fell.",
    "Attribute carefully: state what you did, what changed, and where attribution is uncertain say so.",
    "Careful attribution builds more trust than confident attribution, because it proves reliable over time."
  ],
  self: [
    "I can list the eight ways ranking reports mislead.",
    "I use a documented method that does not change.",
    "I report declines first and never omit them.",
    "I state confidence levels rather than claiming clean attribution."
  ],
  quiz: [
    { q: "Why do most misleading ranking reports occur?",
      a: ["Deliberate dishonesty", "Carelessness — a setting changes, a keyword is added, a tool is switched", "Tool errors", "Client pressure"],
      c: 1,
      why: "The effect on the client is identical whatever the intent, which is why a documented unchanging method is the protection rather than good intentions." },
    { q: "How should a report handle a keyword that declined?",
      a: ["Omit it", "Report it plainly and early, with the likely cause and what you are doing about it", "Replace it with a better-performing keyword", "Mention it in an appendix"],
      c: 1,
      why: "Omitting declines misrepresents performance, and clients who later discover the omission lose all confidence in every previous report." },
    { q: "Why does careful attribution build more trust than confident attribution?",
      a: ["Clients prefer modesty", "Careful reports prove reliable over time, while confident claims are eventually contradicted by events", "It takes less work", "It reduces expectations"],
      c: 1,
      why: "A practitioner who declines to claim credit where evidence is absent is believed when they do claim it, which is a durable and valuable position." }
  ],
  ex: {
    title: "Write an honest ranking report",
    time: "40 minutes",
    intro: "You will produce a report that would survive scrutiny.",
    steps: [
      "Use the eight-section structure from this lesson.",
      "State the method and settings explicitly.",
      "Report every tracked keyword, including any that declined.",
      "Include competitor figures alongside.",
      "Write the interpretation with an explicit confidence level for each claim.",
      "Check the whole report against the eight ways reports mislead."
    ],
    deliver: "A complete ranking report following the honest structure, checked against the misleading practices list."
  },
  chal: {
    title: "Build the reporting standard",
    brief: "Write the reporting standard you will follow for every client. Specify the structure, what is always included, what is never done, how the method is documented, how declines are handled, how attribution confidence is expressed, how competitor data is included, and how long the report may be. Include the standing explanation of the method that appears in or with every report. Then write the protocol for what happens if you discover that a previous report was misleading, including how you would tell the client.",
    success: [
      "The standard includes an explicit list of practices that are never used.",
      "It specifies how attribution confidence is expressed in every claim.",
      "You included a protocol for disclosing a past reporting error to the client."
    ]
  }
}

});
