// src/components/ui/CspBadge.jsx
import React from 'react'

const CspBadge = ({ className = '' }) => {
  return (
    <div
      className={`flex items-center gap-3 bg-slate-900/50 border border-slate-800 p-3 rounded-xl max-w-fit ${className}`}
    >
      <img
        src="https://www.csp.org.uk/themes/csp/dist/img/crest.svg"
        alt="Chartered Society of Physiotherapy"
        className="h-10 w-auto object-contain"
      />
      <div className="text-left">
        <p className="text-xs font-bold text-white uppercase tracking-wider">
          Proud member of CSP
        </p>
        <p className="text-[11px] text-slate-400">
          Chartered Society of Physiotherapy
        </p>
      </div>
    </div>
  )
}

export default CspBadge
