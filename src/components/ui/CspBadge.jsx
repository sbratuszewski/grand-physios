import React from 'react'

const CspBadge = ({
  href = 'https://www.csp.org.uk',
  className = '',
  bgClass = 'bg-slate-900/50 hover:bg-slate-900',
  borderClass = 'border-slate-800 hover:border-slate-700',
  titleClass = 'text-white',
  subtitleClass = 'text-slate-400',
}) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 border p-3 rounded-xl max-w-fit transition-colors ${bgClass} ${borderClass} ${className}`}
    >
      <img
        src="https://www.csp.org.uk/themes/csp/dist/img/crest.svg"
        alt="Chartered Society of Physiotherapy"
        className="h-10 w-auto object-contain"
      />
      <div className="text-left">
        <p
          className={`text-xs font-bold uppercase tracking-wider ${titleClass}`}
        >
          Member of CSP
        </p>
        <p className={`text-[11px] ${subtitleClass}`}>
          Chartered Society of Physiotherapy
        </p>
      </div>
    </a>
  )
}

export default CspBadge
