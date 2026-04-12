import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import crypto from 'crypto'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import Link from 'next/link'
import { getPosts, getPost } from '@/lib/blog'
import { getEngagement } from '@/lib/mongodb/models/PostEngagement'
import { LikeButton } from '@/components/blog/LikeButton'
import { ViewCounter } from '@/components/blog/ViewCounter'
import { ShareButtons } from '@/components/blog/ShareButtons'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Adithya Kashyap`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  // Fetch initial engagement + check hasLiked via server-side IP
  let initialLikes = 0
  let initialViews = 0
  let initialHasLiked = false

  try {
    const headersList = await headers()
    const forwarded = headersList.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1'
    const ipHash = crypto.createHash('sha256').update(`${ip}:${slug}`).digest('hex')

    const engagement = await getEngagement(slug)
    if (engagement) {
      initialLikes = engagement.likes
      initialViews = engagement.views
      initialHasLiked = engagement.likedIPs.includes(ipHash)
    }
  } catch {
    // MongoDB not configured yet
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-2xl mx-auto">

        {/* Back link */}
        <Link
          href="/blog"
          className="link-muted inline-flex items-center gap-1.5 text-sm mb-10"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          All posts
        </Link>

        {/* Article header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-4" style={{ color: 'var(--fg)' }}>
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-sm" style={{ color: 'var(--fg-muted)' }}>
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </time>
            <span>·</span>
            <span>{post.readingTime}</span>
            {post.tags.length > 0 && (
              <>
                <span>·</span>
                <div className="flex flex-wrap gap-1.5">
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
              </>
            )}
          </div>
          <div className="mt-6 border-t" style={{ borderColor: 'var(--border)' }} />
        </header>

        {/* MDX content */}
        <div className="prose">
          <MDXRemote
            source={post.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
              },
            }}
          />
        </div>

        {/* Engagement footer */}
        <div
          className="mt-12 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          style={{ borderTop: '1px solid var(--border)' }}
        >
          <div className="flex items-center gap-4">
            <LikeButton
              slug={slug}
              initialLikes={initialLikes}
              initialHasLiked={initialHasLiked}
            />
            <ViewCounter slug={slug} initialViews={initialViews} />
          </div>
          <ShareButtons slug={slug} title={post.title} />
        </div>

      </div>
    </main>
  )
}
