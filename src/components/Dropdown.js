import React, { useState } from 'react'

import styled from 'styled-components'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'

import colors from 'assets/stylesheets/settings/_colors.scss'

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${colors.bar};
  align-items: center;
  border-radius: 2px;
  transition: border-radius 0.5s;
`

const InnerHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
`

const Title = styled.h4`
  display: flex;
  color: ${colors.black};
  margin-left: 10px;
`

const Content = styled.div`
  display: flex;
  border-radius: 0px;
  margin-left: 45px;
`

const Dropdown = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div onClick={toggle}>
      <HeaderContainer>
        <InnerHeader>
          {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </InnerHeader>
        <Title>{props.title}</Title>
      </HeaderContainer>
      {isOpen && <Content>{props.children}</Content>}
    </div>
  )
}

export default Dropdown
