
interface contador{
    valor: number,
    fadd: any,
    fsub:any
}


export default function telastate(props:contador) {

      function contador() {

       let c=cont
       c++

        setCont(c)
    }

    function subtrair() {

       let c=cont
       c--

        setCont(c)
    }
    return(
        <div className="flex flex-col gap-1 items-center justify-center bg-amber-200 p-5">
            <div>
                {props.valor}
            </div>
               <div className="flex gap-3">
                <button onClick={props.fadd}  className="bg-blue-400 p-2 ">Adicionar</button>
             <button onClick={props.fsub} className="bg-blue-400 p-2">Tirar</button>
               </div>
        </div>
        
    )
}