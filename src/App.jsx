import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { Section, Card } from './components/Section'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />

        <Section id="about" eyebrow="About" title="Designer-developer crafting calm, considered interfaces">
          <div className="grid sm:grid-cols-2 gap-6">
            <Card title="Principles" subtitle="Clarity, motion, and restraint">
              I design with intention and develop with precision. I believe in accessible, performant experiences that feel effortless.
            </Card>
            <Card title="Expertise" subtitle="Product design, front-end, brand">
              I partner with teams to ship delightful web apps, design systems, and marketing sites—with a focus on animation and polish.
            </Card>
          </div>
        </Section>

        <Section id="projects" eyebrow="Selected work" title="Recent projects and collaborations">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-100 to-gray-200" />
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Project {i}</h3>
                    <span className="text-xs text-gray-500">202{(i%3)+1}</span>
                  </div>
                  <p className="mt-1 text-gray-600">A minimal, modern web experience with attention to detail.</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Contact" title="Let’s build something great together">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 bg-white">
              <p className="text-gray-700">I’m currently available for select freelance work and collaborations. Send a note and I’ll get back within 24–48 hours.</p>
              <ul className="mt-4 text-gray-700 space-y-1">
                <li><strong>Email:</strong> you@yourdomain.com</li>
                <li><strong>Location:</strong> Remote / Worldwide</li>
              </ul>
            </div>
            <form className="rounded-2xl border border-gray-200 p-6 bg-white grid gap-4">
              <input className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/20" placeholder="Your name" />
              <input type="email" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/20" placeholder="Email address" />
              <textarea rows="4" className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-900/20" placeholder="Tell me a bit about your project" />
              <button className="inline-flex items-center justify-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium hover:bg-black/90 transition-colors">Send message</button>
            </form>
          </div>
        </Section>

        <Footer />
      </main>
    </div>
  )
}
