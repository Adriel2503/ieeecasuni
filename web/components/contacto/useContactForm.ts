import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { intenciones, type Intencion } from '@/lib/data/contacto'
import {
  validateContactForm,
  type ContactFormState,
  type ContactFormErrors,
} from '@/lib/utils/validation'
import { buildContactMailto } from '@/lib/utils/mailto'

type FormField = keyof ContactFormErrors

const initialState: ContactFormState = {
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
  acepta: false,
}

export function useContactForm() {
  const searchParams = useSearchParams()
  const intentParam = searchParams.get('intent')

  const [intencion, setIntencion] = useState<Intencion>('consulta')
  const [form, setForm] = useState<ContactFormState>(initialState)
  const [errors, setErrors] = useState<ContactFormErrors>({})
  const [touched, setTouched] = useState<Set<FormField>>(new Set())
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [success, setSuccess] = useState(false)

  const intencionInfo = useMemo(
    () => intenciones.find((i) => i.value === intencion)!,
    [intencion]
  )

  useEffect(() => {
    if (!intentParam) return
    const match = intenciones.find((i) => i.value === intentParam)
    if (!match) return
    setIntencion(match.value)
    setForm((f) => ({ ...f, asunto: match.asunto_default }))
  }, [intentParam])

  const handleIntencionChange = (newInt: Intencion) => {
    setIntencion(newInt)
    const newInfo = intenciones.find((i) => i.value === newInt)!
    setForm((f) => {
      const wasDefault =
        f.asunto === '' ||
        intenciones.some((i) => i.asunto_default === f.asunto)
      return wasDefault ? { ...f, asunto: newInfo.asunto_default } : f
    })
  }

  const showError = (field: FormField): string | undefined =>
    touched.has(field) || submitAttempted ? errors[field] : undefined

  const markTouched = (field: FormField) => {
    setTouched((prev) => {
      if (prev.has(field)) return prev
      const next = new Set(prev)
      next.add(field)
      return next
    })
  }

  const handleChange = <K extends keyof ContactFormState>(
    field: K,
    value: ContactFormState[K]
  ) => {
    setForm((f) => ({ ...f, [field]: value }))
    if (field === 'acepta') markTouched('acepta')
  }

  const handleBlur = (field: FormField) => {
    markTouched(field)
    setErrors(validateContactForm(form))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitAttempted(true)
    const errs = validateContactForm(form)
    setErrors(errs)
    if (Object.keys(errs).length > 0) return

    window.location.href = buildContactMailto(form, intencion)
    setSuccess(true)
  }

  const reset = () => {
    setForm(initialState)
    setErrors({})
    setTouched(new Set())
    setSubmitAttempted(false)
    setIntencion('consulta')
    setSuccess(false)
  }

  return {
    form,
    intencion,
    intencionInfo,
    success,
    handleChange,
    handleBlur,
    handleIntencionChange,
    handleSubmit,
    reset,
    showError,
  }
}
