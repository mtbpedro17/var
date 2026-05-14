// middleware.ts  (raiz do projecto, ao lado do package.json)
// Protege rotas por papel antes de renderizar qualquer página.
// Redireciona para /login se não houver token.
// Redireciona para o dashboard correcto se o papel não tiver acesso.

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rotas públicas — não precisam de token
const ROTAS_PUBLICAS = ['/login']

// Mapa de prefixo de rota → papéis permitidos
const PERMISSOES: Record<string, string[]> = {
  '/dashboard/adm':         ['ADM'],
  '/dashboard/operacional': ['ADM', 'Operacional'],
  '/dashboard/cliente':     ['ADM', 'Operacional', 'Cliente'],
}

// Dashboard padrão por papel
const DASHBOARD: Record<string, string> = {
  ADM:         '/dashboard/adm',
  Operacional: '/dashboard/operacional',
  Cliente:     '/dashboard/cliente',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token   = request.cookies.get('token')?.value
  const usuarioRaw = request.cookies.get('usuario')?.value

  // Rota pública — deixa passar
  if (ROTAS_PUBLICAS.some((r) => pathname.startsWith(r))) {
    // Se já estiver autenticado, redireciona para o dashboard
    if (token && usuarioRaw) {
      try {
        const usuario = JSON.parse(usuarioRaw)
        return NextResponse.redirect(
          new URL(DASHBOARD[usuario.papel] ?? '/login', request.url)
        )
      } catch { /* cookie corrompido */ }
    }
    return NextResponse.next()
  }

  // Sem token → vai para login
  if (!token || !usuarioRaw) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Verifica papel para rotas protegidas
  try {
    const usuario = JSON.parse(usuarioRaw)
    const rotaProtegida = Object.keys(PERMISSOES).find((r) => pathname.startsWith(r))

    if (rotaProtegida) {
      const papeisPermitidos = PERMISSOES[rotaProtegida]
      if (!papeisPermitidos.includes(usuario.papel)) {
        // Redireciona para o dashboard do papel actual
        return NextResponse.redirect(
          new URL(DASHBOARD[usuario.papel] ?? '/login', request.url)
        )
      }
    }
  } catch {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  // Aplica middleware em todas as rotas excepto assets estáticos e API
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
}
