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
      "<p>On <strong>Saturday 21 November</strong>, a full day of in-person instruction at the University of Belgrade: quantum foundations in the morning, hands-on Qiskit labs in the afternoon, with speakers from IBM Quantum and the Serbian quantum community. No quantum background required — the day is designed to take you from zero to running real circuits.</p>",
      "<p>On <strong>Saturday 28 November</strong>, Serbia's first applied quantum hackathon: one day, small teams, and challenge tracks built on real quantum use cases relevant to Serbia. Places are limited to around fifty and selected by application.</p>",
      "<p>The event is organized by the Center for Quantum Technologies of Serbia and Universum Labs, as part of the IBM Qiskit Fall Fest program.</p>",
      "<p><a href=\"/#register\">Registration is open</a> — the lecture day is free and open, and the same form lets you raise your hand for the hackathon. Challenge tracks, speakers, and the exact room are announced here and by email as they're confirmed.</p>",
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
      "<p>If you can build a small circuit, run it on a simulator, and read the results, you're ahead of the curve — the guided lab on lecture day builds from there to optimization workloads like QAOA. And if none of those words mean anything yet: come anyway. The morning sessions assume nothing.</p>",
      "<p>Questions before then? Use the notes field when you <a href=\"/#register\">register</a> — we read everything.</p>",
    ].join("\n"),
  },
];
