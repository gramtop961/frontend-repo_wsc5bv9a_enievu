export default function Markets() {
  const markets = [
    { country: 'Sweden', focus: 'Automation, clean-tech, industrial software' },
    { country: 'Norway', focus: 'Energy, maritime, heavy industry' },
    { country: 'Denmark', focus: 'Robotics, healthcare, food processing' },
    { country: 'Finland', focus: 'Telecom, electronics, forest industry' },
  ]

  return (
    <section id="markets" className="py-24 bg-slate-50 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(255,255,255,1),rgba(241,245,249,0))]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Nordic markets we serve</h2>
          <p className="mt-4 text-slate-600">Local nuance, procurement culture and language matter. We translate Czech strengths into Nordic value.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((m) => (
            <div key={m.country} className="group relative rounded-2xl border border-slate-200 p-6 bg-white overflow-hidden">
              <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-slate-100 group-hover:bg-slate-200 transition-colors" />
              <div className="relative">
                <div className="text-xs uppercase tracking-widest text-slate-500">{m.country}</div>
                <div className="mt-2 font-medium text-slate-900">{m.focus}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
