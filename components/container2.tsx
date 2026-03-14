import { ReactNode } from "react";

interface Container2Props {
    titulo: string;
    notificacao?: ReactNode;
    usuario?: string;
    children: React.ReactNode;
    filtros?: ReactNode; // Para os selects
}

export default function Container2({ titulo, notificacao, usuario, children, filtros }: Container2Props) {
    return (
        <div className="w-full h-full min-h-screen overflow-auto">
            {/* Cabeçalho fixo */}
            <div className="sticky top-0 z-20 p-6 ">
                <div className="max-w-[1200px] mx-auto">
                    <div className="text-white flex items-center justify-between">
                        <p className="font-bold text-3xl">
                            {titulo}
                        </p>
                        
                        <div className="flex items-center gap-6">
                            {/* Filtros (selects) */}
                            {filtros && (
                                <div className="flex items-center gap-3">
                                    {filtros}
                                </div>
                            )}
                            
                            {/* Notificação e usuário */}
                            <div className="flex items-center gap-4">
                                {notificacao && (
                                    <span className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                                        {notificacao}
                                    </span>
                                )}
                                {usuario && (
                                    <p className="text-base font-light text-gray-300">
                                        {usuario}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conteúdo */}
            <div className="flex-1 p-6">
                <div className="max-w-[1200px] mx-auto w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}