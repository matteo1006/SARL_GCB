import { motion } from 'motion/react';
import { ArrowRight, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1768839725085-829e6ac7ac26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920"
          alt="Chantier de plâtrerie"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="relative h-full max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#6366f1]/20 backdrop-blur-sm border border-[#6366f1]/40 rounded-full mb-6"
          >
            <Award className="w-4 h-4 text-[#6366f1]" />
            <span className="text-white/90 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              Certifié RGE • Expert depuis 15 ans
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-[1.1]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            EXPERT EN PLÂTRERIE & ISOLATION
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Votre artisan de confiance en Auvergne-Rhône-Alpes pour vos travaux de placo, isolation thermique et menuiserie sur-mesure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-[#6366f1] text-white rounded-lg hover:bg-[#5558e3] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-xl shadow-[#6366f1]/20"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="font-semibold">Demander un devis gratuit</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="tel:+33123456789"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <span className="font-semibold">04 XX XX XX XX</span>
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </motion.div>
    </div>
  );
}
