import { Bell, Mail, MessageCircle, ChevronDown } from 'lucide-react';

export default function PreferenciasNotificacao() {
  return (
    <div className=" rounded-2xl p-5 w-full flex  justify-between gap-3">
      {/* Preferência de Notificação */}
     <div className="p-4 bg-[#040928] rounded-lg border border-[#050e4c] w-[600px] h-[200px]">
         <h2 className="text-white text-xl font-semibold mb-4">Preferência de Notificação</h2>
      
      {/* Opções de Notificação */}
      <div className="space-y-3 mb-6">
        {/* Ativar Alertas */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-4 h-4 accent-blue-600 rounded"
          />
          <Bell size={18} className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-white text-sm">Ativar Alertas</span>
        </label>
        
        {/* Receber notificações por e-mail */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-4 h-4 accent-blue-600 rounded"
          />
          <Mail size={18} className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-white text-sm">Receber notificações por e-mail</span>
        </label>
        
        {/* Receber notificações SMS */}
        <label className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-4 h-4 accent-blue-600 rounded"
          />
          <MessageCircle size={18} className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-white text-sm">Receber notificações SMS</span>
        </label>
      </div>
     </div>
      
      <div className="p-4 bg-[#040928] rounded-lg border border-[#050e4c] w-[600px] h-[200px]">
        {/* Idioma */}
      <h2 className="text-white text-xl font-semibold mb-4">Idioma</h2>
      
      {/* Idioma Selecionado */}
      <div className="mb-3">
        <p className="text-gray-400 text-sm mb-2">Selecionado: <span className="text-white">Português</span></p>
        
        {/* Select de Idioma */}
        <div className="relative">
          <select 
            className="w-full bg-[#040928] text-white border border-[#050e4c] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors appearance-none cursor-pointer"
            defaultValue="pt"
          >
            <option value="pt">Português</option>
            <option value="en">Inglês</option>
            <option value="es">Espanhol</option>
            <option value="fr">Francês</option>
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>
        <p className="text-gray-500 text-xs mt-1">Escolha um idioma ▼</p>
      </div>
      </div>
    </div>
  );
}