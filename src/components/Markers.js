import React, { useState } from 'react'
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

import { units } from 'data/units.js'

var confirmedIcon = L.icon.extend({
  iconUrl: require('assets/icons/red.png'),
  // shadowUrl: require('assets/icons/bacteria.png'),

  iconSize: [20, 20], // size of the icon
  // shadowSize: [20, 20], // size of the shadow
  // iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -10] // point from which the popup should open relative to the iconAnchor
})

var suspectIcon = L.icon.extend({
  iconUrl: require('assets/icons/orange.png'),
  // shadowUrl: require('assets/icons/bacteria.png'),

  iconSize: [20, 20], // size of the icon
  // shadowSize: [20, 20], // size of the shadow
  // iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-0, -10] // point from which the popup should open relative to the iconAnchor
})

const Markers = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)

  return units.map(unit => {
    return (
      <Marker
        key={unit.id}
        icon={unit.confirmed === 1 ? confirmedIcon : suspectIcon}
        position={[unit.lat, unit.lng]}
      >
        <Popup icon={virusIcon} onClose={() => setClicked(false)}>
          {console.log(unit)}
          {console.log(unit.confirmed === 0)}
          <a
            onClick={() => {
              setClicked(true)
              onClick(unit)
            }}
          >
            {unit.city}
          </a>
          <br />
          <br />
          {'Bekräftade fall: '}
          {unit.confirmed}
          <br />
          {'Misstänkta fall: '}
          {unit.suspect}
          {/* {clicked == true ? <br /> 'Mer info poppar upp här nere' : null} */}
        </Popup>
      </Marker>
    )
  })
}

export default Markers
