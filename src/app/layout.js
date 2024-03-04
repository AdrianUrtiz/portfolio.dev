import { Onest } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const onest = Onest({ subsets: ['latin'] })

export const metadata = {
  title: 'Adrian Urtiz - Desarrollador y Programador Web',
  description:
    'Conoce más sobre mi y mi trabajo como desarrollador web. Soy Adrian Urtiz, desarrollador web junior con experiencia en tecnologías como React, Next.js, Tailwind CSS, Node.js y Express. ',
}

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body className={onest.className}>
        <div class='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
