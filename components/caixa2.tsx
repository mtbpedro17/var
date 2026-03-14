interface CaixaProps {
  num: number;
  descricao: string;
}

export default function Caixa2({ num, descricao }: CaixaProps) {
  return (
    <div className="text-white p-4 w-full rounded-2xl shadow-xl bg-[#040928] border border-[#050e4c]">
      <p className="text-xl font-semibold text-white">
        {num}
      </p>
      
      <p className="text-sm font-regular text-gray-300 mt-1 tracking-wide">
        {descricao}
      </p>
    </div>
  );
}