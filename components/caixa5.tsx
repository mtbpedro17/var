interface CaixaProps {
  icon?: React.ReactNode;  // Tornando opcional para manter compatibilidade
  num: number;
  descricao: string;
  bgColor?: string;
}

export default function Caixa(props: CaixaProps) {
  return (
    <div className="text-white p-4 w-full max-w-[280px] h-auto rounded-2xl shadow-xl bg-[#040928] border border-[#050e4c]">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-white">
          {props.num}
        </p>
        {props.icon && (
          <span>
            {props.icon}
          </span>
        )}
      </div>
      
      <p className="text-lg font-regular text-gray-300 mt-2 tracking-wide">
        {props.descricao}
      </p>
    </div>
  );
}