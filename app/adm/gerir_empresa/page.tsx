import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import Tabela2, { TabelaResumo2 } from "@/components/tabela2";
import { Search, Bell, Calendar } from "lucide-react";

const resumoPlataforma2: TabelaResumo2[] = [
    { id: 1, designacaoSocial: "Unitel", nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
    { id: 2, designacaoSocial: "Unitel", nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
    { id: 3, designacaoSocial: "Unitel", nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
    { id: 4, designacaoSocial: "Unitel", nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
    { id: 5, designacaoSocial: "Unitel", nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
    { id: 7, designacaoSocial: "Unitel", nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
    { id: 8, designacaoSocial: "Unitel", nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
    { id: 9, designacaoSocial: "Unitel", nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
    { id: 10, designacaoSocial: "Unitel", nif: "01234567034AL23", contacto: "926 267 999", objectoSocial: "Comércio de produtos eletrónicos", accoes: "Editar|Eliminar" },
];

export default function Home() {
    return (
        <>
            <Sidebar>
                <Container titulo="Gerir Empresas" notificacao={<Bell size={20} />} usuario="Mutombo Pedro">
                    
                    {/* Header fixo */}
                    <div className="text-white flex items-center justify-between w-full py-4">
                        {/* Campo de pesquisa */}
                        <div className="w-[300px]">
                            <div className="bg-[#040928] text-white h-10 flex items-center gap-3 border border-[#050e4c] rounded-lg">
                                <Search size={18} className="ml-3 text-gray-400" />
                                <input 
                                    type="text" 
                                    placeholder="Pesquisar..." 
                                    className="outline-none placeholder:text-gray-500 h-10 w-full bg-transparent text-sm text-white" 
                                />
                            </div>
                        </div>

                        {/* Data */}
                        <div className="flex items-center justify-center gap-2 bg-[#040928] text-white h-10 w-[140px] border border-[#050e4c] rounded-lg">
                            <Calendar size={16} className="text-gray-400" />
                            <p className="text-sm">25/12/2025</p>
                        </div>
                    </div>

                    {/* Tabela */}
                    <div className="w-full mt-4">
                        <div className="p-4 rounded-2xl shadow-xl bg-[#040928] border border-[#050e4c]">
                            <div className="overflow-x-auto">
                                <div className="min-w-[600px]">
                                    <Tabela2 dados={resumoPlataforma2} />
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </Sidebar>
        </>
    );
}