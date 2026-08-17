import Section from '@/components/Section'
import { experiences } from '@/data/portfolio'

export default function Experience() {
  return (
    <Section id="esperienza" index={2} eyebrow="percorso" title="Esperienza">
      <div className="space-y-12">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.period}`}
            className="grid gap-2 md:grid-cols-[10rem_1fr] md:gap-8"
          >
            <p className="pt-0.5 font-mono text-sm text-slate-500">{exp.period}</p>
            <div>
              <h3 className="text-lg font-semibold text-navy">
                {exp.role} <span className="font-normal text-slate-500">· {exp.company}</span>
              </h3>
              <ul className="mt-3 space-y-2 text-slate-600">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      aria-hidden
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
