import React from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'
import { Phone, CheckCircle2 } from 'lucide-react'

const features = [
  'Personalized assessment & guidance',
  'Treatment & rehabilitation planning',
  'Injury prevention strategies',
  'Convenient & flexible appointments',
]

const ConsultationSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Radial Glow Accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-teal-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-teal-600/10 blur-3xl rounded-full pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Phone Call Glass Mockup */}
          <div
            className="lg:col-span-5 flex justify-center"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <div className="relative w-64 sm:w-72 bg-slate-800/80 backdrop-blur-xl p-4 rounded-[40px] border border-slate-700/80 shadow-2xl">
              <div className="bg-slate-950 rounded-[30px] p-6 text-center space-y-6 border border-slate-800">
                <div className="w-16 h-16 bg-teal-500/20 text-teal-400 rounded-full flex items-center justify-center mx-auto shadow-inner animate-pulse">
                  <Phone size={30} />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-teal-400 bg-teal-950/80 px-3 py-1 rounded-full border border-teal-800/60">
                    Consultations
                  </span>
                  <h4 className="text-xl font-black text-white mt-3">
                    Grand Physios
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Phone Consultation
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-800/80 flex justify-center">
                  <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                    <Phone size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            <span className="inline-flex items-center rounded-full bg-teal-950 border border-teal-800 px-4 py-1.5 text-xs font-semibold text-teal-300">
              <span className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse" />
              Physiotherapist On Call
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Expert Advice.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-200">
                Just a Call Away.
              </span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              Book a one-on-one phone consultation with our HCPC registered
              physiotherapists and receive tailored guidance for your recovery.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3 pt-2 text-left max-w-md mx-auto lg:mx-0">
              {features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <CheckCircle2 size={18} className="text-teal-400 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button to="/contact" size="lg">
                <Phone size={20} />
                Book a Phone Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ConsultationSection