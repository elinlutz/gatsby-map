import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CircleMarker } from 'react-leaflet'

import colors from 'assets/stylesheets/settings/_colors.scss'

const Markers = ({ loadTotal, onClick }) => {
  const [clicked, setClicked] = useState(false)

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
      color = colors.red
    }

    if (number == 1) {
      radius = 5
    } else if (number < 5) {
      radius = 8
    } else if (number < 10) {
      radius = 10
    } else if (number < 20) {
      radius = 15
    } else if (number < 50) {
      radius = 20
    } else if (number < 100) {
      radius = 25
    } else if (number >= 100) {
      radius = 40
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
          fillOpacity={0.8}
          onClick={() => onClick(region)}
        ></CircleMarker>
      )
    }
  })
}

export default Markers
