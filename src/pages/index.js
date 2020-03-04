import React, { useRef, useState } from 'react'
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
import ToggleViewButton from 'components/ToggleViewButton'

import CoronaImage from 'assets/icons/corona.png'

const LOCATION = {
  lat: 38.9072,
  lng: -67.0369
}

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
  const [view, setView] = useState('world')

  function onClickRegion(region) {
    setRegion(region)
  }

  function onClickCountry(country) {
    setCountry(country)
  }

  function CountryContent() {
    return (
      <>
        <h3>{country.Country_Region}</h3>
        <div className="details">{country.Country_Region}</div>

        <div className="numbers">
          {country.Country_Region == 'Sweden' ? (
            <b>
              {getTotalConfirmed(data.allTidsserieCsv.edges, 'Region_Total')}
            </b>
          ) : (
            <b>{country.Confirmed}</b>
          )}
        </div>
        <div className="sources">
          <SourceButton
            url={
              'https://github.com/elinlutz/gatsby-map/blob/master/src/data/World.csv'
            }
          />
        </div>
      </>
    )
  }

  function RegionContent() {
    return (
      <>
        <h3>{region.Display_Name}</h3>
        <div className="details">{region.Region}</div>
        <div className="numbers">
          <b>{region.Region_Total}</b>
        </div>
        <div className="sources">
          <SourceButton
            url={
              'https://github.com/elinlutz/gatsby-map/blob/master/src/data/Tidsserie.csv'
            }
          />
        </div>
      </>
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
          <div className="switch">
            <ToggleViewButton className="toggleViewButton" setView={setView} />
          </div>
          <Container className="counter">
            <Counter
              className="counter"
              confirmed={
                view === 'world'
                  ? getTotalConfirmed(data.allWorldCsv.edges, 'Confirmed')
                  : getTotalConfirmed(
                      data.allTidsserieCsv.edges,
                      'Region_Total'
                    )
              }
              view={view}
              suspected={0}
            ></Counter>
          </Container>
          <Container className="info">
            {region || country ? (
              <div className="info-content">
                {region ? <RegionContent /> : <CountryContent />}
              </div>
            ) : (
              <p className="noUnitsText">Klicka på en bubbla på kartan</p>
            )}
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
