'use client'

import { useEffect, useState } from "react"
import AtividadesFuncionario2 from "@/components/actividadeFun2"
import AtividadesRecentes from "@/components/actividadeRec2"
import Caixa5 from "@/components/caixa5"
import Container from "@/components/container"
import EquipeOnline from "@/components/equipaOline"
import Sidebar3 from "@/components/sidbar3"
import { AlertCircle, AlertTriangle, Bell, MapPin, UserCheck } from "lucide-react"

import { alertaService, funcionarioService, equipamentoService, logService } from "@/services"

interface DadosGrafico {
  dia: string
  alertas: number
  acoes: number
  logins: number
}

interface ResumoCards {
  funcionariosAtivos: number
  locaisMonitorados: number
  falhas: number
  alertas: number
}

const DIAS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

function agruparLogsPorDia(logs: any[]): DadosGrafico[] {
  const hoje = new Date()
  const semana: DadosGrafico[] = []

  for (let i = 6; i >= 0; i--) {
    const data = new Date(hoje)
    data.setDate(hoje.getDate() - i)

    const diario: DadosGrafico = {
      dia: DIAS[data.getDay()],
      alertas: 0,
      acoes: 0,
      logins: 0,
    }

    logs.forEach((log) => {
      const logData = new Date(log.criadoEm)

      const sameDay =
        logData.getDate() === data.getDate() &&
        logData.getMonth() === data.getMonth() &&
        logData.getFullYear() === data.getFullYear()

      if (!sameDay) return

      if (log.acao?.includes("/alertas") && log.acao?.startsWith("POST")) {
        diario.alertas++
      } else {
        diario.acoes++
      }
    })

    semana.push(diario)
  }

  return semana
}

export default function Dashboard() {
  const [cards, setCards] = useState<ResumoCards>({
    funcionariosAtivos: 0,
    locaisMonitorados: 0,
    falhas: 0,
    alertas: 0,
  })

  const [dadosGrafico, setDadosGrafico] = useState<DadosGrafico[]>([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    async function carregarDados() {
      try {
        const [resumoAlertas, funcionarios, equipamentos, logs] =
          await Promise.allSettled([
            alertaService.resumo(),
            funcionarioService.listar({ status: "Ativo", limit: 1 }),
            equipamentoService.listar({ limit: 1 }),
            logService.listar({ limit: 200 }),
          ])

        // ALERTAS
        const totalAlertas =
          resumoAlertas.status === "fulfilled"
            ? resumoAlertas.value.data.data.total
            : 0

        const totalFalhas =
          resumoAlertas.status === "fulfilled"
            ? resumoAlertas.value.data.data.porNivel?.critico ?? 0
            : 0

        // FUNCIONÁRIOS (CORRIGIDO)
        const totalFuncionarios =
          funcionarios.status === "fulfilled"
            ? funcionarios.value.data.data.meta.total
            : 0

        // EQUIPAMENTOS (CORRIGIDO defensivo)
        const totalLocais =
          equipamentos.status === "fulfilled"
            ? equipamentos.value.data.data?.meta?.total ?? 0
            : 0

        setCards({
          funcionariosAtivos: totalFuncionarios,
          locaisMonitorados: totalLocais,
          falhas: totalFalhas,
          alertas: totalAlertas,
        })

        // LOGS
        if (logs.status === "fulfilled") {
          const logsData = Array.isArray(logs.value.data.data)
            ? logs.value.data.data
            : []

          setDadosGrafico(agruparLogsPorDia(logsData))
        }
      } catch (err) {
        console.error("Erro dashboard:", err)
      } finally {
        setCarregando(false)
      }
    }

    carregarDados()
  }, [])

  return (
    <div>
      <Sidebar3>
        <Container
          titulo="Dashboard"
          notificacao={<Bell size={20} />}
          usuario={new Date().toLocaleDateString("pt-PT")}
        >
          <div className="flex justify-around mb-4">
            <Caixa5 descricao="Funcionários activos" num={cards.funcionariosAtivos} icon={<UserCheck />} />
            <Caixa5 descricao="Locais monitorados" num={cards.locaisMonitorados} icon={<MapPin />} />
            <Caixa5 descricao="Falhas" num={cards.falhas} icon={<AlertCircle />} />
            <Caixa5 descricao="Alertas" num={cards.alertas} icon={<AlertTriangle />} />
          </div>

          <div className="flex gap-3 mb-3">
            <div className="flex-1">
              <AtividadesFuncionario2 dados={dadosGrafico} />
            </div>

            <div className="w-125">
              <EquipeOnline />
            </div>
          </div>

          <AtividadesRecentes />
        </Container>
      </Sidebar3>
    </div>
  )
}