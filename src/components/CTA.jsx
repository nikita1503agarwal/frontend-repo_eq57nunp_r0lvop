import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="join" className="relative bg-gradient-to-b from-black to-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-br from-zinc-900/60 to-zinc-900/20 px-8 py-14">
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-r from-yellow-500/20 via-amber-400/0 to-yellow-500/20 opacity-30" />
          <div className="relative max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-semibold text-zinc-100">Enter the SOLTERRA Nexus</h3>
            <p className="mt-3 text-zinc-400">Receive early access, design transmissions, and invitations to private assemblies.</p>
            <form className="mt-6 flex flex-col sm:flex-row gap-3">
              <input type="email" required placeholder="you@domain.com" className="w-full sm:w-auto flex-1 rounded-xl border border-zinc-800 bg-zinc-950/70 px-4 py-3 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/30" />
              <button className="relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-5 py-3 text-sm font-semibold text-black">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500" />
                <span className="relative">Request Access</span>
                <ArrowRight className="relative h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
