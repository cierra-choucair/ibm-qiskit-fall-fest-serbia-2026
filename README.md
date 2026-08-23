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

`assets/ibm-quantum-rev.svg` is the official IBM Quantum reversed
(white) logotype, converted from the supplied `.ai`. It is white-only,
so the page shows it on a dark chip — that is what reversed logos are
for.

The **Universum Labs** and **CQT of Serbia** logos are not in the repo
yet. The page has a commented-out slot for each one inside its partner
card in `index.html`. To add a logo:

1. Get the official file — SVG is best; otherwise a transparent-background
   PNG at least ~600 px wide. (The page displays logos 48 px tall on a
   white card, so white backgrounds also look fine.)
2. On GitHub, open the `assets/` folder → **Add file → Upload files** →
   drag the file in and commit to `main`. The filename must be exactly
   `universum-labs.svg` or `cqt-serbia.svg` (or the `.png` equivalents)
   — rename before uploading if needed.
3. Open `index.html` on GitHub and click the pencil (Edit). Find the
   comment reading `Official logo: upload the file to assets/ …` in the
   matching partner card, delete the `<!--` and `-->` lines so the
   `<img … />` line is live, and change `.svg` to `.png` in the `src`
   if you uploaded a PNG. Commit to `main`.
4. If the repo is connected to Vercel, the site redeploys automatically;
   otherwise run `vercel deploy --prod`.

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

- **Official logos** — upload the Universum Labs and CQT of Serbia
  files and uncomment their slots (see "Logos" above).
- **Challenge tracks** — the three cards under *About the challenge* are
  candidate areas and labeled as such; swap in the final tracks when
  they're confirmed.
- **Venue room** — copy says "university venue in Belgrade, room
  announced with registration" until the space is reserved in September.
- **Registration/application links** — the signup form collects emails
  for now; add Fall Fest registration and the hackathon application form
  when they exist.
