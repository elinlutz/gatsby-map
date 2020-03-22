import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Bubble from './Bubble'
import Container from 'components/Container'

const CounterWorld = ({ number, deathNumber, view }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTimeZone
      }
    }
  `)

  const updatedAt = data.site.buildTimeZone

  return (
    <Container className="counterCard">
      <Container className="header">
        <Container className="bubble">
          <Bubble view={view} />
        </Container>
        <p>Världen</p>
      </Container>
      <Container className="confirmedNumberContainer">
        {number > 1000 ? (
          <h2>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
        ) : (
          <h2>{number}</h2>
        )}
      </Container>
      <Container className="confirmedText">
        <h3>Bekräftade fall</h3>
      </Container>
      <Container className="confirmedNumberContainer">
        {deathNumber > 1000 ? (
          <h2>
            {deathNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
          </h2>
        ) : (
          <h2>{deathNumber}</h2>
        )}
      </Container>
      <Container className="confirmedText">
        <h3>Dödsfall</h3>
      </Container>
      <Container className="updatedText">
        <p>UPPDATERAT {updatedAt.substring(0, updatedAt.length - 6)}</p>
      </Container>
    </Container>
  )
}

export default CounterWorld
