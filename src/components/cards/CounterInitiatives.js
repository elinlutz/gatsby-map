import React from 'react'
import Bubble from './Bubble'
import Container from 'components/Container'

const CounterInitiatives = ({ number, view }) => {
  return (
    <Container className="counterCard">
      <Container className="header">
        <Container className="bubble">
          <Bubble view={view} />
        </Container>
        <p>Initiativ i Sverige</p>
      </Container>
      <div className="confirmedNumberContainerTop">
        <div className="numberContainer">
          <h2>{number}</h2>
          <div className="textContainer">
            <h3>Initiativ</h3>
          </div>
        </div>
      </div>
      <Container className="updatedText"></Container>
    </Container>
  )
}

export default CounterInitiatives
