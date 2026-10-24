import React from 'react';
import {
  ArrowRight,
  MessageCircle,
  Layers,
  TrendingUp,
  Store,
  ShieldCheck,
  Check,
  Sparkles,
  UserCheck,
  Clock,
  Award,
  Shield,
  AlertOctagon,
  Gauge,
  Target,
  Palette,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { servicesData, type ServiceItem } from '../data/servicesData';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectStepsSection } from '../components/ProjectStepsSection';
import { WhyChooseSection } from '../components/WhyChooseSection';
import { DemonstrativeProjectsSection } from '../components/DemonstrativeProjectsSection';
import { FAQSection } from '../components/FAQSection';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { GuilhermePhoto } from '../components/GuilhermePhoto';

interface HomePageProps {
  onNavigate: (path: string) => void;
  onOpenDetails: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenDetails }) => {
  // 6 representative services from different categories for the home showcase
  const featuredServices = servicesData.filter((s) =>
    ['site-completo', 'landing-page', 'meta-ads', 'google-ads', 'gestao-completa', 'criativos-campanhas'].includes(s.id)
  );

  return (
    <div className="relative z-10 pt-24 sm:pt-32 pb-16">
      {/* ========================================================
          1. APRESENTAÇÃO CLARA DO QUE É A ELVANO (HERO)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Proposta de Valor, Mensagem de Guilherme & CTAs */}
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
              Sou Guilherme Lousada, responsável pela ELVANO. Ajudo pequenos e médios negócios a organizar sua presença digital com sites rápidos, landing pages de alta conversão, design estratégico e gestão profissional de anúncios.
            </p>

            {/* CTAs Principais de Conversão */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={siteConfig.getWhatsAppLink('Olá, Guilherme! Vi o site da ELVANO e gostaria de solicitar uma proposta personalizada para o meu negócio.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] hover:brightness-105 active:scale-95 text-[#141311] font-semibold text-sm transition-all shadow-xl shadow-[#E3C8B2]/15 whitespace-nowrap group"
              >
                <MessageCircle className="w-4 h-4 text-[#141311]" />
                <span>Conversar sobre meu projeto</span>
              </a>

              <button
                type="button"
                onClick={() => onNavigate('/servicos')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#201C18]/90 hover:bg-[#201C18] text-[#F7F5F2] hover:text-[#E3C8B2] border border-[#E3C8B2]/25 text-sm font-medium transition-colors whitespace-nowrap shadow-md group"
              >
                <span>Conhecer nossos 12 serviços</span>
                <ArrowRight className="w-4 h-4 text-[#E3C8B2] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Texto de apoio com segurança */}
            <div className="pt-2 flex items-center gap-2 text-xs sm:text-sm text-[#E3C8B2]/90">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
              <span className="font-medium">
                Propostas sob medida com escopo, prazos e entregas definidos por escrito.
              </span>
            </div>

            {/* Marcadores de confiança */}
            <div className="pt-6 border-t border-[#E3C8B2]/15 flex flex-wrap items-center gap-6 text-xs text-[#DDD4CB]">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E3C8B2]" />
                Atendimento direto sem intermediários
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E3C8B2]" />
                Escopos claros e entregas combinadas
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#E3C8B2]" />
                Sem fidelidade oculta
              </span>
            </div>
          </div>

          {/* Right Column: Card Estruturado com os Pilares e Foto do Guilherme */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#E3C8B2]/15 via-[#A88769]/10 to-transparent rounded-3xl blur-2xl pointer-events-none" />

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

                {/* 4 Pilares da Agência */}
                <div className="space-y-3.5">
                  <div className="p-3.5 rounded-xl bg-[#141311]/70 border border-[#E3C8B2]/15 hover:border-[#E3C8B2]/30 transition-all flex items-start gap-3.5">
                    <div className="p-2 rounded-lg bg-[#201C18] border border-[#E3C8B2]/20 text-[#E3C8B2] shrink-0 mt-0.5">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-serif text-sm sm:text-base text-[#F7F5F2] font-medium">
                          Sites & Landing Pages
                        </span>
                        <span className="text-[11px] text-[#E3C8B2] font-mono shrink-0">
                          Carregamento veloz
                        </span>
                      </div>
                      <p className="text-xs text-[#C7BEB5] mt-1 leading-relaxed">
                        Apresentação profissional, domínio próprio, mobile otimizado e botões de contato integrados.
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
                          Estratégia contínua
                        </span>
                      </div>
                      <p className="text-xs text-[#C7BEB5] mt-1 leading-relaxed">
                        Campanhas no Meta Ads (Instagram/Facebook) e Google Ads direcionadas ao seu cliente ideal.
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
                          Design & Criativos
                        </span>
                        <span className="text-[11px] text-[#E3C8B2] font-mono shrink-0">
                          Padrão refinado
                        </span>
                      </div>
                      <p className="text-xs text-[#C7BEB5] mt-1 leading-relaxed">
                        Peças publicitárias, identidade de e-commerce e organização estética com harmonia visual.
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
                          Marketplace & Otimização
                        </span>
                        <span className="text-[11px] text-[#E3C8B2] font-mono shrink-0">
                          Desempenho técnico
                        </span>
                      </div>
                      <p className="text-xs text-[#C7BEB5] mt-1 leading-relaxed">
                        Mídia patrocinada para produtos e modernização de sites para eliminar lentidão.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Rodapé do Card */}
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
                    <span>Ver 12 serviços</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          2. PROBLEMAS REAIS QUE A AGÊNCIA RESOLVE
          ======================================================== */}
      <section className="py-16 sm:py-20 border-y border-[#E3C8B2]/15 bg-[#1C1814]/40 backdrop-blur-sm" aria-labelledby="problems-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
              <AlertOctagon className="w-3.5 h-3.5" />
              <span>Diagnóstico e Soluções</span>
            </div>
            <h2 id="problems-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2] font-normal tracking-tight">
              Problemas reais que a sua empresa não precisa enfrentar sozinha
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
              Identificamos os pontos críticos que travam o crescimento de negócios no digital e construímos soluções práticas para cada um deles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="elvano-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#141210] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-4">
                  <Gauge className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-medium text-[#F7F5F2] mb-2">
                  Sites lentos e desatualizados
                </h3>
                <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
                  Páginas que demoram para carregar no celular fazem o cliente desistir antes mesmo de conhecer sua oferta. Desenvolvemos interfaces leves e rápidas.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E3C8B2]/10 text-xs text-[#E3C8B2] font-medium">
                → Solução: Sites & Otimização Web
              </div>
            </div>

            <div className="elvano-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#141210] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-medium text-[#F7F5F2] mb-2">
                  Anúncios sem estratégia
                </h3>
                <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
                  Investir em anúncios sem público qualificado ou palavras-chave certas gera desperdício de verba. Gerenciamos Meta e Google com acompanhamento contínuo.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E3C8B2]/10 text-xs text-[#E3C8B2] font-medium">
                → Solução: Gestão de Tráfego Pago
              </div>
            </div>

            <div className="elvano-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#141210] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-4">
                  <Palette className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-medium text-[#F7F5F2] mb-2">
                  Visual amador ou desordenado
                </h3>
                <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
                  A primeira impressão define a confiança. Criamos peças gráficas, vitrines e criativos com acabamento visual superior para transmitir autoridade imediata.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E3C8B2]/10 text-xs text-[#E3C8B2] font-medium">
                → Solução: Design & Criativos
              </div>
            </div>

            <div className="elvano-card rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#141210] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-4">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-serif font-medium text-[#F7F5F2] mb-2">
                  Falta de suporte e clareza
                </h3>
                <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
                  Muitas agências somem após a venda ou terceirizam o atendimento. Na ELVANO, o contato é direto com Guilherme, com escopo e prazos combinados por escrito.
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-[#E3C8B2]/10 text-xs text-[#E3C8B2] font-medium">
                → Solução: Atendimento Direto
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          3. POR QUE ESCOLHER A ELVANO? (DIFERENCIAIS)
          ======================================================== */}
      <WhyChooseSection />

      {/* ========================================================
          4. APRESENTAÇÃO DOS SERVIÇOS DISPONÍVEIS
          ======================================================== */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-labelledby="featured-heading">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] block mb-2">
              Catálogo de Serviços
            </span>
            <h2 id="featured-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2]">
              Soluções sob medida para o seu momento
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#DDD4CB] max-w-xl">
              Consulte uma seleção dos nossos serviços mais buscados com escopo detalhado, benefícios práticos e propostas comerciais sob medida.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/servicos')}
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#E3C8B2] hover:text-[#F0D8C4] transition-colors group shrink-0"
          >
            <span>Ver catálogo com 12 serviços</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 6 Featured Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {featuredServices.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpenDetails={onOpenDetails}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={() => onNavigate('/servicos')}
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#201C18] hover:bg-[#282420] text-[#F7F5F2] hover:text-[#E3C8B2] border border-[#E3C8B2]/25 text-sm font-semibold transition-all shadow-xl hover:border-[#E3C8B2]/50"
          >
            <span>Explorar os 12 serviços com filtros por categoria</span>
            <ArrowRight className="w-4 h-4 text-[#E3C8B2]" />
          </button>
        </div>
      </section>

      {/* ========================================================
          5. PROJETOS DEMONSTRATIVOS (CAPACIDADE TÉCNICA E TRANSPARÊNCIA)
          ======================================================== */}
      <DemonstrativeProjectsSection />

      {/* ========================================================
          6. DO PRIMEIRO CONTATO À ENTREGA (PROCESSO DE CONTRATAÇÃO)
          ======================================================== */}
      <ProjectStepsSection />

      {/* ========================================================
          7. QUEM ESTÁ POR TRÁS DA ELVANO (GUILHERME LOUSADA)
          ======================================================== */}
      <section className="py-16 sm:py-20 border-y border-[#E3C8B2]/15 bg-[#201C18]/60 backdrop-blur-sm" aria-labelledby="founder-intro-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="elvano-card rounded-2xl p-7 sm:p-10 border border-[#E3C8B2]/25 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Badge & Foto de Guilherme */}
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
                  href={siteConfig.getWhatsAppLink('Olá, Guilherme! Gostaria de conversar com você sobre um projeto para o meu negócio.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] text-[#141311] font-semibold text-xs transition-all shadow-md hover:brightness-105"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Falar com Guilherme</span>
                </a>
              </div>

              {/* Mensagem Pessoal e Compromisso Ético */}
              <div className="md:col-span-8 space-y-4 text-left border-t md:border-t-0 md:border-l border-[#E3C8B2]/15 pt-6 md:pt-0 md:pl-8">
                <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E3C8B2]">
                  <UserCheck className="w-3.5 h-3.5" />
                  <span id="founder-intro-heading">Quem está por trás da ELVANO</span>
                </div>

                <p className="text-base sm:text-lg text-[#F7F5F2] leading-relaxed font-serif">
                  “Sou Guilherme Lousada. Trabalho com design, desenvolvimento e campanhas, com experiência prática como integrante de equipe multidisciplinar em operações do nicho automotivo no Mercado Livre. Na ELVANO, o primeiro passo é entender o seu negócio e organizar uma presença digital clara e funcional, alinhando entregas, prazos e investimentos antes de começar qualquer trabalho.”
                </p>

                <p className="text-sm text-[#DDD4CB] leading-relaxed">
                  Se você chegou até aqui pelo meu Instagram ou por indicação, saiba que o contato é sempre direto comigo. Cada empresa tem seu próprio momento — seja para colocar sua primeira landing page no ar, reformular um site lento ou estruturar campanhas com tráfego pago.
                </p>

                <div className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#DDD4CB]">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E3C8B2] shrink-0" />
                    <span>Sem repasses para terceiros ocultos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#E3C8B2] shrink-0" />
                    <span>Proposta e escopo formalizados</span>
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
          8. PERGUNTAS FREQUENTES
          ======================================================== */}
      <FAQSection />

      {/* ========================================================
          9. CHAMADA FINAL PARA CONVERSÃO
          ======================================================== */}
      <FinalCtaSection />
    </div>
  );
};
