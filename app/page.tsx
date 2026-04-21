import { Hero } from '@/components/portfolio/Hero'
import { Contact } from '@/components/portfolio/Contact'
import { LatestPosts } from '@/components/home/LatestPosts'
import { FeaturedProjects } from '@/components/home/FeaturedProjects'
import { SectionReveal } from '@/components/ui/SectionReveal'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionReveal><LatestPosts /></SectionReveal>
      <SectionReveal><FeaturedProjects /></SectionReveal>
      <SectionReveal><Contact /></SectionReveal>
    </main>
  )
}
