import Container from "@/components/container";
import Sidebar3 from "@/components/sidbar3";
import { Bell } from "lucide-react";



export default function dashboard() {
    return(
        <div>
          <Sidebar3>
            <div>
                <Container titulo="Notificações" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
                    <div>
                        
                    </div>
                </Container>
            </div>
            </Sidebar3>  
        </div>
    )
}


{/* 
    git add .
    git commit -m "descrição das alterações"
    git push origin main
    
    */}