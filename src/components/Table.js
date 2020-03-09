import React from 'react'

import Container from 'components/Container'

const Table = () => {
  getKeys = function() {
    return Object.keys(this.props.data[0])
  }

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
