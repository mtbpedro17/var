'use client'
import { useState } from "react";
import Caixa5 from "@/components/caixa5";
import Container from "@/components/container";
import Sidebar3 from "@/components/sidbar3";
import Tabela8, { Empresa } from "@/components/tabela8";

import { AlertTriangle, Bell, Building2, MonitorPause, MonitorPlay } from "lucide-react";
import FiltrosEmpresas from "@/components/filtroEmpresa";

const dadosEmpresas: Empresa[] = [
  { empresa: "Angolatelecom", designacao: "Tecnologia e comunica...", local: "Luanda", funcionarios: 48, status: "Ativo", alertas: 17 },
  { empresa: "Africell", designacao: "Tecnologia e Informática", local: "Huambo", funcionarios: 48, status: "Em pausa", alertas: 26 },
  { empresa: "Deloitte", designacao: "Cabiamento e Informát...", local: "Icolo e be...", funcionarios: 48, status: "Ativo", alertas: 29 },
  { empresa: "Ms Telecom", designacao: "Cabiamento e Infraestr...", local: "Moxico le...", funcionarios: 48, status: "Ativo", alertas: 76 },
  { empresa: "Angolatelecom", designacao: "Tecnologia e comuni...", local: "Malanje", funcionarios: 48, status: "Em pausa", alertas: 55 },
  { empresa: "Angolatelecom", designacao: "Tecnologia e comuni...", local: "Cabinda", funcionarios: 48, status: "Inativo", alertas: 46 },
  { empresa: "Angolatelecom", designacao: "Tecnologia e comuni...", local: "Avenida V...", funcionarios: 48, status: "Ativo", alertas: 75 },
  { empresa: "Angolatelecom", designacao: "Tecnologia e comuni...", local: "Marginal, r...", funcionarios: 48, status: "Inativo", alertas: 22 }
];

export default function Dashboard() {
    const [filtroStatus, setFiltroStatus] = useState("");
    const [filtroLocal, setFiltroLocal] = useState("");
    const [filtroDesignacao, setFiltroDesignacao] = useState("");
    const [pesquisa, setPesquisa] = useState("");

    // Filtrar empresas
    const dadosFiltrados = dadosEmpresas.filter(item => {
        const matchStatus = !filtroStatus || item.status === filtroStatus;
        const matchLocal = !filtroLocal || item.local.toLowerCase().includes(filtroLocal.toLowerCase());
        const matchDesignacao = !filtroDesignacao || item.designacao.toLowerCase().includes(filtroDesignacao.toLowerCase());
        const matchPesquisa = !pesquisa || 
            item.empresa.toLowerCase().includes(pesquisa.toLowerCase()) ||
            item.designacao.toLowerCase().includes(pesquisa.toLowerCase()) ||
            item.local.toLowerCase().includes(pesquisa.toLowerCase());
        
        return matchStatus && matchLocal && matchDesignacao && matchPesquisa;
    });

    return(
        <div>
            <Sidebar3>
                <div>
                    <Container titulo="Gerir empresas" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
                        <div className="flex justify-around">
                            <Caixa5 descricao="Total de empresas" num={431} icon={<Building2 size={20} color="green"/>} />
                            <Caixa5 descricao="Em serviço" num={44} icon={<MonitorPlay size={20} color="green"/>} />
                            <Caixa5 descricao="Em pausa" num={15} icon={<MonitorPause size={20} color="yellow"/>} />
                            <Caixa5 descricao="Alertas" num={17} icon={<AlertTriangle size={20} color="red"/>} />
                        </div>

                        <FiltrosEmpresas
                            onStatusChange={setFiltroStatus}
                            onLocalChange={setFiltroLocal}
                            onDesignacaoChange={setFiltroDesignacao}
                            onSearchChange={setPesquisa}
                        />
                        
                        <div className="pb-10 w-295 ml-3 mt-2 flex gap-3 shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
                            <Tabela8 dados={dadosFiltrados} />                  
                        </div>
                    </Container>
                </div>
            </Sidebar3>  
        </div>
    )
}