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
            {/* Grid responsivo corrigido */}
            <div className="py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {/* Primeira linha - 3 inputs */}
              <CInput label="Nome da empresa" type="text" placeholder="Digite o nome da Empresa" />
              <CInput label="NIF da empresa" type="text" placeholder="Digite o NIF da empresa" />
              <CInput label="Endereço da empresa" type="text" placeholder="Digite endereço da Empresa" />
              
              {/* Segunda linha - 2 inputs ocupando espaço proporcional */}
              <div className="md:col-span-2 lg:col-span-1">
                <CInput label="Objecto social da empresa" type="text" placeholder="Digite o objecto social da Empresa" />
              </div>
              <div className="md:col-span-2 lg:col-span-1">
                <CInput label="Contacto do responsável" type="text" placeholder="Digite o nome do responsável..." />
              </div>
            </div>
            
            {/* Botão responsivo */}
            <div className="flex justify-center md:justify-end px-4 md:px-12 mt-8 md:mt-6 pb-4">
              <Btn botao="Finalizar Cadastro"/>
            </div>
          </div>
        </Container>
      </Sidebar>
    </>
  );
}