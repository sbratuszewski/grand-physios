import React from 'react'

const Button = ({ name, link }) => {
  return (
    <a href={link}>
      <button className="cursor-pointer bg-red-500 px-4 py-2 rounded text-white">
        {name}
      </button>
    </a>
  )
}

export default Button
