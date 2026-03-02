interface InformacoesEmpresaProps {
  nome?: string;
  telefone?: string;
  endereco?: string;
  email?: string;
}

export default function InformacoesEmpresa({
  nome = "Deloitte",
  telefone = "+244 955 555 555",
  endereco = "Avenida Sérgio Luther Rescova",
  email = "Deloitte@gmail.com"
}: InformacoesEmpresaProps) {
  return (
    <div className="w-full ">
      {/* Título */}
      <h2 className="ml-4 mt-4 text-white text-xl font-semibold mb-4">Informações da Empresa</h2>
      
      {/* Nome da Empresa */}
     <div className="flex items-center justify-between mx-5">
        <div className="flex flex-col">
         <div className="mb-5">
        <h3 className="text-gray-400 text-xs font-medium mb-1">Nome da Empresa</h3>
        <p className="text-white text-sm font-medium">{nome}</p>
      </div>
      <div className="mb-5">
        <h3 className="text-gray-400 text-xs font-medium mb-1">Telefone</h3>
        <p className="text-white text-sm">{telefone}</p>
      </div>
     </div>
      
     
      <div className="flex flex-col">
         {/* Endereço */}
        <div className="mb-5">
        <h3 className="text-gray-400 text-xs font-medium mb-1">Endereço</h3>
        <p className="text-white text-sm">{endereco}</p>
      </div>
      
      {/* E-mail */}
      <div className="mb-2">
        <h3 className="text-gray-400 text-xs font-medium mb-1">E-mail</h3>
        <p className="text-white text-sm">{email}</p>
      </div>
      </div>
     </div>
    </div>
  );
}