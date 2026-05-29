export function Button({
  as: As = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-60'

  const sizes = {
    md: 'h-11 px-5 text-sm',
    sm: 'h-10 px-4 text-sm',
  }

  const variants = {
    primary:
      'bg-gradient-to-r from-indigo-600 to-violet-600 text-white shadow-sm shadow-indigo-600/15 hover:from-indigo-500 hover:to-violet-500 active:from-indigo-600 active:to-violet-600',
    secondary:
      'bg-white/70 text-slate-900 ring-1 ring-slate-200 shadow-sm hover:bg-white/90 hover:ring-slate-300 dark:bg-white/10 dark:text-white dark:ring-white/15 dark:hover:bg-white/15',
    ghost:
      'text-slate-700 hover:bg-slate-900/5 dark:text-slate-200 dark:hover:bg-white/10',
  }

  return (
    <As
      className={`${base} ${sizes[size] ?? sizes.md} ${
        variants[variant] ?? variants.primary
      } ${className}`}
      {...props}
    >
      {children}
    </As>
  )
}

