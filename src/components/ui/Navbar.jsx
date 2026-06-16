import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { person } from '../../data/portfolio'
import { useTheme } from '../../lib/theme'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const navClass = useMemo(() => {
    return scrolled
      ? 'bg-white/70 shadow-sm dark:bg-slate-950/60'
      : 'bg-transparent'
  }, [scrolled])

  return (
    <div className="sticky top-0 z-50">
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className={`${navClass} backdrop-blur`}
      >
        <Container className="py-4">
          <div className="relative flex items-center justify-between">
            <a
              href="#"
              className="text-sm font-semibold tracking-tight text-indigo-600 dark:text-indigo-300"
            >
              {person.name.split(' ')[0]} {person.name.split(' ')[2]}.
            </a>

            <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 text-sm font-medium text-slate-500 dark:text-slate-300 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="transition hover:text-slate-900 dark:hover:text-white"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <ThemeToggle theme={theme} toggle={toggle} />
              <button
                type="button"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav"
                onClick={() => setMobileOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-xl p-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-100 dark:text-slate-200 dark:ring-white/10 dark:hover:bg-white/10 md:hidden"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {mobileOpen ? (
            <nav
              id="mobile-nav"
              className="mt-4 rounded-3xl bg-white/80 p-4 ring-1 ring-slate-200 shadow-sm backdrop-blur dark:bg-slate-900/80 dark:ring-white/10 md:hidden"
            >
              <div className="space-y-2">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </nav>
          ) : null}
        </Container>
      </motion.div>
    </div>
  )
}

