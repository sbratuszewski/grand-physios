import { useState } from 'react'
import Button from './Button'

const navItems = [
  { name: 'Home', href: '#' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
  { name: 'FAQ', href: '#faq' },
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <nav className="fixed w-full bg-gray-50 top-0 left-0 right-0 z-99">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="">
          <a href="#" className="text-2xl font-bold text-gray-800">
            Grand Physios
          </a>
        </div>
        {/* Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
          {navItems.map(({ name, href }) => (
            <li key={name} className="">
              <a
                href={href}
                className="hover:text-green-500 cursor-pointer trasition-colors"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
        {/* Contact Button */}
        <div className="hidden md:block">
          <Button onClick={toggleMenu} name="Contact Us" link="#" />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
