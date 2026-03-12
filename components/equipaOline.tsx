import { Users, ChevronRight, MapPin, Monitor, User2} from 'lucide-react';

interface Membro {
  nome: string;
  atividade: "Em campo" | "Monitoramento";
}

interface EquipeOnlineProps {
  membros?: Membro[];
}

export default function EquipeOnline({ 
  membros = [
    { nome: "Estefanio Schofield", atividade: "Em campo" },
    { nome: "Carlos Pinheiro", atividade: "Monitoramento" },
    { nome: "Adilson Panzo", atividade: "Em campo" },
    { nome: "Rui Mingas", atividade: "Monitoramento" },
  ] 
}: EquipeOnlineProps) {

  const getAtividadeIcon = (atividade: string) => {
    switch(atividade) {
      case "Em campo":
        return <MapPin size={14} className="text-green-400" />;
      case "Monitoramento":
        return <Monitor size={14} className="text-blue-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full p-3 flex flex-col">
      {/* Cabeçalho com título e link */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Users size={18} className="text-gray-400" />
          <h2 className="text-white text-base font-semibold">Equipe Online</h2>
        </div>
        
        <a href="#" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-xs">
          Ver detalhes
          <ChevronRight size={14} />
        </a>
      </div>

      {/* Lista de membros */}
      <div className="flex-1 space-y-2">
        {membros.map((membro, index) => (
          <div key={index} className="flex items-center justify-between bg-black/30 border border-gray-700 p-2 rounded-lg">
            <div className="flex items-center gap-3">
                <p className='p-2 bg-gray-700 rounded-full'><User2 size={20} color='gray' /></p>
            <span className="text-white text-sm">{membro.nome}</span>
            </div>
            <div className="flex items-center gap-1.5">
              {getAtividadeIcon(membro.atividade)}
              <span className={`text-xs ${
                membro.atividade === "Em campo" ? "text-green-400" : "text-blue-400"
              }`}>
                {membro.atividade}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}