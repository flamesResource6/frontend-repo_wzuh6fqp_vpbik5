import React from 'react'
import { motion } from 'framer-motion'
import { Home, Briefcase, User, Mail, Sparkles } from 'lucide-react'

const NavItem = ({ icon: Icon, label }) => (
  <motion.button
    whileHover={{ x: 6 }}
    whileTap={{ scale: 0.98 }}
    className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-slate-200/90 hover:text-white hover:bg-slate-700/40 transition-colors"
  >
    <Icon className="w-4 h-4" />
    <span className="text-sm font-medium">{label}</span>
  </motion.button>
)

export default function LeftSidebar() {
  return (
    <div className="h-full flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-6">
        <div className="relative">
          <motion.div
            className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30"
            initial={{ rotate: -8, scale: 0.9, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          />
          <Sparkles className="w-4 h-4 text-white absolute -right-1 -top-1" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-400">Portfolio</p>
          <h2 className="text-white font-semibold leading-tight">Web Developer</h2>
        </div>
      </div>

      {/* Nav */}
      <div className="space-y-1">
        <NavItem icon={Home} label="Overview" />
        <NavItem icon={Briefcase} label="Work" />
        <NavItem icon={User} label="About" />
        <NavItem icon={Mail} label="Contact" />
      </div>

      <div className="mt-auto">
        {/* Hire Me Card with border-only animation */}
        <motion.div
          className="relative rounded-2xl p-[2px]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(59,130,246,0.9), rgba(34,211,238,0.9), rgba(59,130,246,0.9))',
            backgroundSize: '200% 200%'
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            boxShadow: [
              '0 0 0px rgba(59,130,246,0.0), 0 0 0px rgba(34,211,238,0.0)',
              '0 0 14px rgba(59,130,246,0.35), 0 0 8px rgba(34,211,238,0.25)',
              '0 0 0px rgba(59,130,246,0.0), 0 0 0px rgba(34,211,238,0.0)'
            ]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        >
          {/* "Electric" conic sweep strictly on the border via mask */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl"
            style={{
              background:
                'conic-gradient(from 0deg, rgba(59,130,246,0.0), rgba(59,130,246,0.0) 35%, rgba(59,130,246,0.6) 40%, rgba(34,211,238,0.7) 50%, rgba(59,130,246,0.6) 60%, rgba(59,130,246,0.0) 65%, rgba(59,130,246,0.0))',
              WebkitMask:
                'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              padding: '2px',
              filter: 'blur(2px)'
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/60 p-4">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.25),transparent_45%)]" />
            {/* Static content; no vertical bobbing */}
            <div className="relative z-10">
              <p className="text-xs text-blue-300/80">Available for freelance</p>
              <h3 className="text-white font-semibold mt-1">Need a developer?</h3>
              <p className="text-sm text-slate-300/80 mt-2">I build polished, performant web apps with delightful UX.</p>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold py-2"
              >
                <Sparkles className="w-4 h-4" /> Hire me
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
