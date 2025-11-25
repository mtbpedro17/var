
import Container from "@/components/container";
import Sidebar from "@/components/sidebar";
import { Bell } from "lucide-react";




  

export default function Home() {
  return (
    <>
   
  
    <Sidebar>
    <Container titulo="Definições " notificacao={<Bell size={20} />} usuario="Mutombo Pedro">
      <div>bbb</div>
    </Container>
    </Sidebar>

    
    </>
  );
}
