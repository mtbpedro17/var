'use client'

import { useEffect, useState } from "react"
import AtividadesFuncionario2 from "@/components/actividadeFun2"
import AtividadesRecentes from "@/components/actividadeRec2"
import Caixa5 from "@/components/caixa5"
import Container from "@/components/container"
import EquipeOnline from "@/components/equipaOline"
import Sidebar3 from "@/components/sidbar3"
import {
  AlertCircle,
  AlertTriangle,
  Bell,
  MapPin,
  UserCheck,
} from "lucide-react"

import {
  alertaService,
  funcionarioService,
  equipamentoService,
  logService,
} from "@/services"

// ── Tipos locais ─────────────────────────────────────────────

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

// ── Helpers ───────────────────────────────────────────────────

const DIAS = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]

// Agrupa logs dos últimos 7 dias por dia da semana
function agruparLogsPorDia(logs: any[]): DadosGrafico[] {
  const hoje = new Date()
  const semana: DadosGrafico[] = []

  for (let i = 6; i >= 0; i--) {
    const data = new Date(hoje)
    data.setDate(hoje.getDate() - i)

    const diaNome = DIAS[data.getDay()]

    const diario: DadosGrafico = {
      dia: diaNome,
      alertas: 0,
      acoes: 0,
      logins: 0,
    }

    logs.forEach((log) => {
      const logData = new Date(log.criadoEm)

      const mesmoDia =
        logData.getDate() === data.getDate() &&
        logData.getMonth() === data.getMonth() &&
        logData.getFullYear() === data.getFullYear()

      if (!mesmoDia) return

      // Contagem de alertas
      if (
        log.acao?.includes('/alertas') &&
        log.acao?.startsWith('POST')
      ) {
        diario.alertas++
      }

      // Contagem de ações
      else if (
        log.acao?.startsWith('POST') ||
        log.acao?.startsWith('PATCH')
      ) {
        diario.acoes++
      }

      // Contagem de logins (descomentar se existir)
      /*
      if (log.acao?.includes('/auth/login')) {
        diario.logins++
      }
      */
    })

    semana.push(diario)
  }

  return semana
}

// ── Componente ───────────────────────────────────────────────

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
        // Todas as chamadas em paralelo
        const [
          resumoAlertas,
          funcionarios,
          equipamentos,
          logs,
        ] = await Promise.allSettled([
          alertaService.resumo(),
          funcionarioService.listar({
            status: 'Ativo',
            limit: 1,
          }),
          equipamentoService.listar({
            limit: 1,
          }),
          logService.listar({
            limit: 200,
          }),
        ])

        // ── Dados dos cards ─────────────────────────────────
        console.log(funcionarios);
        
        const totalAlertas =
          resumoAlertas.status === 'fulfilled'
            ? resumoAlertas.value.data.data.total
            : 0

        const totalFalhas =
          resumoAlertas.status === 'fulfilled'
            ? resumoAlertas.value.data.data.porNivel?.critico ?? 0
            : 0

        const totalFuncionarios =
          funcionarios.status === 'fulfilled'
            ? funcionarios.value.data.meta.total
            : 0

        const totalLocais =
          equipamentos.status === 'fulfilled'
            ? equipamentos.value.data.meta.total
            : 0

        setCards({
          funcionariosAtivos: totalFuncionarios,
          locaisMonitorados: totalLocais,
          falhas: totalFalhas,
          alertas: totalAlertas,
        })

        // ── Dados do gráfico ───────────────────────────────

        if (logs.status === 'fulfilled') {
          console.log('LOGS DA API:', logs.value.data)

          const logsData = Array.isArray(
            logs.value.data.data
          )
            ? logs.value.data.data
            : []

          setDadosGrafico(agruparLogsPorDia(logsData))
        }
      } catch (erro) {
        console.error('Erro ao carregar dashboard:', erro)
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
          usuario={new Date().toLocaleDateString('pt-PT')}
        >

          {/* Cards superiores */}
          <div className="flex justify-around mb-4">
            <Caixa5
              descricao="Funcionários activos"
              num={carregando ? 0 : cards.funcionariosAtivos}
              icon={<UserCheck size={20} color="green" />}
            />

            <Caixa5
              descricao="Locais monitorados"
              num={carregando ? 0 : cards.locaisMonitorados}
              icon={<MapPin size={20} color="green" />}
            />

            <Caixa5
              descricao="Falhas"
              num={carregando ? 0 : cards.falhas}
              icon={<AlertCircle size={20} color="yellow" />}
            />

            <Caixa5
              descricao="Alertas"
              num={carregando ? 0 : cards.alertas}
              icon={<AlertTriangle size={20} color="red" />}
            />
          </div>

          {/* Primeira linha */}
          <div className="flex gap-3 mb-3">
            <div className="flex-1 h-87.5 shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
              <AtividadesFuncionario2 dados={dadosGrafico} />
            </div>

            <div className="w-125 shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
              <EquipeOnline />
            </div>
          </div>

          {/* Segunda linha */}
          <div className="w-full shadow-xl bg-[#040928] border border-[#050e4c] rounded-2xl">
            <AtividadesRecentes />
          </div>

        </Container>
      </Sidebar3>
    </div>
  )
}