import React from 'react';
import { UserCheck, FileCheck2, MessageCircle, Eye, ShieldCheck, Check } from 'lucide-react';

const differentials = [
  {
    icon: UserCheck,
    title: 'Atendimento e propostas personalizados',
    description:
      'Cada negócio tem seu próprio momento e estrutura. Analisamos suas reais necessidades antes de recomendar qualquer serviço, sem pacotes engessados ou contratações desnecessárias.',
  },
  {
    icon: FileCheck2,
    title: 'Escopo e entregas previamente definidos',
    description:
      'Todas as entregas, prazos de execução, rodadas de revisão e limites do serviço são formalizados em proposta antes de iniciar o trabalho. Você sabe exatamente o que esperar.',
  },
  {
    icon: MessageCircle,
    title: 'Comunicação clara durante o desenvolvimento',
    description:
      'Canal direto com o responsável pelo projeto pelo WhatsApp. Sem termos técnicos confusos, sem repasses para intermediários e com atualizações ágeis sobre o andamento.',
  },
  {
    icon: Eye,
    title: 'Atenção à experiência do usuário',
    description:
      'Sites rápidos, navegação intuitiva no celular e caminhos claros para o cliente entrar em contato. Criamos interfaces funcionais pensadas para quem consome.',
  },
  {
    icon: ShieldCheck,
    title: 'Compromisso com qualidade visual e funcionalidade',
    description:
      'Design refinado, tipografia bem cuidada e código moderno. O equilíbrio entre estética profissional e carregamento rápido para gerar credibilidade imediata.',
  },
];

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 relative z-10 border-t border-[#E3C8B2]/10 bg-[#1A1815]/40 backdrop-blur-sm content-visibility-auto" aria-labelledby="why-choose-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <Check className="w-3.5 h-3.5" />
            <span>Processo e Transparência</span>
          </div>
          <h2 id="why-choose-heading" className="text-3xl sm:text-4xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Por que escolher a ELVANO?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
            Diferenciais construídos em cima de um processo de trabalho estruturado, comunicação transparente e foco em soluções funcionais para a sua empresa.
          </p>
        </div>

        {/* 5 Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, idx) => {
            const Icon = item.icon;
            const isFullWidthOnLarge = idx === 4; // Make 5th card span nicely
            return (
              <div
                key={idx}
                className={`elvano-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group hover:border-[#E3C8B2]/40 transition-all duration-300 ${
                  isFullWidthOnLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-[#141311] border border-[#E3C8B2]/20 flex items-center justify-center text-[#E3C8B2] mb-5 shadow-md group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-serif font-medium text-[#F7F5F2] mb-2.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-[#E3C8B2]/10 flex items-center gap-2 text-[11px] text-[#E3C8B2]/80 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2]" />
                  <span>Prática de trabalho formalizada</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
