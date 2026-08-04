import React from 'react'
import { NavLink } from 'react-router-dom'
import { Mail, MapPin, ArrowUp, Terminal } from 'lucide-react'
import CspBadge from '../ui/CspBadge'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="w-full bg-slate-900 text-slate-300 pt-12 pb-8 border-t border-slate-800 relative overflow-hidden">
      {/* Background Glow Accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-teal-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">
        {/* Main Content Row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand & Location */}
          <div className="space-y-3 max-w-md">
            <NavLink to="/" className="inline-block">
              <span className="text-2xl font-black tracking-tight text-white">
                Grand<span className="text-teal-400">Physios</span>
              </span>
            </NavLink>
            <p className="text-slate-400 text-sm leading-relaxed">
              Professional physiotherapy services & rehabilitation gear. Helping
              you stay active and pain-free.
            </p>

            <CspBadge className="mt-4" />
            {/* Aberdeen Badge */}
            <div className="flex items-center gap-2 text-xs font-semibold text-teal-300 bg-teal-950/80 border border-teal-800/60 w-fit px-3 py-1.5 rounded-full">
              <MapPin size={14} className="text-teal-400" />
              <span>Based in Aberdeen, UK</span>
            </div>
          </div>

          {/* Quick Contact & Scroll Top */}
          <div className="flex items-center gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <a
              href="mailto:info@grandphysios.com"
              className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group text-sm font-medium bg-slate-800/60 hover:bg-slate-800 px-4 py-3 rounded-2xl border border-slate-700/60"
            >
              <div className="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center group-hover:bg-teal-600 group-hover:text-white transition-all duration-300">
                <Mail size={16} />
              </div>
              <span className="text-xs sm:text-sm">info@grandphysios.com</span>
            </a>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-2xl bg-slate-800/60 hover:bg-teal-600 text-slate-400 hover:text-white transition-all duration-300 cursor-pointer border border-slate-700/60 shrink-0"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Grand Physios. All rights
            reserved.
          </p>

          {/* Subtle minimal links */}
          <div className="flex gap-6">
            <NavLink
              to="/faq"
              className="hover:text-teal-400 transition-colors"
            >
              FAQ
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-teal-400 transition-colors"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-400">
        <p>
          Built without pulling a muscle{' '}
          <Terminal
            size={15}
            className="text-teal-400 inline-block animate-bounce"
          />{' '}
          by{' '}
          <a
            href="https://sbratuszewski.github.io/my_retro_portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-400 hover:underline font-semibold"
          >
            Stan Bratuszewski
          </a>{' '}
        </p>
      </div>
    </footer>
  )
}

export default Footer