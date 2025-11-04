import React from 'react'
import { Plus, Minus } from 'lucide-react'

const Accordion = ({ question, answer }) => {
  const [accordionOpen, setAccordionOpen] = React.useState(false)
  return (
    <div className="bg-gray-200 p-5 rounded-lg">
      <button
        className="flex justify-between w-full items-center cursor-pointer"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <h2 className="text-2xl font-semibold mb-2">{question}</h2>
        {accordionOpen ? <Minus size={30} /> : <Plus size={30} />}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 eas-in-out text-gray-800 ${accordionOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <p className="overflow-hidden">{answer}</p>
      </div>
    </div>
  )
}

export default Accordion
