/* ────────────────────────────────────────────────────────────────────────
   Local post store — the blog's content until the WordPress backend is
   connected (see blog.js). To publish a post now, add an entry at the TOP
   of this array and push; the listing and post pages render from it.

   Fields: slug (url-safe, unique), title, date (YYYY-MM-DD), excerpt
   (plain text, one or two sentences), html (the post body — headings
   start at <h2>).
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
    title_sr: "Najava: Qiskit Fall Fest Srbija 2026",
    excerpt_sr:
      "Dve subote u Beogradu ovog novembra: ceo dan Qiskit predavanja i vežbi, pa prvi primenjeni kvantni hakaton u Srbiji. Prijave su otvorene.",
    html_sr: [
      "<p>Sa zadovoljstvom objavljujemo da se Srbija ove godine pridružuje Qiskit Fall Fest-u — godišnjoj svetskoj seriji kvantnih događaja koje vodi zajednica okupljena oko IBM Quantum-a — sa dve subote u Beogradu ovog novembra.</p>",
      "<p>U <strong>subotu, 21. novembra</strong>, ceo dan nastave na Univerzitetu u Beogradu, uživo ili onlajn: osnove kvantnog računarstva pre podne i dvočasovni seminar o programiranju u Qiskit-u oko podneva, sa predavačima iz IBM Quantum-a i srpske kvantne zajednice. Predznanje iz kvantnog računarstva nije potrebno — dan je osmišljen tako da vas vodi od nule do pokretanja pravih kvantnih kola.</p>",
      "<p>U <strong>subotu, 28. novembra</strong>, održava se prvi primenjeni kvantni hakaton u Srbiji: jedan dan, mali timovi i kategorije izazova zasnovane na stvarnim kvantnim slučajevima upotrebe značajnim za Srbiju. Broj mesta je ograničen na oko pedeset, a učesnici se biraju na osnovu prijave.</p>",
      "<p>Događaj organizuju Centar za kvantne tehnologije Srbije i Universum Labs, u okviru programa IBM Qiskit Fall Fest.</p>",
      "<p><a href=\"/#register\">Prijave su otvorene</a> — dan predavanja je besplatan i otvoren za sve, a istom prijavom se javljate i za hakaton. Kategorije izazova, predavači i tačna sala objavljuju se ovde i putem imejla čim budu potvrđeni.</p>",
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
    title_sr: "Priprema za novembar: vaš Qiskit početni paket",
    excerpt_sr:
      "Sve na Fall Fest-u i hakatonu radi se u Qiskit-u, koji je besplatan i otvorenog koda. Evo odakle da krenete pre novembra.",
    html_sr: [
      "<p>Sve na Fall Fest-u i hakatonu radi se u <strong>Qiskit-u</strong>, IBM-ovom okviru otvorenog koda za kvantno računarstvo. Besplatan je, radi se u Pajtonu i nije vam potrebno nikakvo kvantno predznanje za prve korake — upravo tome služi dan predavanja. Ali ako želite da dođete zagrejani, evo kratkog spiska.</p>",
      "<h2>Počnite odavde</h2>",
      "<ul>",
      "<li><a href=\"https://learning.quantum.ibm.com\" target=\"_blank\" rel=\"noopener noreferrer\">IBM Quantum Learning</a> — besplatni, strukturirani kursevi od „šta je kjubit” do varijacionih algoritama, sa sveskama koje možete pokrenuti.</li>",
      "<li><a href=\"https://docs.quantum.ibm.com\" target=\"_blank\" rel=\"noopener noreferrer\">Qiskit dokumentacija</a> — instalacija, tutorijali i API referenca u kojoj ćete provesti hakaton.</li>",
      "<li><a href=\"https://github.com/Qiskit/qiskit\" target=\"_blank\" rel=\"noopener noreferrer\">Qiskit na GitHub-u</a> — sam okvir; dovoljno je <code>pip install qiskit</code>.</li>",
      "</ul>",
      "<h2>Čemu težiti</h2>",
      "<p>Ako umete da napravite malo kvantno kolo, pokrenete ga na simulatoru i pročitate rezultate, u prednosti ste — seminar Qiskit 101 na danu predavanja nastavlja odatle. A ako vam ove reči još ništa ne znače: svejedno dođite. Prepodnevne sesije ne pretpostavljaju nikakvo predznanje.</p>",
      "<p>Imate pitanja pre toga? Iskoristite polje za napomene kada se <a href=\"/#register\">prijavite</a> — čitamo sve.</p>",
    ].join("\n"),
  },
];
