import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Counter = ({ confirmed, suspected }) => {
  const data = useStaticQuery(graphql`
    query {
      currentBuildDate {
        currentDate
      }
    }
  `)

  return (
    <div>
      <h3>Bekräftade fall</h3>
      <h1>{confirmed}</h1>
      <p>Uppdaterat {data.currentBuildDate.currentDate}</p>
    </div>
  )
}

export default Counter
