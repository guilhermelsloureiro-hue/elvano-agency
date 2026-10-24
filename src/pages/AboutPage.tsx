import React from 'react';
import { UserCheck, ShieldCheck, HeartHandshake, Compass, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { GuilhermePhoto } from '../components/GuilhermePhoto';

export const AboutPage: React.FC = () => {
  return (
    <div className="relative z-10 pt-24 sm:pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Sobre a Agência</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Estratégia e cuidado com a presença do seu negócio.
          </h1>
        </div>

        {/* Core Presentation */}
        <div className="elvano-card rounded-2xl p-7 sm:p-10 mb-12 space-y-6 text-[#DDD4CB] leading-relaxed shadow-xl">
          <p className="text-lg sm:text-xl text-[#F7F5F2] font-serif leading-relaxed">
            “A ELVANO reúne design, desenvolvimento de sites e gestão de anúncios para pequenos e médios negócios. Cada projeto começa com uma conversa para entender a empresa, definir prioridades e alinhar entregas compatíveis com seus objetivos.”
          </p>

          <p className="text-sm sm:text-base">
            Fundada sob a premissa de que clareza, acabamento estético e estratégia comercial devem caminhar juntos, a ELVANO Agency atua como o braço digital de lojas, prestadores de serviços, marcas locais e vendedores de marketplace.
          </p>

          <p className="text-sm sm:text-base">
            Em vez de templates genéricos ou promessas irreais de faturamento milionário imediato, nos concentramos no que realmente constrói reputação e gera conversão: uma vitrine bem apresentada, anúncios direcionados a quem realmente tem interesse e um canal de atendimento fluido.
          </p>
        </div>

        {/* Guilherme Lousada Loureiro - Responsável */}
        <div className="elvano-card rounded-2xl p-7 sm:p-10 mb-12 border border-[#E3C8B2]/20 shadow-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pb-6 border-b border-[#E3C8B2]/15">
            {/* Foto oficial de Guilherme Lousada */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-tr from-[#A88769] to-[#E3C8B2] p-[2px] shrink-0 shadow-xl overflow-hidden relative">
              <GuilhermePhoto rounded="2xl" alt="Guilherme Lousada Loureiro" />
            </div>

            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] block mb-1">
                Responsável Técnico & Comercial
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F5F2]">
                {siteConfig.founder}
              </h2>
              <p className="text-xs text-[#DDD4CB] mt-1 font-mono">
                Gestão de Anúncios · Design de Interfaces · Desenvolvimento Web
              </p>
            </div>
          </div>

          <div className="pt-6 space-y-4 text-sm sm:text-base text-[#DDD4CB] leading-relaxed">
            <h3 className="text-base sm:text-lg font-serif text-[#F7F5F2] font-medium">
              Trajetória e Vivência Operacional
            </h3>
            <p>
              Guilherme integrou equipes multidisciplinares com atuação prática na criação de interfaces visuais para e-commerce, estruturação de sites institucionais e gestão de campanhas de tráfego pago em contas de alto volume transacional no Mercado Livre, especialmente no segmento automotivo.
            </p>
            <p>
              Essa experiência direta com a complexidade de catálogos extensos, algoritmos de plataformas e comportamento de compra dos consumidores brasileiros moldou a metodologia direta e focada em resultados que aplica na ELVANO.
            </p>
            <div className="pt-3 p-4 rounded-xl bg-[#141210] border border-[#E3C8B2]/15 text-xs text-[#DDD4CB] shadow-inner">
              <strong className="text-[#F4E2D2] block mb-1">Compromisso Ético:</strong>
              As conversas com os clientes são feitas diretamente com Guilherme, sem intermediários comerciais ou repasses a equipes ocultas.
            </div>
          </div>
        </div>

        {/* 3 Pilares de Atuação da ELVANO */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <div className="elvano-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-[#141210] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-4 shadow-md">
              <HeartHandshake className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-serif text-[#F7F5F2] mb-2 font-medium">Transparência</h4>
            <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
              Escopos combinados por escrito, entregas claras desde o início e alinhamento sob medida para cada negócio.
            </p>
          </div>

          <div className="elvano-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-[#141210] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-4 shadow-md">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-serif text-[#F7F5F2] mb-2 font-medium">Acabamento</h4>
            <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
              Cuidado com tipografia, contrastes, hierarquia e legibilidade para que a sua empresa transmita valor imediato.
            </p>
          </div>

          <div className="elvano-card rounded-2xl p-6">
            <div className="w-10 h-10 rounded-xl bg-[#141210] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-4 shadow-md">
              <Compass className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-serif text-[#F7F5F2] mb-2 font-medium">Estratégia Real</h4>
            <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
              Mídia paga e design pensados para o momento do negócio, seja na fase de validação inicial ou de tração em múltiplos canais.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
};
