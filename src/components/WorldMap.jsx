import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const nodes = [
  { name: 'Nexus Reykjavik', x: 18, y: 24 },
  { name: 'Sahara Array', x: 42, y: 54 },
  { name: 'Andes Vault', x: 26, y: 70 },
  { name: 'Kyoto Sanctuary', x: 78, y: 36 },
  { name: 'Pacific Grid', x: 60, y: 50 },
]

export default function WorldMap() {
  return (
    <section id="atlas" className="relative bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-zinc-100">The Solterra Atlas</h2>
            <p className="mt-4 text-zinc-400 max-w-xl">
              Navigate a living world-map of active nodes. Each site is a beacon — energy, culture, and knowledge aligned in sacred geometry.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#join" className="relative overflow-hidden rounded-full px-5 py-3 text-sm font-semibold text-black">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500" />
                <span className="relative">Join a Local Cell</span>
              </a>
              <a href="#vision" className="rounded-full border border-zinc-700 bg-zinc-900/60 px-5 py-3 text-sm font-semibold text-zinc-200">
                Read the Charter
              </a>
            </div>
          </div>

          <div className="relative w-full aspect-[16/10] rounded-3xl overflow-hidden border border-zinc-800 bg-gradient-to-b from-zinc-900 to-black">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(234,179,8,0.08),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(217,119,6,0.08),transparent_45%)]" />
            <svg viewBox="0 0 100 50" className="absolute inset-0 h-full w-full opacity-40">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2" />
                </pattern>
              </defs>
              <rect width="100" height="50" fill="url(#grid)" className="text-zinc-700" />
            </svg>

            {nodes.map((n, i) => (
              <motion.div key={n.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="absolute"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                <div className="relative group">
                  <div className="absolute -inset-3 rounded-xl bg-yellow-400/10 blur opacity-0 group-hover:opacity-100 transition" />
                  <div className="relative flex items-center gap-2 rounded-xl border border-yellow-500/30 bg-zinc-900/80 px-3 py-1.5">
                    <MapPin className="h-3.5 w-3.5 text-yellow-300" />
                    <span className="text-xs text-zinc-200">{n.name}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
