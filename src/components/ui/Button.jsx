import { NavLink } from 'react-router-dom'

const variants = {
  primary: 'bg-teal-600 text-white hover:bg-teal-700',

  secondary: 'border border-teal-600 text-teal-700 hover:bg-teal-50',

  dark: 'bg-slate-900 text-white hover:bg-slate-800',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3',
  lg: 'px-8 py-4 text-lg',
}

const Button = ({
  children,
  to,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const classes = `
rounded-xl
font-semibold
transition-all
duration-300
inline-flex
items-center
justify-center
gap-2
${variants[variant]}
${sizes[size]}
${className}
`

  if (to) {
    return (
      <NavLink to={to} className={classes}>
        {children}
      </NavLink>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
