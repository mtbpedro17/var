export interface TabelaResumo3{
    empresa: string
    licenca: "Plano Básico" | "Plano Premium" | "Plano Standard" 
    valor:number
    date:string
    status: "Pago" | "Recusado"
    metodoPagamento: "Deposito" | "Trans. Express" | "Trans. Normal"
   
}

interface TabelaResumoProps3 {
  dados: TabelaResumo3[];
}

export default function Tabela3({dados}: TabelaResumoProps3) {
    const statusColor = (status: string) => {
    switch (status) {
      case "Pago": return "text-green-400";
      case "Recusado": return "text-red-500";
      default: return "text-gray-300";
    }
  };
  
    return(
      <div className="w-full">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left text-white border-separate border-spacing-0">
            <thead className="bg-white/20 sticky top-0 z-10 backdrop-blur-sm">
              <tr className="text-gray-200 border-b border-gray-700">
                <th className="py-3 px-4 text-sm lg:text-base">Empresa/Parceiro</th>
                <th className="py-3 px-4 text-sm lg:text-base">Plano/Licença</th>
                <th className="py-3 px-4 text-sm lg:text-base">Valor</th>
                <th className="py-3 px-4 text-sm lg:text-base">Data de pagamento</th>
                <th className="py-3 px-4 text-sm lg:text-base">Status</th>
                <th className="py-3 px-4 text-sm lg:text-base">Metodo de Pagamento</th>
                <th className="py-3 px-4 text-sm lg:text-base">Ações</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-white/5 transition-colors duration-200">
                  <td className="py-3 px-4 text-sm lg:text-base">{item.empresa}</td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.licenca}</td>
                  <td className="py-3 px-4 text-sm lg:text-base">AOA {item.valor}</td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.date}</td>
                  <td className={`py-3 px-4 font-semibold text-sm lg:text-base ${statusColor(item.status)}`}>
                    {item.status}
                  </td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.metodoPagamento}</td>
                  <td className="py-3 px-4 text-sm lg:text-base"><button className="p-3 bg-[#423dd0] rounded-lg cursor-pointer border">Ver Detalhes</button></td>
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
                    <p className="text-gray-400 text-xs">Empresa</p>
                    <p className="text-white font-medium">{item.empresa}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Plano/Lincença</p>
                    <p className="text-white">{item.licenca}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-xs">Valor</p>
                    <p className="text-white font-medium">AOA {item.valor}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Data de Pagamento</p>
                    <p className="text-white">{item.date}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-xs">Status</p>
                    <p className={`font-semibold ${statusColor(item.status)}`}>
                      {item.status}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs">Metodo de Pagamento</p>
                    <p className="text-white">{item.metodoPagamento}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <p className="text-gray-400 text-xs">Ações</p>
                    <p className="text-white font-medium"><button className="p-3 bg-[#423dd0] rounded-lg cursor-pointer border">Ver detalhes</button></p>
                  </div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}