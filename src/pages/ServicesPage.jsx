// src/pages/ServicesPage.jsx
import React from 'react'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { PhoneCall, ShoppingBag, CheckCircle2, ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'consultation',
    icon: PhoneCall,
    badge: 'Popular',
    title: 'Telephone MSK Consultation',
    desc: 'One-on-one phone assessment with an experienced physiotherapist to discuss your condition, symptoms, and treatment plan.',
    features: [
      'Tailored assessment over the phone',
      'Personalized product recommendations',
      'Injury management & exercise advice',
      'Flexible appointment scheduling',
    ],
    actionText: 'Book Consultation',
    actionLink: '/contact',
  },
  {
    id: 'product-guidance',
    icon: ShoppingBag,
    badge: 'Core Service',
    title: 'Product Selection & Rehab Plan',
    desc: 'Get expert guidance on selecting the right support gear for your specific joint, muscle, or post-surgical recovery needs.',
    features: [
      'Targeted support for knee, back & joint pain',
      'Sprain & strain rehabilitation gear',
      'Post-orthopaedic surgery mobility aids',
      'Fast delivery across the UK',
    ],
    actionText: 'Browse Shop',
    actionLink: '/shop',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Choose Product or Service',
    desc: 'Explore our physio products or request a telephone consultation.',
  },
  {
    step: '02',
    title: 'Expert Assessment',
    desc: 'Speak with our MSK specialist to refine your recovery strategy.',
  },
  {
    step: '03',
    title: 'Start Recovery',
    desc: 'Receive your gear and follow your tailored guidance plan at home.',
  },
]

const ServicesPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-8 pb-20">
      {/* Header */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-200/30 blur-3xl rounded-full pointer-events-none z-0" />
        <Container className="relative z-10">
          <SectionTitle
            badge="Services & Solutions"
            title="How We Support Your Recovery"
            description="Explore our range of phone consultations and tailored product recommendations designed to help you recover at home."
            center
            data-aos="fade-up"
          />
        </Container>
      </section>

      {/* Main Services Grid */}
      <section className="py-8">
        <Container>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <Card className="h-full p-8 bg-white flex flex-col justify-between border-slate-100 hover:border-teal-200 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-teal-100/60 text-teal-700 flex items-center justify-center">
                          <Icon size={24} />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 border border-teal-200 px-3 py-1 rounded-full">
                          {item.badge}
                        </span>
                      </div>

                      <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {item.desc}
                      </p>

                      <ul className="space-y-3 mb-8">
                        {item.features.map((feat, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-sm text-slate-700"
                          >
                            <CheckCircle2
                              size={18}
                              className="text-teal-600 shrink-0 mt-0.5"
                            />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button to={item.actionLink} size="lg" className="w-full">
                      {item.actionText}
                      <ArrowRight size={18} />
                    </Button>
                  </Card>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-24 bg-white mt-16 border-y border-slate-200/60">
        <Container>
          <SectionTitle
            badge="How It Works"
            title="Three Simple Steps to Recovery"
            center
            className="mb-12"
            data-aos="fade-up"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center relative"
              >
                <span className="text-3xl font-black text-teal-600/30 block mb-2">
                  {item.step}
                </span>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default ServicesPage
