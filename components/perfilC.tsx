import { Edit, CheckCircle, User } from 'lucide-react';

interface PerfilClienteProps {
  empresa?: string;
  ramo?: string;
  contato?: string;
  email?: string;
  status?: "Ativo" | "Inativo";
  foto?: string;
  onEditar?: () => void;
}

export default function PerfilCliente({
  empresa = "KITUXI TECH",
  ramo = "TECNOLOGIA DE INFORMÁTICA",
  contato = "Estefánio Schofield",
  email = "estefanioschofield.com",
  status = "Ativo",
  foto,
  onEditar
}: PerfilClienteProps) {
  return (
    <div className=" p-6  w-full max-w-[400px]">
      {/* Título */}
      <h2 className="text-white text-lg font-semibold mb-4">Perfil do Cliente</h2>
      
      {/* Foto centralizada + nome abaixo */}
      <div className="flex flex-col items-center mb-5">
        <div className="w-20 h-20 rounded-full bg-[#1a2a80] border-2 border-blue-500 flex items-center justify-center overflow-hidden mb-2">
          {foto ? (
            <img src={foto} alt={contato} className="w-full h-full object-cover" />
          ) : (
            <User size={36} className="text-blue-300" />
          )}
        </div>
        <p className="text-white text-base font-bold text-center">{contato}</p>
        <p className="text-gray-400 text-xs text-center">{email}</p>
      </div>
      
      {/* Nome da Empresa */}
      <p className="text-white text-xl font-bold mb-1">{empresa}</p>
      
      {/* Ramo de Atividade */}
      <p className="text-gray-400 text-xm mb-4">{ramo}</p>
      
      {/* Status */}
      <div className="flex items-center gap-2 mb-4">
        <CheckCircle size={16} className="text-green-400" />
        <span className="text-green-400 text-xs font-medium">{status}</span>
      </div>
      
      {/* Botão Editar Perfil */}
      <button
        onClick={onEditar}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-xs flex items-center justify-center gap-2"
      >
        <Edit size={15} />
        Editar Perfil
      </button>
    </div>
  );
}