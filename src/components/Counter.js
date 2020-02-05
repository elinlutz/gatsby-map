import React from 'react'

import Container from './Container'
import Layout from './Layout'

import { units } from 'data/units'

const Counter = () => {
  return (
    <>
      <h3>Bekräftade fall</h3> <h1>{units[0].confirmed}</h1>
      <h3>Misstänkta fall</h3> <h1>40</h1>
      <p></p>
    </>
  )
}

export default Counter
