import { Download } from "lucide-react";

export interface TabelaResumo4 {
    responsavel: string;
    empresa: string;
    comprovativo: string;
}

interface TabelaResumoProps4 {
  dados: TabelaResumo4[];
}

export default function Tabela4({ dados }: TabelaResumoProps4) {
  return (
    <div className="w-full rounded-2xl">
      <table className="w-full text-left text-white border-collapse rounded-2xl">
        <thead className="sticky top-0 z-10 backdrop-blur-sm">
          <tr className="text-gray-200 border-b-2 border-[#050e4c]">
            <th className="py-3 px-4 text-lg font-light">Responsável</th>
            <th className="py-3 px-4 text-lg font-light">Empresas</th>
            <th className="py-3 px-4 text-lg font-light">Comprovativo</th>
            <th className="py-3 px-4 text-lg font-light text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors border border-transparent">
                Exportar todos
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
              <td className="py-3 px-4 text-sm font-light">{item.responsavel}</td>
              <td className="py-3 px-4 text-sm font-light">{item.empresa}</td>
              <td className="py-3 px-4 text-sm font-light">{item.comprovativo}</td>
              <td className="py-3 px-4 text-center">
                <button className="text-gray-400 hover:text-white transition-colors">
                  <Download size={18} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}