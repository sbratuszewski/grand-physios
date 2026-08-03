import React from 'react'
import Container from '../components/ui/Container'
import ContactForm from '../components/contact/ContactForm'
import ContactInfoBlock from '../components/contact/ContactInfoBlock'

const ContactPage = () => {
  return (
    <div className="relative w-full bg-slate-50 min-h-[calc(100vh-80px)] pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-teal-200/20 blur-3xl rounded-full pointer-events-none z-0" />

      {/* Wykorzystanie pojedynczego Containera */}
      <Container className="relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12" data-aos="fade-up">
          <span className="inline-flex items-center rounded-full bg-teal-100/60 border border-teal-200 px-3.5 py-1 text-xs sm:text-sm font-semibold text-teal-800 mb-3 backdrop-blur-sm">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Let's Start Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
              Recovery
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Have questions about our products or need to book a physical consultation? Drop us a message below.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            <ContactInfoBlock />
          </div>

          <div className="lg:col-span-7" data-aos="fade-left">
            <ContactForm />
          </div>
        </div>

      </Container>
    </div>
  )
}

export default ContactPage