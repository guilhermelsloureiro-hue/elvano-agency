import React, { useEffect, useRef } from 'react';
import { X, Check, ArrowRight, MessageCircle } from 'lucide-react';
import type { ServiceItem } from '../data/servicesData';
import { ServiceMockupVisual } from './ServiceMockupVisual';
import { siteConfig } from '../config/siteConfig';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForContact?: (serviceId: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForContact,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Lock body scroll and handle ESC key
  useEffect(() => {
    if (!service) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  const whatsappUrl = siteConfig.getServiceWhatsAppLink(service.name);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-service-title"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 sm:py-8 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#0B0A09]/85 backdrop-blur-md transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Modal Dialog Container - Always above everything */}
      <div
        ref={modalRef}
        className="relative z-10 w-full max-w-3xl my-auto bg-[#1C1814] border border-[#E3C8B2]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Sticky Modal Top Bar with prominent Close 'X' - NEVER covered */}
        <div className="sticky top-0 z-30 flex items-center justify-between px-5 py-4 bg-[#1C1814]/95 backdrop-blur-md border-b border-[#E3C8B2]/20">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#E3C8B2] font-semibold">
              Detalhes do Serviço
            </span>
            {service.badge && (
              <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#E3C8B2]/20 text-[#F4E2D2] border border-[#E3C8B2]/30 font-semibold">
                {service.badge}
              </span>
            )}
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Fechar detalhes do serviço"
            className="w-9 h-9 rounded-full bg-[#201C18] hover:bg-[#E3C8B2]/25 text-[#F7F5F2] hover:text-[#E3C8B2] border border-[#E3C8B2]/30 flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-[#E3C8B2]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
          {/* Visual Presentation */}
          <div className="max-w-md mx-auto">
            <ServiceMockupVisual service={service} isEnlarged />
          </div>

          {/* Title and Pricing */}
          <div className="border-b border-[#E3C8B2]/15 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <h2 id="modal-service-title" className="text-2xl sm:text-3xl font-serif text-[#F7F5F2] font-medium">
                {service.name}
              </h2>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E3C8B2]/15 border border-[#E3C8B2]/30 text-xs sm:text-sm font-medium text-[#E3C8B2] self-start sm:self-auto">
                Proposta Personalizada sob Medida
              </div>
            </div>
            <p className="mt-2 text-base text-[#DDD4CB] leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Para quem faz sentido */}
          <div className="bg-[#201C18]/80 rounded-xl p-4 sm:p-5 border border-[#E3C8B2]/20">
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#E3C8B2] mb-1.5">
              Para quem este serviço faz sentido
            </h3>
            <p className="text-sm text-[#F7F5F2]/95 leading-relaxed">
              {service.idealFor}
            </p>
          </div>

          {/* Entregas-base */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider uppercase text-[#E3C8B2] mb-3">
              Entregas e escopo-base
            </h3>
            <ul className="space-y-2.5">
              {service.deliveries.map((delivery, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-[#F7F5F2]">
                  <div className="w-5 h-5 rounded-full bg-[#E3C8B2]/20 border border-[#E3C8B2]/30 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#E3C8B2]" />
                  </div>
                  <span>{delivery}</span>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-xs sm:text-sm text-[#DDD4CB] leading-relaxed pl-7">
              {service.baseScope}
            </p>
          </div>

          {/* Condições específicas do escopo */}
          <div className="p-4 rounded-xl bg-[#141210] border border-[#A88769]/30 text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
            <strong className="block font-medium text-[#F4E2D2] mb-1">
              Condições específicas e alinhamento de escopo:
            </strong>
            {service.scopeConditions}
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-5 bg-[#1C1814]/95 border-t border-[#E3C8B2]/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg text-sm font-medium text-[#DDD4CB] hover:text-[#FFFFFF] transition-colors order-2 sm:order-1"
          >
            Fechar detalhes
          </button>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] text-[#141311] font-semibold text-sm hover:brightness-105 active:scale-95 transition-all shadow-lg shadow-[#E3C8B2]/15 order-1 sm:order-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Solicitar proposta no WhatsApp</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};
