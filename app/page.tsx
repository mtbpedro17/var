import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-linear-to-br from-[#20254b] via-[#282842] to-[#27283d] flex flex-col gap-6 items-center justify-center">
      {/* Título principal com efeito de digitação */}
      <div className="text-6xl font-extrabold text-white">
        <span className="typing animate-pulse">
          Kituxi Group
        </span>
      </div>

    

      {/* Botão de entrar */}
      <Link 
        href="/processar" 
        className="text-2xl backdrop-blur-xl bg-white/10 py-4 px-8 font-bold text-white rounded-lg border-2 border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        Entrar
      </Link>

      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#3a3a5a]/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-[#4a4a6a]/20 rounded-full blur-3xl"></div>
      </div>
    </div>
  );
}