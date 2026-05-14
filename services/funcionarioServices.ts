import { api } from "@/lib/api"

export const funcionarioService = {
  listar: (params?: any) =>
    api.get("/funcionarios", { params }),

  buscar: (id: string) =>
    api.get(`/funcionarios/${id}`),

  criar: (data: any) =>
    api.post("/funcionarios", data),

  atualizar: (id: string, data: any) =>
    api.patch(`/funcionarios/${id}`, data),

  desativar: (id: string) =>
    api.delete(`/funcionarios/${id}`),
}