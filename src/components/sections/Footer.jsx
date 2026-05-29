import { person } from '../../data/portfolio'
import { Container } from '../ui/Container'
import { GitFork, Mail } from 'lucide-react'

function LinkedInIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.39 4.31 5.49v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-10 dark:border-white/10">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-600 dark:text-slate-300">
            © {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {person.socials.map((s) => (
              <a
                key={s.key}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-slate-700 ring-1 ring-slate-200 transition hover:bg-blue-50 hover:text-blue-600 hover:ring-blue-200 dark:bg-white/5 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-blue-500/10 dark:hover:text-blue-300 dark:hover:ring-blue-400/30"
              >
                {s.key === 'github' ? (
                  <GitFork className="h-5 w-5" aria-hidden="true" />
                ) : s.key === 'linkedin' ? (
                  <LinkedInIcon className="h-5 w-5" />
                ) : (
                  <Mail className="h-5 w-5" aria-hidden="true" />
                )}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  )
}

