type SectionProps = {
  id: string
  index: number
  eyebrow: string
  title: string
  children: React.ReactNode
  /** sfondo alternato slate-50 per separare visivamente le sezioni */
  alt?: boolean
}

export default function Section({ id, index, eyebrow, title, children, alt }: SectionProps) {
  const num = String(index).padStart(2, '0')
  return (
    <section
      id={id}
      className={`scroll-mt-16 border-t border-hairline ${alt ? 'bg-slate-50' : 'bg-white'}`}
    >
      <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <p className="font-mono text-sm">
          <span className="text-slate-400">// </span>
          <span className="text-slate-400">{num} · </span>
          <span className="text-accent">{eyebrow}</span>
        </p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy md:text-3xl">
          {title}
        </h2>
        <div className="mt-10">{children}</div>
      </div>
    </section>
  )
}
