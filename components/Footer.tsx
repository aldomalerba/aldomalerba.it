import { site } from '@/data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-hairline bg-white">
      <div className="mx-auto max-w-4xl px-6 py-10 font-mono text-xs text-slate-500">
        <p>
          © {year} {site.name} · Brescia, IT
        </p>
        <p className="mt-1 text-slate-400">
          <span className="text-slate-300">// </span>
          costruito con Next.js · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
