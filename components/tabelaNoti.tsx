'use client'
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export interface Notificacao {
  id: number;
  empresa: string;
  licenca: string;
  chaveLicenca: string;
  valor: string;
  metodoPagamento: string;
  status: string;
  data: string;
}

// Interface para os dados de pagamento
export interface DadosPagamento {
  empresa: string;
  licenca: string;
  valor: number;
  date: string;
  status: string;
  metodoPagamento: string;
}

interface TabelaNotificacoesProps {
  dados: Notificacao[];
  dados2?: DadosPagamento[];
}

export default function TabelaNotificacoes({ dados, dados2 }: TabelaNotificacoesProps) {
  const [dropdownAberto, setDropdownAberto] = useState<number | null>(null);

  const statusColor = (status: string) => {
    switch(status) {
      case "Pago": return "text-green-400";
      case "Pendente": return "text-yellow-400";
      case "Recusado": return "text-red-500";
      default: return "text-gray-300";
    }
  };

  const opcoes = [
    
    { label: "Aceitar", cor: "text-green-400" },
    { label: "Suspender", cor: "text-yellow-400" },
    { label: "Recusar", cor: "text-red-400" },
    { label: "Em revisão", cor: "text-purple-400" },
  ];

  // Se dados2 for passado, mostra a tabela de resumo de pagamentos
  if (dados2 && dados2.length > 0) {
    return (
      <div className="w-full rounded-2xl">
        <table className="w-full text-left text-white border-collapse rounded-2xl">
          <thead className="sticky top-0 z-10 backdrop-blur-sm">
            <tr className="text-gray-200 border-b-2 border-[#050e4c]">
              <th className="py-3 px-4 text-lg font-light">Empresa</th>
              <th className="py-3 px-4 text-lg font-light">Plano/Licença</th>
              <th className="py-3 px-4 text-lg font-light">Valor</th>
              <th className="py-3 px-4 text-lg font-light">Data</th>
              <th className="py-3 px-4 text-lg font-light">Status</th>
              <th className="py-3 px-4 text-lg font-light">Método de Pagamento</th>
              <th className="py-3 px-4 text-lg font-light text-center">Ação</th>
              </tr>
          </thead>
          <tbody>
            {dados2.map((item, index) => (
              <tr key={index} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
                <td className="py-3 px-4 text-sm font-light">{item.empresa} </td>
                <td className="py-3 px-4 text-sm font-light">{item.licenca} </td>
                <td className="py-3 px-4 text-sm font-light">AOA {item.valor} </td>
                <td className="py-3 px-4 text-sm font-light">{item.date} </td>
                <td className={`py-3 px-4 font-light text-sm ${statusColor(item.status)}`}>
                  {item.status}
                </td>
                <td className="py-3 px-4 text-sm font-light">{item.metodoPagamento} </td>
                <td className="py-3 px-4 text-center">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors">
                    Ver Detalhes
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Caso contrário, mostra a tabela de notificações com dropdown
  return (
    <div className="w-full rounded-2xl">
      <table className="w-full text-left text-white border-collapse rounded-2xl">
        <thead className="sticky top-0 z-10 backdrop-blur-sm">
          <tr className="text-gray-200 border-b-2 border-[#050e4c]">
            <th className="py-3 px-4 text-lg font-light">Empresa</th>
            <th className="py-3 px-4 text-lg font-light">Licença</th>
            <th className="py-3 px-4 text-lg font-light">Chave da licença</th>
            <th className="py-3 px-4 text-lg font-light">Valor</th>
            <th className="py-3 px-4 text-lg font-light">Método de Pagamento</th>
            <th className="py-3 px-4 text-lg font-light">Status</th>
            <th className="py-3 px-4 text-lg font-light">Data</th>
            <th className="py-3 px-4 text-lg font-light text-center">Ação</th>
           </tr>
        </thead>
        <tbody>
          {dados.map((item) => (
            <tr key={item.id} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
              <td className="py-3 px-4 text-sm font-light">{item.empresa}</td>
              <td className="py-3 px-4 text-sm font-light">{item.licenca}</td>
              <td className="py-3 px-4 text-sm font-light">{item.chaveLicenca}</td>
              <td className="py-3 px-4 text-sm font-light">KZS {item.valor}</td>
              <td className="py-3 px-4 text-sm font-light">{item.metodoPagamento}</td>
              <td className={`py-3 px-4 font-light text-sm ${statusColor(item.status)}`}>
                {item.status}
              </td>
              <td className="py-3 px-4 text-sm font-light">{item.data}</td>
              <td className="py-3 px-4 text-center relative">
                <button
                  onClick={() => setDropdownAberto(dropdownAberto === item.id ? null : item.id)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors flex items-center gap-1 mx-auto"
                >
                  Opções
                  <ChevronDown size={14} className={`transition-transform ${dropdownAberto === item.id ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown de opções */}
                {dropdownAberto === item.id && (
                  <div className="absolute right-0 mt-1 w-40 bg-[#040928] border border-[#050e4c] rounded-lg shadow-xl z-10">
                    {opcoes.map((opcao, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          console.log(`Opção selecionada: ${opcao.label} para empresa ${item.empresa}`);
                          setDropdownAberto(null);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-white/10 transition-colors ${opcao.cor}`}
                      >
                        {opcao.label}
                      </button>
                    ))}
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}