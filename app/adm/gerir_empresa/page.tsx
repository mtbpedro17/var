
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import Tabela2, { TabelaResumo2 } from "@/components/tabela2";


const resumoPlataforma2: TabelaResumo2 [] = [
{ id: 1, designacaoSocial: "Unitel",  nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
{ id: 2, designacaoSocial: "Unitel",  nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
{ id: 3, designacaoSocial: "Unitel",  nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
{ id: 4, designacaoSocial: "Unitel",  nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
{ id: 5, designacaoSocial: "Unitel",  nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
{ id: 7, designacaoSocial: "Unitel",  nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
{ id: 8, designacaoSocial: "Unitel",  nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
{ id: 9, designacaoSocial: "Unitel",  nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
{ id: 10, designacaoSocial: "Unitel",  nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
];

  

export default function Home() {
  return (
    <>
   
  
    <Sidebar>
    <Container titulo="Gerir Empresas" notificacao="🔔" usuario="Mutombo Pedro">
      
        <div className="text-white flex items-center justify-between w-full py-5 bg-blue-">
          <div>
        
           <div className="py-3  bg-white/10 text-white h-[40px] w-[300px] flex items-center gap-3 border border-white rounded-2xl">
              <span className="ml-2">🔍</span> 
              <input type="text" placeholder="Pesquisar..." className="outline-none placeholder:text-gray-400 h-[40px]  w-[300px]" />
           </div>
          </div>


           <div className="flex items-center justify-center gap-1 py-3  bg-white/10 text-white h-[40px] w-[150px] border border-white rounded-2xl">
          <span>📆 </span> 
          <p>25/12/2025</p>

        </div>


        </div>
        <div className="w-full mt-8 md:mt-3 lg:mt-5">
                    <div className="p-4 bg-[#20254b] rounded-lg overflow-hidden">
    
                      <div className="overflow-x-auto">
                        <div className="min-w-[600px] md:min-w-full">
                          <Tabela2 dados={resumoPlataforma2} />
                        </div>
                      </div>
                    </div>
        </div>
      
    </Container>
    </Sidebar>

    
    </>
  );
}
