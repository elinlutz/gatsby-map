import React from 'react'

const CounterTitle = ({ view }) => {
  let title
  if (view === 'world') {
    title = 'VÄRLDEN'
  } else {
    title = 'SVERIGE'
  }

  return <p>{title}</p>
}

export default CounterTitle
