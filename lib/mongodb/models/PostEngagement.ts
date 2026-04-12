import { getMongoClient } from '../client'

export type PostEngagement = {
  slug: string
  likes: number
  views: number
  likedIPs: string[]
}

const DB = 'portfolio'
const COLLECTION = 'post_engagement'

function col() {
  return getMongoClient().then(client =>
    client.db(DB).collection<PostEngagement>(COLLECTION)
  )
}

export async function getEngagement(slug: string): Promise<PostEngagement | null> {
  const c = await col()
  return c.findOne({ slug })
}

export async function getEngagementForPosts(
  slugs: string[]
): Promise<Record<string, { likes: number; views: number }>> {
  const c = await col()
  const docs = await c.find({ slug: { $in: slugs } }).toArray()
  return Object.fromEntries(docs.map(d => [d.slug, { likes: d.likes, views: d.views }]))
}

export async function incrementViews(slug: string): Promise<number> {
  const c = await col()
  const result = await c.findOneAndUpdate(
    { slug },
    { $inc: { views: 1 }, $setOnInsert: { likes: 0, likedIPs: [] } },
    { upsert: true, returnDocument: 'after' }
  )
  return result?.views ?? 1
}

export async function toggleLike(
  slug: string,
  ipHash: string
): Promise<{ likes: number; hasLiked: boolean }> {
  const c = await col()
  const doc = await c.findOne({ slug })

  if (doc?.likedIPs.includes(ipHash)) {
    // Unlike
    const result = await c.findOneAndUpdate(
      { slug },
      { $inc: { likes: -1 }, $pull: { likedIPs: ipHash } },
      { returnDocument: 'after' }
    )
    return { likes: result?.likes ?? 0, hasLiked: false }
  }

  // Like
  const result = await c.findOneAndUpdate(
    { slug },
    {
      $inc: { likes: 1 },
      $push: { likedIPs: ipHash },
      $setOnInsert: { views: 0 },
    },
    { upsert: true, returnDocument: 'after' }
  )
  return { likes: result?.likes ?? 1, hasLiked: true }
}
