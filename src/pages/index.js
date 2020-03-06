import React, { useRef, useState, useEffect } from 'react'
import { graphql } from 'gatsby'

import Helmet from 'react-helmet'
import L from 'leaflet'
import Button from '@material-ui/core/Button'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Map from 'components/Map'
import Markers from 'components/Markers'
import WorldMarkers from 'components/WorldMarkers'

import Counter from 'components/Counter'
import CounterSweden from 'components/CounterSweden'
import CounterWorld from 'components/CounterWorld'

import DetailsCounter from 'components/DetailsCounter'
import NoDetailsCounter from 'components/NoDetailsCounter'

import ToggleViewButton from 'components/ToggleViewButton'

import CoronaImage from 'assets/icons/corona.png'

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

  const mapSettings = {
    center: [58, 15],
    defaultBaseMap: 'OpenStreetMap',
    zoom: 5,
    mapEffect
  }

  const [region, setRegion] = useState(null)
  const [country, setCountry] = useState(null)
  const [view, setView] = useState('sweden')

  useEffect(() => {
    setView(view)
  })

  function onClickRegion(region) {
    setRegion(region)
  }

  function onClickCountry(country) {
    setCountry(country)
  }

  function CountryContent() {
    return (
      <DetailsCounter
        type={'details'}
        title={country.Country_Region}
        provinceState={country.Province_State}
        view={view}
        number={
          country.Country_Region == 'Sweden'
            ? getTotalConfirmed(data.allTidsserieCsv.edges, 'Region_Total')
            : country.Confirmed
        }
      ></DetailsCounter>
    )
  }

  function RegionContent() {
    return (
      <DetailsCounter
        type={'details'}
        title={region.Display_Name}
        provinceState={region.Region}
        view={view}
        number={region.Region_Total}
      ></DetailsCounter>
    )
  }

  function getTotalConfirmed(edges, prop) {
    return edges.reduce(function(a, b) {
      return a + +b.node[prop]
    }, 0)
  }

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Coronaviruset i Sverige - Karta</title>
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
          <Markers onClick={onClickRegion} ref={markerRef} />
        ) : (
          <WorldMarkers onClick={onClickCountry} ref={markerRef} />
        )}
        <Container className="mapbox">
          <Container className="mapboxContainer">
            <div className="switchContainer">
              <ToggleViewButton
                className="toggleViewButton"
                setView={setView}
                setRegion={setRegion}
                setCountry={setCountry}
                view={view}
              />
            </div>
            {view === 'sweden' ? (
              <CounterSweden
                view={view}
                number={getTotalConfirmed(
                  data.allTidsserieCsv.edges,
                  'Region_Total'
                )}
              ></CounterSweden>
            ) : (
              <CounterWorld
                view={view}
                number={getTotalConfirmed(data.allWorldCsv.edges, 'Confirmed')}
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
        }
      }
    }
    allWorldCsv {
      edges {
        node {
          Confirmed
        }
      }
    }
  }
`

export default IndexPage
