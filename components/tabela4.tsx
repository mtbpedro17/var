import { Download } from "lucide-react";

export interface TabelaResumo4{
    responsavel: string
    empresa:string
    comprovativo:string
   
   
}

interface TabelaResumoProps3 {
  dados: TabelaResumo4[];
}

export default function Tabela3({dados}: TabelaResumoProps3) {
   
    return(
      <div className="w-full">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left text-white border-separate border-spacing-0">
            <thead className="bg-white/20 sticky top-0 z-10 backdrop-blur-sm">
              <tr className="text-gray-200 border-b border-gray-700">
                <th className="py-3 px-4 text-sm lg:text-base">Responsável</th>
                <th className="py-3 px-4 text-sm lg:text-base">Empresas</th>
                <th className="py-3 px-4 text-sm lg:text-base">Comprovativo</th>
                <th className="py-3 px-4 text-sm font-light lg:text-base"><button className="p-2 border bg-[#1e1f31] rounded-lg cursor-pointer">Exportar todos</button></th>

              </tr>
            </thead>
            <tbody>
              {dados.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-white/5 transition-colors duration-200">
                  <td className="py-3 px-4 text-sm lg:text-base">{item.responsavel}</td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.empresa}</td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.comprovativo}</td>
                  <td className="py-3 px-4 text-sm lg:text-base "><Download/></td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {dados.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 border border-gray-700">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-xs">Responsável</p>
                    <p className="text-white font-medium">{item.responsavel}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Empresas</p>
                    <p className="text-white">{item.empresa}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-xs">Comprovativos</p>
                    <p className="text-white font-medium">AOA {item.comprovativo}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Exportar todos</p>
                    <p className="text-white"><Download/></p>
                  </div>
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}