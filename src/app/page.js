import Badge from './components/Badge'
import LinkedInIcon from './icons/LinkedIn'
import GitHubIcon from './icons/GitHub'
import SocialItem from './components/SocialItem'
import MailIcon from './icons/Mail'
import Experience from './components/Experience'
import Container from './components/Container'
import Forklift from './icons/Forklift'

const Home = () => {
  return (
    <main>
      <Container id='about' className='pt-44 pb-24'>
        <h1 className='text-5xl font-semibold flex gap-x-6 pb-6'>
          Hey, soy Adrian
          <a
            href='https://www.linkedin.com/in/adrian-urtiz-955aa0266/'
            target='_blank'
            rel='noopener noreferrer'
            className='flex justify-center items-center'>
            <Badge>Disponible para trabajar</Badge>
          </a>
        </h1>
        <h2 className='text-xl opacity-80 text-wrap'>
          Junior Web Developer. De Morelia, Michoacán, México 🇲🇽 . Estudiante de
          último año en Ingeniería en Sistemas Computacionales en el Instituto
          Tecnológico de Morelia.
        </h2>

        <nav className='flex gap-x-4 mt-6'>
          <SocialItem
            href={'https://www.linkedin.com/in/adrian-urtiz-955aa0266/'}>
            <LinkedInIcon className='size-6' />
            LinkedIn
          </SocialItem>
          <SocialItem href={'https://github.com/AdrianUrtiz'}>
            <GitHubIcon className='size-6' />
            GitHub
          </SocialItem>
          <SocialItem href={'mailto: aeurtiz17@gmail.com'}>
            <MailIcon className='size-6' />
            aeurtiz17@gmail.com
          </SocialItem>
        </nav>
      </Container>

      <Container id='experience'>
        <h2 className='text-2xl font-medium mb-8 flex gap-x-2 items-center'>
          <Forklift className='size-6' /> Experiencia
        </h2>
        <Experience />
      </Container>
    </main>
  )
}

export default Home
