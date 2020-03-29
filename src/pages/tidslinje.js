import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Chart from 'components/chart/Chart'
import SEO from '../components/SEO'

import Timeline from '../data/Timeline'

const Development = ({ data }) => {
  const [render, setRender] = useState(false)
  useEffect(() => setRender(true), [])

  return (
    render && (
      <Layout pageName="tidslinje">
        <SEO />
        <Helmet>
          <title>Coronakartan: Coronaviruset i Sverige - Tidslinje </title>
          <meta
            name="description"
            content={
              'Följ utvecklingen av det nya coronaviruset COVID-19 i Sverige dag för dag'
            }
          />
          <link rel="canonical" href="https://www.coronakartan.se/tidslinje" />
        </Helmet>

        <Container type="timeline-content" className="text">
          <h1>Utveckling</h1>

          <Container type="chart">
            <Chart className="chart" />
          </Container>
          {/* <p className="updatedAt">Uppdaterat {data.site.buildTimeZone}</p> */}
          <Container type="timeline">
            <h1>Tidslinje</h1>
            <Timeline></Timeline>
          </Container>
        </Container>
      </Layout>
    )
  )
}

export const query = graphql`
  query {
    site {
      buildTimeZone
    }
  }
`

export default Development
