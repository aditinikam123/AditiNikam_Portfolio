import { motion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { person } from '../../data/portfolio'
import { useTheme } from '../../lib/theme'
import { Container } from './Container'
import { ThemeToggle } from './ThemeToggle'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const { theme, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
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
            </div>
          </div>
        </Container>
      </motion.div>
    </div>
  )
}

