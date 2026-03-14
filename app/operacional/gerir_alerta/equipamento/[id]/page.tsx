'use client'
import Container from "@/components/container";
import EstatisticasEquipamentos from "@/components/estatEqui";
import ListaEquipamentos from "@/components/listaEquip";
import PesquisarEquipamento from "@/components/pesquisaEqui";
import Sidebar3 from "@/components/sidbar3";
import { ArrowLeft, Bell, } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import BotoesAcao from "@/components/botaoAc";

// Dados detalhados por empresa
const dadosPorEmpresa = {
  // Tech Solution - Matriz
  "tech-solution": {
    nome: "Tech Solution LDA",
    estatisticas: { online: 157, aviso: 44, offline: 29 },
    equipamentos: [
      { nome: "Servidor Principal", local: "Data Center 1", status: "online" as const, detalhe: "Bateria 85% - 14:45", aviso: null },
      { nome: "Servidor Backup", local: "Data Center 2", status: "online" as const, detalhe: "CPU 45% - 14:45", aviso: null },
      { nome: "Roteador Core", local: "Sala de Rede", status: "online" as const, detalhe: "Tráfego normal - 14:45", aviso: null },
      { nome: "Switch Distribuição", local: "Andar 3", status: "aviso" as const, detalhe: "Pico de tráfego - 14:30", aviso: "Alto volume de dados" },
      { nome: "Firewall", local: "Perímetro", status: "online" as const, detalhe: "Atualizado - 14:45", aviso: null },
      { nome: "Storage", local: "Data Center 1", status: "aviso" as const, detalhe: "85% capacidade - 14:40", aviso: "Quase cheio" },
      { nome: "Câmera Entrada", local: "Portaria", status: "offline" as const, detalhe: "Sem sinal - 13:20", aviso: null },
      { nome: "Câmera Estacionamento", local: "Piso -1", status: "offline" as const, detalhe: "Sem sinal - 09:15", aviso: null }
    ]
  },
  
  // AgroMonitor
  "agromonitor": {
    nome: "AgroMonitor SA",
    estatisticas: { online: 89, aviso: 12, offline: 5 },
    equipamentos: [
      { nome: "Estação Meteorológica", local: "Campo Norte", status: "online" as const, detalhe: "Temp: 28°C - 15:30", aviso: null },
      { nome: "Sensor de Umidade", local: "Talhão A1", status: "online" as const, detalhe: "Umidade 65% - 15:30", aviso: null },
      { nome: "Sensor de PH", local: "Talhão B2", status: "online" as const, detalhe: "PH 6.2 - 15:30", aviso: null },
      { nome: "Drone Monitoramento", local: "Base", status: "aviso" as const, detalhe: "Bateria 15% - 15:25", aviso: "Recarregar" },
      { nome: "Irrigação Automática", local: "Setor 3", status: "online" as const, detalhe: "Ativo - 15:30", aviso: null },
      { nome: "Sensor de Temperatura", local: "Estufa", status: "aviso" as const, detalhe: "Temperatura alta - 15:20", aviso: "Acima do ideal" },
      { nome: "Câmera Térmica", local: "Perímetro", status: "offline" as const, detalhe: "Falha - 10:30", aviso: null }
    ]
  },
  
  // EnergyFlow Ibérica
  "energyflow": {
    nome: "EnergyFlow Ibérica SL",
    estatisticas: { online: 234, aviso: 18, offline: 7 },
    equipamentos: [
      { nome: "Inversor Solar #1", local: "Parque Solar", status: "online" as const, detalhe: "45kW - 16:20", aviso: null },
      { nome: "Inversor Solar #2", local: "Parque Solar", status: "online" as const, detalhe: "42kW - 16:20", aviso: null },
      { nome: "Inversor Solar #3", local: "Parque Solar", status: "aviso" as const, detalhe: "Eficiência baixa - 16:15", aviso: "Manutenção necessária" },
      { nome: "Medidor de Energia", local: "Subestação", status: "online" as const, detalhe: "380kW/h - 16:20", aviso: null },
      { nome: "Transformador #1", local: "Estação A", status: "online" as const, detalhe: "Normal - 16:20", aviso: null },
      { nome: "Transformador #2", local: "Estação B", status: "offline" as const, detalhe: "Desligado - 08:00", aviso: null },
      { nome: "Gerador Backup", local: "Sala Máquinas", status: "aviso" as const, detalhe: "Teste automático - 16:10", aviso: "Verificar combustível" }
    ]
  },
  
  // Tech Solution 2 (Filial Norte)
  "tech-solution-2": {
    nome: "Tech Solution LDA - Filial Norte",
    estatisticas: { online: 45, aviso: 8, offline: 3 },
    equipamentos: [
      { nome: "Servidor Local", local: "Sala Servidores", status: "online" as const, detalhe: "Normal - 14:30", aviso: null },
      { nome: "Roteador", local: "Recepção", status: "online" as const, detalhe: "Tráfego normal - 14:30", aviso: null },
      { nome: "Switch", local: "Sala Técnica", status: "aviso" as const, detalhe: "Pico - 14:25", aviso: "Alto tráfego" },
      { nome: "Câmera Entrada", local: "Portaria", status: "online" as const, detalhe: "Ativa - 14:30", aviso: null },
      { nome: "Câmera Estoque", local: "Depósito", status: "offline" as const, detalhe: "Falha - 11:00", aviso: null }
    ]
  },
  
  // AgroMonitor 2 (Fazenda Sul)
  "agromonitor-2": {
    nome: "AgroMonitor SA - Fazenda Sul",
    estatisticas: { online: 67, aviso: 5, offline: 2 },
    equipamentos: [
      { nome: "Estação Metereológica", local: "Campo Sul", status: "online" as const, detalhe: "Temp: 32°C - 15:45", aviso: null },
      { nome: "Sensor de Irrigação", local: "Talhão C", status: "online" as const, detalhe: "Ativo - 15:45", aviso: null },
      { nome: "Sensor de Umidade", local: "Talhão D", status: "aviso" as const, detalhe: "Baixa umidade - 15:40", aviso: "Irrigar" },
      { nome: "Drone", local: "Base Sul", status: "online" as const, detalhe: "Carregando - 15:45", aviso: null },
      { nome: "Câmera Perímetro", local: "Entrada", status: "offline" as const, detalhe: "Manutenção - 14:00", aviso: null }
    ]
  },
  
  // EnergyFlow 2 (Parque Eólico)
  "energyflow-2": {
    nome: "EnergyFlow Ibérica - Parque Eólico",
    estatisticas: { online: 178, aviso: 22, offline: 4 },
    equipamentos: [
      { nome: "Turbina #01", local: "Aerogerador A", status: "online" as const, detalhe: "2.3MW - 17:00", aviso: null },
      { nome: "Turbina #02", local: "Aerogerador A", status: "online" as const, detalhe: "2.1MW - 17:00", aviso: null },
      { nome: "Turbina #03", local: "Aerogerador B", status: "online" as const, detalhe: "2.4MW - 17:00", aviso: null },
      { nome: "Turbina #04", local: "Aerogerador B", status: "aviso" as const, detalhe: "Vibração - 16:50", aviso: "Verificar rolamentos" },
      { nome: "Turbina #05", local: "Aerogerador C", status: "offline" as const, detalhe: "Manutenção - 09:00", aviso: null },
      { nome: "Subestação", local: "Central", status: "online" as const, detalhe: "15MW - 17:00", aviso: null }
    ]
  },
  
  // Tech Solution 3 (Filial Centro)
  "tech-solution-3": {
    nome: "Tech Solution LDA - Filial Centro",
    estatisticas: { online: 34, aviso: 6, offline: 1 },
    equipamentos: [
      { nome: "Servidor", local: "Sala Técnica", status: "online" as const, detalhe: "Normal - 14:15", aviso: null },
      { nome: "Rede Principal", local: "Datacenter", status: "online" as const, detalhe: "1Gbps - 14:15", aviso: null },
      { nome: "Câmeras", local: "Escritório", status: "aviso" as const, detalhe: "Intermitente - 14:10", aviso: "Sinal instável" },
      { nome: "Switch", local: "Sala Reuniões", status: "online" as const, detalhe: "Normal - 14:15", aviso: null }
    ]
  },
  
  // AgroMonitor 3 (Estação Experimental)
  "agromonitor-3": {
    nome: "AgroMonitor - Estação Experimental",
    estatisticas: { online: 23, aviso: 3, offline: 1 },
    equipamentos: [
      { nome: "Sensor Multiparamétrico", local: "Área 1", status: "online" as const, detalhe: "Todos parâmetros ok - 16:00", aviso: null },
      { nome: "Estação Base", local: "Laboratório", status: "online" as const, detalhe: "Operacional - 16:00", aviso: null },
      { nome: "Sensor CO2", local: "Estufa", status: "aviso" as const, detalhe: "Nível alto - 15:55", aviso: "Ventilar" },
      { nome: "Câmera", local: "Exterior", status: "offline" as const, detalhe: "Sem imagem - 12:30", aviso: null }
    ]
  },
  
  // EnergyFlow 3 (Usina Hidro)
  "energyflow-3": {
    nome: "EnergyFlow - Usina Hidro",
    estatisticas: { online: 312, aviso: 28, offline: 6 },
    equipamentos: [
      { nome: "Turbina Kaplan #1", local: "Casa de Força", status: "online" as const, detalhe: "45MW - 18:00", aviso: null },
      { nome: "Turbina Kaplan #2", local: "Casa de Força", status: "online" as const, detalhe: "44MW - 18:00", aviso: null },
      { nome: "Turbina Kaplan #3", local: "Casa de Força", status: "online" as const, detalhe: "46MW - 18:00", aviso: null },
      { nome: "Gerador #1", local: "Sala Geradores", status: "online" as const, detalhe: "50MVA - 18:00", aviso: null },
      { nome: "Gerador #2", local: "Sala Geradores", status: "aviso" as const, detalhe: "Temperatura - 17:50", aviso: "Resfriamento" },
      { nome: "Comporta #1", local: "Barragem", status: "online" as const, detalhe: "Aberta 30% - 18:00", aviso: null },
      { nome: "Comporta #2", local: "Barragem", status: "online" as const, detalhe: "Aberta 45% - 18:00", aviso: null }
    ]
  },
  
  // Tech Solution 4 (Filial Sul)
  "tech-solution-4": {
    nome: "Tech Solution LDA - Filial Sul",
    estatisticas: { online: 28, aviso: 4, offline: 2 },
    equipamentos: [
      { nome: "Servidor Principal", local: "Datacenter Sul", status: "online" as const, detalhe: "OK - 15:00", aviso: null },
      { nome: "Firewall", local: "Perímetro", status: "online" as const, detalhe: "Ativo - 15:00", aviso: null },
      { nome: "Câmera Entrada", local: "Portão", status: "online" as const, detalhe: "Operacional - 15:00", aviso: null },
      { nome: "Câmera Estoque", local: "Depósito", status: "aviso" as const, detalhe: "Baixa resolução - 14:55", aviso: "Manutenção" },
      { nome: "Switch", local: "Sala Servidores", status: "offline" as const, detalhe: "Falha - 13:00", aviso: null }
    ]
  },
  
  // AgroMonitor 4 (Centro de Pesquisa)
  "agromonitor-4": {
    nome: "AgroMonitor - Centro de Pesquisa",
    estatisticas: { online: 42, aviso: 7, offline: 0 },
    equipamentos: [
      { nome: "Estação Avançada", local: "Laboratório", status: "online" as const, detalhe: "Coletando - 16:30", aviso: null },
      { nome: "Sensor Luminosidade", local: "Estufa", status: "online" as const, detalhe: "4500 lux - 16:30", aviso: null },
      { nome: "Sensor Umidade", local: "Câmara", status: "online" as const, detalhe: "85% - 16:30", aviso: null },
      { nome: "Sensor CO2", local: "Laboratório", status: "aviso" as const, detalhe: "Alto - 16:25", aviso: "Abrir janelas" },
      { nome: "Datalogger", local: "Sala Controle", status: "online" as const, detalhe: "Registrando - 16:30", aviso: null }
    ]
  },
  
  // EnergyFlow 4 (Usina Solar)
  "energyflow-4": {
    nome: "EnergyFlow - Usina Solar",
    estatisticas: { online: 567, aviso: 34, offline: 12 },
    equipamentos: [
      { nome: "Inversor Central", local: "Sala Inversores", status: "online" as const, detalhe: "250kW - 17:30", aviso: null },
      { nome: "Painéis String A", local: "Campo 1", status: "online" as const, detalhe: "98% eficiência - 17:30", aviso: null },
      { nome: "Painéis String B", local: "Campo 2", status: "online" as const, detalhe: "97% eficiência - 17:30", aviso: null },
      { nome: "Painéis String C", local: "Campo 3", status: "online" as const, detalhe: "95% eficiência - 17:30", aviso: null },
      { nome: "Painéis String D", local: "Campo 4", status: "aviso" as const, detalhe: "85% eficiência - 17:25", aviso: "Limpeza necessária" },
      { nome: "Rastreador Solar", local: "Campo 1", status: "online" as const, detalhe: "Seguindo - 17:30", aviso: null },
      { nome: "Rastreador Solar", local: "Campo 2", status: "online" as const, detalhe: "Seguindo - 17:30", aviso: null },
      { nome: "Rastreador Solar", local: "Campo 3", status: "offline" as const, detalhe: "Falha motor - 08:00", aviso: null }
    ]
  }
};

export default function DetalheEmpresaPage() {
  const params = useParams();
  const empresaId = params.id as string;
  
  // Buscar dados da empresa pelo ID
  const dados = dadosPorEmpresa[empresaId as keyof typeof dadosPorEmpresa];

  // Se não encontrar a empresa
  if (!dados) {
    return (
      <Sidebar3>
        <Container titulo="Empresa não encontrada" notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
          <div className="flex flex-col items-center justify-center h-64 gap-4">
            <div className="text-white text-xl">Empresa não encontrada</div>
            <div className="text-gray-400">ID: {empresaId}</div>
          </div>
        </Container>
      </Sidebar3>
    );
  }

  return (
    <Sidebar3>
      <Container titulo={dados.nome} notificacao={<Bell size={20} />} usuario="Sábado 28/02/2026">
        <div className="space-y-4 flex gap-10">
  
            <div className="flex flex-col gap-4 w-200">
                <Link 
            href="/operacional/gerir_alerta"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
            >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span>Voltar</span>
            </Link>
          <div className="w-200 ">
             <PesquisarEquipamento placeholder="pesquisar equipamento..." />
          </div>
         
          <div className="w-200 ">
             <EstatisticasEquipamentos 
            online={dados.estatisticas.online}
            aviso={dados.estatisticas.aviso}
            offline={dados.estatisticas.offline}
          />
          </div>

          <div className="w-200">
            <ListaEquipamentos equipamentos={dados.equipamentos} />
          </div>
            </div>

            <div className="w-125 h-full flex flex-col items-end">
                 <BotoesAcao 
                    onAdicionarEquipamento={() => console.log('Adicionar equipamento')}
                    onReativarMonitoramento={() => console.log('Reativar monitoramento')}
                />
            </div>
        </div>
      </Container>
    </Sidebar3>
  );
}