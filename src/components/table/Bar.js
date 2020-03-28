import React, { useState } from 'react'

import styled from 'styled-components'
import colors from 'assets/stylesheets/settings/_colors.scss'

const Bar = props => {
  const [isHovering, setIsHovering] = useState(false)

  const value = props.value == undefined ? 0 : props.value

  const BarContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: solid 1px;
    border-radius: 1px;
    width: 100px;
    background-color: ${isHovering ? 'white' : colors.bar};
    border-color: ${isHovering ? 'white' : colors.bar};
  `

  const BlackBar = styled.div`
    background-color: ${colors.black};
    width: ${1 * value + 'px'};
    height: 20px;
    border-radius: 1px;
  `

  const Percentage = styled.div`
    color: ${colors.black};
    margin-left: 10px;
    font-size: 10px;
    font-weight: bold;
  `

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <BarContainer>
        <BlackBar />
        {isHovering && <Percentage>{value + ' %'}</Percentage>}
      </BarContainer>
    </div>
  )
}

export default Bar
