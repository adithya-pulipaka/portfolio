import { experience } from '@/lib/data/experience'
import { SectionHeading } from './About'

export function Experience() {
  return (
    <section
      id="experience"
      className="py-24 px-6"
      style={{ background: 'var(--bg-card)' }}
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeading>Experience</SectionHeading>

        <div className="space-y-0">
          {experience.map((entry, idx) => (
            <div
              key={entry.company + entry.period}
              className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 py-8"
              style={{
                borderTop: idx === 0 ? undefined : '1px solid var(--border)',
              }}
            >
              {/* Left: company + period */}
              <div className="flex flex-col gap-1">
                {entry.url ? (
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-sm hover:underline underline-offset-4 transition-colors duration-200"
                    style={{ color: 'var(--accent)' }}
                  >
                    {entry.company}
                  </a>
                ) : (
                  <span className="font-semibold text-sm" style={{ color: 'var(--accent)' }}>
                    {entry.company}
                  </span>
                )}
                <span className="text-xs" style={{ color: 'var(--fg-muted)' }}>
                  {entry.period}
                </span>
              </div>

              {/* Right: title + bullets */}
              <div>
                <p className="font-semibold mb-3" style={{ color: 'var(--fg)' }}>
                  {entry.title}
                </p>
                <ul className="space-y-2">
                  {entry.bullets.map(bullet => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm leading-relaxed"
                      style={{ color: 'var(--fg-muted)' }}
                    >
                      <span
                        className="mt-2 w-1 h-1 rounded-full flex-shrink-0"
                        style={{ background: 'var(--accent)' }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
