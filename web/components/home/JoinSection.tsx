export function JoinSection() {
  return (
    <section className="py-24 bg-primary-400">
      <div className="max-w-3xl mx-auto px-6 text-center">
        {/* Tag */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-400 bg-primary-100 rounded-sm mb-6 uppercase tracking-widest">
          Únete
        </span>

        {/* Headline */}
        <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
          ¿Estudias ingeniería en la UNI?
        </h2>

        {/* Body */}
        <p className="text-primary-100 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
          Accede a talleres, competencias, publicaciones IEEE y una red de
          ingenieros en circuitos y sistemas a nivel mundial.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-6">
          <a
            href="mailto:ieee.cas@uni.edu.pe"
            className="px-8 py-4 bg-white text-primary-400 font-bold text-[15px] rounded-[4px] hover:bg-primary-50 transition-colors"
          >
            Escríbenos para unirte
          </a>
          <a
            href="https://ieee.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-white text-white font-bold text-[15px] rounded-[4px] hover:bg-primary-500 transition-colors"
          >
            Membresía IEEE →
          </a>
        </div>

        {/* Fine print */}
        <p className="text-sm text-primary-300">
          Membresía estudiantil IEEE desde $32 USD/año · Acceso completo a IEEE Xplore
        </p>
      </div>
    </section>
  )
}
