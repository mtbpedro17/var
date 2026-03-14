// detalhEquipam.tsx
import { X, MapPin, Calendar, Clock, FileText, Wifi, AlertTriangle, PowerOff, Building2 } from 'lucide-react';

interface DetalheEquipamentoProps {
  equipamento: {
    nome: string;
    local: string;
    status: 'online' | 'offline' | 'aviso';
    detalhe: string;
    aviso: string | null;
    historico?: {
      ultimaManutencao: string;
      proximaManutencao: string;
      tempoOperacao: string;
    };
    localizacaoDetalhada?: {
      setor: string;
      andar: string;
      predio: string;
    };
    descricao?: string;
    ultimaIntervencao?: {
      data: string;
      tecnico: string;
      descricao: string;
    };
  };
  onFechar: () => void;
}

export default function DetalheEquipamento({ equipamento, onFechar }: DetalheEquipamentoProps) {
  const getStatusConfig = (status: string) => {
    switch(status) {
      case 'online':
        return { cor: 'text-green-500', bg: 'bg-green-500/10', icon: <Wifi size={20} className="text-green-500" />, label: 'Online' };
      case 'offline':
        return { cor: 'text-red-500', bg: 'bg-red-500/10', icon: <PowerOff size={20} className="text-red-500" />, label: 'Offline' };
      case 'aviso':
        return { cor: 'text-yellow-500', bg: 'bg-yellow-500/10', icon: <AlertTriangle size={20} className="text-yellow-500" />, label: 'Aviso' };
      default:
        return { cor: 'text-gray-500', bg: 'bg-gray-500/10', icon: null, label: status };
    }
  };

  const status = getStatusConfig(equipamento.status);

  // Dados padrão para quando não houver informações detalhadas
  const historico = equipamento.historico || {
    ultimaManutencao: "Não disponível",
    proximaManutencao: "Não disponível",
    tempoOperacao: "Não disponível"
  };

  const localizacao = equipamento.localizacaoDetalhada || {
    predio: "Não disponível",
    setor: "Não disponível",
    andar: "Não disponível"
  };

  const descricao = equipamento.descricao || "Descrição não disponível para este equipamento.";

  const intervencao = equipamento.ultimaIntervencao || {
    data: "Não disponível",
    tecnico: "Não disponível",
    descricao: "Não disponível"
  };

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={onFechar}>
      <div 
        className="bg-gradient-to-br from-[#040928] to-[#0e1a3a] border border-[#050e4c] rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho */}
        <div className="sticky top-0 bg-[#040928] border-b border-[#050e4c] p-6 z-10">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-4 rounded-2xl ${status.bg}`}>
                {status.icon}
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold">{equipamento.nome}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin size={14} className="text-gray-500" />
                  <span className="text-gray-400 text-sm">{equipamento.local}</span>
                </div>
              </div>
            </div>
            <button 
              onClick={onFechar}
              className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-lg"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6 space-y-4">
          {/* Grid de 2 colunas */}
          <div className="grid grid-cols-2 gap-4">
            {/* Histórico */}
            <div className="bg-[#0e1a2b] rounded-xl p-4 border border-gray-800">
              <div className="flex items-center gap-2 mb-3">
                <Calendar size={16} className="text-blue-400" />
                <h3 className="text-white text-sm font-medium">Histórico</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Última manutenção:</span>
                  <span className="text-white">{historico.ultimaManutencao}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Próxima manutenção:</span>
                  <span className="text-white">{historico.proximaManutencao}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Tempo de operação:</span>
                  <span className="text-white">{historico.tempoOperacao}</span>
                </div>
              </div>
            </div>

            {/* Localização Detalhada */}
            <div className="bg-[#0e1a2b] rounded-xl p-4 border border-gray-800">
              <div className="flex items-center gap-2 mb-3">
                <Building2 size={16} className="text-purple-400" />
                <h3 className="text-white text-sm font-medium">Localização</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Prédio:</span>
                  <span className="text-white">{localizacao.predio}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Setor:</span>
                  <span className="text-white">{localizacao.setor}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Andar:</span>
                  <span className="text-white">{localizacao.andar}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="bg-[#0e1a2b] rounded-xl p-4 border border-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <FileText size={16} className="text-green-400" />
              <h3 className="text-white text-sm font-medium">Descrição</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {descricao}
            </p>
          </div>

          {/* Última Intervenção Técnica */}
          <div className="bg-[#0e1a2b] rounded-xl p-4 border border-gray-800">
            <div className="flex items-center gap-2 mb-3">
              <Clock size={16} className="text-yellow-400" />
              <h3 className="text-white text-sm font-medium">Última Intervenção Técnica</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-xs mb-1">Data</p>
                <p className="text-white text-sm">{intervencao.data}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs mb-1">Técnico</p>
                <p className="text-white text-sm">{intervencao.tecnico}</p>
              </div>
              <div className="col-span-2">
                <p className="text-gray-400 text-xs mb-1">Descrição</p>
                <div className="bg-[#1a2942] p-3 rounded-lg">
                  <p className="text-gray-300 text-sm">{intervencao.descricao}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Status e alerta */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-sm">Status:</span>
              <div className={`flex items-center gap-1 px-3 py-1 rounded-full ${status.bg}`}>
                {status.icon}
                <span className={`text-sm font-medium ${status.cor}`}>{status.label}</span>
              </div>
            </div>
            {equipamento.aviso && (
              <div className="flex items-center gap-1 bg-yellow-500/10 px-3 py-1 rounded-full">
                <AlertTriangle size={14} className="text-yellow-500" />
                <span className="text-yellow-500 text-xs">{equipamento.aviso}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}