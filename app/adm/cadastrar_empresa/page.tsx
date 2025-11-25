
import CInput from "@/components/cInput";
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import Btn from "@/components/btn";
import { Bell } from "lucide-react";



  

export default function Home() {
  return (
    <>
   
  
    <Sidebar>
    <Container titulo="Formulário de Cadastro" notificacao={<Bell size={20} />} usuario="Mutombo Pedro">
      <div className="py-4 bg-[#1e1f31] rounded-lg">
      <div className=" py-4 grid grid-cols-3 ">
      <CInput label="Nome da empresa" type="text" placeholder="Digite o nome da Empresa" />
      <CInput label="NIF da empresa" type="text" placeholder="Digite o NIF da empresa" />
      <CInput label="Enderço da empresa" type="text" placeholder="Digite endereço da Empresa" />
      <CInput label="Objecto social da empresa" type="text" placeholder="Digite o objecto social da Empresa" /> 
      <CInput label="Contacto  do responsável" type="text" placeholder="Digite o nome do responsável..." />
      </div>
       <Btn botao="Finalizar Cadastro"/>
      </div>
    </Container>
    </Sidebar>

    
    </>
  );
}
