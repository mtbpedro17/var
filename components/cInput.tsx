interface CInputProps {
label:string,
type:"text" | "email" | "password"
placeholder?:string
}



export default function cInput (props: CInputProps){
    return(
        <div className="flex flex-col gap-1.5 text-white mb-5 mx-12">
            <label>{props.label}</label>
            <input className="outline-none py-2 border border-gray-500 w-[300px] rounded-lg bg-white/5" type={props.type} placeholder={props.placeholder} />
        </div>
    )
}