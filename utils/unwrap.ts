// src/utils/unwrap.ts

export function unwrapPaginated(response: any) {
    return response?.data?.data?.data ?? []
  }
  
  export function unwrapMeta(response: any) {
    return response?.data?.data?.meta ?? {
      total: 0,
      page: 1,
      limit: 10,
      totalPages: 1
    }
  }