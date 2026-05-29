import { useState } from 'react'
import { motion } from 'framer-motion'
import { certifications } from '../../data/portfolio'
import { fadeUp } from '../../lib/motion'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { Modal } from '../ui/Modal'

export function Certifications() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState(null)

  return (
    <section id="certifications" className="py-16 sm:py-20">
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
            <span className="text-indigo-600 dark:text-indigo-300">Certifications</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Professional certifications and academic recognitions.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {certifications.map((c) => (
            <motion.button
              key={c.title}
              type="button"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onClick={() => {
                setActive(c)
                setOpen(true)
              }}
              className="group rounded-2xl bg-white/80 p-7 text-left ring-1 ring-slate-200 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)] backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-38px_rgba(15,23,42,0.5)] dark:bg-white/5 dark:ring-white/10"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-indigo-600/10 text-indigo-600 dark:bg-indigo-300/10 dark:text-indigo-300">
                  <Icon name={c.icon} className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-base font-semibold text-slate-900 dark:text-white">
                    {c.title}
                  </p>
                  <p className="mt-1 text-sm font-medium text-indigo-600 dark:text-indigo-300">
                    {c.issuer}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {c.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200">
                    <Icon name="ExternalLink" className="h-4 w-4" />
                    View Certificate
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </Container>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title={active?.title ?? 'Certificate'}
      >
        {active ? (
          <div className="overflow-hidden rounded-xl ring-1 ring-slate-200 dark:ring-white/10">
            <img src={active.image} alt={active.title} className="w-full" />
          </div>
        ) : null}
      </Modal>
    </section>
  )
}

