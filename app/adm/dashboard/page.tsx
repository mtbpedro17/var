import Caixa from "@/components/caixa";
import Caixa2 from "@/components/caixa2";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import Tabela, { TabelaResumo } from "@/components/tabela";
import { Bell } from "lucide-react";

export default function Home() {
  const caixasData = [
    { num: 120, descricao: "Empresas registradas" },
    { num: 45, descricao: "Empresas aprovadas" },
    { num: 78, descricao: "Empresas excluidas" },
    { num: 32, descricao: "Empreas Supensas" },
  ];

  const resumoPlataforma: TabelaResumo[] = [
    { empresa: "Unitel", licencaVendida: 1787, status: "Suspenso", totalPago: "12.320,45 kz" },
    { empresa: "Africel", licencaVendida: 2043, status: "Pendente", totalPago: "12.320,45 kz" },
    { empresa: "Angolatelecom", licencaVendida: 26, status: "Falhado", totalPago: "12.320,45 kz" },
    { empresa: "KG - Kituxi Tech", licencaVendida: 167, status: "Pago", totalPago: "12.320,45 kz" },
    { empresa: "KG - Kituxi Tech", licencaVendida: 167, status: "Pago", totalPago: "12.320,45 kz" },
    { empresa: "KG - Kituxi Tech", licencaVendida: 167, status: "Pago", totalPago: "12.320,45 kz" },
  ];

  return (
    <>
      <Sidebar>
        <Container titulo="Dashboard" notificacao={<Bell size={20} />} usuario="Mutombo Pedro">
          
          <div className="grid grid-cols-12 w-full gap-4 mt-5">
            {/* Grid de caixas - 8 colunas */}
            <div className="col-span-8">
              <div className="grid grid-cols-2 grid-rows-2 gap-3">
                {caixasData.map((item, index) => (
                  <Caixa 
                    key={index} 
                    num={item.num} 
                    descricao={item.descricao} 
                  />
                ))}
              </div>
            </div>

            {/* Card de Visão Geral - 4 colunas */}
            <div className="col-span-4">
              <div className="bg-[#262537] rounded-lg p-4 text-white h-full flex flex-col justify-center gap-6">
                <h1 className="font-semibold text-xl text-center">
                  Visão Geral de alertas
                </h1>
                <div className="flex flex-col gap-3">
                  <Caixa2 num={120} descricao="Empresas registradas" />
                  <Caixa2 num={45} descricao="Empresas aprovadas" />
                </div>
              </div>
            </div>
          </div>

          {/* Tabela */}
          <div className="w-full mt-5">
            <div className="p-4 rounded-2xl shadow-xl bg-[#040928] border border-[#050e4c]">
              <h2 className="text-xl font-semibold text-white mb-4">
                VAR resumo da plataforma
              </h2>
              <div className="overflow-x-auto">
                <div className="min-w-[600px]">
                  <Tabela dados={resumoPlataforma} />
                </div>
              </div>
            </div>
          </div>

        </Container>
      </Sidebar>
    </>
  );
}