export type Experience = {
  company: string
  title: string
  period: string
  bullets: string[]
  url?: string
}

// TODO: Replace with your real work history
export const experience: Experience[] = [
  {
    company: 'Walmart Global Tech',
    title: 'Senior Software Engineer',
    period: '2022 – Present',
    bullets: [
      'Senior Software Engineer working on Unified Payments Platform',
      'Support payments across multiple markets and regions'
    ],
    url: 'https://example.com',
  },
  {
    company: 'Morgan Stanley',
    title: 'Software Engineer',
    period: '2021 – 2022',
    bullets: [
      'Full Stack Developer in Warehouse Lending Platform',
      'Developed multiple green field projects (microservices) using Java and Angular',
    ],
    url: 'https://example.com',
  },
  {
    company: 'Fannie Mae',
    title: 'Java Software Developer',
    period: '2014 – 2020',
    bullets: [
      'Worked on multiple projects across different domains and teams.',
      'Delivered highly resilient web applications across different applications covering full SDLC lifecycle.',
    ],
  },
]
