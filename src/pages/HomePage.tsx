import React from 'react';
import { ArrowRight, MessageCircle, Layers, TrendingUp, Store, ShieldCheck, Check, Sparkles, UserCheck, Clock, Award, Shield } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { servicesData, type ServiceItem } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectStepsSection } from '../components/ProjectStepsSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { GuilhermePhoto } from '../components/GuilhermePhoto';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenDetails: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDetails }) => {
  // Selected services for the home page showcase (3 representative services)
  const featuredServices = servicesData.filter((s) =>
    ['site-completo', 'meta-ads', 'gestao-completa'].includes(s.id)
  );

  return (
    <div className="relative z-10 pt-24 sm:pt-32 pb-16">
      {/* ========================================================
          1. APRESENTAÇÃO INICIAL COM GUILHERME (HERO)
          Marca ELVANO mantida, mensagem clara de apresentação,
          botões diretos para WhatsApp e catálogo de serviços,
          composição tipográfica intencional sem bastidores técnicos.
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Proposta, Mensagem de Guilherme & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.22em] font-semibold text-[#E3C8B2]">
              <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#E3C8B2]" />
              <span>ELVANO AGENCY</span>
              <span className="text-[11px] text-[#A88769] font-sans normal-case tracking-normal">
                · Por Guilherme Lousada
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-serif text-[#F7F5F2] font-normal leading-[1.12] tracking-tight text-balance">
              Sites, design e anúncios para apresentar melhor o seu negócio.
            </h1>

            <p className="text-base sm:text-lg text-[#DDD4CB] max-w-2xl leading-relaxed">
              Sou Guilherme Lousada, responsável pela ELVANO. Ajudo pequenos negócios a organizar sua presença digital com sites, design, campanhas e soluções para marketplace.
            </p>

            {/* CTAs Principais */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.getWhatsAppLink('Olá, Guilherme! Vi o site da ELVANO e gostaria de conversar sobre os serviços para o meu negócio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] hover:brightness-105 active:scale-95 text-[#141311] font-semibold text-sm transition-all shadow-xl shadow-[#E3C8B2]/15 whitespace-nowrap group"
              >
                <MessageCircle className="w-4 h-4 text-[#141311]" />
                <span>Conversar com Guilherme</span>
              </a>

              <button
                type="button"
                onClick={() => onNavigate('/servicos')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#201C18]/90 hover:bg-[#201C18] text-[#F7F5F2] hover:text-[#E3C8B2] border border-[#E3C8B2]/25 text-sm font-medium transition-colors whitespace-nowrap shadow-md group"
              >
                <span>Ver serviços e valores</span>
                <ArrowRight className="w-4 h-4 text-[#E3C8B2] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Texto curto de apoio */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-[#E3C8B2]/90">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
              <span className="font-medium">
                Entregas, prazo e investimento alinhados antes de começar.
              </span>
            </div>

            {/* Quiet trust markers */}
            <div className="pt-6 border-t border-[#E3C8B2]/15 flex flex-wrap items-center gap-6 text-xs text-[#DDD4CB]">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E3C8B2]" />
                Atendimento direto sem intermediários
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E3C8B2]" />
                Escopos claros com valores visíveis
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E3C8B2]" />
                Sem contratos de fidelidade oculta
              </span>
            </div>
          </div>

          {/* Right Column: Composição Tipográfica Intencional & Estruturada da ELVANO */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Brilho sutil champagne de fundo */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E3C8B2]/15 via-[#A88769]/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

              {/* Card Estruturado com os Pilares de Atuação */}
              <div className="relative rounded-2xl overflow-hidden border border-[#E3C8B2]/25 bg-[#201C18]/85 backdrop-blur-md shadow-2xl p-6 sm:p-7 space-y-6">
                {/* Header do Card */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E3C8B2]/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#141311] border border-[#E3C8B2]/30 flex items-center justify-center shadow-md overflow-hidden relative shrink-0">
                      <GuilhermePhoto rounded="full" alt="Guilherme Lousada - Atendimento Direto" />
                    </div>
                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#E3C8B2] block">
                        Estrutura de Atendimento
                      </span>
                      <span className="text-xs text-[#DDD4CB]">
                        Soluções diretas para o seu momento
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] px-2.5 py-1 rounded-full bg-[#E3C8B2]/15 text-[#E3C8B2] border border-[#E3C8B2]/25 font-mono">
                    WhatsApp Direto
                  </span>
                </div>

                {/* Os 4 Pilares da Agência com valores claros */}
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-[#141311]/70 border border-[#E3C8B2]/15 hover:border-[#E3C8B2]/30 transition-all flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-[#201C18] border border-[#E3C8B2]/20 text-[#E3C8B2] shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-serif text-sm sm:text-base text-[#F7F5F2] font-medium">
                          Sites Completos & Responsivos
                        </span>
                        <span className="text-[11px] text-[#E3C8B2] font-mono shrink-0">
                          a partir de R$ 1.290
                        </span>
                      </div>
                      <p className="text-xs text-[#C7BEB5] mt-1 leading-relaxed">
                        Apresentação profissional, domínio próprio, mobile otimizado e botão de WhatsApp integrado.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141311]/70 border border-[#E3C8B2]/15 hover:border-[#E3C8B2]/30 transition-all flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-[#201C18] border border-[#E3C8B2]/20 text-[#E3C8B2] shrink-0 mt-0.5">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-serif text-sm sm:text-base text-[#F7F5F2] font-medium">
                          Gestão de Tráfego Pago
                        </span>
                        <span className="text-[11px] text-[#E3C8B2] font-mono shrink-0">
                          a partir de R$ 690/mês
                        </span>
                      </div>
                      <p className="text-xs text-[#C7BEB5] mt-1 leading-relaxed">
                        Campanhas no Meta Ads (Instagram/Facebook) e Google Ads direcionadas ao seu público-alvo.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141311]/70 border border-[#E3C8B2]/15 hover:border-[#E3C8B2]/30 transition-all flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-[#201C18] border border-[#E3C8B2]/20 text-[#E3C8B2] shrink-0 mt-0.5">
                      <Store className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-serif text-sm sm:text-base text-[#F7F5F2] font-medium">
                          Design de Lojas & Instagram
                        </span>
                        <span className="text-[11px] text-[#E3C8B2] font-mono shrink-0">
                          a partir de R$ 590
                        </span>
                      </div>
                      <p className="text-xs text-[#C7BEB5] mt-1 leading-relaxed">
                        Identidade visual para vitrines de e-commerce e organização estética do feed no Instagram.
                      </p>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141311]/70 border border-[#E3C8B2]/15 hover:border-[#E3C8B2]/30 transition-all flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-[#201C18] border border-[#E3C8B2]/20 text-[#E3C8B2] shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-serif text-sm sm:text-base text-[#F7F5F2] font-medium">
                          Marketplace Performance
                        </span>
                        <span className="text-[11px] text-[#E3C8B2] font-mono shrink-0">
                          a partir de R$ 790/mês
                        </span>
                      </div>
                      <p className="text-xs text-[#C7BEB5] mt-1 leading-relaxed">
                        Mídia patrocinada para acelerar a venda de produtos em plataformas de marketplace.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rodapé do Card com garantia de clareza */}
                <div className="pt-3 border-t border-[#E3C8B2]/15 flex items-center justify-between text-xs text-[#DDD4CB]">
                  <span className="flex items-center gap-1.5 text-[#E3C8B2]">
                    <Shield className="w-3.5 h-3.5" />
                    Orçamento sob medida sem custo
                  </span>
                  <button
                    type="button"
                    onClick={() => onNavigate('/servicos')}
                    className="text-[#E3C8B2] hover:text-[#F4E2D2] font-medium hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ver todos</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. APRESENTAÇÃO PESSOAL NA HOME COM GUILHERME
          Conecta a familiaridade do público do Instagram à agência,
          explicando quem está por trás e como o trabalho é conduzido.
          ======================================================== */}
      <section className="py-16 sm:py-20 border-y border-[#E3C8B2]/15 bg-[#201C18]/60 backdrop-blur-sm" aria-labelledby="founder-intro-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="elvano-card rounded-2xl p-7 sm:p-10 border border-[#E3C8B2]/25 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Badge / Monograma e identificação */}
              <div className="md:col-span-4 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-tr from-[#A88769] to-[#E3C8B2] p-[2px] shadow-xl overflow-hidden relative shrink-0">
                  <GuilhermePhoto rounded="2xl" alt="Guilherme Lousada - Fundador da ELVANO" />
                </div>

                <div>
                  <span className="text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] block">
                    Fundador & Responsável
                  </span>
                  <h3 className="text-2xl font-serif text-[#F7F5F2] mt-0.5">
                    Guilherme Lousada
                  </h3>
                  <p className="text-xs text-[#DDD4CB]/80 font-mono mt-1">
                    ELVANO Agency · São Paulo
                  </p>
                </div>

                <a
                  href={siteConfig.getWhatsAppLink('Olá, Guilherme! Te acompanho e gostaria de conversar sobre meu negócio.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] text-[#141311] font-semibold text-xs transition-all shadow-md hover:brightness-105"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Falar com Guilherme</span>
                </a>
              </div>

              {/* Texto com a mensagem pessoal solicitada */}
              <div className="md:col-span-8 space-y-4 text-left border-t md:border-t-0 md:border-l border-[#E3C8B2]/15 pt-6 md:pt-0 md:pl-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E3C8B2]">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span id="founder-intro-heading">Quem está por trás da ELVANO</span>
                </div>

                <p className="text-base sm:text-lg text-[#F7F5F2] leading-relaxed font-serif">
                  “Sou Guilherme Lousada. Trabalho com design, desenvolvimento e campanhas, com experiência como integrante de uma equipe que atuou em operações do nicho automotivo no Mercado Livre. Na ELVANO, o primeiro passo é entender seu negócio e organizar uma presença digital clara e funcional, alinhando entregas, prazos e investimentos antes de começar qualquer trabalho.”
                </p>

                <p className="text-sm text-[#DDD4CB] leading-relaxed">
                  Se você chegou até aqui pelo meu Instagram ou por indicação, saiba que o contato é sempre direto comigo. Cada empresa tem seu próprio momento — seja para colocar seu primeiro site no ar, profissionalizar o design ou escalar vendas com tráfego pago.
                </p>

                <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#DDD4CB]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E3C8B2] shrink-0" />
                    <span>Sem repasses para terceiros ocultos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E3C8B2] shrink-0" />
                    <span>Valores combinados por escrito</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E3C8B2] shrink-0" />
                    <span>Foco em soluções práticas e úteis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E3C8B2] shrink-0" />
                    <span>Atendimento rápido via WhatsApp</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => onNavigate('/sobre')}
                    className="text-xs font-semibold text-[#E3C8B2] hover:text-[#F4E2D2] inline-flex items-center gap-1.5 hover:underline"
                  >
                    <span>Conhecer a história completa da agência</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. ÁREAS DE ATUAÇÃO (SUPERFÍCIES TRANSLÚCIDAS)
          ======================================================== */}
      <section className="py-16 sm:py-24 border-b border-[#E3C8B2]/10 bg-[#201C18]/35 backdrop-blur-sm" aria-labelledby="areas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] block mb-2">
              Frentes de Trabalho
            </span>
            <h2 id="areas-heading" className="text-3xl sm:text-4xl font-serif text-[#F5F3F0]">
              Soluções organizadas para cada momento
            </h2>
            <p className="mt-3 text-sm text-[#C7BEB5]">
              Atuamos nos pilares fundamentais para construir uma marca sólida e gerar oportunidades contínuas de venda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Area 1: Design e presença digital */}
            <div className="elvano-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#141311] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-6 shadow-md">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#F5F3F0] mb-3">
                  Design e presença digital
                </h3>
                <p className="text-sm text-[#C7BEB5] leading-relaxed mb-6">
                  Estruturação visual de lojas virtuais, sites completos e harmonia estética no Instagram. Criamos interfaces funcionais que valorizam seu produto e facilitam a jornada do comprador.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#F5F3F0]/90 pt-4 border-t border-[#E3C8B2]/10">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
                  Sites completos e responsivos
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
                  Design e vitrines de loja virtual
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
                  Identidade e grade no Instagram
                </li>
              </ul>
            </div>

            {/* Area 2: Anúncios e estratégia */}
            <div className="elvano-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#141311] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-6 shadow-md">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#F5F3F0] mb-3">
                  Anúncios e estratégia
                </h3>
                <p className="text-sm text-[#C7BEB5] leading-relaxed mb-6">
                  Gestão mensal de tráfego pago no Meta Ads (Instagram/Facebook) e Google Ads. Direcionamos suas ofertas a públicos qualificados com acompanhamento e testes constantes.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#F5F3F0]/90 pt-4 border-t border-[#E3C8B2]/10">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
                  Meta Ads alinhado à sua oferta
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
                  Google Ads focado em termos de busca
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
                  Estratégia integrada de múltiplos canais
                </li>
              </ul>
            </div>

            {/* Area 3: Marketplace */}
            <div className="elvano-card rounded-2xl p-7 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#141311] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-6 shadow-md">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif text-[#F5F3F0] mb-3">
                  Marketplace
                </h3>
                <p className="text-sm text-[#C7BEB5] leading-relaxed mb-6">
                  Mídia de desempenho focada em acelerar produtos em plataformas de marketplace. Análise de lances, curva de produtos e oportunidades reais de conversão no canal.
                </p>
              </div>
              <ul className="space-y-2 text-xs text-[#F5F3F0]/90 pt-4 border-t border-[#E3C8B2]/10">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
                  Anúncios patrocinados por produto
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
                  Otimização de indicadores de campanha
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
                  Gestão integrada com redes e buscas
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. SELEÇÃO DE SERVIÇOS EM DESTAQUE (COM PREÇOS CLAROS)
          ======================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="featured-heading">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] block mb-2">
              Catálogo Selecionado
            </span>
            <h2 id="featured-heading" className="text-3xl sm:text-4xl font-serif text-[#F5F3F0]">
              Serviços com valores e escopos claros
            </h2>
            <p className="mt-2 text-sm text-[#C7BEB5] max-w-xl">
              Consulte uma amostra dos serviços mais buscados com escopo detalhado, prazos e valores transparentes.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/servicos')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E3C8B2] hover:text-[#F0D8C4] transition-colors group shrink-0"
          >
            <span>Ver todos os 8 serviços</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => onNavigate('/servicos')}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#201C18] hover:bg-[#282420] text-[#F5F3F0] hover:text-[#E3C8B2] border border-[#E3C8B2]/20 text-xs font-semibold transition-colors shadow-lg"
          >
            <span>Acessar catálogo completo com os 8 serviços</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 5. COMO COMEÇA UM PROJETO */}
      <ProjectStepsSection />

      {/* 6. RESUMO DA EXPERIÊNCIA NO MERCADO LIVRE */}
      <section className="py-16 sm:py-24 border-t border-[#E3C8B2]/10 bg-[#201C18]/35 backdrop-blur-sm" aria-labelledby="experience-summary-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Experiência Real Documentada</span>
          </div>
          <h2 id="experience-summary-heading" className="text-3xl sm:text-4xl font-serif text-[#F5F3F0]">
            Vivência prática em operações de alto volume
          </h2>
          <p className="mt-4 text-base text-[#C7BEB5] leading-relaxed max-w-2xl mx-auto">
            Guilherme integrou a equipe responsável por trabalhos de design, desenvolvimento e campanhas em operações do nicho automotivo no Mercado Livre.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-[#201C18]/70 border border-[#E3C8B2]/15 text-left text-sm text-[#C7BEB5] space-y-3">
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2] mt-2 shrink-0" />
              <span>
                <strong className="text-[#F5F3F0]">Contexto ético e transparente:</strong> Os registros apresentados documentam resultados de contas em recortes de períodos específicos e foram desenvolvidos através de trabalho em equipe multidisciplinar.
              </span>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2] mt-2 shrink-0" />
              <span>
                <strong className="text-[#F5F3F0]">Sem garantias irreais:</strong> Desempenhos anteriores ilustram capacidade técnica e operacional, mas não garantem resultados idênticos para outros negócios, cuja oferta e mercado são singulares.
              </span>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => onNavigate('/resultados')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#E3C8B2] hover:underline underline-offset-4"
            >
              <span>Ver detalhes e documentação dos resultados</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. CHAMADA FINAL */}
      <FinalCtaSection />
    </div>
  );
};
