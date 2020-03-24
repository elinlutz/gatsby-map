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

import CounterSweden from 'components/cards/CounterSweden'
import CounterWorld from 'components/cards/CounterWorld'
import DetailsCounter from 'components/cards/DetailsCounter'
import NoDetailsCounter from 'components/cards/NoDetailsCounter'

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

  function onClickDeaths(region) {
    setRegion(region)
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
            ? getTotal(data.allTidsserieCsv.edges, 'Region_Total')
            : country.Confirmed
        }
        deaths={
          country.Country_Region == 'Sweden'
            ? getTotal(data.allTidsserieCsv.edges, 'Region_Deaths')
            : country.Deaths
        }
      ></DetailsCounter>
    )
  }

  function RegionContent() {
    console.log(region.Hospital_Total)
    return (
      <DetailsCounter
        title={region.Display_Name}
        provinceState={region.Region}
        view={view}
        number={region.Region_Total}
        deaths={region.Region_Deaths}
        hospitalized={region.Hospital_Total}
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
        ) : (
          <WorldMarkers onClick={onClickCountry} ref={markerRef} />
        )}
        <div className="switchContainer">
          <ToggleViewButton
            className="toggleViewButton"
            setView={setView}
            setRegion={setRegion}
            setCountry={setCountry}
            view={view}
          />
        </div>
        <Container className="mapbox">
          <Container className="mapboxContainer">
            {view === 'sweden' ? (
              <CounterSweden
                view={view}
                number={getTotal(data.allTidsserieCsv.edges, 'Region_Total')}
                deathNumber={getTotal(
                  data.allTidsserieCsv.edges,
                  'Region_Deaths'
                )}
                hospitalized={getTotal(
                  data.allTidsserieCsv.edges,
                  'Hospital_Total'
                )}
              ></CounterSweden>
            ) : (
              <CounterWorld
                view={view}
                number={getTotal(data.allWorldCsv.edges, 'Confirmed')}
                deathNumber={getTotal(data.allWorldCsv.edges, 'Deaths')}
              ></CounterWorld>
            )}

            <Container className="info">
              {region || country ? (
                <div className="info-content">
                  {region ? <RegionContent /> : <CountryContent />}
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
    allTidsserieCsv {
      edges {
        node {
          Region_Total
          Region_Deaths
          Hospital_Total
        }
      }
    }
    allWorldCsv {
      edges {
        node {
          Confirmed
          Deaths
        }
      }
    }
  }
`

export default IndexPage
