import React from 'react'
import { Plus, Minus } from 'lucide-react'

const Accordion = ({ question, answer, ...rest }) => {
  const [accordionOpen, setAccordionOpen] = React.useState(false)

  return (
    <div
      {...rest}
      className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
        accordionOpen
          ? 'border-teal-500/40 shadow-md ring-4 ring-teal-500/5'
          : 'border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow'
      }`}
    >
      {/* Header Button */}
      <button
        className="flex justify-between w-full items-center cursor-pointer p-5 sm:p-6 text-left gap-4"
        onClick={() => setAccordionOpen(!accordionOpen)}
      >
        <h3
          className={`text-lg sm:text-xl font-bold transition-colors ${
            accordionOpen ? 'text-teal-700' : 'text-slate-900'
          }`}
        >
          {question}
        </h3>

        {/* Plus / Minus Icon Container */}
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${
            accordionOpen
              ? 'bg-teal-600 text-white shadow-md shadow-teal-600/20'
              : 'bg-slate-100 text-slate-500'
          }`}
        >
          {accordionOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>

      {/* Accordion Content Wrapper */}
      <div
        className={`grid transition-all duration-300 ease-in-out text-slate-600 ${
          accordionOpen
            ? 'grid-rows-[1fr] opacity-100 pb-6 px-5 sm:px-6'
            : 'grid-rows-[0fr] opacity-0 pb-0 px-5 sm:px-6'
        }`}
      >
        <div className="overflow-hidden">
          <p className="pt-3 text-base leading-relaxed border-t border-slate-100">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accordion