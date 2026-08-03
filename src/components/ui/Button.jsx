import { NavLink } from 'react-router-dom'

// Oryginalne warianty kolorystyczne (Teal)
const variants = {
  primary:
    'bg-teal-600 text-white hover:bg-teal-700 shadow-md shadow-teal-600/20 hover:shadow-lg hover:shadow-teal-600/30',
  secondary:
    'bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-teal-200 shadow-sm hover:shadow-md',
  outline: 'border border-teal-600 text-teal-700 hover:bg-teal-50',
  dark: 'bg-slate-900 text-white hover:bg-slate-800 shadow-md shadow-slate-900/20 hover:shadow-lg',
  light:
    'bg-transparent text-teal-600 hover:text-teal-700 shadow-none hover:translate-y-0 focus:ring-0 p-0 border-none',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-7 py-3.5 text-lg font-bold',
}

const Button = ({
  type = 'button',
  children,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  // Class base with animations (hover, active, focus)
  const baseClasses = `
  inline-flex
  flex-row
  items-center
  justify-center
  whitespace-nowrap
  shrink-0
  gap-2
  rounded-xl
  font-semibold
  transition-all
  duration-300
  ease-in-out
  transform
  hover:-translate-y-0.5
  active:translate-y-0
  cursor-pointer
  disabled:opacity-50
  disabled:pointer-events-none
  focus:outline-none
  focus:ring-4
  focus:ring-teal-500/20
  ${variants[variant] || variants.primary}
  ${sizes[size] || sizes.md}
  ${className}
`
    .trim()
    .replace(/\s+/g, ' ')

  if (to) {
    return (
      <NavLink to={to} className={baseClasses} {...props}>
        {children}
      </NavLink>
    )
  }

  return (
    <button type={type} className={baseClasses} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button