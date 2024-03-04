import ExperienceItem from './ExperienceItem'

const EXPERIENCE = [
  {
    date: 'Noviembre 2023 - Presente',
    title: 'SandarInmuebles',
    description:
      'Colaboración para la creación de una e-commerce para la venta de inmuebles, utilizando tecnologías como React, Firebase, Ant Design, entre otras.',
    link: 'https://sandar-inmuebles.web.app/',
  },
  {
    date: 'Diciembre 2023 - Enero 2024',
    title: 'BANESVIM Veracruz',
    description:
      'Desarrollo front-end de una página web para el gobierno de Veracruz, para mostrar información sobre los casos de violencia de género en el estado. Diseñando y desarrollando la interfaz de usuario, utilizando tecnologías como Javascript, HTML, CSS, MySQL, PHP, entre otras.',
    link: 'https://banesvim.ddns.net/banavim/',
  },

  {
    date: 'Agosto 2023 - Diciembre 2023',
    title: 'SISOGEM',
    description:
      'Desarrollo de un sistema de gestión para organos de gobierno del estado de Michoacán, contacto directo con el cliente para la definición de requerimientos, participando activamente en el desarrollo de la interfaz de usuario y la lógica de negocio. Utilizando tecnologías como React, Node.js, Express, MongoDB, AWS S3, entre otras.',
  },
  {
    date: 'Enero 2023 - Junio 2023',
    title: 'VIVEL Academia de Emmprendimiento',
    description:
      'Participación en el desarrollo de una plataforma de educación en línea, contacto directo con el cliente para la definición de requerimientos y desarrollo de la interfaz de usuario. Utilizando tecnologías como CodeIgniter, MySQL, HTML, CSS, entre otras.',
  },
]

const Experience = () => {
  return (
    <ol class='relative border-s border-gray-200 ml-3 dark:border-gray-700'>
      {EXPERIENCE.map((experience, index) => (
        <li key={index} class='mb-10 ms-4'>
          <ExperienceItem {...experience} />
        </li>
      ))}
    </ol>
  )
}

export default Experience
