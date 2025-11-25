
import Caixa3 from "@/components/caixa3";
import Container2 from "@/components/container2";
import Sidebar from "@/components/sidebar";
import Tabela3, { TabelaResumo3 } from "@/components/tabela3";


 const caixasData = [
    {icon:"✅", num: 30, descricao: "Pagamentos confirmados (Ultimos. 30 dias)" },
    {icon:"🕐", num: 8, descricao: "Pagamentos pendentes" },
    {icon:"❌", num: 2, descricao: "Pagamentos Falhados ou recusados" },
    {icon:"🔒", num: 1, descricao: "Empresas suspensas por faltas " },
    
  ];

 const resumoPlataforma: TabelaResumo3 [] = [
  { empresa: "Unitel", licenca: "Plano Premium",  valor: 1000, date: "25/10/2025", status:"Pago", metodoPagamento:"Deposito" },
  { empresa: "KG Kituxi", licenca: "Plano Básico",  valor: 900, date: "11/02/2025", status:"Recusado", metodoPagamento:"Trans. Express"},
  { empresa: "Continental AI", licenca: "Plano Premium",  valor: 1000, date: "30/12/2025", status:"Recusado", metodoPagamento:"Trans. Normal"},
  { empresa: "Africell", licenca: "Plano Básico",  valor: 900, date: "21/07/2025", status:"Recusado", metodoPagamento:"Trans. Normal"},
  { empresa: "MTB tech", licenca: "Plano Premium",  valor: 1000, date: "11/02/2025", status:"Pago", metodoPagamento:"Deposito"},
];


  

export default function Home() {
  return (
    <>
   
  
    <Sidebar>
    <Container2 titulo="Gerir pagamento" mpagamento="M.Pagamento" status="Status" periodo="Perido">
      <div className="flex gap-3">
     {
      caixasData.map((item, index) =>(
         <Caixa3 key={index} icon={item.icon} num={item.num} descricao={item.descricao}/>
      ))}
      </div>
       <div className="text-white md:flex md:items-center md:justify-between w-full py-5 ">
         
         <h1 className="text-3xl font-bold">Pagamentos</h1>
          <div>
        
           <div className="py-3  bg-white/10 text-white h-[40px] w-[300px] flex items-center gap-3 border border-white rounded-2xl">
              <span className="ml-2">🔍</span> 
              <input type="text" placeholder="Pesquisar..." className="outline-none placeholder:text-gray-400 h-[40px]  w-[300px]" />
           </div>
          </div>   
        </div>
         <div className="w-full mt-3 md:mt-2 lg:mt-3">
           <div className="p-4 bg-[#20254b] rounded-lg overflow-hidden">
            
                 <div className="overflow-x-auto">
                   <div className="min-w-[600px] md:min-w-full">
                    <Tabela3 dados={resumoPlataforma} />
                   </div>
                  </div>
                  </div>
          </div>        
    </Container2>
    </Sidebar>

    
    </>
  );
}
