import { motion } from 'motion/react';
import { Award, Shield, Star, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: 'Certification RGE',
    description: 'Reconnu Garant de l\'Environnement pour vos travaux d\'isolation',
  },
  {
    icon: Shield,
    title: 'Garantie Décennale',
    description: 'Tous nos travaux sont couverts par une garantie décennale',
  },
  {
    icon: Star,
    title: 'Finitions Premium',
    description: 'Attention méticuleuse portée aux détails et finitions',
  },
  {
    icon: ThumbsUp,
    title: 'Devis Personnalisé',
    description: 'Étude gratuite de votre projet et conseil sur-mesure',
  },
];

const testimonials = [
  {
    name: 'Marie Dubois',
    location: 'Annonay',
    text: 'Travail impeccable sur notre isolation. Équipe professionnelle et à l\'écoute. Je recommande vivement !',
    rating: 5,
  },
  {
    name: 'Jean-Pierre Martin',
    location: 'Valence',
    text: 'Rénovation complète de notre maison. Respect des délais et finitions parfaites. Excellente prestation.',
    rating: 5,
  },
  {
    name: 'Sophie Leroux',
    location: 'Lyon',
    text: 'Installation de placards sur-mesure. Travail soigné et conseils précieux. Très satisfaite du résultat.',
    rating: 5,
  },
];

export function Trust() {
  return (
    <section className="py-32 bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
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
              POURQUOI NOUS CHOISIR
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            GARANTIES
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#6366f1]/20 to-[#6366f1]/5 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-10 h-10 text-[#6366f1]" />
              </div>
              <h3 className="text-xl text-white mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {feature.title}
              </h3>
              <p className="text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3
            className="text-4xl md:text-5xl text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ILS NOUS FONT CONFIANCE
          </h3>
          <p className="text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
            Avis de nos clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-[#1a1a1a] border border-white/5 rounded-2xl"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#6366f1] fill-[#6366f1]" />
                ))}
              </div>
              <p className="text-white/80 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
                "{testimonial.text}"
              </p>
              <div>
                <div className="text-white font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                  {testimonial.name}
                </div>
                <div className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
                  {testimonial.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
