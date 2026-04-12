import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'
import { getEngagement, toggleLike } from '@/lib/mongodb/models/PostEngagement'

function getIPHash(req: NextRequest, slug: string): string {
  const forwarded = req.headers.get('x-forwarded-for')
  const ip = forwarded ? forwarded.split(',')[0].trim() : '127.0.0.1'
  return crypto.createHash('sha256').update(`${ip}:${slug}`).digest('hex')
}

export async function GET(req: NextRequest) {
  try {
    const slug = req.nextUrl.searchParams.get('slug')
    if (!slug) return NextResponse.json({ error: 'slug required' }, { status: 400 })

    const ipHash = getIPHash(req, slug)
    const doc = await getEngagement(slug)

    return NextResponse.json({
      likes: doc?.likes ?? 0,
      hasLiked: doc?.likedIPs.includes(ipHash) ?? false,
    })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}

export async function POST(req: NextRequest) {
  try {
    const { slug } = (await req.json()) as { slug: string }
    if (!slug) return NextResponse.json({ error: 'slug required' }, { status: 400 })

    const ipHash = getIPHash(req, slug)
    const result = await toggleLike(slug, ipHash)
    return NextResponse.json(result)
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
