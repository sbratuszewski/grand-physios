import React from 'react'

const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div
      className={`
        bg-white
        rounded-2xl
        border
        border-slate-100
        shadow-sm
        overflow-hidden
        transition-all
        duration-300
        ${hover ? 'hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5' : ''}
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
