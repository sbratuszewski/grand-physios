import React from 'react'
import Accordion from '../components/Accordion.jsx'

const faqList = [
  {
    question: 'Is treatment funded by the NHS?',
    answer:
      'No, Grandphysios is not funded by the NHS. We are a team of private musculoskeletal (MSK) physiotherapists providing personalised, high-quality care.',
  },
  {
    question: 'How soon can I get an appointment?',
    answer:
      'We aim to offer appointments within 24–48 hours of your initial enquiry. Availability may vary depending on demand, so please contact us directly to secure your preferred time.',
  },
  {
    question: 'Are Grandphysios physiotherapists HCPC registered?',
    answer:
      'Yes. All our physiotherapists are registered with the Health and Care Professions Council (HCPC) and are also members of the Chartered Society of Physiotherapy (CSP).',
  },
  {
    question: 'Do I need a GP referral to book an appointment?',
    answer:
      'No GP referral is required. You can book an appointment with us directly at any time.',
  },
  {
    question: 'How much do sessions cost?',
    answer:
      'Our pricing is designed to be accessible and transparent. Session costs may vary depending on the type of service (in-person, virtual, or telephone), travel distance, and the number of sessions required. Please contact us for a personalised quote.',
  },
  {
    question: 'Can I purchase equipment from Grandphysios?',
    answer:
      'Yes. We offer a range of high-quality rehabilitation aids, home exercise, and support equipment available through our website. Products can be purchased with or without professional prescription and are designed by experts to support your recovery at home.',
  },
  {
    question: 'Do you offer virtual or online physiotherapy sessions?',
    answer:
      'Yes, we offer virtual and telephone physiotherapy consultations for patients who prefer remote care or are unable to attend in person.',
  },
  {
    question: 'What conditions do you treat?',
    answer:
      'We treat a wide range of musculoskeletal conditions, including back and neck pain, sports injuries, post-operative rehabilitation, joint problems, and work-related injuries.',
  },
  {
    question: 'Do you offer home visit appointments?',
    answer:
      'Yes, we provide home visit physiotherapy services for patients who prefer treatment in the comfort of their own home.',
  },
  {
    question: 'Do you accept private health insurance?',
    answer:
      'We work with selected private health insurers. Please contact us to confirm whether your policy is accepted.',
  },
]

const FaqPage = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center mb-10">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6 text-left">
          {/* question / answer list */}
          {faqList.map((item, index) => {
            const delay = index * 250
            return (
              <Accordion
                key={index}
                question={item.question}
                answer={item.answer}
                data-aos="fade-up"
                data-aos-delay={delay}
                data-aos-offset="-100"
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FaqPage