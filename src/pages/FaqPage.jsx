import React from 'react'
import Accordion from '../components/ui/Accordion.jsx'
import faqList from '../data/faqList.js'
import Button from '../components/ui/Button.jsx'
import { MessageCircle } from 'lucide-react'

const FaqPage = () => {
  // Loading state with modern spinner matching the site theme
  if (!faqList || !Array.isArray(faqList)) {
    return (
      <div className="flex justify-center items-center min-h-[50vh] text-slate-500 font-medium">
        <span className="w-6 h-6 border-2 border-teal-600 border-t-transparent rounded-full animate-spin mr-3" />
        Loading FAQ...
      </div>
    )
  }

  return (
    <div className="relative w-full bg-slate-50 min-h-screen py-16 sm:py-24 overflow-hidden">
      {/* BACKGROUND ACCENT: Soft glowing radial blob behind the FAQ container */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-200/30 blur-3xl rounded-full pointer-events-none z-0" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <span className="inline-flex items-center rounded-full bg-teal-100/60 border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-800 mb-4 backdrop-blur-sm">
            Got Questions? We've Got Answers
          </span>

          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Questions
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Everything you need to know about our physiotherapy consultations, online store, and rehabilitation products.
          </p>
        </div>

        {/* FAQ List Container */}
        <div className="space-y-4" data-aos="fade-up" data-aos-delay="100">
          {faqList.map((item, index) => (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>

        {/* Additional Contact CTA Banner */}
        <div
          className="mt-16 text-center bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-8 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6"
          data-aos="fade-up"
        >
          <div className="text-center sm:text-left">
            <h3 className="text-xl font-bold text-slate-900">Still have questions?</h3>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Can't find the answer you're looking for? Please get in touch with our team.
            </p>
          </div>
          <Button to="/contact" size="md" className="shrink-0">
            <MessageCircle size={18} />
            Contact Us
          </Button>
        </div>

      </div>
    </div>
  )
}

export default FaqPage