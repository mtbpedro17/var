'use client'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Users } from 'lucide-react';

interface DistribuicaoItem {
  provincia: string;
  quantidade: number;
}

interface DistribuicaoFuncionariosProps {
  dados?: DistribuicaoItem[];
  total?: number;
}

export default function DistribuicaoFuncionarios({ 
  dados = [
    { provincia: "Luanda", quantidade: 457 },
    { provincia: "Cuando Cubango", quantidade: 356 },
    { provincia: "Huila", quantidade: 332 },
    { provincia: "Inhambane", quantidade: 267 },
    { provincia: "Benguela", quantidade: 389 },
    { provincia: "Moxico Leste", quantidade: 344 },
    { provincia: "Malanje", quantidade: 321 },
    { provincia: "Luanda", quantidade: 457 },
    { provincia: "Cuando Cubango", quantidade: 356 },
    { provincia: "Huila", quantidade: 332 },
    { provincia: "Inhambane", quantidade: 267 },
    { provincia: "Benguela", quantidade: 389 },
    { provincia: "Moxico Leste", quantidade: 344 },
    { provincia: "Malanje", quantidade: 321 },
  ],
  total = dados.reduce((acc, item) => acc + item.quantidade, 0)
}: DistribuicaoFuncionariosProps) {

  const cores = ["#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#06B6D4", "#3B82F6", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899", "#06B6D4"];

  return (
    <div className="w-[500px] h-[240px]  bg-[#040928] border border-[#050e4c] rounded-2xl p-4 ">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5">
          <Users size={18} className="text-blue-400" />
          <h2 className="text-white text-xl font-medium">Distribuição</h2>
        </div>
        <span className="text-blue-400 text-xl font-medium">Total: {total}</span>
      </div>

      {/* Layout em linha: gráfico + lista com scroll */}
      <div className="flex gap-4 h-[160px]">
        {/* Gráfico Pizza - AUMENTADO */}
        <div className="w-[180px] h-[160px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dados}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={75}
                paddingAngle={2}
                dataKey="quantidade"
              >
                {dados.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={cores[index % cores.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Lista de províncias - AUMENTADA */}
        <div className="flex-1 h-[160px] overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <div className="flex flex-col gap-2 pr-2">
            {dados.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-xs ">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cores[index % cores.length] }}></div>
                  <span className="text-gray-300 mr-2">{item.provincia}</span>
                </div>
                <span className="text-white font-semibold">{item.quantidade}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}