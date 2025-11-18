import React from 'react'
import { motion } from 'framer-motion'
import LeftSidebar from './components/LeftSidebar'
import RightSidebar from './components/RightSidebar'
import HeroSpline from './components/HeroSpline'
import FeaturedSlider from './components/FeaturedSlider'
import SkillsCarousel from './components/SkillsCarousel'
import BentoCards from './components/BentoCards'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      {/* Background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-cyan-500/10 blur-3xl rounded-full" />
      </div>

      {/* Three-column layout using flex: fixed 300px sidebars, center flex-stretch */}
      <div className="relative max-w-6xl mx-auto p-4 md:p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Left Sidebar */}
          <aside className="order-2 lg:order-1 hidden lg:block w-[300px] shrink-0 bg-slate-900/60 backdrop-blur border border-slate-700/60 rounded-2xl p-4 sticky top-4 h-[calc(100vh-2rem)]">
            <LeftSidebar />
          </aside>

          {/* Center */}
          <main className="order-1 lg:order-2 flex-1 min-w-0 space-y-4">
            {/* Hero with Spline */}
            <HeroSpline />

            {/* Featured slider */}
            <FeaturedSlider />

            {/* Skills carousel */}
            <SkillsCarousel />

            {/* Bento lists: snippets + posts */}
            <BentoCards />
          </main>

          {/* Right Sidebar */}
          <aside className="order-3 hidden lg:block w-[300px] shrink-0 bg-slate-900/60 backdrop-blur border border-slate-700/60 rounded-2xl p-4 sticky top-4 h-[calc(100vh-2rem)]">
            <RightSidebar />
          </aside>
        </div>
      </div>

      {/* Mobile bottom hire card with animated border */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <motion.div
          className="rounded-2xl p-[2px]"
          style={{
            backgroundImage:
              'linear-gradient(90deg, rgba(59,130,246,0.9), rgba(34,211,238,0.9), rgba(59,130,246,0.9))',
            backgroundSize: '200% 200%'
          }}
          animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        >
          <div className="bg-slate-900/80 backdrop-blur border border-slate-700/60 rounded-2xl p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-blue-300/80">Available for freelance</p>
                <h3 className="text-white font-semibold">Need a developer?</h3>
              </div>
              <button className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2">Hire me</button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default App
