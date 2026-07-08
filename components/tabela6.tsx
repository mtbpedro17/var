import { Lock, Pencil, Trash2 } from 'lucide-react'

export interface Funcionario {
  id?:              string
  nome:             string
  cargo:            string
  telefone:         string
  status:           'Ativo' | 'Inativo' | 'Pendente'
  onEliminar?:      () => void
  onAlterarStatus?: () => void
}

interface Tabela6Props {
  dados: Funcionario[]
}

export default function Tabela6({ dados }: Tabela6Props) {
  return (
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
          {dados.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-8 text-center text-gray-500 text-sm">Nenhum funcionário encontrado.</td>
            </tr>
          ) : dados.map((item, index) => (
            <tr key={index} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
              <td className="py-3 px-4 text-sm font-light">{item.nome}</td>
              <td className="py-3 px-4 text-sm font-light">{item.cargo}</td>
              <td className="py-3 px-4 text-sm font-light">{item.telefone}</td>
              <td className="py-3 px-4 text-sm font-light">
                <span className={`px-2 py-1 rounded-full text-xs ${
                  item.status === 'Ativo'    ? 'bg-green-600/20 text-green-400'   :
                  item.status === 'Pendente' ? 'bg-yellow-600/20 text-yellow-400' :
                  'bg-gray-600/20 text-gray-400'
                }`}>
                  {item.status}
                </span>
              </td>
              <td className="py-3 px-4 text-center">
                <div className="flex items-center justify-center gap-3">
                  <button onClick={item.onAlterarStatus}
                    className="text-blue-400 hover:text-blue-300 transition-colors" title="Alterar status">
                    <Pencil size={16} />
                  </button>
                  <button onClick={item.onEliminar}
                    className="text-red-400 hover:text-red-300 transition-colors" title="Eliminar">
                    <Trash2 size={16} />
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