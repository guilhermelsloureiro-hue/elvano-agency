/**
 * Configuração central da ELVANO Agency
 * Centraliza marca, links, número de WhatsApp e regras de mensagens
 */

export const siteConfig = {
  brandName: 'ELVANO Agency',
  brandTagline: 'Presença que valoriza. Estratégia que conecta.',
  concept: 'Estúdio digital premium em movimento',
  founder: 'Guilherme Lousada Loureiro',
  founderPhoto: '/guilherme_lousada.jpg',
  phoneDisplay: '(11) 91202-2007',
  phoneInternational: '5511912022007',
  phoneTelLink: 'tel:+5511912022007',
  whatsappBaseUrl: 'https://wa.me/5511912022007',

  // Mensagem padrão institucional
  defaultWhatsAppMessage:
    'Olá, Guilherme! Conheci a ELVANO pelo site e gostaria de conversar sobre o meu negócio.',

  // Mensagem da chamada final
  finalCtaWhatsAppMessage:
    'Olá, Guilherme! Gostaria de conversar sobre o próximo passo do meu negócio e alinhar qual solução da ELVANO é a mais adequada.',

  // Gerador robusto de links de WhatsApp com encoding correto
  getWhatsAppLink(customMessage?: string): string {
    const message = customMessage?.trim() || this.defaultWhatsAppMessage;
    return `${this.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
  },

  // Gerador de mensagem contextual para serviço específico
  getServiceWhatsAppLink(serviceName: string, priceLabel: string): string {
    const text = `Olá, Guilherme! Vi o serviço ${serviceName}, a partir de ${priceLabel}, no site da ELVANO. Gostaria de entender o escopo e pedir uma proposta para meu negócio.`;
    return this.getWhatsAppLink(text);
  },

  // Cores institucionais do novo conceito
  colors: {
    bgMain: '#141311',
    bgSecondary: '#201C18',
    surfaceCard: 'rgba(32, 28, 24, 0.72)',
    champagne: '#E3C8B2',
    champagneLight: '#F0D8C4',
    bronze: '#A88769',
    textPrimary: '#F5F3F0',
    textSecondary: '#C7BEB5',
  },

  // Navegação do site
  navLinks: [
    { label: 'Início', path: '/' },
    { label: 'Serviços', path: '/servicos' },
    { label: 'Resultados', path: '/resultados' },
    { label: 'Sobre', path: '/sobre' },
    { label: 'Contato', path: '/contato' },
  ],
};
