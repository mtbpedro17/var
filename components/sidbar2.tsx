"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { 
  LayoutDashboard, 
  Users, 
  CreditCard, 
  User, 
  Settings, 
  LogOut,
  Menu,
  X
} from "lucide-react"

export default function Sidebar2({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)

    const isActive = (path: string) =>
        pathname === path
            ? "bg-[#1e1e2d] text-white border-l-4 border-[#00b0f0]"
            : "text-gray-400 hover:text-white hover:bg-[#1e1e2d]"

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <div className="flex h-screen bg-[#1a1a27]">
            {/* Mobile Menu Button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-[#040927] rounded-lg text-white"
            >
                <Menu size={24} />
            </button>

            {/* Sidebar */}
            <div className={`
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
                lg:translate-x-0
                fixed lg:static
                top-0 left-0
                w-64
                h-full
                bg-[#040927]
                text-white
                flex flex-col
                transition-transform duration-300 ease-in-out
                z-40
                border-r border-[#333344]
            `}>
                {/* Logo/Title - Kituxi Group */}
                <div className="p-6 border-b border-[#333344]">
                    <h1 className="text-2xl font-bold text-white">Kituxi Group</h1>
                </div>

                {/* Navigation Links - Exatamente como na imagem */}
                <nav className="flex-1 py-6">
                    <Link
                        href="/adm/dashboard"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${isActive("/adm/dashboard")}`}
                    >
                        <LayoutDashboard size={18} />
                        <span>Dashboard</span>
                    </Link>

                    <Link
                        href="/adm/gerir_funcionarios"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${isActive("/adm/gerir_funcionarios")}`}
                    >
                        <Users size={18} />
                        <span>Gerir funcionários</span>
                    </Link>

                    <Link
                        href="/adm/pagamentos_licencas"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${isActive("/adm/pagamentos_licencas")}`}
                    >
                        <CreditCard size={18} />
                        <span>Pagamentos & licenças</span>
                    </Link>

                    <Link
                        href="/adm/perfil"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${isActive("/adm/perfil")}`}
                    >
                        <User size={18} />
                        <span>Perfil</span>
                    </Link>

                    <Link
                        href="/adm/configuracoes"
                        onClick={() => setIsSidebarOpen(false)}
                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors ${isActive("/adm/configuracoes")}`}
                    >
                        <Settings size={18} />
                        <span>Definições</span>
                    </Link>
                </nav>

                {/* Logout - Separado na parte inferior */}
                <div className="p-6 border-t border-[#333344]">
                    <Link
                        href="/"
                        onClick={() => setIsSidebarOpen(false)}
                        className="flex items-center gap-3 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                    >
                        <LogOut size={18} />
                        <span>Sair</span>
                    </Link>
                </div>
            </div>

            {/* Overlay para mobile */}
            {isSidebarOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/50 z-30"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <main className="flex-1 overflow-auto bg-[#03031b] text-white">
                {children}
            </main>
        </div>
    )
}