import Link from 'next/link'
import { getPosts } from '@/lib/blog'
import { getEngagementForPosts } from '@/lib/mongodb/models/PostEngagement'
import { PostCard } from '@/components/blog/PostCard'

export async function LatestPosts() {
  const allPosts = getPosts()
  const latest = allPosts.slice(0, 3)

  let engagements: Record<string, { likes: number; views: number }> = {}
  try {
    engagements = await getEngagementForPosts(latest.map(p => p.slug))
  } catch {
    // MongoDB not configured — engagement data defaults to zero
  }

  if (latest.length === 0) return null

  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-card)' }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-2" style={{ color: 'var(--fg)' }}>
              Latest Writing
            </h2>
            <div className="w-8 h-1 rounded-full" style={{ background: 'var(--accent)' }} />
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium transition-colors duration-200 flex items-center gap-1"
            style={{ color: 'var(--accent)' }}
          >
            See all posts
            <ArrowRight />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {latest.map(post => (
            <PostCard key={post.slug} post={post} engagement={engagements[post.slug]} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
