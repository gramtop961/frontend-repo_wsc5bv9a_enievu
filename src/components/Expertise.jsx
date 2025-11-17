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
    <section id="expertise" className="py-24 relative">
      <div className="absolute inset-0 -z-10 opacity-70 [mask-image:radial-gradient(40rem_40rem_at_50%_0%,black,transparent)]">
        <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(to_bottom,rgba(241,245,249,1),rgba(255,255,255,0))]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Expertise built for Nordic B2B</h2>
          <p className="mt-4 text-slate-600">Senior operators with experience across industrial, engineering and technology sectors. Pragmatic, data-driven and culturally fluent.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-all hover:shadow-lg">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white to-slate-50 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <Icon className="h-6 w-6 text-slate-900" />
                <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
