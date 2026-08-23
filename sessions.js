/* ────────────────────────────────────────────────────────────────────────
   Session details for the lecture day — rendered by session.html?id=…
   Each entry: id (matches the link in the program table), time, title,
   lead (who runs it), html (description), speakers (cards).

   Speakers: while unconfirmed, use { tba: true, org: "…" } — the page
   renders a placeholder card. When confirmed, replace with
   { name, role, org, photo: "./assets/<file>", linkedin: "https://…" }
   (photo and linkedin optional).
   ──────────────────────────────────────────────────────────────────────── */

window.SESSIONS = [
  {
    id: "welcome",
    time: "11:00–11:20",
    title: "Welcome and Serbia’s quantum opportunity",
    lead: "Universum Labs + CQT Serbia",
    html: [
      "<p>The opening of Serbia’s first Qiskit Fall Fest. In twenty minutes: why quantum computing matters now, what a national quantum community can look like, and where Serbia fits — plus how the two Saturdays work together, and how to get the most out of the day whether you arrived curious or already writing circuits.</p>",
      "<p>You’ll also hear how the lecture day connects to the hackathon on 28 November: what the challenge tracks reward, how the application works, and what to practice in the week between.</p>",
    ].join("\n"),
    speakers: [
      { tba: true, org: "Universum Labs" },
      { tba: true, org: "CQT Serbia" },
    ],
  },
  {
    id: "qubits-to-algorithms",
    time: "11:20–12:00",
    title: "From qubits and gates to small quantum algorithms",
    lead: "Speaker announced soon",
    html: [
      "<p>The foundations, built honestly and without hand-waving: what a qubit is, what superposition and entanglement actually buy you, and how quantum gates compose into circuits. From there, the session assembles its first small quantum algorithms — enough to understand what the afternoon’s hands-on work is doing and why.</p>",
      "<p>No quantum prerequisites. If you can follow a bit of linear algebra you’ll get more from the details, but the session is designed so that curiosity is enough.</p>",
    ].join("\n"),
    speakers: [{ tba: true }],
  },
  {
    id: "qiskit-learning-1",
    time: "12:00–12:40",
    title: "Qiskit learning session",
    lead: "Speaker announced soon",
    html: [
      "<p>First contact with Qiskit, built on IBM’s official learning materials: set up a working environment, build your first circuit, run it on a simulator, and read the results. By the end of the slot you will have executed real quantum code — the same workflow the guided lab and the hackathon build on.</p>",
      "<p>Bring a laptop if you can; the materials stay with you after the day.</p>",
    ].join("\n"),
    speakers: [{ tba: true }],
  },
  {
    id: "qiskit-2x",
    time: "14:00–14:50",
    title: "Qiskit 2.x: circuits, V2 primitives, transpilation and simulation",
    lead: "IBM Qiskit instructor",
    html: [
      "<p>The modern Qiskit workflow, as it’s actually used: building circuits, the V2 primitives (Sampler and Estimator), what transpilation does on the way to a backend, and the simulation options for developing and debugging. If you learned Qiskit a few versions ago, this is the session that updates your mental model; if the morning was your first contact, it shows where the pieces fit.</p>",
      "<p>Run with IBM’s learning materials and labs, so everything shown is reproducible at home.</p>",
    ].join("\n"),
    speakers: [{ tba: true, org: "IBM Quantum" }],
  },
  {
    id: "guided-lab-qaoa",
    time: "15:05–16:20",
    title: "Guided lab: exact search and QAOA on a six-variable QUBO",
    lead: "Technical instructors + mentors",
    html: [
      "<p>The bridge from lectures to the hackathon. In small groups, you’ll take a six-variable QUBO — the kind of formulation real optimization problems reduce to — solve it exactly by search to establish a baseline, then build a QAOA circuit in Qiskit and compare the two, honestly.</p>",
      "<p>Mentors circulate the whole time, so no group gets stuck. This is exactly the shape of work the hackathon tracks reward: a real problem, a classical baseline, and a quantum approach you can defend.</p>",
    ].join("\n"),
    speakers: [
      { tba: true, org: "Technical instructors" },
      { tba: true, org: "Mentor team" },
    ],
  },
  {
    id: "qiskit-learning-2",
    time: "16:35–17:45",
    title: "Qiskit learning session",
    lead: "Speaker announced soon",
    html: [
      "<p>The closing deep-dive: an invited speaker from the wider quantum community, with the topic announced together with the speaker. This is a hybrid slot — the speaker may join remotely — and it’s deliberately placed last: a look at where the field is going, after a day spent learning how it works.</p>",
    ].join("\n"),
    speakers: [{ tba: true }],
  },
];
