import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'Como funciona o primeiro contato?',
    answer:
      'O primeiro contato é feito diretamente pelo WhatsApp com o Guilherme Lousada. Conversamos para entender o segmento da sua empresa, a sua presença digital atual e quais são os seus objetivos imediatos. A partir dessa conversa, identificamos quais soluções fazem sentido para o seu momento.',
  },
  {
    question: 'Como os valores são definidos?',
    answer:
      'Os valores são apresentados exclusivamente em reuniões e propostas personalizadas, calculados de acordo com o escopo exato de trabalho, a complexidade técnica, o número de canais ou páginas necessárias e os prazos de entrega. Não trabalhamos com tabelas genéricas fixas, pois cada empresa possui demandas singulares.',
  },
  {
    question: 'Posso solicitar um projeto personalizado?',
    answer:
      'Sim. Se a sua empresa precisa de uma combinação específica de serviços — por exemplo, uma landing page rápida acompanhada de anúncios no Google ou uma reformulação visual com suporte mensal —, estruturamos uma proposta sob medida com escopo fechado atendendo exatamente à sua necessidade.',
  },
  {
    question: 'Como funciona o prazo de entrega?',
    answer:
      'O cronograma é definido previamente e formalizado na proposta comercial antes do início do desenvolvimento. Os prazos variam conforme a complexidade de cada projeto (como quantidade de páginas, revisão de criativos ou integração de canais) e passam a contar a partir do envio das informações e materiais necessários pelo cliente.',
  },
  {
    question: 'O que está incluído na proposta?',
    answer:
      'A proposta detalha claramente todas as entregas previstas, rodadas de revisão permitidas, suporte técnico pós-entrega e condições de pagamento. Nos serviços de anúncios, contempla a gestão estratégica contínua das contas (a verba de mídia paga é contratada pelo cliente diretamente com as plataformas Meta ou Google).',
  },
  {
    question: 'Como funciona o acompanhamento do projeto?',
    answer:
      'Durante o desenvolvimento, mantemos comunicação direta via WhatsApp para validações de etapas e alinhamentos. Para serviços contínuos de gestão de anúncios ou suporte mensal, realizamos acompanhamentos periódicos de métricas, testes de otimização e alinhamentos de direcionamento estratégico.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 relative z-10 border-t border-[#E3C8B2]/10" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Tire Suas Dúvidas</span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Perguntas Frequentes
          </h2>
          <p className="mt-3 text-base text-[#DDD4CB]">
            Respostas diretas e transparentes sobre contratação, propostas personalizadas e acompanhamento.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="elvano-card rounded-xl border border-[#E3C8B2]/18 overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(idx)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 focus:outline-none focus:ring-1 focus:ring-[#E3C8B2]"
                >
                  <span className="text-base sm:text-lg font-medium text-[#F7F5F2]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#1C1814] border border-[#E3C8B2]/20 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#E3C8B2]' : 'text-[#DDD4CB]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-sm text-[#DDD4CB] leading-relaxed border-t border-[#E3C8B2]/12 pt-3.5">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA help footer */}
        <div className="mt-10 p-6 rounded-2xl bg-[#201C18]/80 border border-[#E3C8B2]/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-sm font-serif font-medium text-[#F7F5F2] block">
              Tem alguma dúvida específica sobre o seu projeto?
            </span>
            <span className="text-xs text-[#DDD4CB]">
              Fale diretamente com o Guilherme para tirar dúvidas sem compromisso.
            </span>
          </div>

          <a
            href={siteConfig.getWhatsAppLink('Olá, Guilherme! Gostaria de tirar algumas dúvidas sobre os serviços da ELVANO.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] text-[#141311] font-semibold text-xs transition-all shadow-md hover:brightness-105 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Tirar dúvida no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
