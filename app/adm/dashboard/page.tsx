import Caixa from "@/components/caixa";
import Caixa2 from "@/components/caixa2";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import Tabela, {TabelaResumo} from "@/components/tabela";

export default function Home() {
  const caixasData = [
    { num: 120, descricao: "Empresas registradas" },
    { num: 45, descricao: "Empresas aprovadas" },
    { num: 78, descricao: "Empresas excluidas" },
    { num: 32, descricao: "Empreas Supensas" },
  ];

  const caixasData2 = [
    { num: 503, descricao: "Total de alertas recebidos",  cor:"#374256" },
    { num: 450, descricao: "Total de alertas confirmados", cor:"#192d4f" },
    
  ];

 const resumoPlataforma: TabelaResumo [] = [
  { empresa: "Unitel", licencaVendida: 1787,  status: "Suspenso", totalPago: "12.320,45 kz" },
  { empresa: "Africel", licencaVendida: 2043,  status: "Pendente", totalPago: "12.320,45 kz" },
  { empresa: "Angolatelecom", licencaVendida: 26,  status: "Falhado", totalPago: "12.320,45 kz" },
  { empresa: "KG - Kituxi Tech", licencaVendida: 167,  status: "Pago", totalPago: "12.320,45 kz" },
  { empresa: "KG - Kituxi Tech", licencaVendida: 167,  status: "Pago", totalPago: "12.320,45 kz" },
  { empresa: "KG - Kituxi Tech", licencaVendida: 167,  status: "Pago", totalPago: "12.320,45 kz" },
  
];


  return (
    <>
      <Sidebar>
        <Container titulo="Dashboard" notificacao="🔔" usuario="Mutombo Pedro">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 w-full gap-4 md:gap-5 mt-5">
            
            
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 grid-rows-2 gap-3 md:gap-4">
                {caixasData.map((item, index) => (
                  <Caixa key={index} num={item.num} descricao={item.descricao} />
                ))}
              </div>
            </div>

            
            <div className="lg:col-span-4">
              <div className="bg-[#262537] rounded-lg p-4 md:p- text-white h-full md:h-[255px] flex flex-col justify-center gap-4 md:gap-6">
                <h1 className="font-semibold text-lg md:text-xl text-center md:text-left md:mt-5">
                  Visão Geral de alertas
                </h1>
                <div className="space-y-4">
                  {caixasData2.map((item, index) => (
                    <Caixa2 key={index} num={item.num} descricao={item.descricao} cor={item.cor} />
                  ))}
                </div>
              </div>
            </div>

          </div>

        
          <div className="w-full mt-8 md:mt-3 lg:mt-5">
            <div className="p-4 bg-[#20254b] rounded-lg overflow-hidden">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-4">
                VAR resumo da plataforma
              </h2>
              <div className="overflow-x-auto">
                <div className="min-w-[600px] md:min-w-full">
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