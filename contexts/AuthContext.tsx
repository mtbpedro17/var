// src/contexts/AuthContext.tsx
'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import { api } from '@/lib/api'
import type { LoginResponse, Usuario } from '@/types'

// ── Tipos do contexto ────────────────────────────────────────

interface AuthContextData {
  usuario:       Pick<Usuario, 'id' | 'nome' | 'email' | 'papel' | 'empresaId'> | null
  carregando:    boolean
  login:         (email: string, senha: string) => Promise<void>
  logout:        () => void
  isADM:         boolean
  isOperacional: boolean
  isCliente:     boolean
}

// ── Contexto ─────────────────────────────────────────────────

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export function AuthProvider({ children }: { children: ReactNode }) {
  const router     = useRouter()
  const [usuario, setUsuario]       = useState<AuthContextData['usuario']>(null)
  const [carregando, setCarregando] = useState(true)

  // Restaura sessão ao recarregar a página
  useEffect(() => {
    const usuarioSalvo = Cookies.get('usuario')
    if (usuarioSalvo) {
      try {
        setUsuario(JSON.parse(usuarioSalvo))
      } catch {
        Cookies.remove('usuario')
        Cookies.remove('token')
      }
    }
    setCarregando(false)
  }, [])

  async function login(email: string, senha: string) {
    const { data } = await api.post<ApiResponse<LoginResponse>>('/auth/login', { email, senha })

    const { token, usuario } = data.data

    // Persiste token e dados do usuário em cookies (7 dias)
    Cookies.set('token',   token,                    { expires: 7 })
    Cookies.set('usuario', JSON.stringify(usuario),  { expires: 7 })

    setUsuario(usuario)

    // Redireciona por papel após login
    if (usuario.papel === 'ADM')         router.push('/dashboard/adm')
    if (usuario.papel === 'Operacional') router.push('/dashboard/operacional')
    if (usuario.papel === 'Cliente')     router.push('/dashboard/cliente')
  }

  function logout() {
    Cookies.remove('token')
    Cookies.remove('usuario')
    setUsuario(null)
    router.push('/login')
  }

  return (
    <AuthContext.Provider value={{
      usuario,
      carregando,
      login,
      logout,
      isADM:         usuario?.papel === 'ADM',
      isOperacional: usuario?.papel === 'Operacional',
      isCliente:     usuario?.papel === 'Cliente',
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}

// Tipo auxiliar para respostas da API (importado internamente)
interface ApiResponse<T> { success: boolean; data: T }
