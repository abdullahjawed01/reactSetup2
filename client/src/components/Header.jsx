import {NavLink} from "react-router-dom";


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

   <ul className="flex  mt-4 font-medium lg:flex lg:space-x-8 lg:mt-0 lg:gap-2 gap-2 lg:p-4 ">
                            <li>
                                <NavLink
                                to="/"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} rounded-2xl bg-red-950 border-b text-white border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-4`
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/specials"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} rounded-2xl bg-red-950 border-b text-white border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-4`
                                    }
                                >
                                    Special
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/contact"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} rounded-2xl bg-red-950 border-b text-white border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-4`
                                    }
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                to="/cart"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} rounded-2xl bg-red-950 text-white  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-4`
                                    }
                                >
                                    Cart
                                </NavLink>
                            </li>
                            
                        </ul>
</header>
    </>

  )
}

export default Header