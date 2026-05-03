export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export interface ContactFormState {
  nombre: string
  email: string
  asunto: string
  mensaje: string
  acepta: boolean
}

export interface ContactFormErrors {
  nombre?: string
  email?: string
  mensaje?: string
  acepta?: string
}

export function validateContactForm(state: ContactFormState): ContactFormErrors {
  const errs: ContactFormErrors = {}
  if (!state.nombre.trim()) errs.nombre = 'Tu nombre es requerido'
  if (!state.email.trim()) errs.email = 'Tu email es requerido'
  else if (!emailRegex.test(state.email)) errs.email = 'Formato de email inválido'
  if (!state.mensaje.trim()) errs.mensaje = 'Escribe un mensaje'
  else if (state.mensaje.trim().length < 20)
    errs.mensaje = 'Mínimo 20 caracteres (' + state.mensaje.trim().length + ')'
  if (!state.acepta) errs.acepta = 'Debes aceptar la política'
  return errs
}
