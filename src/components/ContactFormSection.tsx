import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';
import { servicesData } from '../data/servicesData';

interface ContactFormProps {
  initialServiceId?: string;
}

export const ContactFormSection: React.FC<ContactFormProps> = ({ initialServiceId }) => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState('Ainda não sei');
  const [notes, setNotes] = useState('');

  const [errors, setErrors] = useState<{ name?: string; company?: string }>({});
  const [isOpeningWhatsApp, setIsOpeningWhatsApp] = useState(false);

  // Sync initial service if passed
  useEffect(() => {
    if (initialServiceId) {
      const found = servicesData.find((s) => s.id === initialServiceId || s.slug === initialServiceId);
      if (found) {
        setService(found.name);
      }
    }
  }, [initialServiceId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; company?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Por favor, informe seu nome.';
    }
    if (!company.trim()) {
      newErrors.company = 'Por favor, informe sua empresa ou segmento.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsOpeningWhatsApp(true);

    // Build structured message
    let message = `Olá, Guilherme! Meu nome é ${name.trim()}, da empresa/segmento "${company.trim()}".`;
    message += ` Tenho interesse no serviço: ${service}.`;
    if (notes.trim()) {
      message += ` Gostaria de melhorar: ${notes.trim()}.`;
    }
    message += ` Gostaria de alinhar os detalhes e conversar sobre uma proposta para o meu negócio.`;

    const whatsappUrl = siteConfig.getWhatsAppLink(message);

    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setTimeout(() => {
      setIsOpeningWhatsApp(false);
    }, 2500);
  };

  return (
    <section className="py-16 sm:py-24 relative z-10" id="contato" aria-labelledby="contact-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Atendimento Comercial</span>
          </div>
          <h2 id="contact-heading" className="text-3xl sm:text-5xl font-serif text-[#F7F5F2] font-normal tracking-tight">
            Vamos conversar sobre seu negócio?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#DDD4CB]">
            Conte o que você precisa e leve as informações diretamente para a conversa com a ELVANO.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Form */}
          <div className="lg:col-span-8 elvano-card rounded-2xl p-6 sm:p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Nome */}
              <div>
                <label htmlFor="contact-name" className="block text-xs font-semibold uppercase tracking-wider text-[#E3C8B2] mb-2">
                  Seu Nome <span className="text-[#E3C8B2]">*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                  }}
                  placeholder="Ex: Carlos Eduardo"
                  className={`w-full px-4 py-3 rounded-xl bg-[#141210] border text-sm text-[#F7F5F2] placeholder-[#BDB3A7]/50 focus:outline-none focus:ring-2 focus:ring-[#E3C8B2] transition-colors ${
                    errors.name ? 'border-red-400/80' : 'border-[#E3C8B2]/25'
                  }`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Empresa ou Segmento */}
              <div>
                <label htmlFor="contact-company" className="block text-xs font-semibold uppercase tracking-wider text-[#E3C8B2] mb-2">
                  Empresa ou Segmento de Atuação <span className="text-[#E3C8B2]">*</span>
                </label>
                <input
                  id="contact-company"
                  type="text"
                  value={company}
                  onChange={(e) => {
                    setCompany(e.target.value);
                    if (errors.company) setErrors((prev) => ({ ...prev, company: undefined }));
                  }}
                  placeholder="Ex: Auto Peças Modelo / Loja de Acessórios"
                  className={`w-full px-4 py-3 rounded-xl bg-[#141210] border text-sm text-[#F7F5F2] placeholder-[#BDB3A7]/50 focus:outline-none focus:ring-2 focus:ring-[#E3C8B2] transition-colors ${
                    errors.company ? 'border-red-400/80' : 'border-[#E3C8B2]/25'
                  }`}
                />
                {errors.company && (
                  <p className="mt-1.5 text-xs text-red-300 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.company}
                  </p>
                )}
              </div>

              {/* Serviço de Interesse */}
              <div>
                <label htmlFor="contact-service" className="block text-xs font-semibold uppercase tracking-wider text-[#E3C8B2] mb-2">
                  Serviço de Interesse
                </label>
                <select
                  id="contact-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#141210] border border-[#E3C8B2]/25 text-sm text-[#F7F5F2] focus:outline-none focus:ring-2 focus:ring-[#E3C8B2] transition-colors"
                >
                  <option value="Ainda não sei">Ainda não sei (quero avaliar com o Guilherme)</option>
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* O que deseja melhorar (opcional) */}
              <div>
                <label htmlFor="contact-notes" className="block text-xs font-semibold uppercase tracking-wider text-[#E3C8B2] mb-2">
                  O que você deseja melhorar? <span className="text-[#DDD4CB]/60 text-[11px] font-normal lowercase">(opcional)</span>
                </label>
                <textarea
                  id="contact-notes"
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Ex: Quero estruturar meus anúncios e profissionalizar a apresentação do meu negócio para atrair clientes mais qualificados."
                  className="w-full px-4 py-3 rounded-xl bg-[#141210] border border-[#E3C8B2]/25 text-sm text-[#F7F5F2] placeholder-[#BDB3A7]/50 focus:outline-none focus:ring-2 focus:ring-[#E3C8B2] transition-colors resize-none"
                />
              </div>

              {/* Transparency Notice */}
              <div className="p-3.5 rounded-xl bg-[#141210]/90 border border-[#E3C8B2]/15 text-xs text-[#DDD4CB] leading-relaxed">
                As informações serão incluídas na mensagem do WhatsApp. Você poderá revisar antes de enviar.
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isOpeningWhatsApp}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F4E2D2] hover:brightness-105 active:scale-[0.99] text-[#141311] font-semibold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#E3C8B2]/15"
              >
                {isOpeningWhatsApp ? (
                  <>
                    <CheckCircle className="w-5 h-5 animate-pulse text-[#141311]" />
                    <span>Preparando conversa no WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-5 h-5" />
                    <span>Continuar no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Direct Contact Sidebar */}
          <div className="lg:col-span-4 space-y-4">
            <div className="elvano-card rounded-2xl p-6 shadow-xl">
              <h3 className="text-base font-serif text-[#F7F5F2] mb-2 font-medium">
                Prefere conversar diretamente?
              </h3>
              <p className="text-xs sm:text-sm text-[#DDD4CB] leading-relaxed mb-4">
                Você pode iniciar uma conversa sem formulário ou ligar para o telefone comercial da ELVANO.
              </p>

              <div className="space-y-3">
                <a
                  href={siteConfig.getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#201C18] hover:bg-[#282420] border border-[#E3C8B2]/30 text-xs font-semibold text-[#E3C8B2] transition-colors shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Direto</span>
                </a>

                <a
                  href={siteConfig.phoneTelLink}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#141210] hover:bg-[#1C1814] border border-[#E3C8B2]/20 text-xs font-medium text-[#F7F5F2] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#E3C8B2]" />
                  <span>{siteConfig.phoneDisplay}</span>
                </a>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#201C18]/60 border border-[#E3C8B2]/15 text-xs text-[#DDD4CB] space-y-2 shadow-md">
              <div className="text-[#F4E2D2] font-semibold">Atendimento Personalizado</div>
              <p className="leading-relaxed">
                As conversas são conduzidas com Guilherme Lousada Loureiro para entender o momento e a estrutura do seu negócio antes de qualquer contratação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
