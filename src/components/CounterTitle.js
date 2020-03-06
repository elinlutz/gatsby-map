import React from 'react'

const CounterTitle = ({ view }) => {
  return <p>{view == 'sweden' ? '- SVERIGE' : '- VÄRLDEN'}</p>
}

export default CounterTitle
