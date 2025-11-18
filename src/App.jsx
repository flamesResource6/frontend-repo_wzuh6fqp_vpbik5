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

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px,1fr,300px] gap-4 p-4 md:p-6">
        {/* Left Sidebar */}
        <aside className="order-2 lg:order-1 bg-slate-900/60 backdrop-blur border border-slate-700/60 rounded-2xl p-4 sticky top-4 h-[calc(100vh-2rem)] hidden lg:block">
          <LeftSidebar />
        </aside>

        {/* Center */}
        <main className="order-1 lg:order-2 space-y-4">
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
        <aside className="order-3 bg-slate-900/60 backdrop-blur border border-slate-700/60 rounded-2xl p-4 sticky top-4 h-[calc(100vh-2rem)] hidden lg:block">
          <RightSidebar />
        </aside>
      </div>

      {/* Mobile bottom hire card */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className="bg-slate-900/80 backdrop-blur border border-slate-700/60 rounded-2xl p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-blue-300/80">Available for freelance</p>
              <h3 className="text-white font-semibold">Need a developer?</h3>
            </div>
            <button className="rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold px-4 py-2">Hire me</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
