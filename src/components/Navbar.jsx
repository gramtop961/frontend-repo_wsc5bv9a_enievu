import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Nordic Markets', href: '#markets' },
    { name: 'Approach', href: '#approach' },
    { name: 'Results', href: '#results' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-sm bg-gradient-to-br from-slate-900 to-slate-600" />
            <span className="text-slate-900 font-semibold tracking-tight">NordEntry Consulting</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm text-slate-700 hover:text-slate-900 transition-colors">
                {item.name}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors">
              Talk to an expert
            </a>
          </nav>

          <button className="md:hidden p-2 rounded-md hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200/60 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setOpen(false)} className="block py-2 text-slate-700">
                {item.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block mt-2 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white text-center">
              Talk to an expert
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
