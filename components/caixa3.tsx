interface CaixaProps3 {
  icon: React.ReactNode;
  num: number;
  descricao: string;
  bgColor?: string;
}

export default function Caixa3(props: CaixaProps3) {
  return (
    <div className="text-white p-4 w-full max-w-[280px] h-auto rounded-2xl shadow-xl bg-[#040928] border border-[#050e4c]">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-white">
          {props.num}
        </p>
        <span className="text-gray-400">
          {props.icon}
        </span>
      </div>
      
      <p className="text-lg font-regular text-gray-300 mt-2 tracking-wide">
        {props.descricao}
      </p>
    </div>
  );
}