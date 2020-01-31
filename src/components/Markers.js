import React, { useState }from 'react'

import { Marker, Popup } from 'react-leaflet'
import { Link, Text } from 'gatsby'

import { units } from 'data/units.js'


const Markers = ({ onClick }) => {
const [clickedMarker, setClickedMarker] = useState(false)

  console.log( units )
  return units.map(( unit ) => {
    return (
      <Marker key={unit.id} position={[unit.lat, unit.lng]}>
        <Popup onClose={() => setClickedMarker(false)}>
          <a onClick={() => {
            setClickedMarker(true)
            onClick(unit)
            }}>{ unit.name }</a><br />
          { unit.city }
          <br />
          {clickedMarker == true ? 'Mer info poppar upp här nere' : null}
        </Popup>
      </Marker>
    )
  })
}

export default Markers
