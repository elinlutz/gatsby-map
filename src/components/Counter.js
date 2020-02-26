import React from 'react'

import Container from './Container'
import Layout from './Layout'
import Button from '@material-ui/core/Button'

import { units } from 'data/units'

const Counter = ({ confirmed, suspected }) => {
  return (
    <>
      <h3>Bekräftade fall</h3> <h1>{confirmed}</h1>
      <h3>Kontrollerade fall</h3> <h1>{suspected}</h1>
      <p></p>
    </>
  )
}

export default Counter
