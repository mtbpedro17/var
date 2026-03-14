"use client";

import CardDef from "@/components/cardDef";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import { Bell } from "lucide-react";

const contaSeguranca = [
    {
        title: "Alterar senha",
        description: "Atualize sua senha de acesso.",
        actionLabel: "Alterar"
    },
    {
        title: "Autenticação em dois fatores",
        description: "Adicione uma camada extra de segurança.",
        actionLabel: "Ativar"
    },
    {
        title: "Sessões ativas",
        description: "Veja e encerre logins ativos.",
        actionLabel: "Gerir"
    }
];

const perfilAdministrador = [
    {
        title: "Nome do administrador",
        description: "Atualiza o nome exibido.",
        actionLabel: "Editar"
    },
    {
        title: "Email da conta",
        description: "Gerenciar o endereço de email usado.",
        actionLabel: "Editar"
    },
    {
        title: "Foto de perfil",
        description: "Alterar a imagem de exibição.",
        actionLabel: "Atualizar"
    }
];

const empresa = [
    {
        title: "Nome da empresa",
        description: "Atualize o nome principal.",
        actionLabel: "Editar"
    },
    {
        title: "Logotipo",
        description: "Atualize o logotipo usado no painel.",
        actionLabel: "Carregar imagem"
    },
    {
        title: "Idioma e região",
        description: "Defina o idioma e formato da data.",
        actionLabel: "Configurar"
    }
];

const sistemaAparencia = [
    {
        title: "Tema escuro/claro",
        description: "Altere o modo de exibição.",
        actionLabel: "Alterar"
    },
    {
        title: "Notificação",
        description: "Ative ou desative alertas por email.",
        actionLabel: "Gerir"
    },
    {
        title: "Backup e restauração",
        description: "Baixe ou restaure configurações salvas.",
        actionLabel: "Acessar"
    }
];

export default function Home() {
    return (
        <>
            <Sidebar>
                <Container titulo="Definições" notificacao={<Bell size={20} />} usuario="Mutombo Pedro">
                    
                    {/* Grid de cards 2x2 */}
                    <div className="grid grid-cols-2 gap-3">
                        <CardDef cardTitle="Conta e Segurança" items={contaSeguranca} />
                        <CardDef cardTitle="Perfil do Administrador" items={perfilAdministrador} />
                        <CardDef cardTitle="Empresa" items={empresa} />
                        <CardDef cardTitle="Sistema e Aparência" items={sistemaAparencia} />
                    </div>

                    {/* Botões de ação */}
                    <div className="flex justify-center gap-2 mt-4">
                        <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                            Salvar alterações
                        </button>
                        <button className="px-6 py-2 bg-[#040928] hover:bg-[#1a2942] text-white font-medium rounded-lg transition-colors border border-[#050e4c]">
                            Restaurar padrões
                        </button>
                    </div>

                </Container>
            </Sidebar>
        </>
    );
}