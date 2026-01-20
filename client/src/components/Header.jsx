

function Header() {
  return (<>
    <header className="bg-orange-200 text-black p-4 flex justify-between items-center ">
  <img
    src="../../public/image-removebg-preview.png"
    className="rounded-full ml-10 h-25 w-45  text-white px-6 py-3
          cursor-pointer
          transition-all duration-300 ease-in-out
          hover:bg-red-500
          hover:-translate-y-1
          hover:shadow-lg"
    alt="logo"
  />

  <ul className="flex gap-10 text-xl font-semibold mr-160">
    <li
        
        className="
          bg-red-950 text-white px-6 py-3 rounded-2xl
          cursor-pointer
          transition-all duration-300 ease-in-out
          hover:bg-red-800
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        Home
        
      </li>
    
     <li
        
        className="
          bg-red-950 text-white px-6 py-3 rounded-2xl
          cursor-pointer
          transition-all duration-300 ease-in-out
          hover:bg-red-800
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        About
        
      </li> <li
        
        className="
          bg-red-950 text-white px-6 py-3 rounded-2xl
          cursor-pointer
          transition-all duration-300 ease-in-out
          hover:bg-red-800
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        Contact
        
      </li> <li
        
        className="
          bg-red-950 text-white px-6 py-3 rounded-2xl
          cursor-pointer
          transition-all duration-300 ease-in-out
          hover:bg-red-800
          hover:-translate-y-1
          hover:shadow-lg
        "
      >
        Cart
        
      </li>
      
    
  </ul>
</header>
    </>

  )
}

export default Header