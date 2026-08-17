import Section from '@/components/Section'
import { process } from '@/data/portfolio'

export default function Process() {
  return (
    <Section id="come-lavoro" index={4} eyebrow={process.eyebrow} title={process.title}>
      <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
        {process.lead}
      </p>
      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {process.steps.map((step) => (
          <div key={step.n}>
            <p className="font-mono text-sm text-accent">{step.n}</p>
            <h3 className="mt-2 text-base font-semibold text-navy">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
