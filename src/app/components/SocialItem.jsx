const SocialItem = ({ children, href }) => {
  return (
    <a
      className='rounded-full border border-white/10 flex justify-center items-center gap-x-2 py-2 px-4 bg-white/5 hover:scale-105 hover:bg-white/10 transition-transform duration-300 ease-in-out'
      href={href}
      target='_blank'
      rel='noopener noreferrer'>
      {children}
    </a>
  )
}

export default SocialItem
