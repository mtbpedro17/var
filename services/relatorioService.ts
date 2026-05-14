import { api } from "@/lib/api"

export const relatorioService = {
  alertas: () => api.get("/relatorios/alertas"),
  equipamentos: () => api.get("/relatorios/equipamentos"),
  financeiro: () => api.get("/relatorios/financeiro"),
  licencas: () => api.get("/relatorios/licencas"),
}