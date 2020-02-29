import React from 'react'
import { Link } from 'gatsby'

import Button from '@material-ui/core/Button'
import MapIcon from '@material-ui/icons/Map'
import RoomIcon from '@material-ui/icons/Room'
import BubbleChart from '@material-ui/icons/BubbleChart'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import logo from '../assets/icons/corona.png'

import Container from 'components/Container'

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>
          <div className="titleContainer">
            <Link className="title" to="/">
              <BubbleChart className="icon" />
              Coronakartan
            </Link>
          </div>
        </p>
        <ul>
          <li>
            <Button className="navigationLink">
              <Link to="/nyheter/">Tidslinje</Link>
            </Button>
          </li>
          <li>
            <Button className="navigationLink">
              <Link to="/info/">Om</Link>
            </Button>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header
