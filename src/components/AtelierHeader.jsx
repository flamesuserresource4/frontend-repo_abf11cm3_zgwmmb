import { useState } from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function AtelierHeader() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  return (
    <section
      aria-label="Deconstructed Atelier Hero"
      className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-neutral-950 text-neutral-100"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect()
        setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top })
      }}
    >
      {/* 3D Spline scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Cinematic gradient vignette (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_10%,rgba(88,28,135,0.25),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70" />

      {/* Glitching code texture (non-blocking) */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 sm:h-48 md:h-56 mix-blend-screen opacity-30 [mask-image:linear-gradient(to_top,black,transparent)]">
        <motion.pre
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.1, 0.3, 0.2, 0.35, 0.25] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="h-full w-full overflow-hidden text-[10px] leading-tight text-fuchsia-200/70 font-mono px-4"
        >{`for(p in packets){\n  route(p).trace().map(x=>x*golden)\n}\n\nfunction weave(stream){\n  return stream.reduce((t,i)=>t^i,0)\n}`}        </motion.pre>
      </div>

      {/* Cursor reveal spotlight (non-blocking) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(180px 180px at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.15), transparent 60%)`,
          mixBlendMode: 'screen',
        }}
      />

      {/* Title block */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight"
          >
            Deconstructed Atelier
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: 'easeOut' }}
            className="mt-5 max-w-2xl text-neutral-300 text-lg leading-relaxed"
          >
            Where the grit of the workshop meets the elegance of the gallery. Systems, staged as
            luminous artifacts—engineering with the soul of a poet.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
