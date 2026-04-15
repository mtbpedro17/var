'use client'
import { useState } from 'react';
import Container from "@/components/container";
import ListaEmpresas from "@/components/listaEmpresa";
import PesquisarEmpresa from "@/components/pesquisaAlerta";
import Sidebar3 from "@/components/sidbar3";
import { Bell, LayoutGrid, List } from "lucide-react";

export default function Dashboard() {
    const [visualizacao, setVisualizacao] = useState<'grelha' | 'coluna'>('grelha');

    return(
        <div>
            <Sidebar3>
                <Container titulo="Gerir alertas" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
                    
                    <div className="space-y-4">
                        {/* Barra superior: pesquisa + toggle grelha/coluna */}
                        <div className="flex items-center gap-3">
                            <div className="flex-1">
                                <PesquisarEmpresa placeholder="Pesquisar empresa..." />
                            </div>
                            {/* Toggle visualização */}
                            <div className="flex items-center gap-1 bg-[#040928] border border-[#050e4c] rounded-lg p-1 mb-4">
                                <button
                                    onClick={() => setVisualizacao('grelha')}
                                    title="Vista em grelha"
                                    className={`p-2 rounded-md transition-colors ${
                                        visualizacao === 'grelha'
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    <LayoutGrid size={18} />
                                </button>
                                <button
                                    onClick={() => setVisualizacao('coluna')}
                                    title="Vista em coluna"
                                    className={`p-2 rounded-md transition-colors ${
                                        visualizacao === 'coluna'
                                            ? 'bg-blue-600 text-white'
                                            : 'text-gray-400 hover:text-white'
                                    }`}
                                >
                                    <List size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Lista de empresas */}
                        <div className="w-full shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl p-4">
                            <ListaEmpresas titulo="Empresas com alertas" visualizacao={visualizacao} />
                        </div>
                    </div>
                    
                </Container>
            </Sidebar3>  
        </div>
    )
}