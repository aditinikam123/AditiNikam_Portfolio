import { motion } from 'framer-motion'
import { education } from '../../data/portfolio'
import { fadeUp } from '../../lib/motion'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            My <span className="text-indigo-600 dark:text-indigo-300">Education</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            My academic journey and qualifications.
          </p>
        </motion.div>

        <div className="space-y-5">
          {education.map((item, idx) => (
            <motion.div
              key={`${item.degree}-${item.year}`}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut', delay: idx * 0.04 }}
              className="rounded-3xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm backdrop-blur dark:bg-white/5 dark:ring-white/10"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="flex h-11 w-11 flex-none items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600 dark:bg-indigo-300/10 dark:text-indigo-300">
                    <Icon name="GraduationCap" className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                      {item.degree}
                      {item.stream ? (
                        <span className="font-medium text-indigo-600 dark:text-indigo-300">
                          {' '}
                          - {item.stream}
                        </span>
                      ) : null}
                    </h3>
                    <p className="mt-1 text-slate-600 dark:text-slate-300">{item.institute}</p>
                  </div>
                </div>

                <div className="flex flex-none items-center gap-3 sm:pl-4">
                  <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-300">
                    {item.year}
                  </span>
                  <span className="rounded-full bg-slate-900/5 px-4 py-1.5 text-sm font-semibold text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    {item.scoreLabel}: {item.scoreValue}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
