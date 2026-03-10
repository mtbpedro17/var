'use client'
import Container from "@/components/container";
import PreferenciasNotificacao from "@/components/def";
import Sidebar2 from "@/components/sidbar2";
import { Bell } from "lucide-react";




export default function dashboard() {
    return(
        <div>
            <Sidebar2>
               <Container titulo="Definições" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
               <div className="w-[1180px] h-[580px]  ml-3 mt-2 flex  gap-10 mb-2 bg-[#040825] rounded-2xl border-[#050e4c] border shadow-xl">
                <PreferenciasNotificacao />
              
               </div>
               </Container>
            </Sidebar2>
        </div>
    )
}