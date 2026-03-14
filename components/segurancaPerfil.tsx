import { Shield, Key, ChevronRight } from 'lucide-react';

interface SegurancaProps {
  doisFatoresAtivo?: boolean;
  onToggleDoisFatores?: (ativo: boolean) => void;
  onAlterarSenha?: () => void;
}

export default function Seguranca({ 
  doisFatoresAtivo = false,
  onToggleDoisFatores,
  onAlterarSenha
}: SegurancaProps) {
  return (
    <div className="w-full h-full bg-[#040928] border border-[#050e4c] rounded-2xl p-5 ">
      {/* Título */}
      <div className="flex items-center gap-2 mb-4">
        <Shield size={18} className="text-blue-400" />
        <h2 className="text-white text-xl font-semibold">Segurança</h2>
      </div>

      {/* Autenticação em Dois Fatores */}
      <div className="mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-gray-400" />
            <span className="text-gray-300 text-sm">Autenticação em Dois Fatores</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gray-500 text-xs">{doisFatoresAtivo ? 'Ativado' : 'Desativado'}</span>
            <div className="relative">
              <input 
                type="checkbox" 
                className="sr-only"
                checked={doisFatoresAtivo}
                onChange={(e) => onToggleDoisFatores?.(e.target.checked)}
              />
              <div className={`
                w-10 h-5 rounded-full transition-colors cursor-pointer
                ${doisFatoresAtivo ? 'bg-blue-500' : 'bg-gray-600'}
              `}>
                <div className={`
                  absolute w-4 h-4 rounded-full bg-white top-0.5 transition-transform
                  ${doisFatoresAtivo ? 'translate-x-5' : 'translate-x-0.5'}
                `} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alterar Senha */}
      <button 
        onClick={onAlterarSenha}
        className="w-full flex items-center justify-between bg-[#0e1a2b] hover:bg-[#1a2942] border border-gray-700 rounded-lg px-4 py-3 transition-colors group"
      >
        <div className="flex items-center gap-2">
          <Key size={16} className="text-gray-400 group-hover:text-yellow-400 transition-colors" />
          <span className="text-gray-300 text-sm group-hover:text-white transition-colors">Alterar Senha</span>
        </div>
        <ChevronRight size={16} className="text-gray-500 group-hover:text-white transition-colors" />
      </button>

      {/* Linha de segurança adicional (opcional) */}
      <div className="mt-4 pt-3 border-t border-gray-800">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Última alteração de senha</span>
          <span>15/02/2026</span>
        </div>
      </div>
    </div>
  );
}