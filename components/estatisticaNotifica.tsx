import { Circle } from 'lucide-react';

interface EstatisticaItem {
  cor: string;
  label: string;
  valor: number;
}

interface EstatisticasAlertasProps {
  dados?: EstatisticaItem[];
  total?: number;
}

export default function EstatisticasAlertas({ 
  dados = [
    { cor: "bg-red-500", label: "Críticos", valor: 6 },
    { cor: "bg-orange-500", label: "Alertas", valor: 29 },
    { cor: "bg-gray-400", label: "Informativas", valor: 40 }
  ],
  total = 56
}: EstatisticasAlertasProps) {
  return (
    <div className="w-full bg-[#040928] rounded-2xl p-4 border border-[#050e4c]">
      {/* Título corrigido: Estatísticas */}
      <h2 className="text-white text-xl font-semibold mb-4">Estatísticas</h2>
      
      {/* Lista de estatísticas — sem o item "Total" duplicado */}
      <div className="space-y-3">
        {dados.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${item.cor}`}> <Circle size={12} /> </div>
              <span className="text-gray-300 text-sm">{item.label}</span>
            </div>
            <span className="text-white text-sm font-medium">{item.valor}</span>
          </div>
        ))}
      </div>

      {/* Único total de alertas — cor azul conforme relatório */}
      <div className="mt-4 pt-3 border-t border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-blue-400 text-xs font-medium">Total de alertas</span>
          <span className="text-blue-400 text-lg font-bold">{total}</span>
        </div>
      </div>
    </div>
  );
}