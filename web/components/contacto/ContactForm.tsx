'use client'
import { IntentSelector } from './IntentSelector'
import { SignalSuccess } from './SignalSuccess'
import { Button } from '@/components/ui/Button'
import { TextField } from '@/components/ui/TextField'
import { useContactForm } from './useContactForm'

export function ContactForm() {
  const {
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
  } = useContactForm()

  if (success) return <SignalSuccess onReset={reset} />

  const aceptaErr = showError('acepta')

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 bg-white border border-gray-200 rounded-lg p-6 lg:p-8"
    >
      <IntentSelector value={intencion} onChange={handleIntencionChange} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <TextField
          label="Nombre completo"
          name="nombre"
          required
          value={form.nombre}
          onChange={(v) => handleChange('nombre', v)}
          onBlur={() => handleBlur('nombre')}
          placeholder="Ana García"
          error={showError('nombre')}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(v) => handleChange('email', v)}
          onBlur={() => handleBlur('email')}
          placeholder="ana@uni.edu.pe"
          error={showError('email')}
        />
      </div>

      <TextField
        label="Asunto"
        name="asunto"
        value={form.asunto}
        onChange={(v) => handleChange('asunto', v)}
        placeholder={intencionInfo.asunto_default}
      />

      <TextField
        label="Mensaje"
        name="mensaje"
        required
        multiline
        rows={6}
        value={form.mensaje}
        onChange={(v) => handleChange('mensaje', v)}
        onBlur={() => handleBlur('mensaje')}
        placeholder={intencionInfo.placeholder}
        error={showError('mensaje')}
        hint={
          <span className="text-[10px] text-gray-400 tabular-nums">
            {form.mensaje.length} caracteres
          </span>
        }
      />

      <div>
        <label className="flex items-start gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={form.acepta}
            onChange={(e) => handleChange('acepta', e.target.checked)}
            className="mt-0.5 w-4 h-4 accent-primary-400 cursor-pointer"
          />
          <span className="text-xs text-gray-600 leading-relaxed">
            Acepto que IEEE CAS UNI utilice mis datos únicamente para responder
            esta consulta. No los compartiremos con terceros.
          </span>
        </label>
        {aceptaErr && (
          <p className="mt-1 ml-7 text-xs text-secondary-400">{aceptaErr}</p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-2 border-t border-gray-100">
        <Button type="submit" variant="primary" size="lg">
          Enviar mensaje →
        </Button>
        <p className="text-xs text-gray-500">
          Se abrirá tu cliente de correo con el mensaje pre-rellenado.
        </p>
      </div>
    </form>
  )
}
