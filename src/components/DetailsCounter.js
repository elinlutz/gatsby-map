import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from 'components/Container'

const DetailsCounter = ({ title, number, view, type, provinceState }) => {
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
      <Container className="noBubbleHeader">
        <Container className="main">
          <p>{title}</p>
        </Container>
        <Container className="region">
          <p>{provinceState}</p>
        </Container>
      </Container>
      <Container
        className={
          view === 'sweden' ? 'confirmedNumberSweden' : 'confirmedNumberWorld'
        }
      >
        <Container className="line"></Container>
        {number > 1000 ? (
          <h2>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
        ) : (
          <h1>{number}</h1>
        )}
      </Container>
      <Container className="confirmedText">
        <h3>Bekräftade fall</h3>
      </Container>
      <Container className="updatedText">
        {view == 'sweden' ? (
          <p>KÄLLA {updatedAt}</p>
        ) : (
          <p>KÄLLA {updatedAt.substring(0, updatedAt.length - 6)}</p>
        )}
      </Container>
    </Container>
  )
}

export default DetailsCounter
