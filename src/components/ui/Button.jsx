import React from 'react'

const Button = ({ children, onClick, className = '', ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
