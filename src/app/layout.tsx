import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Clínica Equilíbrio - Cuidando da sua saúde mental',
  description:
    'Clínica especializada em psicologia com atendimento humanizado e equipe especializada. Psicoterapia individual, infantil, terapia de casal e grupos de apoio.',
  keywords:
    'psicologia, terapia, psicólogo, saúde mental, bem-estar, psicoterapia, clínica, equilíbrio',
  openGraph: {
    title: 'Clínica Equilíbrio',
    description: 'Cuidando da sua saúde mental com equilíbrio e empatia',
    type: 'website',
    locale: 'pt_BR',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
