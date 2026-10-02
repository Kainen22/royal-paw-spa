# Royal Paw Spa

Mobile dog grooming site for Royal Paw Spa. Built with Next.js, with Notion-ready content and Moego booking.

## Local

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open http://localhost:3000

## Photos

Drop images in `public/photos`:

- `hero.jpg` — home page cover
- `about.jpg` — About page
- `gallery/` — Recent grooms

## Blog updates

Homepage shows the latest 3 posts; all posts live at `/blog`.

**Option A — Notion (best for the owner):** create a database with properties `Title`, `Slug`, `Excerpt`, `Body`, `Date`, `Published`, share it with the integration, and set `NOTION_BLOG_DATABASE_ID` in env.

**Option B — code fallback:** edit `src/lib/blog-posts.ts`, commit, and redeploy.

## Version history

Every save is already on GitHub. Named checkpoints:

| Tag | What it is |
| --- | --- |
| `v1.0-launch` | First live site — lavender template, Moego, photos |
| `v2.0-van-brand` | Cream, gold, Fraunces restyle (kept if we want it later) |
| `v2.1-back-to-launch` | Current live look — same as v1, after reverting the restyle |

See them on GitHub: [releases / tags](https://github.com/Kainen22/royal-paw-spa/tags)

To put the live site back on a checkpoint, tell me which tag and I can revert it. Or locally:

```bash
git checkout v1.0-launch
```

That only looks at the old files. To change the live site, tell me which tag — we revert with a new commit so nothing is lost.
