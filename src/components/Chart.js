import React, { useState } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { useStaticQuery, graphql } from 'gatsby'

import colors from 'assets/stylesheets/settings/_colors.scss'

const getOptions = latestTotal => ({
  title: {
    text: null
  },

  colors: [colors.blue],

  chart: {
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
    tickInterval: 50,
    title: {
      text: null
    },
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
    crosshairs: true
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
      name: 'Antal bekräftade fall totalt',
      data: [
        ['23 Februari 2020', 1],
        ['24 Februari 2020', 1],
        ['25 Februari 2020', 1],
        ['26 Februari 2020', 2],
        ['27 Februari 2020', 7],
        ['28 Februari 2020', 11],
        ['29 Februari 2020', 13],
        ['1 Mars 2020', 14],
        ['2 Mars 2020', 15],
        ['3 Mars 2020', 30],
        ['4 Mars 2020', 52],
        ['5 Mars 2020', 94],
        ['6 Mars 2020', 137],
        ['7 Mars 2020', 161],
        ['8 Mars 2020', 203],
        ['9 Mars 2020', 261],
        ['10 Mars 2020', latestTotal]
      ],
      color: colors.red
    },
    {
      name: 'Antal bekräftade fall per dag',
      data: [
        ['23 Februari 2020', 0],
        ['24 Februari 2020', 0],
        ['25 Februari 2020', 1],
        ['26 Februari 2020', 1],
        ['27 Februari 2020', 5],
        ['28 Februari 2020', 4],
        ['29 Februari 2020', 2],
        ['1 Mars 2020', 1],
        ['2 Mars 2020', 1],
        ['3 Mars 2020', 15],
        ['4 Mars 2020', 22],
        ['5 Mars 2020', 42],
        ['6 Mars 2020', 43],
        ['7 Mars 2020', 24],
        ['8 Mars 2020', 42],
        ['9 Mars 2020', 58],
        ['10 Mars 2020', latestTotal - 261]
      ],
      color: colors.blue
    }
  ]
})

const Total = () => {}

const Chart = () => {
  const data = useStaticQuery(graphql`
    query {
      allTidsserieCsv {
        edges {
          node {
            Region_Total
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

  const total = getTotalConfirmed(data.allTidsserieCsv.edges)
  const chartOptions = getOptions(total)

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />
}

export default Chart
