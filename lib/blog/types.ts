export type PostMeta = {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  featured: boolean
  readingTime: string
}

export type Post = PostMeta & {
  content: string
}
