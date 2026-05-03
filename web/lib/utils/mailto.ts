import type { ContactFormState } from './validation'
import type { Intencion } from '@/lib/data/contacto'
import { contacto, intenciones } from '@/lib/data/contacto'

/**
 * Builds the mailto: URL the contact form opens on submit. Pure function: no
 * DOM access, no side effects — keeps useContactForm focused on state.
 */
export function buildContactMailto(
  form: ContactFormState,
  intencion: Intencion
): string {
  const intencionInfo = intenciones.find((i) => i.value === intencion)!
  const targetEmail =
    intencion === 'postular'
      ? contacto.email_postulaciones
      : contacto.email_principal

  const asunto = form.asunto.trim() || intencionInfo.asunto_default
  const body = [
    `Nombre: ${form.nombre}`,
    `Email: ${form.email}`,
    `Tipo: ${intencionInfo.label}`,
    '',
    'Mensaje:',
    form.mensaje,
  ].join('\n')

  return `mailto:${targetEmail}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(body)}`
}
