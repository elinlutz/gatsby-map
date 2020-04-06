import React from 'react'
import { Link } from 'gatsby'

const TimelineListElement = ({ number, region, source }) => {
  return (
    <li>
      {number} {number == 1 ? 'nytt' : 'nya'} fall{' '}
      {region == 'Gotland' ? 'på' : 'i'}{' '}
      <Link
        className="sourceLink"
        to={`region/${region.toLowerCase()}`}
        style={{
          textDecorationLine: 'none'
        }}
      >
        {region}
      </Link>{' '}
      - (
      <a className="sourceLink" href={`${source}`} target={'_blank'}>
        källa
      </a>
      )
    </li>
  )
}

export default TimelineListElement
