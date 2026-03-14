'use client'
import { Bell, Mail, Globe, Sun, Moon, Monitor } from 'lucide-react';

interface PreferenciasProps {
  onToggleAlerta?: (ativo: boolean) => void;
  onToggleEmail?: (ativo: boolean) => void;
  onIdiomaChange?: (idioma: string) => void;
  onTemaChange?: (tema: string) => void;
  alertaAtivo?: boolean;
  emailAtivo?: boolean;
  idiomaSelecionado?: string;
  temaSelecionado?: string;
}

export default function Preferencias({ 
  alertaAtivo = true,
  emailAtivo = true,
  idiomaSelecionado = "Português (PT)",
  temaSelecionado = "Padrão",
  onToggleAlerta,
  onToggleEmail,
  onIdiomaChange,
  onTemaChange
}: PreferenciasProps) {
  return (
    <div className="w-[500px] h-full rounded-2xl p-5 bg-[#040928] border border-[#050e4c]">
      {/* Título */}
      <h2 className="text-white text-xl font-semibold mb-4">Preferências</h2>

      {/* Opções de notificação */}
      <div className="space-y-3 mb-5">
        {/* Receber alertas críticos */}
        <label className="flex items-center justify-between cursor-pointer group">
          <div className="flex items-center gap-2">
            <Bell size={16} className="text-gray-400 group-hover:text-red-400 transition-colors" />
            <span className="text-gray-300 text-sm">Receber alertas críticos</span>
          </div>
          <div className="relative">
            <input 
              type="checkbox" 
              className="sr-only"
              checked={alertaAtivo}
              onChange={(e) => onToggleAlerta?.(e.target.checked)}
            />
            <div className={`
              w-10 h-5 rounded-full transition-colors cursor-pointer
              ${alertaAtivo ? 'bg-red-500' : 'bg-gray-600'}
            `}>
              <div className={`
                absolute w-4 h-4 rounded-full bg-white top-0.5 transition-transform
                ${alertaAtivo ? 'translate-x-5' : 'translate-x-0.5'}
              `} />
            </div>
          </div>
        </label>

        {/* Receber notificações por email */}
        <label className="flex items-center justify-between cursor-pointer group">
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-gray-400 group-hover:text-blue-400 transition-colors" />
            <span className="text-gray-300 text-sm">Receber notificações por email</span>
          </div>
          <div className="relative">
            <input 
              type="checkbox" 
              className="sr-only"
              checked={emailAtivo}
              onChange={(e) => onToggleEmail?.(e.target.checked)}
            />
            <div className={`
              w-10 h-5 rounded-full transition-colors cursor-pointer
              ${emailAtivo ? 'bg-blue-500' : 'bg-gray-600'}
            `}>
              <div className={`
                absolute w-4 h-4 rounded-full bg-white top-0.5 transition-transform
                ${emailAtivo ? 'translate-x-5' : 'translate-x-0.5'}
              `} />
            </div>
          </div>
        </label>
      </div>

      {/* Idioma */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Globe size={16} className="text-gray-400" />
          <span className="text-gray-300 text-sm">Idioma</span>
        </div>
        <select 
          value={idiomaSelecionado}
          onChange={(e) => onIdiomaChange?.(e.target.value)}
          className="w-full bg-[#040928] text-white border border-[#050e4c] rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
        >
          <option value="Português (PT)">Português (PT)</option>
          <option value="Português (BR)">Português (BR)</option>
          <option value="English">English</option>
          <option value="Español">Español</option>
        </select>
      </div>

      {/* Tema */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Monitor size={16} className="text-gray-400" />
          <span className="text-gray-300 text-sm">Tema</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onTemaChange?.("Padrão")}
            className={`
              flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors
              ${temaSelecionado === 'Padrão' 
                ? 'bg-blue-600 text-white' 
                : 'bg-[#040928] text-gray-400 hover:bg-[#1a2942] hover:text-white border border-[#050e4c]'
              }
            `}
          >
            <Monitor size={14} />
            Padrão
          </button>
          <button
            onClick={() => onTemaChange?.("Claro")}
            className={`
              flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors
              ${temaSelecionado === 'Claro' 
                ? 'bg-blue-600 text-white' 
                : 'bg-[#040928] text-gray-400 hover:bg-[#1a2942] hover:text-white border border-[#050e4c]'
              }
            `}
          >
            <Sun size={14} />
            Claro
          </button>
          <button
            onClick={() => onTemaChange?.("Escuro")}
            className={`
              flex-1 flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors
              ${temaSelecionado === 'Escuro' 
                ? 'bg-blue-600 text-white' 
                : 'bg-[#040928] text-gray-400 hover:bg-[#1a2942] hover:text-white border border-[#050e4c]'
              }
            `}
          >
            <Moon size={14} />
            Escuro
          </button>
        </div>
      </div>
    </div>
  );
}