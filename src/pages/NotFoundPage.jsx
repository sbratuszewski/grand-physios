// src/pages/NotFoundPage.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/ui/Container'
import Button from '../components/ui/Button'
import { Home, AlertTriangle, Bone } from 'lucide-react'

const NotFoundPage = () => {
  return (
    <div className="bg-slate-50 min-h-[80vh] flex items-center relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-teal-100/50 blur-3xl rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-50 blur-3xl rounded-full pointer-events-none z-0" />

      <Container className="relative z-10 py-16 text-center">
        <div
          className="flex flex-col items-center justify-center space-y-8"
          data-aos="fade-up"
        >
          {/* Visual Humor: Broken/Confused Icon */}
          <div className="relative">
            <div className="w-40 h-40 rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-slate-100 relative z-10">
              <span className="text-8xl font-black text-slate-200">4</span>
              <div className="mx-2 flex flex-col items-center animate-[shake_3s_ease-in-out_infinite]">
                <Bone className="text-teal-600" size={48} strokeWidth={3} />
                <AlertTriangle
                  className="text-amber-500 mt-[-10px]"
                  size={40}
                  fill="#f59e0b20"
                />
              </div>
              <span className="text-8xl font-black text-slate-200">4</span>
            </div>
            {/* Soft Glow behind icon */}
            <div className="absolute inset-0 bg-teal-400/20 blur-2xl rounded-full scale-125 pointer-events-none" />
          </div>

          {/* Humorous Text */}
          <div className="space-y-3 max-w-lg mx-auto">
            <span className="inline-flex items-center rounded-full bg-teal-100 border border-teal-200 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-teal-800">
              Diagnostic Report
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Oops! WRONG MOVE.
            </h1>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              This page has suffered a severe misalignment. Even specialist
              physiotherapists can’t seem to find a pulse here.
            </p>
            <p className="text-sm text-slate-500 italic pt-2 border-t border-slate-200/60 max-w-sm mx-auto">
              It seems your navigation needs some tailored rehabilitation or a
              flexible appointment scheduled.
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-6">
            <Button to="/" size="lg" className="group">
              <Home
                size={20}
                className="transition-transform group-hover:scale-110"
              />
              Back to Recovery (Home)
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default NotFoundPage
