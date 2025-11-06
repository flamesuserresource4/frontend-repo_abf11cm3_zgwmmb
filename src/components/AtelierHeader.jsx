import { motion } from 'framer-motion'

export default function AtelierHeader() {
  return (
    <section
      aria-label="Polytechnic Atelier Hero"
      className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,1),rgba(243,244,246,1))]"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* Paper grain */}
        <div className="absolute inset-0 mix-blend-multiply opacity-40" style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 2px)',
        }} />
        {/* Warm sun stripe */}
        <div className="absolute -right-24 top-0 h-full w-1/2 bg-gradient-to-b from-amber-100/60 via-transparent to-transparent" />
        {/* Cool dusk stripe */}
        <div className="absolute -left-24 bottom-0 h-full w-1/2 bg-gradient-to-t from-sky-100/60 via-transparent to-transparent" />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-24 sm:py-28 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-neutral-900"
        >
          Polytechnic Atelier
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
          className="mt-5 max-w-3xl text-neutral-700 text-lg leading-relaxed"
        >
          A sun-drenched studio where technology communes with fine art and sound. A singular
          ledger of works by a Computer Engineering student of IPB University—part engineer,
          part composer,
          part sculptor.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a href="#ledger" className="rounded-full bg-neutral-900 text-white px-5 py-2 text-sm tracking-wide hover:bg-neutral-800 transition-colors">
            Open the Artist's Ledger
          </a>
          <a href="#alchemist" className="rounded-full border border-neutral-300 text-neutral-800 px-5 py-2 text-sm tracking-wide hover:bg-white/80 backdrop-blur">
            Visit the Garden
          </a>
        </motion.div>
      </div>

      {/* Minimalist line drawing network behind title */}
      <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 md:h-56">
        <svg className="w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none" aria-hidden>
          <motion.path
            d="M0,160 L200,120 L420,140 L600,80 L820,100 L1000,60 L1200,120"
            fill="none"
            stroke="#4b5563"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.4, ease: 'easeInOut' }}
          />
          {[120, 420, 600, 820, 1000].map((x, i) => (
            <motion.circle
              key={x}
              cx={x}
              cy={[120,140,80,100,60][i]}
              r="4"
              fill="#ef4444"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 + i * 0.1, type: 'spring', stiffness: 200 }}
            />
          ))}
        </svg>
      </div>
    </section>
  )
}
