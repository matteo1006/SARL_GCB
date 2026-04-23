import { motion } from 'motion/react';
import { Home, Shield, DoorClosed, PanelTop, Trees, Hammer } from 'lucide-react';

const services = [
  {
    icon: PanelTop,
    title: 'Pose de Placo',
    description: 'Doublage, cloisons, isolation intérieure et faux plafonds. Travail soigné avec finitions impeccables.',
  },
  {
    icon: Shield,
    title: 'Isolation RGE',
    description: 'Isolation thermique et phonique certifiée. Éligible aux aides de l\'État et subventions.',
  },
  {
    icon: DoorClosed,
    title: 'Menuiserie',
    description: 'Installation de portes, fenêtres, baies vitrées et volets roulants. Matériaux premium.',
  },
  {
    icon: Home,
    title: 'Aménagement Intérieur',
    description: 'Création de placards muraux sur-mesure et optimisation des espaces de vie.',
  },
  {
    icon: Trees,
    title: 'Terrasse & Pergola',
    description: 'Terrasses en bois exotique et pergolas bioclimatiques. Extension de votre espace extérieur.',
  },
  {
    icon: Hammer,
    title: 'Neuf & Rénovation',
    description: 'Intervention sur projets neufs et rénovation complète. Particuliers et professionnels.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-[#0a0a0a] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6366f1] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#6366f1] rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full mb-6">
            <span className="text-[#6366f1] text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
              NOS EXPERTISES
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            SERVICES
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Un accompagnement complet pour tous vos projets de construction et rénovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 bg-[#1a1a1a] border border-white/5 rounded-2xl hover:border-[#6366f1]/40 transition-all duration-500 hover:shadow-2xl hover:shadow-[#6366f1]/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

              <div className="relative">
                <div className="w-14 h-14 bg-[#6366f1]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#6366f1]/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-[#6366f1]" />
                </div>

                <h3 className="text-2xl text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
