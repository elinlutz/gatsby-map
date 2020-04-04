import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CircleMarker } from 'react-leaflet'

import colors from 'assets/stylesheets/settings/_colors.scss'

const WorldMarkers = ({ onClick }) => {
  const [active, setActive] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      allWorldCsv {
        edges {
          node {
            id
            Confirmed
            Deaths
            Recovered
            Country_Region
            Province_State
            Lat
            Long_
          }
        }
      }
    }
  `)

  const edges = data.allWorldCsv.edges

  const getBubble = confirmed => {
    let color
    let number = confirmed
    let radius

    if (confirmed > 0) {
      color = colors.world
    }

    if (number == 1) {
      radius = 3
    } else if (number < 100) {
      radius = 6
    } else if (number < 500) {
      radius = 10
    } else if (number < 2000) {
      radius = 12
    } else if (number < 4000) {
      radius = 14
    } else if (number < 8000) {
      radius = 16
    } else if (number < 16000) {
      radius = 18
    } else if (number < 25000) {
      radius = 20
    } else if (number < 100000) {
      radius = 26
    } else if (number < 200000) {
      radius = 28
    } else if (number >= 200000) {
      radius = 30
    }

    return { color, radius }
  }

  return edges.map(edge => {
    const country = edge.node

    if (country.Confirmed > 0) {
      const { color, radius } = getBubble(country.Confirmed)

      const latitude = country.Lat === 0 ? null : country.Lat.substring(0, 10)
      const longitude =
        country.Long_ === 0 ? null : country.Long_.substring(0, 10)
      return (
        <CircleMarker
          key={country.id}
          radius={radius}
          color={color}
          stroke={false}
          center={[latitude, longitude]}
          fillOpacity={active === country.id ? 0.9 : 0.6}
          onClick={() => {
            setActive(country.id)
            onClick(country)
          }}
        ></CircleMarker>
      )
    }
  })
}

export default WorldMarkers
