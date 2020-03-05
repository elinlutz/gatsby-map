import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Bubble from 'components/Bubble'
import Container from 'components/Container'

const Counter = ({ title, number, view, type, provinceState }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTimeZone
      }
    }
  `)

  let head
  if (title) {
    head = title
  } else if (view == 'sweden') {
    head = 'SVERIGE'
  } else if ((view = 'world')) {
    head = 'VÄRLDEN'
  }

  const updatedAt = data.site.buildTimeZone

  return (
    <Container className="counterCard">
      {type != 'details' ? (
        <Container className="header">
          <Container className="bubble">
            <Bubble view={view} />
          </Container>
          <p>{head}</p>
        </Container>
      ) : (
        <Container className="noBubbleHeader">
          <Container className="main">
            <p>{head}</p>
          </Container>
          <Container className="region">
            <p>{provinceState}</p>
          </Container>
        </Container>
      )}
      {type != 'details' ? (
        <Container className="confirmedNumber">
          <Container className="line"></Container>
          {number > 1000 ? (
            <h2>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
          ) : (
            <h1>{number}</h1>
          )}
        </Container>
      ) : (
        <Container
          className={
            type === 'world' ? 'confirmedNumberWorld' : 'confirmedNumberSweden'
          }
        >
          <Container className="line"></Container>
          {number > 1000 ? (
            <h2>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
          ) : (
            <h1>{number}</h1>
          )}
        </Container>
      )}
      <Container className="confirmedText">
        <h3>Bekräftade fall</h3>
      </Container>
      <Container className="updatedText">
        {view == 'sweden' ? (
          <p>UPPDATERAT {updatedAt}</p>
        ) : (
          <p>UPPDATERAT {updatedAt.substring(0, updatedAt.length - 6)}</p>
        )}
      </Container>
    </Container>
  )
}

export default Counter
