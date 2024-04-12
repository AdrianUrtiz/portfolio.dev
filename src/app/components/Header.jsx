import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='hidden md:flex justify-between items-center w-full p-8 xl:w-[1120px] mx-auto'>
      <Link href='/'>
        <Image
          className='rounded-full'
          src='/adrian.jpg'
          alt='adrian photo'
          width={50}
          height={50}
        />
      </Link>

      <nav className='flex flex-row gap-x-10 opacity-80'>
        <Link href='#top'>Inicio</Link>
        <Link href='#experience'>Experiencia</Link>
        <Link href='#projects'>Proyectos</Link>
        <Link href='#about'>Sobre mi</Link>
        <Link href='#contact'>Contacto</Link>
      </nav>
    </header>
  )
}

export default Header
