import { motion } from 'framer-motion'
import { achievements } from '../../data/portfolio'
import { fadeUp } from '../../lib/motion'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'

export function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto mb-10 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            <span className="text-indigo-600 dark:text-indigo-300">Achievements</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Highlights and recognitions.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {achievements.map((a, idx) => (
            <motion.div
              key={a.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.04 }}
              className="rounded-2xl bg-white/80 p-7 text-center ring-1 ring-slate-200 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)] backdrop-blur dark:bg-white/5 dark:ring-white/10"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-sm shadow-indigo-600/20 dark:bg-indigo-300 dark:text-slate-900 dark:shadow-indigo-300/10">
                <Icon name={a.icon} className="h-6 w-6" />
              </div>
              <p className="mt-5 text-base font-semibold text-slate-900 dark:text-white">
                {a.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

