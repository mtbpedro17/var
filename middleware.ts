import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const DASHBOARD: Record<string, string> = {
  ADM:         '/adm/dashboard',
  Operacional: '/operacional/dashboard',
  Cliente:     '/cliente/dashboard',
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token      = request.cookies.get('token')?.value
  const usuarioRaw = request.cookies.get('usuario')?.value

  // Rota pública (só a raiz exacta)
  if (pathname === '/') {
    if (token && usuarioRaw) {
      try {
        const usuario = JSON.parse(usuarioRaw)
        return NextResponse.redirect(
          new URL(DASHBOARD[usuario.papel] ?? '/', request.url)
        )
      } catch { /* cookie corrompido */ }
    }
    return NextResponse.next()
  }

  // Sem token → vai para login
  if (!token || !usuarioRaw) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api/).*)'],
}