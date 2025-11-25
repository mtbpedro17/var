"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { 
  Home, 
  FileEdit, 
  ClipboardList, 
  CreditCard, 
  FileText,
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react"

export default function Sidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const isActive = (path: string) =>
        pathname === path
            ? "bg-white/20 border-l-4 border-[#12111e] text-white"
            : "text-[#f1f7fc] tran hover:bg-white/5"

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className="flex flex-col lg:grid lg:grid-cols-12 h-screen w-screen bg-[#12111e]">
            
            {/* Mobile Header */}
            <div className="lg:hidden bg-[#27283d] p-4 flex items-center justify-between fixed top-0 left-0 right-0 z-50">
                <div className="flex items-center gap-2">
                    <div className="py-3 px-3 rounded-full bg-[#12111e]"></div>
                    <p className="font-bold text-xl">Kituxi Group</p>
                </div>
                <button
                    onClick={toggleSidebar}
                    className="text-white p-2 rounded-lg hover:bg-white/10 transition-all"
                >
                    {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Sidebar */}
            <div className={`
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0
                fixed lg:relative
                top-0 lg:top-auto
                left-0 lg:left-auto
                w-80 lg:w-72 xl:w-auto
                h-full lg:h-auto
                bg-[#27283d] shadow-2xl shadow-gray-900/50 
                lg:col-span-3 xl:col-span-2
                flex flex-col text-white
                transition-transform duration-300 ease-in-out
                z-40 lg:z-auto
            `}>
                
                {/* Mobile Close Button */}
                <div className="lg:hidden flex justify-end p-4 pt-20">
                    <button
                        onClick={toggleSidebar}
                        className="text-white p-2 rounded-lg hover:bg-white/10 transition-all"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Desktop Logo */}
                <div className="hidden lg:flex items-center my-8 mx-4 gap-2">
                    <div className="py-5 px-5 rounded-full bg-[#12111e]"></div>
                    <p className="font-bold text-2xl xl:text-3xl">Kituxi Group</p>
                </div>

                {/* Navigation Links */}
                <div className="flex-1 px-4 lg:px-0 mt-4 lg:mt-0">
                    <Link
                        href="/adm/dashboard"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 py-4 lg:py-3 xl:py-2 lg:mx-3 rounded-lg text-lg font-semibold mb-2 cursor-pointer transition-all duration-300 ease-in-out ${isActive("/adm/dashboard")}`}
                    >
                        <Home size={20} className="ml-2" />
                        <p className="text-base lg:text-lg xl:text-lg">Dashboard</p>
                    </Link>

                    <Link
                        href="/adm/cadastrar_empresa"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 py-4 lg:py-3 xl:py-2 lg:mx-3 rounded-lg text-lg font-semibold mb-2 cursor-pointer transition-all duration-300 ease-in-out ${isActive("/adm/cadastrar_empresa")}`}
                    >
                        <FileEdit size={20} className="ml-2" />
                        <p className="text-base lg:text-lg xl:text-lg">Cadastrar empresa</p>
                    </Link>

                    <Link
                        href="/adm/gerir_empresa"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 py-4 lg:py-3 xl:py-2 lg:mx-3 rounded-lg text-lg font-semibold mb-2 cursor-pointer transition-all duration-300 ease-in-out ${isActive("/adm/gerir_empresa")}`}
                    >
                        <ClipboardList size={20} className="ml-2" />
                        <p className="text-base lg:text-lg xl:text-lg">Gerir empresa</p>
                    </Link>

                    <Link
                        href="/adm/gerir_payment"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 py-4 lg:py-3 xl:py-2 lg:mx-3 rounded-lg text-lg font-semibold mb-2 cursor-pointer transition-all duration-300 ease-in-out ${isActive("/adm/gerir_payment")}`}
                    >
                        <CreditCard size={20} className="ml-2" />
                        <p className="text-base lg:text-lg xl:text-lg">Gestão de payments</p>
                    </Link>

                    <Link
                        href="/adm/documento"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 py-4 lg:py-3 xl:py-2 lg:mx-3 rounded-lg text-lg font-semibold mb-2 cursor-pointer transition-all duration-300 ease-in-out ${isActive("/adm/documento")}`}
                    >
                        <FileText size={20} className="ml-2" />
                        <p className="text-base lg:text-lg xl:text-lg">Documentos</p>
                    </Link>

                    {/* Bottom Section */}
                    <div className="mt-8 lg:mt-12 xl:mt-16">
                        <hr className="mx-4 mb-4 lg:mb-3" />
                        
                        <Link
                            href="/adm/configuracao"
                            onClick={() => setIsSidebarOpen(false)}
                            className={`flex items-center gap-3 py-3 lg:py-2 xl:py-1 lg:mx-3 rounded-lg text-lg font-semibold mb-2 lg:mb-1 cursor-pointer transition-all duration-300 ease-in-out ${isActive("/adm/configuracao")}`}
                        >
                            <Settings size={20} className="ml-2" />
                            <p className="text-base lg:text-lg xl:text-lg">Definições</p>
                        </Link>

                        <Link
                            href="/"
                            onClick={() => setIsSidebarOpen(false)}
                            className="flex items-center  gap-3 py-3 lg:py-2 xl:py-1 lg:mx-3 rounded-lg text-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:bg-white/5"
                        >
                            <LogOut size={20} className="ml-2" />
                            <p className="text-base lg:text-lg xl:text-lg">Sair</p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Overlay */}
            {isSidebarOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className="flex-1 lg:col-span-9 xl:col-span-10 flex flex-col pt-16 lg:pt-0 overflow-auto">
                {children}
            </div>
        </div>
    )
}