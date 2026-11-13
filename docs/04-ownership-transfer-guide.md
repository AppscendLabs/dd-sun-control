# Ownership Transfer Guide — For Appscend Labs

This covers how to hand off the GitHub repo and Vercel project to the D & D Sun Control owners' kids. The domain (`danddsuncontrol.com`) is explicitly **out of scope** for this handoff — whoever manages DNS/registration today keeps doing so; just be aware of the risk noted at the bottom.

There are two reasonable end states. Decide which one applies before touching anything — reversing a transfer after the fact is more painful than picking correctly up front.

## Option A: Full transfer — kids become the real owners

Appscend Labs ends up with no special access unless re-invited later. Good if the relationship is ending and the family wants full independence.

### Prerequisites
- The kid(s) need their own GitHub account (free) and their own Vercel account (free, can sign up with the same GitHub account via "Continue with GitHub").
- Confirm which specific person is the receiving owner — GitHub/Vercel transfers go to one account at a time.

### Steps

1. **GitHub repo transfer**
   - Go to `github.com/AppscendLabs/dd-sun-control` → **Settings** → scroll to the **Danger Zone** → **Transfer ownership**.
   - Enter the receiving GitHub username, confirm.
   - This preserves full commit history, branches, and issues. Appscend's org loses access unless added back as a collaborator afterward.
   - **Do this before touching Vercel** — Vercel's GitHub integration needs to see the final repo location.

2. **Vercel project transfer**
   - In the Vercel dashboard, open the project → **Settings → General → Transfer Project**.
   - Choose the destination: the new owner's personal Vercel account (they'll need to accept the transfer invite).
   - A true "Transfer Project" (not deleting and re-importing) **preserves environment variables and domain settings** — this is the important part. Do not delete the existing project and re-import fresh; that loses the env vars (`GOOGLE_PLACES_API_KEY`, `GOOGLE_PLACE_ID`) and they'd need to be re-entered manually from scratch.
   - After transfer, double check **Settings → Git** still shows the repo correctly connected (sometimes a git integration needs re-authorizing after an ownership change — if deployments stop triggering on new commits, this is the first thing to check).

3. **Sanity check**
   - Push a trivial commit (or just re-trigger a deploy) and confirm it still builds and goes live under the new ownership.
   - Confirm `danddsuncontrol.com` still resolves correctly in Vercel's **Domains** tab under the new project owner.

4. **Local environment cleanup**
   - Anyone with a local clone of the repo needs to update their git remote:
     ```bash
     git remote set-url origin https://github.com/<new-owner>/dd-sun-control.git
     ```

### What this means going forward
Appscend Labs has zero access. If the family wants you to make a future change, they'd need to add you back as a GitHub collaborator and a Vercel team member each time, or you'd work from a fork and send pull requests.

## Option B: Kids get access, Appscend Labs stays as maintainer

Appscend keeps the GitHub org and Vercel account as the technical owner (handles billing, infra, bigger changes); the kids get just enough access to make small content edits themselves (see `01-overview-for-owners.md` for what's "safe" to edit).

### Steps

1. **GitHub access**
   - `github.com/AppscendLabs/dd-sun-control` → **Settings → Collaborators and teams** → add the kid(s)' GitHub accounts.
   - Role recommendation: **Write** access if they'll edit files directly on github.com and commit to a branch/PR (recommended workflow — see below), not **Admin** (avoids accidental repo settings changes, like deleting the repo or changing default branch).

2. **Vercel visibility (optional)**
   - If they want to see deployment status/logs themselves: Vercel dashboard → project → **Settings → Members** → invite them with a **Member** or **Viewer** role, scoped to just this project if the Vercel plan allows it. Billing/ownership stays with Appscend's account.

3. **Recommend the safer edit workflow**
   - Rather than letting them commit straight to `main` (which deploys instantly to the live site), ask them to use GitHub's "Create a new branch and start a pull request" option when editing a file in the web UI. That triggers a Vercel preview deployment they (or you) can check before merging — mistakes never go live by accident.

### What this means going forward
This is the lower-risk option for a family with zero engineering background, since someone with context (you) is still in a position to catch build-breaking mistakes before they hit the live site — while still letting them make small day-to-day edits (phone number, team bios) without needing to text you every time.

## Recommendation

Given the kids have no engineering experience, **Option B is the safer default**, at least for the first several months. It doesn't foreclose Option A — you can always do a full transfer later once they're comfortable, or once the business relationship actually ends. Fully transferring ownership on day one to someone who's never used GitHub means the first build-breaking typo has nobody positioned to catch it before it's live, and no account to easily fall back to.

## One thing to flag regardless of which option: the domain

Domain transfer was explicitly excluded from this handoff, but it's worth saying out loud: if `danddsuncontrol.com` is registered under an Appscend-controlled account (registrar or DNS), and that relationship ends, the domain itself (not just the code/hosting) needs a separate, deliberate conversation — otherwise the site can go dark even though the code and Vercel project are perfectly fine. This doc doesn't solve that; it's just flagged so it isn't forgotten.
