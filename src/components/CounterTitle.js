import React from 'react'

const CounterTitle = ({ view }) => {
  return <p>{view == 'world' ? 'VÄRLDEN' : 'SVERIGE'}</p>
}

export default CounterTitle
