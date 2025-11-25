
interface CaixaProps3 {
  icon: React.ReactNode;
  num: number;
  descricao: string;
  bgColor?: string; 
}

export default function Caixa3(props: CaixaProps3) {
  return (
    <div className="bg-white text-black p-4 md:p-4 lg:p-5 w-full max-w-[300px] h-auto min-h-[110px] md:h-[130px] rounded-lg flex flex-col justify-between gap-2 md:gap-1">
       <div className="flex gap-5">
        <span className={`text-3xl p-4 rounded-lg ${props.bgColor || 'bg-gray-100'}`}>
          {props.icon}
        </span>
        <p className="mt-3 text-xl font-semibold">{props.num}</p>
       </div>
       <p className="text-md font-light">{props.descricao}</p>
    </div>
  );
}