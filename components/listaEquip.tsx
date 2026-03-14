// listaEquip.tsx
import { useState } from 'react';
import { Wifi, AlertTriangle, PowerOff, Clock } from 'lucide-react';
import DetalheEquipamento from './detalhEquipam';

export interface Equipamento {
  nome: string;
  local: string;
  status: 'online' | 'offline' | 'aviso';
  detalhe: string;
  aviso: string | null;
  // Novos campos para detalhes (opcionais para manter compatibilidade)
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
}

interface ListaEquipamentosProps {
  equipamentos: Equipamento[];
}

export default function ListaEquipamentos({ equipamentos }: ListaEquipamentosProps) {
  const [equipamentoSelecionado, setEquipamentoSelecionado] = useState<Equipamento | null>(null);

  const getStatusConfig = (status: Equipamento['status']) => {
    switch(status) {
      case 'online':
        return {
          cor: 'text-green-500',
          bg: 'bg-green-500/10',
          icon: <Wifi size={14} className="text-green-500" />,
          label: 'Online'
        };
      case 'offline':
        return {
          cor: 'text-red-500',
          bg: 'bg-red-500/10',
          icon: <PowerOff size={14} className="text-red-500" />,
          label: 'Offline'
        };
      case 'aviso':
        return {
          cor: 'text-yellow-500',
          bg: 'bg-yellow-500/10',
          icon: <AlertTriangle size={14} className="text-yellow-500" />,
          label: 'Aviso'
        };
    }
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-3">
        {equipamentos.map((eq, index) => {
          const status = getStatusConfig(eq.status);
          
          return (
            <div 
              key={index} 
              className="bg-[#0e1a2b] rounded-xl p-4 border border-gray-800 hover:border-gray-700 transition-colors cursor-pointer"
              onClick={() => setEquipamentoSelecionado(eq)}
            >
              {/* Área do gráfico/imagem */}
              <div className='bg-gradient-to-br from-blue-500 to-blue-600 w-full h-[200px] rounded-lg mb-3 flex items-center justify-center'>
                <span className="text-white text-2xl font-bold">{eq.nome.charAt(0)}</span>
              </div>
              
              <div className="flex flex-col gap-2">
                {/* Título e local */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-white text-base font-medium">{eq.nome}</h3>
                    <span className="text-gray-500 text-xs">- {eq.local}</span>
                  </div>
                  
                  {/* Status badge */}
                  <div className={`flex items-center gap-1 px-2 py-1 rounded-full ${status.bg}`}>
                    {status.icon}
                    <span className={`text-xs font-medium ${status.cor}`}>{status.label}</span>
                  </div>
                </div>

                {/* Detalhes */}
                <div className="flex items-center gap-2 mt-1">
                  <Clock size={12} className="text-gray-500" />
                  <span className="text-gray-400 text-xs">{eq.detalhe}</span>
                </div>
                
                {/* Aviso (se houver) */}
                {eq.aviso && (
                  <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded w-fit mt-1">
                    <AlertTriangle size={10} className="text-yellow-500" />
                    <span className="text-yellow-500 text-xs">{eq.aviso}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de detalhes do equipamento */}
      {equipamentoSelecionado && (
        <DetalheEquipamento 
          equipamento={equipamentoSelecionado}
          onFechar={() => setEquipamentoSelecionado(null)}
        />
      )}
    </>
  );
}