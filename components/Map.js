import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
// func to get the center of multiple lat and long points to be given to the map
import { getCenter } from 'geolib';
import Image from 'next/image';
import {StarIcon } from '@heroicons/react/24/solid'


function Map({ searchResults }) {
    // state to keep track of the selected location
  const [selectedLocation, setSelectedLocation] = useState({});

  // transform the search results object into the geolib required array of lat,long object
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }));
  // get the center of the coordinates
  const center = getCenter(coordinates)
  
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11                                               
    
  })



  return (
    <ReactMapGL mapStyle="mapbox://styles/simplydonald/clcjjzx7m003a15n081bs6xtr"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      // make the map view change and scrollable
      onMove={evt => setViewport(evt.viewport)}                                                 
    >
      {searchResults.map(result => (
        <div key={result.img}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
            anchor="bottom"
            
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className='cursor-pointer font-bold text-sm text-black bg-slate-400  rounded-full px-2 py-1 hover:animate-bounce hover:shadow-md hover:bg-slate-300 hover:text-black'
              >
                {/* grab number from string using regex */}
              {`$${result.price.match(/\d+/g)} CAD`}
            </p>

          </Marker>
          {/* the popup that should show if we click on a marker */}
          {selectedLocation.long === result.long ? 
            (
              <Popup
                onClose={() => setSelectedLocation({})}
                closeOnClick={false}
                latitude={result.lat}
                longitude={result.long}
              >
                <div className="w-40 h-40">
                  <Image src={result.img} alt={result.title} fill className='rounded-md'  />
                  <div className="text-xs text-white font-bold absolute bottom-[20px] ml-10 p-5 bg-red-500 whitespace-nowrap hover:opacity-20 transition duration-200 ease-out hover:scale-90 rounded-md">
                    <h3 className=' font-extrabold'>{result.title}</h3>
                    <div className='flex justify-between font-extralight'>
                      <p className=' font-bold'>{result.price}</p>
                      <p className='flex items-center'><StarIcon className=' h-3 text-white'/>{result.star}</p>
                    </div>

                  </div>
                    
                </div>
                
              </Popup>
            ) : (false) }
          
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map