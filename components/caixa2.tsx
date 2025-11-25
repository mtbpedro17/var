interface CaixaProps {
  num: number;
  descricao: string;
  cor: string; 
}

export default function caixa2(props:CaixaProps) {
  return(
    <div 
      className={`w-full max-w-[340px] h-auto min-h-20 md:h-[40%] rounded-lg p-3 md:p-4 flex flex-col justify-between gap-2 md:gap-3`} 
      style={{ backgroundColor: props.cor }}
    >
      <p className="font-semibold text-xs md:text-sm lg:text-base leading-tight text-white">
        {props.descricao}
      </p>
      <p className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
        {props.num}
      </p>
    </div>
  );
}