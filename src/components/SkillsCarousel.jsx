import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind', 'shadcn/ui', 'Node.js', 'PHP', 'Laravel', 'GraphQL', 'MongoDB', 'PostgreSQL'
]

export default function SkillsCarousel() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/40">
      <div className="px-4 py-3 text-xs uppercase tracking-wider text-slate-400">Skills</div>
      <div className="relative">
        <motion.div
          className="flex gap-3 whitespace-nowrap py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 16, ease: 'linear', repeat: Infinity }}
        >
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="inline-flex items-center px-3 py-1 rounded-full bg-slate-700/60 text-blue-200 text-sm border border-slate-600/60 hover:bg-slate-700/80 transition-colors"
            >
              {s}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
