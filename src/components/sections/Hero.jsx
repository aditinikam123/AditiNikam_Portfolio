import { motion } from 'framer-motion'
import { ArrowDown, Download, Mail } from 'lucide-react'
import { person } from '../../data/portfolio'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/15" />
        <div className="absolute -bottom-28 right-[-120px] h-[520px] w-[520px] rounded-full bg-sky-400/20 blur-3xl dark:bg-sky-500/10" />
      </div>

      <Container className="py-16 sm:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-300">
              Hello, I&apos;m
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              <span className="block">{person.name.split(' ').slice(0, 2).join(' ')}</span>
              <span className="block bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent dark:from-indigo-300 dark:to-sky-300">
                {person.name.split(' ').slice(2).join(' ')}
              </span>
            </h1>
            <p className="mt-4 text-base font-medium text-slate-700 dark:text-slate-200">
              {person.title}
            </p>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
              {person.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button as="a" href="#projects" variant="primary">
                View Projects <ArrowDown className="h-4 w-4" />
              </Button>
              <Button
                as="a"
                href="/media/resume.pdf"
                variant="secondary"
                className=""
              >
                <Download className="h-4 w-4" />
                Download Resume
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                <Mail className="h-4 w-4" />
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            className="mx-auto w-full max-w-md lg:justify-self-end"
          >
            <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px]">
              <div className="absolute -inset-12 -z-10 rounded-full bg-gradient-to-tr from-indigo-500/15 via-sky-400/10 to-fuchsia-400/10 blur-3xl" />
              <div className="rounded-full bg-white/70 p-2 ring-1 ring-slate-200 shadow-[0_18px_50px_-25px_rgba(15,23,42,0.45)] backdrop-blur dark:bg-white/5 dark:ring-white/10">
                <div className="aspect-square overflow-hidden rounded-full bg-slate-100">
                  <img
                    src="/media/profile_image3.jpeg"
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

