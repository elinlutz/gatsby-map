import React from 'react'

import styled from 'styled-components'

import colors from 'assets/stylesheets/settings/_colors.scss'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
`

const NumberContainer = styled.div`
  display: flex;
  background-color: ${colors.sweden};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height: 30px;
`

const Text = styled.p`
  color: white;
  padding: 10px;
  font-weight: bold;
`
const TodayNumber = props => {
  return (
    <Container>
      {props.value > 0 ? (
        <NumberContainer>
          <Text>{'+ ' + props.value}</Text>
        </NumberContainer>
      ) : null}
    </Container>
  )
}

export default TodayNumber
