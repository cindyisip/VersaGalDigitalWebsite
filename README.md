# VersaGal Digital website

Static HTML and CSS for https://versagaldigital.com, hosted on GitHub Pages from
`cindyisip/VersaGalDigitalWebsite`. No build step or additional hosting is needed.

## September 23, 2026: screenshots, demo, and planned Ratings Plus

- Added all seven supplied iPhone screenshots: Home in the product hero, plus
  roster ratings, screenshot import, progress, timeline, partner statistics,
  and match rating history in an accessible horizontally scrolling gallery.
- Each screen has 480px and 800px WebP versions, descriptive alt text, and a
  larger-image link. The screenshot contents are preserved; they show the
  development app before the newer demo and paid-tier controls.
- Added the preferred demo route: Home → Connect your DUPR account → Try Demo
  without signing in. Documented fictional data, Exit/Reset Demo, and Account →
  Demo → Show demo on Home, including its remembered preference and defaults.
- Added a clearly labeled planned Free / Ratings Plus comparison: 3 other
  roster players plus self, latest 5 matches combined, and a fictional Match
  Lookup preview on Free; larger rosters, older history, and real Match Lookup
  on Plus. No price, public purchase link, or release date is promised.
- Updated Support, Privacy, DUPR & your data, Home, and Apps for these features.
  Purchase disclosures describe Apple processing and the stable pseudonymous
  account token when a build has purchases enabled.
- Preserved the existing brand, mobile header, Keeper pages, music, custom
  domain, and GitHub Pages setup. No JavaScript or new website dependency.

### Source and release status

This update starts from repository commit
`126001d39748f2c35676d3d582684fbc8beba52a`. Feature wording was checked against
the shared Demo Mode revision 2 and Ratings Plus Update source packages.
Those are separate app updates; this website change does not merge, build,
or verify their integration in the uploaded iOS binary. Ratings Plus is
therefore labeled **planned for launch**, and support/privacy describe
purchase behavior conditionally. The proposed $9.99 price is not published.

VersaPickle remains **Coming soon for iPhone**, with no App Store download
link. TestFlight review and DUPR integration permission are separate from
website readiness. Do not imply either has been approved until confirmed.

## Preview

From this repository:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. The music page’s Spotify player and external links
require internet access. The other pages use only local assets and no JavaScript.

## Publish on the existing GitHub Pages site

Review the changes in your local repository. Commit only the update files after
checking `git status` and `git diff`. Then push your publishing branch using your
existing GitHub authentication and Pages settings. No DNS change is required.
If using the downloadable update package, its `START-HERE.md` contains exact
installation and commit commands and explains its backup and conflict checks.

A local edit or download does not update the live website. Check the repository’s
Pages deployment status after pushing and verify the public URLs below.

## App Store Connect URLs

| Purpose | URL |
| --- | --- |
| VersaPickle marketing | https://versagaldigital.com/apps/versapickle/ |
| VersaPickle support | https://versagaldigital.com/apps/versapickle/support/ |
| VersaPickle privacy | https://versagaldigital.com/apps/versapickle/privacy/ |
| VersaPickle DUPR disclosure | https://versagaldigital.com/apps/versapickle/data-access/ |
| Keeper marketing | https://versagaldigital.com/apps/versalink/ |
| Keeper support | https://versagaldigital.com/apps/versalink/support/ |
| Keeper privacy | https://versagaldigital.com/apps/versalink/privacy/ |

Use the VersaPickle Support URL and Privacy Policy URL in their corresponding
App Store Connect fields **after the pages are live**. The product URL can be
used as the optional Marketing URL. Add an accessible link to the hosted policy
inside the app as well; this website-only change does not modify the iOS app.

## Release and policy maintenance

The VersaPickle privacy and support text describes the current development app:

- Direct DUPR authentication and requests; passwords and verification codes are
  not saved. Session credentials and account identity are in the device Keychain.
- Local roster storage and cached match history, excluded from device backups.
- On-device screenshot text recognition; optional location filtering with Apple
  place services and selected coordinates sent to DUPR.
- Separate Disconnect and Clear history actions. The DUPR identity binding is
  retained; the current app has no control to erase it or switch identities.
  Keychain entries may survive app deletion. Do not claim that clearing history
  or uninstalling erases every stored identifier.
- No VersaPickle server, advertising SDK, analytics service, or cloud sync.
- CSV exports and support correspondence leave the device only through the
  destinations the user chooses. Those services have separate privacy practices.

Before public release, reconcile this wording with the shipping build and any
DUPR-approved integration requirements. Review the retained account identity and
its deletion controls as part of release preparation. The separately prepared
Ratings Plus source uses StoreKit for purchase verification and restoration and sends Apple a stable pseudonymous token
derived from the verified DUPR user ID. The policy now covers that behavior
when enabled. Reconcile it with the combined shipping build before release.

DUPR permission has been requested, not granted. Website readiness does not
establish approval for the app integration or replace App Store review. The
website does not promise that unavailable or restricted history can be unlocked.

Keep these existing contact addresses working:

- `support@versagaldigital.com`
- `privacy@versagaldigital.com`

They were retained from the published source; this update did not test email
delivery. No support messages have been sent.

When the app launches, add its verified App Store listing and update the status
on Home, Apps, the VersaPickle product page, Support, and DUPR & your data. Confirm
that privacy disclosures and App Store Connect answers match actual behavior.

## Validation of this update

- All 318 local references and fragment targets across 11 HTML pages resolve.
- Chromium checks passed for Home, Apps, and the four VersaPickle pages at
  320, 390, 768, and 1440 CSS pixels. Product and privacy also passed at 150%
  root text size on mobile. No page overflow or missing images was found.
- Verified keyboard scrolling in the gallery, larger-image links, and demo
  FAQ expansion. Checked the retained Keeper product page at mobile width.
- Visually inspected desktop and mobile product layouts, the demo guide, and
  the feature comparison. These are Chromium checks, not on-device Safari tests.
- All 14 WebP variants are valid RGB images at their expected dimensions.

Local source edits are not a deployment: check GitHub Pages after committing
and pushing. The delivery package includes the patch and publishing steps.
