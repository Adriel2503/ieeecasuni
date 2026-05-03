// Solo permite http(s) con host no vacío. Bloquea javascript:, data:, file:, vbscript:.
export function isSafeHttpUrl(url: string | undefined | null): boolean {
  if (!url) return false
  try {
    const u = new URL(url)
    return (u.protocol === 'http:' || u.protocol === 'https:') && u.hostname.length > 0
  } catch {
    return false
  }
}
