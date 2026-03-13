'use client'
import FiltrosAlertas from "@/components/botaoNotifica";
import Configuracoes from "@/components/configNotifica";
import Container from "@/components/container";
import EstatisticasAlertas from "@/components/estatisticaNotifica";
import ListaAlertas from "@/components/listaNotifica";
import PesquisarEmpresa from "@/components/pesquisaAlerta";
import Sidebar3 from "@/components/sidbar3";
import UltimaNotificacao from "@/components/ultimaNotifica";
import { Bell, Mail, Settings } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
    const [configs, setConfigs] = useState([
        { id: "email", ativo: false },
        { id: "todas", ativo: true },
        { id: "prioridade", ativo: false }
    ]);

    const handleToggle = (id: string, ativo: boolean) => {
        setConfigs(prev => prev.map(c => 
            c.id === id ? { ...c, ativo } : c
        ));
    };

    const [filtro, setFiltro] = useState("alertas");

    return(
        <div>
            <Sidebar3>
                {/* Remove a div desnecessária */}
                <Container titulo="Notificações" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
                    <div className="flex gap-2">
                        {/* Coluna esquerda */}
                        <div className="p-5 w-225 flex flex-col gap-4">
                            <FiltrosAlertas 
                                filtroAtivo={filtro}
                                onFiltroChange={setFiltro}
                            />
                            <PesquisarEmpresa placeholder="Pesquisar notificação..." />
                            <ListaAlertas />
                        </div>

                        {/* Coluna direita */}
                        <div className="p-5 w-100 flex flex-col gap-3">
                            <EstatisticasAlertas />
                            <UltimaNotificacao 
                                onVerDetalhes={() => console.log("Ver detalhes")}
                                onResolver={() => console.log("Resolver")}
                            />
                            <Configuracoes 
                                configuracoes={[
                                    { id: "email", label: "Ativar notificações por e-mail", icon: <Mail size={18} />, ativo: configs.find(c => c.id === "email")?.ativo },
                                    { id: "todas", label: "Receber todas notificações", icon: <Bell size={18} />, ativo: configs.find(c => c.id === "todas")?.ativo },
                                    { id: "prioridade", label: "Definir prioridade automática", icon: <Settings size={18} />, ativo: configs.find(c => c.id === "prioridade")?.ativo }
                                ]}
                                onToggle={handleToggle}
                            />
                        </div>                     
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