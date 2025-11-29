"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoadingPage() {
  const router = useRouter();
  const [stage, setStage] = useState<"processing" | "welcome" | "redirecting">("processing");

  useEffect(() => {
    let isMounted = true;

    const processingTimer = setTimeout(() => {
      if (isMounted) {
        setStage("welcome");
      }
    }, 2500);

    const welcomeTimer = setTimeout(() => {
      if (isMounted) {
        setStage("redirecting");
      }
    }, 4500);

    const redirectTimer = setTimeout(() => {
      if (isMounted) {
        router.push("/adm/dashboard");
      }
    }, 6000);

    return () => {
      isMounted = false;
      clearTimeout(processingTimer);
      clearTimeout(welcomeTimer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  return (
    <div className="w-full h-screen bg-linear-to-br from-[#20254b] via-[#282842] to-[#27283d] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Efeitos de fundo animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#3a3a5a]/20 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#4a4a6a]/20 rounded-full animate-float-medium"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-[#5a5a7a]/20 rounded-full animate-float-fast"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Estágio 1: Processando */}
        {stage === "processing" && (
          <div className="animate-fade-in-up">
            <div className="flex flex-col items-center gap-8">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-white/20 rounded-full"></div>
                <div className="w-20 h-20 border-4 border-t-transparent border-white rounded-full animate-spin absolute top-0"></div>
              </div>
              <div className="text-center">
                <p className="text-white text-2xl font-light mb-2">Inicializando sistema</p>
                <p className="text-white/60 text-lg">Preparando seu ambiente...</p>
              </div>
            </div>
          </div>
        )}

        {/* Estágio 2: Boas-vindas */}
        {stage === "welcome" && (
          <div className="animate-scale-in">
            <div className="text-center space-y-6">
              <div className="text-7xl font-black text-white">
                <span className="bg-linear-to-r from-[#6366f1] via-[#8b5cf6] to-[#a855f7] bg-clip-text text-transparent">
                  Bem-vindo!
                </span>
              </div>
              
              <div className="space-y-2">
                <p className="text-3xl text-white/90 font-semibold">Kituxi Group</p>
                <p className="text-xl text-white/70">Sistema de Gestão Integrada</p>
              </div>

              <div className="pt-4">
                <div className="w-32 h-1 bg-linear-to-r from-[#6366f1] to-[#8b5cf6] mx-auto rounded-full"></div>
              </div>
            </div>
          </div>
        )}

        {/* Estágio 3: Redirecionando */}
        {stage === "redirecting" && (
          <div className="animate-fade-in">
            <div className="flex flex-col items-center gap-6">
              <div className="text-center space-y-4">
                <p className="text-3xl text-white font-semibold">Tudo pronto!</p>
                <p className="text-xl text-white/70">Direcionando para o dashboard...</p>
              </div>
              
              {/* Loading bar suave */}
              <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-linear-to-r from-[#6366f1] to-[#8b5cf6] rounded-full animate-loading-bar"></div>
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Progresso visual na parte inferior */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="flex items-center gap-2">
          {["processing", "welcome", "redirecting"].map((s, index) => (
            <div
              key={s}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                stage === s 
                  ? "bg-white scale-125" 
                  : index < ["processing", "welcome", "redirecting"].indexOf(stage) 
                  ? "bg-white/60" 
                  : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}