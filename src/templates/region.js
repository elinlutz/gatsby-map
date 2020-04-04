import React from 'react'
import Helmet from 'react-helmet'

import { graphql } from 'gatsby'

import StickyHeadTable from 'components/StickyHeadTable'
import Layout from 'components/Layout'
import Container from 'components/Container'
import SEO from '../components/SEO'

import MiniChart from '../components/chart/MiniChart'
import DeathsChart from '../components/chart/DeathsChart'

import styled from 'styled-components'
import colors from 'assets/stylesheets/settings/_colors.scss'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.bar};
  align-items: center;
  border-radius: 2px;
  transition: border-radius 0.5s;
  padding: 1em;
  margin-top: 0.5em;
  flex-grow: 1;
`

const Title = styled.div`
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Description = styled.div`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
`

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2em;
  margin-bottom: 3em;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`

const RegionPage = ({ data }) => {
  return (
    <Layout pageName="tabell">
      <Container className="main">
        <Helmet>
          <SEO />
          <title>
            Coronakartan: Coronaviruset i Sverige -{' '}
            {data.allTimeSeriesConfimedConfirmedCsv.edges[0].node.Display_Name}
          </title>
        </Helmet>
        <Container type="table">
          <Container type="table-content">
            <h1>
              {data.allTimeSeriesConfimedConfirmedCsv.edges[0].node.Region}
            </h1>

            <CardContainer>
              <Card>
                <Title>
                  {
                    data.allTimeSeriesConfimedConfirmedCsv.edges[0].node
                      .Region_Total
                  }
                </Title>
                <Description>Bekräftade fall</Description>
              </Card>

              <Card>
                <Title>
                  {
                    data.allTimeSeriesConfimedConfirmedCsv.edges[0].node
                      .Hospital_Total
                  }
                </Title>
                <Description> På sjukhus</Description>
              </Card>

              <Card>
                <Title>
                  {data.allTimeSeriesConfimedConfirmedCsv.edges[0].node.At_ICU}
                </Title>
                <Description>Får intensivvård </Description>
              </Card>
              <Card>
                <Title>
                  {
                    data.allTimeSeriesConfimedConfirmedCsv.edges[0].node
                      .Region_Deaths
                  }
                </Title>
                <Description> Dödsfall </Description>
              </Card>
            </CardContainer>

            {/* <h2>
              På avdelning{' '}
              {data.allTimeSeriesConfimedConfirmedCsv.edges[0].node.At_Hospital}
            </h2>
            <h2>
              På intensivvård{' '}
              {data.allTimeSeriesConfimedConfirmedCsv.edges[0].node.At_ICU}
            </h2> */}
            <MiniChart
              tableData={data.timeSeriesConfimedConfirmedCsv}
            ></MiniChart>
            <DeathsChart
              tableData={data.timeSeriesDeathsDeathsCsv}
            ></DeathsChart>
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
          Region
          Region_Total
          Region_Deaths
          At_Hospital
          At_ICU
          Hospital_Total
        }
      }
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
      _2020_03_13
      _2020_03_14
      _2020_03_15
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
      _2020_04_02
      _2020_04_03
      Today
    }
    timeSeriesDeathsDeathsCsv(Display_Name: { eq: $region }) {
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
      _2020_03_13
      _2020_03_14
      _2020_03_15
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
      _2020_04_02
      _2020_04_03
      Today
    }
  }
`

export default RegionPage
