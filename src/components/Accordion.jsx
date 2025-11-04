import React from 'react'

const Accordion = () => {
  const [accordionOpen, setAccordionpen] = React.useState(false)
  return (
    <div className="bg-gray-200 p-5 rounded-lg">
      <button>
        <span className="text-2xl font-semibold mb-2">
          What services do you offer?
        </span>
        <span>+</span>
      </button>
      <p
        className={`grid overflow-hidden transition-all duration-300 eas-in-out text-slate-600 ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        We offer a range of physiotherapy services including home visits, pain
        management, post-surgical rehabilitation, and sports injury
        rehabilitation.
      </p>
    </div>
  )
}

export default Accordion
