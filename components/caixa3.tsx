interface CaixaProps3{
  icon:string;
  num:number;
  descricao:string;
}

export default function Caixa3(props:CaixaProps3) {
  
  return (
    <div className="bg-[#fff] text-black p-4 md:p-4 lg:p-5 w-full max-w-[300px] h-auto min-h-[110px] md:h-[120px] rounded-lg flex flex-col justify-between gap-2 md:gap-1">
       <div className="flex gap-5">
        <span className="text-3xl">{props.icon}</span>
        <p className="mt-3 text-xl font-semibold ">{props.num}</p>
       </div>
       <p className="text-md font-light">{props.descricao}</p>
    </div>
  );
}
