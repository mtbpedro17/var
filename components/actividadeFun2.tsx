/* eslint-disable react-hooks/static-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import {
  Bell,
  CheckCircle,
  LogIn
} from 'lucide-react'

interface AtividadesFuncionario2Props {
  dados?: {
    dia: string
    alertas: number
    acoes: number
    logins: number
  }[]
}

export default function AtividadesFuncionario2({
  dados = [
    { dia: "Seg", alertas: 32, acoes: 0, logins: 0 },
    { dia: "Ter", alertas: 0, acoes: 0, logins: 0 },
    { dia: "Qua", alertas: 0, acoes: 0, logins: 0 },
    { dia: "Qui", alertas: 0, acoes: 6, logins: 0 },
    { dia: "Sex", alertas: 0, acoes: 0, logins: 0 },
    { dia: "Sáb", alertas: 0, acoes: 0, logins: 107 },
    { dia: "Dom", alertas: 0, acoes: 0, logins: 0 }
  ]
}: AtividadesFuncionario2Props) {

  // Totais dinâmicos
  const totais = dados.reduce(
    (acc, item) => {
      acc.alertas += item.alertas
      acc.acoes += item.acoes
      acc.logins += item.logins
      return acc
    },
    {
      alertas: 0,
      acoes: 0,
      logins: 0
    }
  )

  // Tooltip personalizado
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-[#1a2942] p-3 rounded-lg border border-gray-700 shadow-xl">
          <p className="text-white text-xs font-semibold mb-2">
            {label}
          </p>

          {payload.map((entry: any, index: number) => (
            entry.value > 0 && (
              <div
                key={index}
                className="flex items-center gap-2 text-xs mb-1"
              >
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: entry.color }}
                />

                <span className="text-gray-300">
                  {entry.name}:
                </span>

                <span className="text-white font-medium">
                  {entry.value}
                </span>
              </div>
            )
          ))}
        </div>
      )
    }

    return null
  }

  return (
    <div className="w-full h-full p-4 rounded-2xl flex flex-col">

      {/* Título */}
      <h2 className="text-white text-base font-semibold mb-4">
        Atividades dos Funcionários (Últimos 7 dias)
      </h2>

      {/* Área do gráfico */}
      <div className="flex-1 min-h-[220px] w-full">
        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={dados}
            margin={{
              top: 5,
              right: 10,
              left: -20,
              bottom: 0
            }}
          >

            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              vertical={false}
            />

            <XAxis
              dataKey="dia"
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
              axisLine={{ stroke: '#4B5563' }}
              tickLine={false}
            />

            <YAxis
              stroke="#9CA3AF"
              tick={{ fill: '#9CA3AF', fontSize: 10 }}
              axisLine={{ stroke: '#4B5563' }}
              width={25}
              tickLine={false}
            />

            <Tooltip content={<CustomTooltip />} />

            <Bar
              dataKey="alertas"
              name="Alertas"
              fill="#F59E0B"
              radius={[4, 4, 0, 0]}
              barSize={14}
            />

            <Bar
              dataKey="acoes"
              name="Ações"
              fill="#10B981"
              radius={[4, 4, 0, 0]}
              barSize={14}
            />

            <Bar
              dataKey="logins"
              name="Logins"
              fill="#3B82F6"
              radius={[4, 4, 0, 0]}
              barSize={14}
            />

          </BarChart>

        </ResponsiveContainer>
      </div>

      {/* Estatísticas */}
      <div className="flex flex-wrap justify-between gap-3 mt-5 pt-4 border-t border-gray-700">

        <div className="flex items-center gap-2">
          <Bell size={16} className="text-yellow-500" />

          <span className="text-gray-300 text-xs">
            {totais.alertas} Alertas Gerados
          </span>
        </div>

        <div className="flex items-center gap-2">
          <CheckCircle size={16} className="text-green-500" />

          <span className="text-gray-300 text-xs">
            {totais.acoes} Ações Realizadas
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LogIn size={16} className="text-blue-500" />

          <span className="text-gray-300 text-xs">
            {totais.logins} Logins
          </span>
        </div>

      </div>

    </div>
  )
}