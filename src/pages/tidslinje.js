import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Chart from 'components/chart/Chart'
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
        <Container type="chart">
          <h1>Utveckling</h1>
          <p className="updatedAt">Uppdaterat {data.site.buildTimeZone}</p>
          <Chart className="chart" />
        </Container>
        <Container type="card" className="container">
          <p>
            Folkhälsomyndigheten rekommenderar att bara personer som är i behov
            av sjukhusvård ska provtas. Detta påverkar statistiken på antalet
            bekräftade fall från och med 12 mars (markerade linjen).
            <br />
          </p>
        </Container>
        <Container type="timeline">
          <h1>Tidslinje</h1>
          <Timeline></Timeline>
        </Container>
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
