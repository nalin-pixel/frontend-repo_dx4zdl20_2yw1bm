import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-700/80">Portfolio</p>
          <h1 className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight text-gray-900">Modern. Minimal. Memorable.</h1>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            I craft thoughtful digital products and brand experiences with a focus on clarity, motion, and subtle details.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-black/90 transition-colors">View work</a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-white/90 backdrop-blur px-5 py-2.5 text-sm font-medium text-gray-900 shadow-sm border border-gray-200 hover:bg-white">Contact</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  )
}
