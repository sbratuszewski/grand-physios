import React from 'react'
import ContactForm from '../components/ContactForm.jsx'
import { Phone } from 'lucide-react'
import contactHero from '../assets/close-up-person-working-call-center.jpg'
const ContactPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative w-full">
        <img
          src={contactHero}
          alt="man-with-headset"
          className="w-full h-75 xl:h-100 object-cover"
        />
        <h1 className="absolute top-30 right-20 xs:right-30 xl:right-60 text-4xl lg:text-5xl font-bold mb-8 text-center uppercase mb-10">
          Contact Us
        </h1>
      </div>
      <div className="lg:max-w-7xl lg:flex space-y-6 gap-x-6 py-20 px-6 mt-10 mx-auto">
        <div
          className="max-w-xl flex flex-col p-6 space-y-4 mx-auto"
          data-aos="fade-right"
          data-aos-offset="100"
        >
          <h3 className="text-2xl text-gray-700">
            If you have any questions, please use the contact form. We'll try to
            respond as quickly as possible. You can also simply call us.
          </h3>
          <a
            href="tel:+123456789"
            className="w-42 flex items-center justify-center gap-2 text-white hover:bg-teal-700 bg-teal-600 px-5 py-4 mx-auto my-6 rounded-xl cursor-pointer transition-colors shadow-lg"
          >
            +123456789 <Phone size={16} />
          </a>
        </div>
        <ContactForm className="mx-auto" />
      </div>
    </div>
  )
}

export default ContactPage
