

function Header() {
  return (<>
    <header className="bg-orange-200 text-black p-4 flex justify-between items-center">
      <img src="../../public/image-removebg-preview.png" className="rounded-full ml-10 h-25 w-45 " alt="" srcset="" />
      <ul className="flex space-x-4 text-xl mr-50 gap-10 font-semibold ">
        <li className="bg-red-950 p-5 text-white rounded-2xl">Home</li>
        <li className="bg-red-950 p-5 text-white rounded-2xl">About</li>
        <li className="bg-red-950 p-5 text-white rounded-2xl">Contact</li>
        <li className="bg-red-950 p-5 text-white rounded-2xl">Cart</li>
      </ul>
      <hr />
    </header>
    <hr />
    </>

  )
}

export default Header