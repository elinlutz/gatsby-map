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
      <div className="confirmedNumberContainerTop">
        <div className="numberContainer">
          {number > 1000 ? (
            <h2 className={view === 'world' ? 'hWorld' : 'hSweden'}>
              {number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            </h2>
          ) : (
            <h1 className={view === 'world' ? 'hWorld' : 'hSweden'}>
              {number}
            </h1>
          )}
          <div className="textContainer">
            <h3>Bekräftade fall</h3>
          </div>
        </div>
      </div>

      <div className="confirmedNumberContainerBottom">
        <div className="numberContainer">
          <h2 className>
            {deathNumber > 1000
              ? deathNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
              : deathNumber}
          </h2>
          <div className="textContainer">
            <h3>Dödsfall</h3>
          </div>
        </div>
      </div>
      <Container className="updatedText">
        <p>UPPDATERAT {updatedAt.substring(0, updatedAt.length - 6)}</p>
      </Container>
    </Container>
  )
}

export default CounterWorld
