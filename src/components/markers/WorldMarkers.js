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
  let maxConfirmed = 0
  let maxDeathRate = 0
  console.log(edges)
  for (let edge in edges){
    let conf = edges[edge].Confirmed
    if (conf > maxConfirmed){
      maxConfirmed = conf
    }
    let dr = edges[edge].Deaths/(conf+Number.EPSILON)
    if (dr > maxDeathRate){
      maxDeathRate = dr
    }
  }
  console.log(maxConfirmed)
  console.log(maxDeathRate)
  const getBubble = confirmed => {
    let color
    let number = confirmed
    let radius

    if (confirmed > 0) {
      color = colors.world
    }
    //console.log(Math.sqrt((1000*number/maxConfirmed)/Math.PI))
    radius = Math.sqrt((1000*number/maxConfirmed)/Math.PI)

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
