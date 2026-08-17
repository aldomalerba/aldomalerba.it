import Section from '@/components/Section'
import { services } from '@/data/portfolio'

export default function Services() {
  return (
    <Section id="servizi" index={3} eyebrow="servizi" title={services.title} alt>
      <p className="max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
        {services.intro}
      </p>
      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-hairline bg-hairline sm:grid-cols-3">
        {services.items.map((item) => (
          <div key={item.title} className="bg-white p-6">
            <h3 className="text-base font-semibold text-navy">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
