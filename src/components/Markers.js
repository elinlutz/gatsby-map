import React, { useState } from 'react'
import { Popup, CircleMarker } from 'react-leaflet'

import Button from '@material-ui/core/Button'

import { units } from 'data/units.js'

import colors from 'assets/stylesheets/settings/_colors.scss'

const Markers = ({ onClick }) => {
  const [clicked, setClicked] = useState(false)

  const getBubble = (confirmed, suspect) => {
    let color
    let number
    let radius

    if (confirmed > 0) {
      color = colors.red
      number = confirmed
    }

    if (suspect > 0) {
      color = colors.orange
      number = suspect
    }

    if (number === 1) {
      radius = 5
    } else if (number < 3) {
      radius = 10
    } else if (number < 5) {
      radius = 15
    } else if (number < 10) {
      radius = 20
    } else if (number >= 10) {
      radius = 30
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
        onClick={() => onClick(unit)}
      >
        {/* <Popup onClose={() => setClicked(false)}>
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
          {unit.suspect > 0 ? 'Misstänkta fall ' + unit.suspect : null}

          {clicked == true ? <br /> 'Mer info poppar upp här nere' : null}
        </Popup> */}
      </CircleMarker>
    )
  })
}

export default Markers
