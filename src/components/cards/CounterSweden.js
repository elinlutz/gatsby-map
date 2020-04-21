import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Bubble from './Bubble'
import Container from 'components/Container'

const CounterSweden = ({ number, deathNumber, view, hospitalized }) => {
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
        <p>Sverige</p>
      </Container>

      <div className="confirmedNumberContainerTop">
        <div className="numberContainer">
          <h2>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
          <div className="textContainer">
            <h3>Bekräftade fall</h3>
          </div>
        </div>
      </div>

      <div className="confirmedNumberContainerBottom">
        <div className="numberContainer">
          <h2 className>
            {hospitalized.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
          </h2>
          <div className="textContainer">
            <h3>På sjukhus</h3>
          </div>
        </div>
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
        <p>UPPDATERAT {updatedAt}</p>
      </Container>
    </Container>
  )
}

// {updatedAt.substring(0, updatedAt.length - 6)}

export default CounterSweden
