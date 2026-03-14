'use client'
import { UserX, Building2, MapPin, Calendar, Trash2, MoreHorizontal, Eye, UserMinus } from 'lucide-react';

interface FuncionarioInativo {
  funcionario: string;
  empresaCargo: string;
  local: string;
  status: "Inativo" | "Suspenso";
  desde: string;
}

interface FuncionariosInativosProps {
  dados?: FuncionarioInativo[];
}

export default function FuncionariosInativos({ 
  dados = [
    { funcionario: "Aldair Da Cruz", empresaCargo: "Kituxi Tech", local: "Luanda", status: "Inativo", desde: "07/12/2025 10:48" },
    { funcionario: "Beatriz Silva", empresaCargo: "Deloitte", local: "Luanda", status: "Suspenso", desde: "07/12/2025 10:48" },
    { funcionario: "Aldair Da Cruz", empresaCargo: "Kituxi Tech", local: "Luanda", status: "Inativo", desde: "07/12/2025 10:48" },
    { funcionario: "Aldair Da Cruz", empresaCargo: "Kituxi Tech", local: "Luanda", status: "Inativo", desde: "07/12/2025 10:48" },
    { funcionario: "Aldair Da Cruz", empresaCargo: "Kituxi Tech", local: "Luanda", status: "Inativo", desde: "07/12/2025 10:48" },
    { funcionario: "Aldair Da Cruz", empresaCargo: "Kituxi Tech", local: "Luanda", status: "Inativo", desde: "07/12/2025 10:48" },
    { funcionario: "Aldair Da Cruz", empresaCargo: "Kituxi Tech", local: "Luanda", status: "Inativo", desde: "07/12/2025 10:48" }
  ] 
}: FuncionariosInativosProps) {

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Inativo": return "text-gray-400 bg-gray-500/10";
      case "Suspenso": return "text-orange-400 bg-orange-500/10";
      default: return "text-gray-400 bg-gray-500/10";
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "Inativo": return <UserX size={12} className="text-gray-400" />;
      case "Suspenso": return <UserMinus size={12} className="text-orange-400" />;
      default: return null;
    }
  };

  return (
    <div className="w-full h-[300px] bg-[#040928] border border-[#050e4c] rounded-2xl p-4 flex flex-col">
      {/* Título (fixo) */}
      <div className="flex items-center gap-2 mb-4 flex-shrink-0">
        <UserX size={18} className="text-gray-400" />
        <h2 className="text-white text-lg font-semibold">Funcionários Inativos/suspensos</h2>
      </div>

      {/* Cabeçalho da tabela (fixo) */}
      <div className="grid grid-cols-6 gap-2 mb-2 px-2 flex-shrink-0">
        <span className="text-gray-500 text-xs font-medium col-span-1">Funcionário</span>
        <span className="text-gray-500 text-xs font-medium col-span-1">Empresa/cargo</span>
        <span className="text-gray-500 text-xs font-medium col-span-1">Local</span>
        <span className="text-gray-500 text-xs font-medium col-span-1">Status</span>
        <span className="text-gray-500 text-xs font-medium col-span-1">Desde</span>
        <span className="text-gray-500 text-xs font-medium col-span-1 text-center">Ações</span>
      </div>

      {/* Área de scroll para as linhas */}
      <div 
        className="flex-1 overflow-y-auto min-h-0"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
        }}
      >
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <div className="space-y-1 pr-1">
          {dados.map((item, index) => (
            <div key={index} className="grid grid-cols-6 gap-2 px-2 py-2 hover:bg-white/5 rounded-lg transition-colors">
              {/* Funcionário */}
              <div className="col-span-1 flex items-center gap-1">
                <span className="text-white text-xs truncate">{item.funcionario}</span>
              </div>

              {/* Empresa/cargo */}
              <div className="col-span-1 flex items-center gap-1">
                <Building2 size={10} className="text-gray-500 flex-shrink-0" />
                <span className="text-gray-300 text-xs truncate">{item.empresaCargo}</span>
              </div>

              {/* Local */}
              <div className="col-span-1 flex items-center gap-1">
                <MapPin size={10} className="text-gray-500 flex-shrink-0" />
                <span className="text-gray-300 text-xs">{item.local}</span>
              </div>

              {/* Status */}
              <div className="col-span-1">
                <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full ${getStatusColor(item.status)}`}>
                  {getStatusIcon(item.status)}
                  <span className="text-xs">{item.status}</span>
                </div>
              </div>

              {/* Desde */}
              <div className="col-span-1 flex items-center gap-1">
                <Calendar size={10} className="text-gray-500 flex-shrink-0" />
                <span className="text-gray-400 text-xs">{item.desde}</span>
              </div>

              {/* Ações */}
              <div className="col-span-1 flex items-center justify-center gap-2">
                <button className="text-gray-500 hover:text-red-400 transition-colors">
                  <Trash2 size={14} />
                </button>
                <button className="text-gray-500 hover:text-blue-400 transition-colors">
                  <Eye size={14} />
                </button>
                <button className="text-gray-500 hover:text-gray-300 transition-colors">
                  <MoreHorizontal size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rodapé (fixo) */}
      <div className="mt-3 pt-2 border-t border-gray-800 flex justify-between items-center flex-shrink-0">
        <span className="text-gray-500 text-xs">Total: {dados.length} funcionários</span>
        <button className="text-blue-400 hover:text-blue-300 text-xs flex items-center gap-1">
          Ver todos
          <MoreHorizontal size={12} />
        </button>
      </div>
    </div>
  );
}