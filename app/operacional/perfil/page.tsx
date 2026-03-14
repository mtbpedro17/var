'use client'
import Container from "@/components/container";
import PerfilFuncionario from "@/components/perfilFuncuinario";
import Preferencias from "@/components/preferenciaPerfil";
import Seguranca from "@/components/segurancaPerfil";
import Sidebar3 from "@/components/sidbar3";
import ZonaPerigo from "@/components/zonaPerigo";
import { Bell } from "lucide-react";
import { useState } from "react";

export default function Dashboard() {
    const handleExcluirConta = () => {
        if (confirm('Tem certeza que deseja excluir sua conta? Esta ação é irreversível!')) {
            console.log('Conta excluída');
        }
    }
    
    const [doisFatores, setDoisFatores] = useState(false);
    const [alertaAtivo, setAlertaAtivo] = useState(true);
    const [emailAtivo, setEmailAtivo] = useState(true);
    const [idioma, setIdioma] = useState("Português (PT)");
    const [tema, setTema] = useState("Padrão");
    
    return(
        <div>
            <Sidebar3>
                {/* Remove a div desnecessária */}
                <Container titulo="Perfil" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
                    
                    {/* Primeira linha - Perfil + Preferências */}
                    <div className="px-4 w-full flex gap-4 mb-4">
                        <div className="flex-1 w-full">
                            <PerfilFuncionario />
                        </div>
                        <div className="flex">
                            <Preferencias 
                                alertaAtivo={alertaAtivo}
                                emailAtivo={emailAtivo}
                                idiomaSelecionado={idioma}
                                temaSelecionado={tema}
                                onToggleAlerta={setAlertaAtivo}
                                onToggleEmail={setEmailAtivo}
                                onIdiomaChange={setIdioma}
                                onTemaChange={setTema}
                            />
                        </div>
                    </div>

                    {/* Segunda linha - Segurança + Zona de Perigo */}
                    <div className="px-4 w-full flex gap-4 mb-4">
                        <div className="flex w-full">
                            <Seguranca 
                                doisFatoresAtivo={doisFatores}
                                onToggleDoisFatores={setDoisFatores}
                                onAlterarSenha={() => console.log('Altere senha')}
                            />
                        </div>
                        <div className="flex">
                            <ZonaPerigo onExcluirConta={handleExcluirConta} />
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