export default function Markets() {
  const markets = [
    { country: 'Sweden', focus: 'Automation, clean-tech, industrial software' },
    { country: 'Norway', focus: 'Energy, maritime, heavy industry' },
    { country: 'Denmark', focus: 'Robotics, healthcare, food processing' },
    { country: 'Finland', focus: 'Telecom, electronics, forest industry' },
  ]

  return (
    <section id="markets" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Nordic markets we serve</h2>
          <p className="mt-4 text-slate-600">Local nuance, procurement culture and language matter. We translate Czech strengths into Nordic value.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {markets.map((m) => (
            <div key={m.country} className="rounded-xl border border-slate-200 p-6 bg-white">
              <div className="text-sm uppercase tracking-widest text-slate-500">{m.country}</div>
              <div className="mt-2 font-medium text-slate-900">{m.focus}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
