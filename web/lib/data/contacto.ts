export type Intencion = 'consulta' | 'postular' | 'colaboracion' | 'prensa' | 'otro'

export interface IntencionInfo {
  value: Intencion
  label: string
  asunto_default: string
  placeholder: string
}

export const intenciones: IntencionInfo[] = [
  {
    value: 'consulta',
    label: 'Consulta general',
    asunto_default: 'Consulta sobre IEEE CAS UNI',
    placeholder: '¿Tienes una pregunta sobre el capítulo, eventos o membresía?',
  },
  {
    value: 'postular',
    label: 'Postular al staff',
    asunto_default: 'Postulación al staff IEEE CAS UNI',
    placeholder:
      'Cuéntanos por qué quieres unirte al equipo, en qué comité te ves y qué experiencia traes...',
  },
  {
    value: 'colaboracion',
    label: 'Colaboración',
    asunto_default: 'Propuesta de colaboración',
    placeholder:
      'Describe la propuesta — empresa, proyecto conjunto, sponsor de evento, charla técnica...',
  },
  {
    value: 'prensa',
    label: 'Prensa / Medios',
    asunto_default: 'Solicitud de prensa',
    placeholder:
      'Solicitud de entrevista, declaración o cobertura. Indica medio, fecha y formato.',
  },
  {
    value: 'otro',
    label: 'Otro',
    asunto_default: 'Mensaje a IEEE CAS UNI',
    placeholder: '¿De qué se trata? Cuéntanos.',
  },
]

export const contacto = {
  email_principal: 'ieee.cas@uni.edu.pe',
  email_postulaciones: 'staff.ieee.cas@uni.edu.pe',
  ubicacion: {
    institucion: 'Universidad Nacional de Ingeniería',
    facultad: 'Facultad de Ingeniería Eléctrica y Electrónica',
    direccion: 'Av. Túpac Amaru 210, Rímac · Lima 25',
    referencia: 'Pabellón E, oficina del capítulo IEEE CAS',
    maps_url:
      'https://www.google.com/maps/place/Universidad+Nacional+de+Ingenieria',
  },
  horarios: [
    { dia: 'Lunes a Viernes', hora: '14:00 – 18:00 h', tipo: 'Atención en oficina' },
    { dia: 'Reuniones técnicas', hora: 'Martes 18:00 h', tipo: 'Pabellón E' },
    { dia: 'Talleres regulares', hora: 'Sábados 10:00 h', tipo: 'Lab. E-205' },
  ],
}

export interface FAQ {
  pregunta: string
  respuesta: string
}

export const faqs: FAQ[] = [
  {
    pregunta: '¿Necesito ser estudiante de Eléctrica o Electrónica para unirme?',
    respuesta:
      'No. Aunque la mayoría somos de FIEE, recibimos estudiantes de Sistemas, Mecatrónica, Industrial y otras carreras de la UNI. Lo importante es el interés por circuitos, sistemas o ingeniería técnica en general.',
  },
  {
    pregunta: '¿Cuánto cuesta ser miembro de IEEE?',
    respuesta:
      'La membresía estudiantil internacional cuesta alrededor de USD 32 al año e incluye acceso completo a IEEE Xplore, descuentos en conferencias y el carnet IEEE. Asistir a nuestros eventos como público no requiere membresía.',
  },
  {
    pregunta: '¿Puedo asistir a los talleres sin ser miembro IEEE?',
    respuesta:
      'Sí. La mayoría de nuestros talleres son abiertos a toda la UNI. Algunos eventos especiales (competencias internacionales, conferencias) sí requieren membresía activa.',
  },
  {
    pregunta: '¿Cómo postulo al staff del capítulo?',
    respuesta:
      'Cada año en octubre abrimos postulaciones para los comités y la junta directiva del año siguiente. Mantén un ojo en nuestras redes y escríbenos a staff.ieee.cas@uni.edu.pe.',
  },
  {
    pregunta: '¿Organizan eventos remotos o solo presenciales?',
    respuesta:
      'Ambos. Webinars y charlas con speakers externos suelen ser online o híbridos. Workshops prácticos, hackathones y reuniones técnicas son presenciales en la UNI.',
  },
  {
    pregunta: '¿Tienen alianzas con empresas para prácticas o trabajo?',
    respuesta:
      'Sí. Difundimos ofertas laborales y de prácticas relacionadas con circuitos, sistemas embebidos, hardware y software técnico. Síguenos en LinkedIn para no perderlas.',
  },
]
