'use client'
import { Check } from "lucide-react"
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [userName, setUserName] = useState("");

  // Função para simular login (depois substituir por API real)
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // SIMULAÇÃO - Depois substituir por chamada à API
    if (email === "adm@kituxi.ao" && password === "admin123") {
      setUserName("Administrador");
      setShowWelcome(true);
      setTimeout(() => {
        router.push("/adm/dashboard");
      }, 2000);
    } 
    else if (email === "cliente@kituxi.ao" && password === "cliente123") {
      setUserName("Cliente");
      setShowWelcome(true);
      setTimeout(() => {
        router.push("/cliente/dashboard");
      }, 2000);
    }
    else if (email === "operacional@kituxi.ao" && password === "operacional123") {
      setUserName("Operacional");
      setShowWelcome(true);
      setTimeout(() => {
        router.push("/operacional/dashboard");
      }, 2000);
    }
    else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagem de fundo com blur */}
      <div 
        className="absolute inset-0 bg-[url('/login.jpg')] bg-cover bg-center scale-110"
        style={{ filter: 'blur(6px)' }}
      ></div>
      
      {/* Overlay escuro para melhor contraste */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Mensagem de boas-vindas */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-gradient-to-br from-[#040928] to-[#0e1a3a] border border-[#050e4c] rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl text-center animate-fade-in">
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check size={40} className="text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Bem-vindo, {userName}!</h2>
            <p className="text-gray-400 mb-6">Login realizado com sucesso. Redirecionando...</p>
            <div className="w-full bg-gray-700 h-1 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full animate-loading-bar"></div>
            </div>
          </div>
        </div>
      )}

      {/* Conteúdo principal */}
      <div className="relative z-10 w-full h-screen flex justify-center items-center gap-10 p-5">
        
        {/* Primeiro card - Textos */}
        <div className="p-5 w-175 h-175 font-light text-sm flex flex-col gap-10">
          <div className="py-3 px-6 bg-[#3e3c3c6a] text-white flex flex-col rounded-4xl w-150 backdrop-blur-sm mt-10 mb-8">
            <span>Transformamos ideias em soluções inteligentes com velocidade e precisão.</span>
            <span>Inove mais.</span>
            <span>Concentre-se no seu sonho.</span>
          </div>

          <div className="flex flex-col">
            <div className="py-3 px-6 bg-[#3e3c3c6a] text-white flex flex-col rounded-4xl mb-2 w-87.5 backdrop-blur-sm">
              <span>Do conceito a execução.</span>
            </div>

            <div className="py-3 px-6 bg-[#3e3c3c6a] text-white flex flex-col rounded-4xl mb-2 ml-8 w-87.5 backdrop-blur-sm">
              <span>Tecnologia de ponta para o seu sucesso.</span>
            </div>

            <div className="py-3 px-6 bg-[#3e3c3c6a] text-white flex flex-col rounded-4xl mb-2 ml-16 w-87.5 backdrop-blur-sm">
              <span>Soluções rápidas, eficientes e escaláveis.</span>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h1 className="text-4xl text-white font-semibold">Obtenha o controle da sua empresa com a Kituxi Tech</h1>
            <div className="flex flex-col gap-0.5 text-sm">
              <div className="text-white flex items-center">
                <Check className="inline mr-2" color="#00adff"/>
                <span>Impulsionamos inovação com tecnologia de ponta para acelerar o seu sucesso digital.</span>
              </div>
              <div className="text-white flex items-center">
                <Check className="inline mr-2" color="#00adff"/>
                <span>Do conceito a execução, criamos experiências tecnológicas que fazem mudança.</span>
              </div>
              <div className="text-white flex items-center">
                <Check className="inline mr-2" color="#00adff"/>
                <span>Tecnologia ágil para quem não quer esperar pelo futuro.</span>
              </div>
              <div className="text-white flex items-center">
                <Check className="inline mr-2" color="#00adff"/>
                <span>Soluções rápidas, inteligentes e escaláveis para um mundo em constante evolução.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Segundo card - Login */}
        <form onSubmit={handleLogin} className="p-8 w-125 h-175 bg-white/80 backdrop-blur-md shadow-xl flex flex-col rounded-xl gap-6">
          {/* Cabeçalho */}
          <div className="mb-4 flex flex-col gap-1">
            <h1 className="text-4xl font-bold">Bem vindo de volta!</h1>
            <span className="text-gray-600">Kituxi Tech, Tecnologia, Rapidez e inovação.</span>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-3">
            <div className="p-2 flex flex-col">
              <label htmlFor="email" className="text-gray-700 mb-1">Email:</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-white/90" 
                placeholder="Digite o email." 
                required
              />
            </div>

            <div className="p-2 flex flex-col">
              <label htmlFor="password" className="text-gray-700 mb-1">Senha:</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-white/90" 
                placeholder="Digite a senha." 
                required
              />
            </div>

            <div className="flex justify-between p-2">
              <div className="flex items-center justify-center gap-2">
                <input 
                  type="checkbox" 
                  name="remember" 
                  id="remember" 
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 outline-none" 
                />
                <label htmlFor="remember" className="text-gray-600">Lembre-me</label>
              </div>
              <a href="#" className="text-sm text-gray-600 hover:underline">Esqueceu a senha?</a>
            </div>

            <button 
              type="submit"
              className="p-3 bg-black text-amber-50 text-lg font-light rounded-3xl hover:bg-gray-800 transition-colors mt-2 w-full"
            >
              Login
            </button>
          </div>

          {/* Linha divisória */}
          <div className="flex justify-center items-center gap-3 text-gray-500 my-2">
            <span className="h-px bg-gray-400 w-37.5"></span>
            <span className="text-sm">Ou continue com</span>
            <span className="h-px bg-gray-400 w-37.5"></span>
          </div>

          {/* Botões redes sociais */}
          <div className="flex gap-3 justify-center">
            <button 
              type="button"
              className="flex-1 p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors bg-white/80 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span className="text-red-500 font-bold text-xl">G</span>
              <span className="text-gray-700">Google</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}