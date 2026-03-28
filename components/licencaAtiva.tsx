'use client'
import { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import ModalRenovarLicenca from '@/components/renovarLi';

interface LicencaAtivaProps {
  plano?: string;
  dataExpiracao?: string;
  onPagar?: () => void;
}

export default function LicencaAtiva({
  plano = "Plano Premium",
  dataExpiracao = "20/05/2026",
  onPagar,
}: LicencaAtivaProps) {
  const [modalAberto, setModalAberto] = useState(false);

  return (
    <>
      <div className="bg-[#040928] rounded-2xl py-2 px-4 h-[150px] shadow-xl w-full text-white border border-[#050e4c] flex flex-col">
        <p className="text-gray-400 text-sm mb-2">Licença Ativa</p>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="text-white text-sm font-semibold mb-1">{plano}</p>
            <p className="text-gray-400 text-sm mb-2">
              Expira em: <span className="text-white">{dataExpiracao}</span>
            </p>
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-2 flex items-center gap-2">
              <AlertCircle className="text-red-500 shrink-0" size={18} />
              <p className="text-red-500 text-xs font-medium">
                ⚠️ Aviso: Licença expira em breve!
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setModalAberto(true)}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-xs"
            >
              Renovar Agora
            </button>
            <button
              onClick={onPagar}
              className="w-full bg-transparent hover:bg-gray-800 text-gray-300 hover:text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-xs border border-gray-700"
            >
              Pagar licença
            </button>
          </div>
        </div>
      </div>

      <ModalRenovarLicenca
        isOpen={modalAberto}
        onClose={() => setModalAberto(false)}
        plano="Premium"
        valor="AOA 50.000,00"
      />
    </>
  );
}