import React from 'react';
import { ArrowRight, MessageCircle, Eye, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

/**
 * Sites demonstrativos completos (marcas FICTÍCIAS) publicados em /exemplos/<slug>/.
 * Os HTMLs são gerados por scripts/build-exemplos.py.
 */

interface ExampleSite {
  slug: string;
  niche: string;
  brand: string;
  description: string;
  highlights: string[];
}

const examples: ExampleSite[] = [
  {
    slug: 'pizzaria',
    niche: 'Pizzaria',
    brand: 'Forno da Vila',
    description: 'Cardápio com preços, pedido direto pelo WhatsApp e área de delivery em destaque.',
    highlights: ['Cardápio por categoria', 'Pedido pelo WhatsApp', 'Horários e mapa'],
  },
  {
    slug: 'unhas',
    niche: 'Estúdio de unhas',
    brand: 'Atelier Rosé',
    description: 'Serviços com valores, galeria de trabalhos e agendamento de horário em um toque.',
    highlights: ['Serviços e valores', 'Galeria de trabalhos', 'Agendamento rápido'],
  },
  {
    slug: 'odontologia',
    niche: 'Clínica odontológica',
    brand: 'Dental Aurora',
    description: 'Tratamentos, equipe, convênios e agendamento de avaliação, com visual que transmite cuidado.',
    highlights: ['Tratamentos e equipe', 'Convênios aceitos', 'Agendar avaliação'],
  },
  {
    slug: 'empresa',
    niche: 'Empresa de serviços',
    brand: 'Vértice Consultoria',
    description: 'Site institucional com soluções, segmentos atendidos e contato direto com a equipe comercial.',
    highlights: ['Soluções e segmentos', 'Como trabalhamos', 'Contato comercial'],
  },
];

export const ExamplesSection: React.FC<{ showHeading?: boolean }> = ({ showHeading = true }) => {
  return (
    <section
      id="exemplos"
      className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24"
      aria-labelledby="examples-heading"
    >
      {showHeading && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Exemplos de sites</span>
          </div>
          <h2 id="examples-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Abra e navegue pelos exemplos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
            Sites completos, prontos para celular e computador. As marcas são fictícias, só para mostrar o padrão: o do seu negócio sai com as suas cores, fotos e informações.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {examples.map((site) => {
          const href = `/exemplos/${site.slug}/`;
          return (
            <article
              key={site.slug}
              className="elvano-card rounded-2xl p-4 sm:p-6 flex flex-col gap-5 border border-[#E3C8B2]/15 hover:border-[#E3C8B2]/35 transition-colors group"
            >
              {/* Prints reais do site: computador + celular */}
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block pr-10 sm:pr-14 pb-6"
                aria-label={`Abrir o exemplo de ${site.niche.toLowerCase()} em uma nova aba`}
              >
                <div className="rounded-xl overflow-hidden border border-black/20 shadow-2xl bg-[#EFECE8]">
                  <div className="flex items-center gap-1.5 px-3 py-2">
                    <span className="w-2 h-2 rounded-full bg-[#E36A5C]" />
                    <span className="w-2 h-2 rounded-full bg-[#E9B949]" />
                    <span className="w-2 h-2 rounded-full bg-[#62B565]" />
                    <span className="ml-2 flex-1 truncate rounded bg-white/80 px-2 py-0.5 text-[10px] text-[#8A857E] font-mono">
                      elvano-agency.com.br/exemplos/{site.slug}
                    </span>
                  </div>
                  <img
                    src={`/exemplos/${site.slug}/capa-desktop.webp`}
                    alt={`Página inicial do exemplo ${site.brand} no computador`}
                    loading="lazy"
                    width={1200}
                    height={702}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02] origin-top"
                  />
                </div>
                <div className="absolute right-0 bottom-0 w-[26%] min-w-[92px] rounded-[18px] border-[5px] border-[#0D0C0B] bg-[#0D0C0B] shadow-2xl overflow-hidden">
                  <img
                    src={`/exemplos/${site.slug}/capa-mobile.webp`}
                    alt={`Página inicial do exemplo ${site.brand} no celular`}
                    loading="lazy"
                    width={360}
                    height={720}
                    className="w-full h-auto block rounded-[12px]"
                  />
                </div>
              </a>

              <div className="flex-1 space-y-2">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-[11px] uppercase tracking-widest font-semibold text-[#E3C8B2]">{site.niche}</span>
                  <span className="text-[11px] text-[#C7BEB5]/70">marca fictícia</span>
                </div>
                <h3 className="text-xl font-serif text-[#F7F5F2]">{site.brand}</h3>
                <p className="text-sm text-[#DDD4CB] leading-relaxed">{site.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {site.highlights.map((h) => (
                    <span key={h} className="text-[11px] px-2.5 py-1 rounded-full border border-[#E3C8B2]/20 text-[#DDD4CB]">
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] text-[#141311] text-sm font-semibold hover:brightness-105 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Ver site completo</span>
                </a>
                <a
                  href={siteConfig.getWhatsAppLink(
                    `Olá, Guilherme! Vi o exemplo de ${site.niche.toLowerCase()} no site da ELVANO e quero ver uma prévia do site do meu negócio.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#141311]/70 hover:bg-[#141311] text-[#F7F5F2] hover:text-[#E3C8B2] border border-[#E3C8B2]/25 text-sm font-medium transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#E3C8B2]" />
                  <span>Quero um site assim</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E3C8B2]" />
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-8 text-center text-xs text-[#C7BEB5]/80">
        Marcas, preços, telefones e endereços dos exemplos são ilustrativos. Seu negócio é de outro segmento? O site é feito sob medida para ele também.
      </p>
    </section>
  );
};
