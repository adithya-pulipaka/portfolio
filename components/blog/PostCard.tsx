import Link from 'next/link'
import type { PostMeta, PostType } from '@/lib/blog/types'

const TYPE_LABELS: Record<PostType, string> = {
  til: 'TIL',
  essay: 'Essay',
  'build-log': 'Build Log',
  opinion: 'Opinion',
}

type Props = {
  post: PostMeta
  engagement?: { likes: number; views: number }
}

export function PostCard({ post, engagement }: Props) {
  const likes = engagement?.likes ?? 0
  const views = engagement?.views ?? 0

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article
        className="rounded-xl p-6 transition-transform duration-200 group-hover:-translate-y-0.5"
        style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
        }}
      >
        {/* Top row: date + type badge + featured badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <time className="text-xs" style={{ color: 'var(--fg-muted)' }}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span
              className="px-2 py-0.5 rounded text-xs"
              style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}
            >
              {TYPE_LABELS[post.type]}
            </span>
          </div>
          {post.featured && (
            <span
              className="px-2 py-0.5 rounded text-xs font-medium"
              style={{
                background: 'oklch(0.585 0.233 277.1 / 0.12)',
                color: 'var(--accent)',
              }}
            >
              Featured
            </span>
          )}
        </div>

        {/* Title */}
        <h2
          className="font-semibold text-lg mb-2 leading-snug transition-colors duration-200"
          style={{ color: 'var(--fg)' }}
        >
          {post.title}
        </h2>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-4 line-clamp-2"
          style={{ color: 'var(--fg-muted)' }}
        >
          {post.description}
        </p>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-xs"
                style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)' }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer: reading time + engagement */}
        <div className="flex items-center justify-between text-xs" style={{ color: 'var(--fg-muted)' }}>
          <span>{post.readingTime}</span>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <HeartIcon /> {likes}
            </span>
            <span className="flex items-center gap-1">
              <EyeIcon /> {views.toLocaleString()}
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}

function HeartIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}
