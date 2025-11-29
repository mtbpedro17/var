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
                    
                    {/* Header responsivo */}
                    <div className="text-white flex flex-col sm:flex-row items-center justify-between w-full py-4 md:py-5 gap-4 sm:gap-0">
                        {/* Campo de pesquisa */}
                        <div className="w-full sm:w-auto">
                            <div className="py-2 sm:py-3 bg-white/10 text-white h-10 w-full sm:w-[280px] md:w-[300px] flex items-center gap-3 border border-white rounded-2xl">
                                <Search size={18} className="ml-3 sm:ml-2" />
                                <input 
                                    type="text" 
                                    placeholder="Pesquisar..." 
                                    className="outline-none placeholder:text-gray-400 h-10 w-full bg-transparent text-sm sm:text-base" 
                                />
                            </div>
                        </div>

                        {/* Data */}
                        <div className="flex items-center justify-center gap-2 py-2 sm:py-3 bg-white/10 text-white h-10 w-full sm:w-[140px] md:w-[150px] border border-white rounded-2xl">
                            <Calendar size={16} className="sm:size-[18px]" />
                            <p className="text-sm sm:text-base">25/12/2025</p>
                        </div>
                    </div>

                    {/* Tabela responsiva */}
                    <div className="w-full mt-6 md:mt-4 lg:mt-5">
                        <div className="p-3 sm:p-4 bg-[#20254b] rounded-lg overflow-hidden">
                            <div className="overflow-x-auto">
                                <div className="min-w-[600px] md:min-w-full">
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