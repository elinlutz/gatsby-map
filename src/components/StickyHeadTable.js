import React, { useEffect, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import colors from 'assets/stylesheets/settings/_colors.scss'

const columns = [
  { id: 'region', label: 'Region', minWidth: 0, fontWeight: 'bold' },
  { id: 'total', label: 'Antal fall', minWidth: 0, align: 'center' },
  {
    id: 'today',
    label: 'Förändring idag',
    align: 'center',
    color: `${colors.red}`
  },
  {
    id: 'deaths',
    label: 'Dödsfall',
    align: 'center',
    color: `${colors.black}`,
    minWidth: 0
  }
]

function createData(region, total, population, deaths, today) {
  const perHundredK = (total / population) * 100000
  const density = perHundredK ? perHundredK.toFixed(1) : null
  return { region, total, density, deaths, today }
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
<<<<<<< HEAD
    typeof window !== 'undefined' && window.innerWidth < 500 ? true : false
=======
    window.innerWidth < 500 ? true : false
>>>>>>> 5dc6622e65f7f7d4f8b0d76398b85b5ac72c895d
  )

  if (!isMobile && columns.length <= 4) {
    columns.splice(2, 0, {
      id: 'density',
      label: 'Antal fall per 100\xa0000',
      align: 'center',
      color: `${colors.lightgrey}`
    })
  }

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
      if (region.Region_Total > 0 || region.Region_Deaths > 0) {
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
                    const value = row[column.id]
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

export default StickyHeadTable
