import AtividadesFuncionario2 from "@/components/actividadeFun2";
import AtividadesRecentes from "@/components/actividadeRec2";
import Caixa5 from "@/components/caixa5";
import Container from "@/components/container";
import EquipeOnline from "@/components/equipaOline";
import Sidebar3 from "@/components/sidbar3";
import { AlertCircle, AlertTriangle, Bell, MapPin,  UserCheck } from "lucide-react";



export default function dashboard() {
    return(
        <div>
          <Sidebar3>
            <div>
                <Container titulo="Dashboard" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
                     <div className="flex justify-around">
                         <Caixa5 descricao="Funcionários activos" num={157} icon={<UserCheck size={20} color="green"/>} />
                         <Caixa5 descricao="Locais monitorados" num={17} icon={<MapPin size={20} color="green"/>} />
                         <Caixa5 descricao="Falhas" num={15} icon={<AlertCircle size={20} color="yellow"/>} />
                         <Caixa5 descricao="Alertas" num={157} icon={<AlertTriangle size={20} color="red"/>} />
                    </div>


                    <div className="w-295 h-75 ml-3 mt-2 flex gap-3">
                         <div className="w-212.5 h-full shadow-xl bg-[#040928]  border border-[#050e4c] rounded-2xl">
                           <AtividadesFuncionario2 />
                         </div>
                         <div className="w-125 h-full shadow-xl bg-[#040928]  border border-[#050e4c] rounded-2xl">
                         <EquipeOnline />           
                        </div>
                   
                     </div>
                     <div className="w-295 h-75 ml-3 mt-2 flex gap-3">
                      <AtividadesRecentes 
                       
                        />
                   
                     </div>


                </Container>
            </div>
            </Sidebar3>  
        </div>
    )
}


{/* 
    git add .
    git commit -m "descrição das alterações"
    git push origin main
    
    */}