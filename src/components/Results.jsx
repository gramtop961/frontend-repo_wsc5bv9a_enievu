export default function Results() {
  const results = [
    { stat: '18 weeks', label: 'from first meeting to first Nordic customer' },
    { stat: '3x', label: 'increase in qualified pipeline in 6 months' },
    { stat: '12+', label: 'tier-1 media mentions across the region' },
  ]

  return (
    <section id="results" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Commercial outcomes that matter</h2>
          <p className="mt-4 text-slate-600">Selected metrics from recent market entries. References available on request.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {results.map((r) => (
            <div key={r.label} className="rounded-xl border border-slate-200 p-6 bg-white">
              <div className="text-3xl font-semibold text-slate-900">{r.stat}</div>
              <div className="mt-2 text-sm text-slate-600">{r.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
