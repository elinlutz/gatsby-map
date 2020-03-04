import React from 'react'

const getWorld = () => {
  var request = new XMLHttpRequest()
  request.open(
    'GET',
    'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/03-03-2020.csv'
  )
  request.addEventListener('load', function(event) {
    if (request.status >= 200 && request.status < 300) {
      console.log(request.responseText)
    } else {
      console.warn(request.statusText, request.responseText)
    }
  })
  const data = request.send()
  fwrite('world.csv', data)
}

export default getWorld
