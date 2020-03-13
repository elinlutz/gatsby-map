import React, { useEffect } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { red } from '@material-ui/core/colors'

import colors from 'assets/stylesheets/settings/_colors.scss'

const columns = [
  { id: 'region', label: 'Region', minWidth: 60, fontWeight: 'bold' },
  { id: 'total', label: 'Antal fall', minWidth: 10, align: 'center' },
  {
    id: 'today',
    label: 'Dagens förändring',
    minWidth: 10,
    align: 'center',
    color: `${colors.red}`
  },
  {
    id: 'density',
    label: 'Antal fall per 100\xa0000',
    minWidth: 10,
    align: 'center',
    color: `${colors.gray}`
  },

  {
    id: 'deaths',
    label: 'Antal dödsfall',
    minWidth: 10,
    align: 'center'
  }
]

function createData(region, total, population, deaths, today) {
  const perHundredK = (total / population) * 100000
  const density = perHundredK.toFixed(1)
  return { region, total, density, deaths, today }
}

const useStyles = makeStyles({
  root: {
    width: '100%'
  }
})

export default function StickyHeadTable() {
  useEffect(() => {})
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query {
      allTidsserieCsv {
        edges {
          node {
            id
            Display_Name
            Region_Total
            Region_Deaths
            Population
            Today
          }
        }
      }
    }
  `)

  let rows = []

  const edges = data.allTidsserieCsv.edges

  const getData = () => {
    edges.map(edge => {
      const region = edge.node
      if (region.Region_Total > 0) {
        const today = region.Today > 0 ? `+ ${region.Today}` : ' '
        const deaths =
          region.Region_Deaths > 0 ? `${region.Region_Deaths}` : ' '

        const newRow = createData(
          region.Display_Name,
          region.Region_Total,
          region.Population,
          deaths,
          today
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
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{
                    minWidth: column.minWidth,
                    fontSize: 8,
                    textTransform: 'uppercase'
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
                    const value = row[column.id]
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          color: column.color,
                          minWidth: column.minWidth,
                          fontSize: 12,
                          fontWeight: column.fontWeight
                        }}
                      >
                        {column.format && typeof value === 'string'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  )
}
