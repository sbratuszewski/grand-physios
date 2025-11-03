import React from 'react'

const Card = ({ title, description, image, className }) => {
  return (
    <div className={`rounded-lg shadow-lg p-4 ${className}`}>
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded-t-lg"
        />
      )}
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default Card
