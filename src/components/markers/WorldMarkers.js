import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CircleMarker } from 'react-leaflet'

import colors from 'assets/stylesheets/settings/_colors.scss'

const WorldMarkers = ({ onClick }) => {
  //   const [clicked, setClicked] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      allWorldCsv {
        edges {
          node {
            id
            Confirmed
            Deaths
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
      radius = 5
    } else if (number < 5) {
      radius = 6
    } else if (number < 500) {
      radius = 10
    } else if (number < 2000) {
      radius = 15
    } else if (number < 5000) {
      radius = 20
    } else if (number >= 5000) {
      radius = 30
    }

    return { color, radius }
  }

  return edges.map(edge => {
    const country = edge.node

    if (country.Confirmed > 0 && country.Country_Region != 'US') {
      const { color, radius } = getBubble(country.Confirmed)

      const latitude = country.Lat === 0 ? null : country.Lat
      const longitude = country.Long_ === 0 ? null : country.Long_
      return (
        <CircleMarker
          key={country.id}
          radius={radius}
          color={color}
          stroke={false}
          center={[latitude, longitude]}
          fillOpacity={0.7}
          onClick={() => onClick(country)}
        ></CircleMarker>
      )
    }
  })
}

export default WorldMarkers
