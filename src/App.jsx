import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import WorldNav from './components/WorldNav'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <Features />
      <WorldNav />
      <CTA />
      <footer className="border-t border-zinc-800/80 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs tracking-widest text-zinc-500">
            <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
            SOLTERRA — NEW CIVILIZATION PROTOCOL
          </div>
          <div className="text-xs text-zinc-500">© {new Date().getFullYear()} SOLTERRA. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
