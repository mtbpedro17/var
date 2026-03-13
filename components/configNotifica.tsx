import { Mail, Bell, Settings } from 'lucide-react';

interface ConfiguracaoItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  ativo?: boolean;
}

interface ConfiguracoesProps {
  configuracoes?: ConfiguracaoItem[];
  onToggle?: (id: string, ativo: boolean) => void;
}

export default function Configuracoes({ 
  configuracoes = [
    { id: "email", label: "Ativar notificações por e-mail", icon: <Mail size={18} />, ativo: false },
    { id: "todas", label: "Receber todas notificações", icon: <Bell size={18} />, ativo: true },
    { id: "prioridade", label: "Definir prioridade automática", icon: <Settings size={18} />, ativo: false }
  ],
  onToggle 
}: ConfiguracoesProps) {
  return (
    <div className="w-full  bg-[#040928]  rounded-2xl p-5 border border-[#050e4c]">
      {/* Título */}
      <h2 className="text-white text-xl font-semibold mb-4">Configurações</h2>
      
      {/* Lista de configurações */}
      <div className="space-y-3">
        {configuracoes.map((config) => (
          <label 
            key={config.id} 
            className="flex items-center justify-between p-3 bg-[#040928]  rounded-lg  cursor-pointer group border border-[#050e4c]"
          >
            <div className="flex items-center gap-3">
              <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
                {config.icon}
              </span>
              <span className="text-white text-sm">{config.label}</span>
            </div>
            
            {/* Toggle switch */}
            <div className="relative">
              <input 
                type="checkbox" 
                className="sr-only"
                checked={config.ativo}
                onChange={(e) => onToggle?.(config.id, e.target.checked)}
              />
              <div className={`
                w-10 h-5 rounded-full transition-colors cursor-pointer
                ${config.ativo ? 'bg-blue-600' : 'bg-gray-600'}
              `}>
                <div className={`
                  absolute w-4 h-4 rounded-full bg-white top-0.5 transition-transform
                  ${config.ativo ? 'translate-x-5' : 'translate-x-0.5'}
                `} />
              </div>
            </div>
          </label>
        ))}
      </div>

      {/* Botão salvar (opcional) */}
      <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg transition-colors">
        Salvar configurações
      </button>
    </div>
  );
}