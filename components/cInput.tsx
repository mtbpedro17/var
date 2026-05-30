interface CInputProps {
  label: string
  type: "text" | "email" | "password"
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function CInput(props: CInputProps) {
  return (
    <div className="flex flex-col gap-1.5 text-white">
      <label className="text-sm font-light text-gray-300">{props.label}</label>
      <input
        className="outline-none py-2.5 px-4 border border-[#050e4c] w-full rounded-lg bg-[#040928] text-white text-sm placeholder-gray-500 focus:border-blue-500 transition-colors"
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  )
}