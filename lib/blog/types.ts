export type PostType = 'til' | 'essay' | 'build-log' | 'opinion'

export type PostMeta = {
  slug: string
  title: string
  date: string
  description: string
  tags: string[]
  featured: boolean
  readingTime: string
  type: PostType
}

export type Post = PostMeta & {
  content: string
}
