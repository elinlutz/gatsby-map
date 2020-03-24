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

      <div className="confirmedNumberContainerTop">
        <div className="numberContainer">
          {number > 1000 ? (
            <h2>{number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</h2>
          ) : (
            <h2>{number}</h2>
          )}
          <div className="textContainer">
            <h3>Bekräftade fall</h3>
          </div>
        </div>
      </div>

      <div className="confirmedNumberContainerBottom">
        {view === 'sweden' ? (
          <div className="numberContainer">
            <h2 className>160</h2>
            <div className="textContainer">
              <h3>Intensivvård</h3>
            </div>
          </div>
        ) : null}
        <div className="numberContainer">
          <h2 className>
            {deaths > 1000
              ? deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
              : deaths}
          </h2>
          <div className="textContainer">
            <h3>Dödsfall</h3>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default DetailsCounter
