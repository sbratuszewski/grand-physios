const Badge = ({ children, color = 'teal' }) => {
  const colors = {
    teal: 'bg-teal-50 text-teal-700',

    slate: 'bg-slate-100 text-slate-700',
  }

  return (
    <span
      className={`
  inline-flex
  rounded-full
  px-4
  py-2
  text-sm
  font-medium
  ${colors[color]}
  `}
    >
      {children}
    </span>
  )
}

export default Badge
