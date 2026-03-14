import { Link2 } from 'lucide-react';

export interface TabelaResumo2 {
   id: number;
   designacaoSocial: string;
   nif: string;
   contacto: string;
   objectoSocial: string;
   accoes: string;
}

interface TabelaResumoProps {
  dados: TabelaResumo2[];
}

export default function Tabela2({ dados }: TabelaResumoProps) {
  return (
    <div className="w-full rounded-2xl">
      <table className="w-full text-left text-white border-collapse rounded-2xl">
        <thead className="sticky top-0 z-10 backdrop-blur-sm">
          <tr className="text-gray-200 border-b-2 border-[#050e4c]">
            <th className="py-3 px-4 text-lg font-light">N°</th>
            <th className="py-3 px-4 text-lg font-light">Designação Social</th>
            <th className="py-3 px-4 text-lg font-light">NIF</th>
            <th className="py-3 px-4 text-lg font-light">Contacto</th>
            <th className="py-3 px-4 text-lg font-light">Objecto Social</th>
            <th className="py-3 px-4 text-lg font-light text-center">Acções</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
              <td className="py-3 px-4 text-sm font-light">{item.id}</td>
              <td className="py-3 px-4 text-sm font-light">{item.designacaoSocial}</td>
              <td className="py-3 px-4 text-sm font-light">{item.nif}</td>
              <td className="py-3 px-4 text-sm font-light">{item.contacto}</td>
              <td className="py-3 px-4 text-sm font-light">{item.objectoSocial}</td>
              <td className="py-3 px-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Link2 size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Link2 size={18} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}