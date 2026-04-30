import { Hero } from '@/components/portfolio/Hero'
import { LatestPosts } from '@/components/home/LatestPosts'
import { SectionReveal } from '@/components/ui/SectionReveal'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionReveal><LatestPosts /></SectionReveal>
    </main>
  )
}
