import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Container from 'components/Container'

const DetailsCounter = ({
  title,
  number,
  deaths,
  view,
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

  const updatedAt = data.site.buildTimeZone

  return (
    <Container className="counterCard">
      <Container className="noBubbleHeader">
        <div className="detailsTitle">
          <p>{title}</p>
        </div>
        <div className="detailsRegion">
          <p>{provinceState ? provinceState : title}</p>
        </div>
      </Container>

      <Container className={'confirmedNumberContainer'}>
        {number > 1000 ? (
          <h2>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
        ) : (
          <h1>{number}</h1>
        )}
      </Container>
      <Container className="confirmedText">
        <h3>Bekräftade fall</h3>
      </Container>
      <Container className="confirmedDeathsText">
        {deaths > 0 ? <h3>{deaths} dödsfall </h3> : null}
      </Container>
    </Container>
  )
}

export default DetailsCounter
