import { Search } from 'lucide-react';

interface FiltrosEmpresasProps {
  onStatusChange?: (status: string) => void;
  onLocalChange?: (local: string) => void;
  onDesignacaoChange?: (designacao: string) => void;
  onSearchChange?: (search: string) => void;
}

export default function FiltrosEmpresas({
  onStatusChange,
  onLocalChange,
  onDesignacaoChange,
  onSearchChange
}: FiltrosEmpresasProps) {
  return (
    <div className="w-full  p-4 mb-4">
      <div className="flex items-center gap-[360px]">
        {/* Select Status */}
        <div className='flex gap-1'>
            <div className="flex-1 min-w-[150px]">
          <label className="block text-gray-400 text-xs mb-1">Status</label>
          <select 
            onChange={(e) => onStatusChange?.(e.target.value)}
            className="w-[200px] bg-[#040928] text-white border border-[#1a2942] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="">Todos</option>
            <option value="Ativo">Ativo</option>
            <option value="Inativo">Inativo</option>
            <option value="Em pausa">Em pausa</option>
          </select>
        </div>

        {/* Select Local */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-gray-400 text-xs mb-1">Local</label>
          <select 
            onChange={(e) => onLocalChange?.(e.target.value)}
            className="w-[200px] bg-[#040928] text-white border border-[#1a2942] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="">Todos</option>
            <option value="Luanda">Luanda</option>
            <option value="Huambo">Huambo</option>
            <option value="Malanje">Malanje</option>
            <option value="Cabinda">Cabinda</option>
            <option value="Moxico">Moxico</option>
            <option value="Icolo e Bengo">Icolo e Bengo</option>
          </select>
        </div>

        {/* Select Designação */}
        <div className="flex-1 min-w-[150px]">
          <label className="block text-gray-400 text-xs mb-1">Designação</label>
          <select 
            onChange={(e) => onDesignacaoChange?.(e.target.value)}
            className="w-[200px] bg-[#040928] text-white border border-[#1a2942] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          >
            <option value="">Todas</option>
            <option value="Tecnologia">Tecnologia</option>
            <option value="Comunicações">Comunicações</option>
            <option value="Informática">Informática</option>
            <option value="Cabiamento">Cabiamento</option>
            <option value="Infraestrutura">Infraestrutura</option>
          </select>
        </div>
        </div>

        {/* Campo de Pesquisa */}
        <div className="flex-1 min-w-[200px]">
          <label className="block text-gray-400 text-xs mb-1">Pesquisar</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="pesquisar empresa..."
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-[200px] bg-[#040928] text-white border border-[#1a2942] rounded-lg pl-10 pr-3 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
      </div>
    </div>
  );
}