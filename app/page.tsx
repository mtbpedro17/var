

import Link from "next/link";




  

export default function Home() {
  return (
    <div className="w-full h-screen bg-[#1d224a] flex flex-col gap-3 items-center justify-center">
   <div className="text-6xl font-extrabold text-white">
  <span className="typing">
    Kituxi Group
  </span>
  
</div>

   <Link href={"/adm/dashboard"} className=" text-2xl backdrop-blur-xl bg-white/10 py-3 px-5 font-bold text-white rounded-lg border animate-pulse">Entrar</Link>

    
    </div>
  );
}
