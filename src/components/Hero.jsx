import { ArrowRight, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gradient-to-br from-slate-100 to-slate-200 blur-2xl opacity-70" />
        <div className="absolute -bottom-40 left-[-10%] h-[26rem] w-[26rem] rounded-full bg-gradient-to-br from-slate-50 to-white blur-xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs text-slate-600 backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Trusted Nordic market entry for Czech B2B
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900">
              Market entry to the Nordics for Czech B2B leaders
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-xl">
              We help industrial companies from the Czech Republic expand into Sweden, Norway, Denmark and Finland with precise go-to-market, PR and marketing that resonates with Nordic decision-makers.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors">
                Schedule a consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#expertise" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-3 text-sm font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                See how we work
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex -space-x-2">
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1560250056-07ba64664864?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjbGllbnR8ZW58MHwwfHx8MTc2MzM5Nzc0MXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="client" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" alt="client" />
                <img className="h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop" alt="client" />
              </div>
              <p>Trusted by industrial innovators entering the Nordics</p>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(60rem_60rem_at_-20%_-20%,rgba(15,23,42,0.06),transparent)]" />
              <div className="relative h-full w-full rounded-xl bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center text-slate-700">
                <div className="text-center px-4">
                  <p className="text-xs uppercase tracking-widest text-slate-500">Nordic GTM Framework</p>
                  <h3 className="mt-2 text-2xl font-semibold">Focus. Validate. Expand.</h3>
                  <p className="mt-3 max-w-sm mx-auto text-slate-600">Segmented ICPs, localized value propositions, partner-led motions and media relations crafted for Sweden, Norway, Denmark and Finland.</p>
                </div>
              </div>
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-52 w-52 rounded-full bg-gradient-to-tr from-slate-300/50 to-transparent blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
