import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-400/5 px-3 py-1.5 text-[11px] tracking-widest text-yellow-200">
              NEW CIVILIZATION PROTOCOL
            </div>
            <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] bg-gradient-to-br from-zinc-100 via-yellow-200 to-amber-400 bg-clip-text text-transparent">
              SOLTERRA
            </h1>
            <p className="mt-5 text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl">
              A visionary empire shaping humanity’s next evolution — elegant, powerful, and spiritually advanced. Enter a world of black-gold minimalism, sacred geometry, and living technology.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#atlas" className="relative overflow-hidden rounded-full px-5 py-3 text-sm font-semibold text-black">
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500" />
                <span className="relative">Explore the Atlas</span>
              </a>
              <a href="#join" className="rounded-full border border-zinc-700 bg-black/60 px-5 py-3 text-sm font-semibold text-zinc-200 hover:border-yellow-400/50 transition">
                Join the Initiative
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
