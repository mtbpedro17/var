import { Search } from 'lucide-react';

interface PesquisarEquipamentoProps {
  placeholder?: string;
  onSearch?: (termo: string) => void;
}

export default function PesquisarEquipamento({ 
  placeholder = "pesquisar equipamento...",
  onSearch 
}: PesquisarEquipamentoProps) {
  return (
    <div className="w-full">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full bg-[#040928] text-white border border-[#050e4c] rounded-lg pl-10 pr-4 py-3 text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
    </div>
  );
}