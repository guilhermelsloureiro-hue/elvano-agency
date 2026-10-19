import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <aside aria-label="Atendimento pelo WhatsApp">
      <a
        href={siteConfig.getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversa no WhatsApp com Guilherme"
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-medium text-xs sm:text-sm shadow-xl shadow-black/40 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#141311] group"
      >
        <MessageCircle className="w-5 h-5 text-white" />
        <span className="hidden sm:inline font-semibold">Conversar no WhatsApp</span>
        <span className="sm:hidden font-semibold">WhatsApp</span>
      </a>
    </aside>
  );
};
