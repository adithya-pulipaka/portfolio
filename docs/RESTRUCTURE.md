# PRD: Site Restructure — Landing Page + About Page Split

**Author**: Adithya Kashyap Pulipaka  
**Date**: 2026-04-20  
**Status**: Approved — implementing on `blog-setup` branch  
**Parent PRD**: `docs/PRD.md`

---

## Context

The landing page currently renders everything in a single scroll (Hero → About → Experience → Projects → Contact). The goal is to make the landing a fast, focused impression — not a resume dump. Full professional details move to a dedicated `/about` page. The landing instead teases the two things visitors care about most: recent writing and current projects.

---

## Decisions

| Decision | Choice | Reason |
|---|---|---|
| Badge text | "Open to conversations" | Not actively job hunting; want to signal openness without implying urgency |
| Landing structure | Hero → Latest Writing → Things I'm building → Contact | Lightweight impression; routes curious visitors to the right place |
| Full details | Dedicated `/about` page | Bio + skills + photo + experience + projects, cleanly organized |
| Photo placement | About page only | Landing hero stays text-only — cleaner, less cluttered |
| Navigation | Home \| About \| Blog | Replaces anchor-heavy nav; works across all pages |

---

## New Site Structure

```
/ (landing)
  Hero               ← badge: "Open to conversations"; "View projects" → /about#projects
  Latest Writing     ← 2–3 newest posts + "See all →" link to /blog
  Things I'm building ← pinned projects + "See all →" link to /about#projects
  Contact

/about
  Bio + Skills + Photo  (id="about")
  Experience            (id="experience")
  Projects              (id="projects")

/blog           ← unchanged
/blog/[slug]    ← unchanged
```

---

## Implementation Checklist

### 1. Hero — badge + CTA
- [ ] Change badge text: `"Open to opportunities"` → `"Open to conversations"`
- [ ] Update "View projects" href: `"/#projects"` → `"/about#projects"`
- **File:** `components/portfolio/Hero.tsx`

### 2. Navbar — new page-level links
- [ ] Replace anchor links with: `Home (/)`, `About (/about)`, `Blog (/blog)`
- **File:** `components/ui/Navbar.tsx`

### 3. Projects data — add `pinned` flag
- [ ] Add `pinned?: boolean` to `Project` type
- [ ] Mark 2–3 projects `pinned: true`
- **File:** `lib/data/projects.ts`

### 4. Extract `ProjectCard` component
- [ ] Move `ProjectCard` out of `Projects.tsx` into its own file
- [ ] Update `Projects.tsx` to import from new file
- **Files:** `components/portfolio/ProjectCard.tsx` (new), `components/portfolio/Projects.tsx`

### 5. Anchor IDs on About-page sections
- [ ] Confirm `id="experience"` on Experience section (already present)
- [ ] Confirm `id="projects"` on Projects section (already present)
- **Files:** `components/portfolio/Experience.tsx`, `components/portfolio/Projects.tsx`

### 6. New landing teaser components
- [ ] `components/home/LatestPosts.tsx` — server component, shows 3 newest posts + engagement
- [ ] `components/home/FeaturedProjects.tsx` — server component, shows pinned projects

### 7. Redesign landing page (`app/page.tsx`)
- [ ] Replace full section list with: Hero, LatestPosts, FeaturedProjects, Contact

### 8. New About page
- [ ] Create `app/about/page.tsx` with metadata + About + Experience + Projects sections

---

## Files Changed

| File | Action |
|---|---|
| `docs/RESTRUCTURE.md` | **New** — this document |
| `components/portfolio/Hero.tsx` | Update badge text + CTA href |
| `components/ui/Navbar.tsx` | New nav links (Home, About, Blog) |
| `lib/data/projects.ts` | Add `pinned` flag to type + data |
| `components/portfolio/ProjectCard.tsx` | **New** — extracted from Projects.tsx |
| `components/portfolio/Projects.tsx` | Import ProjectCard from new file |
| `components/home/LatestPosts.tsx` | **New** — blog teaser for landing |
| `components/home/FeaturedProjects.tsx` | **New** — project teaser for landing |
| `app/page.tsx` | Redesigned landing |
| `app/about/page.tsx` | **New** — full About page |

---

## Verification

1. `/` — Hero badge shows "Open to conversations"; scroll reveals Latest Writing + Things I'm building + Contact
2. `/` → "View projects" button → `/about#projects` (scrolls to projects section)
3. `/` → "See all posts" → `/blog`; "See all projects" → `/about#projects`
4. `/about` — bio + skills + photo, then experience, then projects; smooth scroll between sections
5. Nav shows `Home | About | Blog` on desktop; hamburger on mobile includes all three
6. `/blog` and `/blog/[slug]` — unchanged and working
7. Build passes (`npm run build`)
