import { getPosts } from '@/lib/blog'
import { getEngagementForPosts } from '@/lib/mongodb/models/PostEngagement'
import { PostCard } from '@/components/blog/PostCard'
import type { Metadata } from 'next'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Blog | Adithya Kashyap',
  description: 'Writing about software engineering, building things, and ideas.',
}

export default async function BlogPage() {
  const posts = getPosts()

  let engagements: Record<string, { likes: number; views: number }> = {}
  try {
    engagements = await getEngagementForPosts(posts.map(p => p.slug))
  } catch {
    // MongoDB not configured — engagement data defaults to zero
  }

  const sorted = [...posts].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    const scoreA = (engagements[a.slug]?.likes ?? 0) * 2 + (engagements[a.slug]?.views ?? 0)
    const scoreB = (engagements[b.slug]?.likes ?? 0) * 2 + (engagements[b.slug]?.views ?? 0)
    return scoreB - scoreA
  })

  return (
    <main className="min-h-screen pt-24 pb-16 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-3" style={{ color: 'var(--fg)' }}>
            Blog
          </h1>
          <div className="w-10 h-1 rounded-full mb-4" style={{ background: 'var(--accent)' }} />
          <p className="text-base" style={{ color: 'var(--fg-muted)' }}>
            Writing about software engineering, building things, and ideas.
          </p>
        </div>

        {/* Post grid */}
        {sorted.length === 0 ? (
          <p style={{ color: 'var(--fg-muted)' }}>No posts yet. Check back soon.</p>
        ) : (
          <div className="grid sm:grid-cols-2 gap-4">
            {sorted.map(post => (
              <PostCard key={post.slug} post={post} engagement={engagements[post.slug]} />
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
