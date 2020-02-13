import React from 'react'
import { Link } from 'gatsby'

import Button from '@material-ui/core/Button'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import logo from '../assets/icons/corona.png'

import Container from 'components/Container'

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>
          <Link className="title" to="/">
            {/* <img className="logo" src={logo} /> */}
            Coronavirus covid-19 Sverige
          </Link>
        </p>
        <ul>
          <li>
            <Button className="header navigationLink">
              <Link to="/info/">Information</Link>
            </Button>
          </li>
          {/* <li>
            <Link to="/blogg/">Blogg</Link>
          </li> */}
        </ul>
      </Container>
    </header>
  )
}

export default Header
