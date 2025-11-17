import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Markets from './components/Markets'
import Approach from './components/Approach'
import Results from './components/Results'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Markets />
        <Approach />
        <Results />
        <Contact />
      </main>
      <footer className="border-t border-slate-200">
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
