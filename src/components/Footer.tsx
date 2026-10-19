import React from 'react';
import { Phone, MessageCircle, Play, Pause, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { useAnimation } from '../context/AnimationContext';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const { isPaused, togglePause } = useAnimation();

  return (
    <footer className="relative z-10 border-t border-[#E3C8B2]/18 bg-[#141210]/95 backdrop-blur-md pt-16 pb-24 md:pb-16 text-[#DDD4CB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-[#E3C8B2]/12">
          {/* Column 1: Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="font-serif text-2xl font-bold tracking-wider text-[#F7F5F2]">
              <span>ELVANO</span>
              <span className="text-[#E3C8B2] text-sm ml-2 font-sans font-light tracking-[0.25em] uppercase">
                Agency
              </span>
            </div>
            <p className="text-sm sm:text-base text-[#DDD4CB] max-w-md leading-relaxed">
              Sites, design e gestão de anúncios para pequenos e médios negócios que querem apresentar melhor sua marca e criar oportunidades de venda.
            </p>
            <div className="text-xs text-[#DDD4CB]/90 pt-1">
              Responsável: <span className="text-[#F7F5F2] font-semibold">{siteConfig.founder}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E3C8B2] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => onNavigate('/privacidade')}
                  className="hover:text-[#FFFFFF] hover:underline underline-offset-4 transition-colors text-xs text-[#DDD4CB]/90"
                >
                  Política de Privacidade
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Direct Contact */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#E3C8B2] font-semibold">
              Contato Direto
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href={siteConfig.phoneTelLink}
                className="flex items-center gap-2 hover:text-[#E3C8B2] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#E3C8B2]" />
                <span className="tabular-nums font-mono">{siteConfig.phoneDisplay}</span>
              </a>
              <a
                href={siteConfig.getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#E3C8B2] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#E3C8B2]" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar with Copyright, Privacy, and Discreet Animation Toggle */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DDD4CB]/85">
          <div>
            © {currentYear} {siteConfig.brandName}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('/privacidade')}
              className="hover:text-[#FFFFFF] transition-colors flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#E3C8B2]" />
              <span>Privacidade & Dados</span>
            </button>

            {/* Discreet animation pause/play control */}
            <button
              type="button"
              onClick={togglePause}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#201C18] hover:bg-[#282420] text-[#DDD4CB] hover:text-[#E3C8B2] border border-[#E3C8B2]/20 transition-colors focus:outline-none focus:ring-1 focus:ring-[#E3C8B2] shadow-sm"
              title={isPaused ? 'Ativar animações de fundo' : 'Pausar animações de fundo'}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-[#E3C8B2]" />
                  <span>Ativar animações</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#E3C8B2]" />
                  <span>Pausar animações</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
