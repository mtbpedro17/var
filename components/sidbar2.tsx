"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  User, 
  Settings, 
  LogOut
} from "lucide-react"

export default function Sidebar2({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path 
            ? "bg-white/5 border-l-4 border-[#0311ab] text-white" 
            : "text-white hover:bg-white/5 "
    }

    return (
        <div className="flex h-screen bg-[#1a1a27]">
            {/* Sidebar - Apenas desktop */}
            <div className="w-[260px] h-full bg-[#040927] text-white flex flex-col">
                {/* Logo/Title - Kituxi Group */}
                <div className="p-6 border-b border-[#333344]">
                    <h1 className="text-2xl font-bold text-white">Kituxi Group</h1>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 py-6 flex flex-col gap-2">
                    <Link
                        href="/cliente/dashboard"
                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium ml-3 mr-5 rounded-br-xl rounded-tr-xl rounded-bl-xl rounded-tl-xl duration-300 ease-in-out ${isActive("/cliente/dashboard")}`}
                    >
                        <LayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </Link>

                    <Link
                        href="/cliente/funcionarios"
                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium ml-3 mr-5 rounded-br-xl rounded-tr-xl rounded-bl-xl rounded-tl-xl duration-300 ease-in-out ${isActive("/cliente/funcionarios")}`}
                    >
                        <Users size={18} />
                        <span>Gerir funcionários</span>
                    </Link>

                    <Link
                        href="/cliente/pagamentos"
                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium ml-3 mr-5 rounded-br-xl rounded-tr-xl rounded-bl-xl rounded-tl-xl duration-300 ease-in-out ${isActive("/cliente/pagamentos")}`}
                    >
                        <CreditCard size={18} />
                        <span>Pagamentos & licenças</span>
                    </Link>

                    <Link
                        href="/cliente/perfil"
                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium ml-3 mr-5 rounded-br-xl rounded-tr-xl rounded-bl-xl rounded-tl-xl duration-300 ease-in-out ${isActive("/cliente/perfil")}`}
                    >
                        <User size={18} />
                        <span>Perfil</span>
                    </Link>

                    <Link
                        href="/cliente/definicao"
                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium ml-3 mr-5 rounded-br-xl rounded-tr-xl rounded-bl-xl rounded-tl-xl duration-300 ease-in-out ${isActive("/cliente/definicao")}`}
                    >
                        <Settings size={18} />
                        <span>Definições</span>
                    </Link>
                </nav>

                {/* Logout */}
                <div className="p-6 border-t border-[#333344] flex items-center justify-center">
                    <Link
                        href="/"
                        className="p-4 w-[500px] flex rounded-xl items-center gap-3 text-sm font-medium bg-white/5 text-white transition-colors border border-white/10"
                    >
                        <LogOut size={18} color="red" />
                        <span>Sair</span>
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-[#03031b] text-white">
                {children}
            </main>
        </div>
    )
}