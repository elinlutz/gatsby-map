import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import colors from 'assets/stylesheets/settings/_colors.scss'

import Bar from './Bar'
import TodayNumber from './TodayNumber'

const columns = [
  { id: 'region', label: 'Region', minWidth: 0, fontWeight: 'bold' },
  { id: 'total', label: 'Antal fall', minWidth: 0, align: 'center' },
  {
    id: 'today',
    label: 'Förändring idag',
    align: 'center'
  },
  {
    id: 'deaths',
    label: 'Dödsfall',
    align: 'center',
    color: `${colors.black}`,
    minWidth: 0,
    fontWeight: '800'
  }
]

function createData(region, total, population, deaths, today, hospitalized) {
  const per10k = total ? (total / population) * 10000 : undefined
  const deathsPerCase = deaths && total ? (deaths / total) * 100 : undefined

  const atHospital = hospitalized > 0 ? hospitalized : '?'

  const density = per10k ? per10k.toFixed(1) : null
  const deathRatio =
    deathsPerCase < 100 && deathsPerCase > 0
      ? deathsPerCase.toFixed(1)
      : undefined

  return { region, total, density, deathRatio, deaths, today, atHospital }
}

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: '100%'
  },
  cell: {
    overflow: 'hidden'
  }
})

const StickyHeadTable = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' && window.innerWidth < 500 ? true : false
  )

  if (!isMobile && columns.length <= 4) {
    columns.splice(
      3,
      0,
      {
        id: 'density',
        label: 'Antal fall per 10\xa0000 inv',
        align: 'center',
        color: `${colors.lightgrey}`
      },
      {
        id: 'atHospital',
        label: 'Vårdas på sjukhus',
        align: 'center',
        color: `${colors.lightgrey}`,
        maxWidth: '20em'
      },
      {
        id: 'deathRatio',
        label: 'Andel dödsfall',
        align: 'center',
        color: `${colors.lightgrey}`
      }
    )
  }

  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      allTimeSeriesConfimedConfirmedCsv {
        edges {
          node {
            id
            Display_Name
            Region_Total
            Region_Deaths
            Today
            Population
            Hospital_Total
          }
        }
      }
    }
  `)

  let rows = []

  const edges = data.allTimeSeriesConfimedConfirmedCsv.edges

  const getData = () => {
    edges.map(edge => {
      const region = edge.node
      if (
        (region.Display_Name && region.Region_Total > 0) ||
        (region.Display_Name && region.Region_Deaths > 0)
      ) {
        const today = region.Today > 0 ? region.Today : ' '
        const deaths =
          region.Region_Deaths > 0 ? `${region.Region_Deaths}` : ' '

        const newRow = createData(
          region.Display_Name,
          region.Region_Total,
          region.Population,
          deaths,
          today,
          region.Hospital_Total
        )
        rows.push(newRow)
      }
    })

    rows.sort(function(a, b) {
      return b.total - a.total
    })
  }

  getData()

  return (
    <TableContainer className={classes.container}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell
                key={column.id}
                align={column.align}
                style={{
                  maxWidth: column.maxWidth,
                  minWidth: column.minWidth,
                  fontSize: isMobile ? 8 : 10,
                  textTransform: 'uppercase',
                  paddingRight: isMobile ? 0 : 'default',
                  paddingLeft: isMobile ? 5 : 'default'
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map(column => {
                  var value = row[column.id]

                  column.id === 'deathRatio' && row[column.id] !== null
                    ? (value = <Bar value={row[column.id]}></Bar>)
                    : null

                  column.id === 'today' && row[column.id] != null
                    ? (value = (
                        <TodayNumber value={row[column.id]}></TodayNumber>
                      ))
                    : null

                  return (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        color: column.color,
                        minWidth: column.minWidth,
                        fontSize: isMobile ? 11 : 12,
                        fontWeight: column.fontWeight,
                        paddingRight: isMobile ? 0 : 'default',
                        paddingLeft: isMobile ? 5 : 'default'
                      }}
                    >
                      {value}
                    </TableCell>
                  )
                })}
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default StickyHeadTable
