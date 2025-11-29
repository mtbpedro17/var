"use client";

import CardDef from "@/components/cardDef";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";



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
  ]

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
  ]

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
  ]

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
  ]

  

export default function Home() {
  return (
    <>
   
  
    <Sidebar>
    <Container titulo="Definições ">
      <div className=" flex flex-col gap-3 md:grid md:grid-flow-col md:grid-rows-2 md:gap-3">
        <CardDef cardTitle="Conta e Segurança" items={contaSeguranca} />
      <CardDef cardTitle="Perfil do Administrador" items={perfilAdministrador} />
      <CardDef cardTitle="Empresa" items={empresa} />
      <CardDef cardTitle="Sistema e Aparência" items={sistemaAparencia} />
      </div>

      <div className=" flex flex-col lg:flex-row text-white p-4 justify-center  gap-2 mt-2">
        <button className="px-4 py-2 bg-[#282842] text-xl font-bold rounded-lg">Salvar alterações</button>
        <button className="px-4 py-2 bg-[#282842] text-xl font-bold rounded-lg">Restaurar padrões</button>
      </div>
    </Container>
    </Sidebar>

    
    </>
  );
}
