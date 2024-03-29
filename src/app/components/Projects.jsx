import Image from 'next/image'

const PROJECTS = [
  {
    id: 1,
    title: 'SandarInmuebles',
    description:
      'Colaboración para la creación de una e-commerce para la venta de inmuebles, utilizando tecnologías como React, Firebase, Ant Design, entre otras.',
    link: 'https://sandar-inmuebles.web.app/',
    github: '#',
    image: '/sandar.png',
    tags: ['React', 'Firebase', 'Ant Design'],
  },
  {
    id: 2,
    title: 'BANESVIM Veracruz',
    description:
      'Desarrollo front-end de una página web para el gobierno de Veracruz, para mostrar información sobre los casos de violencia de género en el estado. Diseñando y desarrollando la interfaz de usuario, utilizando tecnologías como Javascript, HTML, CSS, MySQL, PHP, entre otras.',
    link: 'https://banesvim.ddns.net/banavim/',
    github: '#',
    image: '/banesvim.png',
    tags: ['Javascript', 'HTML', 'CSS', 'MySQL', 'PHP'],
  },
  {
    id: 3,
    title: 'SISOGEM',
    description:
      'Desarrollo de un sistema de gestión para organos de gobierno del estado de Michoacán, contacto directo con el cliente para la definición de requerimientos, participando activamente en el desarrollo de la interfaz de usuario y la lógica de negocio. Utilizando tecnologías como React, Node.js, Express, MongoDB, AWS S3, entre otras.',
    link: '#',
    github: '#',
    image: '/sisogem.png',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS S3'],
  },
  {
    id: 4,
    title: 'VIVEL Academia de Emmprendimiento',
    description:
      'Participación en el desarrollo de una plataforma de educación en línea, contacto directo con el cliente para la definición de requerimientos y desarrollo de la interfaz de usuario. Utilizando tecnologías como CodeIgniter, MySQL, HTML, CSS, entre otras.',
    link: '#',
    github: '#',
    image: '/vivel.png',
    tags: ['CodeIgniter', 'MySQL', 'HTML', 'CSS'],
  },
]

const Projects = () => {
  return (
    <>
      {PROJECTS.map((project) => (
        <article key={project.id}>
          <h3 className='text-lg font-semibold mt-4 mb-1 text-green-300 dark:text-green-700'>
            {project.title}
          </h3>
          <p className='text-base mb-4 text-pretty'>{project.description}</p>
          <ul>
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          <Image
            width={400}
            height={300}
            quality={70}
            className='rounded-lg shadow-xl shadow-slate-200/10'
            src={project.image}
            alt={`Captura de pantalla de ${project.title}`}
          />
        </article>
      ))}
    </>
  )
}

export default Projects
