'use client'
import Container from "@/components/container";
import HistoricoPagamentos from "@/components/historicoPagamento";
import LicencaAtiva from "@/components/licencaAtiva";
import Sidebar2 from "@/components/sidbar2";
import { Bell } from "lucide-react";



export default function dashboard() {
    return(
        <div>
            <Sidebar2>
               <Container titulo="Pagamentos & licenças" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
               <div className="w-[1180px]  ml-3 mt-2 flex flex-col gap-3">
               
                <LicencaAtiva 
                plano="Plano Premium"
                dataExpiracao="20/05/2026"
                onRenovar={() => console.log("Renovar licença")}
                onPagar={() => console.log("Pagar licença")}
                />
                <HistoricoPagamentos
                onFiltrarPeriodo={(periodo) => console.log("Período:", periodo)}
                onFiltrarStatus={(status) => console.log("Status:", status)}
                onExportar={() => console.log("Exportar PDFs")}
                />
               </div>
                



               </Container>
            </Sidebar2>
        </div>
    )
}