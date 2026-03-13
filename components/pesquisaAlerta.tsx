import { Search } from 'lucide-react';

interface PesquisarEmpresaProps {
  placeholder?: string;
  onSearch?: (termo: string) => void;
  value?: string;
}

export default function PesquisarEmpresa({ 
  placeholder = "pesquisar empresa...",
  onSearch,
  value 
}: PesquisarEmpresaProps) {
  return (
    <div className="w-full mb-4 bg-[#040928] border border-[#050e4c] rounded-lg">
      <div className="relative">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={18} 
        />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onSearch?.(e.target.value)}
          className="w-full  text-white  rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
        />
      </div>
    </div>
  );
}