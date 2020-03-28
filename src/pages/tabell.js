import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import StickyHeadTable from 'components/table/StickyHeadTable'
import Layout from 'components/Layout'
import Container from 'components/Container'
import SEO from '../components/SEO'

const Tabell = ({ data }) => {
  return (
    <Layout pageName="tabell">
      <Helmet>
        <SEO />

        <title>Coronakartan: Coronaviruset i Sverige - Tabell</title>
        <meta
          name="description"
          content={
            'Samlad statistik över regionernas antal bekräftade fall av det nya oronaviruset COVID-19 i Sverige'
          }
        />
        <link rel="canonical" href="https://www.coronakartan.se/tabell" />
      </Helmet>
      <Container type="table">
        <Container type="table-content">
          <h1>Antal bekräftade fall per region</h1>
          <p className="updatedAt">Uppdaterat {data.site.buildTimeZone}</p>
        </Container>
        <div className="table">
          <StickyHeadTable></StickyHeadTable>
        </div>
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
