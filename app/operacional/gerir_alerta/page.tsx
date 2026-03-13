'use client'
import Container from "@/components/container";
import ListaEmpresas from "@/components/listaEmpresa";
import PesquisarEmpresa from "@/components/pesquisaAlerta";
import Sidebar3 from "@/components/sidbar3";
import { Bell } from "lucide-react";

export default function Dashboard() {
    return(
        <div>
            <Sidebar3>
                {/* Remove a div desnecessária */}
                <Container titulo="Gerir alertas" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
                    
                    {/* Espaçamento superior para o conteúdo */}
                    <div className="space-y-4">
                        {/* Componente de pesquisa */}
                        <PesquisarEmpresa placeholder="Pesquisar empresa..." />

                        {/* Lista de empresas */}
                        <div className="w-full shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl p-4">
                            <ListaEmpresas titulo="Empresas com alertas" />
                        </div>
                    </div>
                    
                </Container>
            </Sidebar3>  
        </div>
    )
}