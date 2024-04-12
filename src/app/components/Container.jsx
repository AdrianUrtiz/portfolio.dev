const Container = ({ children, className, id }) => {
  return (
    <section id={id} className={`w-full lg:w-[850px] mx-auto ${className}`}>
      {children}
    </section>
  )
}

export default Container
