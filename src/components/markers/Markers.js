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
  let maxConfirmed = 0
  let maxDeathRate = 0
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
      color = colors.sweden
    }

    if (number == 1) {
      radius = 4
    } else if (number < 10) {
      radius = 4
    } else if (number < 50) {
      radius = 10
    } else if (number < 100) {
      radius = 13
    } else if (number < 200) {
      radius = 14
    } else if (number < 400) {
      radius = 18
    } else if (number < 800) {
      radius = 22
    } else if (number < 1600) {
      radius = 26
    } else if (number < 3000) {
      radius = 28
    } else if (number >= 3000) {
      radius = 30
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
