import React from 'react'
import { NavLink } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'
import navItems from '../data/navItems'

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Brand Section */}
        <div className="flex flex-col gap-3 p-2 md:p-4">
          <NavLink
            to="/"
            className="text-lg tracking-wide uppercase font-bold mb-2"
          >
            Grand Physios logo
          </NavLink>
          <p>Proffesional physiotherapy services.</p>
          <p>Helping Aberdeen stay active and pain-free.</p>
        </div>

        {/* Footer Quick Menu */}
        <div className="flex flex-col gap-1 p-2 md:p-4 list-none">
          <h2 className="text-lg tracking-wide uppercase mb-2">Quick Links</h2>
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-teal-700 transition-colors"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive && 'text-teal-600 font-bold'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </div>

        <div className="flex flex-col gap-2 p-2 md:p-4">
          <h2 className="text-lg tracking-wide uppercase mb-2">Our Services</h2>
          <p>Home Visits</p>
          <p>Pain Management</p>
          <p>Post-Surgical Rehab</p>
          <p>Sports Injury Rehab</p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4 p-2 md:p-4">
          <h2 className="text-lg tracking-wide uppercase mb-2">Contact</h2>
          <div className="flex gap-x-3">
            {/* lucide icon */}
            <Mail />
            <a className="flex gap-x-3" href="mailto:info@grandphysios.com">
              info@grandphysios.com
            </a>
          </div>
          <div className="flex gap-x-3">
            {/* lucide icon */}
            <Phone />
            <a className="flex gap-x-3" href="tel:+">
              11111111111
            </a>
          </div>
          <div className="flex gap-x-3">
            {/* lucide icon */}
            <MapPin />
            <a className="flex gap-x-3" href="#">
              123 Main St, Aberdeen, UK
            </a>
          </div>
        </div>
      </div>

      <p className="w-full text-center text-sm mt-10">
        &copy; {new Date().getFullYear()} Grand Physios. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
