# VersaGal Digital website

Static HTML and CSS for https://versagaldigital.com, hosted on GitHub Pages from
`cindyisip/VersaGalDigitalWebsite`. No build step or additional hosting is needed.

## September 22, 2026: VersaPickle Ratings pages

- Updated VersaPickle’s existing product URL for Lookup Rosters, My DUPR Progress,
  and the separate Match Lookup feature.
- Added dedicated support, privacy, and DUPR data-availability pages.
- Updated Home, Apps, About, shared navigation, footers, and sitemap.
- Fixed the company name being hidden by the mobile header stylesheet; the home
  hero also visibly includes “VersaGal Digital.”
- Reused the approved VersaPickle icon. The illustrative progression diagram uses
  fictional data and is explicitly labeled as an illustration, not a screenshot.
- Retained the existing Keeper product/support/privacy content, music catalog,
  icons, screenshots, custom domain, and hosting setup. Shared footers now include
  both apps. The music page also has a canonical URL.

VersaPickle is marked **Coming soon for iPhone**. No price, purchase button,
App Store listing, DUPR endorsement, or integration approval is implied.

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
its deletion controls as part of release preparation. StoreKit licensing,
cross-device purchase restoration, and a paid tier have not been implemented by
this website update. If those features change data handling, update the policy.

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

- All 268 local file references and fragment targets across 11 HTML pages pass.
- Main content in all three Keeper pages and the music page matches the base
  repository. Assets and domain configuration are unchanged.
- Browser checks covered Home, Apps, About, VersaPickle’s four pages, and Keeper’s
  three pages at 320, 390, 768, and 1440 CSS pixels. The two enlarged-text layout
  fixes were rechecked at mobile/desktop widths; all four 150% root-text checks
  pass. The initial offscreen-image check was corrected to load lazy images
  before assessing them. No missing image file was found.
- Home, product, support, and privacy layouts were visually inspected in Chromium.
  FAQ expand/collapse controls work. This is not a Safari or on-device iOS test.
- The installer passed preflight, conflicting-local-edit refusal, backup integrity,
  complete update, repeat-install, and unrelated-file preservation checks.

The public GitHub repository was read successfully, but this workspace had no
GitHub write authentication. The update has not been pushed or deployed.
