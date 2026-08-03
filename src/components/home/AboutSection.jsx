import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Button from '../ui/Button'
import { Users, Award, ShieldCheck, Globe, ArrowRight } from 'lucide-react'
import stats from '../../data/stats.js'


const AboutSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* About Text */}
          <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
            <SectionTitle
              badge="About Grand Physios"
              title="We're here to help you move better and live better."
            />
            <p className="text-slate-600 text-base leading-relaxed">
              At Grand Physios, we combine expert physiotherapy advice with
              high-quality rehabilitation products to support your journey back
              to full mobility. Whether you need professional advice or reliable
              support gear, we're here for you.
            </p>
            <Button to="/about" variant="secondary" size="lg" className="group">
              Learn More About Us
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </div>

          {/* Stats Grid with Glass hover effects */}
          <div
            className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6"
            data-aos="fade-left"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-teal-200 hover:bg-white hover:shadow-lg transition-all duration-300 text-center space-y-2"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-100/60 text-teal-700 flex items-center justify-center mx-auto shadow-xs">
                    <Icon size={24} />
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">
                    {stat.value}
                  </h4>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection