import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { X, Menu, Phone } from 'lucide-react'
import navItems from '../data/navItems'
import Button from './Button.jsx'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`sticky w-full top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold">
          Grand Physios
        </NavLink>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-medium">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-teal-700 transition-colors"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive &&
                  'text-teal-600 font-bold underline underline-offset-8'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:flex items-center gap-2 text-white hover:bg-teal-700 bg-teal-600 px-5 py-2 rounded cursor-pointer transition-colors">
          <a href="tel:+123456789">Call Us Now</a>
          <Phone size={16} />
        </div>

        {/* Menu Button*/}
        <Button
          text={isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          onClick={() => toggleMenu()}
          className="md:hidden p-1 rounded-md hover:text-teal-700 transition-colors cursor-pointer"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden shadow-lg p-4 text-center">
          <ul className="font-medium">
            {navItems.map((item) => (
              <li key={item.name} className="py-4 px-2">
                <NavLink
                  to={item.path}
                  className=""
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li className="my-5">
              <a
                href="tel:+123456789"
                className="py-3 px-5 bg-teal-600 text-white rounded"
              >
                Call Us Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
