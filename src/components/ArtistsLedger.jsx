import { motion } from 'framer-motion'
import { Book, Network, Cpu, Code2, Bot } from 'lucide-react'

const SectionCard = ({ id, title, subtitle, accent, children }) => (
  <motion.a
    href={`#${id}`}
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    className="group block rounded-xl border border-neutral-200 bg-white/70 backdrop-blur-sm p-6 hover:bg-white hover:shadow-md transition-all"
  >
    <div className="flex items-center gap-3">
      <div className={`h-9 w-9 rounded-md flex items-center justify-center ${accent}`}>
        {children}
      </div>
      <div>
        <h3 className="font-serif text-xl text-neutral-900">{title}</h3>
        <p className="text-neutral-600 text-sm">{subtitle}</p>
      </div>
    </div>
  </motion.a>
)

export default function ArtistsLedger() {
  return (
    <section id="ledger" aria-label="Artist's Ledger" className="relative bg-neutral-50 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-3 mb-6">
          <Book className="h-5 w-5 text-neutral-700" />
          <h2 className="font-serif text-2xl text-neutral-900">Artist's Ledger</h2>
        </div>
        <p className="max-w-3xl text-neutral-700 mb-10">
          Leaf through curated vignettes that catalogue a practice where cables and canvas share a table.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <SectionCard
            id="structuralist"
            title="The Structuralist's Canvas"
            subtitle="Networking as minimalist line and rhythm"
            accent="bg-neutral-900 text-white"
          >
            <Network className="h-5 w-5" />
          </SectionCard>
          <SectionCard
            id="kineticist"
            title="The Kineticist's Corner"
            subtitle="IoT automata & generative scores"
            accent="bg-neutral-200 text-neutral-900"
          >
            <Cpu className="h-5 w-5" />
          </SectionCard>
          <SectionCard
            id="codist"
            title="The Codist's Studio"
            subtitle="Algorithms as conceptual art"
            accent="bg-neutral-200 text-neutral-900"
          >
            <Code2 className="h-5 w-5" />
          </SectionCard>
          <SectionCard
            id="alchemist"
            title="The Alchemist's Garden"
            subtitle="Machine learning as living ecosystem"
            accent="bg-neutral-200 text-neutral-900"
          >
            <Bot className="h-5 w-5" />
          </SectionCard>
        </div>
      </div>
    </section>
  )
}
