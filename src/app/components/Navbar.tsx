import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-lg shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div
            className="cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="text-white" style={{ fontFamily: 'var(--font-display)' }}>
              <span className="text-3xl tracking-tight">GCB</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {['Services', 'À propos', 'Réalisations', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/[àé\s]/g, (c) => {
                  if (c === 'à') return 'a';
                  if (c === 'é') return 'e';
                  return '-';
                }))}
                className="text-white/80 hover:text-white transition-colors duration-300 relative group"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#6366f1] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+33123456789"
              className="flex items-center gap-2 px-6 py-3 bg-[#6366f1] text-white rounded-lg hover:bg-[#5558e3] transition-all duration-300 hover:scale-105"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Phone className="w-4 h-4" />
              <span>Appelez-nous</span>
            </a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-lg border-t border-white/10">
          <div className="px-6 py-6 space-y-4">
            {['Services', 'À propos', 'Réalisations', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(/[àé\s]/g, (c) => {
                  if (c === 'à') return 'a';
                  if (c === 'é') return 'e';
                  return '-';
                }))}
                className="block w-full text-left text-white/80 hover:text-white py-2 transition-colors"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {item}
              </button>
            ))}
            <a
              href="tel:+33123456789"
              className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-[#6366f1] text-white rounded-lg mt-4"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              <Phone className="w-4 h-4" />
              <span>Appelez-nous</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
