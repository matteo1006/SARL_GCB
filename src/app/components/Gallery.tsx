import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1768321917661-d4f1a89d2185?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Rénovation complète',
    category: 'Plâtrerie',
  },
  {
    image: 'https://images.unsplash.com/photo-1768321914149-5a6428ec2f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Isolation intérieure',
    category: 'Isolation RGE',
  },
  {
    image: 'https://images.unsplash.com/photo-1631396326838-de37e5f8bcbc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Menuiserie sur-mesure',
    category: 'Menuiserie',
  },
  {
    image: 'https://images.unsplash.com/photo-1768321903885-d0a6798485d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Cloisons & faux plafonds',
    category: 'Plâtrerie',
  },
  {
    image: 'https://images.unsplash.com/photo-1773427457869-6fbded8b89b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Construction neuve',
    category: 'Neuf',
  },
  {
    image: 'https://images.unsplash.com/photo-1638890928047-10a4eb9d4744?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Aménagement intérieur',
    category: 'Rénovation',
  },
];

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
            Découvrez quelques-uns de nos projets récents
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

              <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-2">
                  <span
                    className="inline-block px-3 py-1 bg-[#6366f1]/80 backdrop-blur-sm text-white text-xs rounded-full"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {project.category}
                  </span>
                </div>
                <h3
                  className="text-xl text-white"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {project.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/20 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
