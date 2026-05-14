export interface RelatorioAlertasDTO {
    total: number
    naoLidos: number
    taxaLeitura: number
    porNivel: { nivel: string; total: number }[]
    topEquipamentos: {
      equipamento: {
        id: string
        nome: string
        localizacao: string
      }
      totalAlertas: number
    }[]
  }

  export interface RelatorioEquipamentosDTO {
    total: number
    porStatus: { status: string; total: number }[]
    comMaisAlertas: any[]
  }  