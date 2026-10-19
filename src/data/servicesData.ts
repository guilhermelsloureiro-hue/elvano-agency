import metaAdsImg from '../assets/images/meta_ads_custom_1791984969301.jpg';
import googleAdsImg from '../assets/images/google_ads_custom_1791984969152.jpg';
import metaGoogleImg from '../assets/images/meta_google_custom_1791984971326.jpg';
import marketplacePerfImg from '../assets/images/marketplace_perf_custom_1791984972341.jpg';
import gestaoCompletaImg from '../assets/images/gestao_completa_custom_1791984974536.jpg';
import designInstagramImg from '../assets/images/design_instagram_custom_1791984971502.jpg';
import designLojaImg from '../assets/images/design_loja_custom_1791984974722.jpg';
import siteCompletoImg from '../assets/images/site_completo_custom_1791984977344.jpg';

export type ServiceCategory = 'todos' | 'anuncios' | 'marketplace' | 'design' | 'sites' | 'integradas';

export interface ServiceItem {
  id: string;
  name: string;
  shortName?: string;
  slug: string;
  categories: ServiceCategory[];
  priceValue: number;
  priceLabel: string;
  billingType: 'mensal' | 'projeto';
  badge?: string;
  description: string;
  deliveries: [string, string, string];
  baseScope: string;
  scopeConditions: string;
  idealFor: string;
  imageSrc: string;
  mockupType: 'meta' | 'google' | 'meta-google' | 'marketplace' | 'gestao' | 'instagram' | 'loja' | 'site';
}

export const serviceCategories: { id: ServiceCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'anuncios', label: 'Anúncios' },
  { id: 'marketplace', label: 'Marketplace' },
  { id: 'design', label: 'Design' },
  { id: 'sites', label: 'Sites' },
  { id: 'integradas', label: 'Soluções integradas' },
];

export const servicesData: ServiceItem[] = [
  {
    id: 'meta-ads',
    name: 'Meta Ads',
    slug: 'meta-ads',
    categories: ['anuncios'],
    priceValue: 690,
    priceLabel: 'R$ 690/mês',
    billingType: 'mensal',
    description: 'Anúncios no Instagram e Facebook alinhados à oferta e ao momento do seu negócio.',
    deliveries: [
      'Planejamento estratégico de públicos e segmentação qualificada',
      'Criação de textos persuasivos (copywriting) para os anúncios',
      'Acompanhamento contínuo e otimizações de conversão',
    ],
    baseScope:
      'Planejamento, configuração técnica da conta e pixel/CAPI, definição de públicos-alvo, elaboração de textos dos anúncios, acompanhamento contínuo e testes de otimização.',
    scopeConditions:
      'O valor corresponde estritamente à gestão mensal. A verba de mídia paga é definida separadamente e paga pelo cliente diretamente à Meta. Não inclui produção ilimitada de peças audiovisuais, filmagens in loco ou contratação de atores/influenciadores.',
    idealFor:
      'Negócios que buscam atrair clientes qualificados pelo Instagram e Facebook, fortalecendo a visibilidade e o volume de oportunidades.',
    imageSrc: metaAdsImg,
    mockupType: 'meta',
  },
  {
    id: 'google-ads',
    name: 'Google Ads',
    slug: 'google-ads',
    categories: ['anuncios'],
    priceValue: 790,
    priceLabel: 'R$ 790/mês',
    billingType: 'mensal',
    description: 'Presença nas buscas de quem procura produtos e serviços como os seus.',
    deliveries: [
      'Mapeamento aprofundado de palavras-chave com real intenção de compra',
      'Configuração de lista ativa de termos negativos para economizar verba',
      'Estruturação de anúncios em texto e acompanhamento técnico contínuo',
    ],
    baseScope:
      'Planejamento estratégico das campanhas, pesquisa detalhada de palavras-chave, configuração de negativas, redação dos anúncios e acompanhamento de métricas de busca.',
    scopeConditions:
      'Não há promessa de posição fixa garantida no topo do Google nem número pré-determinado de contatos, pois isso depende de leilão, concorrência e oferta. A verba de anúncios é paga pelo cliente diretamente ao Google.',
    idealFor:
      'Empresas e prestadores de serviços que precisam ser encontrados exatamente no momento em que o consumidor está pesquisando pelo que oferecem.',
    imageSrc: googleAdsImg,
    mockupType: 'google',
  },
  {
    id: 'meta-google',
    name: 'Meta + Google',
    slug: 'meta-google',
    categories: ['anuncios', 'integradas'],
    priceValue: 1190,
    priceLabel: 'R$ 1.190/mês',
    billingType: 'mensal',
    badge: 'Estratégia integrada',
    description: 'Redes sociais e buscas conectadas em uma estratégia integrada.',
    deliveries: [
      'Gestão articulada e sincronizada de Meta Ads e Google Ads',
      'Conexão entre quem descobre sua marca nas redes e quem pesquisa ativamente',
      'Acompanhamento e análise conjunta com visão global do funil',
    ],
    baseScope:
      'Gestão integrada das duas plataformas, cruzamento de públicos e palavras-chave, redação e teste de anúncios, acompanhamento analítico e reuniões de alinhamento estratégico.',
    scopeConditions:
      'As verbas de mídia são definidas em conjunto e pagas pelo cliente separadamente a cada plataforma (Meta e Google). Não inclui produção ilimitada de conteúdo criativo ou vídeos.',
    idealFor:
      'Marcas que já desejam atuar nos dois principais canais da internet de forma coordenada, sem dispersão de verba entre ferramentas isoladas.',
    imageSrc: metaGoogleImg,
    mockupType: 'meta-google',
  },
  {
    id: 'marketplace-performance',
    name: 'Marketplace Performance',
    slug: 'marketplace-performance',
    categories: ['marketplace'],
    priceValue: 790,
    priceLabel: 'R$ 790/mês',
    billingType: 'mensal',
    description: 'Gestão de anúncios patrocinados e análise de oportunidades para seus produtos no marketplace.',
    deliveries: [
      'Planejamento de mídia patrocinada em 1 marketplace de atuação',
      'Acompanhamento de campanhas, lances e indicadores de conversão',
      'Análise de curva de produtos com recomendações práticas de otimização',
    ],
    baseScope:
      'Planejamento de mídia patrocinada na plataforma de marketplace escolhida, acompanhamento das campanhas ativas, leitura analítica de indicadores e recomendações táticas.',
    scopeConditions:
      'Gestão focada em mídia de desempenho no canal. Controle de estoque físico, empacotamento, logística de envio, atendimento ao comprador (SAC) e operação integral da conta não estão inclusos.',
    idealFor:
      'Lojistas que já vendem em marketplaces e querem acelerar o giro dos produtos através de tráfego patrocinado inteligente.',
    imageSrc: marketplacePerfImg,
    mockupType: 'marketplace',
  },
  {
    id: 'gestao-completa',
    name: 'Gestão Completa ELVANO',
    slug: 'gestao-completa',
    categories: ['anuncios', 'marketplace', 'integradas'],
    priceValue: 1690,
    priceLabel: 'R$ 1.690/mês',
    billingType: 'mensal',
    badge: 'Multi-canal',
    description: 'Meta Ads, Google Ads e marketplace organizados em uma estratégia conjunta.',
    deliveries: [
      'Planejamento global conectando redes sociais, Google e marketplace',
      'Gestão técnica sincronizada de campanhas nas 3 frentes de aquisição',
      'Acompanhamento e leitura analítica integrada com visão do ecossistema',
    ],
    baseScope:
      'Planejamento estratégico de canais, gestão e acompanhamento de Meta Ads, Google Ads e anúncios em 1 marketplace, com reuniões de direcionamento e relatório consolidado.',
    scopeConditions:
      'A expressão "Completa" refere-se exclusivamente aos 3 canais de mídia descritos. Criação de identidade visual, desenvolvimento/reestruturação de sites e produção ilimitada de criativos não estão inclusos automaticamente.',
    idealFor:
      'Negócios com operação comercial estabelecida que necessitam de um parceiro estratégico para coordenar múltiplos pontos de contato de clientes.',
    imageSrc: gestaoCompletaImg,
    mockupType: 'gestao',
  },
  {
    id: 'design-instagram',
    name: 'Design para Instagram',
    slug: 'design-instagram',
    categories: ['design'],
    priceValue: 590,
    priceLabel: 'R$ 590 por projeto',
    billingType: 'projeto',
    description: 'Uma apresentação visual coerente para sua marca no Instagram.',
    deliveries: [
      'Briefing com diagnóstico estético e definição de direção visual',
      'Organização harmoniosa da grade de perfil e paleta tipográfica',
      'Modelos de peças estratégicas editáveis combinados em proposta',
    ],
    baseScope:
      'Briefing do negócio, estudo de referências visuais, organização estética da grade do perfil e desenvolvimento de modelos de peças essenciais definidos em proposta.',
    scopeConditions:
      'Serviço contratado por projeto (escopo fechado). Quantidade exata de peças, formatos, prazos de entrega e rodadas de revisão constam expressamente na proposta comercial. Não se trata de gestão mensal de mídias sociais nem produção diária de stories.',
    idealFor:
      'Profissionais e marcas que desejam profissionalizar seu feed, transmitindo autoridade imediata a quem chega ao perfil.',
    imageSrc: designInstagramImg,
    mockupType: 'instagram',
  },
  {
    id: 'design-loja-virtual',
    name: 'Design de Loja Virtual',
    slug: 'design-loja-virtual',
    categories: ['design'],
    priceValue: 790,
    priceLabel: 'R$ 790 por projeto',
    billingType: 'projeto',
    description: 'Uma vitrine digital mais organizada, clara e alinhada à identidade do seu negócio.',
    deliveries: [
      'Direção visual personalizada e layout coerente com o público-alvo',
      'Estruturação visual de home page, banners conceituais e vitrines',
      'Apresentação clara de produtos para facilitar a experiência de compra',
    ],
    baseScope:
      'Direção visual de e-commerce, planejamento da disposição da página inicial, criação de banners principais e secundários, e guia de apresentação de produtos conforme a plataforma utilizada.',
    scopeConditions:
      'Serviço focado na criação e design visual. Contratação de mensalidade da plataforma de e-commerce, cadastramento em massa de centenas de SKUs, configuração de meios de pagamento bancários, integrações de ERP e programação avançada de código são alinhados em proposta à parte caso necessários.',
    idealFor:
      'Marcas com e-commerce que sentem que a loja atual não transmite o devido valor e precisam de um visual atraente e profissional.',
    imageSrc: designLojaImg,
    mockupType: 'loja',
  },
  {
    id: 'site-completo',
    name: 'Site Completo e Funcional',
    slug: 'site-completo',
    categories: ['sites'],
    priceValue: 1290,
    priceLabel: 'R$ 1.290 por projeto',
    billingType: 'projeto',
    description: 'Um site profissional para apresentar seu negócio e facilitar o contato com seus clientes.',
    deliveries: [
      'Planejamento de arquitetura de informação e design exclusivo',
      'Desenvolvimento com código moderno, responsivo e de rápido carregamento',
      'Navegação estruturada com integração direta de WhatsApp comercial',
    ],
    baseScope:
      'Planejamento da estrutura de páginas, design de interface, desenvolvimento web responsivo para celular, tablet e computador, rotas combinadas e canal de contato direto por WhatsApp.',
    scopeConditions:
      'Número de páginas, produção de textos especializados, prazos, revisões e período de suporte inicial são especificados na proposta. Custos de registro de domínio anual e assinatura de hospedagem são contratados pelo cliente.',
    idealFor:
      'Empresas, consultorias e profissionais liberais que precisam de uma presença digital sólida, confiável e pensada para converter visitantes em conversas reais.',
    imageSrc: siteCompletoImg,
    mockupType: 'site',
  },
];
