import React, { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import { units } from 'data/units.js'

var virusIcon = L.icon({
  iconUrl: require('assets/icons/bacteria.png'),
  // shadowUrl: require('assets/icons/bacteria.png'),

  iconSize: [30, 30], // size of the icon
  // shadowSize: [20, 20], // size of the shadow
  // iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -10] // point from which the popup should open relative to the iconAnchor
})

const Markers = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)

  return units.map(unit => {
    return (
      <Marker key={unit.id} icon={virusIcon} position={[unit.lat, unit.lng]}>
        <Popup icon={virusIcon} onClose={() => setClicked(false)}>
          <a
            onClick={() => {
              setClicked(true)
              onClick(unit)
            }}
          >
            <br />

            {unit.city}
            {' i '}
            {unit.region}
          </a>
          <br />
          <br />
          {'Confirmed cases: '}
          {unit.confirmed}
          <br />
          {'Suspect cases: '}
          {unit.suspect}
          {/* {clicked == true ? <br /> 'Mer info poppar upp här nere' : null} */}
        </Popup>
      </Marker>
    )
  })
}

export default Markers
