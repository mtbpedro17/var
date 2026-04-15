'use client'
import { useState } from 'react';
import { Plus, Minus, ChevronDown, Check, Smartphone, Building, CreditCard } from 'lucide-react';

const planos = [
  {
    id: 'basico',
    nome: 'Planos Básico',
    preco: 40000,
    descricao: '40mil Kzs/mês',
    dispositivos: '2 Dispositivos/mês',
    recomendado: false,
  },
  {
    id: 'premium',
    nome: 'Planos Premium',
    preco: 240000,
    descricao: '240mil  6 meses',
    dispositivos: '6 Dispositivos/12 meses',
    recomendado: true,
  },
  {
    id: 'standard',
    nome: 'Planos Standard',
    preco: 480000,
    descricao: '480mil  12 meses',
    dispositivos: '12 Dispositivos/12 meses',
    recomendado: false,
  },
];

const metodosPagamento = [
  'Multicaixa Express',
  'Transferência IBAN',
  'Depósito',
];

interface PagarLicencaProps {
  onVoltar: () => void;
}

export default function PagarLicenca({ onVoltar }: PagarLicencaProps) {
  const [planoSelecionado, setPlanoSelecionado] = useState(planos[1]);
  const [duracao, setDuracao] = useState(24);
  const [metodoPagamento, setMetodoPagamento] = useState(metodosPagamento[0]);
  const [dropdownAberto, setDropdownAberto] = useState(false);

  const totalAPagar = (planoSelecionado.preco * duracao / 12).toLocaleString('pt-PT');

  return (
    <div className="w-full">
      {/* Subtítulo abaixo do breadcrumb (título da página) */}
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-400 text-sm">Escolhe o plano adequado para sua empresa</p>
        <button
          onClick={onVoltar}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
        >
          ← Voltar
        </button>
      </div>

      <div className="flex gap-6">

        {/* Coluna esquerda */}
        <div className="flex flex-col gap-4 flex-1">

          {/* Escolher Pacote */}
          <div>
            <h2 className="text-white font-semibold text-base mb-3">Escolher Pacote</h2>
            <div className="grid grid-cols-3 gap-3">
              {planos.map((plano) => {
                const ativo = planoSelecionado.id === plano.id;
                return (
                  <div
                    key={plano.id}
                    onClick={() => setPlanoSelecionado(plano)}
                    className={`relative bg-[#040928] border rounded-2xl p-4 cursor-pointer transition-all flex flex-col justify-between min-h-[140px]
                      ${ativo ? 'border-blue-500' : 'border-[#050e4c] hover:border-blue-500/50'}`}
                  >
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
                      <button
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors
                          ${ativo ? 'bg-blue-600' : 'bg-[#1a2a80] hover:bg-blue-600'}`}
                      >
                        {ativo ? <Check size={14} className="text-white" /> : <Plus size={14} className="text-white" />}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Configurar & Personalizar */}
          <div className="bg-[#040928] border border-[#050e4c] rounded-2xl p-4 w-[220px]">
            <h3 className="text-white font-semibold text-sm mb-3">Configurar & Personalizar</h3>
            <div className="flex items-center gap-4 mb-3">
              <button
                onClick={() => setDuracao((d) => (d > 1 ? d - 1 : 1))}
                className="w-8 h-8 bg-[#1a2a80] hover:bg-blue-600 text-white rounded-md flex items-center justify-center transition-colors"
              >
                <Minus size={14} />
              </button>
              <span className="text-white font-semibold text-sm w-6 text-center">{duracao}</span>
              <button
                onClick={() => setDuracao((d) => d + 1)}
                className="w-8 h-8 bg-[#1a2a80] hover:bg-blue-600 text-white rounded-md flex items-center justify-center transition-colors"
              >
                <Plus size={14} />
              </button>
            </div>
            <p className="text-gray-400 text-xs mb-2">Duração (meses)</p>
            <div className="bg-[#1a2a80] rounded-lg px-3 py-2 text-white text-sm text-center font-semibold">
              {duracao}
            </div>
          </div>
        </div>

        {/* Resumo do Pedido */}
        <div className="w-[280px] bg-[#040928] border border-[#050e4c] rounded-2xl p-5 flex flex-col gap-4 h-fit">
          <h2 className="text-white font-semibold text-base">Resumo do Pedido</h2>

          <div>
            <p className="text-white font-semibold text-sm">{planoSelecionado.nome}</p>
            <p className="text-gray-400 text-xs mt-0.5">{duracao} Meses</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-gray-400 text-xs">Total a Pagar</p>
            <div className="bg-blue-600/20 border border-blue-500/40 rounded-lg px-3 py-1.5 text-blue-300 text-sm font-semibold">
              {totalAPagar},00
            </div>
          </div>

          <div className="bg-[#1a2a80] rounded-xl px-3 py-2.5 flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
              {metodoPagamento === 'Multicaixa Express' && <Smartphone size={16} />}
              {metodoPagamento === 'Transferência IBAN' && <CreditCard size={16} />}
              {metodoPagamento === 'Depósito' && <Building size={16} />}
            </div>
            <span className="text-white text-sm font-medium">{metodoPagamento}</span>
          </div>

          <div className="relative">
            <p className="text-gray-400 text-xs mb-1.5">Método de Pagamento</p>
            <button
              onClick={() => setDropdownAberto(!dropdownAberto)}
              className="w-full bg-[#040928] border border-[#1a2a80] rounded-lg px-3 py-2.5 text-white text-sm flex items-center justify-between"
            >
              {metodoPagamento}
              <ChevronDown size={16} className={`text-gray-400 transition-transform ${dropdownAberto ? 'rotate-180' : ''}`} />
            </button>
            {dropdownAberto && (
              <div className="absolute top-full left-0 w-full bg-[#040928] border border-[#1a2a80] rounded-lg overflow-hidden z-10 mt-0.5">
                {metodosPagamento.filter((m) => m !== metodoPagamento).map((metodo) => (
                  <button
                    key={metodo}
                    onClick={() => { setMetodoPagamento(metodo); setDropdownAberto(false); }}
                    className="w-full text-left px-3 py-2.5 text-sm text-gray-300 hover:bg-white/10 transition-colors"
                  >
                    {metodo}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Dados do beneficiário conforme método */}
          <div className="flex flex-col gap-1.5 text-xs">
            {metodoPagamento === 'Depósito' && (
              <>
                <p className="text-gray-300"><span className="text-gray-500">Nº da conta:</span> 27798754895945</p>
                <p className="text-gray-300"><span className="text-gray-500">Beneficiário:</span> Continental Tecno IA</p>
              </>
            )}
            {metodoPagamento === 'Transferência IBAN' && (
              <>
                <p className="text-gray-300"><span className="text-gray-500">IBAN:</span> 0040.0000.7777.7777.7777.7</p>
                <p className="text-gray-300"><span className="text-gray-500">Beneficiário:</span> Continental Tecno IA</p>
              </>
            )}
            {metodoPagamento === 'Multicaixa Express' && (
              <>
                <p className="text-gray-300"><span className="text-gray-500">Nº Express:</span> 955 555 500</p>
                <p className="text-gray-300"><span className="text-gray-500">Beneficiário:</span> Continental Tecno IA</p>
              </>
            )}
          </div>

          <button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 text-sm font-semibold transition-colors mt-2">
            Confirmar & Pagar
          </button>
        </div>
      </div>
    </div>
  );
}