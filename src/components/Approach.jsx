export default function Approach() {
  const steps = [
    { k: '01', title: 'Focus', desc: 'Align on ICPs, local value props and success metrics for each Nordic market.' },
    { k: '02', title: 'Validate', desc: 'Pilot campaigns, partner reach-outs and PR to validate traction.' },
    { k: '03', title: 'Scale', desc: 'Double down with multi-channel execution and local references.' },
  ]

  return (
    <section id="approach" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">A pragmatic, senior-led approach</h2>
          <p className="mt-4 text-slate-600">No fluff. Commercial outcomes, cultural fit and efficient execution.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.k} className="group relative rounded-2xl border border-slate-200 p-6 bg-white/70 backdrop-blur">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="text-slate-400 font-mono text-sm">{s.k}</div>
                <h3 className="mt-2 font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
