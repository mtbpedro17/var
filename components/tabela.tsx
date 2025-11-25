export interface TabelaResumo{
    empresa: string
    licencaVendida: number
    status: "Pago" | "Pendente" | "Suspenso" | "Falhado"
    totalPago: string
}

interface TabelaResumoProps {
  dados: TabelaResumo[];
}

export default function Tabela({dados}: TabelaResumoProps) {
    const statusColor = (status: string) => {
    switch (status) {
      case "Pago": return "text-green-400";
      case "Pendente": return "text-yellow-400";
      case "Suspenso": return "text-red-500";
      case "Falhado": return "text-red-300";
      default: return "text-gray-300";
    }
  };
  
    return(
      <div className="w-full">
        {/* Desktop Table */}
        <div className="hidden md:block">
          <table className="w-full text-left text-white border-separate border-spacing-0">
            <thead className="bg-white/10 sticky top-0 z-10 backdrop-blur-sm">
              <tr className="text-gray-200 border-b border-gray-700">
                <th className="py-3 px-4 text-sm lg:text-base">Empresa</th>
                <th className="py-3 px-4 text-sm lg:text-base">Licenças vendidas</th>
                <th className="py-3 px-4 text-sm lg:text-base">Status</th>
                <th className="py-3 px-4 text-sm lg:text-base">Total Pago</th>
              </tr>
            </thead>
            <tbody>
              {dados.map((item, index) => (
                <tr key={index} className="border-b border-gray-700 hover:bg-white/10 transition-colors duration-200">
                  <td className="py-3 px-4 text-sm lg:text-base">{item.empresa}</td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.licencaVendida}</td>
                  <td className={`py-3 px-4 font-semibold text-sm lg:text-base ${statusColor(item.status)}`}>
                    {item.status}
                  </td>
                  <td className="py-3 px-4 text-sm lg:text-base">{item.totalPago}</td>
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
                    <p className="text-gray-400 text-xs">Licenças vendidas</p>
                    <p className="text-white">{item.licencaVendida}</p>
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
                    <p className="text-gray-400 text-xs">Total Pago</p>
                    <p className="text-white">{item.totalPago}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
}