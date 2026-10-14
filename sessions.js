/* ────────────────────────────────────────────────────────────────────────
   Session details for the lecture day — rendered by session.html?id=…
   Each entry: id (matches the link in the program table), time, title,
   lead (who runs it), html (description), speakers (cards).

   Speakers use the shared person-card shape from people.js. Reference an
   organizer with window.PEOPLE.<key> so their photo and profile URL stay
   in one place. For an unconfirmed slot use { tba: true, org: "…" }; for
   a named speaker not in PEOPLE, give { name, role, org, photo, linkedin }
   (photo and linkedin optional — with linkedin the whole card links).

   speakersHeading overrides the default "Speakers" label.
   ──────────────────────────────────────────────────────────────────────── */

var P = window.PEOPLE || {};
var ORGANIZING_TEAM = window.ORGANIZERS || [];

window.SESSIONS = [
  {
    id: "welcome",
    time: "08:30–09:15",
    title: "Welcome and Serbia’s quantum opportunity",
    lead: "Sanja Djurdjic Mijin, Cierra Lunde",
    html: [
      "<p>The opening of Serbia’s first Qiskit Fall Fest: an introduction to the organizers, Serbia’s quantum ecosystem, and the goals of both the lecture day and the hackathon that follows a week later.</p>",
      "<p>You’ll leave knowing how the two Saturdays fit together, and how to get the most out of the day whether you arrived curious or already writing circuits.</p>",
    ].join("\n"),
    speakers: [P.sanja, P.cierra],
  },
  {
    id: "quantum-101",
    time: "09:15–10:45",
    title: "Quantum 101",
    lead: "Sanja Djurdjic Mijin",
    html: [
      "<p>An accessible introduction to the ideas the rest of the day builds on: qubits, superposition, entanglement, measurement, and quantum circuits.</p>",
      "<p>No prior quantum background is assumed. If the vocabulary is new to you, this is the session that makes the Qiskit seminar afterwards make sense.</p>",
    ].join("\n"),
    speakers: [P.sanja],
  },
  {
    id: "qiskit-101",
    time: "11:00–13:00",
    title: "Qiskit 101: Getting started with quantum programming",
    lead: "Claudia Zendejas-Morales, IBM Qiskit Advocate (virtual)",
    html: [
      "<p>An introductory seminar on programming quantum computers with Qiskit, with live demonstrations and time for participant questions.</p>",
      "<p>This is the longest block of the day and the one the hackathon leans on most — Qiskit is the framework both Saturdays run on. Bring a laptop if you can; the morning setup slot exists so everyone has a working environment before this begins.</p>",
    ].join("\n"),
    speakers: [
      {
        name: "Claudia Zendejas-Morales",
        role: "Joining virtually",
        org: "IBM Qiskit Advocate",
        photo: "/assets/claudia_headshot.jpg",
      },
    ],
  },
  {
    id: "quantum-cryptography-security",
    time: "14:00–15:00",
    title: "Quantum Security and Post Quantum Cryptography",
    lead: "Speaker to be confirmed",
    html: [
      "<p>An introduction to the theme — quantum security and post-quantum cryptography — the concepts behind it, and possible directions for hackathon projects.</p>",
      "<p>One of the two tracks the hackathon on 28 November is built around — come with questions about what a strong project in this area could look like.</p>",
    ].join("\n"),
    speakers: [{ tba: true }],
  },
  {
    id: "quantum-computing-gaming",
    time: "15:00–16:00",
    title: "Quantum Computing and Gaming",
    lead: "Speaker to be confirmed",
    html: [
      "<p>How quantum concepts and quantum computing can inform games and interactive experiences, with examples to inspire projects.</p>",
      "<p>The second of the hackathon’s two tracks, and the most open-ended — a good fit if you like building things people can play with.</p>",
    ].join("\n"),
    speakers: [{ tba: true }],
  },
  {
    id: "questions-and-closing",
    time: "16:00–16:45",
    title: "Questions, next steps and closing remarks",
    lead: "Organizing team",
    html: [
      "<p>Open questions, what happens between the two Saturdays, and how to stay in touch with Serbia’s quantum community after the Fall Fest.</p>",
    ].join("\n"),
    speakersHeading: "The organizing team",
    speakers: ORGANIZING_TEAM,
  },
];
