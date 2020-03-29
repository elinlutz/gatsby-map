import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import StickyHeadTable from 'components/StickyHeadTable'
import Layout from 'components/Layout'
import Container from 'components/Container'
import SEO from '../components/SEO'

const Tabell = ({ data }) => {
  return (
    <Layout pageName="tabell">
      <Container className="main">
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
            <h1>Tabell</h1>
            <p className="updatedAt">Uppdaterat {data.site.buildTimeZone}</p>
          </Container>
          <div className="table">
            <StickyHeadTable></StickyHeadTable>
          </div>
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
