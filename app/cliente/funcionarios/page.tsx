import UltimosAlertas from "@/components/alerta";
import Caixa5 from "@/components/caixa5";
import Container from "@/components/container";
import Sidebar2 from "@/components/sidbar2";
import Tabela5, { Atividade } from "@/components/tabela5";
import { Bell, Calendar,  Layers,  UserCheck,  Users2, UserX } from "lucide-react";
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