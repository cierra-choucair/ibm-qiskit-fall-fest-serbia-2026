# Qiskit Fall Fest Serbia 2026

Pre-launch site for the Qiskit Fall Fest Serbia and Serbia's first
applied quantum hackathon — **Universum Labs**, the **Center for
Quantum Technologies of Serbia**, and **IBM Quantum** (Qiskit Fall
Fest program). Two Saturdays in Belgrade: Fall Fest lecture day on
21 November 2026, hackathon on 28 November 2026.

The repository root is the site — plain HTML/CSS/JS, no build step, no
dependencies.

```
index.html   page structure + all copy
styles.css   design system (light theme, violet/cyan accents)
script.js    animated Bloch sphere hero + signup form handler
assets/      partner logos (see "Logos" below)
vercel.json  clean URLs + asset caching for Vercel
```

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

## Wire up email capture

The signup form posts to the URL in the form's `data-endpoint` attribute
in `index.html`:

```html
<form id="signup" class="signup" data-endpoint="" novalidate>
```

Until it's set, submitting shows an inline "not connected yet" notice.
Options:

1. **Formspree** (fastest) — create a form at formspree.io and paste its
   URL: `data-endpoint="https://formspree.io/f/XXXXXXXX"`. The handler
   already sends `Accept: application/json` and an `email` field.
2. **Any form backend** (Basin, Getform, Web3Forms, …) — same deal:
   paste the POST URL. The request is `multipart/form-data` with a
   single `email` field, plus a `company` honeypot field that is empty
   for real submissions (most backends let you filter on it).
3. **Newsletter tool** (beehiiv, Mailchimp, Buttondown, …) — either
   point `data-endpoint` at a small serverless relay to the tool's
   subscribe API, or replace the `<form>` block with the tool's embed
   code.

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
