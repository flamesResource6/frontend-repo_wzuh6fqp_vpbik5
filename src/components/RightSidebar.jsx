import React from 'react'
import { motion } from 'framer-motion'
import { Flame, Box, GraduationCap, Wrench, Newspaper } from 'lucide-react'

const ActivityItem = ({ icon: Icon, title, meta }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.4 }}
    className="flex items-start gap-3 p-2 rounded-lg hover:bg-slate-700/40 transition-colors"
  >
    <div className="mt-1">
      <Icon className="w-4 h-4 text-blue-300" />
    </div>
    <div>
      <p className="text-sm text-white">{title}</p>
      <p className="text-xs text-slate-400">{meta}</p>
    </div>
  </motion.div>
)

export default function RightSidebar() {
  const items = [
    { icon: Flame, title: 'Launched a realtime dashboard', meta: 'Featured project' },
    { icon: Box, title: '3D Playroom experiment', meta: 'New portfolio item' },
    { icon: Wrench, title: 'Learning shadcn/ui patterns', meta: 'New skill' },
    { icon: GraduationCap, title: 'Completed Advanced React', meta: 'Education update' },
    { icon: Newspaper, title: 'Wrote about micro-interactions', meta: 'New post' },
  ]

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-sm font-semibold text-slate-300 mb-3">Activity</h3>
      <div className="space-y-1 overflow-y-auto pr-1">
        {items.map((it, i) => (
          <ActivityItem key={i} {...it} />
        ))}
      </div>
    </div>
  )
}
