# VersaGal Digital website

Complete static website update for https://versagaldigital.com, prepared
September 21, 2026. Based on the existing public GitHub repository
`cindyisip/VersaGalDigitalWebsite`, commit
`688fba787d3569e4ebda47ba462a0b2dec471aef`.

## Included in this update

- A new VersaPickle Tools app logo: an ivory and court-green V with a lime
  pickleball, supplied as an opaque 1024 × 1024 PNG.
- Home, Apps, and About now introduce both VersaLink Keeper and VersaPickle Tools.
- VersaLink Keeper has real iPhone screenshots, including Fave Restaurants,
  an iPad section, current features, and free-versus-lifetime pricing.
- Keeper support includes creating a folder while adding a link, folder order,
  search, deletion, previews, sharing, exports, recovery, and purchase restoration.
- Keeper privacy explains local storage, external preview requests, exports,
  device backups, purchases, and support communications.
- A new `/apps/versapickle/` page introduces Roster Lookup: imported player names,
  location filters, review of profile matches, ratings, saved rosters, and CSV export.
- Responsive layouts, image sizes, descriptive metadata, a sitemap, and robots.txt.

The music catalog, domain configuration, VersaGal Digital brand assets, and
existing VersaLink Keeper icon are preserved. The website uses plain HTML and
CSS; no build step or additional paid hosting is needed.

## Update the existing website

Unzip this download outside your website repository. Copy the **contents** of
`versagal-digital-site` into your existing `VersaGalDigitalWebsite` folder,
merging folders and replacing matching files. Keep the existing repository.
Save or commit any of your own uncommitted website changes before copying.

For a bulk copy in Terminal, replace these paths with your actual paths:

```bash
rsync -av "/path/to/download/versagal-digital-site/" "/path/to/VersaGalDigitalWebsite/"
cd "/path/to/VersaGalDigitalWebsite"
git status
git diff --stat
```

The source's trailing slash copies its contents. This command does not delete
destination files. After reviewing the changes:

```bash
git add index.html styles.css about apps assets README.md robots.txt sitemap.xml
git commit -m "Add VersaPickle Tools and refresh VersaLink Keeper launch pages"
git push
```

The existing GitHub Pages setup publishes the pushed changes. This package has
not been pushed and does not change the live website by itself. No new repository,
DNS changes, or hosting setup are needed.

## Preview locally

Run from the website folder, then open http://localhost:8000:

```bash
python3 -m http.server 8000
```

The Spotify player and external destinations require an internet connection.

## App URLs

- Keeper marketing: https://versagaldigital.com/apps/versalink/
- Keeper support: https://versagaldigital.com/apps/versalink/support/
- Keeper privacy: https://versagaldigital.com/apps/versalink/privacy/
- VersaPickle Tools: https://versagaldigital.com/apps/versapickle/

The existing support and privacy URLs remain unchanged. Verify the live pages
after GitHub Pages finishes deployment.

## Launch details

Keeper is marked **Coming soon for iPhone and iPad**. It offers 10 free saved links
(including archived links), with an optional US$9.99 one-time lifetime unlock.
Regional prices and taxes may vary; Apple's confirmation shows the final price.
JSON and CSV exports are free. JSON import and local recovery restore require
the lifetime unlock. Restores replace the collection rather than merging it.

VersaPickle Tools is marked **In development for iPhone**. Its first tool is
Roster Lookup. Live lookups require DUPR sign-in. The page does not claim a direct
CourtReserve connection or affiliation with either service. Match tracking and
outcome prediction are not presented as initial features.

Neither app has an invented App Store link or download badge. When each app is
public, add its real listing link and update its status on Home, Apps, and the
product page. Update Keeper's support introduction at the same time.

## Logo and screenshots

The new app icon is `assets/versapickle-tools-icon.png`. This website update does
not install the icon into an Xcode project. The separate 1024 PNG can be used
for that app's asset catalog when ready.

Keeper screenshots are WebP exports of the supplied real screenshots. The two
sizes of each image reduce downloads on small screens. The gallery supports
horizontal scrolling and links to larger images.

## Policy and contact maintenance

Keep Keeper's privacy policy aligned with the app's actual behavior. Automatic
previews contact linked websites and providers; turning them off stops new
requests but cached information can still appear. This website update does not
complete App Store Connect's privacy or content-rights declarations.

No new analytics scripts have been added. The existing music page includes
Spotify's player. Confirm your support and privacy email forwarding receives
messages at `support@versagaldigital.com` and `privacy@versagaldigital.com`.

## Validation

All 159 local file references and fragment targets across the eight pages pass.
The music page, CNAME, original brand assets, and Keeper app icon match the
existing repository byte for byte. The seven edited or new HTML pages were
checked in Chromium at 390, 768, and 1440 pixels wide. Images loaded, page widths
stayed within the viewport, and FAQ controls opened successfully. Home and both
product pages were visually inspected. The existing music page was preserved;
external services and live App Store purchases are outside this website check.
