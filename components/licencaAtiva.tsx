import { AlertCircle } from 'lucide-react';

interface LicencaAtivaProps {
  plano?: string;
  dataExpiracao?: string;
  onRenovar?: () => void;
  onPagar?: () => void;
}

export default function LicencaAtiva({
  plano = "Plano Premium",
  dataExpiracao = "20/05/2026",
  onRenovar,
  onPagar
}: LicencaAtivaProps) {
  return (
    <div className="bg-[#040928] rounded-2xl py-2 px-4 h-[150px] shadow-xl w-full  text-white border border-[#050e4c] flex flex-col">
      {/* Licença Ativa */}
      <p className="text-gray-400 text-sm mb-2">Licença Ativa</p>
      
     <div className='flex items-center justify-between'>
         {/* Plano Premium */}
      <div className='flex flex-col'>
        <p className="text-white text-sm font-semibold mb-1">{plano}</p>
    
      {/* Expira em */}
      <p className="text-gray-400 text-sm mb-2">
        Expira em: <span className="text-white">{dataExpiracao}</span>
      </p>
      
      {/* Aviso */}
      <div className="bg-yred-500/10 border border-red-500/30 rounded-lg p-3 mb-2 flex items-center gap-2">
        <AlertCircle className="text-red-500 shrink-0" size={18} />
        <p className="text-red-500 text-xs font-medium">
          ⚠️ Aviso: Licença expira em breve!
        </p>
      </div>
      </div>
      
      {/* Botões */}
      <div className="flex flex-col gap-3">
        <button
          onClick={onRenovar}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-xs"
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
  );
}