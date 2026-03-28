'use client'
import { useState } from 'react';
import { ChevronDown, X, Download, Circle, Power } from 'lucide-react';

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
  const [modalAberto, setModalAberto] = useState(false);
  const [itemSelecionado, setItemSelecionado] = useState<DadosPagamento | null>(null);

  const abrirModal = (item: DadosPagamento) => {
    setItemSelecionado(item);
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
    setItemSelecionado(null);
  };

  const calcularVencimento = (date: string) => {
    const [dia, mes, ano] = date.split('/').map(Number);
    const d = new Date(ano, mes - 1, dia);
    d.setDate(d.getDate() + 30);
    return d.toLocaleDateString('pt-PT');
  };

  const statusColor = (status: string) => {
    switch (status) {
      case "Pago": return "text-green-400";
      case "Pendente": return "text-yellow-400";
      case "Recusado": return "text-red-500";
      default: return "text-gray-300";
    }
  };

  const statusIcon = (status: string) => {
    switch (status) {
      case "Pago": return <Circle size={10} className="fill-green-400 text-green-400" />;
      case "Recusado": return <Power size={12} className="text-red-500" />;
      default: return null;
    }
  };

  const opcoes = [
    { label: "Aceitar", cor: "text-green-400" },
    { label: "Suspender", cor: "text-yellow-400" },
    { label: "Recusar", cor: "text-red-400" },
    { label: "Em revisão", cor: "text-purple-400" },
  ];

  // ── Tabela de Pagamentos (quando dados2 é passado) ──
  if (dados2) {
    return (
      <>
        <div className="w-full rounded-2xl">
          <table className="w-full text-left text-white border-collapse rounded-2xl">
            <thead className="sticky top-0 z-10 backdrop-blur-sm">
              <tr className="text-gray-200 border-b-2 border-[#050e4c]">
                <th className="py-3 px-4 text-lg font-light">Empresa/Parceiro</th>
                <th className="py-3 px-4 text-lg font-light">Plano/Licença</th>
                <th className="py-3 px-4 text-lg font-light">Valor</th>
                <th className="py-3 px-4 text-lg font-light">Data de pagamento</th>
                <th className="py-3 px-4 text-lg font-light">Status</th>
                <th className="py-3 px-4 text-lg font-light">Método de Pagamento</th>
                <th className="py-3 px-4 text-lg font-light text-center">Ações</th>
              </tr>
            </thead>
            <tbody>
              {dados2.map((item, index) => (
                <tr key={index} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
                  <td className="py-3 px-4 text-sm font-light">{item.empresa}</td>
                  <td className="py-3 px-4 text-sm font-light">{item.licenca}</td>
                  <td className="py-3 px-4 text-sm font-light">AOA {item.valor}</td>
                  <td className="py-3 px-4 text-sm font-light">{item.date}</td>
                  <td className={`py-3 px-4 font-light text-sm flex items-center gap-1.5 ${statusColor(item.status)}`}>
                    {statusIcon(item.status)}
                    {item.status}
                  </td>
                  <td className="py-3 px-4 text-sm font-light">{item.metodoPagamento}</td>
                  <td className="py-3 px-4 text-center">
                    <button
                      onClick={() => abrirModal(item)}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors"
                    >
                      Ver Detalhes
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Modal de Detalhes ── */}
        {modalAberto && itemSelecionado && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={fecharModal}
          >
            <div
              className="bg-[#0a1240] border border-[#1a2a80] rounded-2xl p-7 w-[500px] max-w-[95vw] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-base font-semibold">
                  Detalhes {itemSelecionado.empresa}
                </h2>
                <button onClick={fecharModal} className="text-gray-400 hover:text-white transition-colors">
                  <X size={18} />
                </button>
              </div>

              {/* Linha 1: Empresa, Plano, Valor */}
              <div className="grid grid-cols-3 gap-3 mb-3">
                <div>
                  <p className="text-[#8899cc] text-xs mb-1.5">Empresa / parceiro</p>
                  <div className="bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2 text-white text-sm">
                    {itemSelecionado.empresa}
                  </div>
                </div>
                <div>
                  <p className="text-[#8899cc] text-xs mb-1.5">Plano / licença</p>
                  <div className="bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2 text-white text-sm">
                    {itemSelecionado.licenca}
                  </div>
                </div>
                <div>
                  <p className="text-[#8899cc] text-xs mb-1.5">Valor</p>
                  <div className="bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2 text-white text-sm">
                    AOA {itemSelecionado.valor.toLocaleString('pt-PT')},00
                  </div>
                </div>
              </div>

              {/* Linha 2: Método, Data pagamento, Data vencimento */}
              <div className="grid grid-cols-3 gap-3 mb-4">
                <div>
                  <p className="text-[#8899cc] text-xs mb-1.5">Método de pagamento</p>
                  <div className="bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2 text-white text-sm">
                    {itemSelecionado.metodoPagamento}
                  </div>
                </div>
                <div>
                  <p className="text-[#8899cc] text-xs mb-1.5">Data do pagamento</p>
                  <p className="text-white text-sm py-2">{itemSelecionado.date}</p>
                </div>
                <div>
                  <p className="text-[#8899cc] text-xs mb-1.5">Data de vencimento</p>
                  <p className="text-white text-sm py-2">{calcularVencimento(itemSelecionado.date)}</p>
                </div>
              </div>

              {/* Status */}
              <div className="mb-6">
                <p className="text-[#8899cc] text-xs mb-2">Status</p>
                <div className={`flex items-center gap-2 ${statusColor(itemSelecionado.status)}`}>
                  {statusIcon(itemSelecionado.status)}
                  <span className="text-sm font-medium">{itemSelecionado.status}</span>
                </div>
              </div>

              {/* Botão */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                <Download size={16} />
                Baixar fatura
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // ── Tabela de Notificações (sem dados2) ──
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