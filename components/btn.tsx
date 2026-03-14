interface BtnProps {
  botao: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Btn({ botao, onClick, type = "button" }: BtnProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors text-sm border border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#040928]"
    >
      {botao}
    </button>
  );
}