import { Download } from 'lucide-react';

interface HistoricoPagamentosProps {
  onFiltrarPeriodo?: (periodo: string) => void;
  onFiltrarStatus?: (status: string) => void;
  onExportar?: () => void;
}

export default function HistoricoPagamentos({
  onFiltrarPeriodo,
  onFiltrarStatus,
  onExportar
}: HistoricoPagamentosProps) {
  return (
    <div className=" w-full ">
      {/* Título */}
      <h2 className="text-white text-lg font-light mb-4">Histórico de Pagamentos</h2>
      
      {/* Filtros */}
      <div className="flex items-center justify-between gap-4">
        {/* Filtrar por período */}
        <div className='flex  gap-2'>
            <select
          onChange={(e) => onFiltrarPeriodo?.(e.target.value)}
          className="w-[200px]  text-white bg-[#040928]  border border-[#050e4c] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
        >
          <option value="">Filtrar: todos os períodos</option>
          <option value="hoje">Hoje</option>
          <option value="ontem">Ontem</option>
          <option value="esta-semana">Esta semana</option>
          <option value="este-mes">Este mês</option>
          <option value="este-ano">Este ano</option>
        </select>

        {/* Filtrar por status */}
        <select
          onChange={(e) => onFiltrarStatus?.(e.target.value)}
          className="w-[150px]  text-white bg-[#040928]  border border-[#050e4c] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
        >
          <option value="">Todos os status</option>
          <option value="pago">Pago</option>
          <option value="pendente">Pendente</option>
          <option value="falhado">Falhado</option>
          <option value="cancelado">Cancelado</option>
        </select>
        </div>

        {/* Botão Exportar */}
        <button
          onClick={onExportar}
          className="w-[200px]  bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white font-medium px-3 py-2 rounded-lg transition-colors text-xs border border-gray-700 flex items-center justify-center gap-2"
        >
          <Download size={16} />
          Exportar PDF&apos;s
        </button>
      </div>
    </div>
  );
}