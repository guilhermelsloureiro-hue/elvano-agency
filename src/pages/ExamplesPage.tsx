import React from 'react';
import { Eye } from 'lucide-react';
import { ExamplesSection } from '../components/ExamplesSection';
import { FinalCtaSection } from '../components/FinalCtaSection';

export const ExamplesPage: React.FC = () => {
  return (
    <div className="relative z-10 pt-24 sm:pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
          <Eye className="w-3.5 h-3.5" />
          <span>Exemplos de sites</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#F5F3F0] font-normal tracking-tight">
          Veja como o site do seu negócio pode ficar
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
          Quatro sites completos para você abrir e navegar, no celular ou no computador. São exemplos do nosso padrão: o site do seu negócio é feito sob medida, com as suas cores, fotos e informações.
        </p>
      </div>

      <ExamplesSection showHeading={false} />

      <FinalCtaSection />
    </div>
  );
};
