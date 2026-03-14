import Caixa4 from "@/components/caixa4";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import Tabela4, { TabelaResumo4 } from "@/components/tabela4";
import { Bell, Search, FileText, File, FileCheck } from "lucide-react";

const caixasData3 = [
    { 
        icon: <FileText size={24} />,
        num: 67, 
        descricao: "Documentos lidos"
    },
    { 
        icon: <File size={24} />,
        num: 34, 
        descricao: "Documentos não lidos"
    },
    { 
        icon: <FileCheck size={24} />,
        num: 34, 
        descricao: "Documentos arquivados"
    },
];

const resumoPlataforma: TabelaResumo4[] = [
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
    { responsavel: "Amadeus Jó", empresa: "MartinSoft", comprovativo: "Comprovativo.pdf" },
];

export default function Home() {
    return (
        <>
            <Sidebar>
                <Container titulo="Documentos" notificacao={<Bell size={20} />} usuario="Mutombo Pedro">
                    
                    {/* Cards em linha */}
                    <div className="flex w-full justify-center items-center gap-3 mb-4">
                        {caixasData3.map((item, index) => (
                            <Caixa4 
                                key={index} 
                                icon={item.icon}
                                num={item.num} 
                                descricao={item.descricao} 
                            />
                        ))}
                    </div>

                    {/* Barra de pesquisa */}
                    <div className="flex justify-end w-full mb-4">
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
                    </div>

                    {/* Tabela */}
                    <div className="w-full">
                        <div className="p-4 shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
                            <div className="overflow-x-auto">
                                <div className="min-w-[600px]">
                                    <Tabela4 dados={resumoPlataforma} />
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </Sidebar>
        </>
    );
}