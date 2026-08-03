import React from 'react'

const Badge = ({ children, color = 'teal', className = '' }) => {
  const colors = {
    teal: 'bg-teal-50 text-teal-700 border-teal-200/60',
    slate: 'bg-slate-100 text-slate-700 border-slate-200',
    dark: 'bg-teal-950 text-teal-300 border-teal-800/60',
  }

  return (
    <span
      className={`
        inline-flex
        items-center
        gap-1.5
        rounded-full
        px-3.5
        py-1.5
        text-xs
        font-bold
        uppercase
        tracking-widest
        border
        shadow-xs
        ${colors[color] || colors.teal}
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {children}
    </span>
  )
}

export default Badge
