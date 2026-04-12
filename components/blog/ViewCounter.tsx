'use client'

import { useEffect, useState } from 'react'

type Props = {
  slug: string
  initialViews: number
}

export function ViewCounter({ slug, initialViews }: Props) {
  const [views, setViews] = useState(initialViews)

  useEffect(() => {
    fetch('/api/blog/views', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    })
      .then(r => r.json())
      .then((data: { views?: number }) => {
        if (typeof data.views === 'number') setViews(data.views)
      })
      .catch(() => {/* silently fail */})
  }, [slug])

  return (
    <span
      className="inline-flex items-center gap-1.5 text-sm"
      style={{ color: 'var(--fg-muted)' }}
    >
      <EyeIcon />
      {views.toLocaleString()} views
    </span>
  )
}

function EyeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
