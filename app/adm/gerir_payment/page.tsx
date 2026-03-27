'use client'
import { useState } from "react";
import Caixa3 from "@/components/caixa3";
import Container2 from "@/components/container2";
import Sidebar from "@/components/sidebar";
import TabelaNotificacoes, { Notificacao, DadosPagamento } from "@/components/tabelaNoti";
import { Bell, Search } from "lucide-react";

const caixasData = [
    { 
        icon: <Bell size={24} className="text-green-500" />, 
        num: 30, 
        descricao: "Pagamentos confirmados (Ultimos. 30 dias)" 
    },
    { 
        icon: <Bell size={24} className="text-yellow-500" />, 
        num: 8, 
        descricao: "Pagamentos pendentes" 
    },
    { 
        icon: <Bell size={24} className="text-red-500" />, 
        num: 2, 
        descricao: "Pagamentos Falhados ou recusados" 
    },
    { 
        icon: <Bell size={24} className="text-orange-500" />, 
        num: 1, 
        descricao: "Empresas suspensas por faltas" 
    },
];

// Dados de pagamentos
const pagamentosData: DadosPagamento[] = [
    { empresa: "Unitel", licenca: "Plano Premium", valor: 1000, date: "25/10/2025", status: "Pago", metodoPagamento: "Deposito" },
    { empresa: "KG Kituxi", licenca: "Plano Básico", valor: 900, date: "11/02/2025", status: "Recusado", metodoPagamento: "Trans. Express" },
    { empresa: "Continental AI", licenca: "Plano Premium", valor: 1000, date: "30/12/2025", status: "Recusado", metodoPagamento: "Trans. Normal" },
    { empresa: "Africell", licenca: "Plano Básico", valor: 900, date: "21/07/2025", status: "Recusado", metodoPagamento: "Trans. Normal" },
    { empresa: "MTB tech", licenca: "Plano Premium", valor: 1000, date: "11/02/2025", status: "Pago", metodoPagamento: "Deposito" },
];

// Dados de notificações
// Dados de notificações com os campos corretos da imagem
// Dados de notificações com os campos corretos da imagem (com Empresa)
const notificacoesData: Notificacao[] = [
    { 
        id: 1,
        empresa: "Unitel", 
        licenca: "Plano Premium", 
        chaveLicenca: "BL10JH98", 
        valor: "500,00", 
        metodoPagamento: "Transferência Bancária", 
        status: "Pago", 
        data: "18/06/2026" 
    },
    { 
        id: 2,
        empresa: "KG Kituxi", 
        licenca: "Plano Standard", 
        chaveLicenca: "BL10JH98", 
        valor: "7.000,00", 
        metodoPagamento: "Paypay AO", 
        status: "Pendente", 
        data: "14/06/2026" 
    },
    { 
        id: 3,
        empresa: "Continental AI", 
        licenca: "Plano Básico", 
        chaveLicenca: "BL10JH98", 
        valor: "1.500,00", 
        metodoPagamento: "Multicaixa Express", 
        status: "Pago", 
        data: "16/06/2026" 
    },
    { 
        id: 4,
        empresa: "Africell", 
        licenca: "Plano Premium", 
        chaveLicenca: "BL10JH98", 
        valor: "50.000,00", 
        metodoPagamento: "Transferência Bancária", 
        status: "Recusado", 
        data: "17/06/2026" 
    },
    { 
        id: 5,
        empresa: "Deloitte", 
        licenca: "Plano Standard", 
        chaveLicenca: "BL10JH98", 
        valor: "4.000,00", 
        metodoPagamento: "Paypay AO", 
        status: "Pendente", 
        data: "11/06/2026" 
    },
    { 
        id: 6,
        empresa: "Angolatelecom", 
        licenca: "Plano Básico", 
        chaveLicenca: "BL10JH98", 
        valor: "5.000,00", 
        metodoPagamento: "Multicaixa Express", 
        status: "Pago", 
        data: "10/06/2026" 
    },
    { 
        id: 7,
        empresa: "Ms Telecom", 
        licenca: "Plano Premium", 
        chaveLicenca: "BL10JH98", 
        valor: "1.500,00", 
        metodoPagamento: "Paypay AO", 
        status: "Recusado", 
        data: "19/06/2026" 
    },
    { 
        id: 8,
        empresa: "Tech Solution", 
        licenca: "Plano Básico", 
        chaveLicenca: "BL10JH98", 
        valor: "500,00", 
        metodoPagamento: "Multicaixa Express", 
        status: "Pago", 
        data: "19/06/2026" 
    },
];

export default function Home() {
    const [mostrarNotificacoes, setMostrarNotificacoes] = useState(false);

    const handleNotificacaoClick = () => {
        setMostrarNotificacoes(true);
    };

    return (
        <>
            <Sidebar>
                <Container2 
                    titulo="Gerir pagamento" 
                    notificacao={<Bell size={20} />} 
                    usuario="Mutombo Pedro"
                    onAdicionar={handleNotificacaoClick}
                    filtros={
                        <>
                            <select className="bg-[#040928] text-white border border-[#050e4c] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500">
                                <option>M.Pagamento</option>
                                <option>Depósito</option>
                                <option>Trans. Express</option>
                                <option>Trans. Normal</option>
                            </select>
                            
                            <select className="bg-[#040928] text-white border border-[#050e4c] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500">
                                <option>Status</option>
                                <option>Pago</option>
                                <option>Pendente</option>
                                <option>Recusado</option>
                            </select>
                            
                            <select className="bg-[#040928] text-white border border-[#050e4c] rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-blue-500">
                                <option>Período</option>
                                <option>Hoje</option>
                                <option>Esta semana</option>
                                <option>Este mês</option>
                                <option>Últimos 30 dias</option>
                            </select>
                        </>
                    }
                >
                    {!mostrarNotificacoes ? (
                        <>
                            {/* Grid para as caixas */}
                            <div className="grid grid-cols-4 gap-3 mb-4">
                                {caixasData.map((item, index) => (
                                    <Caixa3 
                                        key={index} 
                                        icon={item.icon} 
                                        num={item.num} 
                                        descricao={item.descricao}
                                    />
                                ))}
                            </div>
                            
                            {/* Barra de pesquisa */}
                            <div className="flex justify-end w-full mb-4">
                                <div className="w-[300px]">
                                    <div className="bg-[#040928] text-white h-10 flex items-center gap-3 border border-[#050e4c] rounded-lg">
                                        <Search size={18} className="ml-3 text-gray-400" />
                                        <input 
                                            type="text" 
                                            placeholder="Pesquisar..." 
                                            className="outline-none placeholder:text-gray-500 h-10 w-full bg-transparent text-sm text-white" 
                                        />
                                    </div>
                                </div>
                            </div>
                            
                            {/* Tabela de Pagamentos */}
                            <div className="w-full">
                                <div className="p-4 shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
                                    <div className="overflow-x-auto">
                                        <div className="min-w-[600px]">
                                            <TabelaNotificacoes dados={notificacoesData} dados2={pagamentosData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Botão para voltar */}
                            <div className="flex justify-between items-center mb-4">
                                <button
                                    onClick={() => setMostrarNotificacoes(false)}
                                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                                >
                                    ← Voltar
                                </button>
                                <h2 className="text-white text-xl font-semibold">Notificações</h2>
                                <div className="w-20"></div>
                            </div>

                            {/* Tabela de Notificações */}
                            <div className="w-full">
                                <div className="p-4 shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
                                    <div className="overflow-x-auto">
                                        <div className="min-w-[600px]">
                                            <TabelaNotificacoes dados={notificacoesData} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                    
                </Container2>
            </Sidebar>
        </>
    );
}