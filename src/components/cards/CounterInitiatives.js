import React from 'react'
import Bubble from './Bubble'
import Container from 'components/Container'

import styled from 'styled-components'

const BigNumber = styled.div`
  display: flex;
  justify-content: center;
  padding: 1em 0;
`

const CapitalLetters = styled.h4`
  text-transform: uppercase;
`

const CounterInitiatives = ({ number, view }) => {
  return (
    <Container className="counterCard">
      <Container className="header">
        <Container className="bubble">
          <Bubble view={view} />
        </Container>
        <p>Initiativ i Sverige</p>
      </Container>
      <BigNumber>
        <div className="confirmedNumberContainerTop">
          <div className="numberContainer">
            <br />
            <br />

            <h2>{number}</h2>
            <div className="textContainer">
              <h3>Initiativ</h3>
            </div>
          </div>
        </div>
      </BigNumber>
      <CapitalLetters>
        <a
          href="https://docs.google.com/spreadsheets/d/1TjN0ZV3vG31cYE2aeO5T4n1vcZkuja2JncRxWSr4wQU/edit#gid=0"
          target="_blank"
        >
          + Lägg till initiativ
        </a>
      </CapitalLetters>

      <Container className="updatedText"></Container>
    </Container>
  )
}

export default CounterInitiatives
