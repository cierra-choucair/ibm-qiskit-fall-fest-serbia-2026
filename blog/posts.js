/* ────────────────────────────────────────────────────────────────────────
   Local post store — the blog's content until the WordPress backend is
   connected (see blog.js). To publish a post now, add an entry at the TOP
   of this array and push; the listing and post pages render from it.

   Fields: slug (url-safe, unique), title, date (YYYY-MM-DD), excerpt
   (plain text, one or two sentences), html (the post body — headings
   start at <h2>).

   Serbian: title_sr, excerpt_sr and html_sr hold the post in CYRILLIC.
   The Latin version is transliterated from it at render time (see
   i18n.js), so write Serbian once, in Cyrillic, and both scripts follow.
   Latin inside those strings — Qiskit, IBM, href="…", <code> — is left
   alone by the transliterator, so markup and brand names are safe.
   ──────────────────────────────────────────────────────────────────────── */

window.LOCAL_POSTS = [
  {
    slug: "announcing-qiskit-fall-fest-serbia-2026",
    title: "Announcing Qiskit Fall Fest Serbia 2026",
    date: "2026-08-23",
    excerpt:
      "Two Saturdays in Belgrade this November: a full day of Qiskit lectures and labs, then Serbia's first applied quantum hackathon. Registration is open.",
    html: [
      "<p>We're excited to announce that Serbia is joining this year's Qiskit Fall Fest — IBM Quantum's annual, worldwide series of community-led quantum events — with two Saturdays in Belgrade this November.</p>",
      "<p>On <strong>Saturday 21 November</strong>, a full day of instruction at the University of Belgrade, in person or online: quantum foundations in the morning, a two-hour Qiskit programming seminar at midday, with speakers from IBM Quantum and the Serbian quantum community. No quantum background required — the day is designed to take you from zero to running real circuits.</p>",
      "<p>On <strong>Saturday 28 November</strong>, Serbia's first applied quantum hackathon: one day, small teams, and challenge tracks built on real quantum use cases relevant to Serbia. Places are limited to around fifty and selected by application.</p>",
      "<p>The event is organized by the Center for Quantum Technologies of Serbia and Universum Labs, as part of the IBM Qiskit Fall Fest program.</p>",
      "<p><a href=\"/#register\">Registration is open</a> — the lecture day is free and open, and the same form lets you raise your hand for the hackathon. Challenge tracks, speakers, and the exact room are announced here and by email as they're confirmed.</p>",
    ].join("\n"),
    title_sr: "Најава: Qiskit Fall Fest Србија 2026",
    excerpt_sr:
      "Две суботе у Београду овог новембра: цео дан Qiskit предавања и вежби, па први примењени квантни хакатон у Србији. Пријаве су отворене.",
    html_sr: [
      "<p>Са задовољством објављујемо да се Србија ове године придружује Qiskit Fall Fest-у — годишњој светској серији квантних догађаја које води заједница окупљена око IBM Quantum-а — са две суботе у Београду овог новембра.</p>",
      "<p>У <strong>суботу, 21. новембра</strong>, цео дан наставе на Универзитету у Београду, уживо или онлајн: основе квантног рачунарства пре подне и двочасовни семинар о програмирању у Qiskit-у око поднева, са предавачима из IBM Quantum-а и српске квантне заједнице. Предзнање из квантног рачунарства није потребно — дан је осмишљен тако да вас води од нуле до покретања правих квантних кола.</p>",
      "<p>У <strong>суботу, 28. новембра</strong>, одржава се први примењени квантни хакатон у Србији: један дан, мали тимови и категорије изазова засноване на стварним квантним случајевима употребе значајним за Србију. Број места је ограничен на око педесет, а учесници се бирају на основу пријаве.</p>",
      "<p>Догађај организују Центар за квантне технологије Србије и Universum Labs, у оквиру програма IBM Qiskit Fall Fest.</p>",
      "<p><a href=\"/#register\">Пријаве су отворене</a> — дан предавања је бесплатан и отворен за све, а истом пријавом се јављате и за хакатон. Категорије изазова, предавачи и тачна сала објављују се овде и путем имејла чим буду потврђени.</p>",
    ].join("\n"),
  },
  {
    slug: "getting-ready-your-qiskit-starter-kit",
    title: "Getting ready for November: your Qiskit starter kit",
    date: "2026-08-23",
    excerpt:
      "Everything at the Fall Fest and the hackathon runs on Qiskit, and it's free and open source. Here's where to start before November.",
    html: [
      "<p>Everything at the Fall Fest and the hackathon runs on <strong>Qiskit</strong>, IBM's open-source framework for quantum computing. It's free, it's Python, and you don't need any quantum background to take the first steps — that's exactly what the lecture day is for. But if you'd like to arrive warmed up, here's a short list.</p>",
      "<h2>Start here</h2>",
      "<ul>",
      "<li><a href=\"https://learning.quantum.ibm.com\" target=\"_blank\" rel=\"noopener noreferrer\">IBM Quantum Learning</a> — free, structured courses from \"what is a qubit\" through variational algorithms, with runnable notebooks.</li>",
      "<li><a href=\"https://docs.quantum.ibm.com\" target=\"_blank\" rel=\"noopener noreferrer\">Qiskit documentation</a> — installation, tutorials, and the API reference you'll live in during the hackathon.</li>",
      "<li><a href=\"https://github.com/Qiskit/qiskit\" target=\"_blank\" rel=\"noopener noreferrer\">Qiskit on GitHub</a> — the framework itself; <code>pip install qiskit</code> is all it takes.</li>",
      "</ul>",
      "<h2>What to aim for</h2>",
      "<p>If you can build a small circuit, run it on a simulator, and read the results, you're ahead of the curve — the Qiskit 101 seminar on lecture day picks up from there. And if none of those words mean anything yet: come anyway. The morning sessions assume nothing.</p>",
      "<p>Questions before then? Use the notes field when you <a href=\"/#register\">register</a> — we read everything.</p>",
    ].join("\n"),
    title_sr: "Припрема за новембар: ваш Qiskit почетни пакет",
    excerpt_sr:
      "Све на Fall Fest-у и хакатону ради се у Qiskit-у, који је бесплатан и отвореног кода. Ево одакле да кренете пре новембра.",
    html_sr: [
      "<p>Све на Fall Fest-у и хакатону ради се у <strong>Qiskit-у</strong>, IBM-овој библиотеци отвореног кода за квантно рачунарство. Бесплатан је, ради се у Пајтону и није вам потребно никакво квантно предзнање за прве кораке — управо томе служи дан предавања. Али ако желите да дођете припремљени, ево кратког списка.</p>",
      "<h2>Почните одавде</h2>",
      "<ul>",
      "<li><a href=\"https://learning.quantum.ibm.com\" target=\"_blank\" rel=\"noopener noreferrer\">IBM Quantum Learning</a> — бесплатни, структурирани курсеви од „шта је кјубит” до варијационих алгоритама, са свескама које можете покренути.</li>",
      "<li><a href=\"https://docs.quantum.ibm.com\" target=\"_blank\" rel=\"noopener noreferrer\">Qiskit документација</a> — инсталација, туторијали и API референца коју ћете користити током хакатона.</li>",
      "<li><a href=\"https://github.com/Qiskit/qiskit\" target=\"_blank\" rel=\"noopener noreferrer\">Qiskit на GitHub-у</a> — сама библиотека; довољно је <code>pip install qiskit</code>.</li>",
      "</ul>",
      "<h2>Чему тежити</h2>",
      "<p>Ако умете да направите мало квантно коло, покренете га на симулатору и прочитате резултате, у предности сте — семинар Qiskit 101 на дану предавања наставља одатле. А ако вам ове речи још ништа не значе: свеједно дођите. Преподневне сесије не претпостављају никакво предзнање.</p>",
      "<p>Имате питања пре тога? Искористите поље за напомене када се <a href=\"/#register\">пријавите</a> — читамо све.</p>",
    ].join("\n"),
  },
];
