import { Plus, Play } from 'lucide-react';

interface BotoesAcaoProps {
  onAdicionarEquipamento?: () => void;
  onReativarMonitoramento?: () => void;
}

export default function BotoesAcao({ 
  onAdicionarEquipamento,
  onReativarMonitoramento
}: BotoesAcaoProps) {
  return (
    <div className="flex flex-col gap-3 w-[200px]">
      {/* Botão Adicionar Equipamento */}
      <button
        onClick={onAdicionarEquipamento}
        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 rounded-lg transition-colors group"
      >
        <Plus size={18} className="group-hover:scale-110 transition-transform" />
        <div className="flex flex-col items-start">
          <span className="text-xs text-blue-200">Adicionar</span>
          <span className="text-sm font-medium">Equipamento</span>
        </div>
      </button>

      {/* Botão Reativar Monitoramento */}
      <button
        onClick={onReativarMonitoramento}
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2.5 rounded-lg transition-colors group"
      >
        <Play size={18} className="group-hover:scale-110 transition-transform" />
        <div className="flex flex-col items-start">
          <span className="text-xs text-green-200">Reativar</span>
          <span className="text-sm font-medium">Monitoramento</span>
        </div>
      </button>
    </div>
  );
}