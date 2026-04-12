import { Hero } from '@/components/portfolio/Hero'
import { About } from '@/components/portfolio/About'
import { Experience } from '@/components/portfolio/Experience'
import { Projects } from '@/components/portfolio/Projects'
import { Contact } from '@/components/portfolio/Contact'
import { SectionReveal } from '@/components/ui/SectionReveal'

export default function Home() {
  return (
    <main>
      <Hero />
      <SectionReveal><About /></SectionReveal>
      <SectionReveal><Experience /></SectionReveal>
      <SectionReveal><Projects /></SectionReveal>
      <SectionReveal><Contact /></SectionReveal>
    </main>
  )
}
