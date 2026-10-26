import React from 'react';
import { MessageSquare, Search, FileText, Cpu, CheckCircle2, ShieldAlert, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const steps = [
  {
    num: '01',
    title: 'Conversa inicial para entender o negócio',
    icon: MessageSquare,
    desc: 'Um primeiro contato direto pelo WhatsApp ou reunião para ouvir sobre a sua empresa, o momento atual das suas vendas e os canais em que você atua.',
  },
  {
    num: '02',
    title: 'Análise das necessidades e objetivos',
    icon: Search,
    desc: 'Avaliamos a presença digital atual do seu negócio e identificamos com clareza quais soluções práticas trarão maior impacto com o investimento disponível.',
  },
  {
    num: '03',
    title: 'Apresentação de proposta personalizada',
    icon: FileText,
    desc: 'Apresentamos uma proposta clara com o escopo de entregas definido, prazos de execução, rodadas de revisão, suporte e condições de pagamento.',
  },
  {
    num: '04',
    title: 'Execução conforme o escopo aprovado',
    icon: Cpu,
    desc: 'Desenvolvimento do design, programação do site ou configuração estratégica das campanhas de tráfego, respeitando estritamente o combinado.',
  },
  {
    num: '05',
    title: 'Entrega e orientações de utilização',
    icon: CheckCircle2,
    desc: 'Apresentação final do projeto, orientações práticas de uso e acompanhamento contínuo no caso de serviços de gestão mensal de anúncios.',
  },
];

export const ProjectStepsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative z-10 border-t border-[#E3C8B2]/10 content-visibility-auto" aria-labelledby="steps-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <span className="w-6 h-px bg-[#E3C8B2]" />
            <span>Processo de Contratação</span>
            <span className="w-6 h-px bg-[#E3C8B2]" />
          </div>
          <h2 id="steps-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Do primeiro contato à entrega
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
            Como funciona cada etapa do trabalho conjunto com a ELVANO, com transparência total do início ao fim.
          </p>
        </div>

        {/* 5 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="elvano-card rounded-2xl p-6 flex flex-col justify-between relative group hover:border-[#E3C8B2]/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono font-semibold text-[#E3C8B2] tracking-wider px-2 py-0.5 rounded bg-[#E3C8B2]/10 border border-[#E3C8B2]/20">
                      ETAPA {step.num}
                    </span>
                    <div className="w-9 h-9 rounded-xl bg-[#141210] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] group-hover:scale-110 transition-transform shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-serif font-medium text-[#F7F5F2] mb-2.5 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-[#E3C8B2]/15">
                  <div className="h-0.5 w-full bg-[#1C1814] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#A88769] to-[#E3C8B2] transition-all duration-500"
                      style={{ width: `${(idx + 1) * 20}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial Clarifications Box */}
        <div className="mt-12 p-6 rounded-2xl bg-[#201C18]/90 border border-[#E3C8B2]/25 max-w-4xl mx-auto space-y-3 shadow-xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E3C8B2]">
            <ShieldAlert className="w-4 h-4 text-[#E3C8B2]" />
            <span>Condições e Escopo Formalizados na Proposta</span>
          </div>
          <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
            Prazos de entrega, rodadas de revisão, período de suporte técnico e condições de pagamento são formalizados e especificados detalhadamente na proposta comercial antes de qualquer contratação.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#E3C8B2]/90 border-t border-[#E3C8B2]/15">
            <span>• Atendimento direto com Guilherme Lousada</span>
            <span>• Sem fidelidade oculta ou renovações automáticas sem consentimento</span>
          </div>
        </div>
      </div>
    </section>
  );
};
