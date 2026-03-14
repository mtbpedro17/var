import { AlertTriangle, Trash2 } from 'lucide-react';

interface ZonaPerigoProps {
  onExcluirConta?: () => void;
}

export default function ZonaPerigo({ onExcluirConta }: ZonaPerigoProps) {
  return (
    <div className="w-[500px] h-full bg-[#040928] border border-[#050e4c] rounded-2xl p-5">
      {/* Título */}
      <div className="flex items-center gap-2 mb-4">
        <AlertTriangle size={18} className="text-red-500" />
        <h2 className="text-white text-xl font-semibold">Zona de Perigo</h2>
      </div>

      {/* Card de alerta */}
      <div className="bg-red-500/5 border border-red-500/20 rounded-xl p-4">
        {/* Subtítulo */}
        <div className="flex items-center gap-2 mb-2">
          <Trash2 size={16} className="text-red-500" />
          <h3 className="text-white text-base font-medium">Excluir conta</h3>
        </div>

        {/* Descrição */}
        <p className="text-gray-400 text-sm ml-7 mb-4">
          Excluir conta é uma ação irreversível.<br />
          Todos os seus dados serão apagados permanentemente.
        </p>

        {/* Botão de exclusão */}
        <div className="ml-7">
          <button
            onClick={onExcluirConta}
            className="bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white border border-red-500/30 hover:border-red-500 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-2"
          >
            <Trash2 size={16} />
            Excluir conta
          </button>
        </div>
      </div>

      {/* Aviso adicional (opcional) */}
      <div className="mt-3 text-xs text-gray-600 flex items-center gap-1">
        <AlertTriangle size={10} />
        <span>Esta ação não pode ser desfeita</span>
      </div>
    </div>
  );
}