import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { X, Menu } from 'lucide-react'
import Button from './Button.jsx'

const navItems = [
  { name: 'Home', path: '/', exact: 'true' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed w-full bg-cyan-600 top-0 left-0 right-0 z-[99]">
      <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="">
          <NavLink to="/" className="text-2xl font-bold text-gray-800">
            Grand Physios
          </NavLink>
        </div>

        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="hover:text-sky-500 cursor-pointer transition-colors"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive ? 'text-red-500 font-bold' : 'text-gray-700'
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        {/* Contact Button */}
        <a
          href="tel:+123456789"
          className="hidden md:block text-white hover:bg-gray-700 bg-blue-500 px-4 py-2 rounded cursor-pointer transition-colors"
        >
          Contact Us
        </a>

        {/* Menu Button*/}
        <Button
          text={isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          onClick={() => toggleMenu()}
          className="md:hidden p-1 rounded-md cursor-pointer"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-cyan-500 shadow-lg p-4 text-center">
          <ul className="font-medium">
            {navItems.map((item) => (
              <li
                key={item.name}
                className="py-4 px-2 hover:text-sky-500 cursor-pointer transition-colors"
              >
                <NavLink
                  to={item.path}
                  className=""
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <a
                href="tel:+123456789"
                className="py-4 px-2 hover:text-sky-500 cursor-pointer transition-colors"
              >
                Call
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
