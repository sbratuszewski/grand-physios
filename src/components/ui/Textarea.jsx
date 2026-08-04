import React from 'react'

const Textarea = React.forwardRef(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block text-sm font-medium text-slate-300 mb-1.5 ml-1">
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          className={`w-full bg-slate-800/50 border ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
              : 'border-slate-700 focus:border-teal-400 focus:ring-teal-400/20'
          } rounded-xl px-4 py-3.5 text-slate-100 placeholder-slate-500 transition-all duration-300 focus:outline-none focus:ring-4 focus:bg-slate-800 shadow-inner resize-none ${className}`}
          {...props}
        />
        {error && <p className="text-red-400 text-sm mt-1.5 ml-1">{error}</p>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export default Textarea
