import React from 'react'

import Container from 'components/Container'

const DetailsCounter = ({
  title,
  number,
  deaths,
  view,
  type,
  provinceState
}) => {
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
          <h2>{number}</h2>
        )}
      </Container>
      <Container className="confirmedText">
        <h3>Bekräftade fall</h3>
      </Container>
      <Container className={'confirmedNumberContainer'}>
        {deaths > 1000 ? (
          <h2>{deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
        ) : (
          <h2>{deaths}</h2>
        )}
      </Container>
      <Container className="confirmedText">
        <h3>Dödsfall</h3>
      </Container>
    </Container>
  )
}

export default DetailsCounter
