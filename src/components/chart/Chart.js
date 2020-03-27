import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { useStaticQuery, graphql } from 'gatsby'

import ToggleLogButton from './ToggleLogButton'
import colors from 'assets/stylesheets/settings/_colors.scss'
import { nominalTypeHack } from 'prop-types'
import ToggleChartButton from './ToggleChartButton'

const getOptions = (total, deaths, log, chartType, chart) => ({
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
    gridLineWidth: 0,

    plotLines:
      chart === 'confirmed'
        ? [
            {
              show: true,
              color: '#424242',
              dashStyle: 'Dot',
              value: 11, // Index of data point representing 2020-03-12
              width: 1,
              x: +6
            }
          ]
        : null,
    plotBands:
      chart === 'confirmed'
        ? [
            {
              color: 'none',
              from: 11,
              to: 11,
              label: {
                text: 'Ny teststrategi',
                align: 'left',
                x: +4
              }
            }
          ]
        : null
  },

  yAxis: {
    tickInterval: log === 'logarithmic' ? 1 : chart == 'hospital' ? 10 : 100,
    title: {
      text: null
    },
    type: log,
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
  series:
    chart === 'confirmed'
      ? [
          {
            name: 'Antal bekräftade fall totalt',
            data: [
              ['1 Mars 2020', 14],
              ['2 Mars 2020', 15],
              ['3 Mars 2020', 30],
              ['4 Mars 2020', 52],
              ['5 Mars 2020', 94],
              ['6 Mars 2020', 137],
              ['7 Mars 2020', 161],
              ['8 Mars 2020', 203],
              ['9 Mars 2020', 261],
              ['10 Mars 2020', 356],
              ['11 Mars 2020', 500],
              ['12 Mars 2020', 687],
              ['13 Mars 2020', 819],
              ['14 Mars 2020', 963],
              ['15 Mars 2020', 1032],
              ['16 Mars 2020', 1121],
              ['17 Mars 2020', 1196],
              ['18 Mars 2020', 1295],
              ['19 Mars 2020', 1443],
              ['20 Mars 2020', 1651],
              ['21 Mars 2020', 1785],
              ['22 Mars 2020', 1930],
              ['23 Mars 2020', 2059],
              ['24 Mars 2020', 2299],
              ['25 Mars 2020', 2531],
              ['26 Mars 2020', 2855],
              ['26 Mars 2020', total]
            ],
            type: `${chartType}`,
            color: colors.sweden,
            marker: {
              enabled: false,
              symbol: 'none'
            }
          },
          {
            name: 'Antal bekräftade fall per dag',
            data: [
              ['1 Mars 2020', 1],
              ['2 Mars 2020', 1],
              ['3 Mars 2020', 15],
              ['4 Mars 2020', 22],
              ['5 Mars 2020', 42],
              ['6 Mars 2020', 43],
              ['7 Mars 2020', 24],
              ['8 Mars 2020', 42],
              ['9 Mars 2020', 57],
              ['10 Mars 2020', 96],
              ['11 Mars 2020', 144],
              ['12 Mars 2020', 187],
              ['13 Mars 2020', 132],
              ['14 Mars 2020', 144],
              ['15 Mars 2020', 66],
              ['16 Mars 2020', 89],
              ['17 Mars 2020', 75],
              ['18 Mars 2020', 99],
              ['19 Mars 2020', 148],
              ['20 Mars 2020', 208],
              ['21 Mars 2020', 134],
              ['22 Mars 2020', 145],
              ['23 Mars 2020', 129],
              ['24 Mars 2020', 240],
              ['25 Mars 2020', 232],
              ['26 Mars 2020', 324],
              ['27 Mars 2020', total - 2855]
            ],
            type: `${chartType}`,
            color: colors.blue,
            marker: {
              enabled: false,
              symbol: 'none'
            }
          }
        ]
      : [
          {
            name: 'Antal dödsfall totalt',
            data: [
              ['1 Mars 2020', 0],
              ['2 Mars 2020', 0],
              ['3 Mars 2020', 0],
              ['4 Mars 2020', 0],
              ['5 Mars 2020', 0],
              ['6 Mars 2020', 0],
              ['7 Mars 2020', 0],
              ['8 Mars 2020', 0],
              ['9 Mars 2020', 0],
              ['10 Mars 2020', 0],
              ['11 Mars 2020', 1],
              ['12 Mars 2020', 1],
              ['13 Mars 2020', 1],
              ['14 Mars 2020', 2],
              ['15 Mars 2020', 3],
              ['16 Mars 2020', 7],
              ['17 Mars 2020', 8],
              ['18 Mars 2020', 10],
              ['19 Mars 2020', 11],
              ['20 Mars 2020', 16],
              ['21 Mars 2020', 20],
              ['22 Mars 2020', 23],
              ['23 Mars 2020', 33],
              ['24 Mars 2020', 40],
              ['25 Mars 2020', 63],
              ['26 Mars 2020', 78],
              ['27 Mars 2020', deaths]
            ],
            color: colors.black,
            type: `${chartType}`,
            marker: {
              enabled: false,
              symbol: 'none'
            }
          },
          {
            name: 'Antal dödsfall per dag',
            data: [
              ['1 Mars 2020', 0],
              ['2 Mars 2020', 0],
              ['3 Mars 2020', 0],
              ['4 Mars 2020', 0],
              ['5 Mars 2020', 0],
              ['6 Mars 2020', 0],
              ['7 Mars 2020', 0],
              ['8 Mars 2020', 0],
              ['9 Mars 2020', 0],
              ['10 Mars 2020', 0],
              ['11 Mars 2020', 1],
              ['12 Mars 2020', 0],
              ['13 Mars 2020', 0],
              ['14 Mars 2020', 1],
              ['15 Mars 2020', 1],
              ['16 Mars 2020', 4],
              ['17 Mars 2020', 1],
              ['18 Mars 2020', 2],
              ['19 Mars 2020', 1],
              ['20 Mars 2020', 5],
              ['21 Mars 2020', 4],
              ['22 Mars 2020', 3],
              ['23 Mars 2020', 10],
              ['24 Mars 2020', 7],
              ['25 Mars 2020', 24],
              ['26 Mars 2020', 15],
              ['27 Mars 2020', deaths - 78]
            ],
            color: colors.blue,
            type: `${chartType}`,
            marker: {
              enabled: false,
              symbol: 'none'
            }
          }
        ]
})

const Chart = () => {
  const data = useStaticQuery(graphql`
    query {
      allTimeSeriesConfimedConfirmedCsv {
        edges {
          node {
            Region_Total
            Region_Deaths
          }
        }
      }
      allTimeSeriesDeathsDeathsCsv {
        edges {
          node {
            Region_Deaths
          }
        }
      }
    }
  `)

  function getTotalConfirmed(edges) {
    return edges.reduce(function(a, b) {
      return a + +b.node['Region_Total']
    }, 0)
  }

  function getTotalDeaths(edges) {
    return edges.reduce(function(a, b) {
      return a + +b.node['Region_Deaths']
    }, 0)
  }

  const [logType, setLogType] = useState('linear')
  const [chartType, setChartType] = useState('column')

  const total = getTotalConfirmed(data.allTimeSeriesConfimedConfirmedCsv.edges)
  const deaths = getTotalDeaths(data.allTimeSeriesDeathsDeathsCsv.edges)
  const confirmedOptions = getOptions(
    total,
    deaths,
    logType,
    chartType,
    'confirmed'
  )
  const hospitalOptions = getOptions(
    total,
    deaths,
    logType,
    chartType,
    'hospital'
  )

  return (
    <>
      <ToggleChartButton
        chartType={chartType}
        setChartType={setChartType}
      ></ToggleChartButton>
      <ToggleLogButton type={logType} setType={setLogType}></ToggleLogButton>
      <HighchartsReact highcharts={Highcharts} options={confirmedOptions} />
      <HighchartsReact highcharts={Highcharts} options={hospitalOptions} />
    </>
  )
}

export default Chart
