import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import StickyHeadTable from 'components/StickyHeadTable'
import Layout from 'components/Layout'
import Container from 'components/Container'
import SEO from '../components/SEO'

import MiniChart from '../components/chart/MiniChart'
import DeathsChart from '../components/chart/DeathsChart'

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
            <h1>
              {
                data.allTimeSeriesConfimedConfirmedCsv.edges[0].node
                  .Display_Name
              }
            </h1>

            <h2>
              Totala fall{' '}
              {
                data.allTimeSeriesConfimedConfirmedCsv.edges[0].node
                  .Region_Total
              }
            </h2>
            <h2>
              Dödsfall{' '}
              {
                data.allTimeSeriesConfimedConfirmedCsv.edges[0].node
                  .Region_Deaths
              }
            </h2>
            <h2>
              På avdelning{' '}
              {data.allTimeSeriesConfimedConfirmedCsv.edges[0].node.At_Hospital}
            </h2>
            <h2>
              På intensivvård{' '}
              {data.allTimeSeriesConfimedConfirmedCsv.edges[0].node.At_ICU}
            </h2>
            <h2>
              På sjukhus totalt{' '}
              {
                data.allTimeSeriesConfimedConfirmedCsv.edges[0].node
                  .Hospital_Total
              }
            </h2>
            <MiniChart
              tableData={data.timeSeriesConfimedConfirmedCsv}
            ></MiniChart>
            <DeathsChart
              tableData={data.timeSeriesDeathsDeathsCsv}
            ></DeathsChart>
            <p className="updatedAt">Uppdaterat {data.site.buildTimeZone}</p>
          </Container>
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
    allTimeSeriesConfimedConfirmedCsv(
      filter: { Display_Name: { eq: $region } }
    ) {
      edges {
        node {
          Display_Name
          Region_Total
          Region_Deaths
          At_Hospital
          At_ICU
          Hospital_Total
        }
      }
    }
    timeSeriesConfimedConfirmedCsv(Display_Name: { eq: $region }) {
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
    timeSeriesDeathsDeathsCsv(Display_Name: { eq: $region }) {
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
