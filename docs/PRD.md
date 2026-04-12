# PRD: Personal Portfolio + Blog — adithyakashyap.com

**Author**: Adithya Kashyap Pulipaka  
**Date**: 2026-04-05  
**Status**: Approved (ready to implement)  
**Branch**: `portfolio-v2` (new branch off master in existing repo)

---

## 1. Overview

A personal portfolio and blog site hosted at `adithyakashyap.com`. The portfolio presents professional identity suitable for sharing on LinkedIn. The blog provides a writing platform with engagement features (likes, views, sharing) under the same personal brand — not a generic platform like Medium.

---

## 2. Goals

- Professional portfolio that serves as a digital resume / personal brand hub
- Blog with lightweight engagement (likes, views, sharing) — no user accounts initially
- Single domain, cohesive visual identity
- Low operating cost (free tiers where possible)
- Architecture that can grow (auth, CMS, comments) without rewrites

---

## 3. Non-Goals (Out of Scope for v1)

- User authentication / login (deferred to a future phase)
- Contact form with email delivery (placeholder UI only)
- Headless CMS integration (future extensibility hook is built in)
- Comments system
- Analytics dashboard / admin panel (deferred with auth)

---

## 4. Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router, TypeScript) | SSG + SSR in one project, Vercel-native, highly marketable skill |
| Styling | Tailwind CSS v4 | CSS-first, utility classes, great DX, industry standard |
| Blog content | Local MDX files in `/content/blog/` | Simple to author, version-controlled, data layer abstracted for future CMS swap |
| Database | MongoDB Atlas (free M0 tier) | Likes + view counts; user already familiar with MongoDB |
| Auth | **Deferred** | Will evaluate Clerk vs NextAuth.js when admin features are scoped |
| Contact form backend | **Deferred** | Placeholder form UI in v1, backend in a follow-up |
| OG Images | `next/og` (built-in) | Dynamic per-post LinkedIn/social preview cards, zero extra cost |
| Hosting | Vercel (hobby plan, free) | Zero-config Next.js, automatic preview deploys per PR |
| Domain | adithyakashyap.com | Already owned, point DNS to Vercel |

---

## 5. Portfolio Features

### 5.1 Structure
Single-page layout with anchored sections (better for LinkedIn sharing — one URL reveals everything):

```
/ (root)
  ├── #hero       — name, tagline, CTA (view blog / download resume / contact)
  ├── #about      — short bio, photo, skills/interests
  ├── #experience — work history (timeline or card layout)
  ├── #projects   — project card grid with links
  └── #contact    — social links + placeholder contact form
```

### 5.2 Navbar
- Sticky top nav with smooth-scroll anchor links to each section
- Dark/light mode toggle
- Logo / monogram ("AK") links to home

### 5.3 Sections Detail

**Hero**
- Full-viewport height
- Large display name + tagline
- CTA buttons: "Read my blog", "View projects", "Contact me"
- Social icons (GitHub, LinkedIn, etc.)

**About**
- Short bio paragraph (professional + personal flavor)
- Photo
- Skills / tech tags

**Experience**
- Chronological list of roles
- Each entry: company, title, dates, bullet points of impact
- Content driven by a TypeScript data file (not MDX) for easy editing

**Projects**
- Card grid (2–3 columns)
- Each card: project name, short description, tech stack tags, links (GitHub / live demo)
- Content driven by a TypeScript data file

**Contact**
- Social links: LinkedIn, GitHub, email (plain display)
- Placeholder contact form (styled, no backend yet)

---

## 6. Blog Features

### 6.1 Routes
```
/blog           — listing page (latest + viral posts)
/blog/[slug]    — individual post
```

### 6.2 Content Source
- MDX files in `/content/blog/`
- Required frontmatter per post:
  ```yaml
  ---
  title: "Post Title"
  date: "2026-04-05"
  description: "One-sentence summary for cards and OG"
  tags: ["nextjs", "typescript"]
  featured: false   # true = manually curated to top
  ---
  ```
- Data layer (`lib/blog/index.ts`) exposes `getPosts()` and `getPost(slug)` — swappable for CMS later without touching UI components

### 6.3 Blog Listing Page (`/blog`)
- Grid of `PostCard` components
- "Viral" ranking formula: `featured: true` posts first, then sorted by `(likes × 2) + views` descending
- Each card shows: title, date, description excerpt, tag chips, like count, view count

### 6.4 Individual Post Page (`/blog/[slug]`)
- Full MDX rendered post
- Post metadata: date, tags, reading time estimate
- **LikeButton** — toggles like, shows count, IP-based deduplication (same IP can't like twice)
- **ViewCounter** — increments once on page load, displays count
- **ShareButtons** — two actions:
  - LinkedIn share: opens `linkedin.com/sharing/share-offsite/?url=<encodedURL>`
  - Copy link: `navigator.clipboard.writeText(url)` with a "Copied!" toast

### 6.5 OpenGraph / Social Previews
- Each post generates a dynamic OG image via `next/og`
- OG image includes: post title, site name, accent color branding
- Paste a post URL into LinkedIn composer → renders a rich card preview

---

## 7. Database Schema (MongoDB Atlas)

### Collection: `post_engagement`
```json
{
  "_id": ObjectId,
  "slug": "my-post-slug",
  "likes": 42,
  "views": 1200,
  "likedIPs": ["hash1", "hash2"]
}
```

### API Routes
| Method | Route | Purpose |
|---|---|---|
| POST | `/api/blog/likes` | Toggle like for a post (body: `{ slug }`, reads client IP) |
| POST | `/api/blog/views` | Increment view count (body: `{ slug }`) |
| GET | `/api/blog/likes` | Get current like count + whether requester has liked |

---

## 8. Design Direction

**"Bold Minimal"** — clean, whitespace-heavy layout as the foundation, with bold typographic and color accents.

- **Default mode**: Dark (developer aesthetic, easy on eyes)
- **Light mode**: Available via toggle, equally polished
- **Typography**: Large display weight font for hero headlines; clean sans-serif for body
- **Accent color**: To be chosen (candidates: electric indigo, warm amber, or teal) — one accent color used consistently
- **Animations**: Subtle — hover lift on cards, smooth section transitions, no heavy motion
- **Logo / Favicon**: "AK" monogram — simple geometric design, works at 16px (favicon) and larger

---

## 9. Implementation Phases

### Phase 1 — Foundation
- [ ] Create `portfolio-v2` branch from master
- [ ] Bootstrap Next.js 15 project (App Router, TypeScript, Tailwind v4)
- [ ] Root layout, global styles, CSS variables for theme
- [ ] Navbar component (anchors + theme toggle)
- [ ] Favicon + AK monogram (SVG)

### Phase 2 — Portfolio Sections
- [ ] Hero section
- [ ] About section
- [ ] Experience section (data-file driven)
- [ ] Projects section (data-file driven)
- [ ] Contact section (social links + placeholder form)
- [ ] Smooth scroll, responsive layout

### Phase 3 — Blog
- [ ] MDX data layer (`lib/blog/index.ts` — `getPosts`, `getPost`)
- [ ] Blog listing page `/blog`
- [ ] Individual post page `/blog/[slug]`
- [ ] MongoDB Atlas setup + `PostEngagement` model + singleton client
- [ ] `/api/blog/likes` route + `LikeButton` component
- [ ] `/api/blog/views` route + `ViewCounter` component
- [ ] `ShareButtons` component (LinkedIn + clipboard)

### Phase 4 — Polish + Deploy
- [ ] Dynamic OG images (`next/og`) for posts + portfolio page
- [ ] Mobile-first responsive pass
- [ ] Transition/animation polish
- [ ] Environment variables setup (MongoDB URI)
- [ ] Deploy to Vercel
- [ ] Point `adithyakashyap.com` DNS to Vercel

---

## 10. Future Phases (Out of Scope for v1)

- **Auth + Admin**: Clerk or NextAuth.js — log in to see engagement analytics, manage posts, feature/unfeature posts
- **Contact form backend**: Resend API for email delivery
- **CMS integration**: Swap `lib/blog/index.ts` implementation to pull from Contentful, Sanity, or Notion
- **Comments**: Add comment threads per post (requires auth)
- **RSS feed**: `/feed.xml` for blog subscribers

---

## 11. Verification Checklist

1. `npm run dev` → portfolio at `/`, all sections visible, smooth scroll works
2. Dark/light toggle → both modes render correctly
3. `/blog` → posts sorted by viral score, featured posts first
4. `/blog/[slug]` → post renders, view count increments on load
5. Like button → toggles, count updates; liking again from same browser does nothing
6. Share → LinkedIn opens with correct URL; clipboard copy shows "Copied!" toast
7. Paste post URL in LinkedIn composer → OG card shows title + branding image
8. Mobile viewport → all sections and blog pages are responsive
9. Vercel deploy → site live at `adithyakashyap.com`, env vars set correctly
