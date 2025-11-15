export function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-20 sm:py-28">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          {eyebrow && <p className="text-sm uppercase tracking-[0.2em] text-gray-700/80">{eyebrow}</p>}
          <h2 className="mt-2 text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}

export function Card({ title, subtitle, children }) {
  return (
    <div className="group rounded-2xl border border-gray-200 p-6 bg-white hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
        </div>
        <div className="h-10 w-10 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors" />
      </div>
      <div className="mt-4 text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  )
}
