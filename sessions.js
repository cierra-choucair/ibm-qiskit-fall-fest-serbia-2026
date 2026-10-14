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
    lead: "Sanja Djurdjic Mijin, Cierra Lunde Choucair, Sasha Lazarevic",
    html:
      "<p>Discover how Serbia’s research, talent and growing technology " +
      "community can contribute to the emerging quantum ecosystem. This " +
      "opening session will explore potential quantum applications and " +
      "how they could connect with Serbia’s scientific strengths, " +
      "industries and local needs. It will also examine the role of " +
      "education, collaboration and experimentation in building local " +
      "quantum capabilities, and introduce the organizations bringing " +
      "this initiative together. Participants will hear how the lecture " +
      "day and upcoming hackathon connect foundational learning with " +
      "opportunities to develop ideas, meet collaborators and get " +
      "involved.</p>",
    speakers: [P.sanja, P.cierra, P.sasha],
  },
  {
    id: "quantum-101",
    time: "09:15–10:45",
    title: "Quantum 101",
    lead: "Sanja Djurdjic Mijin",
    html:
      "<p>What makes a quantum computer different from a classical " +
      "computer? This introductory session will explore qubits, " +
      "superposition, entanglement and measurement, building a foundation " +
      "for understanding how quantum computation works. Participants will " +
      "learn how quantum gates and circuits bring these concepts " +
      "together, while gaining perspective on the possibilities and " +
      "limitations of quantum computing. The session is designed to make " +
      "the core ideas approachable for those encountering the subject for " +
      "the first time.</p>",
    speakers: [P.sanja],
  },
  {
    id: "qiskit-101",
    time: "11:00–13:00",
    title: "Qiskit 101: Getting started with quantum programming",
    lead: "Claudia Zendejas-Morales, IBM Qiskit Advocate (virtual)",
    html:
      "<p>Explore how the ideas behind quantum computing translate into " +
      "code using Qiskit, an open-source toolkit for quantum programming. " +
      "This introductory session will walk through the building blocks of " +
      "quantum circuits and explain how to construct, run and interpret " +
      "simple examples. Participants will become familiar with the basic " +
      "workflow of quantum programming and how measurement results relate " +
      "to the circuits they create. The session will provide a starting " +
      "point for further learning and experimentation ahead of the " +
      "hackathon.</p>",
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
    html:
      "<p>How does quantum computing change the way we think about " +
      "protecting information? This session will introduce the risks that " +
      "future quantum computers could pose to widely used cryptographic " +
      "systems and explain the purpose of post-quantum cryptography. " +
      "Participants will explore the distinction between quantum " +
      "approaches to secure communication and cryptographic algorithms " +
      "designed to resist quantum attacks on classical computers. The " +
      "discussion will connect these ideas to practical security " +
      "challenges and applications in telecommunications.</p>",
    speakers: [{ tba: true }],
  },
  {
    id: "quantum-computing-gaming",
    time: "15:00–16:00",
    title: "Quantum Computing and Gaming",
    lead: "Speaker to be confirmed",
    html:
      "<p>Games offer a creative way to explore quantum computing and " +
      "make unfamiliar concepts tangible. This session will examine how " +
      "quantum ideas such as superposition, measurement and entanglement " +
      "can inspire game mechanics and interactive experiences. " +
      "Participants will explore the possibilities of using quantum " +
      "computation within games, alongside using games to explain quantum " +
      "concepts.</p>",
    speakers: [{ tba: true }],
  },
  {
    id: "questions-and-closing",
    time: "16:00–16:45",
    title: "Questions, next steps and closing remarks",
    lead: "Organizing team",
    html:
      "<p>Bring your questions and connect the day’s discussions to your " +
      "own interests and ideas. The organizing team will outline the next " +
      "steps for the November 28 hackathon, including the security and " +
      "gaming tracks, preparation resources and opportunities to connect " +
      "with teammates. Participants will leave with a clearer sense of " +
      "how to continue learning and prepare to turn an initial idea into " +
      "a project.</p>",
    speakersHeading: "The organizing team",
    speakers: ORGANIZING_TEAM,
  },
];
