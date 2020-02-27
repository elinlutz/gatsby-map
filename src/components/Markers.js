import React, { useState } from 'react'
import { Marker, Popup, CircleMarker } from 'react-leaflet'

// import { icon } from 'assets/icons/Icon'

import { units } from 'data/units.js'

// const confirmedIcon = Icon({
//   iconUrl: require('../assets/icons/red.png'),
//   iconSize: [20, 20], // size of the icon
//   popupAnchor: [-0, -10] // point from which the popup should open relative to the iconAnchor
// })

// var WarningIcon = new L.icon({
//   iconUrl: orangeIcon,
//   // shadowUrl: require('assets/icons/bacteria.png'),
//   iconSize: [20, 20], // size of the icon
//   // shadowSize: [20, 20], // size of the shadow
//   // iconAnchor: [0, 0], // point of the icon which will correspond to marker's location
//   // shadowAnchor: [4, 62], // the same for the shadow
//   popupAnchor: [-0, -10] // point from which the popup should open relative to the iconAnchor
// })

const Markers = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)

  return units.map(unit => {
    return (
      <CircleMarker
        key={unit.id}
        radius={unit.suspect > 1 ? 20 : 10}
        color={unit.confirmed > 0 ? '#ff0000' : '#ffa500'}
        stroke={false}
        center={[unit.lat, unit.lng]}
        fillOpacity={0.6}
      >
        <Popup onClose={() => setClicked(false)}>
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
      </CircleMarker>
    )
  })
}

export default Markers
