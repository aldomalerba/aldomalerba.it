import Section from '@/components/Section'
import { skills } from '@/data/portfolio'

export default function Skills() {
  return (
    <Section id="competenze" index={5} eyebrow="stack" title={skills.title} alt>
      <div className="grid gap-10 sm:grid-cols-3">
        {skills.groups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-4 text-sm font-semibold text-navy">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md border border-hairline bg-white px-3 py-1 font-mono text-sm text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
