import { Suspense }         from 'react'
import { PageHeader }       from '@/components/ui/PageHeader'
import { ContactForm }      from '@/components/contacto/ContactForm'
import { ContactChannels }  from '@/components/contacto/ContactChannels'
import { LocationCard }     from '@/components/contacto/LocationCard'
import { SocialBlock }      from '@/components/contacto/SocialBlock'
import { FAQAccordion }     from '@/components/contacto/FAQAccordion'

export const metadata = {
  title: 'Contacto · IEEE CAS UNI',
  description:
    'Escríbenos para unirte al capítulo, proponer una colaboración o resolver dudas. Respondemos en 1-2 días hábiles.',
}

export default function ContactoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Centro de comunicaciones"
        title="Hablemos."
        description="Para unirte al capítulo, proponer una colaboración o resolver cualquier duda. Respondemos en 1-2 días hábiles."
      />

      <section className="max-w-7xl mx-auto px-6 py-12" id="contact-form">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Form — 3/5 cols */}
          <div className="lg:col-span-3">
            <Suspense fallback={
              <div className="h-[600px] bg-white border border-gray-200 rounded-lg animate-pulse" />
            }>
              <ContactForm />
            </Suspense>
          </div>

          {/* Sidebar — 2/5 cols */}
          <aside className="lg:col-span-2 space-y-5">
            <ContactChannels />
            <LocationCard />
            <SocialBlock />
          </aside>
        </div>
      </section>

      <FAQAccordion />
    </>
  )
}
