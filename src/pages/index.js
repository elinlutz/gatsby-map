import React, { useRef, useState } from 'react'
import Helmet from 'react-helmet'
import L from 'leaflet'
//import { Marker } from 'react-leaflet'

import { promiseToFlyTo, getCurrentLocation } from 'lib/map'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Map from 'components/Map'
import Markers from 'components/Markers'
import Comment from 'components/Comment'

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

const popupContentHello = `<p>Hello 👋</p>`
const popupContentGatsby = `
  <div class="popup-gatsby">
    <div class="popup-gatsby-image">
      <img class="gatsby-astronaut" src=${gatsby_astronaut} />
    </div>
    <div class="popup-gatsby-content">
      <h1>Gatsby Leaflet</h1>
      <p>Welcome to your new Gatsby site. Now go build something great!</p>
    </div>
  </div>
`

const IndexPage = () => {
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
    popup.setContent(popupContentHello)

    // setTimeout( async () => {
    //   await promiseToFlyTo( leafletElement, {
    //     zoom: ZOOM,
    //     center: location
    //   })

    //   // marker.bindPopup( popup )

    //   setTimeout(() => marker.openPopup(), timeToOpenPopupAfterZoom )
    //   setTimeout(() => marker.setPopupContent( popupContentGatsby ), timeToUpdatePopupAfterZoom )
    // }, timeToZoom )
  }

  const mapSettings = {
    center: [56, 15],
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
        <h2>{unit.name}</h2>
        <p>
          {unit.name} ligger på {unit.adress} i {unit.city}
        </p>
        <p>Telefonnumret dit är {unit.tel}</p>
        <br />
        <p>Vad tycker du om boendet?</p>
        <p>Skriv en kommentar så hjälper du andra att få rätt information.</p>
      </>
    )
  }

  if (typeof window !== 'undefined') {
    return (
      <Layout pageName="home">
        <Helmet>
          <title>Äldrekartan</title>
        </Helmet>

        <Map {...mapSettings}>
          <Markers onClick={onClick} />
        </Map>

        <Container type="content" className="text-center home-start">
          {unit ? (
            <>
              <UnitContent />
              <Comment />
            </>
          ) : (
            <p> </p>
          )}
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
