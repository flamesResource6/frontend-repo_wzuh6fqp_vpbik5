import React from 'react'
import Spline from '@splinetool/react-spline'

export default function HeroSpline() {
  return (
    <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-900">
      <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/40 via-slate-900/10 to-transparent" />
    </div>
  )
}
