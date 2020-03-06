import React from 'react'

const CounterTitle = ({ view }) => {
  let title
  if (view === 'world') {
    title = 'VÄRLDEN'
  } else {
    title = 'SVERIGE'
  }

  return title
}

export default CounterTitle
