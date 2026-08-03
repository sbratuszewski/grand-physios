// src/pages/AboutPage.jsx
import React from 'react'
import Container from '../components/ui/Container'
import SectionTitle from '../components/ui/SectionTitle'
import Button from '../components/ui/Button'
import {
  ShoppingBag,
  PhoneCall,
  ShieldCheck,
  Award,
  HeartPulse,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'

const conditions = [
  'Knee, back, and joint pain from osteoarthritis',
  'Muscle and ligament injuries (sprains, strains, sports injuries)',
  'Post-orthopaedic surgery recovery & mobility',
  'Postural strain and joint instability',
]

const whyChooseUs = [
  {
    icon: Award,
    title: 'Experienced MSK Specialists',
    desc: 'HCPC registered physiotherapists with years of musculoskeletal expertise.',
  },
  {
    icon: ShieldCheck,
    title: 'Tailored Guidance',
    desc: 'Every advice session and product recommendation is matched to your specific needs.',
  },
  {
    icon: HeartPulse,
    title: 'Holistic Health Focus',
    desc: 'We promote long-term physical activity, independence, and overall wellbeing.',
  },
]

const AboutPage = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-8 pb-20">
      {/* 1. Header Section */}
      <section className="py-12 sm:py-16 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-200/30 blur-3xl rounded-full pointer-events-none z-0" />
        <Container className="relative z-10">
          <SectionTitle
            badge="About Us"
            title="Dedicated Specialists in MSK Care"
            description="Learn about our team of physiotherapists and our mission to combine expert advice with effective rehabilitation products."
            center
            data-aos="fade-up"
          />
        </Container>
      </section>

      {/* 2. Mission & Approach Section */}
      <section className="py-12 bg-white border-y border-slate-200/60">
        <Container>
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
              <span className="inline-flex items-center rounded-full bg-teal-50 border border-teal-200 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-teal-800">
                Our Approach
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Transform Your Recovery at Home
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                At Grand Physios, we are a team of experienced specialist MSK
                physiotherapists. We help you choose the right support products
                and provide professional, individually tailored advice right
                over the phone.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Whether you need equipment for a sports injury, osteoarthritic
                joint pain, or post-operative rehabilitation, our mission is to
                encourage physical activity and promote your independence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Button to="/shop" size="lg">
                  <ShoppingBag size={20} />
                  Explore Products
                </Button>
                <Button to="/contact" variant="secondary" size="lg">
                  <PhoneCall size={20} />
                  Book Consultation
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6" data-aos="fade-left">
              <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-teal-500/20 blur-2xl rounded-full pointer-events-none" />
                <h3 className="text-2xl font-bold mb-4">
                  What We Treat & Manage
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  Our products and consultation plans are designed for a wide
                  range of musculoskeletal conditions:
                </p>
                <ul className="space-y-4">
                  {conditions.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-sm text-slate-200"
                    >
                      <CheckCircle2
                        size={18}
                        className="text-teal-400 shrink-0 mt-0.5"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Why Choose Us Grid */}
      <section className="py-16 sm:py-24">
        <Container>
          <SectionTitle
            badge="Why Choose Us"
            title="Dedicated to Your Recovery & Wellbeing"
            description="Discover why clients trust Grand Physios for their rehabilitation gear and advice."
            center
            className="mb-12"
            data-aos="fade-up"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-teal-200 hover:shadow-xl transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-100/60 text-teal-700 flex items-center justify-center">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </Container>
      </section>
    </div>
  )
}

export default AboutPage
