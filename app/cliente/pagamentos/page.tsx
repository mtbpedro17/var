'use client'
import Container from "@/components/container";
import HistoricoPagamentos from "@/components/historicoPagamento";
import LicencaAtiva from "@/components/licencaAtiva";
import Sidebar2 from "@/components/sidbar2";
import Tabela7, { Pagamento } from "@/components/tabela7";
import { Bell } from "lucide-react";

const dadosPagamentos: Pagamento[] = [
  { data: "18/06/2026", valor: "KZS 500,00", chaveLicenca: "BL10JH98", metodo: "Transferência Bancária", status: "Pago" },
  { data: "14/06/2026", valor: "KZS 7000,00", chaveLicenca: "BL10JH98", metodo: "Paypay AO", status: "Atrasado" },
  { data: "16/06/2026", valor: "KZS 1500,00", chaveLicenca: "BL10JH98", metodo: "Multicaixa Express", status: "Pago" },
  { data: "17/06/2026", valor: "KZS 50.000,00", chaveLicenca: "BL10JH98", metodo: "Transferência Bancária", status: "Pendente" },
  { data: "11/06/2026", valor: "KZS 4000,00", chaveLicenca: "BL10JH98", metodo: "Paypay AO", status: "Atrasado" },
  { data: "10/06/2026", valor: "KZS 5000,00", chaveLicenca: "BL10JH98", metodo: "Multicaixa Express", status: "Pendente" },
  { data: "19/06/2026", valor: "KZS 1500,00", chaveLicenca: "BL10JH98", metodo: "Paypay AO", status: "Atrasado" },
  { data: "19/06/2026", valor: "KZS 500,00", chaveLicenca: "BL10JH98", metodo: "Multicaixa Express", status: "Pago" }
];

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

               <div className="w-[1180px]  ml-3 mt-1 flex flex-col gap-3 border-[#050e4c] border rounded-2xl p-4 shadow-xl bg-[#040928]">
               
                <Tabela7 dados={dadosPagamentos} />
               </div>
                



               </Container>
            </Sidebar2>
        </div>
    )
}