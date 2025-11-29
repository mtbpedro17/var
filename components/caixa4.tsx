interface CaixaProps {
  num: number;
  descricao: string;
  cor: string; 
}

export default function caixa3(props:CaixaProps) {
  return(
    <div 
      className={`w-full text-white p-4 md:p-5 lg:p-6 max-w-[400px] h-auto min-h-[100px] md:h-[120px] rounded-lg flex flex-col justify-between gap-2 md:gap-4`} 
      style={{ backgroundColor: props.cor }}
    >
      <p className="font-semibold text-sm md:text-md lg:text-lg leading-tight text-white">
        {props.descricao}
      </p>
      <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        {props.num}
      </p>
    </div>
  );
}