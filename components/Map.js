import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';
// func to get the center of multiple lat and long points to be given to the map
import { getCenter } from 'geolib';


function Map({ searchResults }) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    zoom: 11                                               

  })

  // transform the search results object into the {latitude: 52.516272, longitude: 13.377722} object
  const coordinates = searchResults.map(result => ({
    longitude: result.long,
    latitude: result.lat
  }))
  return (
    <ReactMapGL
      mapStyle="mapbox://styles/simplydonald/clcjjzx7m003a15n081bs6xtr"
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      // make the map view change and scrollable
      onMove={evt => setViewport(evt.viewport)}                                                 
    >

    </ReactMapGL>
  )
}

export default Map