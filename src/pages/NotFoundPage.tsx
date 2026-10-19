import React from 'react';
import { ArrowLeft, Home } from 'lucide-react';

interface NotFoundPageProps {
  onNavigate: (path: string) => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative z-10 pt-32 pb-24 min-h-[75vh] flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <span className="text-xs font-semibold tracking-widest uppercase text-[#E3C8B2] block mb-2">
          Erro 404
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#F5F3F0] mb-4">
          Página não encontrada
        </h1>
        <p className="text-sm text-[#C7BEB5] mb-8 leading-relaxed">
          O endereço acessado não existe ou foi modificado. Navegue pelas seções disponíveis da ELVANO Agency.
        </p>

        <button
          onClick={() => onNavigate('/')}
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E3C8B2] to-[#F0D8C4] text-[#141311] font-semibold text-sm hover:brightness-105 transition-all shadow-lg shadow-[#E3C8B2]/10"
        >
          <Home className="w-4 h-4" />
          <span>Voltar para a página inicial</span>
        </button>
      </div>
    </div>
  );
};
