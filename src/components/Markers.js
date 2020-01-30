import React from 'react'

import { Marker, Popup } from 'react-leaflet'
import { Link } from 'gatsby'

import { units } from 'data/units.js'


const Markers = () => {
    console.log(units)
    return units.map(unit => {
        return (
        <Marker key={unit.id} position={[unit.lat, unit.lng]}>
            <Popup>
            <Link to={unit.id}>{unit.name}</Link><br />
            {unit.city}
          </Popup>
        </Marker>
        )
    })
}

export default Markers