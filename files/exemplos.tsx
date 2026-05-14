// =============================================================
// src/app/login/page.tsx — Página de login
// =============================================================
'use client'

import { useState } from 'react'
import { useAuth }  from '@/contexts/AuthContext'

export default function LoginPage() {
  const { login }  = useAuth()
  const [email,    setEmail]    = useState('')
  const [senha,    setSenha]    = useState('')
  const [erro,     setErro]     = useState('')
  const [loading,  setLoading]  = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErro('')
    setLoading(true)
    try {
      await login(email, senha)
      // AuthContext redireciona automaticamente por papel
    } catch (err: any) {
      setErro(err.response?.data?.message ?? 'Erro ao fazer login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main style={{ maxWidth: 400, margin: '80px auto', padding: 24 }}>
      <h1>Entrar no sistema</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Senha</label>
          <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        </div>
        {erro && <p style={{ color: 'red' }}>{erro}</p>}
        <button type="submit" disabled={loading}>
          {loading ? 'A entrar...' : 'Entrar'}
        </button>
      </form>
    </main>
  )
}

// =============================================================
// src/app/layout.tsx — Root layout com AuthProvider
// =============================================================
// 'use client' não é necessário aqui pois AuthProvider já é client
import type { Metadata }  from 'next'
import { AuthProvider }   from '@/contexts/AuthContext'

export const metadata: Metadata = { title: 'Sistema de Monitoramento' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}

// =============================================================
// src/components/AlertaList.tsx — Exemplo de listagem com paginação
// =============================================================
'use client'

import { useEffect, useState } from 'react'
import { alertaService }       from '@/services'
import type { Alerta, PaginatedResponse } from '@/types'

const COR_NIVEL: Record<string, string> = {
  critico:  '#c0392b',
  medio:    '#e67e22',
  razoavel: '#27ae60',
}

export function AlertaList() {
  const [resultado, setResultado] = useState<PaginatedResponse<Alerta> | null>(null)
  const [pagina,    setPagina]    = useState(1)
  const [loading,   setLoading]   = useState(false)
  const [erro,      setErro]      = useState('')

  useEffect(() => {
    async function carregar() {
      setLoading(true)
      setErro('')
      try {
        const { data } = await alertaService.listar({ page: pagina, limit: 10 })
        setResultado(data)
      } catch (err: any) {
        setErro(err.response?.data?.message ?? 'Erro ao carregar alertas')
      } finally {
        setLoading(false)
      }
    }
    carregar()
  }, [pagina])

  async function marcarLido(id: string) {
    await alertaService.marcarLido(id)
    // Recarrega a lista após marcar
    setPagina((p) => p)
  }

  if (loading) return <p>A carregar alertas...</p>
  if (erro)    return <p style={{ color: 'red' }}>{erro}</p>
  if (!resultado) return null

  return (
    <div>
      <h2>Alertas ({resultado.meta.total})</h2>

      {resultado.data.map((alerta) => (
        <div key={alerta.id} style={{ borderLeft: `4px solid ${COR_NIVEL[alerta.nivel]}`, padding: '8px 12px', marginBottom: 8 }}>
          <strong style={{ color: COR_NIVEL[alerta.nivel] }}>{alerta.nivel.toUpperCase()}</strong>
          <p>{alerta.descricao}</p>
          <small>{alerta.equipamento?.nome} — {alerta.equipamento?.localizacao}</small>
          <br />
          {alerta.lidoEm ? (
            <small style={{ color: '#888' }}>✓ Lido por {alerta.lidoPor?.nome}</small>
          ) : (
            <button onClick={() => marcarLido(alerta.id)}>Marcar como lido</button>
          )}
        </div>
      ))}

      {/* Paginação */}
      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <button disabled={pagina === 1} onClick={() => setPagina((p) => p - 1)}>← Anterior</button>
        <span>Página {pagina} de {resultado.meta.totalPages}</span>
        <button disabled={pagina === resultado.meta.totalPages} onClick={() => setPagina((p) => p + 1)}>Próxima →</button>
      </div>
    </div>
  )
}
