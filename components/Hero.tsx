import { hero } from '@/data/portfolio'
import CodeCard from '@/components/CodeCard'

export default function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto flex min-h-[82vh] max-w-4xl flex-col justify-center px-6 py-24">
        <p className="font-mono text-sm text-accent">
          <span className="text-slate-400">// </span>
          {hero.eyebrow}
        </p>
        <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-navy sm:text-5xl md:text-6xl">
          {hero.title}
        </h1>
        <p className="mt-4 text-lg font-medium text-slate-700 md:text-xl">
          {hero.tagline}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600">
          {hero.intro}
        </p>
        <div className="mt-8">
          <CodeCard />
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={hero.primaryCta.href}
            className="rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-md border border-hairline px-5 py-2.5 text-sm font-semibold text-navy transition hover:border-navy"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
