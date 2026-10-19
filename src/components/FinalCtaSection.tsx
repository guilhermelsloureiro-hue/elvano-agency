import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative z-10" aria-labelledby="final-cta-heading">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden p-8 sm:p-14 bg-gradient-to-b from-[#24201C] to-[#1C1916] border border-[#E3C8B2]/30 text-center shadow-2xl">
          {/* Subtle champagne halo */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#E3C8B2]/10 blur-3xl pointer-events-none" />

          <span className="relative z-10 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] block mb-3">
            Comece com Clareza
          </span>

          <h2
            id="final-cta-heading"
            className="relative z-10 text-3xl sm:text-5xl font-serif text-[#F5F3F0] max-w-2xl mx-auto leading-tight"
          >
            Qual é o próximo passo do seu negócio?
          </h2>

          <p className="relative z-10 mt-4 text-base sm:text-lg text-[#C7BEB5] max-w-2xl mx-auto leading-relaxed">
            Conte o que você deseja melhorar. Vamos identificar a solução adequada e alinhar o projeto antes de começar.
          </p>

          <div className="relative z-10 mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteConfig.getWhatsAppLink(siteConfig.finalCtaWhatsAppMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F0D8C4] hover:brightness-105 active:scale-95 text-[#141311] font-semibold text-base transition-all shadow-xl shadow-[#E3C8B2]/15"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Falar com Guilherme</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>

            <a
              href={siteConfig.phoneTelLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#141311]/80 hover:bg-[#141311] text-[#F5F3F0] border border-[#E3C8B2]/20 text-sm font-medium transition-colors tabular-nums"
            >
              <span>Ligar: {siteConfig.phoneDisplay}</span>
            </a>
          </div>

          <div className="relative z-10 mt-8 pt-6 border-t border-[#E3C8B2]/15 text-xs text-[#C7BEB5]/75 max-w-xl mx-auto">
            Sem compromisso de contratação. O objetivo é conversar sobre a sua operação e verificar se as soluções da ELVANO atendem sua necessidade.
          </div>
        </div>
      </div>
    </section>
  );
};
