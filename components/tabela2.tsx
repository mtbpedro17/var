export interface TabelaResumo2{
   id:number
   designacaoSocial:string
   nif:string
   contacto:string
   objectoSocial:string
   accoes:string
}

interface TabelaResumoProps {
  dados: TabelaResumo2[];
}

export default function Tabela2({dados}: TabelaResumoProps) {
   
  
    return(
      <div className="w-full">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left text-white border-separate border-spacing-0">
            <thead className="bg-white/20 sticky top-0 z-10 backdrop-blur-sm">
              <tr className="text-gray-200 border-b border-gray-700">
                <th className="py-3 px-4 text-sm lg:text-base">N°</th>
                <th className="py-3 px-4 text-sm lg:text-base">Designação Social</th>
                <th className="py-3 px-4 text-sm lg:text-base">NIF</th>
                <th className="py-3 px-4 text-sm lg:text-base">Contacto</th>
                <th className="py-3 px-4 text-sm lg:text-base">Objecto Social</th>
                <th className="py-3 px-4 text-sm lg:text-base">Acções</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-white/5 transition-colors duration-200">
                  <td className="py-3 px-4 text-sm lg:text-base">{item.id}</td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.designacaoSocial}</td>
                  <td className="py-3 px-4 font-semibold text-sm lg:text-base">{item.nif}</td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.contacto}</td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.objectoSocial}</td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.accoes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-3">
          {dados.map((item, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-4 border-b border-gray-700">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-xs">Empresa</p>
                    <p className="text-white font-medium">{item.id}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Licenças vendidas</p>
                    <p className="text-white">{item.designacaoSocial}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-xs">Status</p>
                    <p className="text-white">{item.nif}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Total Pago</p>
                    <p className="text-white">{item.contacto}</p>
                    <p className="text-white">{item.objectoSocial}</p>

                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}