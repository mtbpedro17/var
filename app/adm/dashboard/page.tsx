'use client'

import { useEffect, useState } from 'react'
import Caixa from '@/components/caixa'
import Caixa2 from '@/components/caixa2'
import Container from '@/components/container'
import Sidebar from '@/components/sidebar'
import Tabela, { TabelaResumo } from '@/components/tabela'
import { Bell } from 'lucide-react'
import { api } from '@/lib/api'
import Cookies from 'js-cookie'

interface ResumoCards {
  totalEmpresas:     number
  empresasAtivas:    number
  empresasInativas:  number
  empresasSuspensas: number
}

interface ResumoAlertas {
  total:    number
  naoLidos: number
  porNivel: { razoavel: number; medio: number; critico: number }
}

interface DadosResumo {
  cards:   ResumoCards
  alertas: ResumoAlertas
  tabela:  TabelaResumo[]
}

export default function Home() {
  const [dados, setDados] = useState<DadosResumo | null>(null)
  const [carregando, setCarregando] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('ADM')

  useEffect(() => {
    const usuarioRaw = Cookies.get('usuario')
    if (usuarioRaw) {
      try {
        const usuario = JSON.parse(usuarioRaw)
        setNomeUsuario(usuario.nome ?? 'ADM')
      } catch { /* cookie inválido */ }
    }

    async function carregarDados() {
      try {
        const res = await api.get('/empresas/dashboard/resumo')
        setDados(res.data.data)
      } catch (err) {
        console.error('Erro ao carregar dashboard ADM:', err)
      } finally {
        setCarregando(false)
      }
    }

    carregarDados()
  }, [])

  const caixasData = [
    { num: dados?.cards.totalEmpresas     ?? 0, descricao: 'Empresas registadas' },
    { num: dados?.cards.empresasAtivas    ?? 0, descricao: 'Empresas activas' },
    { num: dados?.cards.empresasInativas  ?? 0, descricao: 'Empresas inactivas' },
    { num: dados?.cards.empresasSuspensas ?? 0, descricao: 'Empresas suspensas' },
  ]

  return (
    <>
      <Sidebar>
        <Container titulo="Dashboard" notificacao={<Bell size={20} />} usuario={nomeUsuario}>

          {carregando ? (
            <div className="flex items-center justify-center h-64 text-gray-400">
              A carregar...
            </div>
          ) : (
            <>
              <div className="grid grid-cols-12 w-full gap-4 mt-5">
                {/* Cards */}
                <div className="col-span-8">
                  <div className="grid grid-cols-2 grid-rows-2 gap-3">
                    {caixasData.map((item, index) => (
                      <Caixa key={index} num={item.num} descricao={item.descricao} />
                    ))}
                  </div>
                </div>

                {/* Visão geral de alertas */}
                <div className="col-span-4">
                  <div className="bg-[#262537] rounded-lg p-4 text-white h-full flex flex-col justify-center gap-6">
                    <h1 className="font-semibold text-xl text-center">
                      Visão Geral de alertas
                    </h1>
                    <div className="flex flex-col gap-3">
                      <Caixa2 num={dados?.alertas.total    ?? 0} descricao="Total de alertas" />
                      <Caixa2 num={dados?.alertas.naoLidos ?? 0} descricao="Alertas não lidos" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Tabela */}
              <div className="w-full mt-5">
                <div className="p-4 rounded-2xl shadow-xl bg-[#040928] border border-[#050e4c]">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    VAR resumo da plataforma
                  </h2>
                  <div className="overflow-x-auto">
                    <div className="min-w-[600px]">
                      <Tabela dados={dados?.tabela ?? []} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

        </Container>
      </Sidebar>
    </>
  )
}