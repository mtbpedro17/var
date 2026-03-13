import { ChevronRight, Building2, FileText } from 'lucide-react';

interface EmpresaItem {
  nome: string;
  nif: string;
}

interface ListaEmpresasProps {
  empresas?: EmpresaItem[];
  titulo?: string;
}

const empresasData: EmpresaItem[] = [
  { nome: "Tech Solution LDA", nif: "00080460LA042" },
  { nome: "AgroMonitor SA", nif: "00080460LA042" },
  { nome: "EnergyFlow Ibérica SL", nif: "00080460LA042" },
  { nome: "Tech Solution LDA", nif: "00080460LA042" },
  { nome: "AgroMonitor SA", nif: "00080460LA042" },
  { nome: "EnergyFlow Ibérica SL", nif: "00080460LA042" },
  { nome: "Tech Solution LDA", nif: "00080460LA042" },
  { nome: "AgroMonitor SA", nif: "00080460LA042" },
  { nome: "EnergyFlow Ibérica SL", nif: "00080460LA042" },
  { nome: "Tech Solution LDA", nif: "00080460LA042" },
  { nome: "AgroMonitor SA", nif: "00080460LA042" },
  { nome: "EnergyFlow Ibérica SL", nif: "00080460LA042" },
];

export default function ListaEmpresas({ 
  empresas = empresasData,
  titulo = "UX UI"
}: ListaEmpresasProps) {
  return (
    <div className="w-full h-fullp-4 bo">
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

      {/* Lista de empresas - renderizada uma única vez com map */}
      <div className="space-y-3 grid grid-cols-3 gap-3">
        {empresas.map((empresa, index) => (
          <div key={index} className="flex flex-col items-start justify-between border-b border-gray-800 pb-2 last:border-0 mb-2 bg-black/20 rounded-lg p-3 ">
            <div className="flex flex-col items-start gap-2">
              <p className='bg-gray-700 p-5 h-30 w-30 rounded-full flex items-center justify-center'><Building2 size={40} className="text-gray-400" /></p>
              <p className="text-white text-lg font-medium">{empresa.nome}</p>
              <p className="text-gray-500 text-xs flex items-center gap-1 mt-0.5">
                <FileText size={10} />
                NIF: {empresa.nif}
              </p>
            </div>
            <button className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1 ml-auto text-end bg-purple-600/20 px-3 py-2 rounded-lg mt-2">
              Expandir
              <ChevronRight size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}