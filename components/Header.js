
import Image from "next/image"
import { GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer">
        <Image src="https://links.papareact.com/qd3" 
        alt="airbnb"
        style={{objectFit: "contain", objectPosition: "left"}}
        fill
        
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input className=" flex-grow bg-transparent outline-none pl-5 text-sm text-gray-600 placeholder-gray-400 " type="text" placeholder="Start your search" />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex space-x-3 items-center justify-end text-gray-500">
        <p className="">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 items-center border-2 p-2 rounded-full ">
         <Bars3Icon className="h-6" />
         <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  )
}

export default Header