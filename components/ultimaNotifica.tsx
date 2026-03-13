import { AlertTriangle, Clock, ChevronRight } from 'lucide-react';

interface UltimaNotificacaoProps {
  titulo?: string;
  descricao?: string;
  unidade?: string;
  tempo?: string;
  onVerDetalhes?: () => void;
  onResolver?: () => void;
}

export default function UltimaNotificacao({ 
  titulo = "Servidor Central Offline",
  descricao = "Sistema detectou falha de conexão",
  unidade = "Unidade 4",
  tempo = "há 12 minutos",
  onVerDetalhes,
  onResolver
}: UltimaNotificacaoProps) {
  return (
    <div className="w-full  bg-[#040928]  rounded-2xl p-4 border border-[#050e4c]">
      {/* Título */}
      <h2 className="text-white text-sm font-medium mb-3">Última Notificação Crítica</h2>
      
      {/* Card de alerta */}
      <div className="bg-linear-to-br from-[#040928] to-[#1a1f3a] rounded-xl p-4 border-l-4 border-red-500">
        {/* Cabeçalho com ícone */}
        <div className="flex items-start gap-2 mb-2">
          <AlertTriangle size={18} className="text-red-500 flex-shrink-0 mt-0.5" />
          <h3 className="text-white text-base font-semibold">{titulo}</h3>
        </div>
        
        {/* Descrição */}
        <p className="text-gray-300 text-sm ml-6 mb-2">{descricao}</p>
        
        {/* Unidade e tempo */}
        <div className="flex items-center gap-3 ml-6 mb-4">
          <span className="text-gray-400 text-xs">{unidade}</span>
          <div className="flex items-center gap-1">
            <Clock size={12} className="text-gray-500" />
            <span className="text-gray-500 text-xs">- {tempo}</span>
          </div>
        </div>
        
        {/* Ações */}
        <div className="flex items-center gap-3 ml-6">
          <button 
            onClick={onVerDetalhes}
            className="text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors flex items-center gap-1"
          >
            Ver detalhes
            <ChevronRight size={12} />
          </button>
          <button 
            onClick={onResolver}
            className="text-green-400 hover:text-green-300 text-xs font-medium transition-colors"
          >
            Resolver
          </button>
        </div>
      </div>
    </div>
  );
}