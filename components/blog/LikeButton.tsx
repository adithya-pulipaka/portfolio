'use client'

import { useState } from 'react'

type Props = {
  slug: string
  initialLikes: number
  initialHasLiked: boolean
}

export function LikeButton({ slug, initialLikes, initialHasLiked }: Props) {
  const [likes, setLikes] = useState(initialLikes)
  const [hasLiked, setHasLiked] = useState(initialHasLiked)
  const [loading, setLoading] = useState(false)

  async function handleLike() {
    if (loading) return
    setLoading(true)

    // Optimistic update
    const optimisticLikes = hasLiked ? likes - 1 : likes + 1
    const optimisticHasLiked = !hasLiked
    setLikes(optimisticLikes)
    setHasLiked(optimisticHasLiked)

    try {
      const res = await fetch('/api/blog/likes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })
      const data = (await res.json()) as { likes?: number; hasLiked?: boolean }
      if (typeof data.likes === 'number') setLikes(data.likes)
      if (typeof data.hasLiked === 'boolean') setHasLiked(data.hasLiked)
    } catch {
      // Revert on error
      setLikes(likes)
      setHasLiked(hasLiked)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleLike}
      disabled={loading}
      aria-label={hasLiked ? 'Unlike this post' : 'Like this post'}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 disabled:opacity-60"
      style={{
        border: `1px solid ${hasLiked ? 'var(--accent)' : 'var(--border)'}`,
        color: hasLiked ? 'var(--accent)' : 'var(--fg-muted)',
        background: hasLiked ? 'oklch(0.585 0.233 277.1 / 0.08)' : 'transparent',
      }}
    >
      <HeartIcon filled={hasLiked} />
      <span>{likes}</span>
    </button>
  )
}

function HeartIcon({ filled }: { filled: boolean }) {
  return filled ? (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ) : (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
