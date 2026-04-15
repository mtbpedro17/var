'use client'
import { useState } from 'react';

interface Permissao {
    nome: string;
    descricao?: string;
    ativo?: boolean;
}

interface PermissoesProps {
  permissoes?: Permissao[];
}

export default function Permissoes({ 
  permissoes: permissoesIniciais = [
    { nome: "Permissão para alertas", ativo: true },
    { nome: "Permissão de acesso à gestão", ativo: false }
  ] 
}: PermissoesProps) {
  const [permissoes, setPermissoes] = useState(permissoesIniciais);

  const togglePermissao = (index: number) => {
    setPermissoes(prev => prev.map((p, i) => 
      i === index ? { ...p, ativo: !p.ativo } : p
    ));
  };

  return (
    <div className="border-[#050e4c] border rounded-2xl shadow-xl bg-[#040928] p-5 w-full mb-1.5">
      <h2 className="text-white text-xl font-semibold mb-4">Permissões</h2>
      
      <div className="space-y-3">
        {permissoes.map((permissao, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-white text-sm">{permissao.nome}</span>
            {/* Switch funcional */}
            <button
              onClick={() => togglePermissao(index)}
              className={`relative w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none ${
                permissao.ativo ? 'bg-blue-600' : 'bg-gray-600'
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow transition-transform duration-200 ${
                  permissao.ativo ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
