export interface FilterConfig<T> {
  searchFields?: (keyof T)[]
  query?: string
  predicates?: ((item: T) => boolean)[]
}

export function filterCollection<T>(items: T[], cfg: FilterConfig<T>): T[] {
  let result = items
  cfg.predicates?.forEach((p) => {
    result = result.filter(p)
  })
  if (cfg.query?.trim() && cfg.searchFields?.length) {
    const q = cfg.query.toLowerCase().trim()
    result = result.filter((item) =>
      cfg.searchFields!.some((f) => {
        const v = item[f]
        return typeof v === 'string' && v.toLowerCase().includes(q)
      })
    )
  }
  return result
}
