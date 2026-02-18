import Link from "next/link";
import { Check } from "lucide-react"

export default function Home() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Imagem de fundo com blur */}
      <div 
        className="absolute inset-0 bg-[url('/login.jpg')] bg-cover bg-center scale-110"
        style={{ filter: 'blur(6px)' }}
      ></div>
      
      {/* Overlay escuro para melhor contraste (opcional) */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Conteúdo principal */}
      <div className="relative z-10 w-full h-screen flex justify-center items-center gap-10 p-5">
        
        {/* Primeiro card - Textos */}
        <div className="p-5 w-[700px] h-[700px]  font-light text-sm flex flex-col gap-10">
          <div className="py-3 px-6 bg-[#3e3c3c6a] text-white flex flex-col rounded-4xl  w-[600px] backdrop-blur-sm mt-10 mb-8">
            <span>Transformamos ideias em soluções inteligentes com velocidade e precisão.</span>
            <span>Inove mais.</span>
            <span>Concetrize seu sonho.</span>
          </div>

          <div className="flex flex-col">
            <div className="py-3 px-6 bg-[#3e3c3c6a] text-white flex flex-col rounded-4xl mb-2 w-[350px] backdrop-blur-sm">
              <span>Do conceito a execução.</span>
            </div>

            <div className="py-3 px-6 bg-[#3e3c3c6a] text-white flex flex-col rounded-4xl mb-2 ml-8 w-[350px] backdrop-blur-sm">
              <span>Tecnologia de ponta para o seu sucesso.</span>
            </div>

            <div className="py-3 px-6 bg-[#3e3c3c6a] text-white flex flex-col rounded-4xl mb-2 ml-16 w-[350px] backdrop-blur-sm">
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
              <span>Do conceito a execução, criamos experências tecnológicas que fazem mudança.</span>
              </div>
              <div className="text-white flex items-center">
              <Check className="inline mr-2" color="#00adff"/>
              <span>Tecnologia agil para que não quer pelo futuro.</span>
              </div>
               <div className="text-white flex items-center">
              <Check className="inline mr-2" color="#00adff"/>
              <span>Soluções rápidas, inteligentes e escaláveis para um mundo em constante evolução.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Segundo card - Login */}
        <div className="p-8 w-[500px] h-[700px] bg-white/80 backdrop-blur-md shadow-xl flex flex-col rounded-xl gap-6">
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
                className="p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-white/90" 
                placeholder="Digite o email." 
              />
            </div>

            <div className="p-2 flex flex-col">
              <label htmlFor="password" className="text-gray-700 mb-1">Senha:</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                className="p-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-blue-500 bg-white/90" 
                placeholder="Digite a senha." 
              />
            </div>

            <div className="flex justify-between p-2">
              <div className="flex items-center justify-center gap-2">
                <input 
                  type="checkbox" 
                  name="remember" 
                  id="remember" 
                  className="w-4 h-4 outline-none" 
                />
                <label htmlFor="remember" className="text-gray-600">Lembre-me</label>
              </div>
              <a href="#" className="text-sm text-gray-600 hover:underline">Esqueceu a senha?</a>
            </div>

            

      <Link 
         href="cliente/dashboard"
         className="p-3 bg-black text-amber-50 text-lg font-light rounded-3xl hover:bg-gray-800 transition-colors mt-2 w-full block text-center"
        >
              Login
      </Link>
          </div>

          {/* Linha divisória */}
          <div className="flex justify-center items-center gap-3 text-gray-500 my-2">
            <span className="h-px bg-gray-400 w-[150px]"></span>
            <span className="text-sm">Ou continue com</span>
            <span className="h-px bg-gray-400 w-[150px]"></span>
          </div>

          {/* Botões redes sociais */}
          <div className="flex gap-3 justify-center">
            <button className="flex-1 p-3 border border-gray-300 rounded-full hover:bg-gray-100 transition-colors bg-white/80 backdrop-blur-sm flex items-center justify-center gap-2">
              <span className="text-red-500 font-bold text-xl">G</span>
              <span className="text-gray-700">Google</span>
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
}