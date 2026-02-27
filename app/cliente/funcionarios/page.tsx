import Caixa5 from "@/components/caixa5";
import Container from "@/components/container";
import Sidebar2 from "@/components/sidbar2";
import { Bell, UserCheck,  Users2, UserX } from "lucide-react";

export default function dashboard() {
    return(
        <div>
            <Sidebar2>
               <Container titulo="Gerir funcionários" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
               <div className="flex justify-around">
                <Caixa5 descricao="Funcionários" num={157} icon={<Users2 size={20} color="white"/>} />
                <Caixa5 descricao="Funcionários activos" num={12} icon={<UserCheck size={20} color="green"/>} />
                <Caixa5 descricao="Funcionários inactivos" num={15} icon={<UserX size={20} color="red"/>} />
                
               </div>


               <div className="w-[1180px] h-[300px] ml-3 mt-2 flex gap-3">
               

               </div>
                



               </Container>
            </Sidebar2>
        </div>
    )
}

{/* 
    git add .
    git commit -m "descrição das alterações"
    git push origin main
    
    */}