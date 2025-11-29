interface BtnProps {
  botao: string
}

export default function Btn(props: BtnProps) {
  return (
    <button className="bg-[#282748] text-white py-3 px-6 h-12 md:h-[60px] w-full max-w-[200px] rounded-xl cursor-pointer hover:bg-[#2f2e55] transition-all duration-300 ease-in-out text-sm md:text-base">
      {props.botao}
    </button>
  );
}