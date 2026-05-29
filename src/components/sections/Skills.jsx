import { motion } from 'framer-motion'
import { skills } from '../../data/portfolio'
import { fadeUp } from '../../lib/motion'
import { Container } from '../ui/Container'

function SkillBar({ name, level }) {
  return (
    <div className="py-2">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[13px] font-medium text-slate-900 dark:text-white">
          {name}
        </p>
        <p className="text-[11px] font-medium text-slate-500 dark:text-slate-300">
          {level}%
        </p>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-300 dark:to-indigo-300"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-14">
      <Container>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="mx-auto mb-8 max-w-3xl text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Technical <span className="text-indigo-600 dark:text-indigo-300">Skills</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            A comprehensive overview of my technical proficiency across different domains.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {skills.map((group) => (
            <motion.div
              key={group.group}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="rounded-2xl bg-white/80 p-6 ring-1 ring-slate-200 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)] backdrop-blur dark:bg-white/5 dark:ring-white/10"
            >
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{group.group}</p>
              <div className="mt-3 divide-y divide-slate-200/70 dark:divide-white/10">
                {group.items.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

