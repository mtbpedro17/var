interface CaixaProps {
  num: number;
  descricao: string;
  icon?: React.ReactNode; // opcional para manter compatibilidade
}

export default function Caixa({ num, descricao }: CaixaProps) {
  return (
    <div className="text-white p-3 w-full rounded-xl shadow-xl bg-[#040928] border border-[#050e4c]">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-semibold text-white mb-7">
          {num}
        </p>
      </div>
      
      <p className="text-2xl font-regular text-gray-300 mt-1 tracking-wide">
        {descricao}
      </p>
    </div>
  );
}