import Caixa3 from "@/components/caixa3";
import Container2 from "@/components/container2";
import Sidebar from "@/components/sidebar";
import Tabela3, { TabelaResumo3 } from "@/components/tabela3";
import { CheckCircle, Clock, XCircle, Lock, Search } from "lucide-react";

const caixasData = [
    { 
        icon: <CheckCircle size={24} className="text-green-500" />, 
        bgColor: "bg-green-100",
        num: 30, 
        descricao: "Pagamentos confirmados (Ultimos. 30 dias)" 
    },
    { 
        icon: <Clock size={24} className="text-yellow-500" />, 
        bgColor: "bg-yellow-100",
        num: 8, 
        descricao: "Pagamentos pendentes" 
    },
    { 
        icon: <XCircle size={24} className="text-red-500" />, 
        bgColor: "bg-red-100",
        num: 2, 
        descricao: "Pagamentos Falhados ou recusados" 
    },
    { 
        icon: <Lock size={24} className="text-orange-500" />, 
        bgColor: "bg-orange-100",
        num: 1, 
        descricao: "Empresas suspensas por faltas" 
    },
];

const resumoPlataforma: TabelaResumo3[] = [
    { empresa: "Unitel", licenca: "Plano Premium", valor: 1000, date: "25/10/2025", status: "Pago", metodoPagamento: "Deposito" },
    { empresa: "KG Kituxi", licenca: "Plano Básico", valor: 900, date: "11/02/2025", status: "Recusado", metodoPagamento: "Trans. Express" },
    { empresa: "Continental AI", licenca: "Plano Premium", valor: 1000, date: "30/12/2025", status: "Recusado", metodoPagamento: "Trans. Normal" },
    { empresa: "Africell", licenca: "Plano Básico", valor: 900, date: "21/07/2025", status: "Recusado", metodoPagamento: "Trans. Normal" },
    { empresa: "MTB tech", licenca: "Plano Premium", valor: 1000, date: "11/02/2025", status: "Pago", metodoPagamento: "Deposito" },
];

export default function Home() {
    return (
        <>
            <Sidebar>
                <Container2 titulo="Gerir pagamento" mpagamento="M.Pagamento" status="Status" periodo="Perido">
                    {/* Grid responsivo para as caixas */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                        {caixasData.map((item, index) => (
                            <Caixa3 
                                key={index} 
                                icon={item.icon} 
                                num={item.num} 
                                descricao={item.descricao}
                                bgColor={item.bgColor}
                            />
                        ))}
                    </div>
                    
                    {/* Header responsivo */}
                    <div className="text-white flex flex-col sm:flex-row sm:items-center sm:justify-between w-full py-4 md:py-5 gap-4 sm:gap-0">
                        <h1 className="text-2xl sm:text-3xl font-bold text-center sm:text-left">Pagamentos</h1>
                        <div className="flex justify-center sm:justify-end">
                            <div className="py-2 sm:py-3 bg-white/10 text-white h-10 w-full sm:w-[280px] md:w-[300px] flex items-center gap-3 border border-white rounded-2xl">
                                <Search size={18} className="ml-3 sm:ml-2" />
                                <input 
                                    type="text" 
                                    placeholder="Pesquisar..." 
                                    className="outline-none placeholder:text-gray-400 h-10 w-full bg-transparent text-sm sm:text-base" 
                                />
                            </div>
                        </div>
                    </div>
                    
                    {/* Tabela responsiva */}
                    <div className="w-full mt-3 md:mt-4 lg:mt-5">
                        <div className="p-3 sm:p-4 bg-[#20254b] rounded-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <div className="min-w-[600px] md:min-w-full">
                                    <Tabela3 dados={resumoPlataforma} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Container2>
            </Sidebar>
        </>
    );
}