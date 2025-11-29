interface CInputProps {
  label: string,
  type: "text" | "email" | "password"
  placeholder?: string
}

export default function CInput(props: CInputProps) {
  return (
    <div className="flex flex-col gap-1.5 text-white mb-4 md:mb-5 px-4 md:px-4">
      <label className="text-sm md:text-base">{props.label}</label>
      <input 
        className="outline-none py-2 px-3 border border-gray-500 w-full rounded-lg bg-white/5 text-sm md:text-base" 
        type={props.type} 
        placeholder={props.placeholder} 
      />
    </div>
  );
}