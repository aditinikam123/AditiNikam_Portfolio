import { motion } from 'framer-motion'
import { GitFork, Mail, Send } from 'lucide-react'
import { useMemo, useState } from 'react'
import { person } from '../../data/portfolio'
import { sendContactEmail } from '../../lib/email'
import { fadeUp } from '../../lib/motion'
import { Container } from '../ui/Container'

function LinkedInIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.65-1.86 3.4-1.86 3.64 0 4.31 2.39 4.31 5.49v6.26ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  )
}

function prettyUrl(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '')
}

export function Contact() {
  const github = person.socials.find((s) => s.key === 'github')?.href
  const linkedin = person.socials.find((s) => s.key === 'linkedin')?.href
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const canSend = useMemo(() => {
    return (
      form.name.trim().length > 1 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()) &&
      form.message.trim().length > 2
    )
  }, [form.email, form.message, form.name])

  async function onSubmit(e) {
    e.preventDefault()
    if (!canSend) {
      setStatus({ state: 'error', msg: 'Please fill all fields correctly.' })
      return
    }
    try {
      setStatus({ state: 'sending', msg: '' })
      await sendContactEmail({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      })
      setStatus({ state: 'sent', msg: 'Message sent successfully.' })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({
        state: 'error',
        msg:
          err instanceof Error
            ? err.message
            : 'Failed to send. Please try again.',
      })
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
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
            Get In <span className="text-indigo-600 dark:text-indigo-300">Touch</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
            onSubmit={onSubmit}
            className="rounded-2xl bg-white/80 p-7 ring-1 ring-slate-200 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)] backdrop-blur dark:bg-white/5 dark:ring-white/10"
          >
            <div className="grid gap-4">
              <input
                className="h-12 rounded-xl bg-slate-50 px-4 text-sm text-slate-900 ring-1 ring-slate-200 outline-none transition focus:ring-2 focus:ring-indigo-400/60 dark:bg-white/5 dark:text-white dark:ring-white/10"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              />
              <input
                type="email"
                className="h-12 rounded-xl bg-slate-50 px-4 text-sm text-slate-900 ring-1 ring-slate-200 outline-none transition focus:ring-2 focus:ring-indigo-400/60 dark:bg-white/5 dark:text-white dark:ring-white/10"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              />
              <textarea
                rows={6}
                className="resize-none rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-900 ring-1 ring-slate-200 outline-none transition focus:ring-2 focus:ring-indigo-400/60 dark:bg-white/5 dark:text-white dark:ring-white/10"
                placeholder="Your Message"
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
              />
            </div>

            <button
              type="submit"
              disabled={status.state === 'sending'}
              className="mt-6 inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-6 text-sm font-semibold text-white shadow-sm shadow-indigo-600/15 transition hover:from-indigo-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              <Send className="h-4 w-4" />
              {status.state === 'sending' ? 'Sending…' : 'Send Message'}
            </button>

            {status.state !== 'idle' ? (
              <p
                className={`mt-4 text-sm ${
                  status.state === 'sent'
                    ? 'text-emerald-600 dark:text-emerald-300'
                    : status.state === 'error'
                      ? 'text-rose-600 dark:text-rose-300'
                      : 'text-slate-600 dark:text-slate-300'
                }`}
              >
                {status.msg}
              </p>
            ) : null}
          </motion.form>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
            className="rounded-2xl bg-white/80 p-7 ring-1 ring-slate-200 shadow-[0_18px_50px_-35px_rgba(15,23,42,0.35)] backdrop-blur dark:bg-white/5 dark:ring-white/10"
          >
            <p className="text-sm font-semibold text-slate-900 dark:text-white">
              I&apos;m currently looking for new opportunities.
            </p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              Whether you have a question, want to collaborate, or just want to
              say hi — my inbox is always open.
            </p>

            <div className="mt-6 space-y-4 text-sm text-slate-700 dark:text-slate-200">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                <a href={`mailto:${person.email}`} className="hover:underline">
                  {person.email}
                </a>
              </div>
              {github ? (
                <div className="flex items-center gap-3">
                  <GitFork className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                  <a href={github} target="_blank" rel="noreferrer" className="hover:underline">
                    {prettyUrl(github)}
                  </a>
                </div>
              ) : null}
              {linkedin ? (
                <div className="flex items-center gap-3">
                  <LinkedInIcon className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                  <a
                    href={linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    {prettyUrl(linkedin)}
                  </a>
                </div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

