import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'

export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="mb-10"
    >
      {eyebrow ? (
        <p className="text-sm font-semibold tracking-wide text-indigo-600 dark:text-indigo-300">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  )
}

