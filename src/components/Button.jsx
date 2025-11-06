import React from 'react'

const Button = ({ text, onClick, className, ...rest }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded transition-colors cursor-pointer ${className}`}
    >
      {text}
    </button>
  )
}

export default Button
