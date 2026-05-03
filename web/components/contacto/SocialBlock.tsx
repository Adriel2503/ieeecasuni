interface SocialEntry {
  name: string
  handle: string
  url: string
  description: string
  icon: React.ReactNode
}

const socials: SocialEntry[] = [
  {
    name: 'Instagram',
    handle: '@ieee.cas.uni',
    url: 'https://www.instagram.com/ieee.cas.uni/',
    description: 'Fotos de eventos, behind the scenes y stories del capítulo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
           strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'IEEE CAS UNI',
    url: 'https://pe.linkedin.com/company/ieeecasuni',
    description: 'Networking profesional, ofertas laborales y publicaciones técnicas.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: '/ieeecasuni',
    url: 'https://www.facebook.com/ieeecasuni/',
    description: 'Comunicaciones oficiales, eventos públicos y comunidad UNI.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: 'YouTube',
    handle: '@IEEECASUNI',
    url: 'https://www.youtube.com/@IEEECASUNI/videos',
    description: 'Grabaciones de webinars, charlas técnicas y resúmenes de eventos.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function SocialBlock() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-4">
        Síguenos
      </p>
      <ul className="space-y-3">
        {socials.map((s) => (
          <li key={s.name}>
            <a
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                group flex items-start gap-3 p-3 -m-3 rounded-md
                hover:bg-primary-50 transition-colors
              "
            >
              <span className="
                inline-flex items-center justify-center w-9 h-9 rounded-sm shrink-0
                bg-gray-100 text-gray-600
                group-hover:bg-primary-400 group-hover:text-white
                transition-colors
              ">
                {s.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-sm font-bold text-gray-900 group-hover:text-primary-400 transition-colors">
                    {s.name}
                  </span>
                  <span className="text-[11px] text-gray-500 font-mono truncate">
                    {s.handle}
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">
                  {s.description}
                </p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
