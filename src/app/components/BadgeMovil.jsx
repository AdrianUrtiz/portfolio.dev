const BadgeMovil = ({ children }) => {
  return (
    <div class='flex items-center '>
      <span class='relative inline-flex overflow-hidden rounded-full p-[1px]'>
        <span class='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]'></span>
        <div class='inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap'>
          {children}
        </div>
      </span>
    </div>
  )
}

export default BadgeMovil
