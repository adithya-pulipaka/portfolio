export type Project = {
  name: string
  description: string
  tags: string[]
  github?: string
  demo?: string
}

// TODO: Replace with your real projects
export const projects: Project[] = [
  {
    name: 'Portfolio & Blog',
    description:
      'Personal portfolio and blog with MDX posts, engagement features (likes, views), and dynamic OG images.',
    tags: ['Next.js 15', 'TypeScript', 'Tailwind v4', 'MongoDB'],
    github: 'https://github.com/adithya-pulipaka/portfolio',
    demo: 'https://adithyakashyap.com',
  },
  {
    name: 'Project Two',
    description:
      'Short description of what this project does, the problem it solves, and your role in building it.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    github: 'https://github.com/adithya-pulipaka/project-two',
  },
  {
    name: 'Project Three',
    description:
      'Short description of what this project does, the problem it solves, and your role in building it.',
    tags: ['Python', 'FastAPI', 'Docker'],
    github: 'https://github.com/adithya-pulipaka/project-three',
    demo: 'https://example.com',
  },
]
