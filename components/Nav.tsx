import { nav, site } from '@/data/portfolio'

export default function Nav() {
  return (
    <header className="sticky top-0 z-30 border-b border-hairline bg-white/85 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight text-navy">
          aldomalerba<span className="text-accent">()</span>
        </a>

        <div className="hidden items-center gap-6 font-mono text-sm text-slate-500 md:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-navy">
              <span className="text-slate-300">#</span>
              {item.label}
            </a>
          ))}
        </div>

        <a
          href={site.cv}
          target="_blank"
          rel="noopener"
          className="rounded-md border border-hairline px-4 py-1.5 font-mono text-sm font-medium text-navy transition hover:border-navy"
        >
          cv
        </a>
      </nav>
    </header>
  )
}
