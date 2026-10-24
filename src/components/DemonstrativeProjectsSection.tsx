import React from 'react';
import { Layers, Smartphone, Laptop, Zap, Check, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface DemonstrativeProject {
  id: string;
  badge: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  type: 'landing' | 'ecommerce' | 'reformulacao';
}

const demonstrativeProjects: DemonstrativeProject[] = [
  {
    id: 'demo-landing-services',
    badge: 'Projeto demonstrativo',
    category: 'Landing Page & Conversão',
    title: 'Página de Captura para Serviços Especializados',
    subtitle: 'Estrutura one-page desenhada para transformar cliques em conversas no WhatsApp',
    description:
      'Modelo demonstrativo planejado para prestadores de serviços e consultorias. O layout prioriza clareza de oferta, contraste com a paleta institucional e chamadas estratégicas para ação.',
    highlights: [
      'Carregamento instantâneo com foco em Core Web Vitals',
      'Botão flutuante e formulário simplificado para contato',
      'Hierarquia tipográfica para leitura confortável no celular',
    ],
    specs: [
      { label: 'Formato', value: 'One-page responsiva' },
      { label: 'Carregamento', value: '< 0.5s' },
      { label: 'Foco', value: 'Geração de leads' },
    ],
    type: 'landing',
  },
  {
    id: 'demo-ecommerce-vitrine',
    badge: 'Projeto demonstrativo',
    category: 'Design de E-commerce & Loja',
    title: 'Vitrine Digital para Marca de Produtos',
    subtitle: 'Layout moderno e minimalista para destacar produtos sem poluição visual',
    description:
      'Estudo conceitual de design para e-commerce. A disposição dos elementos valoriza a fotografia dos produtos, organiza as categorias com fluidez e simplifica o fluxo de compra.',
    highlights: [
      'Banners com proporções adequadas e legibilidade garantida',
      'Grade de produtos equilibrada e visualmente limpa',
      'Navegação intuitiva em telas mobile e desktop',
    ],
    specs: [
      { label: 'Aplicação', value: 'Vitrines & E-commerce' },
      { label: 'Estética', value: 'Minimalista & Premium' },
      { label: 'Dispositivos', value: 'Mobile-first' },
    ],
    type: 'ecommerce',
  },
  {
    id: 'demo-reformulacao-speed',
    badge: 'Projeto demonstrativo',
    category: 'Reformulação & Otimização',
    title: 'Modernização de Interface e Otimização de Velocidade',
    subtitle: 'Refatoração estética e estrutural para eliminar lentidão e layout desatualizado',
    description:
      'Demonstração prática de modernização web. O conceito aborda a transição de um site antigo e lento para uma presença digital rápida, com design sóbrio e tipografia refinada.',
    highlights: [
      'Substituição de assets pesados por formatos modernos WebP',
      'Arquitetura limpa sem scripts bloqueadores de renderização',
      'Padrão visual alinhado à percepção de autoridade do negócio',
    ],
    specs: [
      { label: 'Objetivo', value: 'Velocidade & Usabilidade' },
      { label: 'Responsividade', value: '100% Adaptável' },
      { label: 'Padrão', value: 'Design System Exclusivo' },
    ],
    type: 'reformulacao',
  },
];

export const DemonstrativeProjectsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative z-10 border-t border-[#E3C8B2]/10 bg-[#161412]/50 backdrop-blur-sm" aria-labelledby="demo-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capacidade Técnica e Design</span>
          </div>
          <h2 id="demo-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Projetos demonstrativos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
            Exemplos conceituais e estudos de interface desenvolvidos pela ELVANO para ilustrar o padrão estético, a fluidez e a atenção aos detalhes aplicados em cada entrega.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#201C18] border border-[#E3C8B2]/20 text-xs text-[#E3C8B2]">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Trabalhos conceituais identificados com total transparência</span>
          </div>
        </div>

        {/* 3 Demonstrative Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {demonstrativeProjects.map((project) => (
            <div
              key={project.id}
              className="elvano-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#E3C8B2]/40 transition-all duration-300"
            >
              <div>
                {/* Header info & badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-[#E3C8B2]/15 text-[#E3C8B2] border border-[#E3C8B2]/30 font-mono">
                    {project.badge}
                  </span>
                  <span className="text-xs text-[#DDD4CB]/70 font-mono">
                    {project.category}
                  </span>
                </div>

                {/* Conceptual UI Preview Graphic */}
                <div className="mb-5 rounded-xl bg-gradient-to-br from-[#1C1814] via-[#24201C] to-[#141210] border border-[#E3C8B2]/20 p-4 aspect-[16/10] flex flex-col justify-between relative overflow-hidden group-hover:border-[#E3C8B2]/40 transition-all">
                  {/* Subtle ambient light */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#E3C8B2]/15 rounded-full blur-xl pointer-events-none" />

                  {/* Browser / Device Chrome */}
                  <div className="flex items-center justify-between pb-2 border-b border-[#E3C8B2]/15 relative z-10">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]/40" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]/20" />
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]/20" />
                    </div>
                    <span className="text-[8px] text-[#C7BEB5]/70 font-mono">
                      demo.elvanoagency.com
                    </span>
                  </div>

                  {/* Visual abstraction per type */}
                  {project.type === 'landing' && (
                    <div className="py-2 space-y-2 relative z-10 flex-1 flex flex-col justify-center">
                      <div className="h-2.5 w-3/4 bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] rounded" />
                      <div className="h-1.5 w-full bg-[#C7BEB5]/30 rounded" />
                      <div className="h-1.5 w-4/5 bg-[#C7BEB5]/20 rounded" />
                      <div className="pt-2 flex items-center gap-2">
                        <div className="h-4 px-3 rounded bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] flex items-center">
                          <span className="text-[7px] text-[#141311] font-bold">Botão de Conversão</span>
                        </div>
                        <div className="h-4 w-12 rounded bg-[#201C18] border border-[#E3C8B2]/20" />
                      </div>
                    </div>
                  )}

                  {project.type === 'ecommerce' && (
                    <div className="py-2 space-y-2 relative z-10 flex-1 flex flex-col justify-center">
                      <div className="h-9 rounded bg-[#201C18] border border-[#E3C8B2]/15 p-1.5 flex items-center justify-between">
                        <div className="w-6 h-6 rounded bg-[#E3C8B2]/20" />
                        <div className="flex-1 ml-2 space-y-1">
                          <div className="h-1.5 w-1/2 bg-[#E3C8B2] rounded" />
                          <div className="h-1 w-3/4 bg-[#C7BEB5]/40 rounded" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-1.5">
                        <div className="h-7 rounded bg-[#201C18] border border-[#E3C8B2]/10" />
                        <div className="h-7 rounded bg-[#201C18] border border-[#E3C8B2]/10" />
                        <div className="h-7 rounded bg-[#201C18] border border-[#E3C8B2]/10" />
                      </div>
                    </div>
                  )}

                  {project.type === 'reformulacao' && (
                    <div className="py-2 space-y-2 relative z-10 flex-1 flex flex-col justify-center">
                      <div className="flex items-center justify-between bg-emerald-950/40 border border-emerald-500/30 px-2 py-1 rounded">
                        <span className="text-[7px] text-emerald-300 font-mono">Performance Score</span>
                        <span className="text-[8px] font-bold text-emerald-300 font-mono">99 / 100</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5 pt-1">
                        <div className="p-1.5 rounded bg-[#201C18] border border-[#E3C8B2]/15">
                          <span className="text-[6px] text-[#C7BEB5] block">Antes</span>
                          <span className="text-[7px] text-red-300 font-mono">3.8s Lento</span>
                        </div>
                        <div className="p-1.5 rounded bg-[#201C18] border border-emerald-500/30">
                          <span className="text-[6px] text-[#C7BEB5] block">Depois</span>
                          <span className="text-[7px] text-emerald-300 font-mono">0.4s Veloz</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Card bottom bar */}
                  <div className="flex items-center justify-between text-[7px] text-[#C7BEB5]/80 pt-1.5 border-t border-[#E3C8B2]/10 relative z-10">
                    <span>ELVANO Studio Preview</span>
                    <span className="text-[#E3C8B2]">Visual Demonstrativo</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-medium text-[#F7F5F2] mb-1.5 leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-[#E3C8B2] font-medium mb-3">
                  {project.subtitle}
                </p>
                <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1.5 mb-5">
                  {project.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#F7F5F2]/90 leading-relaxed">
                      <Check className="w-3.5 h-3.5 text-[#E3C8B2] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Specs & CTA */}
              <div className="pt-4 border-t border-[#E3C8B2]/15">
                <div className="grid grid-cols-3 gap-2 mb-4 text-center">
                  {project.specs.map((spec, idx) => (
                    <div key={idx} className="p-2 rounded-lg bg-[#141210] border border-[#E3C8B2]/10">
                      <span className="text-[10px] text-[#DDD4CB]/70 block">{spec.label}</span>
                      <span className="text-xs font-mono font-medium text-[#F4E2D2] mt-0.5 block truncate">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={siteConfig.getWhatsAppLink(`Olá, Guilherme! Vi os projetos demonstrativos no site da ELVANO e gostaria de solicitar um orçamento para o meu negócio.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#201C18] hover:bg-[#282420] text-[#F7F5F2] hover:text-[#E3C8B2] border border-[#E3C8B2]/25 text-xs font-semibold transition-all group-hover:border-[#E3C8B2]/50 shadow-sm"
                >
                  <span>Solicitar proposta para meu projeto</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E3C8B2]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
