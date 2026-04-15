import AtividadesFuncionario from "@/components/actividadeFun";
import UltimosAlertas from "@/components/alerta";
import BalancoMetodosPagamento from "@/components/balanco";
import Caixa5 from "@/components/caixa5";
import Container from "@/components/container";
import Sidebar2 from "@/components/sidbar2";
import Tabela5, { Atividade } from "@/components/tabela5";
import { Bell, Calendar, Layers, Users2 } from "lucide-react";

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

export default function Dashboard() {
    return(
        <div>
            <Sidebar2>
                <Container titulo="Dashboard" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
                    {/* Cards superiores */}
                    <div className="flex justify-around mb-4">
                        <Caixa5 descricao="Equipamentos monitorados" num={157} icon={<Layers size={20} color="green"/>} />
                        <Caixa5 descricao="Funcionários" num={12} icon={<Users2 size={20} color="blue"/>} />
                        <Caixa5 descricao="Dias restantes da Licença" num={15} icon={<Calendar size={20} color="yellow"/>} />
                        <Caixa5 descricao="Alertas" num={5} icon={<Bell size={20} color="pink"/>} />
                    </div>

                    {/* Primeira linha de cards - com alturas automáticas */}
                    <div className="flex gap-3 mb-3">
                        <div className="w-212.5 shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
                            <AtividadesFuncionario />
                        </div>
                        <div className="w-125 shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
                            <UltimosAlertas alertas={alertasExemplo} />
                        </div>
                    </div>

                    {/* Segunda linha de cards */}
                    <div className="flex gap-3">
                        <div className="w-225 shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
                            <BalancoMetodosPagamento />
                        </div>
                        <div className="w-142.5 shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
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