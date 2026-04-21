import type { Metadata } from 'next'
import { About } from '@/components/portfolio/About'
import { Experience } from '@/components/portfolio/Experience'
import { Projects } from '@/components/portfolio/Projects'
import { SectionReveal } from '@/components/ui/SectionReveal'

export const metadata: Metadata = {
  title: 'About | Adithya Kashyap',
  description: 'Software engineer, builder, and writer. Bio, experience, and projects.',
}

export default function AboutPage() {
  return (
    <main className="pt-14">
      <SectionReveal><About /></SectionReveal>
      <SectionReveal><Experience /></SectionReveal>
      <SectionReveal><Projects /></SectionReveal>
    </main>
  )
}
