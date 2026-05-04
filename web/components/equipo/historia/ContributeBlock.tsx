import Link from 'next/link'

const MAILTO =
  'mailto:ieee.cas@uni.edu.pe?subject=Aporte%20al%20archivo%20de%20gestiones%20IEEE%20CAS%20UNI&body=Hola%2C%20fui%20parte%20de%20la%20gesti%C3%B3n%20___%20del%20cap%C3%ADtulo%20IEEE%20CAS%20UNI.%20Quiero%20aportar%20la%20siguiente%20informaci%C3%B3n%3A'

export function ContributeBlock() {
  return (
    <section className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white border border-gray-200 rounded-lg p-8 lg:p-12 max-w-3xl mx-auto text-center">
          <span className="text-[10px] font-bold tracking-widest text-primary-400 uppercase">
            Ayúdanos a completar el archivo
          </span>
          <h2 className="mt-3 text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight">
            ¿Eres parte de una gestión anterior?
          </h2>
          <p
            className="mt-4 text-base text-gray-600 leading-relaxed max-w-xl mx-auto"
            style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}
          >
            Si fuiste miembro de la junta directiva entre 2008 y 2022, escríbenos
            para registrar tu nombre, cargo y los hitos de tu año en este archivo
            público.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={MAILTO}
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-400 text-white text-sm font-bold rounded-md hover:bg-primary-500 transition-colors"
            >
              Escríbenos →
            </a>
            <Link
              href="/equipo"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-700 text-sm font-bold rounded-md ring-1 ring-gray-200 hover:bg-gray-50 transition-colors"
            >
              ← Volver al equipo actual
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
