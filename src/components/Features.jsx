import { Globe, Sparkles, Shield, Infinity } from 'lucide-react'
import { motion } from 'framer-motion'

const items = [
  {
    icon: Globe,
    title: 'Planetary Architecture',
    desc: 'A living atlas of habitats, energy grids, and knowledge sanctuaries engineered for planetary harmony.'
  },
  {
    icon: Shield,
    title: 'Sovereign Systems',
    desc: 'Trustless governance and resilient economics aligned to the sacred geometry of nature.'
  },
  {
    icon: Sparkles,
    title: 'Conscious Design',
    desc: 'Artifacts and environments tuned to human flourishing — elegant, minimal, and luminous.'
  },
  {
    icon: Infinity,
    title: 'Continuum Protocols',
    desc: 'Interoperable standards that connect minds, machines, and ecosystems into a coherent whole.'
  },
]

export default function Features() {
  return (
    <section id="pillars" className="relative py-24 sm:py-28 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 * i, duration: 0.5 }}
              className="relative rounded-2xl border border-yellow-500/10 bg-zinc-900/40 p-6 backdrop-blur-xl">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-500/0 via-amber-400/0 to-yellow-500/10 opacity-0 hover:opacity-100 transition" />
              <div className="relative flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl border border-yellow-500/30 bg-zinc-900 grid place-items-center">
                  <item.icon className="h-5 w-5 text-yellow-300" />
                </div>
                <h3 className="font-semibold text-zinc-100">{item.title}</h3>
              </div>
              <p className="relative mt-3 text-sm text-zinc-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
