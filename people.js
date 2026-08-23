/* ────────────────────────────────────────────────────────────────────────
   Person cards — ONE modular card used everywhere people appear: the
   organizers grid on the home page and the speaker cards on session
   pages. To drop someone in anywhere, use this shape:

     { name: "Full Name",
       role: "Optional title line",
       org: "Organization",
       photo: "/assets/<file>",              // optional — placeholder if absent
       linkedin: "https://www.linkedin.com/in/…" }  // optional — whole card links

   or, for a slot that isn't announced yet:  { tba: true, org: "…" }

   window.renderPersonCard(person) returns the card element.
   The ORGANIZERS list below renders automatically into
   #organizer-cards on the home page.
   ──────────────────────────────────────────────────────────────────────── */

(function () {
  "use strict";

  window.renderPersonCard = function (person) {
    var card;
    if (person.linkedin) {
      // Whole card is the link, not just the name
      card = document.createElement("a");
      card.className = "team-card team-card-link";
      card.href = person.linkedin;
      card.target = "_blank";
      card.rel = "noopener noreferrer";
      card.setAttribute("aria-label", (person.name || "Speaker") + " on LinkedIn");
    } else {
      card = document.createElement("div");
      card.className = "team-card";
    }

    if (person.photo) {
      var img = document.createElement("img");
      img.className = "headshot";
      img.src = person.photo;
      img.alt = "";
      card.appendChild(img);
    } else {
      var ph = document.createElement("div");
      ph.className = "headshot";
      ph.setAttribute("aria-hidden", "true");
      ph.innerHTML = "<span>|ψ⟩</span>";
      card.appendChild(ph);
    }

    var name = document.createElement("p");
    name.className = "team-name";
    name.textContent = person.tba ? "Announced soon" : person.name;
    card.appendChild(name);

    if (person.role) {
      var role = document.createElement("p");
      role.className = "team-role";
      role.textContent = person.role;
      card.appendChild(role);
    }

    if (person.org) {
      var org = document.createElement("p");
      org.className = "team-org";
      org.textContent = person.org;
      card.appendChild(org);
    }

    return card;
  };

  /* ──────── The organizers — edit this list to change the home page ──────── */

  window.ORGANIZERS = [
    {
      name: "Sanja Djurdjic Mijin",
      org: "CQT Serbia",
      photo: "/assets/sanja_headshot.png",
      linkedin: "https://www.linkedin.com/in/sanja-djurdjic-mijin-b63b9b124",
    },
    {
      name: "Slobodan Cicic",
      org: "CQT Serbia",
      photo: "/assets/slobodan_headshot.jpeg",
      linkedin: "https://www.linkedin.com/in/slocicic",
    },
    {
      name: "Cierra Lunde",
      org: "Universum Labs",
      photo: "/assets/cierra_headshot.png",
      linkedin: "https://www.linkedin.com/in/cierra-lunde",
    },
    {
      name: "Sandro Bilobrk",
      org: "Universum Labs",
      photo: "/assets/sandro_headshot.jpeg",
      linkedin: "https://www.linkedin.com/in/sandro-bilobrk",
    },
    {
      name: "Sasha Lazarevic",
      org: "Quantum Serbia",
      photo: "/assets/sasha_headshot.jpeg",
      linkedin: "https://www.linkedin.com/in/lzrvc/",
    },
  ];

  var grid = document.getElementById("organizer-cards");
  if (grid) {
    window.ORGANIZERS.forEach(function (p) {
      grid.appendChild(window.renderPersonCard(p));
    });
  }
})();
