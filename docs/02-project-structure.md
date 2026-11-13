# Project Structure

A map of every meaningful file and folder, and what it controls. Written so a developer unfamiliar with this specific project can get oriented fast — but each section also notes the plain-language "what this means" for non-technical readers.

## Tech stack

- **Next.js 16** (App Router) — the framework; controls routing, server/client rendering, build process
- **React 19** — the UI library Next.js is built on
- **TypeScript** — JavaScript with type-checking
- **Tailwind CSS v4** — utility-class styling (no separate CSS files per component; styling is done with classes like `bg-yellow-500` directly in the markup)
- **Motion** (`motion/react`, formerly Framer Motion) — the fade-in/slide-in animations used on every section
- **lucide-react** — the icon set (phone, mail, map pin, etc.)

No database, no CMS, no admin login. All page content is hardcoded in the page files as JavaScript arrays/objects.

## Folder-by-folder

```
src/
  app/                              Next.js routes — one folder per URL path
    layout.tsx                      Root layout: wraps every page with Navbar + Footer,
                                     sets site-wide metadata (title, description, fonts),
                                     injects the LocalBusiness SEO schema
    page.tsx                        Home page route ("/") — just metadata, renders home-page-client.tsx
    home-page-client.tsx            ALL actual home page content (hero, benefits, services preview,
                                     energy savings, reviews, team preview, service areas, CTA)
    globals.css                     Tailwind import + a few hand-written rules (iOS input zoom fix,
                                     smooth scroll, the client-logo marquee animation)
    robots.ts                       Generates /robots.txt (tells search engines what to crawl)
    sitemap.ts                      Generates /sitemap.xml (lists all pages for search engines)
    api/
      reviews/route.ts              Server endpoint the homepage calls to fetch Google reviews
                                     (proxies the Google Places API so the API key stays server-side)
    services/
      page.tsx                      "/services" page content (all client-rendered, "use client")
      layout.tsx                    Page-specific <title>/description + Service + Breadcrumb SEO schema
    gallery/
      page.tsx                      "/gallery" — filterable photo grid, category tabs
      layout.tsx                    Page-specific metadata + Breadcrumb schema
    team/
      page.tsx                      "/team" — full team bios
      layout.tsx                    Page-specific metadata + Breadcrumb schema
    contact/
      page.tsx                      "/contact" — contact form, FAQ, map embed
      layout.tsx                    Page-specific metadata + FAQ + Breadcrumb schema

  components/
    layout/
      navbar.tsx                    Sticky header. Handles: scroll-based style change (transparent on
                                     homepage hero → white once scrolled), mobile hamburger menu,
                                     active-link highlighting
      footer.tsx                    Site footer — quick links, services list, contact info, socials
    client-banner.tsx               Scrolling logo marquee ("Trusted by leading businesses")
    google-reviews.tsx               Fetches /api/reviews client-side, renders review cards or a
                                     loading skeleton; renders nothing if no API data is available
    seo/
      json-ld.tsx                   4 reusable components that output Schema.org JSON-LD <script> tags:
                                     LocalBusinessJsonLd, FAQJsonLd, ServiceJsonLd, BreadcrumbJsonLd

  lib/
    config.ts                       BUSINESS constant — single source of truth for name, phone, email,
                                     address, hours, site URL, Google Maps links. Imported everywhere
                                     that needs this info so it's never duplicated.
    utils.ts                        cn() helper for merging Tailwind classes conditionally

public/
  images/                           All static images, organized by section (clients/, team/, work/
                                     auto|commercial|paint-protection|residential/), plus logo.png,
                                     hero.jpg, rollnwrapz-logo.png
```

## How a page is assembled

Every route follows roughly the same shape:

1. `layout.tsx` (if present) sets that page's browser-tab title/description and any extra SEO schema (FAQ, Service, Breadcrumb).
2. `page.tsx` renders the actual visible content — usually one `"use client"` component with local `const` arrays of data (e.g. `SERVICES`, `TEAM_MEMBERS`, `GALLERY_ITEMS`) that get `.map()`'d into JSX.
3. The root `layout.tsx` (`src/app/layout.tsx`) wraps *all* of this with the `Navbar` and `Footer`, so those don't need to be imported per-page.

The home page is the one exception: it splits `page.tsx` (server component, exports metadata) from `home-page-client.tsx` (the actual client-rendered content with animations), because it needs both server-rendered metadata and client interactivity without a dedicated `layout.tsx`.

## Content is duplicated in a couple of places — by design, not a bug

- `TEAM_MEMBERS` is defined once in `home-page-client.tsx` (shows only the first 4, as a homepage teaser) and again in full in `team/page.tsx` (all 5, with longer bios). Updating one doesn't update the other — **if a team member changes, update both files**.
- Similarly, service descriptions appear in both `home-page-client.tsx` (short teaser cards) and `services/page.tsx` (full detail).

## Environment variables the code expects

These aren't in the repo (they're gitignored, set in Vercel directly). See [`03-deployment-vercel.md`](./03-deployment-vercel.md) for where to set them.

| Variable | Used by | What happens if missing |
|---|---|---|
| `GOOGLE_PLACES_API_KEY` | `src/app/api/reviews/route.ts` | Reviews API returns 503; the `GoogleReviews` homepage section silently doesn't render |
| `GOOGLE_PLACE_ID` | `src/app/api/reviews/route.ts` | Same as above |
| `RESEND_API_KEY` | *(not yet merged — see below)* | N/A until that branch ships |

## Unmerged work worth knowing about

There's a branch, `feature/wire-up-contact-form`, not yet merged into `main`, that adds a real `src/app/api/contact/route.ts` using the `resend` npm package to actually email quote requests to `ddsuncontrol@yahoo.com`. Currently on `main`, the contact form's `handleSubmit` just fakes a success state locally — see `01-overview-for-owners.md` for the practical implication of this.
