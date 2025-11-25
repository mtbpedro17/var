interface perfil{
    nome:string,
    cargo:string
}

export default function perfilCard(props:perfil, {children}: {children : React.ReactNode}) {
    return(
        <div className="bg-amber-100 rounded-lg h-[400px] w-[300px] flex flex-col gap-10  items-center justify-centerr">
          <div className="marg3 h-[150px] w-[150px] bg-white rounded-full">
          </div> 
          <div>
            <p className="font-extrabold text-center text-3xl">{props.nome}</p>
            <p className=" text-lg text-center font-bold">{props.cargo}</p>
          </div> 
          <div>{children}</div>
        </div>
    )
}