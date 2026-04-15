'use client'
import { useState } from 'react';
import { Monitor, Sun, Moon } from 'lucide-react';

type TemaOpcao = 'padrao' | 'claro' | 'escuro';

export default function Tema() {
  const [temaSelecionado, setTemaSelecionado] = useState<TemaOpcao>('escuro');

  const opcoes: { id: TemaOpcao; label: string; icon: React.ReactNode }[] = [
    { id: 'padrao', label: 'Padrão', icon: <Monitor size={18} className="text-gray-400" /> },
    { id: 'claro', label: 'Claro', icon: <Sun size={18} className="text-gray-400" /> },
    { id: 'escuro', label: 'Escuro', icon: <Moon size={18} className="text-gray-400" /> },
  ];

  return (
    <div className="border-[#050e4c] border rounded-2xl shadow-xl bg-[#040928] p-5 w-full mt-1">
      <h2 className="text-white text-xl font-semibold mb-4">Tema</h2>
      
      <div className="space-y-3">
        {opcoes.map((opcao) => (
          <div
            key={opcao.id}
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setTemaSelecionado(opcao.id)}
          >
            <div className="flex items-center gap-3">
              {/* Radio button visual */}
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                temaSelecionado === opcao.id ? 'border-blue-500 bg-blue-500/20' : 'border-gray-500 bg-transparent'
              }`}>
                {temaSelecionado === opcao.id && (
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                )}
              </div>
              {opcao.icon}
              <span className="text-white text-sm">{opcao.label}</span>
            </div>
            {/* Switch funcional */}
            <button
              onClick={(e) => { e.stopPropagation(); setTemaSelecionado(opcao.id); }}
              className={`relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${
                temaSelecionado === opcao.id ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                  temaSelecionado === opcao.id ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
