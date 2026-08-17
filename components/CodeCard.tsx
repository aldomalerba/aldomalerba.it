import { hero } from '@/data/portfolio'

/**
 * Snippet "identity" in stile editor: chrome con i tre pallini + nome file,
 * e un oggetto TypeScript con syntax highlight sobrio (navy + accent + slate).
 */
export default function CodeCard() {
  const { filename, identity, stack } = hero.code
  const pad = Math.max(...identity.map((r) => r.key.length), 'stack'.length)

  return (
    <div className="w-full max-w-xl overflow-hidden rounded-lg border border-hairline bg-white shadow-[0_1px_2px_rgba(10,37,64,0.04)]">
      <div className="flex items-center gap-2 border-b border-hairline bg-slate-50 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </span>
        <span className="ml-1 font-mono text-xs text-slate-400">{filename}</span>
      </div>

      <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-relaxed">
        <code className="whitespace-pre text-slate-400">
          <span className="text-slate-500">const</span>{' '}
          <span className="text-navy">aldo</span> = {'{'}
          {'\n'}
          {identity.map((row) => (
            <span key={row.key}>
              {'  '}
              <span className="text-navy">{row.key.padEnd(pad)}</span>
              {': '}
              <span className="text-accent">&quot;{row.value}&quot;</span>
              {',\n'}
            </span>
          ))}
          {'  '}
          <span className="text-navy">{'stack'.padEnd(pad)}</span>
          {': ['}
          {stack.map((tech, i) => (
            <span key={tech}>
              <span className="text-accent">&quot;{tech}&quot;</span>
              {i < stack.length - 1 ? ', ' : ''}
            </span>
          ))}
          {'],\n'}
          {'}'}
          <span className="cursor-blink text-navy">▍</span>
        </code>
      </pre>
    </div>
  )
}
