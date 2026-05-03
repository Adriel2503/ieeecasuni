export function EquipoCTA() {
  return (
    <section className="py-20 bg-primary-400">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-100 rounded-sm mb-6 uppercase tracking-widest">
          ¿Quieres unirte al staff?
        </span>

        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          Postula al equipo 2027
        </h2>

        <p className="text-primary-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Cada año en octubre abrimos postulaciones para los comités y la junta
          directiva. Si quieres construir, organizar y conectar — escríbenos.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:ieee.cas@uni.edu.pe?subject=Postulación%20al%20staff%202027"
            className="px-8 py-4 bg-white text-primary-400 font-bold text-[15px] rounded-[4px] hover:bg-primary-50 transition-colors"
          >
            Escríbenos →
          </a>
          <a
            href="/contacto"
            className="px-8 py-4 border-2 border-white text-white font-bold text-[15px] rounded-[4px] hover:bg-primary-500 transition-colors"
          >
            Conoce más
          </a>
        </div>
      </div>
    </section>
  )
}
