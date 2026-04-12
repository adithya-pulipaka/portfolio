'use client'

import { useState } from 'react'

type Props = {
  slug: string
  title: string
}

export function ShareButtons({ slug, title }: Props) {
  const [copied, setCopied] = useState(false)

  const url =
    typeof window !== 'undefined'
      ? `${window.location.origin}/blog/${slug}`
      : `https://adithyakashyap.com/blog/${slug}` // TODO: update domain if different

  function handleLinkedIn() {
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=600')
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: select a temp input
    }
  }

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-medium uppercase tracking-widest mr-1" style={{ color: 'var(--fg-muted)' }}>
        Share
      </span>

      <button
        onClick={handleLinkedIn}
        aria-label="Share on LinkedIn"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200"
        style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}
        onMouseEnter={e => {
          const el = e.currentTarget
          el.style.borderColor = 'var(--accent)'
          el.style.color = 'var(--fg)'
        }}
        onMouseLeave={e => {
          const el = e.currentTarget
          el.style.borderColor = 'var(--border)'
          el.style.color = 'var(--fg-muted)'
        }}
      >
        <LinkedInIcon />
        LinkedIn
      </button>

      <button
        onClick={handleCopy}
        aria-label="Copy link"
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors duration-200"
        style={{
          border: `1px solid ${copied ? 'var(--accent)' : 'var(--border)'}`,
          color: copied ? 'var(--accent)' : 'var(--fg-muted)',
        }}
      >
        {copied ? <CheckIcon /> : <CopyIcon />}
        {copied ? 'Copied!' : 'Copy link'}
      </button>
    </div>
  )
}

function LinkedInIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function CopyIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
