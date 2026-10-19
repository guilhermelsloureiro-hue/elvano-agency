import React from 'react';
import { ShieldCheck, Lock, Check } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="relative z-10 pt-24 sm:pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Transparência & Privacidade</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-serif text-[#F5F3F0]">
            Tratamento de Dados e Privacidade
          </h1>
          <p className="mt-3 text-sm text-[#C7BEB5]">
            Explicação simples, fiel e objetiva sobre o funcionamento técnico deste site.
          </p>
        </div>

        <div className="elvano-card rounded-2xl p-7 sm:p-10 space-y-8 text-sm text-[#C7BEB5] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-serif text-[#F5F3F0] flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#E3C8B2]" />
              <span>1. Como suas informações são utilizadas</span>
            </h2>
            <p>
              O site da ELVANO Agency foi desenvolvido com foco estrito em privacidade e transparência. O formulário disponibilizado na página de contato funciona localmente em seu navegador:
            </p>
            <ul className="space-y-2 text-xs sm:text-sm pl-4">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#E3C8B2] shrink-0 mt-0.5" />
                <span>Os dados preenchidos (nome, empresa/segmento, serviço de interesse e notas) são usados exclusivamente para compor o texto da mensagem de conversa no WhatsApp.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#E3C8B2] shrink-0 mt-0.5" />
                <span>Nenhum dado digitado no formulário é gravado em bancos de dados remotos, servidores de rastreamento ou compartilhado com plataformas terceiras de publicidade.</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#E3C8B2] shrink-0 mt-0.5" />
                <span>Você tem total controle sobre a mensagem antes de enviá-la dentro do aplicativo do WhatsApp.</span>
              </li>
            </ul>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#E3C8B2]/15">
            <h2 className="text-xl font-serif text-[#F5F3F0]">
              2. Armazenamento técnico de preferências (localStorage)
            </h2>
            <p>
              Para proporcionar uma experiência visual confortável, utilizamos o armazenamento local do seu navegador (<code className="text-[#E3C8B2] bg-[#141311] px-1.5 py-0.5 rounded text-xs">localStorage</code>) estritamente para guardar sua escolha de pausar ou ativar as animações do fundo decorativo (<code className="text-[#E3C8B2] bg-[#141311] px-1.5 py-0.5 rounded text-xs">elvano_animations_paused</code>).
            </p>
            <p>
              Esse recurso é estritamente técnico e estético, não associando qualquer identificador pessoal ao seu dispositivo.
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#E3C8B2]/15">
            <h2 className="text-xl font-serif text-[#F5F3F0]">
              3. Sem cookies de terceiros ou pixels ocultos
            </h2>
            <p>
              Este site não instala cookies de publicidade, redes de afiliados ou ferramentas de monitoramento invasivas. A interação comercial ocorre de forma direta e voluntária entre você e a ELVANO Agency por meio do WhatsApp comercial oficial (<span className="text-[#F5F3F0] font-medium">{siteConfig.phoneDisplay}</span>).
            </p>
          </section>

          <section className="space-y-3 pt-6 border-t border-[#E3C8B2]/15">
            <h2 className="text-xl font-serif text-[#F5F3F0]">
              4. Contato sobre privacidade
            </h2>
            <p>
              Caso tenha qualquer dúvida sobre o funcionamento técnico ou queira solicitar esclarecimentos, entre em contato diretamente pelo WhatsApp ou pelo telefone comercial da ELVANO Agency.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
