import React from 'react'
import ContactForm from '../components/ContactForm.jsx'

const ContactPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center mb-10">
          Contact Us
        </h1>
        <div className="space-y-6">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactPage
