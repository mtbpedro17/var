import { Circle } from 'lucide-react';

interface Permissao {
    nome: string;
    descricao?: string;
}

interface PermissoesProps {
  permissoes?: Permissao[];
}

export default function Permissoes({ 
  permissoes = [
    { nome: "Permissão para alertas" },
    { nome: "Permissão de acesso à gestão" }
  ] 
}: PermissoesProps) {
  return (
    <div className="border-[#050e4c] border rounded-2xl shadow-xl bg-[#040928] p-5  w-full  mb-1.5">
      {/* Título */}
      <h2 className="text-white text-xl font-semibold mb-4">Permissões</h2>
      
      {/* Lista de Permissões */}
      <div className="space-y-3">
        {permissoes.map((permissao, index) => (
          <div key={index} className="flex items-center gap-3">
            <Circle size={18} className="text-gray-400" />
            <span className="text-white text-sm">{permissao.nome}</span>
          </div>
        ))}
      </div>
    </div>
  );
}