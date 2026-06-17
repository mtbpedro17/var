import { Download, Eye, Archive, Trash2 } from "lucide-react"

export interface TabelaResumo4 {
  id:           string
  responsavel:  string
  empresa:      string
  comprovativo: string
  status:       'NaoLido' | 'Lido' | 'Arquivado'
  urlArquivo:   string
  onMarcarLido?: () => void
  onArquivar?:   () => void
  onEliminar?:   () => void
}

interface TabelaResumoProps4 {
  dados: TabelaResumo4[]
  onExportarTodos?: () => void
}

const statusBadge = (status: string) => {
  switch (status) {
    case 'Lido':      return 'bg-green-600/20 text-green-400'
    case 'NaoLido':   return 'bg-yellow-600/20 text-yellow-400'
    case 'Arquivado': return 'bg-gray-600/20 text-gray-400'
    default:          return 'bg-gray-600/20 text-gray-400'
  }
}

const statusLabel = (status: string) => {
  switch (status) {
    case 'Lido':      return 'Lido'
    case 'NaoLido':   return 'Não lido'
    case 'Arquivado': return 'Arquivado'
    default:          return status
  }
}

export default function Tabela4({ dados, onExportarTodos }: TabelaResumoProps4) {
  return (
    <div className="w-full rounded-2xl">
      <table className="w-full text-left text-white border-collapse rounded-2xl">
        <thead className="sticky top-0 z-10 backdrop-blur-sm">
          <tr className="text-gray-200 border-b-2 border-[#050e4c]">
            <th className="py-3 px-4 text-lg font-light">Responsável</th>
            <th className="py-3 px-4 text-lg font-light">Empresa</th>
            <th className="py-3 px-4 text-lg font-light">Comprovativo</th>
            <th className="py-3 px-4 text-lg font-light">Status</th>
            <th className="py-3 px-4 text-lg font-light text-center">
              <button
                onClick={onExportarTodos}
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors border border-transparent"
              >
                Exportar todos
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {dados.length === 0 ? (
            <tr>
              <td colSpan={5} className="py-8 text-center text-gray-500 text-sm">
                Nenhum documento encontrado.
              </td>
            </tr>
          ) : (
            dados.map((item, index) => (
              <tr key={index} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
                <td className="py-3 px-4 text-sm font-light">{item.responsavel}</td>
                <td className="py-3 px-4 text-sm font-light">{item.empresa}</td>
                <td className="py-3 px-4 text-sm font-light">{item.comprovativo}</td>
                <td className="py-3 px-4 text-sm font-light">
                  <span className={`px-2 py-1 rounded-full text-xs ${statusBadge(item.status)}`}>
                    {statusLabel(item.status)}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <a
                      href={item.urlArquivo}
                      target="_blank"
                      rel="noopener noreferrer"
                      download={item.comprovativo}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                      title="Baixar"
                    >
                      <Download size={16} />
                    </a>
                    {item.status === 'NaoLido' && (
                      <button onClick={item.onMarcarLido} className="text-yellow-400 hover:text-yellow-300 transition-colors" title="Marcar como lido">
                        <Eye size={16} />
                      </button>
                    )}
                    {item.status !== 'Arquivado' && (
                      <button onClick={item.onArquivar} className="text-gray-400 hover:text-white transition-colors" title="Arquivar">
                        <Archive size={16} />
                      </button>
                    )}
                    <button onClick={item.onEliminar} className="text-red-400 hover:text-red-300 transition-colors" title="Eliminar">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}