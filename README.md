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

## Version history

Every save is already on GitHub. Named checkpoints:

| Tag | What it is |
| --- | --- |
| `v1.0-launch` | First live site — lavender template, Moego, photos |
| `v2.0-van-brand` | Current look — cream, gold, Fraunces, Tanae’s copy |

See them on GitHub: [releases / tags](https://github.com/Kainen22/royal-paw-spa/tags)

To put the live site back on a checkpoint, tell me which tag and I can revert it. Or locally:

```bash
git checkout v1.0-launch
```

That only looks at the old files. To make the website go back to that version for real, we reset `main` to the tag and push. Ask first — that updates the live Vercel site.
