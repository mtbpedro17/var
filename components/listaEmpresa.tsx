import { ChevronRight, Building2, FileText, Monitor } from 'lucide-react';
import Link from 'next/link';

interface EmpresaItem {
  id: string;
  nome: string;
  nif: string;
  equipamentos?: number;
}

interface ListaEmpresasProps {
  empresas?: EmpresaItem[];
  titulo?: string;
  visualizacao?: 'grelha' | 'coluna';
}

const empresasData: EmpresaItem[] = [
  { id: "tech-solution", nome: "Tech Solution LDA", nif: "00080460LA042", equipamentos: 12 },
  { id: "agromonitor", nome: "AgroMonitor SA", nif: "00080460LA042", equipamentos: 7 },
  { id: "energyflow", nome: "EnergyFlow Ibérica SL", nif: "00080460LA042", equipamentos: 3 },
  { id: "tech-solution-2", nome: "Tech Solution LDA", nif: "00080460LA042", equipamentos: 9 },
  { id: "agromonitor-2", nome: "AgroMonitor SA", nif: "00080460LA042", equipamentos: 5 },
  { id: "energyflow-2", nome: "EnergyFlow Ibérica SL", nif: "00080460LA042", equipamentos: 14 },
  { id: "tech-solution-3", nome: "Tech Solution LDA", nif: "00080460LA042", equipamentos: 2 },
  { id: "agromonitor-3", nome: "AgroMonitor SA", nif: "00080460LA042", equipamentos: 11 },
  { id: "energyflow-3", nome: "EnergyFlow Ibérica SL", nif: "00080460LA042", equipamentos: 6 },
];

export default function ListaEmpresas({ 
  empresas = empresasData,
  titulo = "Empresas com alertas",
  visualizacao = 'grelha'
}: ListaEmpresasProps) {
  return (
    <div className="w-full h-full p-4">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Building2 size={18} className="text-gray-400" />
          <h2 className="text-white text-base font-semibold">{titulo}</h2>
        </div>
        <button className="text-blue-400 hover:text-blue-300 transition-colors">
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Vista em GRELHA (3 colunas) */}
      {visualizacao === 'grelha' && (
        <div className="grid grid-cols-3 gap-3">
          {empresas.map((empresa) => (
            <div key={empresa.id} className="flex flex-col items-start justify-between bg-black/20 rounded-lg p-3 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex flex-col items-start gap-2 w-full">
                <div className="bg-gray-700 h-14 w-14 rounded-full flex items-center justify-center mx-auto">
                  <Building2 size={28} className="text-gray-400" />
                </div>
                <p className="text-white text-base font-medium text-center w-full">{empresa.nome}</p>
                <p className="text-gray-500 text-xs flex items-center gap-1 mx-auto">
                  <FileText size={10} />
                  NIF: {empresa.nif}
                </p>
                {/* 3ª coluna: equipamentos monitorados */}
                <p className="text-blue-400 text-xs flex items-center gap-1 mx-auto">
                  <Monitor size={10} />
                  {empresa.equipamentos ?? 0} equipamentos
                </p>
              </div>
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
      )}

      {/* Vista em COLUNA (vertical, sem alternância de cards) */}
      {visualizacao === 'coluna' && (
        <div className="flex flex-col gap-2">
          {empresas.map((empresa) => (
            <div key={empresa.id} className="flex items-center justify-between bg-black/20 rounded-lg px-4 py-3 border border-gray-800 hover:border-gray-700 transition-colors">
              <div className="flex items-center gap-3">
                <div className="bg-gray-700 h-10 w-10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Building2 size={20} className="text-gray-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">{empresa.nome}</p>
                  <p className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                    <FileText size={9} />
                    NIF: {empresa.nif}
                  </p>
                </div>
              </div>
              {/* Equipamentos monitorados */}
              <div className="flex items-center gap-1 text-blue-400 text-xs px-4">
                <Monitor size={12} />
                <span>{empresa.equipamentos ?? 0} equipamentos</span>
              </div>
              <Link 
                href={`/operacional/gerir_alerta/equipamento/${empresa.id}`}
                className="text-blue-400 hover:text-blue-300 text-xs font-medium flex items-center gap-1 bg-purple-600/20 px-3 py-1.5 rounded-lg transition-colors"
              >
                <span>Expandir</span>
                <ChevronRight size={12} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
