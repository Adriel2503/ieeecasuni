/**
 * Joins class names, filtering out falsy values.
 * Lightweight alternative to clsx for simple use cases.
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}

/**
 * Formats a date string to the local Spanish (Peru) format.
 * e.g. "2026-05-15" → "15 de mayo de 2026"
 */
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('es-PE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
