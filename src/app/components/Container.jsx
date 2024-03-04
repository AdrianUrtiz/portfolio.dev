const Container = ({ children, className, id }) => {
  return (
    <section id={id} className={`w-full lg:w-[740px] mx-auto ${className}`}>
      {children}
    </section>
  )
}

export default Container
