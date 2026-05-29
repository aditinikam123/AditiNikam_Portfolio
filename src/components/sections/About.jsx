import { motion } from 'framer-motion'
import { about } from '../../data/portfolio'
import { fadeUp } from '../../lib/motion'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
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
            {about.headline}
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            {about.intro}
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto mb-10 flex max-w-3xl flex-wrap items-center justify-center gap-3"
        >
          {about.pills.map((p) => (
            <div
              key={p.text}
              className="flex items-center gap-2 rounded-2xl bg-white/70 px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-slate-200 shadow-sm backdrop-blur dark:bg-white/5 dark:text-slate-200 dark:ring-white/10"
            >
              <Icon
                name={p.icon}
                className="h-4 w-4 text-indigo-600 dark:text-indigo-300"
              />
              <span>{p.text}</span>
            </div>
          ))}
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {about.groups.map((g, idx) => (
            <motion.div
              key={g.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.04 }}
              className="rounded-2xl bg-white/70 p-6 ring-1 ring-slate-200 shadow-sm backdrop-blur dark:bg-white/5 dark:ring-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600 dark:bg-indigo-300/10 dark:text-indigo-300">
                  <Icon name={g.icon} className="h-5 w-5" />
                </div>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {g.title}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-white/10 dark:text-slate-200"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

