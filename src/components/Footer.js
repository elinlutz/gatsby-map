import React from 'react'

import Container from 'components/Container'

const Footer = () => {
  const d = new Date()
  return (
    <footer>
      <Container>
        <p>&copy; {d.getFullYear()}</p>
      </Container>
    </footer>
  )
}

export default Footer
