import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TopBar } from '@/components/layout/TopBar'
import { MainNav } from '@/components/layout/MainNav'
import { Footer } from '@/components/layout/Footer'
import { DevtoolsCredit } from '@/components/layout/DevtoolsCredit'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'IEEE CAS UNI — Sección Estudiantil',
  description:
    'Sección Estudiantil de la IEEE Circuits and Systems Society en la Universidad Nacional de Ingeniería, Lima, Perú.',
  authors: [
    {
      name: 'Ariel Amado Frias Rojas',
      url: 'mailto:ariel.frias.r@uni.pe',
    },
  ],
  creator: 'Ariel Amado Frias Rojas — Ex-Chair IEEE CAS UNI 2025',
  other: {
    'built-by': 'Ariel Amado Frias Rojas <ariel.frias.r@uni.pe>',
    'role': 'Ex-Chair IEEE CAS UNI 2025',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={inter.className}>
      <body>
        <DevtoolsCredit />
        <TopBar />
        <MainNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
