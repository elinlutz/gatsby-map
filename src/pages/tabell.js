import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import StickyHeadTable from 'components/StickyHeadTable'
import Layout from 'components/Layout'
import Container from 'components/Container'
import SEO from '../components/SEO'

import MiniChart from '../components/chart/MiniChart'

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
            <MiniChart></MiniChart>
            {/* <p className="updatedAt">Uppdaterat {data.GetRegionData.site.buildTimeZone}</p> */}
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
  query GetRegionData($region: String!) {
    site {
      buildTimeZone
    }
    timeSeriesConfimedConfirmedCsv(Display_Name: { eq: $region }) {
      _2020_02_25
      _2020_02_26
      _2020_02_27
      _2020_02_28
      _2020_02_29
      _2020_03_01
      _2020_03_02
      _2020_03_03
      _2020_03_04
      _2020_03_05
      _2020_03_06
      _2020_03_07
      _2020_03_08
      _2020_03_09
      _2020_03_10
      _2020_03_11
      _2020_03_12
      _2020_03_15
      _2020_03_13
      _2020_03_14
      _2020_03_16
      _2020_03_17
      _2020_03_18
      _2020_03_19
      _2020_03_20
      _2020_03_21
      _2020_03_22
      _2020_03_23
      _2020_03_24
      _2020_03_25
      _2020_03_26
      _2020_03_27
      _2020_03_28
      _2020_03_29
      _2020_03_30
      _2020_03_31
      _2020_04_01
      Today
    }
  }
`

export default Tabell
