'use client'

import { useEffect, useState } from "react"
import Container from "@/components/container"
import EstatisticasEquipamentos from "@/components/estatEqui"
import ListaEquipamentos from "@/components/listaEquip"
import PesquisarEquipamento from "@/components/pesquisaEqui"
import Sidebar3 from "@/components/sidbar3"
import { ArrowLeft, Bell } from "lucide-react"
import { useParams } from "next/navigation"
import Link from "next/link"
import BotoesAcao from "@/components/botaoAc"

import { empresaService, equipamentoService } from "@/services"

export default function DetalheEmpresaPage() {
  const params = useParams()
  const empresaId = params.id as string

  const [empresa, setEmpresa] = useState<any>(null)
  const [equipamentos, setEquipamentos] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function carregar() {
      try {
        const [empresaRes, equipamentosRes] = await Promise.all([
          empresaService.buscar(empresaId),
          equipamentoService.listar({ empresaId, limit: 100 })
        ])

        const empresaData = empresaRes.data.data
        const equipamentosData = equipamentosRes.data.data.data ?? []

        setEmpresa(empresaData)
        setEquipamentos(equipamentosData)

      } catch (err) {
        console.error("Erro ao carregar empresa:", err)
      } finally {
        setLoading(false)
      }
    }

    if (empresaId) carregar()
  }, [empresaId])

  if (loading) {
    return (
      <Sidebar3>
        <Container titulo="Carregando..." notificacao={<Bell size={20} />} usuario="">
          <div className="text-white">A carregar dados...</div>
        </Container>
      </Sidebar3>
    )
  }

  if (!empresa) {
    return (
      <Sidebar3>
        <Container titulo="Empresa não encontrada" notificacao={<Bell size={20} />} usuario="">
          <div className="text-white">Empresa não encontrada</div>
        </Container>
      </Sidebar3>
    )
  }

  return (
    <Sidebar3>
      <Container
        titulo={empresa.nome}
        notificacao={<Bell size={20} />}
        usuario="Sistema"
      >
        <div className="space-y-4 flex gap-10">

          {/* LADO ESQUERDO */}
          <div className="flex flex-col gap-4 w-200">

            <Link
              href="/operacional/gerir_alerta"
              className="flex items-center gap-2 text-gray-400 hover:text-white"
            >
              <ArrowLeft size={18} />
              <span>Voltar</span>
            </Link>

            <PesquisarEquipamento placeholder="pesquisar equipamento..." />

            <EstatisticasEquipamentos
              online={empresa._count?.equipamentos ?? 0}
              aviso={empresa._count?.alertas ?? 0}
              offline={0}
            />

            <ListaEquipamentos equipamentos={equipamentos} />
          </div>

          {/* LADO DIREITO */}
          <div className="w-125 h-full flex flex-col items-end">
            <BotoesAcao
              onAdicionarEquipamento={() => console.log('Adicionar equipamento')}
              onReativarMonitoramento={() => console.log('Reativar monitoramento')}
            />
          </div>

        </div>
      </Container>
    </Sidebar3>
  )
}