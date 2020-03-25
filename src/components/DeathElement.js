import React from 'react'

const TimelineListElement = ({ number, region, source }) => {
  return (
    <li>
      {number} {number == 1 ? 'nytt' : 'nya'} dödsfall{' '}
      {region == 'Gotland' ? 'på' : 'i'} {region} (
      <a className="sourceLink" href={`${source}`} target={'_blank'}>
        källa
      </a>
      )
    </li>
  )
}

export default TimelineListElement
