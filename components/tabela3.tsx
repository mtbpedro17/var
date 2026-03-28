'use client'
import { useState } from 'react';
import { Circle, Power } from 'lucide-react';
import ModalDetalhesPagamento, { DadosModal } from '@/components/detalhPag';

export interface TabelaResumo3 {
    empresa: string;
    licenca: "Plano Básico" | "Plano Premium" | "Plano Standard";
    valor: number;
    date: string;
    status: "Pago" | "Recusado";
    metodoPagamento: "Deposito" | "Trans. Express" | "Trans. Normal";
}

interface TabelaResumoProps3 {
    dados: TabelaResumo3[];
}

export default function Tabela3({ dados }: TabelaResumoProps3) {
    const [modalAberto, setModalAberto] = useState(false);
    const [itemSelecionado, setItemSelecionado] = useState<DadosModal | null>(null);

    const abrirModal = (item: TabelaResumo3) => {
        setItemSelecionado(item);
        setModalAberto(true);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setItemSelecionado(null);
    };

    const statusColor = (status: string) => {
        switch (status) {
            case "Pago": return "text-green-400";
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
                        {dados.map((item, index) => (
                            <tr
                                key={index}
                                className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200"
                            >
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
                                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors border border-transparent"
                                    >
                                        Ver Detalhes
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal de Detalhes */}
            <ModalDetalhesPagamento
                isOpen={modalAberto}
                onClose={fecharModal}
                dados={itemSelecionado}
            />
        </>
    );
}