interface containerProps {
    titulo: string
    notificacao: string
    usuario: string
    children: React.ReactNode;
}

export default function Container({titulo, notificacao, usuario, children}: containerProps) {
    return (
        <div className="w-full h-full min-h-screen overflow-auto">
            
            <div className="bg-[#12111e] sticky top-0 z-20 p-4 md:p-6 border-b border-gray-700 mt-16 md:mt-0">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-[#f1f7fc] flex items-center justify-between flex-col sm:flex-row gap-4 sm:gap-0">
                        <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-center sm:text-left">
                            {titulo}
                        </p>
                        <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
                            <p className="text-base md:text-lg lg:text-xl">
                                {notificacao}
                            </p>
                            <p className="text-base md:text-lg font-semibold">
                                {usuario}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 p-4 md:p-6 lg:p-8 overflow-auto">
                <div className="max-w-[1200px] mx-auto w-full">
                    {children}
                </div>
            </div>
        </div>
    )
}