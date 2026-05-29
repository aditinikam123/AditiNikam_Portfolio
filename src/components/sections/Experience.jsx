import { motion } from 'framer-motion'
import { experiences } from '../../data/portfolio'
import { fadeUp } from '../../lib/motion'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
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
            Work <span className="text-indigo-600 dark:text-indigo-300">Experience</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Professional internship experience in software development and machine learning.
          </p>
        </motion.div>

        <div className="relative">
          {/* center line (desktop) / left line (mobile) */}
          <div className="absolute left-5 top-0 h-full w-px bg-slate-200 dark:bg-white/10 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((e, idx) => {
              const isRight = idx % 2 === 1
              return (
                <motion.div
                  key={`${e.role}-${idx}`}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.55, ease: 'easeOut' }}
                  className="relative"
                >
                  {/* dot */}
                  <div className="absolute left-5 top-7 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-indigo-600 ring-4 ring-indigo-600/15 dark:bg-indigo-300 dark:ring-indigo-300/15 md:left-1/2" />

                  <div className="md:grid md:grid-cols-2 md:gap-12">
                    {/* spacer column */}
                    <div className={isRight ? '' : 'hidden md:block'} />

                    <div
                      className={`ml-10 md:ml-0 ${
                        isRight ? 'md:col-start-2' : 'md:col-start-1'
                      }`}
                    >
                      <div className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-sm backdrop-blur dark:bg-white/5 dark:ring-white/10">
                        <div className="inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-semibold text-indigo-700 dark:bg-indigo-300/10 dark:text-indigo-200">
                          <Icon name="Calendar" className="h-3.5 w-3.5" />
                          {e.duration}
                        </div>

                        <div className="mt-4 flex items-start gap-3">
                          <div className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-xl bg-indigo-600/10 text-indigo-600 dark:bg-indigo-300/10 dark:text-indigo-300">
                            <Icon name="Briefcase" className="h-4 w-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-slate-900 dark:text-white">
                              {e.role}
                            </p>
                            <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                              {e.company}
                            </p>
                          </div>
                        </div>

                        <div className="mt-4 space-y-2">
                          {e.points.map((p) => (
                            <div key={p} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                              <Icon
                                name="CheckCircle2"
                                className="mt-0.5 h-4 w-4 flex-none text-indigo-600 dark:text-indigo-300"
                              />
                              <p className="leading-relaxed">{p}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

