import { contacto } from '@/lib/data/contacto'

export function ContactChannels() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      {/* Email principal */}
      <div className="p-5 border-b border-gray-100">
        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-2">
          Email principal
        </p>
        <a
          href={`mailto:${contacto.email_principal}`}
          className="text-sm font-semibold text-gray-900 hover:text-primary-400 transition-colors break-all font-mono"
        >
          {contacto.email_principal}
        </a>
      </div>

      {/* Email postulaciones */}
      <div className="p-5 border-b border-gray-100 bg-primary-50">
        <p className="text-[10px] font-bold tracking-widest text-primary-400 uppercase mb-2">
          ★ Postulaciones al staff
        </p>
        <a
          href={`mailto:${contacto.email_postulaciones}`}
          className="text-sm font-semibold text-gray-900 hover:text-primary-400 transition-colors break-all font-mono"
        >
          {contacto.email_postulaciones}
        </a>
      </div>

      {/* Horarios */}
      <div className="p-5">
        <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">
          Horarios
        </p>
        <ul className="space-y-3">
          {contacto.horarios.map((h) => (
            <li key={h.dia} className="flex flex-col text-sm">
              <span className="font-semibold text-gray-900">{h.dia}</span>
              <span className="text-xs text-gray-500 font-mono">
                {h.hora}
              </span>
              <span className="text-[11px] text-gray-400 italic mt-0.5">
                {h.tipo}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
