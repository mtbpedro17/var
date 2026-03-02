import { Monitor, Sun, Moon } from 'lucide-react';

export default function Tema() {
  return (
    <div className="border-[#050e4c] border rounded-2xl shadow-xl bg-[#040928] p-5  w-full mt-1">
      {/* Título */}
      <h2 className="text-white text-xl font-semibold mb-4">Tema</h2>
      
      {/* Opções de Tema */}
      <div className="space-y-3">
        {/* Tema Padrão */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full border-2 border-gray-500 bg-transparent"></div>
          <Monitor size={18} className="text-gray-400" />
          <span className="text-white text-sm">Padrão</span>
        </div>
        
        {/* Tema Claro */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full border-2 border-gray-500 bg-transparent"></div>
          <Sun size={18} className="text-gray-400" />
          <span className="text-white text-sm">Claro</span>
        </div>
        
        {/* Tema Escuro */}
        <div className="flex items-center gap-3">
          <div className="w-4 h-4 rounded-full border-2 border-blue-500 bg-blue-500/20">
            <div className="w-2 h-2 rounded-full bg-blue-500 m-[3px]"></div>
          </div>
          <Moon size={18} className="text-gray-400" />
          <span className="text-white text-sm">Escuro</span>
        </div>
      </div>
    </div>
  );
}