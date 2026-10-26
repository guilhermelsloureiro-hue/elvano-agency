import React, { useState } from 'react';
import { Layers, Check, ArrowRight, ShieldCheck, Sparkles, ExternalLink } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

import demoLandingWebp from '../assets/images/demo_landing_capture_1793015424993.webp';
import demoLandingJpg from '../assets/images/demo_landing_capture_1793015424993.jpg';
import demoEcommerceWebp from '../assets/images/demo_ecommerce_store_1793015442222.webp';
import demoEcommerceJpg from '../assets/images/demo_ecommerce_store_1793015442222.jpg';
import demoSpeedWebp from '../assets/images/demo_speed_modernization_1793015460262.webp';
import demoSpeedJpg from '../assets/images/demo_speed_modernization_1793015460262.jpg';

interface DemonstrativeProject {
  id: string;
  badge: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  imageSrc: string;
  imageFallback: string;
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
    imageSrc: demoLandingWebp,
    imageFallback: demoLandingJpg,
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
    imageSrc: demoEcommerceWebp,
    imageFallback: demoEcommerceJpg,
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
    imageSrc: demoSpeedWebp,
    imageFallback: demoSpeedJpg,
    type: 'reformulacao',
  },
];

export const DemonstrativeProjectsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative z-10 border-t border-[#E3C8B2]/10 bg-[#161412]/50 backdrop-blur-sm content-visibility-auto" aria-labelledby="demo-heading">
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

                {/* High-Fidelity Photography Presentation */}
                <div className="mb-5 rounded-xl overflow-hidden bg-[#1C1814] border border-[#E3C8B2]/20 aspect-[4/3] relative group-hover:border-[#E3C8B2]/40 transition-all">
                  <picture>
                    <source srcSet={project.imageSrc} type="image/webp" />
                    <img
                      src={project.imageFallback}
                      alt={`Apresentação conceitual: ${project.title}`}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={900}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141311] via-transparent to-black/20 pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 text-[10px] tracking-wider uppercase font-mono text-[#E3C8B2]/90 bg-[#141311]/85 backdrop-blur-md px-2.5 py-1 rounded border border-[#E3C8B2]/20">
                    {project.category}
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
                  href={siteConfig.getWhatsAppLink(`Olá, Guilherme! Vi o projeto demonstrativo "${project.title}" no site da ELVANO e gostaria de conversar sobre uma proposta personalizada para a minha empresa.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#201C18] hover:bg-[#282420] text-[#F7F5F2] hover:text-[#E3C8B2] border border-[#E3C8B2]/25 text-xs font-semibold transition-all group-hover:border-[#E3C8B2]/50 shadow-sm"
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
