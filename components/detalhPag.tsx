'use client'
import { X, Download, Circle, Power } from 'lucide-react';

export interface DadosModal {
    empresa: string;
    licenca: "Plano Básico" | "Plano Premium" | "Plano Standard";
    valor: number;
    date: string;
    status: "Pago" | "Recusado";
    metodoPagamento: "Deposito" | "Trans. Express" | "Trans. Normal";
}

interface ModalDetalhesPagamentoProps {
    isOpen: boolean;
    onClose: () => void;
    dados: DadosModal | null;
}

export default function ModalDetalhesPagamento({ isOpen, onClose, dados }: ModalDetalhesPagamentoProps) {
    if (!isOpen || !dados) return null;

    const calcularVencimento = (date: string) => {
        const [dia, mes, ano] = date.split('/').map(Number);
        const d = new Date(ano, mes - 1, dia);
        d.setDate(d.getDate() + 30);
        return d.toLocaleDateString('pt-PT');
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
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="bg-[#0a1240] border border-[#1a2a80] rounded-2xl p-7 w-[500px] max-w-[95vw] shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-white text-base font-semibold">
                        Detalhes {dados.empresa}
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Linha 1: Empresa, Plano, Valor */}
                <div className="grid grid-cols-3 gap-3 mb-3">
                    <div>
                        <p className="text-[#8899cc] text-xs mb-1.5">Empresa / parceiro</p>
                        <div className="bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2 text-white text-sm">
                            {dados.empresa}
                        </div>
                    </div>
                    <div>
                        <p className="text-[#8899cc] text-xs mb-1.5">Plano / licença</p>
                        <div className="bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2 text-white text-sm">
                            {dados.licenca}
                        </div>
                    </div>
                    <div>
                        <p className="text-[#8899cc] text-xs mb-1.5">Valor</p>
                        <div className="bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2 text-white text-sm">
                            AOA {dados.valor.toLocaleString('pt-PT')},00
                        </div>
                    </div>
                </div>

                {/* Linha 2: Método, Data pagamento, Data vencimento */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                    <div>
                        <p className="text-[#8899cc] text-xs mb-1.5">Método de pagamento</p>
                        <div className="bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2 text-white text-sm">
                            {dados.metodoPagamento}
                        </div>
                    </div>
                    <div>
                        <p className="text-[#8899cc] text-xs mb-1.5">Data do pagamento</p>
                        <p className="text-white text-sm py-2">{dados.date}</p>
                    </div>
                    <div>
                        <p className="text-[#8899cc] text-xs mb-1.5">Data de vencimento</p>
                        <p className="text-white text-sm py-2">{calcularVencimento(dados.date)}</p>
                    </div>
                </div>

                {/* Status */}
                <div className="mb-6">
                    <p className="text-[#8899cc] text-xs mb-2">Status</p>
                    <div className={`flex items-center gap-2 ${statusColor(dados.status)}`}>
                        {statusIcon(dados.status)}
                        <span className="text-sm font-medium">{dados.status}</span>
                    </div>
                </div>

                {/* Botão Baixar Fatura */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <Download size={16} />
                    Baixar fatura
                </button>
            </div>
        </div>
    );
}