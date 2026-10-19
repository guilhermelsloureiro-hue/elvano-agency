import React, { useState } from 'react';
import type { ServiceItem } from '../data/servicesData';

interface ServiceMockupVisualProps {
  service: ServiceItem;
  className?: string;
  isEnlarged?: boolean;
}

const fallbackMap: Record<string, string> = {
  'meta-ads': '/assets/images/meta_ads_custom_1791984969301.jpg',
  'google-ads': '/assets/images/google_ads_custom_1791984969152.jpg',
  'meta-google': '/assets/images/meta_google_custom_1791984971326.jpg',
  'marketplace-performance': '/assets/images/marketplace_perf_custom_1791984972341.jpg',
  'gestao-completa': '/assets/images/gestao_completa_custom_1791984974536.jpg',
  'design-instagram': '/assets/images/design_instagram_custom_1791984971502.jpg',
  'design-loja-virtual': '/assets/images/design_loja_custom_1791984974722.jpg',
  'site-completo': '/assets/images/site_completo_custom_1791984977344.jpg',
};

export const ServiceMockupVisual: React.FC<ServiceMockupVisualProps> = ({
  service,
  className = '',
  isEnlarged = false,
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>(service.imageSrc || '');
  const [imgError, setImgError] = useState(false);

  const handleError = () => {
    const fallback = fallbackMap[service.id];
    if (fallback && currentSrc !== fallback) {
      setCurrentSrc(fallback);
    } else {
      setImgError(true);
    }
  };

  // If there's an imageSrc and it hasn't failed to load, show it with smooth overlay
  if (currentSrc && !imgError) {
    return (
      <div
        className={`relative w-full overflow-hidden bg-[#1C1916] rounded-xl border border-[#E3C8B2]/15 aspect-[4/3] group ${className}`}
      >
        <img
          src={currentSrc}
          alt={`Apresentação visual de ${service.name}`}
          referrerPolicy="no-referrer"
          onError={handleError}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle champagne gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-transparent to-black/20 pointer-events-none" />
        <div className="absolute bottom-3 left-3 text-[11px] tracking-wider uppercase font-medium text-[#E3C8B2]/80 bg-[#141311]/80 backdrop-blur-md px-2.5 py-1 rounded border border-[#E3C8B2]/20">
          {service.name}
        </div>
      </div>
    );
  }

  // Bespoke editorial SVG / CSS mockups for every specific service
  return (
    <div
      className={`relative w-full overflow-hidden bg-gradient-to-br from-[#1C1916] via-[#24201C] to-[#141311] rounded-xl border border-[#E3C8B2]/15 aspect-[4/3] flex items-center justify-center p-6 ${className}`}
    >
      {/* Background ambient lighting */}
      <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-[#E3C8B2]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#A88769]/15 blur-2xl pointer-events-none" />

      {/* Render bespoke visual per mockupType */}
      {service.mockupType === 'meta-google' && (
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Laptop (Google Ads side) */}
          <div className="w-[58%] h-[68%] -mr-4 mb-2 bg-[#141311] rounded-lg border border-[#E3C8B2]/25 shadow-2xl p-2 relative z-10 flex flex-col">
            <div className="flex items-center gap-1.5 pb-2 border-b border-[#E3C8B2]/10">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]/20" />
              <div className="ml-2 flex-1 h-2 rounded bg-[#24201C] border border-[#E3C8B2]/15 flex items-center px-1.5">
                <span className="text-[7px] text-[#E3C8B2]">google.com/search?q=</span>
              </div>
            </div>
            <div className="mt-2 space-y-1.5 flex-1">
              <div className="h-1.5 w-1/3 bg-[#E3C8B2] rounded" />
              <div className="h-1 w-4/5 bg-[#C7BEB5]/40 rounded" />
              <div className="h-1 w-2/3 bg-[#C7BEB5]/30 rounded" />
              <div className="pt-1 flex gap-1">
                <div className="h-2 w-10 bg-[#E3C8B2]/20 rounded border border-[#E3C8B2]/30" />
                <div className="h-2 w-10 bg-[#E3C8B2]/10 rounded" />
              </div>
            </div>
          </div>

          {/* Glowing connector arc */}
          <svg className="absolute inset-0 w-full h-full z-15 pointer-events-none" viewBox="0 0 100 100">
            <path
              d="M 45 48 C 55 42, 60 55, 68 50"
              fill="none"
              stroke="#E3C8B2"
              strokeWidth="1.2"
              strokeDasharray="2 2"
              className="opacity-75"
            />
          </svg>

          {/* Smartphone (Meta side) */}
          <div className="w-[34%] h-[82%] bg-[#1A1815] rounded-xl border border-[#E3C8B2]/35 shadow-2xl p-1.5 relative z-20 flex flex-col">
            <div className="w-6 h-1 bg-[#E3C8B2]/30 rounded-full mx-auto mb-1.5" />
            <div className="w-full flex-1 bg-[#24201C] rounded-lg p-1.5 flex flex-col justify-between border border-[#E3C8B2]/10">
              <div className="flex items-center gap-1.5">
                <div className="w-3.5 h-3.5 rounded-full bg-[#E3C8B2]/30 border border-[#E3C8B2]/40" />
                <div className="h-1.5 w-12 bg-[#E3C8B2]/50 rounded" />
              </div>
              <div className="h-16 bg-[#141311] rounded border border-[#E3C8B2]/20 p-1 flex flex-col justify-end">
                <div className="text-[7px] text-[#E3C8B2] font-semibold">Anúncio Patrocinado</div>
                <div className="h-1 w-full bg-[#C7BEB5]/40 rounded mt-0.5" />
              </div>
              <div className="h-3 rounded bg-[#E3C8B2] flex items-center justify-center">
                <span className="text-[7px] text-[#141311] font-bold">Saiba mais</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {service.mockupType === 'marketplace' && (
        <div className="w-full h-full flex flex-col justify-center gap-2">
          <div className="flex items-center justify-between pb-1.5 border-b border-[#E3C8B2]/15">
            <span className="text-[9px] font-medium uppercase tracking-wider text-[#E3C8B2]">Marketplace Ads</span>
            <span className="text-[8px] px-1.5 py-0.5 rounded bg-[#E3C8B2]/15 text-[#F0D8C4] border border-[#E3C8B2]/30">
              Campanha Ativa
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 flex-1">
            <div className="bg-[#141311]/80 rounded-lg border border-[#E3C8B2]/20 p-2 flex flex-col justify-between">
              <div className="relative h-14 bg-[#1C1916] rounded border border-[#E3C8B2]/10 flex items-center justify-center">
                <div className="w-8 h-8 rounded bg-[#E3C8B2]/15 border border-[#E3C8B2]/30 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#E3C8B2]/40 rounded-sm" />
                </div>
                <span className="absolute top-1 left-1 text-[7px] bg-[#E3C8B2] text-[#141311] font-bold px-1 rounded-sm">
                  Patrocinado
                </span>
              </div>
              <div>
                <div className="h-1.5 w-3/4 bg-[#F5F3F0]/70 rounded mt-1" />
                <div className="h-1.5 w-1/2 bg-[#E3C8B2] rounded mt-1 font-semibold" />
              </div>
            </div>
            <div className="bg-[#141311]/80 rounded-lg border border-[#E3C8B2]/20 p-2 flex flex-col justify-between">
              <div className="relative h-14 bg-[#1C1916] rounded border border-[#E3C8B2]/10 flex items-center justify-center">
                <div className="w-8 h-8 rounded bg-[#A88769]/20 border border-[#A88769]/30 flex items-center justify-center">
                  <div className="w-4 h-4 bg-[#A88769]/40 rounded-sm" />
                </div>
                <span className="absolute top-1 left-1 text-[7px] bg-[#E3C8B2] text-[#141311] font-bold px-1 rounded-sm">
                  Patrocinado
                </span>
              </div>
              <div>
                <div className="h-1.5 w-2/3 bg-[#F5F3F0]/70 rounded mt-1" />
                <div className="h-1.5 w-1/2 bg-[#E3C8B2] rounded mt-1 font-semibold" />
              </div>
            </div>
          </div>
        </div>
      )}

      {service.mockupType === 'gestao' && (
        <div className="w-full h-full flex items-center justify-center relative">
          <div className="w-[75%] h-[78%] bg-[#141311] rounded-xl border border-[#E3C8B2]/30 shadow-2xl p-2.5 flex flex-col">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#E3C8B2]/15">
              <span className="text-[8px] font-semibold text-[#E3C8B2]">Visão Estratégica Unificada</span>
              <div className="flex gap-1">
                <span className="text-[7px] px-1 rounded bg-[#E3C8B2]/20 text-[#E3C8B2]">Meta</span>
                <span className="text-[7px] px-1 rounded bg-[#E3C8B2]/20 text-[#E3C8B2]">Google</span>
                <span className="text-[7px] px-1 rounded bg-[#E3C8B2]/20 text-[#E3C8B2]">Marketplace</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-1.5 mt-2 flex-1">
              <div className="bg-[#24201C] rounded p-1.5 border border-[#E3C8B2]/10 flex flex-col justify-between">
                <span className="text-[7px] text-[#C7BEB5]">Públicos Redes</span>
                <div className="h-6 flex items-end gap-0.5">
                  <div className="w-2 h-3 bg-[#E3C8B2]/40 rounded-t" />
                  <div className="w-2 h-5 bg-[#E3C8B2] rounded-t" />
                  <div className="w-2 h-4 bg-[#E3C8B2]/60 rounded-t" />
                </div>
              </div>
              <div className="bg-[#24201C] rounded p-1.5 border border-[#E3C8B2]/10 flex flex-col justify-between">
                <span className="text-[7px] text-[#C7BEB5]">Buscas Ativas</span>
                <div className="h-6 flex items-end gap-0.5">
                  <div className="w-2 h-4 bg-[#A88769]/50 rounded-t" />
                  <div className="w-2 h-3 bg-[#A88769]/30 rounded-t" />
                  <div className="w-2 h-5 bg-[#E3C8B2] rounded-t" />
                </div>
              </div>
              <div className="bg-[#24201C] rounded p-1.5 border border-[#E3C8B2]/10 flex flex-col justify-between">
                <span className="text-[7px] text-[#C7BEB5]">Catálogo Mktp</span>
                <div className="h-6 flex items-end gap-0.5">
                  <div className="w-2 h-2 bg-[#E3C8B2]/30 rounded-t" />
                  <div className="w-2 h-4 bg-[#E3C8B2]/70 rounded-t" />
                  <div className="w-2 h-5 bg-[#E3C8B2] rounded-t" />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-2 right-2 w-[30%] h-[55%] bg-[#1C1916] rounded-lg border border-[#E3C8B2]/40 shadow-2xl p-1.5 flex flex-col justify-between z-10">
            <div className="text-[7px] font-bold text-[#E3C8B2]">Otimização</div>
            <div className="space-y-1">
              <div className="h-1 bg-[#E3C8B2]/30 rounded" />
              <div className="h-1 bg-[#E3C8B2]/50 rounded w-4/5" />
            </div>
            <div className="text-[6px] text-[#C7BEB5] text-right">3 canais alinhados</div>
          </div>
        </div>
      )}

      {service.mockupType === 'instagram' && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[52%] h-[92%] bg-[#141311] rounded-2xl border border-[#E3C8B2]/35 shadow-2xl p-2 flex flex-col">
            <div className="w-6 h-1 bg-[#E3C8B2]/30 rounded-full mx-auto mb-1.5" />
            {/* Profile lockup */}
            <div className="flex items-center gap-1.5 pb-2 border-b border-[#E3C8B2]/15">
              <div className="w-5 h-5 rounded-full bg-gradient-to-tr from-[#A88769] to-[#E3C8B2] p-[1px]">
                <div className="w-full h-full rounded-full bg-[#141311]" />
              </div>
              <div>
                <div className="h-1.5 w-10 bg-[#F5F3F0] rounded" />
                <div className="h-1 w-14 bg-[#C7BEB5]/50 rounded mt-0.5" />
              </div>
            </div>
            {/* 9-grid editorial feed */}
            <div className="grid grid-cols-3 gap-1 mt-1.5 flex-1">
              {[
                'bg-[#24201C] border-[#E3C8B2]/30',
                'bg-[#1C1916] border-[#A88769]/30',
                'bg-[#24201C] border-[#E3C8B2]/30',
                'bg-[#1C1916] border-[#A88769]/30',
                'bg-[#24201C] border-[#E3C8B2]/50',
                'bg-[#1C1916] border-[#A88769]/30',
                'bg-[#24201C] border-[#E3C8B2]/30',
                'bg-[#1C1916] border-[#A88769]/30',
                'bg-[#24201C] border-[#E3C8B2]/30',
              ].map((style, i) => (
                <div
                  key={i}
                  className={`rounded-sm border ${style} flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="w-2.5 h-2.5 rounded-sm bg-[#E3C8B2]/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {service.mockupType === 'loja' && (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-[84%] h-[82%] bg-[#141311] rounded-xl border border-[#E3C8B2]/30 shadow-2xl p-2.5 flex flex-col">
            <div className="flex items-center justify-between pb-1.5 border-b border-[#E3C8B2]/15">
              <span className="text-[8px] font-serif text-[#E3C8B2] tracking-wider uppercase">Loja Virtual</span>
              <div className="flex gap-2 text-[7px] text-[#C7BEB5]/70">
                <span>Início</span>
                <span>Produtos</span>
                <span>Coleção</span>
              </div>
            </div>
            {/* Hero banner */}
            <div className="h-14 bg-gradient-to-r from-[#24201C] to-[#1C1916] rounded border border-[#E3C8B2]/20 mt-1.5 p-2 flex flex-col justify-center">
              <span className="text-[8px] font-serif text-[#F0D8C4] font-medium">Coleção Exclusiva</span>
              <div className="h-1 w-16 bg-[#E3C8B2]/40 rounded mt-1" />
            </div>
            {/* Products grid */}
            <div className="grid grid-cols-3 gap-1.5 mt-2 flex-1">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-[#1C1916] rounded border border-[#E3C8B2]/15 p-1 flex flex-col justify-between">
                  <div className="h-8 bg-[#24201C] rounded flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[#E3C8B2]/20" />
                  </div>
                  <div>
                    <div className="h-1 w-4/5 bg-[#F5F3F0]/60 rounded mt-1" />
                    <div className="h-1 w-1/2 bg-[#E3C8B2] rounded mt-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {service.mockupType === 'site' && (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-[62%] h-[74%] -mr-3 bg-[#141311] rounded-lg border border-[#E3C8B2]/30 shadow-2xl p-2 flex flex-col">
            <div className="flex items-center gap-1 pb-1.5 border-b border-[#E3C8B2]/15">
              <div className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]/40" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]/20" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]/20" />
            </div>
            <div className="mt-2 space-y-1.5 flex-1">
              <div className="h-2 w-2/3 bg-[#E3C8B2] rounded" />
              <div className="h-1 w-4/5 bg-[#C7BEB5]/40 rounded" />
              <div className="h-1 w-1/2 bg-[#C7BEB5]/30 rounded" />
              <div className="grid grid-cols-2 gap-1 pt-1">
                <div className="h-6 bg-[#24201C] rounded border border-[#E3C8B2]/10" />
                <div className="h-6 bg-[#24201C] rounded border border-[#E3C8B2]/10" />
              </div>
            </div>
          </div>
          <div className="w-[30%] h-[82%] bg-[#1C1916] rounded-xl border border-[#E3C8B2]/40 shadow-2xl p-1.5 flex flex-col z-10">
            <div className="w-5 h-1 bg-[#E3C8B2]/30 rounded-full mx-auto mb-1" />
            <div className="flex-1 bg-[#141311] rounded p-1.5 flex flex-col justify-between border border-[#E3C8B2]/10">
              <div className="h-1.5 w-3/4 bg-[#E3C8B2] rounded" />
              <div className="h-8 bg-[#24201C] rounded border border-[#E3C8B2]/15" />
              <div className="h-3 bg-[#E3C8B2] rounded flex items-center justify-center text-[6px] text-[#141311] font-bold">
                WhatsApp
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Label indicator */}
      <div className="absolute bottom-3 left-3 text-[11px] tracking-wider uppercase font-medium text-[#E3C8B2]/90 bg-[#141311]/90 backdrop-blur-md px-2.5 py-1 rounded border border-[#E3C8B2]/20">
        {service.name}
      </div>
    </div>
  );
};
