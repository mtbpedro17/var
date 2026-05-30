// src/lib/api.ts
// Cliente HTTP centralizado.
// - Injeta o token JWT em todas as requisições autenticadas
// - Redireciona para /login automaticamente se o token expirar

import axios from 'axios'
import Cookies from 'js-cookie'

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

console.log("API URL:", process.env.NEXT_PUBLIC_API_URL)

// ── Request interceptor ──────────────────────────────────────
// Anexa o token JWT no header antes de cada requisição
api.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// ── Response interceptor ─────────────────────────────────────
// Se o servidor responder 401 (token expirado/inválido),
// limpa a sessão e redireciona para o login
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      Cookies.remove('token')
      Cookies.remove('usuario')
      if (typeof window !== 'undefined') {
        window.location.href = '/'
      }
    }
    return Promise.reject(error)
  },
)
