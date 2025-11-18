import React from 'react'
import { motion } from 'framer-motion'

const CodeSnippetItem = ({ title, lines }) => (
  <div className="rounded-xl bg-slate-900/60 border border-slate-700/60 overflow-hidden">
    <div className="flex items-center gap-2 px-3 py-2 border-b border-slate-700/60 text-xs text-slate-400">
      <span className="w-2 h-2 rounded-full bg-red-400/80" />
      <span className="w-2 h-2 rounded-full bg-yellow-400/80" />
      <span className="w-2 h-2 rounded-full bg-green-400/80" />
      <span className="ml-2">{title}</span>
    </div>
    <pre className="p-3 text-xs text-slate-300/90">
      <code>
        {lines.map((l, idx) => (
          <div key={idx} className="tabular-nums">
            <span className="text-slate-500 select-none mr-3">{idx + 1}</span>
            {l}
          </div>
        ))}
      </code>
    </pre>
  </div>
)

const BlogItem = ({ title, excerpt }) => (
  <motion.div whileHover={{ y: -2 }} className="rounded-xl bg-slate-900/60 border border-slate-700/60 p-4">
    <h4 className="text-white font-semibold">{title}</h4>
    <p className="text-slate-300/80 text-sm mt-1">{excerpt}</p>
    <button className="mt-3 text-blue-300 hover:text-white text-sm">Read more →</button>
  </motion.div>
)

export default function BentoCards() {
  const snippets = [
    {
      title: 'useDelayedValue.ts',
      lines: [
        "export function useDelayedValue<T>(value: T, delay = 250) {",
        "  const [v, setV] = useState(value)",
        "  useEffect(() => {",
        "    const id = setTimeout(() => setV(value), delay)",
        "    return () => clearTimeout(id)",
        "  }, [value, delay])",
        "  return v",
        "}",
      ],
    },
    {
      title: 'fadeIn.tsx',
      lines: [
        "export const fadeIn = {",
        "  hidden: { opacity: 0, y: 8 },",
        "  show: { opacity: 1, y: 0, transition: { duration: .25 } }",
        "}",
      ],
    },
  ]

  const posts = [
    { title: 'Designing with micro‑interactions', excerpt: 'How tiny motions make interfaces feel alive and intentional.' },
    { title: 'Composable UI patterns with shadcn/ui', excerpt: 'Leveraging primitives for speed without losing control.' },
  ]

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="space-y-4">
        {snippets.map((s, i) => (
          <CodeSnippetItem key={i} {...s} />
        ))}
      </div>
      <div className="space-y-4">
        {posts.map((p, i) => (
          <BlogItem key={i} {...p} />
        ))}
      </div>
    </div>
  )
}
