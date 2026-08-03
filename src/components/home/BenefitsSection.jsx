import React from 'react'
import Container from '../ui/Container'
import benefits  from '../../data/benefits'

const BenefitsSection = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-200/60 relative z-20">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-teal-200/80 hover:bg-white hover:shadow-xl hover:shadow-teal-600/5 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-100/60 text-teal-700 flex items-center justify-center shrink-0 group-hover:bg-teal-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

export default BenefitsSection