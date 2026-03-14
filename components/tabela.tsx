import { Circle, CirclePause, Power } from 'lucide-react';

export interface TabelaResumo {
    empresa: string;
    licencaVendida: number;
    status: "Pago" | "Pendente" | "Suspenso" | "Falhado";
    totalPago: string;
}

interface TabelaResumoProps {
  dados: TabelaResumo[];
}

export default function Tabela({ dados }: TabelaResumoProps) {
  const statusColor = (status: string) => {
    switch (status) {
      case "Pago": return "text-green-400";
      case "Pendente": return "text-yellow-400";
      case "Suspenso": return "text-red-500";
      case "Falhado": return "text-red-300";
      default: return "text-gray-300";
    }
  };

  const statusIcon = (status: string) => {
    switch (status) {
      case "Pago": return <Circle size={10} className="fill-green-400 text-green-400" />;
      case "Pendente": return <CirclePause size={14} className="text-yellow-400" />;
      case "Suspenso": return <Power size={12} className="text-red-500" />;
      case "Falhado": return <Circle size={10} className="fill-red-300 text-red-300" />;
      default: return null;
    }
  };

  return (
    <div className="w-full rounded-2xl">
      <table className="w-full text-left text-white border-collapse rounded-2xl">
        <thead className="sticky top-0 z-10 backdrop-blur-sm">
          <tr className="text-gray-200 border-b-2 border-[#050e4c]">
            <th className="py-3 px-4 text-lg font-light">Empresa</th>
            <th className="py-3 px-4 text-lg font-light">Licenças vendidas</th>
            <th className="py-3 px-4 text-lg font-light">Status</th>
            <th className="py-3 px-4 text-lg font-light">Total Pago</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
              <td className="py-3 px-4 text-sm font-light">{item.empresa}</td>
              <td className="py-3 px-4 text-sm font-light">{item.licencaVendida}</td>
              <td className={`py-3 px-4 font-light text-sm flex items-center gap-1.5 ${statusColor(item.status)}`}>
                {statusIcon(item.status)}
                {item.status}
              </td>
              <td className="py-3 px-4 text-sm font-light">{item.totalPago}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}