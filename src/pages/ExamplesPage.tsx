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
          <span>Exemplos por segmento</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#F5F3F0] font-normal tracking-tight">
          Como a página inicial do seu negócio pode ficar
        </h1>
        <p className="mt-4 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
          Estes são exemplos do padrão das prévias que a ELVANO monta para negócios locais. Cada prévia é feita sob medida, com as cores, os serviços e as informações reais do seu negócio.
        </p>
      </div>

      <ExamplesSection showHeading={false} />

      <FinalCtaSection />
    </div>
  );
};
