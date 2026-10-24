import React from 'react';
import { UserCheck, FileCheck2, MessageCircle, Layout, Sparkles, Shield } from 'lucide-react';

const pillars = [
  {
    icon: UserCheck,
    title: 'Atendimento e propostas personalizados',
    desc: 'Cada projeto parte de uma conversa individual para compreender o modelo de negócio, o público e o estágio comercial da empresa, sem pacotes genéricos empurrados.',
  },
  {
    icon: FileCheck2,
    title: 'Escopo e entregas previamente definidos',
    desc: 'Tudo o que está incluído no trabalho é formalizado por escrito antes do início: páginas, formatos, quantidade de entregas, revisões e condições comerciais claras.',
  },
  {
    icon: MessageCircle,
    title: 'Comunicação clara durante o desenvolvimento',
    desc: 'Acompanhamento direto via WhatsApp comercial com o responsável técnico, sem intermediários, ruídos de comunicação ou filas de chamados demoradas.',
  },
  {
    icon: Layout,
    title: 'Atenção à experiência do usuário (UX)',
    desc: 'Sites e páginas estruturados para navegação ágil em smartphones, tipografia legível, carregamento veloz e caminhos intuitivos para o contato.',
  },
  {
    icon: Sparkles,
    title: 'Compromisso com qualidade visual e funcionalidade',
    desc: 'Design intencional alinhado à proposta de valor do seu negócio, combinando estética premium com código limpo e recursos que realmente funcionam.',
  },
];

export const WhyChooseUsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 border-y border-[#E3C8B2]/12 bg-[#201C18]/40 backdrop-blur-sm relative z-10" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>Processo e Rigor</span>
          </div>
          <h2 id="why-choose-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Por que escolher a ELVANO?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
            Diferenciais construídos sobre seriedade técnica, transparência comercial e foco na real utilidade para o seu negócio.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="elvano-card rounded-2xl p-7 flex flex-col justify-between group hover:border-[#E3C8B2]/35 transition-all duration-300"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#141210] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-6 group-hover:scale-105 transition-transform shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif font-medium text-[#F7F5F2] mb-3 leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-[#DDD4CB] leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E3C8B2]/10 flex items-center justify-between text-xs text-[#E3C8B2]/80 font-mono">
                  <span>Pilar 0{idx + 1}</span>
                  <span className="text-[#C7BEB5]/60">ELVANO Standard</span>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Commitment summary */}
          <div className="elvano-card rounded-2xl p-7 flex flex-col justify-between bg-gradient-to-br from-[#201C18] via-[#24201C] to-[#141210] border border-[#E3C8B2]/30">
            <div>
              <span className="text-xs uppercase tracking-widest font-mono text-[#E3C8B2] block mb-3">
                Compromisso Ético
              </span>
              <h3 className="text-xl font-serif font-medium text-[#F7F5F2] mb-3">
                Sem promessas irreais ou números inflados
              </h3>
              <p className="text-sm text-[#DDD4CB] leading-relaxed">
                Não prometemos resultados mágicos nem atalhos. Trabalhamos com planejamento profissional, execução consistente e acompanhamento sincero das entregas e métricas do seu projeto.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-[#E3C8B2]/15 flex items-center gap-2 text-xs text-[#E3C8B2]">
              <span className="w-2 h-2 rounded-full bg-[#E3C8B2]" />
              <span>Transparência comercial em 100% dos projetos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
