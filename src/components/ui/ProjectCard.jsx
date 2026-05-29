import { ExternalLink, GitFork } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'

export function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="group overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.45)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_60px_-38px_rgba(15,23,42,0.55)] dark:bg-white/5 dark:ring-white/10"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
        <img
          src={project.image}
          alt=""
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/0 via-slate-900/0 to-slate-900/10 dark:to-black/30" />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">
            {project.title}
          </h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full bg-indigo-600/10 px-3 py-1 text-xs font-medium text-indigo-700 dark:bg-indigo-300/10 dark:text-indigo-200"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-5 text-sm">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-medium text-indigo-600 transition hover:text-indigo-500 dark:text-indigo-300 dark:hover:text-indigo-200"
          >
            <ExternalLink className="h-4 w-4" />
            Live Demo 
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-medium text-slate-700 transition hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
          >
            <GitFork className="h-4 w-4" />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}

