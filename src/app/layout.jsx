import { Onest } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ButtonUp from './components/ButtonUp'
import BackgroundMain from './components/BackgroundMain'

const onest = Onest({ subsets: ['latin'] })

export const metadata = {
  title: 'Adrian Urtiz - Desarrollador y Programador Web',
  description:
    'Conoce más sobre mi y mi trabajo como desarrollador web. Soy Adrian Urtiz, desarrollador web junior con experiencia en tecnologías como React, Next.js, Tailwind CSS, Node.js y Express. ',
  icons: {
    icon: [
      {
        url: '/images/icon.svg',
        href: '/images/icon.svg',
      },
    ],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={onest.className}>
        <BackgroundMain />
        <Header />
        {children}
        <ButtonUp />
        <Footer />
      </body>
    </html>
  )
}
