import React from 'react'
import { NavLink } from 'react-router-dom'
import heroImg from '../assets/water.png'
import Button from '../components/Button'

const HomePage = () => {
  return (
    <div>
      <section className="py-20 px-6 text-slate-800">
        <div className="flex gap-10 justify-around">
          <div className="">
            <h1 className="">Grand Physios</h1>
            <h2 className="">
              Expert
              <span className="text-teal-600 mx-1">
                Musculoskeletal (MSK) physiotherapists
              </span>
              , helping you recover faster and more comfortably – all from home.
            </h2>
            <NavLink
              to="/Contact"
              className="inline-block bg-teal-600 text-white px-5 py-4 rounded-xl transition-colors cursor-pointer hover:bg-teal-700 mt-6"
            >
              Book an Appointment
            </NavLink>
          </div>
          <div>
            <img
              src={heroImg}
              alt="hero_pic"
              className="h-[300px] rounded-4xl shadow-xl"
            />
          </div>
        </div>
      </section>
      <section className="py-6 bg-red-100">Services</section>
      <section className="py-6 bg-blue-200">testimonilas</section>
    </div>
  )
}
export default HomePage
