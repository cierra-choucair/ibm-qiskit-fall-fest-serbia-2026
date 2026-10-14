/* ────────────────────────────────────────────────────────────────────────
   Serbian translation layer.

   Everything on the site is authored in English; this file holds the
   Serbian (Latin script) equivalents, keyed by the exact English string.
   On load it reads the saved language (or ?lang=sr), and the EN/SR
   toggle in the nav bar switches instantly — no reload, because the
   English originals are kept in memory and restored on the way back.

   To fix or add a translation, edit TEXT below: the key is the English
   as it appears on the page, whitespace-collapsed. Anything without a
   key simply stays in English, so a miss is never a broken page.

   Rich content (blog posts) carries its own *_sr fields in
   blog/posts.js instead — those paragraphs contain links and bold, so
   they are swapped whole rather than string by string.
   ──────────────────────────────────────────────────────────────────────── */

window.I18N = {
  /* Language name shown on the toggle is not translated. */
  TEXT: {
    /* ── Nav + shared chrome ── */
    "Partners": "Partneri",
    "Program": "Program",
    "The Challenge": "Izazov",
    "Blog": "Blog",
    "Register": "Prijavi se",
    "Qiskit Fall Fest Serbia — home": "Qiskit Fall Fest Srbija — početna",
    "Center for Quantum Technologies of Serbia, Universum Labs, Quantum Serbia, and IBM Quantum":
      "Centar za kvantne tehnologije Srbije, Universum Labs, Quantum Serbia i IBM Quantum",
    "© 2026 Universum Labs · Center for Quantum Technologies of Serbia":
      "© 2026. Universum Labs · Centar za kvantne tehnologije Srbije",
    "Part of the Qiskit Fall Fest, with IBM Quantum — built for Serbia’s quantum community.":
      "Deo Qiskit Fall Fest-a, uz IBM Quantum — napravljeno za kvantnu zajednicu Srbije.",

    /* ── Hero ── */
    "Serbia’s": "Srpski",
    "Qiskit Fall Fest": "Qiskit Fall Fest",
    "Two Saturdays at the University of Belgrade: a full day of Qiskit Fall Fest lectures, featuring speakers from IBM Quantum, on 21 November. One day to apply quantum with Qiskit at Serbia’s first quantum hackathon on 28 November. Built for all. Registration is open — secure your spot now.":
      "Dve subote na Univerzitetu u Beogradu: ceo dan predavanja u okviru Qiskit Fall Fest-a, sa predavačima iz IBM Quantum-a, 21. novembra. Jedan dan za primenu kvantnog računarstva uz Qiskit na prvom kvantnom hakatonu u Srbiji, 28. novembra. Za sve nivoe znanja. Prijave su otvorene — rezervišite svoje mesto.",
    "Register Now": "Prijavi se",
    "See the program": "Pogledaj program",
    "Qiskit Fall Fest 2026 sticker": "Qiskit Fall Fest 2026 nalepnica",

    /* ── Partners + organizers ── */
    "The team behind it": "Tim iza događaja",
    "Partners & organizers": "Partneri i organizatori",
    "The organizers": "Organizatori",
    "Center for Quantum Technologies of Serbia": "Centar za kvantne tehnologije Srbije",
    "Universum Labs": "Universum Labs",
    "Quantum Serbia": "Quantum Serbia",
    "IBM Quantum": "IBM Quantum",
    "CQT Serbia": "CQT Srbija",
    "IBM Qiskit Advocate": "IBM Qiskit Advocate",

    /* ── Program ── */
    "The program": "Program",
    "Learn, Then Apply.": "Nauči, pa primeni.",
    "Sat": "Sub",
    "Nov": "nov",
    "Qiskit Fall Fest Lecture day": "Qiskit Fall Fest — dan predavanja",
    "A full day of quantum instruction": "Ceo dan kvantne nastave",
    "Lectures and hands-on Qiskit sessions at the University of Belgrade, built on IBM’s official learning materials: quantum foundations in the morning, a two-hour Qiskit programming seminar at midday, and two exploratory themes where quantum technology is being applied today. Primarily in person, with a virtual option.":
      "Predavanja i praktične Qiskit sesije na Univerzitetu u Beogradu, zasnovane na zvaničnim IBM materijalima za učenje: osnove kvantnog računarstva pre podne, dvočasovni seminar o programiranju u Qiskit-u oko podneva i dve istraživačke teme u kojima se kvantna tehnologija već primenjuje. Pretežno uživo, uz mogućnost onlajn učešća.",
    "The hackathon": "Hakaton",
    "Serbia’s first applied quantum hackathon": "Prvi primenjeni kvantni hakaton u Srbiji",
    "One day, small teams, two Serbia-relevant challenge tracks — everything built with Qiskit, one week after the lectures so you arrive ready. Places are limited to around 50 and selected by application — tick the hackathon box when you register below.":
      "Jedan dan, mali timovi, dve kategorije izazova relevantne za Srbiju — sve se gradi u Qiskit-u, nedelju dana posle predavanja, da dođete spremni. Broj mesta je ograničen na oko 50 i bira se na osnovu prijave — označite polje za hakaton kada se prijavite ispod.",
    "Click a session for details. Speakers and session leads to be confirmed soon.":
      "Kliknite na sesiju za detalje. Predavači i voditelji sesija biće uskoro potvrđeni.",
    "Lecture day program, Saturday 21 November": "Program dana predavanja, subota 21. novembar",

    /* Table */
    "Time": "Vreme",
    "Session": "Sesija",
    "Led by": "Vodi",
    "Registration, coffee and technical setup": "Registracija, kafa i tehnička priprema",
    "Welcome and Serbia’s quantum opportunity": "Dobrodošlica i kvantna prilika za Srbiju",
    "Quantum 101": "Kvantno računarstvo 101",
    "Break": "Pauza",
    "Qiskit 101: Getting started with quantum programming":
      "Qiskit 101: Prvi koraci u kvantnom programiranju",
    "Lunch and networking": "Ručak i umrežavanje",
    "Quantum Security and Post Quantum Cryptography": "Kvantna bezbednost i postkvantna kriptografija",
    "Quantum Computing and Gaming": "Kvantno računarstvo i igre",
    "Questions, next steps and closing remarks": "Pitanja, naredni koraci i zatvaranje",
    "Organizing team": "Organizacioni tim",
    "All": "Svi",
    "Speaker to be confirmed": "Predavač se potvrđuje",
    "Claudia Zendejas-Morales (virtual)": "Claudia Zendejas-Morales (onlajn)",

    /* ── Challenge ── */
    "About the challenge": "O izazovu",
    "Challenges designed to serve Serbia's unique ecosystem.":
      "Izazovi osmišljeni za jedinstveni ekosistem Srbije.",
    "Every track starts from a real quantum use case — assessed for technical maturity, matched against its classical baseline, and chosen for its relevance to Serbia’s industry and research strengths. You’ll know exactly what you’re solving, why the problem matters, and which quantum tools apply. No deep quantum training required to enter: each challenge comes with beginner-friendly framing, recommended tools, and clear judging criteria.":
      "Svaka kategorija polazi od stvarnog kvantnog slučaja upotrebe — procenjenog po tehnološkoj zrelosti, upoređenog sa klasičnim rešenjem i izabranog po značaju za industriju i istraživanje u Srbiji. Znaćete tačno šta rešavate, zašto je problem važan i koji kvantni alati se koriste. Za učešće nije potrebno dubinsko predznanje: svaki izazov dolazi sa objašnjenjem prilagođenim početnicima, preporučenim alatima i jasnim kriterijumima ocenjivanja.",
    "The two challenge tracks": "Dve kategorije izazova",
    "Quantum Computing × Game Development": "Kvantno računarstvo × razvoj igara",
    "Explore the intersection of quantum computing and game design. Create games or interactive experiences that use quantum computing, draw inspiration from quantum concepts, or help players understand them through play.":
      "Istražite presek kvantnog računarstva i dizajna igara. Napravite igre ili interaktivna iskustva koja koriste kvantno računarstvo, crpe inspiraciju iz kvantnih koncepata ili pomažu igračima da ih razumeju kroz igru.",
    "Quantum Security & Telecom": "Kvantna bezbednost i telekomunikacije",
    "Explore how quantum technologies could support secure communications and telecommunications networks. Develop projects that investigate or simulate applications such as quantum key distribution, quantum random number generation, or quantum networking, connecting these ideas to challenges in protecting and transmitting information.":
      "Istražite kako kvantne tehnologije mogu da podrže bezbednu komunikaciju i telekomunikacione mreže. Razvijte projekte koji istražuju ili simuliraju primene kao što su kvantna distribucija ključeva, kvantno generisanje slučajnih brojeva ili kvantno umrežavanje, povezujući ove ideje sa izazovima zaštite i prenosa informacija.",

    /* ── Registration ── */
    "Registration": "Prijava",
    "Save your seat.": "Rezervišite svoje mesto.",
    "Free, at the University of Belgrade — join in the room or online. Register for the lecture day on 21 November — and raise your hand for the hackathon on 28 November, where places are limited and selected by application.":
      "Besplatno, na Univerzitetu u Beogradu — pridružite se u sali ili onlajn. Prijavite se za dan predavanja 21. novembra i javite se za hakaton 28. novembra, gde je broj mesta ograničen, a učesnici se biraju na osnovu prijave.",
    "Full name": "Ime i prezime",
    "Email": "Imejl",
    "University / organization": "Univerzitet / organizacija",
    "I am a…": "Ja sam…",
    "Select one": "Izaberite",
    "Undergraduate student": "Student osnovnih studija",
    "Master’s student": "Student master studija",
    "PhD student": "Doktorand",
    "Researcher / academic": "Istraživač / akademski radnik",
    "Industry professional": "Profesionalac iz industrije",
    "Other": "Drugo",
    "Experience with quantum / Qiskit": "Iskustvo sa kvantnim računarstvom / Qiskit-om",
    "New to quantum — starting from zero": "Početnik — krećem od nule",
    "Some exposure — courses, videos, or tutorials": "Nešto iskustva — kursevi, video-snimci ili tutorijali",
    "Hands-on — I’ve written Qiskit or similar code": "Praktično iskustvo — pisao/la sam Qiskit ili sličan kod",
    "Registering for": "Prijavljujem se za",
    "Lecture day · Saturday 21 November": "Dan predavanja · subota, 21. novembar",
    "Hackathon application · Saturday 28 November (limited places)":
      "Prijava za hakaton · subota, 28. novembar (ograničen broj mesta)",
    "Anything we should know?": "Nešto što treba da znamo?",
    "Optional": "Opciono",
    "Accessibility needs, dietary notes, questions…": "Potrebe pristupačnosti, ishrana, pitanja…",
    "Your details are used for event organization only.":
      "Vaši podaci se koriste isključivo za organizaciju događaja.",

    /* Form status messages (script.js) */
    "Pick at least one: the lecture day, the hackathon application, or both.":
      "Izaberite bar jedno: dan predavanja, prijavu za hakaton ili oboje.",
    "Sending…": "Šalje se…",
    "You're registered — see you in Belgrade. Watch your inbox for confirmation and event details.":
      "Prijava je primljena — vidimo se u Beogradu. Potvrda i detalji stižu na imejl.",
    "You're registered. Watch your inbox for confirmation.":
      "Prijava je primljena. Potvrda stiže na imejl.",
    "Something interfered. Try again in a moment.":
      "Došlo je do greške. Pokušajte ponovo za trenutak.",
    "Registration isn't connected to a backend yet — add your form endpoint to data-endpoint in index.html (see README).":
      "Prijava još nije povezana sa serverom — dodajte adresu forme u data-endpoint u index.html (vidi README).",

    /* ── Session pages ── */
    "← Full program": "← Ceo program",
    "Speakers": "Predavači",
    "The organizing team": "Organizacioni tim",
    "Announced soon": "Uskoro objavljujemo",
    "Joining virtually": "Učestvuje onlajn",
    "Speakers for this session are confirmed soon — the slot and its content are set. Register and we’ll email you when they’re announced.":
      "Predavači za ovu sesiju biće uskoro potvrđeni — termin i sadržaj su utvrđeni. Prijavite se i javićemo vam imejlom čim budu objavljeni.",
    "Register for the lecture day": "Prijavi se za dan predavanja",
    "← Back to the program": "← Nazad na program",
    "Saturday 21 November 2026": "subota, 21. novembar 2026.",
    "University of Belgrade": "Univerzitet u Beogradu",
    "Loading…": "Učitavanje…",
    "Session not found": "Sesija nije pronađena",

    /* Session descriptions */
    "Discover how Serbia’s research, talent and growing technology community can contribute to the emerging quantum ecosystem. This opening session will explore potential quantum applications and how they could connect with Serbia’s scientific strengths, industries and local needs. It will also examine the role of education, collaboration and experimentation in building local quantum capabilities, and introduce the organizations bringing this initiative together. Participants will hear how the lecture day and upcoming hackathon connect foundational learning with opportunities to develop ideas, meet collaborators and get involved.":
      "Otkrijte kako istraživanja, talenat i rastuća tehnološka zajednica u Srbiji mogu da doprinesu kvantnom ekosistemu u nastajanju. Ova uvodna sesija istražuje moguće primene kvantnih tehnologija i načine na koje se one povezuju sa naučnim snagama, industrijama i lokalnim potrebama Srbije. Takođe se bavi ulogom obrazovanja, saradnje i eksperimentisanja u izgradnji domaćih kvantnih kapaciteta i predstavlja organizacije koje stoje iza ove inicijative. Učesnici će čuti kako dan predavanja i predstojeći hakaton povezuju osnovno znanje sa prilikama da razviju ideje, upoznaju saradnike i uključe se.",
    "What makes a quantum computer different from a classical computer? This introductory session will explore qubits, superposition, entanglement and measurement, building a foundation for understanding how quantum computation works. Participants will learn how quantum gates and circuits bring these concepts together, while gaining perspective on the possibilities and limitations of quantum computing. The session is designed to make the core ideas approachable for those encountering the subject for the first time.":
      "Po čemu se kvantni računar razlikuje od klasičnog? Ova uvodna sesija istražuje kjubite, superpoziciju, spregnutost i merenje i gradi osnovu za razumevanje kvantnog računanja. Učesnici će naučiti kako kvantna logička kola i kvantna kola povezuju ove koncepte, uz uvid u mogućnosti i ograničenja kvantnog računarstva. Sesija je osmišljena tako da ključne ideje budu pristupačne onima koji se sa temom susreću po prvi put.",
    "Explore how the ideas behind quantum computing translate into code using Qiskit, an open-source toolkit for quantum programming. This introductory session will walk through the building blocks of quantum circuits and explain how to construct, run and interpret simple examples. Participants will become familiar with the basic workflow of quantum programming and how measurement results relate to the circuits they create. The session will provide a starting point for further learning and experimentation ahead of the hackathon.":
      "Istražite kako se ideje kvantnog računarstva prevode u kod uz Qiskit, alat otvorenog koda za kvantno programiranje. Ova uvodna sesija prolazi kroz gradivne elemente kvantnih kola i objašnjava kako da ih sastavite, pokrenete i protumačite na jednostavnim primerima. Učesnici će se upoznati sa osnovnim tokom rada u kvantnom programiranju i sa tim kako se rezultati merenja odnose na kola koja prave. Sesija je polazna tačka za dalje učenje i eksperimentisanje pred hakaton.",
    "How does quantum computing change the way we think about protecting information? This session will introduce the risks that future quantum computers could pose to widely used cryptographic systems and explain the purpose of post-quantum cryptography. Participants will explore the distinction between quantum approaches to secure communication and cryptographic algorithms designed to resist quantum attacks on classical computers. The discussion will connect these ideas to practical security challenges and applications in telecommunications.":
      "Kako kvantno računarstvo menja način na koji razmišljamo o zaštiti informacija? Ova sesija predstavlja rizike koje budući kvantni računari mogu da donesu široko korišćenim kriptografskim sistemima i objašnjava svrhu postkvantne kriptografije. Učesnici će istražiti razliku između kvantnih pristupa bezbednoj komunikaciji i kriptografskih algoritama napravljenih da odole kvantnim napadima, a koji rade na klasičnim računarima. Diskusija povezuje ove ideje sa praktičnim bezbednosnim izazovima i primenama u telekomunikacijama.",
    "Games offer a creative way to explore quantum computing and make unfamiliar concepts tangible. This session will examine how quantum ideas such as superposition, measurement and entanglement can inspire game mechanics and interactive experiences. Participants will explore the possibilities of using quantum computation within games, alongside using games to explain quantum concepts.":
      "Igre su kreativan način da se istraži kvantno računarstvo i da nepoznati koncepti postanu opipljivi. Ova sesija razmatra kako kvantne ideje poput superpozicije, merenja i spregnutosti mogu da inspirišu mehanike igara i interaktivna iskustva. Učesnici će istražiti mogućnosti korišćenja kvantnog računanja u igrama, kao i korišćenja igara za objašnjavanje kvantnih koncepata.",
    "Bring your questions and connect the day’s discussions to your own interests and ideas. The organizing team will outline the next steps for the November 28 hackathon, including the security and gaming tracks, preparation resources and opportunities to connect with teammates. Participants will leave with a clearer sense of how to continue learning and prepare to turn an initial idea into a project.":
      "Donesite svoja pitanja i povežite teme dana sa sopstvenim interesovanjima i idejama. Organizacioni tim predstaviće naredne korake za hakaton 28. novembra, uključujući kategorije bezbednosti i igara, materijale za pripremu i prilike da pronađete saigrače. Učesnici odlaze sa jasnijom predstavom o tome kako da nastave da uče i kako da početnu ideju pretvore u projekat.",

    /* ── Blog ── */
    "The blog": "Blog",
    "Dispatches from the road to November.": "Zapisi na putu ka novembru.",
    "Announcements, speaker news, and Qiskit resources — everything leading up to the two Saturdays in Belgrade.":
      "Najave, vesti o predavačima i Qiskit materijali — sve što prethodi dvema subotama u Beogradu.",
    "Loading posts…": "Učitavanje tekstova…",
    "Read →": "Pročitaj →",
    "← The blog": "← Blog",
    "← All posts": "← Svi tekstovi",
    "No posts yet — the first dispatch lands soon.": "Još nema tekstova — prvi stiže uskoro.",
    "Couldn’t load posts right now — try a refresh.":
      "Trenutno nije moguće učitati tekstove — osvežite stranicu.",
    "Post not found": "Tekst nije pronađen",

    /* ── 404 ── */
    "404 · Measurement collapsed": "404 · Merenje je kolapsiralo",
    "This page isn’t in any state we can observe.":
      "Ova stranica nije ni u jednom stanju koje možemo da izmerimo.",
    "The link may be old, or the page moved. Everything about the two Saturdays in Belgrade is a click away.":
      "Link je možda zastareo ili je stranica premeštena. Sve o dvema subotama u Beogradu je na jedan klik.",
    "Read the blog →": "Pročitaj blog →",
  },
};

(function () {
  "use strict";

  var KEY = "qff-lang";
  var ATTRS = ["placeholder", "aria-label", "title", "alt"];
  var saved = []; // English originals, so switching back needs no reload
  var current = "en";

  function norm(s) { return s.replace(/\s+/g, " ").trim(); }
  function dict() { return (window.I18N && window.I18N.TEXT) || {}; }

  function translate(root) {
    var D = dict();
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode;
        if (!p || p.nodeName === "SCRIPT" || p.nodeName === "STYLE") return NodeFilter.FILTER_REJECT;
        if (p.closest && p.closest("[data-no-i18n]")) return NodeFilter.FILTER_REJECT;
        return n.nodeValue && n.nodeValue.trim() ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    });
    var node;
    while ((node = walker.nextNode())) {
      var raw = node.nodeValue;
      var tr = D[norm(raw)];
      if (!tr) continue;
      saved.push({ node: node, value: raw });
      node.nodeValue = raw.match(/^\s*/)[0] + tr + raw.match(/\s*$/)[0];
    }
    ATTRS.forEach(function (attr) {
      var els = root.querySelectorAll ? root.querySelectorAll("[" + attr + "]") : [];
      Array.prototype.forEach.call(els, function (el) {
        var v = el.getAttribute(attr);
        var tr = v && D[norm(v)];
        if (!tr) return;
        saved.push({ el: el, attr: attr, value: v });
        el.setAttribute(attr, tr);
      });
    });
  }

  function restore() {
    for (var i = saved.length - 1; i >= 0; i--) {
      var s = saved[i];
      if (s.node) s.node.nodeValue = s.value;
      else s.el.setAttribute(s.attr, s.value);
    }
    saved = [];
  }

  function setLang(lang, persist) {
    current = lang === "sr" ? "sr" : "en";
    document.documentElement.lang = current;
    if (current === "sr") { restore(); translate(document.body); }
    else { restore(); }
    document.querySelectorAll(".lang-toggle [data-lang]").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-lang") === current);
    });
    var btn = document.querySelector(".lang-toggle");
    if (btn) btn.setAttribute("aria-label", current === "sr" ? "Prebaci na engleski" : "Switch to Serbian");
    if (persist) { try { localStorage.setItem(KEY, current); } catch (e) {} }
    window.dispatchEvent(new CustomEvent("langchange", { detail: { lang: current } }));
  }

  /* Re-apply after content is rendered by people.js / sessions / blog */
  window.applyI18n = function () { if (current === "sr") { translate(document.body); } };
  window.currentLang = function () { return current; };

  function init() {
    var param = new URLSearchParams(location.search).get("lang");
    var stored = null;
    try { stored = localStorage.getItem(KEY); } catch (e) {}
    setLang(param || stored || "en", Boolean(param));

    var btn = document.querySelector(".lang-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        setLang(current === "sr" ? "en" : "sr", true);
      });
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
