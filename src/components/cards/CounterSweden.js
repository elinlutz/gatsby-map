import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Bubble from './Bubble'
import Container from 'components/Container'

const CounterSweden = ({
  title,
  number,
  deathNumber,
  view,
  hospitalized,
  type,
  provinceState
}) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTimeZone
      }
    }
  `)

  const getUpdatedAt = () => {
    const updatedAt = data.site.buildTimeZone
    if (view == 'world') {
      return updatedAt.substring(0, updatedAt.length - 6)
    } else {
      return updatedAt
    }
  }

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
          <h2 className>{hospitalized > 0 ? hospitalized : '?'}</h2>
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
        <p>UPPDATERAT {getUpdatedAt()}</p>
      </Container>
    </Container>
  )
}

// {updatedAt.substring(0, updatedAt.length - 6)}

export default CounterSweden
