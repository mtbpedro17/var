import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

interface FiltrosAlertasProps {
  onFiltroChange?: (filtro: string) => void;
  filtroAtivo?: string;
}

export default function FiltrosAlertas({ 
  onFiltroChange,
  filtroAtivo = "alertas" 
}: FiltrosAlertasProps) {
  
  const filtros = [
    { id: "criticos", label: "Críticos", icon: AlertTriangle, cor: "text-red-500" },
    { id: "alertas", label: "Alertas", icon: AlertCircle, cor: "text-yellow-500" },
    { id: "informacoes", label: "Informações", icon: Info, cor: "text-blue-500" }
  ];

  return (
    <div className="flex gap-2 rounded-lg p-1 w-full">
      {filtros.map((filtro) => {
        const Icon = filtro.icon;
        const isActive = filtroAtivo === filtro.id;
        
        return (
          <button
            key={filtro.id}
            onClick={() => onFiltroChange?.(filtro.id)}
            className={`
              flex items-center gap-2 px-5 py-2 rounded-md text-lg font-medium transition-all border border-gray-700
              ${isActive 
                ? 'bg-[#1a2942] text-white' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }
            `}
          >
            <Icon size={16} className={filtro.cor} />
            {filtro.label}
          </button>
        );
      })}
    </div>
  );
}