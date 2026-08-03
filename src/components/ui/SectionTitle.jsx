import React from 'react'
import Badge from './Badge'

const SectionTitle = ({
  badge,
  title,
  description,
  center = false,
  className = '',
}) => {
  return (
    <div className={`${center ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`mb-3 ${center ? 'flex justify-center' : ''}`}>
          <Badge color="teal">{badge}</Badge>
        </div>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg text-slate-600 leading-relaxed ${
            center ? 'max-w-2xl mx-auto' : 'max-w-2xl'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
