export interface Alerta {
    titulo: string
    data: string
}

interface UltimosAlertasProps {
  alertas: Alerta[];
}

export default function UltimosAlertas({ alertas }: UltimosAlertasProps) {
    return(
        <div className="w-full rounded-2xl p-5">
            {/* Título */}
            <h2 className="text-white text-lg font-medium mb-2">Últimos Alertas</h2>
            
            {/* Lista de Alertas */}
            <div className="space-y-4">
                {alertas.map((alerta, index) => (
                    <div key={index} className="flex justify-between items-start border-b border-gray-700 pb-2">
                        <span className="text-white text-xs font-light">{alerta.titulo}</span>
                        <span className="text-gray-400 text-xs font-light whitespace-nowrap ml-4">{alerta.data}</span>
                    </div>
                ))}
            </div>
            
            {/* Link Ver Todos */}
            <div className="mt-4 text-right">
                <a href="#" className="text-blue-400 text-xs hover:text-blue-300 transition-colors">
                    Ver todos &gt;
                </a>
            </div>
        </div>
    )
}