import { Wifi, AlertTriangle, PowerOff } from 'lucide-react';

interface EstatisticasEquipamentosProps {
  online: number;
  aviso: number;
  offline: number;
}

export default function EstatisticasEquipamentos({ online, aviso, offline }: EstatisticasEquipamentosProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {/* Online */}
      <div className="bg-[#040928] border border-[#050e4c] rounded-2xl p-4 flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">Equipamentos Online</p>
          <p className="text-white text-2xl font-bold">{online}</p>
        </div>
        <div className="bg-green-500/20 p-3 rounded-full">
          <Wifi size={24} className="text-green-500" />
        </div>
      </div>

      {/* Em aviso */}
      <div className="bg-[#040928] border border-[#050e4c] rounded-2xl p-4 flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">Equipamentos em aviso</p>
          <p className="text-white text-2xl font-bold">{aviso}</p>
        </div>
        <div className="bg-yellow-500/20 p-3 rounded-full">
          <AlertTriangle size={24} className="text-yellow-500" />
        </div>
      </div>

      {/* Offline */}
      <div className="bg-[#040928] border border-[#050e4c] rounded-2xl p-4 flex items-center justify-between">
        <div>
          <p className="text-gray-400 text-sm">Equipamentos offline</p>
          <p className="text-white text-2xl font-bold">{offline}</p>
        </div>
        <div className="bg-red-500/20 p-3 rounded-full">
          <PowerOff size={24} className="text-red-500" />
        </div>
      </div>
    </div>
  );
}