import React, { useState } from 'react'
import { Popup, CircleMarker } from 'react-leaflet'

import Button from '@material-ui/core/Button'

import { units } from 'data/units.js'

const Markers = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)

  const getBubble = (confirmed, suspect) => {
    var color
    var radius

    if (confirmed > 0) {
      color = '#ff0000'
      if (confirmed === 1) {
        radius = 10
      } else if (confirmed < 3) {
        radius = 15
      } else if (confirmed < 5) {
        radius = 20
      } else if (confirmed < 10) {
        radius = 25
      } else if (confirmed >= 10) {
        radius = 30
      }
    } else if (suspect > 0) {
      color = '#ffa500'
      if (suspect === 1) {
        radius = 10
      } else if (suspect < 3) {
        radius = 15
      } else if (suspect < 5) {
        radius = 20
      } else if (suspect < 10) {
        radius = 25
      } else if (confirmed >= 10) {
        radius = 30
      }
    }

    return { color, radius }
  }

  return units.map(unit => {
    const { color, radius } = getBubble(unit.confirmed, unit.suspect)
    return (
      <CircleMarker
        key={unit.id}
        radius={radius}
        color={color}
        stroke={false}
        center={[unit.lat, unit.lng]}
        fillOpacity={0.6}
      >
        <Popup onClose={() => setClicked(false)}>
          <Button
            className="cityBtn"
            onClick={() => {
              setClicked(true)
              onClick(unit)
            }}
          >
            {unit.city}
          </Button>
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
