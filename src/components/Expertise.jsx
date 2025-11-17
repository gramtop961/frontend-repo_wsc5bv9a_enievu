import { Target, Megaphone, Landmark, Users } from 'lucide-react'

const items = [
  {
    icon: Target,
    title: 'Go-to-Market Strategy',
    desc: 'ICP definition, value proposition, sales motion and channel design tailored to Nordic buyers.'
  },
  {
    icon: Megaphone,
    title: 'B2B Marketing',
    desc: 'Localized messaging, content and campaigns that perform in Sweden, Norway, Denmark and Finland.'
  },
  {
    icon: Landmark,
    title: 'PR & Media Relations',
    desc: 'Earned coverage and thought leadership across tier-1 Nordic business and industry media.'
  },
  {
    icon: Users,
    title: 'Partnerships',
    desc: 'System integrators, distributors and associations that accelerate market entry and trust.'
  }
]

export default function Expertise() {
  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Expertise built for Nordic B2B</h2>
          <p className="mt-4 text-slate-600">Senior operators with experience across industrial, engineering and technology sectors. Pragmatic, data-driven and culturally fluent.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 p-6 hover:shadow-sm transition-shadow">
              <Icon className="h-6 w-6 text-slate-900" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
