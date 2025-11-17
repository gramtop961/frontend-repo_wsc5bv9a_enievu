import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          company: e.target.company.value,
          message: e.target.message.value,
        })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thank you — we will get back within 24 hours.')
      e.target.reset()
    } catch (err) {
      setStatus('Something went wrong. Please email us directly: hello@nordentry.co')
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(to_bottom,rgba(241,245,249,1),rgba(255,255,255,0))]" />
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Talk to an expert</h2>
          <p className="mt-4 text-slate-600">Tell us about your goals and timeline. We’ll respond within one business day.</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-12 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-md border border-slate-300 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300" />
            <input type="email" name="email" required placeholder="Work email" className="w-full rounded-md border border-slate-300 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300" />
          </div>
          <input name="company" required placeholder="Company" className="w-full rounded-md border border-slate-300 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <textarea name="message" rows="4" required placeholder="What would you like to achieve in the Nordics?" className="w-full rounded-md border border-slate-300 bg-white/80 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-slate-300" />
          <div className="flex items-center gap-3">
            <button type="submit" className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors">Send message</button>
            <span className="text-sm text-slate-600">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}
