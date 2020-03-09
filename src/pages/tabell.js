import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import StickyHeadTable from 'components/StickyHeadTable'
import Layout from 'components/Layout'
import Container from 'components/Container'

const Tabell = ({ data }) => {
  return (
    <Layout pageName="tabell">
      <Helmet>
        <title>Coronaviruset i Sverige - Tabell</title>
        <meta
          name="description"
          content={
            'Karta över rapporterade fall av coronaviruset COVID-19 och virusets spridning i Sverige'
          }
        />
        <link rel="canonical" href="https://www.coronakartan.se/" />
      </Helmet>
      <Container>
        <Container type="table">
          <h1>Antal fall per region</h1>
          <p className="updatedAt">Uppdaterat {data.site.buildTimeZone}</p>
        </Container>
        <Container type="table">
          <StickyHeadTable></StickyHeadTable>
        </Container>
      </Container>
    </Layout>
  )
}

export const data = graphql`
  query {
    site {
      buildTimeZone
    }
  }
`

export default Tabell
