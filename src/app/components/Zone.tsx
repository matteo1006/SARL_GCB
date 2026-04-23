import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';

export function Zone() {
  return (
    <section className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6366f1] rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-2 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full mb-6">
              <span className="text-[#6366f1] text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                SECTEUR D'INTERVENTION
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              VOTRE ARTISAN LOCAL
            </h2>

            <p className="text-xl text-white/70 mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Basé à <strong className="text-white">Annonay</strong>, nous intervenons dans toute la région <strong className="text-white">Auvergne-Rhône-Alpes</strong> pour vos projets de plâtrerie, isolation et menuiserie.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6366f1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#6366f1]" />
                </div>
                <div>
                  <h3 className="text-white text-lg mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                    Zones couvertes
                  </h3>
                  <p className="text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                    Annonay, Valence, Lyon, Saint-Étienne, Grenoble et communes environnantes
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#6366f1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#6366f1]" />
                </div>
                <div>
                  <h3 className="text-white text-lg mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                    Disponibilité
                  </h3>
                  <p className="text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                    Devis gratuit sous 48h • Intervention rapide
                  </p>
                </div>
              </div>
            </div>

            <a
              href="tel:+33123456789"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#6366f1] text-white rounded-lg hover:bg-[#5558e3] transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Contactez-nous</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.4000%2C45.1500%2C4.9000%2C45.4500&layer=mapnik&marker=45.2400%2C4.6700"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                title="Carte de la zone d'intervention"
              />
            </div>

            <div className="absolute -bottom-6 -right-6 p-6 bg-[#1a1a1a] border border-white/10 rounded-xl backdrop-blur-sm max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-[#6366f1]" />
                <span className="text-white font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                  Annonay (07)
                </span>
              </div>
              <p className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                Rayon d'intervention : 100 km
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
