'use client'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface MetodoPagamento {
  nome: string;
  percentual: number;
  cor: string;
}

interface BalancoMetodosPagamentoProps {
  dados?: MetodoPagamento[];
  total?: number;
}

export default function BalancoMetodosPagamento({ 
  dados = [
    { nome: "Transferência IBAN", percentual: 55, cor: "#3B82F6" },
    { nome: "Multicaixa Express", percentual: 15, cor: "#F59E0B" },
    { nome: "Depósito", percentual: 30, cor: "#10B981" }
  ],
  total = 55
}: BalancoMetodosPagamentoProps) {

  return (
    <div className="w-full h-full  rounded-2xl p-6 shadow-xl ">
      {/* Título */}
      <h2 className="text-white text-xl font-semibold mb-6">Balanço Métodos de Pagamentos</h2>
      
      <div className="flex items-center gap-8">
        {/* GRÁFICO PIZZA - MAIOR */}
        <div className="w-40 h-40 relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={dados}
                cx="50%"
                cy="50%"
                innerRadius={35}
                outerRadius={60}
                paddingAngle={3}
                dataKey="percentual"
              >
                {dados.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.cor} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          {/* Percentual total no centro - MAIOR */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-3xl font-bold">{total}%</span>
          </div>
        </div>

        {/* LISTA DE MÉTODOS - MAIOR */}
        <div className="flex-1 space-y-4">
          {dados.map((metodo, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: metodo.cor }}
                />
                <span className="text-gray-300 text-base">{metodo.nome}</span>
              </div>
              <span className="text-white text-base font-medium">{metodo.percentual}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}