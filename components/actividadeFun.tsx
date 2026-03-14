/* eslint-disable react-hooks/static-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface AtividadesFuncionarioProps {
  dados?: {
    dia: string;
    acessos: number;
    acoes: number;
    tentativas: number;
  }[];
}

export default function AtividadesFuncionario({ 
  dados = [
    { dia: "Seg", acessos: 84, acoes: 0, tentativas: 0 },
    { dia: "Ter", acessos: 0, acoes: 10, tentativas: 0 },
    { dia: "Qua", acessos: 0, acoes: 0, tentativas: 0 },
    { dia: "Qui", acessos: 0, acoes: 15, tentativas: 0 },
    { dia: "Sex", acessos: 0, acoes: 9, tentativas: 0 },
    { dia: "Sáb", acessos: 0, acoes: 0, tentativas: 3 },
    { dia: "Dom", acessos: 0, acoes: 5, tentativas: 0 }
  ] 
}: AtividadesFuncionarioProps) {

  // Dados para os cards inferiores
  const cardsInfo = [
    { dia: "Seg", numero: 84, tipo: "acessos", descricao: "Acessos", subDescricao: "Feto por funcionários", cor: "text-blue-400", bg: "bg-blue-500/20" },
    { dia: "Ter", numero: 10, tipo: "acoes", descricao: "", subDescricao: "" },
    { dia: "Qua", numero: 0, tipo: "vazio", descricao: "", subDescricao: "" },
    { dia: "Qui", numero: 15, tipo: "acoes", descricao: "Ações Realizadas", subDescricao: "Ações manipuladas", cor: "text-green-400", bg: "bg-green-500/20" },
    { dia: "Sex", numero: 9, tipo: "acoes", descricao: "", subDescricao: "" },
    { dia: "Sáb", numero: 3, tipo: "tentativas", descricao: "Tentativas de Acessos", subDescricao: "Bloqueadas", cor: "text-red-400", bg: "bg-red-500/20" },
    { dia: "Dom", numero: 5, tipo: "acoes", descricao: "", subDescricao: "" }
  ];

   
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#1a2942] p-2 rounded-lg border border-gray-700 shadow-xl">
          <p className="text-white text-xs font-medium mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            entry.value > 0 && (
              <div key={index} className="flex items-center gap-2 text-xs">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></div>
                <span className="text-gray-300 text-[10px]">{entry.name}:</span>
                <span className="text-white font-medium text-[10px]">{entry.value}</span>
              </div>
            )
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full p-3">
      {/* Título - mais compacto */}
      <h2 className="text-white text-base font-semibold mb-2">Atividades dos Funcionário (Últimos 7 dias)</h2>
      
      {/* GRÁFICO DE BARRAS - mais compacto */}
      <div className="h-32.5 w-full mb-2">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={dados} margin={{ top: 5, right: 5, left: -15, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
            <XAxis 
              dataKey="dia" 
              stroke="#9CA3AF" 
              tick={{ fill: '#9CA3AF', fontSize: 9 }}
              axisLine={{ stroke: '#4B5563' }}
            />
            <YAxis 
              stroke="#9CA3AF" 
              tick={{ fill: '#9CA3AF', fontSize: 9 }}
              axisLine={{ stroke: '#4B5563' }}
              width={20}
            />
            <Tooltip content={<CustomTooltip />} />
            
            <Bar dataKey="acessos" name="Acessos" fill="#3B82F6" radius={[2, 2, 0, 0]} barSize={12} />
            <Bar dataKey="acoes" name="Ações" fill="#10B981" radius={[2, 2, 0, 0]} barSize={12} />
            <Bar dataKey="tentativas" name="Tentativas" fill="#EF4444" radius={[2, 2, 0, 0]} barSize={12} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* CARDS DOS DIAS - grid mais apertado */}
      <div className="grid grid-cols-7 gap-1 mt-1">
        {cardsInfo.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            {/* Dia da semana */}
            <span className="text-gray-400 text-[10px] font-medium mb-0.5">{item.dia}</span>
            
            {/* Número com fundo */}
            {item.numero > 0 ? (
              <div className={`${item.bg || 'bg-transparent'} w-full py-1 rounded mb-0.5`}>
                <span className={`${item.cor || 'text-white'} text-sm font-bold`}>{item.numero}</span>
              </div>
            ) : (
              <div className="w-full py-1 mb-0.5">
                <span className="text-gray-600 text-sm font-bold">-</span>
              </div>
            )}
            
            {/* Descrições */}
            {item.descricao && (
              <>
                <span className="text-white text-[10px] leading-tight">{item.descricao}</span>
                <span className="text-gray-500 text-[10px] leading-tight">{item.subDescricao}</span>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Legenda - mais compacta */}
      <div className="mt-2 pt-1 border-t border-gray-700 flex gap-3 text-[8px]">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-blue-500"></div>
          <span className="text-gray-400">Acessos</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-gray-400">Ações</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-red-500"></div>
          <span className="text-gray-400">Tentativas</span>
        </div>
      </div>
    </div>
  );
}