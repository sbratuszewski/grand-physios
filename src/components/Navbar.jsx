import { useState } from 'react'
import { X, Menu } from 'lucide-react'

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
      <div className="mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-3 md:py-4 flex items-center justify-between">
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
                className="hover:text-sky-500 cursor-pointer trasition-colors"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>

        {/* Contact Button */}
        <div className="hidden md:block" data-aos="fade-right">
          <button className="text-white hover:bg-gray-700 w-30 bg-gray-500 px-4 py-2 rounded cursor-pointer transition-colors">
            Contact Us
          </button>
        </div>

        {/* Menu */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-md cursor-pointer"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 text-center">
          <ul className="font-medium">
            {navItems.map(({ name, href }) => (
              <li
                key={name}
                className="py-4 px-2 hover:text-sky-500 cursor-pointer trasition-colors"
              >
                <a
                  href={href}
                  className=""
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </a>
              </li>
            ))}
            <li>
              <button className="py-4 px-2 hover:text-sky-500 cursor-pointer trasition-colors">
                Call
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
