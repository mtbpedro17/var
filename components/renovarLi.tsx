'use client'
import { useState } from 'react';
import { X, ChevronUp, ChevronDown } from 'lucide-react';

interface ModalRenovarLicencaProps {
  isOpen: boolean;
  onClose: () => void;
  plano?: string;
  valor?: string;
}

const metodosPagamento = [
  "Multicaixa Express",
  "Transferência IBAN",
  "Depósito",
];

export default function ModalRenovarLicenca({
  isOpen,
  onClose,
  plano = "Premium",
  valor = "AOA 50.000,00",
}: ModalRenovarLicencaProps) {
  const [dropdownAberto, setDropdownAberto] = useState(false);
  const [metodoPagamento, setMetodoPagamento] = useState(metodosPagamento[0]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-[#0a1240] border border-[#1a2a80] rounded-2xl p-7 w-[480px] max-w-[95vw] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-white text-base font-semibold">Renovar Licença</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>

        {/* Linha 1: Licença + Valor */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div>
            <p className="text-[#8899cc] text-xs mb-1.5">Licença</p>
            <div className="bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2.5 text-white text-sm">
              {plano}
            </div>
          </div>
          <div>
            <p className="text-[#8899cc] text-xs mb-1.5">Valor</p>
            <div className="bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2.5 text-white text-sm">
              {valor}
            </div>
          </div>
        </div>

        {/* Método de Pagamento */}
        <div className="mb-8 relative">
          <p className="text-[#8899cc] text-xs mb-1.5">Método de Pagamento</p>
          <button
            onClick={() => setDropdownAberto(!dropdownAberto)}
            className="w-full bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2.5 text-white text-sm flex items-center justify-between"
          >
            {metodoPagamento}
            {dropdownAberto
              ? <ChevronUp size={16} className="text-gray-400" />
              : <ChevronDown size={16} className="text-gray-400" />
            }
          </button>

          {dropdownAberto && (
            <div className="absolute top-full left-0 w-full bg-[#040928] border border-[#1a2a80] rounded-lg overflow-hidden z-10 mt-0.5">
              {metodosPagamento
                .filter((m) => m !== metodoPagamento)
                .map((metodo) => (
                  <button
                    key={metodo}
                    onClick={() => {
                      setMetodoPagamento(metodo);
                      setDropdownAberto(false);
                    }}
                    className="w-full text-left px-3 py-2.5 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {metodo}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Botão Confirmar */}
        <button
          onClick={() => {
            console.log(`Renovar: ${plano} | ${valor} | ${metodoPagamento}`);
            onClose();
          }}
          className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 text-sm font-semibold transition-colors"
        >
          Confirmar & Pagar
        </button>
      </div>
    </div>
  );
}