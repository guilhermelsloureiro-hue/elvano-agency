import React from 'react';
import { ArrowRight, MessageCircle, Eye } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

/**
 * Exemplos de páginas iniciais por segmento.
 * Todas as marcas abaixo são FICTÍCIAS — servem só para mostrar o padrão visual
 * das prévias que a ELVANO monta para negócios locais.
 */

interface ExamplePalette {
  bg: string;
  surface: string;
  text: string;
  muted: string;
  accent: string;
  accentText: string;
  footerBg: string;
  footerText: string;
  chipBorder: string;
}

interface ExampleSite {
  id: string;
  niche: string;
  brand: string;
  eyebrow: string;
  headline: string;
  sub: string;
  primary: string;
  secondary: string;
  chips: string[];
  footer: string;
  highlights: string;
  palette: ExamplePalette;
  centered?: boolean;
}

const examples: ExampleSite[] = [
  {
    id: 'odontologia',
    niche: 'Clínica odontológica',
    brand: 'Clínica Dental Aurora',
    eyebrow: 'Odontologia · Jandira',
    headline: 'Seu sorriso cuidado perto de casa',
    sub: 'Convênios e particulares, com atendimento para toda a família.',
    primary: 'Agendar avaliação',
    secondary: 'Conhecer a clínica',
    chips: ['Convênios', 'Ortodontia', 'Implantes'],
    footer: 'Centro · Jandira  |  WhatsApp (11) 9xxxx-xxxx',
    highlights: 'Agendamento pelo WhatsApp, convênios aceitos e localização em destaque.',
    centered: true,
    palette: {
      bg: '#F2F9FB',
      surface: '#FFFFFF',
      text: '#123A4A',
      muted: '#3E6472',
      accent: '#1F9BB5',
      accentText: '#FFFFFF',
      footerBg: '#123A4A',
      footerText: '#FFFFFF',
      chipBorder: '#CFE3E9',
    },
  },
  {
    id: 'barbearia',
    niche: 'Barbearia',
    brand: 'Barbearia Navalha Fina',
    eyebrow: 'Barbearia · Barueri',
    headline: 'Corte e barba no seu horário',
    sub: 'Agende pelo WhatsApp e seja atendido sem espera.',
    primary: 'Agendar horário',
    secondary: 'Ver cortes',
    chips: ['Corte', 'Barba', 'Infantil'],
    footer: 'Jd. Belval · Barueri  |  WhatsApp (11) 9xxxx-xxxx',
    highlights: 'Botão de agendamento, lista de serviços e fotos dos cortes.',
    palette: {
      bg: '#1B1B1B',
      surface: '#262626',
      text: '#FFFFFF',
      muted: '#C6C6C6',
      accent: '#C0392B',
      accentText: '#FFFFFF',
      footerBg: '#111111',
      footerText: '#C6C6C6',
      chipBorder: '#4A4A4A',
    },
  },
  {
    id: 'mecanica',
    niche: 'Oficina mecânica',
    brand: 'Auto Center Ponteiro',
    eyebrow: 'Mecânica em geral · Itapevi',
    headline: 'Mecânica de confiança, com orçamento claro',
    sub: 'Revisão, freios e suspensão. Peça seu orçamento pelo WhatsApp.',
    primary: 'Pedir orçamento',
    secondary: 'Ver serviços',
    chips: ['Revisão', 'Freios', 'Suspensão'],
    footer: 'Centro · Itapevi  |  WhatsApp (11) 9xxxx-xxxx',
    highlights: 'Serviços em destaque, pedido de orçamento e mapa de como chegar.',
    palette: {
      bg: '#151A21',
      surface: '#1F2630',
      text: '#FFFFFF',
      muted: '#B8BABC',
      accent: '#F2A900',
      accentText: '#151A21',
      footerBg: '#0D1015',
      footerText: '#B8BABC',
      chipBorder: '#3A424D',
    },
  },
  {
    id: 'beleza',
    niche: 'Salão e estética',
    brand: 'Studio Lírio Beleza',
    eyebrow: 'Beleza & estética · Cotia',
    headline: 'Cabelo, unhas e estética em um só lugar',
    sub: 'Profissionais dedicadas e horários flexíveis. Agende online.',
    primary: 'Agendar agora',
    secondary: 'Ver tratamentos',
    chips: ['Cabelo', 'Unhas', 'Sobrancelha'],
    footer: 'Granja Viana · Cotia  |  WhatsApp (11) 9xxxx-xxxx',
    highlights: 'Tratamentos com fotos, agenda pelo WhatsApp e link do Instagram.',
    centered: true,
    palette: {
      bg: '#FBF4F1',
      surface: '#FFFFFF',
      text: '#4A2C2A',
      muted: '#7A5A57',
      accent: '#B76E79',
      accentText: '#FFFFFF',
      footerBg: '#4A2C2A',
      footerText: '#F6E7E3',
      chipBorder: '#EBD5D0',
    },
  },
  {
    id: 'contabilidade',
    niche: 'Escritório contábil',
    brand: 'Prisma Contábil',
    eyebrow: 'Contabilidade · Alphaville',
    headline: 'Contabilidade sob medida para o seu negócio',
    sub: 'Abertura de empresa, MEI e rotina fiscal com atendimento próximo.',
    primary: 'Falar com um contador',
    secondary: 'Ver serviços',
    chips: ['Abertura de empresa', 'MEI', 'Folha'],
    footer: 'Alphaville · Barueri  |  (11) xxxx-xxxx',
    highlights: 'Segmentos atendidos, serviços e contato direto com o escritório.',
    palette: {
      bg: '#F2F6FB',
      surface: '#FFFFFF',
      text: '#0B2D5B',
      muted: '#3B5478',
      accent: '#005CC9',
      accentText: '#FFFFFF',
      footerBg: '#005CC9',
      footerText: '#FFFFFF',
      chipBorder: '#CED5DE',
    },
  },
  {
    id: 'pet',
    niche: 'Pet shop',
    brand: 'Pet Quintal',
    eyebrow: 'Banho, tosa & pet shop · Carapicuíba',
    headline: 'Seu pet bem cuidado e cheiroso',
    sub: 'Banho e tosa com hora marcada e busca e entrega no bairro.',
    primary: 'Agendar banho',
    secondary: 'Ver produtos',
    chips: ['Banho', 'Tosa', 'Leva e traz'],
    footer: 'Vila Dirce · Carapicuíba  |  WhatsApp (11) 9xxxx-xxxx',
    highlights: 'Agendamento de banho e tosa, leva e traz e produtos da loja.',
    palette: {
      bg: '#F4F8EC',
      surface: '#FFFFFF',
      text: '#2F4A1E',
      muted: '#5B7247',
      accent: '#E07A2F',
      accentText: '#FFFFFF',
      footerBg: '#2F4A1E',
      footerText: '#EEF4E3',
      chipBorder: '#D8E3C6',
    },
  },
];

const MiniSite: React.FC<{ site: ExampleSite }> = ({ site }) => {
  const p = site.palette;
  const align = site.centered ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className="rounded-xl overflow-hidden border border-black/10 shadow-lg" aria-hidden="true">
      {/* barra do navegador */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-[#EFECE8]">
        <span className="w-2 h-2 rounded-full bg-[#E36A5C]" />
        <span className="w-2 h-2 rounded-full bg-[#E9B949]" />
        <span className="w-2 h-2 rounded-full bg-[#62B565]" />
        <span className="ml-2 flex-1 truncate rounded bg-white/80 px-2 py-0.5 text-[9px] text-[#8A857E] font-mono">
          exemplo demonstrativo
        </span>
      </div>

      {/* página */}
      <div style={{ background: p.bg, color: p.text }}>
        <div className="flex items-center justify-between px-4 pt-3 pb-2 gap-2">
          <span className="font-sans font-bold text-[11px] sm:text-xs truncate">{site.brand}</span>
          <span className="hidden sm:block text-[8px] opacity-80 shrink-0" style={{ color: p.muted }}>
            Serviços · Sobre · Contato
          </span>
        </div>

        <div className={`flex flex-col px-4 pt-3 pb-4 gap-2 ${align}`}>
          <span
            className="text-[8px] uppercase tracking-[0.16em] font-bold"
            style={{ color: p.accent }}
          >
            {site.eyebrow}
          </span>
          <span className="font-sans font-bold text-[17px] sm:text-lg leading-[1.15]">
            {site.headline}
          </span>
          <span className="text-[10px] leading-snug max-w-[95%]" style={{ color: p.muted }}>
            {site.sub}
          </span>
          <div className={`flex flex-wrap gap-1.5 pt-1 ${site.centered ? 'justify-center' : ''}`}>
            <span
              className="rounded-full px-2.5 py-1 text-[9px] font-bold"
              style={{ background: p.accent, color: p.accentText }}
            >
              {site.primary}
            </span>
            <span
              className="rounded-full px-2.5 py-1 text-[9px] font-bold border"
              style={{ borderColor: p.text, color: p.text }}
            >
              {site.secondary}
            </span>
          </div>
          <div className={`flex flex-wrap gap-1 pt-1 ${site.centered ? 'justify-center' : ''}`}>
            {site.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-md px-2 py-0.5 text-[8px] border"
                style={{ borderColor: p.chipBorder, background: p.surface, color: p.text }}
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="px-4 py-2 text-[8px] truncate" style={{ background: p.footerBg, color: p.footerText }}>
          {site.footer}
        </div>
      </div>
    </div>
  );
};

interface ExamplesSectionProps {
  showHeading?: boolean;
}

export const ExamplesSection: React.FC<ExamplesSectionProps> = ({ showHeading = true }) => {
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
            <span>Exemplos por segmento</span>
          </div>
          <h2 id="examples-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Veja o padrão das prévias que montamos
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
            Cada negócio recebe uma página com as próprias cores, serviços e jeito de falar. Os exemplos abaixo usam marcas fictícias, só para mostrar o estilo.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {examples.map((site) => (
          <article
            key={site.id}
            className="elvano-card rounded-2xl p-4 sm:p-5 flex flex-col gap-4 border border-[#E3C8B2]/15 hover:border-[#E3C8B2]/35 transition-colors"
          >
            <MiniSite site={site} />
            <div className="flex-1 space-y-1.5">
              <span className="text-[11px] uppercase tracking-widest font-semibold text-[#E3C8B2]">
                {site.niche}
              </span>
              <p className="text-sm text-[#DDD4CB] leading-relaxed">{site.highlights}</p>
            </div>
            <a
              href={siteConfig.getWhatsAppLink(
                `Olá, Guilherme! Vi o exemplo de ${site.niche.toLowerCase()} no site da ELVANO e quero ver uma prévia do site do meu negócio.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#141311]/70 hover:bg-[#141311] text-[#F7F5F2] hover:text-[#E3C8B2] border border-[#E3C8B2]/25 text-sm font-medium transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#E3C8B2]" />
              <span>Quero uma prévia assim</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#E3C8B2]" />
            </a>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-xs text-[#C7BEB5]/80">
        Marcas, telefones e endereços dos exemplos são ilustrativos. Seu negócio tem segmento diferente? A prévia é feita sob medida para ele também.
      </p>
    </section>
  );
};
