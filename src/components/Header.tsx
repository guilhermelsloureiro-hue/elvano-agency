import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onPreload?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onPreload }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    if (mobileMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavClick = (path: string) => {
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#141311]/92 backdrop-blur-md border-b border-[#E3C8B2]/20 py-3.5 shadow-xl shadow-black/40'
          : 'bg-[#141311]/60 backdrop-blur-sm border-b border-[#E3C8B2]/12 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element in display serif) */}
        <button
          onClick={() => handleNavClick('/')}
          className="text-left font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#F7F5F2] hover:text-[#E3C8B2] transition-colors whitespace-nowrap shrink-0 group focus:outline-none"
        >
          <span>ELVANO</span>
          <span className="text-[#E3C8B2] text-xs sm:text-sm ml-2 font-sans font-light tracking-[0.25em] uppercase">
            Agency
          </span>
        </button>

        {/* Zone 2: Navigation Links (Clean single-line prose, high legibility) */}
        <nav
          aria-label="Navegação principal"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#DDD4CB]"
        >
          {siteConfig.navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <button
                key={link.path}
                onMouseEnter={() => onPreload?.(link.path)}
                onFocus={() => onPreload?.(link.path)}
                onClick={() => handleNavClick(link.path)}
                className={`transition-all whitespace-nowrap shrink-0 py-1 border-b-2 text-[13px] sm:text-sm tracking-wide ${
                  isActive
                    ? 'text-[#FFFFFF] border-[#E3C8B2] font-semibold'
                    : 'border-transparent hover:text-[#FFFFFF] hover:border-[#E3C8B2]/50'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action Button */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <a
            href={siteConfig.getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] hover:brightness-105 active:scale-95 text-[#141311] text-xs font-semibold whitespace-nowrap transition-all shadow-md shadow-[#E3C8B2]/10"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Conversar com Guilherme</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href={siteConfig.getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp"
            className="p-2.5 rounded-lg bg-[#201C18] text-[#E3C8B2] border border-[#E3C8B2]/20"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="p-2.5 rounded-lg bg-[#201C18] text-[#F7F5F2] border border-[#E3C8B2]/20 focus:outline-none focus:ring-2 focus:ring-[#E3C8B2]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#141311]/98 backdrop-blur-xl border-b border-[#E3C8B2]/25 shadow-2xl p-6 transition-all">
          <nav className="flex flex-col space-y-3">
            {siteConfig.navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`text-left text-base py-3 px-3.5 rounded-xl transition-colors ${
                    isActive
                      ? 'bg-[#201C18] text-[#E3C8B2] font-semibold border border-[#E3C8B2]/30'
                      : 'text-[#DDD4CB] hover:text-[#FFFFFF] hover:bg-[#1C1814]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-4 border-t border-[#E3C8B2]/15">
              <a
                href={siteConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] text-[#141311] font-semibold text-sm shadow-lg shadow-[#E3C8B2]/15"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar com Guilherme</span>
              </a>
              <div className="text-center mt-3 text-xs text-[#DDD4CB]/80">
                {siteConfig.phoneDisplay}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
