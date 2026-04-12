import { ImageResponse } from 'next/og'
import { getPost } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = { params: Promise<{ slug: string }> }

export default async function Image({ params }: Props) {
  const { slug } = await params
  const post = getPost(slug)

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
        }}
      >
        {/* Top: accent bar */}
        <div
          style={{
            width: 48,
            height: 5,
            background: '#6366f1',
            borderRadius: 3,
          }}
        />

        {/* Center: title */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1, justifyContent: 'center' }}>
          {post?.tags && post.tags.length > 0 && (
            <div style={{ display: 'flex', gap: '10px' }}>
              {post.tags.slice(0, 3).map(tag => (
                <div
                  key={tag}
                  style={{
                    background: 'rgba(99,102,241,0.15)',
                    color: '#818cf8',
                    padding: '4px 14px',
                    borderRadius: 6,
                    fontSize: 18,
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          )}
          <div
            style={{
              fontSize: post?.title && post.title.length > 50 ? 52 : 64,
              fontWeight: 700,
              color: '#f5f5f5',
              letterSpacing: '-1.5px',
              lineHeight: 1.2,
            }}
          >
            {post?.title ?? 'Blog Post'}
          </div>
          {post?.description && (
            <div style={{ fontSize: 24, color: '#888', lineHeight: 1.5, maxWidth: '900px' }}>
              {post.description}
            </div>
          )}
        </div>

        {/* Bottom: author + domain */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: 42,
                height: 42,
                background: '#6366f1',
                borderRadius: 8,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 18,
                fontWeight: 700,
                color: 'white',
              }}
            >
              AK
            </div>
            <div style={{ fontSize: 22, color: '#aaa', fontWeight: 500 }}>
              Adithya Kashyap
            </div>
          </div>
          <div style={{ fontSize: 20, color: '#555' }}>
            adithyakashyap.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
