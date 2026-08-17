import Section from '@/components/Section'
import { contact } from '@/data/portfolio'

export default function Contact() {
  return (
    <Section id="contatti" index={6} eyebrow="parliamone" title={contact.title}>
      <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
        {contact.intro}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {contact.primary.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            {...(link.external ? { target: '_blank', rel: 'noopener' } : {})}
            className={
              i === 0
                ? 'rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800'
                : 'rounded-md border border-hairline px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-navy'
            }
          >
            {link.value}
          </a>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-slate-500">
        {contact.secondary.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener"
            className="transition hover:text-navy"
          >
            <span className="text-slate-300">↗ </span>
            {link.label} <span className="text-slate-400">{link.value}</span>
          </a>
        ))}
      </div>
    </Section>
  )
}
