import React from 'react'
import Accordion from '../components/Accordion.jsx'

const faqList = [
  {
    question: 'What services do you offer?',
    answer:
      'We offer a range of physiotherapy services including home visits, pain management, post-surgical rehabilitation, and sports injury rehabilitation.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'You can book an appointment by calling us at (123) 456-7890 or by filling out the contact form on our website.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'Yes, we accept a variety of insurance plans. Please contact us to verify if your insurance is accepted.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer:
      'During your first visit, our physiotherapist will conduct a thorough assessment of your condition and discuss a personalized treatment plan with you.',
  },
]

const FaqPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center mb-10">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {/* question / answer list */}
          {faqList.map((item, index) => {
            const delay = index * 200
            return (
              <Accordion
                key={index}
                question={item.question}
                answer={item.answer}
                data-aos="fade-right"
                data-aos-delay={delay}
                data-aos-offset="100"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FaqPage