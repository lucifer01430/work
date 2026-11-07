# Harsh Pandey — Developer Portfolio

A one-page developer portfolio built with plain **HTML, CSS, JavaScript and jQuery**.
No framework, no build step, no `npm install`. Open `index.html` and it runs.

---

## Folder structure

```
harsh-portfolio/
├── index.html                  Page markup, SEO/Open Graph tags, inline icon sprite
├── .nojekyll                   Tells GitHub Pages to serve files as-is
├── README.md
└── assets/
    ├── css/
    │   └── style.css           Design tokens, layout, components, animations, responsive rules
    ├── js/
    │   ├── config.js           YOUR SETTINGS: email, links, availability badge, preloader, hints
    │   ├── data.js             YOUR CONTENT: projects, repositories, skills
    │   └── main.js             Rendering + interactions (jQuery)
    ├── vendor/
    │   └── jquery-4.0.0.min.js jQuery, self-hosted (no CDN needed)
    ├── fonts/
    │   ├── bricolage-grotesque-latin.woff2   Headings + body (SIL Open Font License)
    │   └── jetbrains-mono-latin.woff2        Code/terminal text (SIL Open Font License)
    └── img/
        ├── harsh-pandey.webp   Profile photo (About section)
        ├── og-image.jpg        Social share preview (1200×630)
        ├── favicon.svg, favicon-32.png, apple-touch-icon.png
        └── projects/           Project screenshots (1200×750, 16:10)
```

## Run it locally

Any of these work:

- **Double-click `index.html`.** Everything works from `file://`.
- **Local server** (closer to how it behaves online):
  ```bash
  cd harsh-portfolio
  python3 -m http.server 8080        # then open http://localhost:8080
  # or
  npx serve .
  ```
- **VS Code:** right-click `index.html` → *Open with Live Server*.

## "Build" for production

There is no build step. The folder **is** the production site.
Before publishing:

1. In `assets/js/config.js` set `showEditHints: false` (hides the "Add screenshot" notes).
2. Check `availability` in the same file says what is true right now, or set `enabled: false`.
3. Add the five missing screenshots (see below).

Optional: minify `style.css` / `main.js` with any online minifier. The whole folder is about
1 MB, most of it project screenshots, which lazy-load as visitors scroll.

## Editing content

### Personal settings — `assets/js/config.js`

| Setting | What it does |
|---|---|
| `email` | Used by every email button and the copy-email button |
| `github`, `portfolio` | Profile links in the contact section, footer and mobile menu |
| `availability.enabled` / `label` | The green "Available for…" badge (hero + contact). Turn off any time |
| `preloader` | `false` switches off the terminal intro |
| `showEditHints` | Shows "Add screenshot: …" notes on placeholder thumbnails |

### Projects — `assets/js/data.js`

Three lists: `featured` (main showcase), `additional` (More Experiments & Projects) and `repos`
(Code & Experiments). Each entry is documented at the top of the file. To add a project, copy an
existing block, change the values, save, refresh.

- `tech: []` — leave empty until the stack is confirmed; nothing is shown for an empty list.
- `label` — optional status badge such as `"Concept"`, `"Prototype"` or `"Demo project"`.
- `group` (featured only) — which filter tab it appears under: `saas`, `apps` or `websites`.

### Screenshots

Screenshots of your GitHub Pages demos are already included. They were captured from your
public repositories, so images your pages load from external sites (Unsplash, etc.) may be
missing in a few of them; replace any you'd like with a fresh capture.

**Still needed** (these sites currently show a clean placeholder):

| Project | Save the file as | Then set in `data.js` |
|---|---|---|
| GymPulse | `assets/img/projects/gympulse.webp` | `image: "assets/img/projects/gympulse.webp"` |
| GymPulse Sales CRM | `assets/img/projects/gympulse-crm.webp` | `image: "assets/img/projects/gympulse-crm.webp"` |
| The Aviyaan | `assets/img/projects/the-aviyaan.webp` | `image: "assets/img/projects/the-aviyaan.webp"` |
| Aviyaan Gallery Showcase | `assets/img/projects/aviyaan-gallery.webp` | `image: "assets/img/projects/aviyaan-gallery.webp"` |
| QR Management Suite | `assets/img/projects/qr-suite.webp` | `image: "assets/img/projects/qr-suite.webp"` |

How to capture: open the site in Chrome at a 1440×900 window → DevTools (F12) →
`Ctrl+Shift+P` → "Capture screenshot". Resize to **1200×750** and save as WebP or JPG
(squoosh.app does both). JPG/PNG work too: just use the matching extension in `data.js`.

If a screenshot path is wrong or the file fails to load, the card falls back to the
placeholder automatically, so the layout never breaks.

### Profile photo

Replace `assets/img/harsh-pandey.webp` with any square image (640×640 or larger).

### Icons

Icons live in an inline SVG sprite at the top of `index.html` (Lucide + Simple Icons).
Use one anywhere with:
```html
<svg class="icon"><use href="#i-mail"/></svg>      <!-- Lucide: i-<name> -->
<svg class="icon"><use href="#si-github"/></svg>   <!-- Simple Icons: si-<name> -->
```
Skills in `data.js` reference these same ids.

## Deploy to GitHub Pages

**Option A — replace your current portfolio repo** (`lucifer01430/Portfolio`)

```bash
git clone https://github.com/lucifer01430/Portfolio.git
cd Portfolio
# move your old files to a backup branch first if you want to keep them:
git checkout -b old-portfolio && git push -u origin old-portfolio && git checkout main
# copy the contents of harsh-portfolio/ into this folder (overwrite), then:
git add -A
git commit -m "New portfolio"
git push
```
Pages will update at `https://lucifer01430.github.io/Portfolio/` within a minute or two.

**Option B — new repository**

1. Create a repo (e.g. `portfolio-v2`) and push the contents of this folder to `main`.
2. Repo → **Settings → Pages** → *Deploy from a branch* → `main` / `(root)` → Save.
3. Site goes live at `https://lucifer01430.github.io/portfolio-v2/`.

All paths are relative, so the site works under any repo name.

**Option C — your own user site**: name the repo `lucifer01430.github.io` and the site is served at
`https://lucifer01430.github.io/`.

## Custom domain

1. Repo → **Settings → Pages → Custom domain** → enter e.g. `harshpandey.dev` → Save
   (GitHub creates a `CNAME` file for you).
2. At your domain registrar add DNS records:
   - Apex domain (`harshpandey.dev`): four **A** records →
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www` subdomain: a **CNAME** record → `lucifer01430.github.io`
3. Back in Settings → Pages, tick **Enforce HTTPS** once the certificate is issued.
4. Update the URLs in `index.html` (`canonical`, `og:url`, `og:image`, `twitter:image`)
   to the new domain so link previews keep working.

Any static host (Netlify, Vercel, Cloudflare Pages) also works: upload the folder, no build command.

## Features checklist

- Terminal-style preloader: plays once per browser session, has a Skip button (and Esc),
  is skipped automatically for visitors who prefer reduced motion, has a hard 4.2 s cap,
  and a CSS failsafe hides it even if JavaScript fails.
- Sticky navbar with sliding active-section indicator; animated full-screen mobile menu
  (Esc to close, focus kept inside while open).
- Hero with typed code editor, subtle grid, floating code symbols and moving glow.
- Project filtering (All / SaaS & dashboards / Web apps / Websites).
- Scroll reveals, card hover lift, image zoom, animated arrows, step timeline that fills in.
- Copy-email button with confirmation.
- Lazy-loaded images with automatic placeholder fallback.
- Semantic HTML, skip link, visible keyboard focus, ARIA labels, `prefers-reduced-motion` support.
- SEO title/description, canonical, Open Graph + Twitter cards, JSON-LD Person schema, favicons.
- Tested at 1440, 1280, 1024, 768, 430 and 375 px with no horizontal overflow and no console errors.

## Credits

- [jQuery](https://jquery.com) (MIT)
- [Lucide](https://lucide.dev) icons (ISC) and [Simple Icons](https://simpleicons.org) (CC0).
  Brand icons are trademarks of their owners.
- Fonts: [Bricolage Grotesque](https://github.com/ateliertriay/bricolage) and
  [JetBrains Mono](https://www.jetbrains.com/lp/mono/), both SIL Open Font License.
