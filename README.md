# Cut Department website

Static HTML/CSS/JavaScript site for GitHub Pages.

## Publish
Upload **all files and the assets folder** to the root of the `cutdepartment-site` repository, replacing the old versions. In GitHub Settings → Pages, publish the `main` branch from `/ (root)`.

## Customize
- Update social URLs in `script.js` once accounts are finalized. Unconfigured links remain hidden.
- Contact email is `hello@cutdepartment.com` in `script.js` and `about.html`.
- The homepage image is `assets/vinyl-background.webp`, and the About page image is `assets/about-vinyl.webp`.
- All website text is real HTML, not part of the background photograph.

## Domain
Configure `cutdepartment.com` under GitHub Pages before updating Hover DNS. Keep existing Google Workspace MX and TXT records intact.


## Version 3 changes
- Removed duplicate bottom-left NYC footer; NYC remains under the homepage tagline.
- Instagram, TikTok and YouTube icons appear in the top-right navigation even before URLs are entered. Unconfigured icons are intentionally inactive. Set real URLs in `script.js` to activate them.
- About typography and image spacing tightened for typical desktop viewport heights. Short mobile screens may still scroll so text remains readable.
