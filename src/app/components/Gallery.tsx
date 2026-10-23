import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

const categories = ['Plâtrerie & Cloisons', 'Isolation RGE', 'Menuiserie', 'Neuf & Rénovation'];

export function Gallery() {
  return (
    <section id="realisations" className="py-32 bg-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full mb-6">
            <span className="text-[#6366f1] text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
              PORTFOLIO
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            RÉALISATIONS
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Photos de chantiers en cours de publication
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-20 bg-[#0a0a0a] border border-white/5 rounded-2xl"
        >
          <div className="w-20 h-20 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-2xl flex items-center justify-center mb-6">
            <Camera className="w-10 h-10 text-[#6366f1]" />
          </div>
          <p className="text-white text-xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>
            Photos à venir
          </p>
          <p className="text-white/50 text-center max-w-md" style={{ fontFamily: 'var(--font-body)' }}>
            Nos photos de réalisations seront publiées prochainement. Contactez-nous pour voir des exemples de travaux similaires à votre projet.
          </p>
          <div className="flex flex-wrap gap-3 mt-8 justify-center">
            {categories.map((cat) => (
              <span key={cat} className="px-4 py-2 bg-[#1a1a1a] border border-white/10 rounded-full text-white/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                {cat}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
