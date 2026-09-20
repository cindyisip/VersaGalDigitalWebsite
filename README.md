# VersaGal Digital website — VersaLink Keeper update

Complete static site for the existing GitHub Pages website at https://versagaldigital.com.
This package is based on the current public `cindyisip/VersaGalDigitalWebsite` main
commit `5712d35e4ee8d67a35637553fd2b19b7f4e20c7b`. Its original website files matched
the saved website package before this update.

## What changed

- Home now introduces VersaLink Keeper with its actual app logo.
- Apps uses the new name, logo, and current feature summary.
- Added a dedicated app landing page at `/apps/versalink/`.
- Support includes adding links, folder order, search, deletion, previews, exports,
  recovery, sharing, and purchase restoration.
- Privacy now explains automatic preview requests to external services, local
  cache, device backups, recovery retention, unencrypted exports, deletion,
  purchases, and support correspondence.
- App pages have descriptive page titles, social metadata, keyboard focus,
  and responsive layouts.
- The music catalog and its ten Spotify track links, the About page, brand logo,
  and `CNAME` are preserved.

The existing `/apps/versalink/privacy/` and `/apps/versalink/support/` URLs are
intentionally unchanged. The new display name does not require a new URL slug.

## Update your existing website repository

Unzip outside your local website repository. Copy the **contents** of the
`versagal-digital-site` folder into the existing repository root, merging folders
and replacing matching files. Do not replace or delete the entire repository.
You do not need to create a new repository, change Porkbun DNS, or redo Pages setup.

For a bulk copy in Terminal, replace both paths below with your actual paths:

```bash
rsync -av "/path/to/download/versagal-digital-site/" "/path/to/VersaGalDigitalWebsite/"
cd "/path/to/VersaGalDigitalWebsite"
git status
git diff --stat
```

The trailing slash after the source folder is intentional: it copies that
folder's contents into the existing repository. This command does not delete
files in the destination. If you have uncommitted website edits, save or commit
them before copying.

After checking the changes:

```bash
git add index.html styles.css apps assets/versalink-keeper-icon.png README.md
git commit -m "Update website for VersaLink Keeper"
git push
```

Your existing GitHub Pages workflow publishes the pushed changes. This download
does not push to GitHub or change the live website by itself.

## Local preview

Run this from the website folder, then open http://localhost:8000:

```bash
python3 -m http.server 8000
```

All internal links also use relative `index.html` paths, so the pages can be
opened directly for a basic preview. No build step or paid hosting is required.
The Spotify player and external destinations require an internet connection.

## App Store Connect website URLs

After the update is published:

- Marketing URL: https://versagaldigital.com/apps/versalink/
- Support URL: https://versagaldigital.com/apps/versalink/support/
- Privacy Policy URL: https://versagaldigital.com/apps/versalink/privacy/

The support and privacy URLs remain the same as before. Open them in a browser
after deployment to confirm they show **VersaLink Keeper** and the new logo.

## Launch status and pricing

The site says **Coming soon for iPhone** because no public App Store listing URL
was supplied. It does not display a download badge or an invented store URL.
Once the app is publicly available, replace the status on Home, Apps, and the
app landing page, and add the real App Store link.

The free plan is described as 10 links including archived links. The one-time
unlock adds unlimited links, JSON import, and local recovery restore. Exports
remain free. The site directs users to the purchase screen for the current local
price rather than hard-coding a price that may differ by storefront.

## Privacy and support maintenance

The policy reflects the supplied app source as of September 20, 2026. In
particular, previews are on by default, contact external services, and can be
turned off in Settings. Keep the policy aligned with later app changes and with
your actual handling of support emails. It is not a substitute for completing
App Store Connect's separate privacy questionnaire.

The website has no added analytics scripts. Its existing Spotify embed and
GitHub Pages hosting have their own privacy practices, now noted in the policy.

Contact addresses are still `support@versagaldigital.com` and
`privacy@versagaldigital.com`. Verify that your forwarding receives messages.

Reference: [Apple App Review Guidelines — Privacy](https://developer.apple.com/app-store/review/guidelines/#privacy).

## Validation

All 105 internal file links and fragment targets passed checks. The supplied app
logo matches the approved iPhone icon. Music, About, the domain setting, and
existing brand assets were compared byte-for-byte against the previous site.
Responsive styles were updated, but a browser render could not be completed in
this environment because the browser download timed out. Preview the new app,
support, and privacy pages in your browser before pushing.
