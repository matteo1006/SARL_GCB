import { motion } from 'motion/react';
import { CheckCircle2, Award, Users, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const values = [
  { icon: CheckCircle2, text: 'Travail de qualité et finitions soignées' },
  { icon: Award, text: 'Certifications RGE et respect des normes' },
  { icon: Users, text: 'Accompagnement personnalisé de A à Z' },
  { icon: Sparkles, text: 'Artisan local, proche de vous' },
];

export function About() {
  return (
    <section id="a-propos" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block px-4 py-2 bg-[#6366f1]/10 border border-[#6366f1]/20 rounded-full mb-6">
              <span className="text-[#6366f1] text-sm font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                QUI SOMMES-NOUS
              </span>
            </div>

            <h2
              className="text-5xl md:text-6xl text-white mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              VOTRE ARTISAN DE CONFIANCE
            </h2>

            <p className="text-xl text-white/70 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Depuis plus de 15 ans, <strong className="text-white">GCB</strong> accompagne les particuliers et professionnels en Auvergne-Rhône-Alpes dans leurs projets de plâtrerie, isolation et menuiserie.
            </p>

            <p className="text-lg text-white/60 mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Notre expertise terrain et notre passion du travail bien fait nous permettent de vous garantir des réalisations durables, esthétiques et conformes aux plus hauts standards de qualité.
            </p>

            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.text}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-[#6366f1]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <p className="text-white/80 pt-2" style={{ fontFamily: 'var(--font-body)' }}>
                    {value.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1685022515887-c2a10c137162?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Artisan au travail"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 to-transparent" />

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl p-6">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-4xl text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                        15+
                      </div>
                      <div className="text-sm text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                        Ans d'expérience
                      </div>
                    </div>
                    <div className="w-[1px] h-12 bg-white/20" />
                    <div className="text-center">
                      <div className="text-4xl text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                        500+
                      </div>
                      <div className="text-sm text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                        Projets réalisés
                      </div>
                    </div>
                    <div className="w-[1px] h-12 bg-white/20" />
                    <div className="text-center">
                      <div className="text-4xl text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                        RGE
                      </div>
                      <div className="text-sm text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                        Certifié
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#6366f1] rounded-full blur-[80px] opacity-40" />
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#6366f1] rounded-full blur-[80px] opacity-40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
