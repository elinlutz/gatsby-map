import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { useStaticQuery, graphql } from 'gatsby'

import ToggleLogButton from './ToggleLogButton'
import colors from 'assets/stylesheets/settings/_colors.scss'
import { nominalTypeHack } from 'prop-types'
import ToggleChartButton from './ToggleChartButton'

const getOptions = (data, cumulative) => ({
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
    tickInterval: 100,
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
      },
      events: {
        // legendItemClick: function() {
        //   return false
        // }
      }
    }
  },
  series: [
    {
      name: 'Fall per dag',
      data: data,
      color: colors.black,
      type: 'column',
      marker: {
        enabled: false,
        symbol: 'none'
      }
    },
    {
      name: 'Totala antal fall',
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

const MiniChart = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      timeSeriesConfimedConfirmedCsv(Display_Name: { eq: "Stockholm" }) {
        _2020_02_25
        _2020_02_26
        _2020_02_27
        _2020_02_28
        _2020_02_29
        _2020_03_01
        _2020_03_02
        _2020_03_03
        _2020_03_04
        _2020_03_05
        _2020_03_06
        _2020_03_07
        _2020_03_08
        _2020_03_09
        _2020_03_10
        _2020_03_11
        _2020_03_12
        _2020_03_15
        _2020_03_13
        _2020_03_14
        _2020_03_16
        _2020_03_17
        _2020_03_18
        _2020_03_19
        _2020_03_20
        _2020_03_21
        _2020_03_22
        _2020_03_23
        _2020_03_24
        _2020_03_25
        _2020_03_26
        _2020_03_27
        _2020_03_28
        _2020_03_29
        _2020_03_30
        _2020_03_31
        _2020_04_01
        Today
      }
    }
  `)

  var dataObject = data.timeSeriesConfimedConfirmedCsv
  var dataArr = [0]
  var cumulativeArr = [0]

  Object.entries(dataObject).map(([key, value], index) => {
    var newElement = cumulativeArr[index] + parseInt(value)
    cumulativeArr.push(newElement)
    dataArr.push([key, parseInt(value)])
  })

  console.log('Arr', cumulativeArr)

  const inData = dataArr
  const inCumulativeData = cumulativeArr

  const [logType, setLogType] = useState('linear')
  const [chartType, setChartType] = useState('column')

  const hospitalOptions = getOptions(inData, inCumulativeData)

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={hospitalOptions} />
    </>
  )
}

export default MiniChart
