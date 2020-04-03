import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import colors from 'assets/stylesheets/settings/_colors.scss'

const getOptions = (data, cumulative, scale) => ({
  title: {
    text: null
  },

  colors: [colors.blue],

  chart: {
    type: 'spline',
    style: {
      fontFamily:
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif',
      fontWeight: 'medium'
    }
  },

  xAxis: {
    tickInterval: 7 * 24 * 3600 * 1000, // one week
    tickWidth: 0,
    gridLineWidth: 1,
    labels: {
      enabled: false,
      align: 'left',
      x: 3,
      y: -3
    },
    showFirstLabel: false,
    gridLineWidth: 0
  },

  yAxis: {
    tickInterval: scale,
    title: {
      text: null
    },
    type: 'column',
    labels: {
      enabled: true,
      align: 'right',
      x: -3,
      y: 4,
      format: '{value:.,0f}',
      gridLineWidth: 0
    },
    showFirstLabel: false,
    showLastLabel: true
  },
  legend: {
    enabled: true,
    align: 'right',
    verticalAlign: 'bottom',
    borderWidth: 0
  },

  tooltip: {
    shared: true,
    crosshairs: true,
    backgroundColor: 'rgba(255, 255, 255, 0.58)'
  },
  credits: {
    enabled: false
  },
  plotOptions: {
    series: {
      cursor: 'pointer',
      marker: {
        lineWidth: 1
      }
    }
  },
  series: [
    {
      name: 'Antal fall per dag',
      data: data,
      color: colors.blue,
      type: 'column',
      marker: {
        enabled: false,
        symbol: 'none'
      }
    },
    {
      name: 'Antal fall totalt',
      data: cumulative,
      color: colors.sweden,
      type: 'column',
      marker: {
        enabled: false,
        symbol: 'none'
      }
    }
  ]
})

const MiniChart = ({ tableData }) => {
  const dataObject = tableData
  var dataArr = [0]
  var cumulativeArr = [0]

  Object.entries(dataObject).map(([key, value], index) => {
    var newElement = cumulativeArr[index] + parseInt(value)
    cumulativeArr.push(newElement)
    var label = key.replace(/_/g, ' ')
    {
      key == 'Today' ? (label = 'Idag') : null
    }
    dataArr.push([label, parseInt(value)])
  })

  dataArr.shift()
  cumulativeArr.shift()

  const inData = dataArr
  const inCumulativeData = cumulativeArr

  const getScale = number => {
    if (number > 100) {
      return 100
    }
    if (number > 50) {
      return 50
    } else return 10
  }

  const chartOptions = getOptions(inData, inCumulativeData, 50)

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </>
  )
}

export default MiniChart
