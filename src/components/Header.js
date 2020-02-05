import React from 'react'
import { Link } from 'gatsby'

import Container from 'components/Container'

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>
          <Link to="/">Coronavirus 2019-nCov Sverige</Link>
        </p>
        <ul>
          <li>
            <Link to="/info/">Information</Link>
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
