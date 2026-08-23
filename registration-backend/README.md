# Registration tracking — Google Sheet collector

Every registration submitted on the site lands as a row in a Google
Sheet the team owns. One-time setup, about 5 minutes, no coding:

1. Create the sheet: go to <https://sheets.new>, name it
   **Fall Fest Registrations**, and share it with the organizing team.
2. In the sheet: **Extensions → Apps Script**. Delete the placeholder
   code and paste the entire contents of `Code.gs` from this folder.
   Save (💾).
3. **Deploy → New deployment** → gear icon → type **Web app**:
   - Description: `registration collector`
   - Execute as: **Me**
   - Who has access: **Anyone**
   Click **Deploy**, authorize with your Google account when asked
   (it only touches this one spreadsheet), and copy the **Web app URL**
   (it ends in `/exec`).
4. In `index.html`, paste that URL into the registration form's
   endpoint:

   ```html
   <form id="registration" class="signup" data-endpoint="https://script.google.com/macros/s/…/exec">
   ```

   Commit — Vercel redeploys, and from then on every submission appears
   in the sheet instantly.

## What lands in the sheet

One row per registration: `timestamp, name, email, affiliation, status,
experience, lecture_day, hackathon_application, notes`. The two day
columns say `yes` when ticked and are empty otherwise — filter
`hackathon_application = yes` to get the hackathon applicant list. The
form's bot honeypot is stripped before sending, so the sheet stays
clean.

## Changing the script later

After editing `Code.gs` in Apps Script, use **Deploy → Manage
deployments → ✏️ → Version: New version → Deploy**. The URL stays the
same, so the site needs no change.

## Alternatives

Any form backend that accepts a `multipart/form-data` POST and returns
2xx works in `data-endpoint` — Formspree, Web3Forms, Basin, or your own
endpoint — but the Google Sheet keeps the data in a place the whole
team can already see, sort, and filter.
