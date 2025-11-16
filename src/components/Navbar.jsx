import { Menu, Star } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-6 backdrop-blur-xl bg-black/40 border border-zinc-800 rounded-2xl px-5 py-3 flex items-center justify-between shadow-[0_0_60px_-20px_rgba(255,215,0,0.25)]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-yellow-400/30 to-emerald-400/30 blur-md" />
              <div className="relative h-9 w-9 rounded-full bg-gradient-to-b from-zinc-900 to-zinc-800 border border-zinc-700 flex items-center justify-center">
                <Star className="h-4 w-4 text-yellow-400" />
              </div>
            </div>
            <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="font-semibold tracking-widest text-[13px] text-zinc-200">
              SOLTERRA
            </motion.div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm">
            {['Vision','Atlas','Pillars','Initiatives','Join'].map((item, idx) => (
              <motion.a key={item} href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * idx, duration: 0.5 }}
                className="text-zinc-300 hover:text-yellow-300 transition-colors">
                {item}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex relative overflow-hidden rounded-full px-4 py-2 text-xs font-semibold tracking-wide text-black">
              <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500" />
              <span className="relative">Enter Nexus</span>
            </button>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/60 text-zinc-200 md:hidden">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
