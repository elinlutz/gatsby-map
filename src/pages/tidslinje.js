import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Chart from 'components/Chart'
import SEO from '../components/SEO'

import Timeline from '../data/Timeline'

const Blog = ({ data }) => {
  return (
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
        <Container type="card" className="container">
          <h2>📉 En liten uppdatering</h2>
          <p>
            Folkhälsomyndigheten rekommenderar nu att bara personer som är i
            behov av sjukhusvård ska provtas. Detta kommer att påverka
            statistiken och utvecklingen av antal bekräftade fall markant, från
            och med den 12:e mars.
            <br />
          </p>
        </Container>
        <Container type="chart">
          <br />
          <h1>Utveckling</h1>

          <p className="updatedAt">Uppdaterat {data.site.buildTimeZone}</p>

          <Chart />
        </Container>
        <Container type="timeline">
          <h1>Tidslinje</h1>
          <Timeline></Timeline>
        </Container>
        <br />
        <br />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      buildTimeZone
    }
  }
`

export default Blog
