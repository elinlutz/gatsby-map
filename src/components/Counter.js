import React from 'react'

import Container from './Container'
import Layout from './Layout'
import Button from '@material-ui/core/Button'

import { units } from 'data/units'

const Counter = ({ confirmed, suspected }) => {
  return (
    <div className="counter-text">
      <h3>Bekräftade fall</h3>{' '}
      <h1 className="counter-confirmed">{confirmed}</h1>
      <h3>Kontrollerade fall</h3>{' '}
      <h1 className="counter-suspected">{suspected}</h1>
    </div>
  )
}

export default Counter
