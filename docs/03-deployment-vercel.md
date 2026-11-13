# Deployment — How This Site Goes Live on Vercel

This project is a standard Next.js app, which means it deploys to **Vercel** (the company that makes Next.js) by connecting directly to the GitHub repo. There is no separate "build and upload" step a human runs manually — it's automatic.

> **Note on verification:** This doc describes the standard Vercel + GitHub + Next.js setup, which is almost certainly how this project is configured. I don't have direct access to the Vercel dashboard from here, so **whoever currently has Vercel access should confirm** the specific settings below (branch mapping, env vars, which account owns the project) match what's actually configured, and correct this doc if anything differs.

## The mental model

```
You push code to GitHub  →  Vercel notices automatically  →  Vercel builds the site  →  Vercel serves it live
```

Vercel has a "GitHub App" installed that watches the `AppscendLabs/dd-sun-control` repo. Every time someone pushes a commit, Vercel:

1. Pulls the latest code
2. Runs `npm install` then `npm run build` (which runs `next build`)
3. If the build succeeds, makes that version live
4. If the build fails, the previous live version stays up — a broken build does **not** take the site down

## Branch → environment mapping

- **`main` branch → Production** (`danddsuncontrol.com`). Anything merged into `main` goes live on the real site, usually within 1-2 minutes.
- **Any other branch** (e.g. `staging`, `feature/xyz`) **→ Preview deployment**. Vercel builds a temporary, private-ish URL (like `dd-sun-control-git-staging-appscendlabs.vercel.app`) so changes can be reviewed before merging to `main`. These preview URLs are also auto-generated for every GitHub Pull Request.
- Opening a Pull Request on GitHub against `main` will show a Vercel bot comment with a clickable preview link — **this is the easiest way for a non-technical person to "see" a change before it's live.**

## Where things are configured (Vercel dashboard)

Log in at vercel.com with the account that owns this project (see `04-ownership-transfer-guide.md` for who that should be going forward). The project is likely named `dd-sun-control`.

- **Settings → Environment Variables** — this is where `GOOGLE_PLACES_API_KEY` and `GOOGLE_PLACE_ID` need to be set for the Google Reviews section to work (see `02-project-structure.md`). If the homepage reviews section isn't showing up, check here first.
- **Settings → Domains** — `danddsuncontrol.com` should be listed here, pointed at the Production environment. (Domain registration/DNS itself is managed outside Vercel — not covered by this doc.)
- **Settings → Git** — shows which GitHub repo/branch is connected. If this handoff involves moving the GitHub repo, this is the setting that can get disconnected — see the transfer guide.
- **Deployments tab** — a timeline of every build ever run, with logs. Useful for diagnosing "why isn't my change showing up."

## How to check if a deploy worked

1. Go to the Vercel dashboard → the project → **Deployments** tab.
2. The top one (if triggered by `main`) should say "Ready" with a green dot, next to the commit message of the latest change.
3. If it says "Error" or "Failed," click into it to see the build log — this is where a developer would start debugging.

## Rolling back a bad deploy

If a change breaks the live site:

1. Go to **Deployments** in the Vercel dashboard.
2. Find the last deployment that was working (before the bad one).
3. Click the **`...`** menu on that deployment → **"Promote to Production"** (wording may say "Redeploy" depending on Vercel's current UI).

This instantly points `danddsuncontrol.com` back at the last-good build — it does not touch the GitHub history, so the actual code fix can happen separately without time pressure.

## Local development (for developers)

```bash
npm install     # one-time, or after package.json changes
npm run dev     # starts a local copy at http://localhost:3000
npm run build   # builds for production — run this before pushing to catch build errors early
npm run lint     # checks code style/errors
```

Requires Node.js (the version used during development was v20; anything 20+ should work fine since there's no `engines` restriction in `package.json`).
