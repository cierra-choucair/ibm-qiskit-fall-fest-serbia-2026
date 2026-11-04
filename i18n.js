/* ────────────────────────────────────────────────────────────────────────
   Serbian translation layer.

   Three languages: English (en), Serbian Latin (sr) and Serbian Cyrillic
   (sr-cyrl).

   SERBIAN IS AUTHORED IN CYRILLIC, EVERYWHERE — here, in blog/posts.js and
   in blog/blog.js. The Latin version is derived from it by transliteration
   (toLatin below), because Serbian Cyrillic maps one to one onto Serbian
   Latin: Љ is always Lj, Ђ is always Đ, and so on. One dictionary, both
   scripts, no second copy to keep in step.

   The direction matters. Going the other way is lossy — Latin "nadživeti"
   could be н-а-д-ж or н-а-д-џ, and only a human knows which. From Cyrillic
   there is no such question, so the Cyrillic is the source and the Latin
   falls out of it.

   It also means Latin text inside a Serbian string survives untouched:
   "Qiskit-у" has no Cyrillic in "Qiskit", so it transliterates to
   "Qiskit-u" and the brand is never mangled. No list of protected words is
   needed — the two alphabets simply don't collide. The exceptions are the
   handful of names Serbian spells out phonetically (Линктин, Пајтон,
   Сиерра Лунде Шоукаир); they are listed in LATIN_SPELLING so the Latin
   says LinkedIn, Python and Cierra Lunde Choucair rather than a
   transliteration of the Cyrillic.

   Translations: Slobodan Cicic's worksheet of 14 October 2026, applied
   verbatim except where noted in README ("Language toggle"). To fix
   wording, edit the Cyrillic value — the Latin follows automatically.
   The key is the English exactly as the page spells it, whitespace
   collapsed, curly apostrophes and all; anything without a key simply
   stays in English, so a miss is never a broken page.

   Two English strings need two different Serbian ones depending on where
   they sit ("Register", "Quantum 101"). Those elements carry a data-i18n
   attribute naming an explicit key below, which wins over the text lookup.

   Rich content (blog posts) carries its own _sr fields in blog/posts.js
   instead — those paragraphs contain links and bold, so they are swapped
   whole rather than string by string.
   ──────────────────────────────────────────────────────────────────────── */

window.I18N = {
  /* Language names on the toggle itself are not translated. */
  TEXT: {
    /* ── Nav + shared chrome ── */
    "Partners": "Партнери",
    "Program": "Програм",
    "The Challenge": "Изазов",
    "Blog": "Блог",
    "Register": "Пријави се",
    "Qiskit Fall Fest Serbia — home": "Qiskit Fall Fest Serbia — Почетна страница",
    "Page": "Страница",
    "© 2026 Universum Labs · Center for Quantum Technologies of Serbia":
      "© 2026 Universum Labs · Центар за квантне технологије Србије",
    "Part of the Qiskit Fall Fest, with IBM Quantum — built for Serbia’s quantum community.":
      "Део Qiskit Fall Fest-а, уз IBM Quantum — направљено за квантну заједницу Србије.",
    "Center for Quantum Technologies of Serbia, Universum Labs, Quantum Serbia, and IBM Quantum":
      "Центар за квантне технологије Србије, Universum Labs, Квантна Србија и IBM Quantum",

    /* ── Hero ── */
    "Qiskit Fall Fest Serbia — Serbia's First Applied Quantum Hackathon":
      "Qiskit Fall Fest Serbia — Први примењени квантни хакатон у Србији",
    "Serbia’s first applied quantum hackathon": "Први примењени квантни хакатон у Србији",
    "Two Saturdays at the University of Belgrade: a full day of Qiskit Fall Fest lectures, featuring speakers from IBM Quantum, on 21 November. One day to apply quantum with Qiskit at Serbia’s first quantum hackathon on 28 November. Built for all. Registration is open — secure your spot now.":
      "Две суботе на Универзитету у Београду: цео дан предавања у оквиру Qiskit Fall Fest-а, са предавачима из IBM Quantum-а, 21. новембра. Један дан за примену квантног рачунарства уз Qiskit на првом квантном хакатону у Србији, 28. новембра. За све нивое знања. Пријаве су отворене — резервишите своје место.",
    "Register Now": "Пријави се",
    "See the program": "Погледај програм",
    "Qiskit Fall Fest 2026 sticker": "Qiskit Fall Fest 2026 налепница",

    /* ── Partners + organizers ── */
    "The team behind it": "Тим иза догађаја",
    "Partners & organizers": "Партнери и организатори",
    "Center for Quantum Technologies of Serbia": "Центар за квантне технологије Србије",
    "Quantum Serbia": "Квантна Србија",
    "Sanja Djurdjic Mijin": "Сања Ђурђић Мијин",
    "CQT Serbia": "ЦКТС",
    "Slobodan Cicic": "Слободан Чичић",
    "Cierra Lunde Choucair": "Сиерра Лунде Шоукаир",
    "Sandro Bilobrk": "Сандро Билобрк",
    "Sasha Lazarevic": "Саша Лазаревић",
    "Sanja Djurdjic Mijin on LinkedIn": "Сања Ђурђић Мијин на Линктину",
    "Slobodan Cicic on LinkedIn": "Слободан Чичић на Линктину",
    "Cierra Lunde Choucair on LinkedIn": "Сиерра Лунде Шоукаир на Линктину",
    "Sandro Bilobrk on LinkedIn": "Сандро Билобрк на Линктину",
    "Sasha Lazarevic on LinkedIn": "Саша Лазаревић на Линктину",

    /* ── Program ── */
    "The program": "Програм",
    "Learn, Then Apply.": "Научи, па примени",
    "Qiskit Fall Fest Lecture day": "Qiskit Fall Fest — дан предавања",
    "A full day of quantum instruction": "Цео дан квантне наставе",
    "Lectures and hands-on Qiskit sessions at the University of Belgrade, built on IBM’s official learning materials: quantum foundations in the morning, a two-hour Qiskit programming seminar at midday, and two exploratory themes where quantum technology is being applied today. Primarily in person, with a virtual option.":
      "Предавања и практичне Qiskit сесије на Универзитету у Београду, засноване на званичним IBM материјалима за учење: основе квантног рачунарства пре подне, двочасовни семинар о програмирању у Qiskit-у око поднева и две истраживачке теме у којима се квантна технологија већ примењује. Претежно уживо, уз могућност онлајн учешћа.",
    "The hackathon": "Хакатон",
    "One day, small teams, two Serbia-relevant challenge tracks — everything built with Qiskit, one week after the lectures so you arrive ready. Places are limited to around 50 and selected by application — tick the hackathon box when you register below.":
      "Један дан, мали тимови, две категорије изазова релевантне за Србију — све се гради у Qiskit-у, недељу дана после предавања, да дођете спремни. Број места је ограничен на око 50 и бира се на основу пријаве — означите поље за хакатон када се пријавите испод.",

    /* ── Lecture day schedule ── */
    "Lecture day program, Saturday 21 November": "Програм дана предавања, субота 21. новембар",
    "Time": "Време",
    "Session": "Сесија",
    "Led by": "Води",
    "Registration, coffee and technical setup": "Регистрација, кафа и техничка припрема",
    "Organizing team": "Организациони тим",
    "Welcome and Serbia’s quantum opportunity": "Добродошлица и квантна прилика за Србију",
    "Sanja Djurdjic Mijin, Cierra Lunde Choucair, Sasha Lazarevic":
      "Сања Ђурђић Мијин, Сиерра Лунде Шоукаир, Саша Лазаревић",
    "Quantum 101": "Квантно рачунарство 101",
    "Break": "Пауза",
    "All": "Сви",
    "Qiskit 101: Getting started with quantum programming":
      "Qiskit 101: Први кораци у квантном програмирању",
    "Claudia Zendejas-Morales (virtual)": "Claudia Zendejas-Morales (онлајн)",
    "Lunch and networking": "Ручак и повезивање",
    "Quantum Security and Post Quantum Cryptography":
      "Квантна безбедност и постквантна криптографија",
    "Speaker to be confirmed": "Предавач треба да буде потврђен",
    "Quantum Computing and Gaming": "Квантно рачунарство и видео игре",
    "Questions, next steps and closing remarks": "Питања, наредни кораци и затварање",
    "Click a session for details. Speakers and session leads to be confirmed soon.":
      "Кликните на сесију за детаље. Предавачи и водитељи сесија биће ускоро потврђени.",

    /* ── The challenge ── */
    "About the challenge": "О изазову",
    "Challenges designed to serve Serbia's unique ecosystem.":
      "Изазови осмишљени за јединствени екосистем Србије.",
    "Every track starts from a real quantum use case — assessed for technical maturity, matched against its classical baseline, and chosen for its relevance to Serbia’s industry and research strengths. You’ll know exactly what you’re solving, why the problem matters, and which quantum tools apply. No deep quantum training required to enter: each challenge comes with beginner-friendly framing, recommended tools, and clear judging criteria.":
      "Свака категорија полази од стварног квантног случаја употребе — процењеног по технолошкој зрелости, упоређеног са класичним решењем и изабраног по значају за индустрију и истраживање у Србији. Знаћете тачно шта решавате, зашто је проблем важан и који квантни алати се користе. За учешће није потребно дубинско предзнање: сваки изазов долази са објашњењем прилагођеним почетницима, препорученим алатима и јасним критеријумима оцењивања.",
    "The two challenge tracks": "Две категорије изазова",
    "Quantum Computing × Game Development": "Квантно рачунарство × развој видео игара",
    "Explore the intersection of quantum computing and game design. Create games or interactive experiences that use quantum computing, draw inspiration from quantum concepts, or help players understand them through play.":
      "Истражите пресек квантног рачунарства и дизајна игара. Направите игре или интерактивна искуства која користе квантно рачунарство, црпе инспирацију из квантних концепата или помажу играчима да их разумеју кроз игру.",
    "Quantum Security & Telecom": "Квантна безбедност и телекомуникације",
    "Explore how quantum technologies could support secure communications and telecommunications networks. Develop projects that investigate or simulate applications such as quantum key distribution, quantum random number generation, or quantum networking, connecting these ideas to challenges in protecting and transmitting information.":
      "Истражите како квантне технологије могу да подрже безбедну комуникацију и телекомуникационе мреже. Развијте пројекте који истражују или симулирају примене као што су квантна дистрибуција кључева, квантно генерисање случајних бројева или квантно умрежавање, повезујући ове идеје са изазовима заштите и преноса информација.",

    /* ── Registration form ── */
    "Registration": "Пријава",
    "Save your seat.": "Резервишите своје место.",
    "Free, at the University of Belgrade — join in the room or online. Register for the lecture day on 21 November — and raise your hand for the hackathon on 28 November, where places are limited and selected by application.":
      "Бесплатно, на Универзитету у Београду — придружите се у сали или онлајн. Пријавите се за дан предавања 21. новембра и јавите се за хакатон 28. новембра, где је број места ограничен, а учесници се бирају на основу пријаве.",
    "Full name": "Име и презиме",
    "Email": "Имејл",
    "you@university.rs": "vi@fakultet.rs",
    "University / organization": "Универзитет / организација",
    "I am a…": "Ја сам…",
    "Select one": "Изаберите",
    "Undergraduate student": "Студент основних студија",
    "Master’s student": "Студент мастер студија",
    "PhD student": "Докторант",
    "Researcher / academic": "Истраживач / академски радник",
    "Industry professional": "Професионалац из индустрије",
    "Other": "Друго",
    "Experience with quantum / Qiskit": "Искуство у квантном рачунарству / Qiskit-у",
    "New to quantum — starting from zero": "Почетник - крећем од нуле",
    "Some exposure — courses, videos, or tutorials":
      "Нешто искуства - курсеви, видео-снимци или туторијали",
    "Hands-on — I’ve written Qiskit or similar code":
      "Практично искуство - писао/ла сам Qiskit или сличан код",
    "Registering for": "Пријављујем се за",
    "Lecture day · Saturday 21 November": "Дан предавања · субота, 21. новембар",
    "Hackathon application · Saturday 28 November (limited places)":
      "Пријава за хакатон · субота, 28. новембар (ограничен број места)",
    "Anything we should know?": "Нешто што треба да знамо?",
    "Optional": "Опционо",
    "Accessibility needs, dietary notes, questions…": "Потребе приступачности, исхрана, питања…",
    "Your details are used for event organization only.":
      "Ваши подаци се користе искључиво за организацију догађаја.",

    /* ── Session pages — shared ── */
    "← Full program": "← Цео програм",
    "Saturday 21 November 2026": "Субота, 21. новембар 2026",
    "University of Belgrade": "Београдски Универзитет",
    "Speakers": "Предавачи",
    "Register for the lecture day": "Пријави се за дан предавања",
    "← Back to the program": "← Назад на програм",
    "Announced soon": "Ускоро објављујемо",
    "Speakers for this session are confirmed soon — the slot and its content are set. Register and we’ll email you when they’re announced.":
      "Предавачи за ову сесију биће ускоро потврђени — термин и садржај су утврђени. Пријавите се и јавићемо вам имејлом чим буду објављени.",
    "The organizing team": "Организациони тим",

    /* ── Session pages — titles and bodies ── */
    "Welcome and Serbia’s quantum opportunity · Qiskit Fall Fest Serbia 2026":
      "Добродошлица и квантна прилика за Србију · Qiskit Fall Fest Serbia 2026",
    "Discover how Serbia’s research, talent and growing technology community can contribute to the emerging quantum ecosystem. This opening session will explore potential quantum applications and how they could connect with Serbia’s scientific strengths, industries and local needs. It will also examine the role of education, collaboration and experimentation in building local quantum capabilities, and introduce the organizations bringing this initiative together. Participants will hear how the lecture day and upcoming hackathon connect foundational learning with opportunities to develop ideas, meet collaborators and get involved.":
      "Откријте како истраживања, таленат и растућа технолошка заједница у Србији могу да допринесу квантном екосистему у настајању. Ова уводна сесија истражује могуће примене квантних технологија и начине на које се оне повезују са научним снагама, индустријама и локалним потребама Србије. Такође се бави улогом образовања, сарадње и експериментисања у изградњи домаћих квантних капацитета и представља организације које стоје иза ове иницијативе. Учесници ће чути како дан предавања и предстојећи хакатон повезују основно знање са приликама да развију идеје, упознају сараднике и укључе се.",
    "Quantum 101 · Qiskit Fall Fest Serbia 2026":
      "Квантно рачунарство 101 · Qiskit Fall Fest Serbia 2026",
    "What makes a quantum computer different from a classical computer? This introductory session will explore qubits, superposition, entanglement and measurement, building a foundation for understanding how quantum computation works. Participants will learn how quantum gates and circuits bring these concepts together, while gaining perspective on the possibilities and limitations of quantum computing. The session is designed to make the core ideas approachable for those encountering the subject for the first time.":
      "По чему се квантни рачунар разликује од класичног? Ова уводна сесија истражује кјубите, суперпозицију, сплетеност и мерење и гради основу за разумевање квантног рачунања. Учесници ће научити како квантна логичка кола и квантна кола повезују ове концепте, уз увид у могућности и ограничења квантног рачунарства. Сесија је осмишљена тако да кључне идеје буду приступачне онима који се са темом сусрећу по први пут.",
    "Qiskit 101: Getting started with quantum programming · Qiskit Fall Fest Serbia 2026":
      "Qiskit 101: Први кораци у квантном програмирању · Qiskit Fall Fest Serbia 2026",
    "Explore how the ideas behind quantum computing translate into code using Qiskit, an open-source toolkit for quantum programming. This introductory session will walk through the building blocks of quantum circuits and explain how to construct, run and interpret simple examples. Participants will become familiar with the basic workflow of quantum programming and how measurement results relate to the circuits they create. The session will provide a starting point for further learning and experimentation ahead of the hackathon.":
      "Истражите како се идеје квантног рачунарства преводе у код уз Qiskit, алат отвореног кода за квантно програмирање. Ова уводна сесија пролази кроз градивне елементе квантних кола и објашњава како да их саставите, покренете и протумачите на једноставним примерима. Учесници ће се упознати са основним током рада у квантном програмирању и са тим како се резултати мерења односе на кола која праве. Сесија је полазна тачка за даље учење и експериментисање пред хакатон.",
    "Joining virtually": "Учествује онлајн",
    "Quantum Security and Post Quantum Cryptography · Qiskit Fall Fest Serbia 2026":
      "Квантна безбедност и постквантна криптографија · Qiskit Fall Fest Serbia 2026",
    "How does quantum computing change the way we think about protecting information? This session will introduce the risks that future quantum computers could pose to widely used cryptographic systems and explain the purpose of post-quantum cryptography. Participants will explore the distinction between quantum approaches to secure communication and cryptographic algorithms designed to resist quantum attacks on classical computers. The discussion will connect these ideas to practical security challenges and applications in telecommunications.":
      "Како квантно рачунарство мења начин на који размишљамо о заштити информација? Ова сесија представља ризике које будући квантни рачунари могу да донесу широко коришћеним криптографским системима и објашњава сврху постквантне криптографије. Учесници ће истражити разлику између квантних приступа безбедној комуникацији и криптографских алгоритама направљених да одоле квантним нападима, а који раде на класичним рачунарима. Дискусија повезује ове идеје са практичним безбедносним изазовима и применама у телекомуникацијама.",
    "Quantum Computing and Gaming · Qiskit Fall Fest Serbia 2026":
      "Квантно рачунарство и видео игре · Qiskit Fall Fest Serbia 2026",
    "Games offer a creative way to explore quantum computing and make unfamiliar concepts tangible. This session will examine how quantum ideas such as superposition, measurement and entanglement can inspire game mechanics and interactive experiences. Participants will explore the possibilities of using quantum computation within games, alongside using games to explain quantum concepts.":
      "Игре су креативан начин да се истражи квантно рачунарство и да непознати концепти постану опипљиви. Ова сесија разматра како квантне идеје попут суперпозиције, мерења и сплетеност могу да инспиришу механике игара и интерактивна искуства. Учесници ће истражити могућности коришћења квантног рачунања у играма, као и коришћења игара за објашњавање квантних концепата.",
    "Questions, next steps and closing remarks · Qiskit Fall Fest Serbia 2026":
      "Питања, наредни кораци и затварање · Qiskit Fall Fest Serbia 2026",
    "Bring your questions and connect the day’s discussions to your own interests and ideas. The organizing team will outline the next steps for the November 28 hackathon, including the security and gaming tracks, preparation resources and opportunities to connect with teammates. Participants will leave with a clearer sense of how to continue learning and prepare to turn an initial idea into a project.":
      "Дођите са својим питањима и повежите теме дана са сопственим интересовањима и идејама. Организациони тим представиће наредне кораке за хакатон 28. новембра, укључујући категорије безбедности и игара, материјале за припрему и прилике да пронађете партнере. Учесници одлазе са јаснијом представом о томе како да наставе да уче и како да почетну идеју претворе у пројекат.",

    /* ── Blog ── */
    "Blog — Qiskit Fall Fest Serbia 2026": "Блог — Qiskit Fall Fest Serbia 2026",
    "The blog": "Блог",
    "Dispatches from the road to November.": "Записи на путу ка новембру.",
    "Announcements, speaker news, and Qiskit resources — everything leading up to the two Saturdays in Belgrade.":
      "Најаве, вести о предавачима и Qiskit материјали — све што претходи двема суботама у Београду.",
    "Read →": "Прочитај →",
    "← The blog": "← Блог",
    "← All posts": "← Сви текстови",

    /* ── Explicit keys, page parts and states not in the worksheet ── */
    "Serbia’s": "Српски",
    "Sat": "суб",
    "Nov": "нов",
    "badge.day.21": "21.",
    "badge.day.28": "28.",
    "form.submit": "Пријавите се",
    "session.quantum-101.title": "Увод у квантно рачунарство",
    "Pick at least one: the lecture day, the hackathon application, or both.":
      "Изаберите бар једно: дан предавања, пријаву за хакатон или обоје.",
    "Sending…": "Шаље се…",
    "You’re registered — see you in Belgrade. Watch your inbox for confirmation and event details.":
      "Пријава је примљена — видимо се у Београду. Потврда и детаљи стижу на имејл.",
    "You’re registered. Watch your inbox for confirmation.":
      "Пријава је примљена. Потврда стиже на имејл.",
    "Something interfered. Try again in a moment.":
      "Дошло је до грешке. Покушајте поново за тренутак.",
    "Registration isn’t connected to a backend yet — add your form endpoint to data-endpoint in index.html (see README).":
      "Пријава још није повезана са сервером — додајте адресу форме у data-endpoint у index.html (види README).",
    "Loading…": "Учитавање…",
    "Session not found": "Сесија није пронађена",
    "Loading posts…": "Учитавање текстова…",
    "No posts yet — the first dispatch lands soon.": "Још нема текстова — први стиже ускоро.",
    "Couldn’t load posts right now — try a refresh.":
      "Тренутно није могуће учитати текстове — освежите страницу.",
    "Post not found": "Текст није пронађен",
    "Couldn’t load this post": "Није могуће учитати овај текст",
    "404 · Measurement collapsed": "404 · Мерење је колапсирало",
    "This page isn’t in any state we can observe.":
      "Ова страница није ни у једном стању које можемо да измеримо.",
    "The link may be old, or the page moved. Everything about the two Saturdays in Belgrade is a click away.":
      "Линк је можда застарео или је страница премештена. Све о двема суботама у Београду је на један клик.",
    "Read the blog →": "Прочитај блог →",
    "Page not found": "Страница није пронађена",
    "Page not found — Qiskit Fall Fest Serbia 2026":
      "Страница није пронађена — Qiskit Fall Fest Serbia 2026",
    "Where to go": "Куда даље",
    "Post": "Текст",
    "Posts": "Текстови",
    "Post content": "Садржај текста",
    "Session details": "Детаљи сесије",
    "Blog navigation": "Навигација блога",
  },
};

(function () {
  "use strict";

  var KEY = "qff-lang";
  var LANGS = ["en", "sr", "sr-cyrl"];
  var ATTRS = ["placeholder", "aria-label", "title", "alt"];
  var saved = [];          // originals, so switching back needs no reload
  var current = "en";

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }
  function dict() { return (window.I18N && window.I18N.TEXT) || {}; }

  /* ──────── Serbian Cyrillic → Latin ────────
     Strictly one to one, so this is a lookup and nothing more. Characters
     that aren't Serbian Cyrillic — Latin brand names, digits, punctuation,
     URLs, code — fall through untouched. */

  var C2L = {
    "А":"A","Б":"B","В":"V","Г":"G","Д":"D","Ђ":"Đ","Е":"E","Ж":"Ž","З":"Z","И":"I",
    "Ј":"J","К":"K","Л":"L","Љ":"Lj","М":"M","Н":"N","Њ":"Nj","О":"O","П":"P","Р":"R",
    "С":"S","Т":"T","Ћ":"Ć","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Č","Џ":"Dž","Ш":"Š",
    "а":"a","б":"b","в":"v","г":"g","д":"d","ђ":"đ","е":"e","ж":"ž","з":"z","и":"i",
    "ј":"j","к":"k","л":"l","љ":"lj","м":"m","н":"n","њ":"nj","о":"o","п":"p","р":"r",
    "с":"s","т":"t","ћ":"ć","у":"u","ф":"f","х":"h","ц":"c","ч":"č","џ":"dž","ш":"š"
  };

  /* Names Serbian writes out phonetically in Cyrillic but that keep their
     own spelling in Latin — foreign brands, and people whose name simply
     isn't a Serbian word. Transliterating these back would invent a
     spelling ("Шоукаир" → "Šoukair"), so the Latin is given here instead.
     The capture takes any Cyrillic case ending, so "Линктину" becomes
     "LinkedIn-u" — the hyphen style used site-wide. Longest first, so a
     full name wins over any part of it. */
  var LATIN_SPELLING = [
    ["Сиерра Лунде Шоукаир", "Cierra Lunde Choucair"],
    ["Линктин", "LinkedIn"],
    ["Пајтон", "Python"],
  ];

  function isUpper(ch) {
    return !!ch && ch !== ch.toLowerCase() && ch === ch.toUpperCase();
  }

  function letters(text) {
    var out = "";
    for (var i = 0; i < text.length; i++) {
      var ch = text.charAt(i);
      var lat = C2L[ch];
      if (lat === undefined) { out += ch; continue; }
      // Љ is "Lj" in Ljubav but "LJ" in LJUBAV
      if (lat.length === 2 && isUpper(lat.charAt(0)) && isUpper(text.charAt(i + 1))) {
        lat = lat.toUpperCase();
      }
      out += lat;
    }
    return out;
  }

  function toLatin(text) {
    if (!text) return text;
    for (var i = 0; i < LATIN_SPELLING.length; i++) {
      text = text.replace(
        new RegExp(LATIN_SPELLING[i][0] + "([\\u0400-\\u04FF]*)", "g"),
        (function (name) {
          return function (_, ending) {
            return name + (ending ? "-" + letters(ending) : "");
          };
        })(LATIN_SPELLING[i][1])
      );
    }
    return letters(text);
  }

  /* A Serbian string in the script the reader asked for. */
  function localize(value) {
    return current === "sr" ? toLatin(value) : value;
  }

  /* ──────── Applying ──────── */

  function textWalker(root, skip) {
    return document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || p.nodeName === "SCRIPT" || p.nodeName === "STYLE") return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest("[data-no-i18n]")) return NodeFilter.FILTER_REJECT;
        // text already set from an explicit data-i18n key
        if (skip && skip.length && p.closest && skip.indexOf(p.closest("[data-i18n]")) >= 0) {
          return NodeFilter.FILTER_REJECT;
        }
        return n.nodeValue && n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });
  }

  function translate(root) {
    var D = dict();

    /* Explicit keys first: data-i18n names an entry directly, for the few
       places where the same English needs two different Serbian strings.
       An element whose key isn't in the dictionary falls through to the
       ordinary text lookup below. */
    var keyed = [];
    var marked = root.querySelectorAll ? root.querySelectorAll("[data-i18n]") : [];
    Array.prototype.forEach.call(marked, function (el) {
      var tr = D[el.getAttribute("data-i18n")];
      if (!tr) return;
      saved.push({ el: el, text: true, value: el.textContent });
      el.textContent = localize(tr);
      keyed.push(el);
    });

    var walker = textWalker(root, keyed);
    var node;
    while ((node = walker.nextNode())) {
      var raw = node.nodeValue;
      var tr = D[norm(raw)];
      if (!tr) continue;
      saved.push({ node: node, value: raw });
      node.nodeValue = raw.match(/^\s*/)[0] + localize(tr) + raw.match(/\s*$/)[0];
    }

    ATTRS.forEach(function (attr) {
      var els = root.querySelectorAll ? root.querySelectorAll("[" + attr + "]") : [];
      Array.prototype.forEach.call(els, function (el) {
        var v = el.getAttribute(attr);
        var t = v && D[norm(v)];
        if (!t) return;
        saved.push({ el: el, attr: attr, value: v });
        el.setAttribute(attr, localize(t));
      });
    });

    var pageTitle = D[norm(document.title)];
    if (pageTitle) {
      saved.push({ title: true, value: document.title });
      document.title = localize(pageTitle);
    }
  }

  /* Content already written in Serbian Cyrillic (blog posts) — put the
     whole subtree into the reader's script rather than looking strings up. */
  function transliterateTree(root) {
    if (current !== "sr" || !root) return;
    var walker = textWalker(root);
    var node;
    while ((node = walker.nextNode())) {
      node.nodeValue = toLatin(node.nodeValue);
    }
  }

  function restore() {
    for (var i = saved.length - 1; i >= 0; i--) {
      var s = saved[i];
      if (s.title) document.title = s.value;
      else if (s.node) s.node.nodeValue = s.value;
      else if (s.text) s.el.textContent = s.value;
      else s.el.setAttribute(s.attr, s.value);
    }
    saved = [];
  }

  function setLang(lang, persist) {
    current = LANGS.indexOf(lang) >= 0 ? lang : "en";
    document.documentElement.lang =
      current === "sr" ? "sr-Latn" : current === "sr-cyrl" ? "sr-Cyrl" : "en";
    restore();
    if (current !== "en") translate(document.body);

    var buttons = document.querySelectorAll(".lang-toggle [data-lang]");
    Array.prototype.forEach.call(buttons, function (el) {
      var on = el.getAttribute("data-lang") === current;
      el.classList.toggle("is-active", on);
      el.setAttribute("aria-pressed", on ? "true" : "false");
    });

    if (persist) { try { localStorage.setItem(KEY, current); } catch (e) {} }
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
  }

  /* Re-apply after content is rendered by people.js / sessions / blog, or
     after a script writes fresh English text (pass that element as root). */
  window.applyI18n = function (root) { if (current !== "en") translate(root || document.body); };
  window.i18nTransliterate = function (el) { transliterateTree(el); };
  /* An already-Serbian string, in the current script — for text that never
     reaches the DOM as a node, such as document.title. */
  window.i18nScript = function (text) { return current === "en" ? text : localize(text); };
  window.i18nToLatin = toLatin;
  window.currentLang = function () { return current; };

  function init() {
    var param = new URLSearchParams(location.search).get("lang");
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) {}
    setLang(param || stored || "en", Boolean(param));

    var toggle = document.querySelector(".lang-toggle");
    if (!toggle) return;
    toggle.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-lang]");
      if (btn) setLang(btn.getAttribute("data-lang"), true);
    });
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
