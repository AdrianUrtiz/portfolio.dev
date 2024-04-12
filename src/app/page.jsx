import Image from 'next/image'
import Badge from './components/Badge'
import BadgeMovil from './components/BadgeMovil'
import LinkedInIcon from './icons/LinkedIn'
import GitHubIcon from './icons/GitHub'
import SocialItem from './components/SocialItem'
import MailIcon from './icons/Mail'
import Forklift from './icons/Forklift'
import User from './icons/User'
import CodeIcon from './icons/Code'
import Container from './components/Container'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'

const Home = () => {
  return (
    <main className='px-4'>
      <Container className='pt-20 md:pt-44 pb-24'>
        <div class='flex gap-4 mb-4 md:hidden'>
          <Image
            class='rounded-full shadow-lg size-16'
            src='/adrian.jpg'
            alt='adrian photo'
            width={50}
            height={50}
          />
          <a
            href='https://www.linkedin.com/in/adrian-urtiz-955aa0266/'
            target='_blank'
            rel='noopener'
            class='flex items-center transition md:justify-center md:hover:scale-105'>
            <BadgeMovil>Disponible para trabajar</BadgeMovil>
          </a>
        </div>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-semibold flex gap-x-4 pb-6'>
          Hey, soy Adrian
          <a
            href='https://www.linkedin.com/in/adrian-urtiz-955aa0266/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center items-center'>
            <Badge>Disponible para trabajar</Badge>
          </a>
        </h1>
        <h2 className='text-lg md:text-xl opacity-80 text-wrap max-w-[750px]'>
          Junior Web Developer. De Morelia, Michoacán, México 🇲🇽 . Estudiante de
          último año en Ingeniería en Sistemas Computacionales en el Instituto
          Tecnológico de Morelia con especialidad en Ingeniería de Software.
        </h2>

        <nav className='flex flex-wrap gap-4 mt-6'>
          <SocialItem
            href={'https://www.linkedin.com/in/adrian-urtiz-955aa0266/'}>
            <LinkedInIcon className='size-4 lg:size-6' />
            LinkedIn
          </SocialItem>
          <SocialItem href={'https://github.com/AdrianUrtiz'}>
            <GitHubIcon className='size-4 lg:size-6' />
            GitHub
          </SocialItem>
          <SocialItem href={'mailto: aeurtiz17@gmail.com'}>
            <MailIcon className='size-4 lg:size-6' />
            aeurtiz17@gmail.com
          </SocialItem>
        </nav>
      </Container>

      <Container id='projects'>
        <h2 className='text-2xl font-medium mb-8 pt-8 flex gap-x-2 items-center'>
          <Forklift className='size-6' /> Proyectos
        </h2>
        <Projects />
      </Container>

      <Container id='experience'>
        <h2 className='text-2xl font-medium mb-8 pt-8 flex gap-x-2 items-center'>
          <CodeIcon className='size-6' /> Experiencia Laboral
        </h2>
        <Experience />
      </Container>

      <Container id='about'>
        <h2 className='text-2xl font-medium mb-8 pt-8 flex gap-x-2 items-center'>
          <User className='size-6' /> Sobre mí
        </h2>
        <About />
      </Container>
    </main>
  )
}

export default Home
