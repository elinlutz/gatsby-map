import React from 'react'

const CounterTitle = ({ view }) => {
  return <p>{view == 'world' ? 'SVERIGE' : 'VÄRLDEN'}</p>
}

export default CounterTitle
