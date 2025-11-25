# Academic Project Page Template

### **Live demo:** <https://chenyuanqu.com/NextJS-Project-Page>

Next.js (App Router) + Tailwind v4 template for research project pages. Edit `data/project.ts` and swap assets in `public/` to make it yours.

## Finished examples
- Visual Split: <https://chenyuanqu.com/VisualSplit/>

## Features
- Next.js 15 App Router with static export to `out/`
- Tailwind CSS v4 + Geist via `next/font`
- Single-source content in `data/project.ts`
- GitHub Pages-ready: basePath config + deploy workflow included

## Quick start

```bash
cd project_page_template
npm install
npm run dev
# open http://localhost:3000
```

## Customize in minutes

1) Edit `data/project.ts`:
   - Update `meta`, `authors`, `affiliations`, `links`.
   - Replace text blocks (`introduction`, `contributions`, `methodCards`, `descriptorExplainer`, `experimentNote`).
   - Swap media in `assets`, `otherModelOptions`, `editingModelOptions`, `histogramOptions`.
   - Adjust `metricsTable` and `bibtex`.

2) Replace assets:
   - Drop new PNG/JPG/SVG/MP4 files into `public/`.
   - Reference them with `asset("/images/...")`; placeholders live under `public/images/placeholders/`.

3) Base path (for Pages):
   - Set `repoName` in `next.config.ts` to your repo name so `basePath`/`assetPrefix` are correct.

4) Styling tweaks (optional):
   - Edit `app/globals.css` and Tailwind classes in `app/page.tsx`.
   - Swap fonts in `app/layout.tsx` if you prefer another Google font.

## Content map (`data/project.ts`)

- `meta`: title, tagline, venue, quote
- `authors` / `affiliations`: hero info
- `links`: paper/code/models/poster/BibTeX
- Sections: `introduction`, `contributions`, `methodCards`
- Media: `descriptorExample`, `appAssets`, sliders (`otherModelOptions`), `metricsTable`
- `bibtex`: citation block

## Build & deploy

```bash
npm run build   # outputs static site to out/
```

Host `out/` on GitHub Pages or any static host (ensure paper/video/poster links are public).

## GitHub Pages (fork-friendly)

- Fork to your own repo/branch; go to Settings > Pages, set **Build and deployment** source to **GitHub Actions**, and every push auto-deploys.
- Workflow steps: checkout; detect package manager + caches; setup Node 20; install deps; set `NEXT_PUBLIC_BASE_PATH` to `/${{ github.event.repository.name }}`; run `next build` (static export); upload `out/`; `deploy-pages`.

## FAQ

- Images break when deployed under a subpath (e.g., GitHub Pages): either set `NEXT_PUBLIC_BASE_PATH="/<your-repo-name>"` (CI sets this automatically) or set `repoName` in `next.config.ts`, then rebuild and redeploy so `basePath`/`assetPrefix` are correct.
- Local dev works but Pages is blank/404: confirm Settings > Pages uses **GitHub Actions** as the source and that the latest workflow run succeeded.
- Deploying at the domain root instead of a subfolder: set `repoName` to an empty string (or remove `basePath`/`assetPrefix`), rebuild, and redeploy.
