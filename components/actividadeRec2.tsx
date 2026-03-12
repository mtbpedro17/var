import { Circle, ChevronRight, CheckCircle } from 'lucide-react';

interface Atividade {
  tipo: "login" | "logout" | "sistema";
  descricao: string;
  sistema: string;
  hora?: string;
  status: "sucesso" | "info";
}

interface AtividadesRecentesProps {
  atividades?: Atividade[];
}

export default function AtividadesRecentes({ 
  atividades = [
    { tipo: "login", descricao: "Funcionário João fez login", sistema: "Continental Tecno IA", hora: "Hoje - 14:32", status: "sucesso" },
    { tipo: "login", descricao: "Funcionário João fez login", sistema: "Continental Tecno IA", hora: "", status: "sucesso" },
    { tipo: "logout", descricao: "Funcionário Adilson Maravilha terminou sessão", sistema: "Continental Tecno IA", hora: "Hoje - 12:25", status: "sucesso" },
    { tipo: "sistema", descricao: "Funcionário Mairon Fernando fez login", sistema: "Continental Tecno IA", hora: "Hoje - 12:11", status: "info" }
  ] 
}: AtividadesRecentesProps) {

  const getIcon = (atividade: Atividade) => {
    if (atividade.status === "info") {
      return <Circle size={16} className="text-green-500 fill-green-500" />;
    }
    return <CheckCircle size={16} className="text-green-500" />;
  };

  return (
    <div className="w-full h-full   p-4 shadow-xl bg-[#040928]  border border-[#050e4c] rounded-2xl flex flex-col">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-white text-base font-semibold">Atividades Recentes</h2>
        <a href="#" className="flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-colors text-xs">
          Ver tudo
          <ChevronRight size={14} />
        </a>
      </div>

      {/* Subtítulos das colunas */}
      <div className="grid grid-cols-12 gap-2 mb-2 px-2">
        <div className="col-span-1"></div>
        <div className="col-span-6">
          <span className="text-gray-500 text-xs">Logins</span>
        </div>
        <div className="col-span-3">
          <span className="text-gray-500 text-xs">Sistema</span>
        </div>
        <div className="col-span-2"></div>
      </div>

      {/* Lista de atividades */}
      <div className="flex-1 space-y-2">
        {atividades.map((atividade, index) => (
          <div key={index} className="grid grid-cols-12 gap-2 items-start px-2 py-1.5 hover:bg-white/5 rounded-lg transition-colors border-b border-gray-700 pb-1">
            {/* Ícone */}
            <div className="col-span-1">
              {getIcon(atividade)}
            </div>
            
            {/* Descrição */}
            <div className="col-span-6">
              <span className="text-white text-xs">{atividade.descricao}</span>
            </div>
            
            {/* Sistema */}
            <div className="col-span-3">
              <span className="text-gray-400 text-xs">{atividade.sistema}</span>
            </div>
            
            {/* Hora */}
            <div className="col-span-2 text-right">
              {atividade.hora && (
                <span className="text-gray-500 text-xs">{atividade.hora}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}