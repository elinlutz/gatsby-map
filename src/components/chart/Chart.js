import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { useStaticQuery, graphql } from 'gatsby'

import ToggleLogButton from './ToggleLogButton'
import colors from 'assets/stylesheets/settings/_colors.scss'
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
    tickInterval: log === 'logarithmic' ? 1 : chart == 'hospital' ? 25 : 250,
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
            name: 'Rapporterade fall totalt',
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
              ['27 Mars 2020', 3069],
              ['28 Mars 2020', 3460],
              ['29 Mars 2020', 3719],
              ['30 Mars 2020', 4113],
              ['31 Mars 2020', 4525],
              ['1 April 2020', 5009],
              ['2 April 2020', 5567],
              ['3 April 2020', 6127],
              ['4 April 2020', 6561],
              ['5 April 2020', 6988],
              ['6 April 2020', 7340],
              ['7 April 2020', 7837],
              ['8 April 2020', 8570],
              ['9 April 2020', 9253],
              ['10 April 2020', 9786],
              ['11 April 2020', 10302],
              ['12 April 2020', 10648],
              ['13 April 2020', 11047],
              ['14 April 2020', 11551],
              ['15 April 2020', 12039],
              ['16 April 2020', 12704],
              ['17 April 2020', 13337],
              ['18 April 2020', 13989],
              ['19 April 2020', 14510],
              ['20 April 2020', 14874],
              ['21 April 2020', 15373],
              ['22 April 2020', 16091],
              ['23 April 2020', 16834],
              ['24 April 2020', 17678],
              ['25 April 2020', 18273],
              ['26 April 2020', 18759],
              ['27 April 2020', 19034],
              ['28 April 2020', 19741],
              ['29 April 2020', 20387],
              ['30 April 2020', 21191],
              ['1 Maj 2020', 21638],
              ['2 Maj 2020', 22169],
              ['3 Maj 2020', 22419],
              ['4 Maj 2020', 22789],
              ['5 Maj 2020', 23328],
              ['6 Maj 2020', 24019],
              ['7 Maj 2020', 24730],
              ['8 Maj 2020', 25397],
              ['9 Maj 2020', 25983],
              ['10 Maj 2020', 26401],
              ['11 Maj 2020', 26794],
              ['12 Maj 2020', 27375],
              ['13 Maj 2020', 28016],
              ['14 Maj 2020', 28693],
              ['15 Maj 2020', 29351],
              ['16 Maj 2020', 29808],
              ['17 Maj 2020', 30231],
              ['18 Maj 2020', 30495],
              ['19 Maj 2020', 30942],
              ['20 Maj 2020', 31680],
              ['21 Maj 2020', 32256],
              ['22 Maj 2020', 32948],
              ['23 Maj 2020', 33276],
              ['24 Maj 2020', 33576],
              ['25 Maj 2020', 34025],
              ['26 Maj 2020', 34604],
              ['27 Maj 2020', 35288],
              ['28 Maj 2020', 35903],
              ['29 Maj 2020', 36673],
              ['30 Maj 2020', 37303],
              ['31 Maj 2020', 37730],
              ['1 Juni 2020', 38099],
              ['2 Juni 2020', total]
            ],
            type: `${chartType}`,
            color: colors.sweden,
            marker: {
              enabled: false,
              symbol: 'none'
            }
          },
          {
            name: 'Rapporterade fall per dag',
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
              ['27 Mars 2020', 214],
              ['28 Mars 2020', 391],
              ['29 Mars 2020', 259],
              ['30 Mars 2020', 394],
              ['31 Mars 2020', 412],
              ['1 April 2020', 484],
              ['2 April 2020', 558],
              ['3 April 2020', 560],
              ['4 April 2020', 434],
              ['5 April 2020', 427],
              ['6 April 2020', 352],
              ['7 April 2020', 497],
              ['8 April 2020', 733],
              ['9 April 2020', 683],
              ['10 April 2020', 533],
              ['11 April 2020', 516],
              ['12 April 2020', 346],
              ['13 April 2020', 399],
              ['14 April 2020', 504],
              ['15 April 2020', 488],
              ['16 April 2020', 665],
              ['17 April 2020', 633],
              ['18 April 2020', 652],
              ['19 April 2020', 521],
              ['20 April 2020', 364],
              ['21 April 2020', 499],
              ['22 April 2020', 718],
              ['23 April 2020', 743],
              ['24 April 2020', 844],
              ['25 April 2020', 595],
              ['26 April 2020', 486],
              ['27 April 2020', 275],
              ['28 April 2020', 707],
              ['29 April 2020', 646],
              ['30 April 2020', 804],
              ['1 Maj 2020', 447],
              ['2 Maj 2020', 531],
              ['3 Maj 2020', 250],
              ['4 Maj 2020', 370],
              ['5 Maj 2020', 539],
              ['6 Maj 2020', 691],
              ['7 Maj 2020', 711],
              ['8 Maj 2020', 667],
              ['9 Maj 2020', 586],
              ['10 Maj 2020', 418],
              ['11 Maj 2020', 393],
              ['12 Maj 2020', 581],
              ['13 Maj 2020', 641],
              ['14 Maj 2020', 677],
              ['15 Maj 2020', 658],
              ['16 Maj 2020', 457],
              ['17 Maj 2020', 423],
              ['18 Maj 2020', 264],
              ['19 Maj 2020', 447],
              ['20 Maj 2020', 738],
              ['21 Maj 2020', 576],
              ['22 Maj 2020', 692],
              ['23 Maj 2020', 328],
              ['24 Maj 2020', 300],
              ['25 Maj 2020', 449],
              ['26 Maj 2020', 579],
              ['27 Maj 2020', 684],
              ['28 Maj 2020', 615],
              ['29 Maj 2020', 770],
              ['30 Maj 2020', 630],
              ['31 Maj 2020', 427],
              ['1 Juni 2020', 369],
              ['2 Juni 2020', total - 38099]
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
            name: 'Rapporterade dödsfall totalt',
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
              ['27 Mars 2020', 105],
              ['28 Mars 2020', 112],
              ['29 Mars 2020', 123],
              ['30 Mars 2020', 165],
              ['31 Mars 2020', 198],
              ['1 April 2020', 259],
              ['2 April 2020', 307],
              ['3 April 2020', 358],
              ['4 April 2020', 391],
              ['5 April 2020', 428],
              ['6 April 2020', 506],
              ['7 April 2020', 618],
              ['8 April 2020', 696],
              ['9 April 2020', 811],
              ['10 April 2020', 881],
              ['11 April 2020', 901],
              ['12 April 2020', 919],
              ['13 April 2020', 951],
              ['14 April 2020', 1085],
              ['15 April 2020', 1224],
              ['16 April 2020', 1360],
              ['17 April 2020', 1446],
              ['18 April 2020', 1555],
              ['19 April 2020', 1583],
              ['20 April 2020', 1640],
              ['21 April 2020', 1802],
              ['22 April 2020', 1939],
              ['23 April 2020', 2035],
              ['24 April 2020', 2157],
              ['25 April 2020', 2200],
              ['26 April 2020', 2206],
              ['27 April 2020', 2289],
              ['28 April 2020', 2380],
              ['29 April 2020', 2472],
              ['30 April 2020', 2603],
              ['1 Maj 2020', 2667],
              ['2 Maj 2020', 2685],
              ['3 Maj 2020', 2697],
              ['4 Maj 2020', 2785],
              ['5 Maj 2020', 2875],
              ['6 Maj 2020', 2959],
              ['7 Maj 2020', 3053],
              ['8 Maj 2020', 3187],
              ['9 Maj 2020', 3226],
              ['10 Maj 2020', 3238],
              ['11 Maj 2020', 3276],
              ['12 Maj 2020', 3343],
              ['13 Maj 2020', 3477],
              ['14 Maj 2020', 3550],
              ['15 Maj 2020', 3672],
              ['16 Maj 2020', 3688],
              ['17 Maj 2020', 3693],
              ['18 Maj 2020', 3720],
              ['19 Maj 2020', 3783],
              ['20 Maj 2020', 3857],
              ['21 Maj 2020', 3895],
              ['22 Maj 2020', 3956],
              ['23 Maj 2020', 4024],
              ['24 Maj 2020', 4028],
              ['25 Maj 2020', 4063],
              ['26 Maj 2020', 4143],
              ['27 Maj 2020', 4241],
              ['28 Maj 2020', 4289],
              ['29 Maj 2020', 4341],
              ['30 Maj 2020', 4409],
              ['31 Maj 2020', 4416],
              ['1 Juni 2020', 4434],
              ['2 Juni 2020', deaths]
            ],
            color: colors.black,
            type: `${chartType}`,
            marker: {
              enabled: false,
              symbol: 'none'
            }
          },
          {
            name: 'Rapporterade dödsfall per dag',
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
              ['25 Mars 2020', 23],
              ['26 Mars 2020', 15],
              ['27 Mars 2020', 27],
              ['28 Mars 2020', 7],
              ['29 Mars 2020', 11],
              ['30 Mars 2020', 42],
              ['31 Mars 2020', 33],
              ['1 April 2020', 61],
              ['2 April 2020', 48],
              ['3 April 2020', 51],
              ['4 April 2020', 33],
              ['5 April 2020', 37],
              ['6 April 2020', 78],
              ['7 April 2020', 112],
              ['8 April 2020', 78],
              ['9 April 2020', 115],
              ['10 April 2020', 70],
              ['11 April 2020', 20],
              ['12 April 2020', 18],
              ['13 April 2020', 32],
              ['14 April 2020', 134],
              ['15 April 2020', 139],
              ['16 April 2020', 136],
              ['17 April 2020', 86],
              ['18 April 2020', 109],
              ['19 April 2020', 28],
              ['20 April 2020', 57],
              ['21 April 2020', 162],
              ['22 April 2020', 137],
              ['23 April 2020', 96],
              ['24 April 2020', 122],
              ['25 April 2020', 43],
              ['26 April 2020', 6],
              ['27 April 2020', 83],
              ['28 April 2020', 91],
              ['29 April 2020', 92],
              ['30 April 2020', 131],
              ['1 Maj 2020', 64],
              ['2 Maj 2020', 18],
              ['3 Maj 2020', 12],
              ['4 Maj 2020', 88],
              ['5 Maj 2020', 90],
              ['6 Maj 2020', 84],
              ['7 Maj 2020', 94],
              ['8 Maj 2020', 134],
              ['9 Maj 2020', 39],
              ['10 Maj 2020', 12],
              ['11 Maj 2020', 38],
              ['12 Maj 2020', 67],
              ['13 Maj 2020', 134],
              ['14 Maj 2020', 73],
              ['15 Maj 2020', 122],
              ['16 Maj 2020', 16],
              ['17 Maj 2020', 5],
              ['18 Maj 2020', 27],
              ['19 Maj 2020', 63],
              ['20 Maj 2020', 74],
              ['21 Maj 2020', 38],
              ['22 Maj 2020', 61],
              ['23 Maj 2020', 68],
              ['24 Maj 2020', 4],
              ['25 Maj 2020', 35],
              ['26 Maj 2020', 80],
              ['27 Maj 2020', 98],
              ['28 Maj 2020', 48],
              ['29 Maj 2020', 52],
              ['30 Maj 2020', 68],
              ['31 Maj 2020', 7],
              ['1 Juni 2020', 18],
              ['2 Juni 2020', deaths - 4434]
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
