import { motion } from 'framer-motion'
import { MapPin, Compass, Satellite } from 'lucide-react'

const markers = [
  { id: 1, x: 22, y: 38, label: 'North Nexus', href: '#atlas' },
  { id: 2, x: 58, y: 48, label: 'Equatorial Gate', href: '#initiatives' },
  { id: 3, x: 76, y: 62, label: 'Southern Array', href: '#join' },
]

export default function WorldNav() {
  return (
    <section id="atlas" className="relative bg-gradient-to-b from-zinc-950 to-black py-24 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-400/5 px-3 py-1.5 text-[11px] tracking-widest text-yellow-200">
              PLANETARY ATLAS
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-semibold text-zinc-100">
              Floating World-Map Navigation
            </h2>
            <p className="mt-4 text-zinc-400 max-w-xl">
              Traverse SOLTERRA’s living network of sanctuaries, energy grids, and knowledge hubs. Each node is a gateway into the civilization stack.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 max-w-md">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 text-zinc-300 flex items-center gap-2">
                <Compass className="h-4 w-4 text-yellow-300" /> Wayfinding
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 text-zinc-300 flex items-center gap-2">
                <Satellite className="h-4 w-4 text-yellow-300" /> Gridlink
              </div>
              <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-3 text-zinc-300 flex items-center gap-2">
                <MapPin className="h-4 w-4 text-yellow-300" /> Sanctuaries
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-500/10 via-amber-300/0 to-yellow-500/10"/>

              <motion.svg
                viewBox="0 0 100 100"
                className="absolute inset-0 h-full w-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: 'linear' }}
              >
                <defs>
                  <radialGradient id="glow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fde68a" stopOpacity="0.25" />
                    <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.08" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="50" cy="50" r="48" fill="url(#glow)" />

                {[...Array(6)].map((_, i) => (
                  <circle key={i} cx="50" cy="50" r={10 + i * 6} fill="none" stroke="#3f3f46" strokeOpacity="0.7" strokeWidth="0.3" />
                ))}
                {[...Array(12)].map((_, i) => (
                  <line key={i} x1="50" y1="2" x2="50" y2="98" stroke="#3f3f46" strokeOpacity="0.7" strokeWidth="0.3" transform={`rotate(${i * 15} 50 50)`} />
                ))}
              </motion.svg>

              {markers.map(m => (
                <motion.a
                  key={m.id}
                  href={m.href}
                  className="absolute"
                  style={{ left: `${m.x}%`, top: `${m.y}%` }}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: m.id * 0.08 }}
                >
                  <div className="group relative">
                    <div className="absolute -inset-3 rounded-xl bg-yellow-400/10 blur-lg opacity-0 group-hover:opacity-100 transition" />
                    <div className="relative rounded-xl border border-yellow-500/30 bg-zinc-900/80 px-3 py-2 text-xs text-zinc-100 flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-yellow-300 animate-pulse" />
                      {m.label}
                    </div>
                  </div>
                </motion.a>
              ))}

              <div className="absolute inset-0 rounded-full border border-yellow-500/20" />
              <div className="absolute -inset-2 rounded-full blur-2xl bg-yellow-400/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
