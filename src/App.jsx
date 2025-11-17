import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Markets from './components/Markets'
import Approach from './components/Approach'
import Results from './components/Results'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-b from-slate-50 via-white to-white text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-10 opacity-60 [mask-image:radial-gradient(60rem_60rem_at_50%_0%,black,transparent)]">
        <div className="absolute inset-x-0 top-[-20%] h-[28rem] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(15,23,42,0.06),transparent)]" />
      </div>
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Markets />
        <Approach />
        <Results />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white/70 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} NordEntry Consulting. All rights reserved.</p>
          <div className="flex items-center gap-6 text-sm text-slate-500">
            <a href="#expertise" className="hover:text-slate-700">Expertise</a>
            <a href="#markets" className="hover:text-slate-700">Nordic Markets</a>
            <a href="#approach" className="hover:text-slate-700">Approach</a>
            <a href="#contact" className="hover:text-slate-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
