import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CircleMarker } from 'react-leaflet'

import colors from 'assets/stylesheets/settings/_colors.scss'

const Markers = ({ onClick }) => {
  const [active, setActive] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      allTimeSeriesConfimedConfirmedCsv {
        edges {
          node {
            id
            Region
            Display_Name
            Population
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

  const edges = data.allTimeSeriesConfimedConfirmedCsv.edges

  let maxRegionConf = 0
  let maxRegionPop = 0
  let maxSweDeathRate = 0

  for (let edge in edges) {
    let conf = edges[edge].node.Region_Total
    let pop = edges[edge].node.Population

    if (conf > maxRegionConf) {
      maxRegionConf = conf
    }

    if (pop > maxRegionPop) {
      maxRegionPop = pop
    }

    let dr = (edges[edge].node.Region_Deaths / pop) * 100000

    if (dr > maxSweDeathRate) {
      maxSweDeathRate = dr
    }
  }

  const getBubble = (confirmed, deaths, population) => {
    let color
    let number = confirmed
    let radius
    let colorName

    if (confirmed > 0) {
      let deathRate = (deaths / population) * 100000
      let deathRateColorIndex = Math.floor(
        10 * (deathRate / (maxSweDeathRate + 0.0000001))
      )
      colorName = 'deathrate' + String(deathRateColorIndex)
      color = colors[colorName]
    }

    radius = 5 + 14 * Math.sqrt(number / maxRegionConf / Math.PI)

    return { color, radius }
  }

  return edges.map(edge => {
    const region = edge.node

    if (region.Region_Total > 0) {
      const { color, radius } = getBubble(
        region.Region_Total,
        region.Region_Deaths,
        region.Population
      )

      const deathsPer100k = region.Region_Deaths
        ? (region.Region_Deaths / region.Population) * 100000
        : null

      region['deathsPer100k'] = deathsPer100k.toFixed(0)

      return (
        <CircleMarker
          key={region.id}
          radius={radius}
          color={color}
          stroke={false}
          center={[region.Lat, region.Long]}
          fillOpacity={active === region.id ? 0.95 : 0.75}
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
