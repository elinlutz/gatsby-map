import React from 'react'

import Container from 'components/Container'
import { Link } from 'gatsby'
import AddBoxIcon from '@material-ui/icons/AddBox'
import Button from '@material-ui/core/Button'

const DetailsCounter = ({
  title,
  number,
  deaths,
  hospitalized,
  recovered,
  view,
  type,
  provinceState
}) => {
  return (
    <Container className="counterCard">
      <Container className="noBubbleHeader">
        {view === 'sweden' ? (
          <Link className="link" to={`region/${title.toLowerCase()}`}>
            <div className="icon">
              <AddBoxIcon></AddBoxIcon>
            </div>
            <div className="title">
              <p>{title}</p>
            </div>
          </Link>
        ) : (
          <div className="detailsTitle">
            <p>{title}</p>
          </div>
        )}
        <div className="detailsRegion">
          <p>{provinceState ? provinceState : null}</p>
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
            <h2>{hospitalized > 0 ? hospitalized : '?'}</h2>
            <div className="textContainer">
              <h3>På sjukhus</h3>
            </div>
          </div>
        ) : (
          <div className="numberContainer">
            <h2>
              {recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
            </h2>
            <div className="textContainer">
              <h3>Tillfrisknade</h3>
            </div>
          </div>
        )}
        <div className="numberContainer">
          <h2>
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
