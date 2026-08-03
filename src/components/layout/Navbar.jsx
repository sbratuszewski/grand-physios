import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { X, Menu, Phone } from 'lucide-react'
import navItems from '../../data/navItems.js'
import logo from '../../assets/GP_logo.svg'
import Button from '../ui/Button.jsx'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`sticky backdrop-blur-md w-full top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/">
          <img src={logo} alt="Grand Physios Logo" className="h-10 w-auto" />
        </NavLink>

        {/* Links */}
        <ul className="hidden lg:flex items-center gap-6 lg:gap-8 font-medium">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-teal-700 transition-colors"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-teal-600 font-bold underline underline-offset-8'
                    : ''
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <Button to="/contact" className="hidden lg:flex">
          Get in Touch
        </Button>

        {/* Menu Button*/}
        <Button
          onClick={toggleMenu}
          variant=""
          className="lg:hidden cursor-pointer"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? (
            <X size={30} className="text-teal-600" />
          ) : (
            <Menu size={30} className="text-teal-600" />
          )}
        </Button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden text-center">
          <ul className="font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="py-4 px-2 hover:bg-teal-600 hover:text-white transition-colors"
              >
                <NavLink
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
