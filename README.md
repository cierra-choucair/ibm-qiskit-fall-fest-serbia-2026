# Qiskit Fall Fest Serbia 2026

Pre-launch site for the Qiskit Fall Fest Serbia and Serbia's first
applied quantum hackathon — **Universum Labs**, the **Center for
Quantum Technologies of Serbia**, and **IBM Quantum** (Qiskit Fall
Fest program). Two Saturdays in Belgrade: Fall Fest lecture day on
21 November 2026, hackathon on 28 November 2026.

The repository root is the site — plain HTML/CSS/JS, no build step, no
dependencies.

```
index.html    page structure + all copy
styles.css    design system (IBM Plex, violet/cyan accents)
script.js     animated Bloch sphere hero + registration form handler
session.html  session detail page (renders sessions.js by ?id=…)
sessions.js   per-session descriptions + speaker cards
assets/       partner logos + organizer headshots
blog/         the blog (see "Blog" below)
vercel.json   clean URLs + asset caching for Vercel
```

Type is set in IBM Plex Sans / IBM Plex Mono — the same family IBM
Quantum uses — loaded from Google Fonts.

## Sessions

Real sessions in the program table (not breaks or logistics) link to
`session.html?id=…`, which renders from `sessions.js`: description,
time/venue chips, and speaker cards. Speakers are placeholders while
unconfirmed — to confirm one, replace its `{ tba: true, … }` entry with
`{ name, role, org, photo: "./assets/<file>", linkedin: "https://…" }`
(photo and linkedin optional; cards match the organizer cards).

## Preview locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
```

## Deploy

**Vercel via Git integration (recommended)** — every push then deploys
automatically:

1. Vercel dashboard → **Add New… → Project** → import
   `cierra-choucair/ibm-qiskit-fall-fest-serbia-2026`.
2. Framework Preset: **Other**. Leave root directory, build command,
   and output directory at their defaults (the repo root is the site).
3. Deploy — production tracks `main`.
4. Add the custom domain in Settings → Domains when it's chosen (the
   domain is what gets submitted to IBM for the Fall Fest listing).

**Vercel CLI** (from a machine where you're logged in):
`vercel deploy --prod`

**GitHub Pages** also works: Settings → Pages → deploy from branch
`main`, folder `/ (root)`.

## Logos

The partnership section is a row of three large logos, each linking to
the organization's site. The originals as supplied are kept untouched in
`assets/` (`ul_full_logo_v3.png`, `quantum_center_logo_final.png`,
`IBM_Quantum_logotype_pos_RGB.png` + `.ai`, `ibm-quantum-rev.svg`). The
page displays derived copies generated from them:

- `logo-universum-labs.png`, `logo-ibm-quantum.png` — trimmed of their
  large transparent margins so they render at full size instead of tiny.
- `logo-cqt-serbia.png` — the caption text recolored from white to the
  logo's own navy so it is legible on the white page.

To swap a logo, replace its derived `logo-*.png` file (trim the
transparent padding first, or it will render small again). To change a
link, edit the `href` on the matching `.logo-link` in `index.html`.
Display sizes are the `.logo-cqt` / `.logo-ul` / `.logo-ibm` heights in
`styles.css`.

**The Center's link is currently a placeholder (`#`)** — point it at the
Center's website when it's live (marked with a TODO comment in
`index.html`).

The menu bar shows all three marks in white (`logo-*-white.png`,
derived as monochrome knockouts for the dark bar, plus IBM's official
reversed logotype `ibm-quantum-rev.svg`).

## Organizers

Five organizer cards sit under the partner logos, each with a headshot
(`assets/*_headshot.*`, cropped into a circle by the CSS) and a name
linking to the person's LinkedIn profile. To change one, edit its
`.team-card` in `index.html`.

## Wire up registration

The registration form posts to the URL in the form's `data-endpoint`
attribute in `index.html`:

```html
<form id="registration" class="signup" data-endpoint="">
```

Until it's set, submitting shows an inline "not connected yet" notice.
Options:

1. **Formspree** (fastest) — create a form at formspree.io and paste its
   URL: `data-endpoint="https://formspree.io/f/XXXXXXXX"`. The handler
   sends `Accept: application/json` with a `multipart/form-data` body.
2. **Any form backend** (Basin, Getform, Web3Forms, …) — same deal:
   paste the POST URL.
3. **Your own endpoint / Google Apps Script relay into a Sheet** —
   anything that accepts a form POST and returns 2xx.

Submitted fields: `name`, `email`, `affiliation`, `status`,
`experience`, `lecture_day` (present when ticked), `hackathon_application`
(present when ticked), `notes`. A `company` honeypot field exists in the
markup but is stripped before sending; bot submissions that fill it are
dropped client-side.

## Blog

`/blog/` lists posts; `/blog/post.html?slug=…` renders one. Content has
two modes, switched in `blog/blog.js`:

1. **Now (no CMS):** posts live in `blog/posts.js` as an array — slug,
   title, date, excerpt, and HTML body. To publish, add an entry at the
   top of the array and push; no build step.
2. **Later (WordPress):** set `WP_API_URL` at the top of `blog/blog.js`
   to the WordPress site's base URL (e.g. `https://cms.example.com`).
   Both pages then fetch posts live from the WordPress REST API
   (`/wp-json/wp/v2/posts`) — standard posts, no plugins needed — and
   `posts.js` is ignored. Post bodies are lightly sanitized client-side
   (scripts and inline handlers stripped) before rendering.

## Content still to land

- **The Center's website link** — the CQT logo currently links to `#`;
  set the real URL when the Center's site is live (see "Logos" above).
- **Challenge tracks** — the three cards under *About the challenge* are
  candidate areas and labeled as such; swap in the final tracks when
  they're confirmed.
- **Venue room** — copy says "university venue in Belgrade, room
  announced with registration" until the space is reserved in September.
- **Registration/application links** — the signup form collects emails
  for now; add Fall Fest registration and the hackathon application form
  when they exist.
