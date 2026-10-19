import React from 'react';
import { MessageSquare, Target, FileText, Cpu, CheckCircle2, RefreshCw } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Conversa',
    icon: MessageSquare,
    desc: 'Entendemos a realidade da sua empresa, quem é o seu público e o que você deseja melhorar na sua presença comercial.',
  },
  {
    num: '02',
    title: 'Prioridades',
    icon: Target,
    desc: 'Identificamos o que faz mais sentido para o seu momento atual, evitando contratações desnecessárias ou dispersão de verba.',
  },
  {
    num: '03',
    title: 'Proposta',
    icon: FileText,
    desc: 'Alinhamos detalhadamente o serviço escolhido, as entregas previstas, prazos de execução e o investimento claro.',
  },
  {
    num: '04',
    title: 'Execução',
    icon: Cpu,
    desc: 'Desenvolvemos o trabalho de design, desenvolvimento ou configuração das campanhas conforme o escopo rigorosamente aprovado.',
  },
  {
    num: '05',
    title: 'Acompanhamento',
    icon: CheckCircle2,
    desc: 'Realizamos os alinhamentos e a entrega do projeto ou o acompanhamento analítico e otimizações contínuas nos serviços mensais.',
  },
];

export const ProjectStepsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative z-10" aria-labelledby="steps-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Processo Transparente</span>
          </div>
          <h2 id="steps-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Como começa um projeto com a ELVANO
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#DDD4CB]">
            Do primeiro contato à entrega final ou acompanhamento contínuo de resultados, com alinhamento claro em cada etapa.
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

                  <h3 className="text-lg font-serif font-medium text-[#F7F5F2] mb-2.5">
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

        {/* Distinction between monthly ad management and project deliveries */}
        <div className="mt-10 p-5 rounded-2xl bg-[#201C18]/80 border border-[#E3C8B2]/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#DDD4CB] shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#E3C8B2] shrink-0" />
            <span>
              <strong className="text-[#F7F5F2] font-semibold">Gestão de Anúncios:</strong> Ciclo mensal de acompanhamento, otimizações contínuas e relatórios periódicos.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#A88769] shrink-0" />
            <span>
              <strong className="text-[#F7F5F2] font-semibold">Projetos de Design & Sites:</strong> Cronograma estruturado, prazos combinados e entrega validada em proposta.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
