import { ChevronRight, Building2, FileText } from 'lucide-react';
import Link from 'next/link';

interface EmpresaItem {
  id: string;  // Adicionar ID único
  nome: string;
  nif: string;
}

interface ListaEmpresasProps {
  empresas?: EmpresaItem[];
  titulo?: string;
}

const empresasData: EmpresaItem[] = [
  { id: "tech-solution", nome: "Tech Solution LDA", nif: "00080460LA042" },
  { id: "agromonitor", nome: "AgroMonitor SA", nif: "00080460LA042" },
  { id: "energyflow", nome: "EnergyFlow Ibérica SL", nif: "00080460LA042" },
  { id: "tech-solution-2", nome: "Tech Solution LDA", nif: "00080460LA042" },
  { id: "agromonitor-2", nome: "AgroMonitor SA", nif: "00080460LA042" },
  { id: "energyflow-2", nome: "EnergyFlow Ibérica SL", nif: "00080460LA042" },
  { id: "tech-solution-3", nome: "Tech Solution LDA", nif: "00080460LA042" },
  { id: "agromonitor-3", nome: "AgroMonitor SA", nif: "00080460LA042" },
  { id: "energyflow-3", nome: "EnergyFlow Ibérica SL", nif: "00080460LA042" },
  { id: "tech-solution-4", nome: "Tech Solution LDA", nif: "00080460LA042" },
  { id: "agromonitor-4", nome: "AgroMonitor SA", nif: "00080460LA042" },
  { id: "energyflow-4", nome: "EnergyFlow Ibérica SL", nif: "00080460LA042" },
];

export default function ListaEmpresas({ 
  empresas = empresasData,
  titulo = "UX UI"
}: ListaEmpresasProps) {
  return (
    <div className="w-full h-full p-4">
      {/* Cabeçalho com título */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Building2 size={18} className="text-gray-400" />
          <h2 className="text-white text-base font-semibold">{titulo}</h2>
        </div>
        <button className="text-blue-400 hover:text-blue-300 transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Lista de empresas em grid */}
      <div className="grid grid-cols-3 gap-3">
        {empresas.map((empresa, index) => (
          <div key={empresa.id} className="flex flex-col items-start justify-between bg-black/20 rounded-lg p-3 border border-gray-800 hover:border-gray-700 transition-colors">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className='bg-gray-700 h-20 w-20 rounded-full flex items-center justify-center mx-auto'>
                <Building2 size={40} className="text-gray-400" />
              </div>
              <p className="text-white text-lg font-medium text-center w-full">{empresa.nome}</p>
              <p className="text-gray-500 text-xs flex items-center gap-1 mt-0.5 mx-auto">
                <FileText size={10} />
                NIF: {empresa.nif}
              </p>
            </div>
            
            {/* Link dinâmico para cada empresa */}
            <Link 
              href={`/operacional/gerir_alerta/equipamento/${empresa.id}`}
              className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 ml-auto bg-purple-600/20 px-3 py-2 rounded-lg mt-3 transition-colors w-full justify-center"
            >
              <span>Expandir</span>
              <ChevronRight size={12} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}