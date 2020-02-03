import React from 'react'
import { Link } from 'gatsby'

import Container from 'components/Container'

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>
          <Link to="/">Äldrekartan</Link>
        </p>
        <ul>
          <li>
            <Link to="/info/">Information</Link>
          </li>
        </ul>
      </Container>
    </header>
  )
}

export default Header
