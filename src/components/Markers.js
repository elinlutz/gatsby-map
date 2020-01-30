import React from 'react'

import { Marker } from 'react-leaflet'

import { units } from 'data/units.js'


const Markers = () => {
    console.log(units)
    return units.map(unit => {
        return (
        <Marker key={unit.id} position={[unit.lat, unit.lng]}>
        </Marker>
        )
    })
}

export default Markers