'use client'
import { useState } from 'react';
import Caixa5 from "@/components/caixa5";
import Container from "@/components/container";
import FiltrosFuncionarios from "@/components/filtroFuncionario";
import Sidebar2 from "@/components/sidbar2";
import Tabela6, { Funcionario } from "@/components/tabela6";
import { Bell, UserCheck, Users2, UserX } from "lucide-react";

const dadosFuncionarios: Funcionario[] = [
  { nome: "Estefanio schofield", cargo: "Engenheiro de TI", telefone: "946857209", status: "Ativo" },
  { nome: "Sérgio Teixeira", cargo: "Técnico de Cabos", telefone: "976589087", status: "Inativo" },
  { nome: "Lubamba Filipe", cargo: "Técnico de montagem", telefone: "947848789", status: "Pendente" },
  { nome: "Mutombo Babiule", cargo: "Especialista de cctv", telefone: "956475811", status: "Inativo" },
  { nome: "Aldair Da Cruz", cargo: "Engenheiro de redes", telefone: "956498567", status: "Inativo" },
  { nome: "Yuri Sousa", cargo: "Especialista de cctv", telefone: "976589087", status: "Pendente" },
  { nome: "Emmanuel Macongo", cargo: "Técnico de montagem", telefone: "976589087", status: "Ativo" },
  { nome: "Emanuel Luivuila", cargo: "Reparador de Cabos", telefone: "956498567", status: "Inativo" },
  { nome: "António João Teca", cargo: "Engenheiro de TI", telefone: "946857209", status: "Pendente" }
];

export default function Dashboard() {
    const [filtroStatus, setFiltroStatus] = useState('');
    const [filtroCargo, setFiltroCargo] = useState('');
    const [pesquisa, setPesquisa] = useState('');

    // Filtrar funcionários
    const dadosFiltrados = dadosFuncionarios.filter(item => {
        const matchStatus = !filtroStatus || item.status === filtroStatus;
        const matchCargo = !filtroCargo || item.cargo === filtroCargo;
        const matchPesquisa = !pesquisa || 
            item.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
            item.cargo.toLowerCase().includes(pesquisa.toLowerCase());
        
        return matchStatus && matchCargo && matchPesquisa;
    });

    return(
        <div>
            <Sidebar2>
                <Container titulo="Gerir funcionários" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
                    <div className="flex justify-around">
                        <Caixa5 descricao="Funcionários" num={157} icon={<Users2 size={20} color="white"/>} />
                        <Caixa5 descricao="Funcionários activos" num={12} icon={<UserCheck size={20} color="green"/>} />
                        <Caixa5 descricao="Funcionários inactivos" num={15} icon={<UserX size={20} color="red"/>} />
                        <Caixa5 descricao="Pendentes" num={3} icon={<Bell size={20} color="yellow"/>} />
                    </div>
                    <FiltrosFuncionarios
                                onStatusChange={setFiltroStatus}
                                onCargoChange={setFiltroCargo}
                                onSearchChange={setPesquisa}
                                onNovoFuncionario={() => console.log('Novo funcionário')}
                            />

                    <div className="pb-10 w-[1180px] ml-3 mt-2 bg-[#040928] rounded-2xl shadow-xl">
                        
                        
                        <div className="px-5 pb-5">
                            <Tabela6 dados={dadosFiltrados} />
                        </div>
                    </div>
                </Container>
            </Sidebar2>
        </div>
    )
}