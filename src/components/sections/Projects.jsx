import { projects } from '../../data/portfolio'
import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import { Container } from '../ui/Container'
import { ProjectCard } from '../ui/ProjectCard'

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
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
            My <span className="text-indigo-600 dark:text-indigo-300">Projects</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            A selection of projects showcasing full‑stack development, machine learning,
            and DevOps skills.
          </p>
        </motion.div>

        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Container>
    </section>
  )
}

