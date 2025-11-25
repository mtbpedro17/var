interface BtnProps{
    botao:string
}
export default function btn(props:BtnProps){
    return(
        <button className="bg-[#282748] text-white p-4 h-[60px] w-[200px]  rounded-xl ml-[950px] cursor-pointer hover:bg-[#2f2e55] transition-all duration-300 ease-in-out">{props.botao}</button>
    )
}