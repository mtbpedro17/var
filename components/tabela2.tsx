import { Pencil, PowerOff, Power } from 'lucide-react'

export interface TabelaResumo2 {
  id:               number
  designacaoSocial: string
  nif:              string
  contacto:         string
  status:           'Ativo' | 'Inativo'
  onEditar?:        () => void
  onDesativar?:     () => void
  onAtivar?:        () => void
}

interface TabelaResumoProps {
  dados: TabelaResumo2[]
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
            <th className="py-3 px-4 text-lg font-light">Status</th>
            <th className="py-3 px-4 text-lg font-light text-center">Acções</th>
          </tr>
        </thead>
        <tbody>
          {dados.length === 0 ? (
            <tr>
              <td colSpan={6} className="py-8 text-center text-gray-500 text-sm">
                Nenhuma empresa encontrada.
              </td>
            </tr>
          ) : (
            dados.map((item, index) => (
              <tr key={index} className="border-b border-[#050e4c] hover:bg-white/10 transition-colors duration-200">
                <td className="py-3 px-4 text-sm font-light">{item.id}</td>
                <td className="py-3 px-4 text-sm font-light">{item.designacaoSocial}</td>
                <td className="py-3 px-4 text-sm font-light">{item.nif}</td>
                <td className="py-3 px-4 text-sm font-light">{item.contacto}</td>
                <td className="py-3 px-4 text-sm font-light">
                  <span className={`px-2 py-1 rounded-full text-xs ${item.status === 'Ativo' ? 'bg-green-600/20 text-green-400' : 'bg-red-600/20 text-red-400'}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-center">
                  <div className="flex items-center justify-center gap-3">
                    <button onClick={item.onEditar} className="text-blue-400 hover:text-blue-300 transition-colors" title="Editar">
                      <Pencil size={16} />
                    </button>
                    {item.status === 'Ativo' ? (
                      <button onClick={item.onDesativar} className="text-red-400 hover:text-red-300 transition-colors" title="Desactivar">
                        <PowerOff size={16} />
                      </button>
                    ) : (
                      <button onClick={item.onAtivar} className="text-green-400 hover:text-green-300 transition-colors" title="Activar">
                        <Power size={16} />
                      </button>
                    )}
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