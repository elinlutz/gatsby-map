import React from 'react'
import { Link } from 'gatsby'

import Container from 'components/Container'

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>Äldrekartan</p>
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/info/">Information</Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header
