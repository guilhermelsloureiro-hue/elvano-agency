import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: 'O investimento em anúncios está incluído?',
    answer:
      'Não. A mensalidade é referente à gestão. A verba de anúncios é definida separadamente e paga diretamente às plataformas.',
  },
  {
    question: 'Preciso contratar todos os serviços?',
    answer:
      'Não. Podemos começar pelo serviço que faz sentido para seu momento e planejar os próximos passos.',
  },
  {
    question: 'Design de loja e site completo são o mesmo serviço?',
    answer:
      'Não. O design de loja trabalha a apresentação visual da loja conforme o escopo. O site completo inclui desenvolvimento e funcionalidades combinadas na proposta.',
  },
  {
    question: 'Vocês atendem pequenos negócios?',
    answer:
      'Sim. A proposta é definida considerando a estrutura, as necessidades e os objetivos de cada empresa.',
  },
  {
    question: 'Como são definidos prazo e revisões?',
    answer:
      'Esses pontos são alinhados na proposta, antes do início do trabalho.',
  },
  {
    question: 'Existe garantia de vendas?',
    answer:
      'Não. O desempenho depende de fatores como oferta, mercado, investimento, atendimento e estrutura do negócio. O trabalho envolve planejamento, execução e acompanhamento conforme o serviço.',
  },
  {
    question: 'Como começo?',
    answer:
      'Escolha um serviço ou fale com a ELVANO pelo WhatsApp para apresentar seu negócio.',
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 relative z-10" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Dúvidas comuns sobre os serviços
          </h2>
          <p className="mt-3 text-base text-[#DDD4CB]">
            Respostas diretas e transparentes sobre contratação, escopo e investimentos.
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
      </div>
    </section>
  );
};
