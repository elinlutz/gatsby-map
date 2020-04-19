import React, { useRef, useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import Helmet from 'react-helmet'
import L from 'leaflet'
import Button from '@material-ui/core/Button'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Map from 'components/Map'

import Markers from 'components/markers/Markers'
import WorldMarkers from 'components/markers/WorldMarkers'
import InitiativeMarkers from 'components/markers/InitiativeMarkers'

import CounterSweden from 'components/cards/CounterSweden'
import CounterWorld from 'components/cards/CounterWorld'
import CounterInitiatives from 'components/cards/CounterInitiatives'

import DetailsCounter from 'components/cards/DetailsCounter'
import NoDetailsCounter from 'components/cards/NoDetailsCounter'
import InitiativeDetails from 'components/cards/InitiativeDetails'

import ToggleViewButton from 'components/ToggleViewButton'

import CoronaImage from 'assets/icons/corona.png'
import SEO from '../components/SEO'

const SourceButton = ({ url }) => {
  return (
    <Button className="sourceBtn">
      <a
        style={{ display: 'table-cell' }}
        className="sourceLink"
        href={url}
        target="_blank"
      >
        <span>Data</span>
      </a>
    </Button>
  )
}

const IndexPage = ({ data }) => {
  const markerRef = useRef()

  /**
   * mapEffect
   * @description Fires a callback once the page renders
   * @example Here this is and example of being used to zoom in and set a popup on load
   */

  async function mapEffect({ leafletElement } = {}) {
    if (!leafletElement) return

    const popup = L.popup({
      maxWidth: 800
    })

    const { current = {} } = markerRef || {}
    const { leafletElement: marker } = current
  }

  const [region, setRegion] = useState(null)
  const [country, setCountry] = useState(null)
  const [initiative, setInitiative] = useState(null)
  const [view, setView] = useState('sweden')
  const [mapCenter, setMapCenter] = useState({ center: [58, 15], zoom: 5 })

  const mapSettings = {
    center: mapCenter.center,
    defaultBaseMap: 'OpenStreetMap',
    zoom: mapCenter.zoom,
    mapEffect
  }

  useEffect(() => {
    setView(view)
  })

  function onClickRegion(region) {
    setRegion(region)
  }

  function onClickInitiative(initiative) {
    setInitiative(initiative)
  }

  function onClickCountry(country) {
    setCountry(country)
  }

  function CountryContent() {
    return (
      <DetailsCounter
        title={country.Country_Region}
        provinceState={country.Province_State}
        view={view}
        number={
          country.Country_Region == 'Sweden'
            ? getTotal(
                data.allTimeSeriesConfimedConfirmedCsv.edges,
                'Region_Total'
              )
            : country.Confirmed
        }
        deaths={
          country.Country_Region == 'Sweden'
            ? getTotal(data.allTimeSeriesDeathsDeathsCsv.edges, 'Region_Deaths')
            : country.Deaths
        }
        recovered={country.Recovered}
        deathsPer100k={
          country.Country_Region == 'Sweden'
            ? (
                (getTotal(
                  data.allTimeSeriesDeathsDeathsCsv.edges,
                  'Region_Deaths'
                ) /
                  10175214) *
                100000
              ).toFixed(0)
            : country.deathsPer100k
        }
      ></DetailsCounter>
    )
  }

  const InitiativeContent = () => {
    console.log(initiative)
    return <InitiativeDetails initiative={initiative}></InitiativeDetails>
  }

  const RegionContent = () => {
    return (
      <DetailsCounter
        title={region.Display_Name}
        view={view}
        number={region.Region_Total}
        deaths={region.Region_Deaths}
        hospitalized={region.Hospital_Total}
        deathsPer100k={region.deathsPer100k}
      ></DetailsCounter>
    )
  }

  function getTotal(edges, prop) {
    return edges.reduce(function(a, b) {
      return a + +b.node[prop]
    }, 0)
  }

  return (
    <Layout pageName="home">
      <SEO />
      <Helmet>
        <title>Coronakartan: Coronaviruset i Sverige - Karta</title>
        <meta
          name="description"
          content={
            'Karta över rapporterade fall av coronaviruset COVID-19 och virusets spridning i Sverige'
          }
        />
        <meta name="image" content={CoronaImage} />
        <link rel="canonical" href="https://www.coronakartan.se/" />
      </Helmet>

      <Map {...mapSettings}>
        {view === 'sweden' ? (
          <>
            <Markers onClick={onClickRegion} ref={markerRef} />
            {/* <DeathMarkers onClick={onClickDeaths} /> */}
          </>
        ) : view === 'world' ? (
          <WorldMarkers onClick={onClickCountry} ref={markerRef} />
        ) : (
          <InitiativeMarkers onClick={onClickInitiative} ref={markerRef} />
        )}
        <div className="switchContainer">
          <ToggleViewButton
            className="toggleViewButton"
            setView={setView}
            setRegion={setRegion}
            setCountry={setCountry}
            setInitiative={setInitiative}
            view={view}
          />
        </div>
        <Container className="mapbox">
          <Container className="mapboxContainer">
            {view === 'sweden' ? (
              <CounterSweden
                view={view}
                number={getTotal(
                  data.allTimeSeriesConfimedConfirmedCsv.edges,
                  'Region_Total'
                )}
                deathNumber={getTotal(
                  data.allTimeSeriesDeathsDeathsCsv.edges,
                  'Region_Deaths'
                )}
                hospitalized={getTotal(
                  data.allTimeSeriesConfimedConfirmedCsv.edges,
                  'Hospital_Total'
                )}
              ></CounterSweden>
            ) : view === 'world' ? (
              <CounterWorld
                view={view}
                number={getTotal(data.allWorldCsv.edges, 'Confirmed')}
                deathNumber={getTotal(data.allWorldCsv.edges, 'Deaths')}
                recovered={getTotal(data.allWorldCsv.edges, 'Recovered')}
              ></CounterWorld>
            ) : view === 'initiatives' ? (
              <CounterInitiatives view={view} number={17}></CounterInitiatives>
            ) : null}

            <Container className="info">
              {region || country || initiative ? (
                <div className="info-content">
                  {region ? (
                    <RegionContent />
                  ) : country ? (
                    <CountryContent />
                  ) : (
                    <InitiativeContent />
                  )}
                </div>
              ) : (
                <>
                  <NoDetailsCounter />
                </>
              )}
            </Container>
          </Container>
        </Container>
      </Map>
    </Layout>
  )
}

export const query = graphql`
  query {
    allTimeSeriesConfimedConfirmedCsv {
      edges {
        node {
          Region_Total
          Region_Deaths
          Hospital_Total
        }
      }
    }
    allTimeSeriesDeathsDeathsCsv {
      edges {
        node {
          Region_Deaths
        }
      }
    }
    allWorldCsv {
      edges {
        node {
          Confirmed
          Deaths
          Recovered
        }
      }
    }
  }
`

export default IndexPage
