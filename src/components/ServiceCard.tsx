import React from 'react';
import { ArrowRight, Check, MessageCircle, Info } from 'lucide-react';
import type { ServiceItem } from '../data/servicesData';
import { ServiceMockupVisual } from './ServiceMockupVisual';
import { siteConfig } from '../config/siteConfig';

interface ServiceCardProps {
  service: ServiceItem;
  onOpenDetails: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onOpenDetails }) => {
  const whatsappUrl = siteConfig.getServiceWhatsAppLink(service.name);

  return (
    <article className="elvano-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full group hover:shadow-2xl hover:shadow-[#E3C8B2]/8 relative transition-all duration-300">
      {/* Top area: visual + title + description */}
      <div>
        {/* Service Mockup / Visual */}
        <div className="mb-4">
          <ServiceMockupVisual service={service} />
        </div>

        {/* Header Info */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-xl sm:text-2xl font-serif font-medium text-[#F7F5F2] group-hover:text-[#F4E2D2] transition-colors leading-snug">
            {service.name}
          </h3>
          {service.badge && (
            <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-[#E3C8B2]/15 text-[#E3C8B2] border border-[#E3C8B2]/30 font-semibold shrink-0">
              {service.badge}
            </span>
          )}
        </div>

        <p className="text-sm text-[#DDD4CB] leading-relaxed mb-4 min-h-[44px]">
          {service.description}
        </p>

        {/* 3 Main Deliveries */}
        <div className="pt-3.5 border-t border-[#E3C8B2]/15 mb-5">
          <span className="text-[11px] font-semibold tracking-wider uppercase text-[#E3C8B2] block mb-2.5">
            Entregas essenciais
          </span>
          <ul className="space-y-2">
            {service.deliveries.map((delivery, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-[#F7F5F2]/95 leading-relaxed">
                <Check className="w-3.5 h-3.5 text-[#E3C8B2] shrink-0 mt-0.5" />
                <span>{delivery}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom area: Action and tailored proposal info */}
      <div className="pt-4 border-t border-[#E3C8B2]/15 mt-2">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <span className="text-[11px] text-[#DDD4CB]/80 block uppercase tracking-wider font-medium">
              Proposta Comercial
            </span>
            <div className="text-sm sm:text-base font-serif font-medium text-[#F4E2D2] mt-0.5">
              Personalizada sob medida
            </div>
          </div>
          <span className="text-[11px] text-[#E3C8B2] font-mono bg-[#E3C8B2]/10 px-2.5 py-1 rounded-full border border-[#E3C8B2]/20">
            Sob consulta
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => onOpenDetails(service)}
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-[#141311]/90 hover:bg-[#24201C] text-[#F7F5F2] hover:text-[#E3C8B2] border border-[#E3C8B2]/20 text-xs font-medium transition-colors shadow-sm"
          >
            <Info className="w-3.5 h-3.5" />
            <span>Ver detalhes</span>
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] hover:brightness-105 active:scale-95 text-[#141311] text-xs font-semibold transition-all shadow-md shadow-[#E3C8B2]/10"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Solicitar proposta</span>
          </a>
        </div>
      </div>
    </article>
  );
};
