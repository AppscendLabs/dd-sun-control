# Project Overview — For the Owners

This doc assumes no coding background. It explains what you now own, what's safe to touch yourself, and when to call a developer.

## What this actually is

The D & D Sun Control website is **code**, not a drag-and-drop website builder (not Wix, not Squarespace, not WordPress). It's built with a framework called **Next.js**. That means:

- There's no visual "editor" or admin dashboard where you log in and drag things around.
- Every page — the home page, services, gallery, team, contact — is a text file full of code that a developer edits.
- To change anything (a phone number, a team member's bio, a photo), someone edits the code, saves it, and the website automatically rebuilds and goes live within a minute or two.

This is normal for a professional, fast, custom-built website — it's just a different workflow than a website builder. **You will need a developer on call for anything beyond the simplest text edits**, unless someone in-house learns to use GitHub's web editor (covered below).

## The three places this "lives"

1. **GitHub** — `github.com/AppscendLabs/dd-sun-control` — this is where the code is stored and version-tracked (every change ever made is recorded here, so nothing is ever truly lost).
2. **Vercel** — the hosting service that takes the code from GitHub and actually serves the live website to visitors. See [`03-deployment-vercel.md`](./03-deployment-vercel.md).
3. **The domain** — `danddsuncontrol.com` — registered separately (not part of this handoff; whoever manages the domain/DNS is a separate conversation).

## What's safe to change without a developer

If someone on your team is comfortable clicking around GitHub's website (not writing code, just editing text in a browser), these are the lowest-risk edits:

- **Phone number, email, address, business hours, map links** — all in one file: `src/lib/config.ts`. Changing it here updates it everywhere on the site automatically (footer, contact page, header, etc.) — that's the whole point of that file.
- **Team member names, roles, bios** — `src/app/team/page.tsx` (full bios) and `src/app/home-page-client.tsx` (shorter homepage preview — only shows the first 4 team members).
- **Social media links** — `src/components/layout/footer.tsx`, near the top (`SOCIAL_LINKS`).

To edit any of these on GitHub.com directly (no software install needed):
1. Go to the file on github.com (navigate the folders, or use GitHub's search).
2. Click the pencil icon ("Edit this file") in the top right.
3. Make your text change carefully — **do not touch anything in quotes or symbols you don't recognize, only the actual words/numbers**.
4. Scroll down, write a short description of what you changed, and click "Commit changes" (choose "Create a new branch and start a pull request" if you want a developer to double check before it goes live — recommended until your team is comfortable).

## What requires a developer

- Adding/removing whole sections, pages, or features
- Changing layout, colors, fonts, animations
- Adding new photos to the gallery (needs the image file added to `public/images/` *and* a code entry pointing to it)
- Anything involving the contact form or Google Reviews (see "Known limitations" below)
- Anything that touches `package.json`, config files, or the `src/app/api/` folder

## Known limitations (not broken — just not finished)

- **The contact form doesn't actually send an email yet.** Right now, submitting it just shows a "Thank You" message on screen — no email is sent to `ddsuncontrol@yahoo.com`. There's unfinished work for this sitting on a branch called `feature/wire-up-contact-form` (uses a service called Resend to send the email) that a developer needs to finish and merge. **Until that's done, assume quote requests submitted through the website are not being received** — customers should still be directed to call or email directly.
- **Google Reviews section** — the homepage has a "What Our Customers Say" section that's designed to pull live reviews from Google. It only shows up if a developer has configured a Google API key (see `03-deployment-vercel.md`). If that key isn't set, the section just doesn't appear — that's expected, not a bug.

## Who to call

Keep a developer/agency relationship active for anything in the "requires a developer" list. See [`04-ownership-transfer-guide.md`](./04-ownership-transfer-guide.md) for how Appscend Labs is handing this project off, including whether they remain available for ongoing changes.
