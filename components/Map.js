import React, { useState } from 'react'
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
// func to get the center of multiple lat and long points to be given to the map
import { getCenter } from 'geolib';


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
              className='cursor-pointer text-2xl animate-bounce'
              >
              📌
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
                {result.title}
              </Popup>
            ) : (false) }
          
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map