'use client'

import { projects } from '@/lib/data/projects'
import { SectionHeading } from './About'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'var(--bg)' }}>
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Projects</SectionHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map(project => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
