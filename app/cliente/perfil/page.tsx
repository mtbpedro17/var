'use client'
import AtividadesRecentes from "@/components/actividadeRec";
import Container from "@/components/container";
import InformacoesEmpresa from "@/components/infoEmpresa";
import PerfilCliente from "@/components/perfilC";
import Permissoes from "@/components/permissao";
import Sidebar2 from "@/components/sidbar2";
import Tema from "@/components/tema";
import { Bell } from "lucide-react";

const atividadesRecentes = [
  { descricao: "Alterou configurações de alertas críticos", data: "Hoje, 10:57" },
  { descricao: "Alterou configurações de alertas críticos", data: "Ontem, 14:44" },
  { descricao: "Alterou configurações de alertas críticos", data: "14/04/2026, 16:46" },
  { descricao: "Alterou configurações de alertas críticos", data: "19/06/2026, 20:57" },
  { descricao: "Alterou configurações de alertas críticos", data: "26/07/2026, 19:58" }
];


export default function dashboard() {
    return(
        <div>
            <Sidebar2>
               <Container titulo="Pagamentos & licenças" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
               <div className="w-295  ml-3 mt-2 flex  gap-3 mb-2">
               
                <div className="w-100 pb-3 border-[#050e4c] border rounded-2xl shadow-xl bg-[#040928]">
                    <PerfilCliente 
                    empresa="KITUXI TECH"
                    ramo="TECNOLOGIA DE INFORMÁTICA"
                    contato="Estefánio Schofield"
                    email="estefanioschofield.com"
                    status="Ativo"
                    onEditar={() => console.log("Editar perfil")}
                    />
                </div>
                 <div className="w-195 pb-2 border-[#050e4c] border rounded-2xl shadow-xl bg-[#040928]">
                    <InformacoesEmpresa 
                    nome="Deloitte"
                    telefone="+244 955 555 555"
                    endereco="Avenida Sérgio Luther Rescova"
                    email="Deloitte@gmail.com"
                    />
                </div>
               </div>

               <div className="w-295  ml-3 mt-1 flex gap-3 ">
               <div className="w-100 h-2.5 flex flex-col gap-3">
                        <Permissoes 
                        permissoes={[
                            { nome: "Permissão para alertas" },
                            { nome: "Permissão de acesso à gestão" },

                        ]}
                        />

                          <Tema />
                </div>
                 <div className="w-195 p-3 border-[#050e4c] border rounded-2xl shadow-xl bg-[#040928]">
                        <AtividadesRecentes atividades={atividadesRecentes} />
                </div>
               
               </div>
                



               </Container>
            </Sidebar2>
        </div>
    )
}