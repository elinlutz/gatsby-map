import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { CircleMarker } from 'react-leaflet'

import colors from 'assets/stylesheets/settings/_colors.scss'

const Markers = ({ loadTotal, onClick }) => {
  const [clicked, setClicked] = useState(false)
  const [active, setActive] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      allTimeSeriesConfimedConfirmedCsv {
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

  const edges = data.allTimeSeriesConfimedConfirmedCsv.edges
  console.log(edges)
  let maxSweConfirmed = 0
  let maxSweDeathRate = 0
  for (let edge in edges){
    let conf = edges[edge].node.Region_Total
    
    if (conf > maxSweConfirmed){
      maxSweConfirmed = conf
    }
    let dr = edges[edge].node.Region_Deaths/conf
    if (dr > maxSweDeathRate){
      maxSweDeathRate = dr
    }
  }
  const getBubble = (confirmed,deaths) => {
    let color
    let number = confirmed
    let radius
    let colorName
    if (confirmed > 0) {
      let deathRate = deaths/confirmed
      let deathRateColorIndex = Math.floor(10*(deathRate/maxSweDeathRate))
      //color = colors.sweden
      colorName = 'deathrate' + String(deathRateColorIndex)
      console.log(colorName)
      color = colors[colorName]
      console.log(color)
    }
    radius = 10 * Math.sqrt((number/maxSweConfirmed)/Math.PI)
    
    return { color, radius }
  }

  return edges.map(edge => {
    const region = edge.node

    if (region.Region_Total > 0) {
      const { color, radius } = getBubble(region.Region_Total,region.Region_Deaths)

      return (
        <CircleMarker
          key={region.id}
          radius={radius}
          color={color}
          stroke={false}
          center={[region.Lat, region.Long]}
          fillOpacity={active === region.id ? 0.9 : 0.7}
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
