import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react'

const slides = [
  {
    title: 'Realtime Analytics Dashboard',
    desc: 'Next.js + Tailwind + websockets. Smooth charts and blazing performance.',
  },
  {
    title: '3D Product Customizer',
    desc: 'Three.js powered configurator with delightful micro-interactions.',
  },
  {
    title: 'Headless E‑commerce',
    desc: 'Commerce APIs + instant search + accessible UI primitives.',
  },
]

export default function FeaturedSlider() {
  const [index, setIndex] = useState(0)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)
  const next = () => setIndex((i) => (i + 1) % slides.length)

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-800/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,130,246,0.20),transparent_45%)]" />
      <div className="relative p-6 md:p-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-xs uppercase tracking-wider text-blue-300/80 mb-2">Featured</div>
            <AnimatePresence mode="wait">
              <motion.h3
                key={index}
                initial={{ y: 12, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -12, opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="text-2xl md:text-3xl font-semibold text-white"
              >
                {slides[index].title}
              </motion.h3>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={index + '-desc'}
                initial={{ y: 8, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-slate-300/90 mt-2 max-w-2xl"
              >
                {slides[index].desc}
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileHover={{ x: 2 }}
              className="mt-4 inline-flex items-center gap-2 text-blue-300 hover:text-white"
            >
              <span className="text-sm font-medium">View case study</span>
              <ExternalLink className="w-4 h-4" />
            </motion.button>
          </div>
          <div className="flex gap-2">
            <button
              onClick={prev}
              className="rounded-lg border border-slate-600/60 p-2 text-slate-300 hover:bg-slate-700/40"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={next}
              className="rounded-lg border border-slate-600/60 p-2 text-slate-300 hover:bg-slate-700/40"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
