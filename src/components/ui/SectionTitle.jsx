const SectionTitle = ({ badge, title, description, center = false }) => {
  return (
    <div className={center ? 'text-center' : ''}>
      {badge && (
        <p className="uppercase tracking-[0.25em] text-teal-600 font-semibold">
          {badge}
        </p>
      )}

      <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-slate-900">
        {title}
      </h2>

      {description && (
        <p className="mt-6 text-lg text-slate-600 max-w-2xl">{description}</p>
      )}
    </div>
  )
}

export default SectionTitle
