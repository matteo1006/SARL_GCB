import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="text-white mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-4xl">GCB</span>
            </div>
            <p className="text-white/60 mb-6 leading-relaxed" style={{ fontFamily: 'var(--font-body)' }}>
              Votre artisan de confiance en Auvergne-Rhône-Alpes pour tous vos travaux de plâtrerie, isolation et menuiserie.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#6366f1]/20 border border-white/10 hover:border-[#6366f1]/40 rounded-lg flex items-center justify-center transition-all"
              >
                <Facebook className="w-5 h-5 text-white/60 hover:text-[#6366f1]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#6366f1]/20 border border-white/10 hover:border-[#6366f1]/40 rounded-lg flex items-center justify-center transition-all"
              >
                <Instagram className="w-5 h-5 text-white/60 hover:text-[#6366f1]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/5 hover:bg-[#6366f1]/20 border border-white/10 hover:border-[#6366f1]/40 rounded-lg flex items-center justify-center transition-all"
              >
                <Linkedin className="w-5 h-5 text-white/60 hover:text-[#6366f1]" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white text-lg mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              NAVIGATION
            </h3>
            <ul className="space-y-3">
              {['Services', 'À propos', 'Réalisations', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(/[àé\s]/g, (c) => {
                      if (c === 'à') return 'a';
                      if (c === 'é') return 'e';
                      return '-';
                    }))}
                    className="text-white/60 hover:text-white transition-colors"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              SERVICES
            </h3>
            <ul className="space-y-3 text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
              <li>Plâtrerie & Cloisons</li>
              <li>Isolation RGE</li>
              <li>Menuiserie</li>
              <li>Aménagement intérieur</li>
              <li>Terrasse & Pergola</li>
              <li>Neuf & Rénovation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-white text-lg mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              CONTACT
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#6366f1] flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+33123456789"
                  className="text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  04 XX XX XX XX
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#6366f1] flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@gcb-batiment.fr"
                  className="text-white/60 hover:text-white transition-colors"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  contact@gcb-batiment.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6366f1] flex-shrink-0 mt-0.5" />
                <span className="text-white/60" style={{ fontFamily: 'var(--font-body)' }}>
                  Annonay, Ardèche (07)
                  <br />
                  Auvergne-Rhône-Alpes
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-body)' }}>
              © 2026 GCB. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Mentions légales
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Politique de confidentialité
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                CGV
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
