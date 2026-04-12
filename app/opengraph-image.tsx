import { ImageResponse } from 'next/og'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
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
        {/* Top: accent bar + monogram */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: 52,
              height: 52,
              background: '#6366f1',
              borderRadius: 10,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 22,
              fontWeight: 700,
              color: 'white',
            }}
          >
            AK
          </div>
        </div>

        {/* Center: name + tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: '#f5f5f5',
              letterSpacing: '-2px',
              lineHeight: 1.1,
            }}
          >
            Adithya Kashyap
          </div>
          <div style={{ fontSize: 28, color: '#888', fontWeight: 400 }}>
            Software Engineer · Builder · Writer
          </div>
        </div>

        {/* Bottom: domain */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div
            style={{
              background: '#6366f1',
              color: 'white',
              padding: '10px 22px',
              borderRadius: 8,
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            adithyakashyap.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  )
}
