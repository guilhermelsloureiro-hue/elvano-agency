import React from 'react';
import { ShieldCheck, AlertTriangle, Layers, TrendingUp, HelpCircle } from 'lucide-react';
import { FinalCtaSection } from '../components/FinalCtaSection';
import { MercadoLivreGraphCard, mlAccountsData } from '../components/MercadoLivreGraph';

export const ResultsPage: React.FC = () => {
  return (
    <div className="relative z-10 pt-24 sm:pt-32 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Documentação de Trajetória</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#F5F3F0] font-normal tracking-tight">
            Experiência e resultados documentados
          </h1>
          <p className="mt-4 text-base sm:text-lg text-[#DDD4CB] leading-relaxed">
            Painéis representativos de vendas brutas reais obtidas por operações do segmento automotivo no Mercado Livre, com identidades de loja preservadas por confidencialidade comercial.
          </p>
        </div>

        {/* Mandatory Context Block */}
        <div className="elvano-card rounded-2xl p-6 sm:p-8 mb-12 border-l-2 border-[#E3C8B2] shadow-xl">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E3C8B2] mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Contexto da Atuação</span>
          </div>
          <blockquote className="text-base sm:text-lg text-[#F0D8C4] italic font-serif leading-relaxed mb-4">
            “Guilherme integrou a equipe responsável por trabalhos de design, desenvolvimento e campanhas em operações do nicho automotivo no Mercado Livre. Os registros apresentados documentam resultados das contas em períodos específicos.”
          </blockquote>
          <p className="text-sm text-[#DDD4CB] leading-relaxed">
            Essa bagagem prática envolveu o desenho de vitrines digitais, padronização visual de anúncios, catálogo técnico de produtos e gestão de tráfego patrocinado (Product Ads) em contas de alto giro transacional.
          </p>
        </div>

        {/* 2 Interactive Mercado Livre Performance Graphs */}
        <div className="space-y-10 mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#E3C8B2]/15 pb-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#F5F3F0]">
                Painéis de Desempenho no Mercado Livre
              </h2>
              <p className="text-sm text-[#DDD4CB] mt-1">
                Visualização interativa das curvas de faturamento diário registradas em dois momentos distintos de maturação:
              </p>
            </div>
            <span className="text-xs text-[#E3C8B2] font-mono bg-[#201C18] px-3 py-1 rounded border border-[#E3C8B2]/20 self-start sm:self-auto">
              Recorte: 30 dias fechados
            </span>
          </div>

          {/* Gráfico 1: Conta de Maior Volume */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E3C8B2]">
                Caso 01 · Operação Madura
              </span>
              <span className="text-xs text-[#DDD4CB]/70">— Mais de 1 ano e meio de histórico</span>
            </div>
            <MercadoLivreGraphCard account={mlAccountsData[0]} />
          </div>

          {/* Gráfico 2: Conta de Menor Volume */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#E3C8B2]">
                Caso 02 · Operação em Tração
              </span>
              <span className="text-xs text-[#DDD4CB]/70">— Cerca de 7 meses de histórico</span>
            </div>
            <MercadoLivreGraphCard account={mlAccountsData[1]} />
          </div>
        </div>

        {/* 4 Essential Disclaimers */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#201C18]/90 border border-[#E3C8B2]/20 mb-14 shadow-xl">
          <h3 className="text-base font-semibold text-[#F5F3F0] mb-4 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-[#E3C8B2]" />
            <span>Notas e esclarecimentos éticos indispensáveis</span>
          </h3>

          <ul className="space-y-3.5 text-xs sm:text-sm text-[#DDD4CB] leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2] mt-2 shrink-0" />
              <span>
                <strong className="text-[#F5F3F0]">Vendas brutas totais:</strong> Os valores expressos correspondem às vendas brutas faturadas nas contas nos períodos de 30 dias documentados.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2] mt-2 shrink-0" />
              <span>
                <strong className="text-[#F5F3F0]">Não representam lucro líquido:</strong> Os números não refletem margem de lucro líquido nem devem ser interpretados como receita gerada exclusivamente por mídia patrocinada.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2] mt-2 shrink-0" />
              <span>
                <strong className="text-[#F5F3F0]">Trabalho realizado em equipe:</strong> O trabalho foi desenvolvido em colaboração com equipe multidisciplinar operacional. A ELVANO não atribui toda a trajetória das contas unicamente a si.
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E3C8B2] mt-2 shrink-0" />
              <span>
                <strong className="text-[#F5F3F0]">Sem garantia de resultados idênticos:</strong> Resultados passados ilustram competência técnica e operacional, mas não asseguram desempenho futuro para qualquer outro negócio, cujos fatores de oferta, preço, logística e concorrência são singulares.
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Final CTA */}
      <FinalCtaSection />
    </div>
  );
};
