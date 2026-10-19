import React, { useState } from 'react';
import { servicesData, serviceCategories, type ServiceCategory, type ServiceItem } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { Layers, AlertCircle, Sparkles } from 'lucide-react';
import { FinalCtaSection } from '../components/FinalCtaSection';

interface ServicesPageProps {
  onOpenDetails: (service: ServiceItem) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenDetails }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('todos');

  // Filter services dynamically
  const filteredServices = servicesData.filter((service) => {
    if (selectedCategory === 'todos') return true;
    return service.categories.includes(selectedCategory);
  });

  return (
    <div className="relative z-10 pt-24 sm:pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Catálogo Completo</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Serviços, escopos e valores transparentes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
            Conheça todas as soluções de gestão de tráfego pago, design digital e desenvolvimento web da ELVANO Agency.
          </p>
        </div>

        {/* Commercial Disclaimers Block */}
        <div className="mb-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-[#201C18]/85 border border-[#E3C8B2]/20 text-xs sm:text-sm text-[#DDD4CB] leading-relaxed flex items-start gap-3 shadow-md">
            <AlertCircle className="w-4 h-4 text-[#E3C8B2] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F7F5F2] font-medium block mb-0.5">Gestão de Anúncios Mensal:</strong>
              Nos serviços de anúncios, o valor corresponde à gestão mensal. A verba de mídia é definida separadamente e paga pelo cliente diretamente às plataformas.
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#201C18]/85 border border-[#E3C8B2]/20 text-xs sm:text-sm text-[#DDD4CB] leading-relaxed flex items-start gap-3 shadow-md">
            <Sparkles className="w-4 h-4 text-[#E3C8B2] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#F7F5F2] font-medium block mb-0.5">Cobrança por Projeto:</strong>
              Serviços de design e desenvolvimento são cobrados por projeto. Entregas, prazo, revisões e investimento final são alinhados por escrito antes da contratação.
            </div>
          </div>
        </div>

        {/* Interactive Filter Tabs (functional segmented buttons) */}
        <div className="mb-12 flex items-center justify-center">
          <div
            role="tablist"
            aria-label="Filtrar serviços por categoria"
            className="inline-flex flex-wrap items-center justify-center gap-1.5 p-1.5 bg-[#1C1814]/95 border border-[#E3C8B2]/20 rounded-2xl backdrop-blur-md shadow-xl"
          >
            {serviceCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 text-xs sm:text-sm font-medium rounded-xl whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-[#E3C8B2] ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] text-[#141311] font-semibold shadow-md'
                      : 'text-[#DDD4CB] hover:text-[#F7F5F2] hover:bg-[#24201C]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category count indicator */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#DDD4CB]/80 px-2 font-mono">
          <span>
            Exibindo <strong className="text-[#F7F5F2] font-sans font-semibold">{filteredServices.length}</strong> {filteredServices.length === 1 ? 'serviço' : 'serviços'}
          </span>
          <span className="font-sans">Valores expressos a partir do escopo base</span>
        </div>

        {/* 8 Services Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
};
