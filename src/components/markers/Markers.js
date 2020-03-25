import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CircleMarker } from 'react-leaflet'

import colors from 'assets/stylesheets/settings/_colors.scss'

const Markers = ({ loadTotal, onClick }) => {
  const [clicked, setClicked] = useState(false)
  const [active, setActive] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      allTidsserieCsv {
        edges {
          node {
            id
            Region
            Display_Name
            Lat
            Long
            Region_Total
            Region_Deaths
            Hospital_Total
          }
        }
      }
    }
  `)

  const edges = data.allTidsserieCsv.edges

  const getBubble = confirmed => {
    let color
    let number = confirmed
    let radius

    if (confirmed > 0) {
      color = colors.sweden
    }

    if (number == 1) {
      radius = 4
    } else if (number < 10) {
      radius = 7
    } else if (number < 20) {
      radius = 10
    } else if (number < 30) {
      radius = 12
    } else if (number < 50) {
      radius = 15
    } else if (number < 100) {
      radius = 20
    } else if (number < 200) {
      radius = 22
    } else if (number < 300) {
      radius = 25
    } else if (number >= 300) {
      radius = 28
    }

    return { color, radius }
  }

  return edges.map(edge => {
    const region = edge.node

    if (region.Region_Total > 0) {
      const { color, radius } = getBubble(region.Region_Total)

      return (
        <CircleMarker
          key={region.id}
          radius={radius}
          color={color}
          stroke={false}
          center={[region.Lat, region.Long]}
          fillOpacity={active === region.id ? 0.9 : 0.6}
          onClick={() => {
            onClick(region)
            setActive(region.id)
          }}
        ></CircleMarker>
      )
    }
  })
}

export default Markers
