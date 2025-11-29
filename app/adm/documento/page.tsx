
import Caixa4 from "@/components/caixa4";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import Tabela4, { TabelaResumo4 } from "@/components/tabela4";
import { Bell, Search,  } from "lucide-react";

const caixasData3 = [
    { num: 67, descricao: "Documentos lidos",  cor:"#a8b3cf" },
    { num: 34, descricao: "Documentos não lidos", cor:"#a9b3cd" },
    { num: 34, descricao: "Documentos não lidos", cor:"#8c9ed8" },
    
  ];
const resumoPlataforma: TabelaResumo4[] = [
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
  ]

   

export default function Home() {
  return (
    <>
   
  
    <Sidebar>
    <Container titulo="Documentos" notificacao={<Bell size={20} />} usuario="Mutombo Pedro">
      <div className="flex w-full justify-center items-center gap-3">
        {
          caixasData3.map ((item, index)=> (
            <Caixa4 key={index} num={item.num} descricao={item.descricao} cor={item.cor} />
          ))
        }
      </div>
        <div className="text-white flex flex-col sm:flex-row items-center justify-between w-full py-4 md:py-5 gap-4 sm:gap-0">
               <div className="w-full sm:w-auto">
                     <div className="py-2 sm:py-3 bg-white/10 text-white h-10 w-full sm:w-[280px] md:w-[300px] flex items-center gap-3 border border-white rounded-2xl">
                      <Search size={18} className="ml-3 sm:ml-2" />
                        <input 
                          type="text" 
                          placeholder="Pesquisar..." 
                          className="outline-none placeholder:text-gray-400 h-10 w-full bg-transparent text-sm sm:text-base" 
                                />
                            </div>
                        </div>
                    </div>

   <div className="w-full mt-6 md:mt-4 lg:mt-5">
                          <div className="p-3 sm:p-4 bg-[#20254b] rounded-lg overflow-hidden">
                              <div className="overflow-x-auto">
                                  <div className="min-w-[600px] md:min-w-full">
                                      <Tabela4 dados={resumoPlataforma} />
                                  </div>
                              </div>
                          </div>
                      </div>
  

    </Container>
    </Sidebar>

    
    </>
  );
}
