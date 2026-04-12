import { NextRequest, NextResponse } from 'next/server'
import { incrementViews } from '@/lib/mongodb/models/PostEngagement'

export async function POST(req: NextRequest) {
  try {
    const { slug } = (await req.json()) as { slug: string }
    if (!slug) return NextResponse.json({ error: 'slug required' }, { status: 400 })

    const views = await incrementViews(slug)
    return NextResponse.json({ views })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
