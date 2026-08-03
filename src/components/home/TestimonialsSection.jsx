import React from 'react'
import Container from '../ui/Container'
import SectionTitle from '../ui/SectionTitle'
import Card from '../ui/Card'
import { Star, Quote } from 'lucide-react'
import testimonials from '../../data/testimonials'

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-200/20 blur-3xl rounded-full pointer-events-none z-0" />

      <Container className="relative z-10">
        <SectionTitle
          badge="Testimonials"
          title="What Our Patients Say"
          description="Real results and feedback from people who restored their mobility with Grand Physios."
          center
          className="mb-12"
          data-aos="fade-up"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-6">
          {testimonials.map((item, idx) => (
            <div
              key={item.id || idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="filter drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
            >
              <Card className="h-full p-6 sm:p-8 flex flex-col justify-between bg-white/90 backdrop-blur-sm group hover:border-teal-200 relative !overflow-visible">
                <Quote
                  size={48}
                  className="absolute top-6 right-6 text-teal-100 group-hover:text-teal-200/80 transition-colors pointer-events-none"
                />

                <div className="relative z-10 space-y-4">
                  <div className="flex text-amber-400 gap-1">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" />
                    ))}
                  </div>

                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed italic relative z-10">
                    "{item.comment}"
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between relative z-10">
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold text-teal-600 mt-0.5">
                      {item.role} • {item.location}
                    </p>
                  </div>
                </div>

                {/* SVG Dziubek - precyzyjny obrys + tło, łączący się z ramką */}
                <svg
                  className="absolute -bottom-7 right-8 w-8 h-8 pointer-events-none"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 0 0 L 32 0 L 0 32 Z"
                    className="fill-white/90 stroke-slate-100 group-hover:stroke-teal-200 transition-colors duration-300"
                    strokeWidth="1"
                  />
                  {/* Zakrycie górnej krawędzi, aby płynnie połączyć z wnętrzem karty */}
                  <rect
                    x="0"
                    y="-1"
                    width="32"
                    height="2"
                    className="fill-white/90"
                  />
                </svg>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection