import React from 'react'

const FaqPage = () => {
  return (
    <div className="bg-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          <div className="bg-gray-200 p-5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              What services do you offer?
            </h2>
            <p className="text-gray-800">
              We offer a range of physiotherapy services including home visits,
              pain management, post-surgical rehabilitation, and sports injury
              rehabilitation.
            </p>
          </div>
          <div className="bg-gray-200 p-5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              How can I book an appointment?
            </h2>
            <p className="text-gray-800">
              You can book an appointment by calling us at (123) 456-7890 or by
              filling out the contact form on our website.
            </p>
          </div>
          <div className="bg-gray-200 p-5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              Do you accept insurance?
            </h2>
            <p className="text-gray-800">
              Yes, we accept a variety of insurance plans. Please contact us to
              verify if your insurance is accepted.
            </p>
          </div>
          <div className="bg-gray-200 p-5 rounded-lg">
            <h2 className="text-2xl font-semibold mb-2">
              What should I expect during my first visit?
            </h2>
            <p className="text-gray-800">
              During your first visit, our physiotherapist will conduct a
              thorough assessment of your condition and discuss a personalized
              treatment plan with you.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FaqPage