const Card = ({ children, className = '' }) => {
  return (
    <div
      className={`
rounded-3xl
bg-white
border
border-slate-200
shadow-sm
hover:shadow-lg
transition-all
duration-300
${className}
`}
    >
      {children}
    </div>
  )
}

export default Card
