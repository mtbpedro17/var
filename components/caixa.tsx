interface CaixaProps{
  num:number;
  descricao:string;
}

export default function Caixa(props:CaixaProps) {
  
  return (
    <div className="bg-[#1d224a] text-white p-4 md:p-5 lg:p-6 w-full max-w-[400px] h-auto min-h-[100px] md:h-[120px] rounded-lg flex flex-col justify-between gap-2 md:gap-4">
       <p className="font-semibold text-sm md:text-md lg:text-lg leading-tight">
         {props.descricao}
       </p>
       <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
         {props.num}
       </p>
    </div>
  );
}