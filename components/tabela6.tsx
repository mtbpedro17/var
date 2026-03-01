import { Lock, Link, Trash2 } from 'lucide-react';

export interface Funcionario {
    nome: string
    cargo: string
    telefone: string
    status: "Ativo" | "Inativo" | "Pendente"
}

interface Tabela6Props {
  dados: Funcionario[];
}

export default function Tabela6({dados}: Tabela6Props) {
    const statusColor = (status: string) => {
    switch (status) {
      case "Ativo": return "text-green-400";
      case "Inativo": return "text-gray-400";
      case "Pendente": return "text-yellow-400";
      default: return "text-gray-300";
    }
  };
  
    return(
      <div className="w-full rounded-2xl mt-2">
        <table className="w-full text-left text-white border-collapse rounded-2xl">
          <thead className="sticky top-0 z-10 backdrop-blur-sm">
            <tr className="text-gray-200 border-b-2 border-[#050e4c]">
              <th className="py-3 px-4 text-lg font-light">Nome</th>
              <th className="py-3 px-4 text-lg font-light">Cargo</th>
              <th className="py-3 px-4 text-lg font-light">Telefone</th>
              <th className="py-3 px-4 text-lg font-light">Status</th>
              <th className="py-3 px-4 text-lg text-center font-light">Ações</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((item, index) => (
              <tr key={index} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
                <td className="py-3 px-4 text-sm font-light">{item.nome}</td>
                <td className="py-3 px-4 text-sm font-light">{item.cargo}</td>
                <td className="py-3 px-4 text-sm font-light">{item.telefone}</td>
                <td className={`py-3 px-4 font-light text-sm ${statusColor(item.status)}`}>
                  {item.status}
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Lock size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Link size={18} />
                    </button>
                    <button className="text-gray-400 hover:text-white transition-colors">
                      <Trash2 size={18} color='red'/>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}