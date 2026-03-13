import { AlertTriangle, Camera, User, Zap, Clock, ChevronRight } from 'lucide-react';

interface AlertaItem {
  titulo: string;
  descricao?: string;
  tempo: string;
  unidade?: string;
  acoes?: boolean;
}

interface GrupoAlertas {
  periodo: "Hoje" | "Ontem" | "Esta semana";
  itens: AlertaItem[];
}

interface ListaAlertasProps {
  grupos?: GrupoAlertas[];
}

export default function ListaAlertas({ 
  grupos = [
    {
      periodo: "Hoje",
      itens: [
        { 
          titulo: "Servidor Central Offline", 
          descricao: "Sistema detectou falha na conexão.",
          unidade: "Unidade 6",
          tempo: "Há 12 minutos",
          acoes: true
        },
        { 
          titulo: "Câmera Sector A Instável", 
          descricao: "Oscilação detectada no sinal.",
          tempo: "Há 1 hora"
        }
      ]
    },
    {
      periodo: "Ontem",
      itens: [
        { 
          titulo: "Funcionário Aldair fez login", 
          tempo: "Há 9 horas"
        }
      ]
    },
    {
      periodo: "Esta semana",
      itens: [
        { 
          titulo: "Falha elétrica na Unidade 4", 
          descricao: "Problema no fornecimento de energia.",
          tempo: "Há 5 dias"
        },
        { 
          titulo: "Funcionário Pedro exportou relatório geral", 
          tempo: "Há 6 dias"
        }
      ]
    }
  ] 
}: ListaAlertasProps) {

  const getIcon = (titulo: string) => {
    if (titulo.includes("Servidor")) return <AlertTriangle size={16} className="text-red-500" />;
    if (titulo.includes("Câmera")) return <Camera size={16} className="text-yellow-500" />;
    if (titulo.includes("login")) return <User size={16} className="text-green-500" />;
    if (titulo.includes("elétrica")) return <Zap size={16} className="text-orange-500" />;
    return <AlertTriangle size={16} className="text-gray-500" />;
  };

  return (
    <div className="w-full h-full p-4 ">
      <h2 className="text-white text-xl font-semibold mb-4">Alertas</h2>
      
      <div className="space-y-6 w-full  flex flex-col rounded-lg">
        {grupos.map((grupo, grupoIndex) => (
          <div key={grupoIndex}>
            {/* Título do período */}
            <h3 className="text-gray-400 text-sm font-medium mb-3">{grupo.periodo}</h3>
            
            {/* Itens do período */}
            <div className="space-y-4 flex flex-col gap-2 w-full">
              {grupo.itens.map((item, itemIndex) => (
                <div key={itemIndex} className="border-l-2 border-gray-700 pl-3 bg-white/5 shadow-lg rounded-md p-3 w-full">
                  {/* Título e ícone */}
                  <div className="flex items-start gap-2 mb-1">
                    {getIcon(item.titulo)}
                    <span className="text-white text-sm font-medium">{item.titulo}</span>
                  </div>
                  
                  {/* Descrição (se houver) */}
                  {item.descricao && (
                    <p className="text-gray-400 text-xs ml-6 mb-1">{item.descricao}</p>
                  )}
                  
                  {/* Unidade (se houver) */}
                  {item.unidade && (
                    <p className="text-gray-500 text-xs ml-6 mb-2">- {item.unidade}</p>
                  )}
                  
                  {/* Footer com tempo e ações */}
                  <div className="flex items-center gap-3 ml-6 mt-1">
                    <div className="flex items-center gap-1">
                      <Clock size={12} className="text-gray-500" />
                      <span className="text-gray-500 text-xs">{item.tempo}</span>
                    </div>
                    
                    {item.acoes && (
                      <>
                        <button className="text-blue-400 hover:text-blue-300 text-xs transition-colors">
                          Ver detalhes
                        </button>
                        <button className="text-green-400 hover:text-green-300 text-xs transition-colors">
                          Resolver
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}