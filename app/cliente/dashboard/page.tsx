import UltimosAlertas from "@/components/alerta";
import Caixa5 from "@/components/caixa5";
import Container from "@/components/container";
import Sidebar2 from "@/components/sidbar2";
import Tabela5, { Atividade } from "@/components/tabela5";
import { Bell, Calendar,  Layers,  Users2 } from "lucide-react";
const dadosAtividades: Atividade[] = [
  {
    funcionario: "Estefânio Schofield",
    status: "Ativo",
    ultimoAcesso: "14:45"
  },
  {
    funcionario: "Josimar Pedro",
    status: "Ativo",
    ultimoAcesso: "14:45 "
  },
  {
    funcionario: "Samuel Josué",
    status: "Inativo",
    ultimoAcesso: "14:45"
  }
];

const alertasExemplo = [
    {
        titulo: "Nova atualização disponível",
        data: "Hoje, 19:40"
    },
    {
        titulo: "Erro de conexão com App Mobile",
        data: "Ontem, 08:20"
    },
    {
        titulo: "Tentativa de acesso não autorizado",
        data: "Hoje, 15:55"
    },
    {
        titulo: "Erro de conexão com App Mobile",
        data: "Ontem, 08:20"
    },
    {
        titulo: "Tentativa de acesso não autorizado",
        data: "Ontem, 17:28"
    }
];
export default function dashboard() {
    return(
        <div>
            <Sidebar2>
               <Container titulo="Dashboard" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
               <div className="flex justify-around">
                <Caixa5 descricao="Equipamentos monitorados" num={157} icon={<Layers size={20} color="green"/>} />
                <Caixa5 descricao="Funcionários" num={12} icon={<Users2 size={20} color="blue"/>} />
                <Caixa5 descricao="Dias restantes" num={15} icon={<Calendar size={20} color="yellow"/>} />
                <Caixa5 descricao="Equipamentos monitorados" num={157} icon={<Bell size={20} color="pink"/>} />
               </div>


               <div className="w-[1180px] h-[300px] ml-3 mt-2 flex gap-3">
                <div className="w-[850px] h-full shadow-xl bg-[#040928]  border border-[#050e4c] rounded-2xl">

                </div>
                <div className="w-[500px] h-full shadow-xl bg-[#040928]  border border-[#050e4c] rounded-2xl">
                        <UltimosAlertas alertas={alertasExemplo} />
                </div>

               </div>
                <div className="w-[1180px] h-[300px] ml-3 mt-3 flex gap-3">
                <div className="w-[900px] h-full shadow-xl bg-[#040928]  border border-[#050e4c] rounded-2xl">

                </div>
                <div className="w-[570px] h-full shadow-xl bg-[#040928]  border border-[#050e4c] rounded-2xl">
                    {/* Título */}
                    <h2 className="text-white text-xl font-regular mb-4 mt-4 ml-4">Atividades</h2>

                    {/* Tabela */}
                    <Tabela5 dados={dadosAtividades} />
                </div>

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