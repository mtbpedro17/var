'use client'
import { useState } from 'react'
import { Plus, Minus, ChevronDown, Check, Smartphone, Building, CreditCard } from 'lucide-react'
import { api } from '@/lib/api'

const planos = [
  { id: 'Basico',       nome: 'Plano Básico',    preco: 40000,  descricao: '40mil Kzs/mês',      dispositivos: '2 Dispositivos/mês',       recomendado: false },
  { id: 'Profissional', nome: 'Plano Premium',   preco: 240000, descricao: '240mil — 6 meses',   dispositivos: '6 Dispositivos/12 meses',  recomendado: true  },
  { id: 'Premium',      nome: 'Plano Standard',  preco: 480000, descricao: '480mil — 12 meses',  dispositivos: '12 Dispositivos/12 meses', recomendado: false },
]

const metodosPagamento = ['Multicaixa Express', 'Transferência IBAN', 'Depósito']

interface PagarLicencaProps {
  empresaId: string
  onVoltar:  () => void
}

export default function PagarLicenca({ empresaId, onVoltar }: PagarLicencaProps) {
  const [planoSel,     setPlanoSel]     = useState(planos[1])
  const [duracao,      setDuracao]      = useState(24)
  const [metodo,       setMetodo]       = useState(metodosPagamento[0])
  const [dropdown,     setDropdown]     = useState(false)
  const [loading,      setLoading]      = useState(false)
  const [erro,         setErro]         = useState('')
  const [sucesso,      setSucesso]      = useState(false)

  const total = (planoSel.preco * duracao / 12).toLocaleString('pt-PT')

  const confirmar = async () => {
    try {
      setLoading(true)
      setErro('')

      // 1. Criar licença
      const inicioEm = new Date()
      const expiraEm = new Date()
      expiraEm.setMonth(expiraEm.getMonth() + duracao)

      const resLic = await api.post('/licencas', {
        empresaId,
        plano:            planoSel.id,
        maxDeFuncionarios: duracao <= 6 ? 2 : duracao <= 12 ? 6 : 12,
        inicioEm:         inicioEm.toISOString(),
        expiraEm:         expiraEm.toISOString(),
      })

      const licencaId = resLic.data.data.id

      // 2. Criar pagamento
      await api.post('/pagamentos', {
        empresaId,
        licencaId,
        valor:     planoSel.preco * duracao / 12,
        moeda:     'AOA',
        referencia: metodo,
      })

      setSucesso(true)
      setTimeout(() => { setSucesso(false); onVoltar() }, 2000)
    } catch (err: any) {
      setErro(err?.response?.data?.message ?? 'Erro ao processar pagamento.')
    } finally {
      setLoading(false)
    }
  }

  if (sucesso) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4">
        <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center">
          <Check size={32} className="text-green-500" />
        </div>
        <p className="text-white text-xl font-semibold">Pedido criado com sucesso!</p>
        <p className="text-gray-400 text-sm">O pagamento ficará pendente até confirmação.</p>
      </div>
    )
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-sm">Escolhe o plano adequado para sua empresa</p>
        <button onClick={onVoltar} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
          ← Voltar
        </button>
      </div>

      {erro && (
        <div className="mb-4 p-3 rounded-lg bg-red-600/20 border border-red-600 text-red-400 text-sm">{erro}</div>
      )}

      <div className="flex gap-6">
        <div className="flex flex-col gap-4 flex-1">
          <div>
            <h2 className="text-white font-semibold text-base mb-3">Escolher Pacote</h2>
            <div className="grid grid-cols-3 gap-3">
              {planos.map((plano) => {
                const ativo = planoSel.id === plano.id
                return (
                  <div key={plano.id} onClick={() => setPlanoSel(plano)}
                    className={`relative bg-[#040928] border rounded-2xl p-4 cursor-pointer transition-all flex flex-col justify-between min-h-[140px]
                      ${ativo ? 'border-blue-500' : 'border-[#050e4c] hover:border-blue-500/50'}`}>
                    {plano.recomendado && (
                      <span className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-semibold px-3 py-0.5 rounded-full">
                        Recomendado
                      </span>
                    )}
                    <div className={plano.recomendado ? 'mt-5' : ''}>
                      <p className="text-white font-semibold text-sm">{plano.nome}</p>
                      <p className="text-gray-400 text-xs mt-1">{plano.descricao}</p>
                      <p className="text-gray-400 text-xs mt-3">{plano.dispositivos}</p>
                    </div>
                    <div className="flex justify-end mt-3">
                      <button className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${ativo ? 'bg-blue-600' : 'bg-[#1a2a80] hover:bg-blue-600'}`}>
                        {ativo ? <Check size={14} className="text-white" /> : <Plus size={14} className="text-white" />}
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="bg-[#040928] border border-[#050e4c] rounded-2xl p-4 w-[220px]">
            <h3 className="text-white font-semibold text-sm mb-3">Configurar & Personalizar</h3>
            <div className="flex items-center gap-4 mb-3">
              <button onClick={() => setDuracao((d) => (d > 1 ? d - 1 : 1))}
                className="w-8 h-8 bg-[#1a2a80] hover:bg-blue-600 text-white rounded-md flex items-center justify-center transition-colors">
                <Minus size={14} />
              </button>
              <span className="text-white font-semibold text-sm w-6 text-center">{duracao}</span>
              <button onClick={() => setDuracao((d) => d + 1)}
                className="w-8 h-8 bg-[#1a2a80] hover:bg-blue-600 text-white rounded-md flex items-center justify-center transition-colors">
                <Plus size={14} />
              </button>
            </div>
            <p className="text-gray-400 text-xs mb-2">Duração (meses)</p>
            <div className="bg-[#1a2a80] rounded-lg px-3 py-2 text-white text-sm text-center font-semibold">{duracao}</div>
          </div>
        </div>

        <div className="w-[280px] bg-[#040928] border border-[#050e4c] rounded-2xl p-5 flex flex-col gap-4 h-fit">
          <h2 className="text-white font-semibold text-base">Resumo do Pedido</h2>
          <div>
            <p className="text-white font-semibold text-sm">{planoSel.nome}</p>
            <p className="text-gray-400 text-xs mt-0.5">{duracao} Meses</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-xs">Total a Pagar</p>
            <div className="bg-blue-600/20 border border-blue-500/40 rounded-lg px-3 py-1.5 text-blue-300 text-sm font-semibold">
              AOA {total},00
            </div>
          </div>

          <div className="bg-[#1a2a80] rounded-xl px-3 py-2.5 flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
              {metodo === 'Multicaixa Express' && <Smartphone size={16} />}
              {metodo === 'Transferência IBAN' && <CreditCard size={16} />}
              {metodo === 'Depósito'           && <Building   size={16} />}
            </div>
            <span className="text-white text-sm font-medium">{metodo}</span>
          </div>

          <div className="relative">
            <p className="text-gray-400 text-xs mb-1.5">Método de Pagamento</p>
            <button onClick={() => setDropdown(!dropdown)}
              className="w-full bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2.5 text-white text-sm flex items-center justify-between">
              {metodo}
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${dropdown ? 'rotate-180' : ''}`} />
            </button>
            {dropdown && (
              <div className="absolute top-full left-0 w-full bg-[#040928] border border-[#1a2a80] rounded-lg overflow-hidden z-10 mt-0.5">
                {metodosPagamento.filter((m) => m !== metodo).map((m) => (
                  <button key={m} onClick={() => { setMetodo(m); setDropdown(false) }}
                    className="w-full text-left px-3 py-2.5 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                    {m}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-1.5 text-xs">
            {metodo === 'Depósito'           && <><p className="text-gray-300"><span className="text-gray-500">Nº da conta:</span> 27798754895945</p><p className="text-gray-300"><span className="text-gray-500">Beneficiário:</span> Continental Tecno IA</p></>}
            {metodo === 'Transferência IBAN' && <><p className="text-gray-300"><span className="text-gray-500">IBAN:</span> 0040.0000.7777.7777.7777.7</p><p className="text-gray-300"><span className="text-gray-500">Beneficiário:</span> Continental Tecno IA</p></>}
            {metodo === 'Multicaixa Express' && <><p className="text-gray-300"><span className="text-gray-500">Nº Express:</span> 955 555 500</p><p className="text-gray-300"><span className="text-gray-500">Beneficiário:</span> Continental Tecno IA</p></>}
          </div>

          <button onClick={confirmar} disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 text-sm font-semibold transition-colors mt-2 disabled:opacity-50">
            {loading ? 'A processar...' : 'Confirmar & Pagar'}
          </button>
        </div>
      </div>
    </div>
  )
}