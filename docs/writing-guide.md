# Writing Guide

Personal reference for writing consistently and well on this blog.

---

## Finding your angle

You're not a tutorial site. Your edge is your perspective — what confused you, what clicked, what you wish existed. "Here's how X works" is forgettable. "Here's what I got wrong about X and what actually fixed it" is readable.

The digital notebook angle: write the post you'd want to find when you Google the problem 6 months from now.

---

## Post formats

| Type | Length | Cadence | When to use |
|---|---|---|---|
| **TIL** | 200–400 words | High frequency | One specific thing you learned — a gotcha, a flag, a behavior you didn't know about |
| **Essay** | 600–1500 words | Every couple weeks | Something you've been thinking about for a while; needs development |
| **Build Log** | 800–2000 words | Per project | Document a project as you build it; naturally becomes a post series |
| **Opinion** | 400–800 words | As needed | A stance on a tool, pattern, or tradeoff — these get shared the most |

---

## Practical habits

- Keep a running note called "things that confused me this week" — these become your TIL posts
- Draft in one sitting, edit on a second pass; never edit while drafting
- Publish imperfect — you can always update an MDX file; shipping a 70% post beats a perfect post that never ships
- Short sentences — developers skim; put the punchline first, explanation after
- Write for your past self six months ago — they're your best reader

---

## On frequency

2–3 posts/week is ambitious for essays or build logs — totally doable for TILs. A realistic mix:

- 1 essay or build log per week
- 1–2 TILs whenever something surprises you

Consistency matters more than volume early on. One post a week for 3 months beats a burst then silence.

---

## Post type frontmatter

Every post has a `type` field in frontmatter that controls the badge shown on the blog listing page:

```yaml
type: til       # → "TIL"
type: essay     # → "Essay"
type: build-log # → "Build Log"
type: opinion   # → "Opinion"
```

Default is `essay` if omitted. Pick the type before you start writing — it shapes how you approach the draft.
