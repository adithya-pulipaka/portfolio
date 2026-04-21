'use client'

import type { Project } from '@/lib/data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group flex flex-col justify-between rounded-xl p-5 transition-transform duration-200 hover:-translate-y-1"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border)',
      }}
    >
      <div>
        {/* Name + external link icon */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-base" style={{ color: 'var(--fg)' }}>
            {project.name}
          </h3>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.name} live demo`}
              className="flex-shrink-0 transition-colors duration-200"
              style={{ color: 'var(--fg-muted)' }}
              onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--accent)')}
              onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-muted)')}
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>

        <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--fg-muted)' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs"
              style={{
                background: 'oklch(0.585 0.233 277.1 / 0.12)',
                color: 'var(--accent)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      {project.github && (
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-medium transition-colors duration-200"
          style={{ color: 'var(--fg-muted)' }}
          onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg)')}
          onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--fg-muted)')}
        >
          <GitHubIcon />
          View on GitHub
        </a>
      )}
    </div>
  )
}

function ExternalLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
    </svg>
  )
}
