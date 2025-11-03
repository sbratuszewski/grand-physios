import React from 'react'
import Card from '../components/Card'
import pic from '../assets/water.png'

const HomePage = () => {
  const services = [
    {
      title: 'Physiotherapy',
      description: 'Professional physiotherapy services.',
      image: { pic },
    },
    {
      title: 'Rehabilitation',
      description: 'Rehabilitation programs tailored to your needs.',
      image: '/assets/rehab.jpg',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {services.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
  )
}
export default HomePage
