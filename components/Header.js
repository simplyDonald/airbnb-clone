
import Image from "next/image"
import { GlobeAltIcon, Bars3Icon, UserCircleIcon, UsersIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState } from "react"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/router";


function Header({placeholder}) {
  // track search input for location
  const [searchInput, setSearchInput] = useState("");
  // track date range picker
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter()
  
  // set date range picker 
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }
  
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const search = () => {
    router.push({
      pathname: "/search",
      // pass in the query parameters needed for the search page link
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      <div 
        className="relative flex items-center h-10 cursor-pointer my-auto"
        onClick={() => router.push("/")}
        >
        <Image 
          src="https://links.papareact.com/qd3" 
          alt="airbnb"
          style={{objectFit: "contain", objectPosition: "left"}}
          fill
        
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} 
        className=" flex-grow bg-transparent outline-none pl-5 text-sm text-gray-600 placeholder-gray-400 " type="text" 
        placeholder={placeholder || "Start your search"} />

        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      <div className="flex space-x-3 items-center justify-end text-gray-500">
        <p className="hidden md:inline-flex cursor-pointer">
          Become a host
        </p>
        <GlobeAltIcon className="h-6 cursor-pointer" />
        <div className="flex space-x-2 items-center border-2 p-2 rounded-full ">
          <Bars3Icon className="h-6" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4 ">
            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
            <UsersIcon className="h-5" />
            <input 
              min={1}
              value={noOfGuests}
              onChange={(e)=> setNoOfGuests(e.target.value)}
              type="number" 
              className="w-12 pl-2 text-lg outline-none text-red-400" />
          </div>
          <div className="flex">
            <button
              onClick={()=> setSearchInput("")}
              className="flex-grow text-gray-500">
              Cancel
            </button>

            <button className="flex-grow text-red-400"
              onClick={search}   
            >
              Search
            </button>
            </div>
        </div>
      ) }

    </header>
  )
}

export default Header