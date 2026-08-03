import { Phone } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const ConsultationButton = ({
  className = '',
  children = 'Book Consultation',
}) => {
  return (
    <NavLink to="/contact" className={className}>
      {children}
      <Phone size={18} />
    </NavLink>
  )
}

export default ConsultationButton
