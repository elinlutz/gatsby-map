import React, { useState }from 'react'
import { Marker, Popup } from 'react-leaflet'

import { units } from 'data/units.js'


const Markers = ({ onClick }) => {
const [clicked, setClicked] = useState(false)

  return units.map(( unit ) => {
    return (
      <Marker key={unit.id} position={[unit.lat, unit.lng]}>
        <Popup onClose={() => setClicked(false)}>
          <a onClick={() => {
            setClicked(true)
            onClick(unit)
            }}>{ unit.name }</a>
            <br />
          { unit.city }
          {/* {clicked == true ? <br /> 'Mer info poppar upp här nere' : null} */}
        </Popup>
      </Marker>
    )
  })
}

export default Markers
