export interface Atividade {
    funcionario: string
    status: "Ativo" | "Inativo"
    ultimoAcesso: string
}

interface Tabela5Props {
  dados: Atividade[];
}

export default function Tabela5({dados}: Tabela5Props) {
    const statusColor = (status: string) => {
    switch (status) {
      case "Ativo": return "text-green-400";
      case "Inativo": return "text-gray-400";
      default: return "text-gray-300";
    }
  };
  
    return(
      <div className="w-full">
        <table className="w-full text-left text-white border-collapse">
          <thead className="sticky top-0 z-10 backdrop-[blur-sm]">
            <tr className="text-gray-200 border-b-2 border-[#050e4c]">
              <th className="py-3 px-4 text-lg font-light">Funcionário</th>
              <th className="py-3 px-4 text-lg font-light">Status</th>
              <th className="py-3 px-4 text-lg font-light">Último Acesso</th>
              <th className="py-3 px-4 text-lg text-center font-light">Ação</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr key={index} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
                <td className="py-3 px-4 text-sm font-light">{item.funcionario}</td>
                <td className={`py-3 px-4 font-light text-sm  ${statusColor(item.status)}`}>
                  {item.status}
                </td>
                <td className="py-3 px-4 text-sm font-light">{item.ultimoAcesso}</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-gray-400 hover:text-white transition-colors text-sm font-bold bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center mx-auto">
                    !
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}