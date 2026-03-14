import AlertasRecentes from "@/components/alertaRelat";
import Caixa5 from "@/components/caixa5";
import Container from "@/components/container";
import DistribuicaoFuncionarios from "@/components/funcionarioRelat";
import FuncionariosInativos from "@/components/funinativoRelat";
import Sidebar3 from "@/components/sidbar3";
import {  Bell, CirclePause, UserCheck2, Users, UserX } from "lucide-react";

export default function Dashboard() {
    return(
        <div>
            <Sidebar3>
                {/* Remove a div desnecessária */}
                <Container titulo="Relatórios" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
                    
                    {/* Cards superiores */}
                    <div className="flex justify-around mb-4">
                        <Caixa5 descricao="Funcionarios cadastrados" num={4331} icon={<Users size={20} color="green"/>} />
                        <Caixa5 descricao="Em serviço" num={44} icon={<UserCheck2 size={20} color="green"/>} />
                        <Caixa5 descricao="Em pausa" num={15} icon={<UserX size={20} color="yellow"/>} />
                        <Caixa5 descricao="Alertas" num={17} icon={<CirclePause size={20} color="red"/>} />
                    </div>

                    {/* Primeira linha - gráfico e alertas recentes */}
                    <div className="px-4 w-full flex gap-4 mb-4">
                        <div className="flex-1">
                            <DistribuicaoFuncionarios />
                        </div>
                        <div className="flex- w-full">
                            <AlertasRecentes />
                        </div>
                    </div>

                    {/* Segunda linha - funcionários inativos */}
                    <div className="px-5 w-full">
                        <FuncionariosInativos />
                    </div>
                    
                </Container>
            </Sidebar3>  
        </div>
    )
}

{/* 
    git add .
    git commit -m "descrição das alterações"
    git push origin main
    
    */}