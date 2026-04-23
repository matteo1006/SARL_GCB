import { motion } from 'motion/react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Merci pour votre demande ! Nous vous contacterons dans les plus brefs délais.');
    setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
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
              PARLONS DE VOTRE PROJET
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            CONTACT
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-body)' }}>
            Devis gratuit et personnalisé sous 48h
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:border-[#6366f1] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:border-[#6366f1] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="jean.dupont@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:border-[#6366f1] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                    placeholder="06 XX XX XX XX"
                  />
                </div>

                <div>
                  <label className="block text-white/80 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                    Type de projet *
                  </label>
                  <select
                    required
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:border-[#6366f1] focus:outline-none transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="platerie">Plâtrerie</option>
                    <option value="isolation">Isolation</option>
                    <option value="menuiserie">Menuiserie</option>
                    <option value="amenagement">Aménagement intérieur</option>
                    <option value="terrasse">Terrasse & Pergola</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white/80 mb-2" style={{ fontFamily: 'var(--font-body)' }}>
                  Message *
                </label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg text-white focus:border-[#6366f1] focus:outline-none transition-colors resize-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                  placeholder="Décrivez-nous votre projet..."
                />
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto px-10 py-4 bg-[#6366f1] text-white rounded-lg hover:bg-[#5558e3] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                <span className="font-semibold">Demander un devis gratuit</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="p-8 bg-[#1a1a1a] border border-white/5 rounded-2xl">
              <h3
                className="text-2xl text-white mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                COORDONNÉES
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#6366f1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                      Téléphone
                    </div>
                    <a
                      href="tel:+33123456789"
                      className="text-white hover:text-[#6366f1] transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      04 XX XX XX XX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#6366f1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                      Email
                    </div>
                    <a
                      href="mailto:contact@gcb-batiment.fr"
                      className="text-white hover:text-[#6366f1] transition-colors"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      contact@gcb-batiment.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#6366f1]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#6366f1]" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm mb-1" style={{ fontFamily: 'var(--font-body)' }}>
                      Adresse
                    </div>
                    <div className="text-white" style={{ fontFamily: 'var(--font-body)' }}>
                      Annonay, Ardèche (07)
                      <br />
                      Auvergne-Rhône-Alpes
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-[#6366f1]/10 to-transparent border border-[#6366f1]/20 rounded-2xl">
              <h4 className="text-white text-lg mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                HORAIRES
              </h4>
              <div className="space-y-2 text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
                <div className="flex justify-between">
                  <span>Lundi - Vendredi</span>
                  <span className="text-white">8h - 18h</span>
                </div>
                <div className="flex justify-between">
                  <span>Samedi</span>
                  <span className="text-white">9h - 12h</span>
                </div>
                <div className="flex justify-between">
                  <span>Dimanche</span>
                  <span>Fermé</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
