import React, { useRef, useState } from 'react'
import { graphql } from 'gatsby'

import Helmet from 'react-helmet'
import L from 'leaflet'
import Button from '@material-ui/core/Button'

import { promiseToFlyTo, getCurrentLocation } from 'lib/map'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Map from 'components/Map'
import Markers from 'components/Markers'
import Counter from 'components/Counter'

import gatsby_astronaut from 'assets/images/gatsby-astronaut.jpg'

const LOCATION = {
  lat: 38.9072,
  lng: -77.0369
}

const CENTER = [LOCATION.lat, LOCATION.lng]
const DEFAULT_ZOOM = 2
const ZOOM = 10

const timeToZoom = 2000
const timeToOpenPopupAfterZoom = 4000
const timeToUpdatePopupAfterZoom = timeToOpenPopupAfterZoom + 3000

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

    const location = await getCurrentLocation().catch(() => LOCATION)

    const { current = {} } = markerRef || {}
    const { leafletElement: marker } = current

    // marker.setLatLng( location )
    popup.setLatLng(location)
    // popup.setContent(popupContentHello)
  }

  const mapSettings = {
    center: [57.6, 15],
    defaultBaseMap: 'OpenStreetMap',
    zoom: 4.5,
    mapEffect
  }

  const [unit, setUnit] = useState(null)

  function onClick(unit) {
    setUnit(unit)
  }

  function UnitContent() {
    return (
      <>
        <h2>{unit.city}</h2>
        <p className="details">
          Coronaviruset i {unit.city}, {unit.region}
        </p>
        <p className="numbers">
          Bekräftade fall: <b>{unit.confirmed}</b> st
          <br />
          Misstänkta fall: <b>{unit.suspect}</b> st
          <br />
        </p>
        <p className="note">Uppdaterat den {unit.updatedAt} </p>
        <Button className="sourceBtn">
          <a className="sourceLink" href={unit.source} target="_blank">
            källa
          </a>
        </Button>
      </>
    )
  }

  return (
    <Layout pageName="home">
      <Helmet>
        <title>Coronavirus Sverige</title>
      </Helmet>

      <Map {...mapSettings}>
        <Markers onClick={onClick} />
      </Map>

      <Container className="home-start">
        <Container className="flex-container">
          <Container className="flex-item-counter">
            <Counter
              confirmed={data.coronaCsv.Confirmed_Cases}
              suspected={data.coronaCsv.Suspect_Cases}
            ></Counter>
          </Container>

          <Container className="flex-item-info">
            {unit ? (
              <>
                <UnitContent />
              </>
            ) : (
              <p> </p>
            )}
          </Container>
        </Container>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    coronaCsv {
      Confirmed_Cases
      Suspect_Cases
    }
  }
`

export default IndexPage
