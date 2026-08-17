import Section from '@/components/Section'
import { about } from '@/data/portfolio'

export default function About() {
  return (
    <Section id="chi-sono" index={1} eyebrow="chi sono" title="8 anni a costruire software">
      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-slate-600 md:text-lg">
        {about.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  )
}
