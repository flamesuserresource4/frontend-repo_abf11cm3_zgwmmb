import { motion } from 'framer-motion'

function CanvasRule() {
  return <div className="h-px w-full bg-neutral-200" />
}

export default function Vignettes() {
  return (
    <section className="bg-white">
      {/* Structuralist's Canvas */}
      <div id="structuralist" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="font-serif text-2xl text-neutral-900">The Structuralist's Canvas</h3>
        <p className="mt-3 max-w-3xl text-neutral-700">
          Topologies distilled to line and cadence; data flows pulse with minimalist repetition reminiscent of Glass.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <svg className="w-full h-56" viewBox="0 0 600 240" aria-hidden>
              <motion.path
                d="M40,200 L160,60 L300,140 L440,80 L560,160"
                fill="none"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 2, ease: 'easeInOut' }}
              />
              {[160,300,440,560].map((x, i) => (
                <motion.circle key={x} cx={x} cy={[60,140,80,160][i]} r="6" fill="#0ea5e9"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: [0,1,0.9,1] }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i*0.15, type: 'spring', stiffness: 200 }}
                />
              ))}
            </svg>
          </div>
          <div className="prose prose-neutral max-w-none">
            <p className="text-neutral-700">
              Routing, switching, and SDN studies rendered as diagrams on raw canvas—clean, intentional, serene. Each
              node a note, each edge a measure.
            </p>
            <ul className="list-disc pl-5 text-neutral-700">
              <li>Simulation of BGP route convergence with animated metrics</li>
              <li>Wireless mesh studies with fault-tolerant patterns</li>
              <li>Latency cartography and traffic choreography</li>
            </ul>
          </div>
        </div>
      </div>
      <CanvasRule />

      {/* Kineticist's Corner */}
      <div id="kineticist" className="mx-auto max-w-6xl px-6 py-16 bg-neutral-50">
        <h3 className="font-serif text-2xl text-neutral-900">The Kineticist's Corner</h3>
        <p className="mt-3 max-w-3xl text-neutral-700">
          Devices as automata; live streams become generative scores.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative rounded-lg border border-neutral-200 p-6 bg-white">
            <motion.div
              className="aspect-[4/3] w-full rounded-md bg-gradient-to-br from-neutral-50 via-white to-neutral-100"
              initial={{ rotate: -2, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid grid-cols-6 grid-rows-4 gap-2 p-4">
                {[...Array(24)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="h-4 rounded bg-neutral-900/80"
                    initial={{ scaleY: 0.3, opacity: 0.6 }}
                    animate={{ scaleY: [0.3, 1, 0.5, 0.9, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.05 }}
                    style={{ transformOrigin: 'bottom' }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
          <div className="prose prose-neutral max-w-none">
            <p className="text-neutral-700">
              Embedded works in C/C++ and Rust for STM32/ESP32 ecosystems. Sensorium mapped to visuals and sound: a
              sketchbook of kinetic studies.
            </p>
            <ul className="list-disc pl-5 text-neutral-700">
              <li>Automaton lamp with capacitive touch and FFT-based light-sound coupling</li>
              <li>LoRa garden monitors with orchestral data motifs</li>
              <li>Modular synth MIDI bridge on RP2040</li>
            </ul>
          </div>
        </div>
      </div>
      <CanvasRule />

      {/* Codist's Studio */}
      <div id="codist" className="mx-auto max-w-6xl px-6 py-16">
        <h3 className="font-serif text-2xl text-neutral-900">The Codist's Studio</h3>
        <p className="mt-3 max-w-3xl text-neutral-700">
          Algorithms framed as conceptual gestures; code as poetic fragment.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-4">
            <pre className="text-sm leading-relaxed text-neutral-800 font-mono">
{`// an algorithm is a way of listening\nfunction glassLikeRhythm(data) {\n  return data.map((x, i) => Math.sin(i/3) * x).reduce((a, b) => a + b, 0)\n}`}            </pre>
          </div>
          <div className="prose prose-neutral max-w-none">
            <p className="text-neutral-700">
              Studies in system design, APIs, and humane interfaces. Architectural sketches sit beside commit poetry and
              storyboard frames.
            </p>
            <ul className="list-disc pl-5 text-neutral-700">
              <li>Designing composable services with graceful failure</li>
              <li>Type-safe frontiers and testing as dramaturgy</li>
              <li>Accessible interactions with tactile affordances</li>
            </ul>
          </div>
        </div>
      </div>
      <CanvasRule />

      {/* Alchemist's Garden */}
      <div id="alchemist" className="mx-auto max-w-6xl px-6 py-16 bg-neutral-50">
        <h3 className="font-serif text-2xl text-neutral-900">The Alchemist's Garden</h3>
        <p className="mt-3 max-w-3xl text-neutral-700">
          Models as ecosystems; learning visualized as blooming forms.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <svg className="w-full h-56" viewBox="0 0 600 240" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <motion.circle
                  key={i}
                  cx={80 + i * 100}
                  cy={120}
                  r={10}
                  fill="#2563eb"
                  initial={{ r: 0, opacity: 0 }}
                  whileInView={{ r: [0, 10, 20, 14], opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, delay: i * 0.2 }}
                />
              ))}
              <motion.path
                d="M60,180 C160,80 300,200 520,100"
                fill="none"
                stroke="#334155"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 2.2 }}
              />
            </svg>
          </div>
          <div className="prose prose-neutral max-w-none">
            <p className="text-neutral-700">
              Explorations in computer vision and time-series modeling. Datasets tended like bonsai: pruned, shaped,
              observed. Outcomes evaluated for balance and beauty.
            </p>
            <ul className="list-disc pl-5 text-neutral-700">
              <li>Plant disease detection with attention visualizations</li>
              <li>Gesture classification with on-device inference</li>
              <li>Generative sketches with diffusion-based textures</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
