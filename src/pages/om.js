import React, { useState, useEffect } from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

import Layout from 'components/Layout'
import Container from 'components/Container'
import ShareButtons from 'components/ShareButtons'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import SEO from '../components/SEO'
import Dropdown from 'components/Dropdown'

const InlineBubble = () => {
  return <span className={'inlineBubble'}></span>
}

const InfoPage = ({ data }) => {
  const [render, setRender] = useState(false)
  useEffect(() => setRender(true), [])
  return (
    render && (
      <Layout pageName="om">
        <Container className="main">
          <SEO />
          <Helmet>
            <title>Coronakartan: Coronaviruset i Sverige - Om</title>
            <meta
              name="description"
              content={
                'Denna sida är till för att ge en överblick över det nya coronavirusets spridning i Sverige, på regionnivå. Antal bekräftade fall utgår ifrån officiella siffror ifrån Folkhälsomyndigheten.'
              }
            />
            <link rel="canonical" href="https://www.coronakartan.se/om/" />
          </Helmet>
          <Container type="about" className="container">
            <h2>Om {data.site.siteMetadata.title}</h2>
            <p>
              Denna sida är till för att ge en överblick över det nya
              coronavirusets utveckling i Sverige, på regionnivå. Jag som skapat
              kartan heter{' '}
              <OutboundLink
                href={'https://twitter.com/utzle'}
                target={'_blank'}
              >
                Elin Lütz.
              </OutboundLink>{' '}
              Markeringarna på kartan visar inte exakta städer eller adresser,
              utan är placerade i den stad som utgör regionens säte.
            </p>
            <br />
            <h2>Vanliga frågor</h2>
            <Dropdown
              title={
                'Varför är siffrorna högre än Folkhälsomyndighetens siffror?'
              }
            >
              <p>
                Folkhälsomyndigheten meddelar antal fall som har inkommit fram
                till klockan 11.30 samma dag. Här tas fall in som rapporteras
                utav regionerna via pressmeddelanden under hela dagen, så
                siffrorna ligger om möjligt lite närmre realtid.
                <br />
                <br />
                Metoden för att samla in siffrorna är att i första hand ta
                regionernas pressmeddelanden som källa. Om regionerna inte
                rapporterar dagens siffror så används Folkhälsomyndighetens
                statistik. Källor till fall som läggs in finns på{' '}
                {<Link to="/tidslinje">tidslinjen</Link>}.
              </p>
            </Dropdown>
            <Dropdown title={'Varför visas inte antal tillfrisknade?'}>
              <p>
                Det finns i nuläget ingen offentlig statistik från regionerna
                som rapporterar hur många utav de som testat positivt som blivit
                friskförklarade i Sverige.
              </p>
            </Dropdown>
            <Dropdown title={'Vad menas med "på sjukhus"?'}>
              <p>
                Antal personer som testat positivt för coronaviruset och är
                inneliggande på sjukhus, inkluderat de personer som får
                intensivvård. Dessa siffror rapporteras varje dag utav de flesta
                regioner. Ett fåtal regioner delger sina siffror för vilka som
                vårdas på sjukhus varannan eller var tredje dag, så en viss
                eftersläpning kan förekomma.
              </p>
            </Dropdown>

            <br />

            <h2>Hjälp till</h2>
            <p>
              Har du idéer på förbättringar eller vill hjälpa till i projektet?
              Hör av dig via <a href={'mailto:info@coronakartan.se'}>mejl</a>.
              Projektet är byggt i React med Gatsby och Leaflet, repot finns{' '}
              <a
                href={'https://github.com/elinlutz/gatsby-map'}
                target={'_blank'}
              >
                här
              </a>
              .
            </p>
            <br />

            <h2>Data</h2>

            <p>
              Antal bekräftade fall, dödsfall och sjukhusfall i Sverige utgår
              från regionernas och Folkhälsomyndighetens rapportering. Hela
              datasetet kan du se{' '}
              <OutboundLink
                href={
                  'https://github.com/elinlutz/gatsby-map/tree/master/src/data/time_series'
                }
                target={'_blank'}
              >
                här
              </OutboundLink>
              .
            </p>
            <p>
              Antal bekräftade fall i världen utgår ifrån Johns Hopkins
              Universitys{' '}
              <OutboundLink
                href={'https://github.com/CSSEGISandData/COVID-19'}
                target={'_blank'}
              >
                dataset
              </OutboundLink>
              . Det är samma siffror som ligger till grund för WHO:s dagliga
              rapporteringar. Siffrorna för världen uppdateras en gång om dagen
              och visar gårdagens antal fall.
            </p>
            <br />

            <h2>Information om coronaviruset</h2>
            <p>
              För fakta och information om det nya coronaviruset SARS-CoV-2, se
              <a
                href={
                  'https://www.folkhalsomyndigheten.se/smittskydd-beredskap/smittsamma-sjukdomar/coronavirus/fragor-och-svar-om-nytt-coronavirus'
                }
                target={'_blank'}
              >
                {' Folkhälsomyndighetens hemsida'}
              </a>
              . En annan bra karta som följer globala fall är{' '}
              <a
                href={
                  'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6'
                }
                target={'_blank'}
              >
                {' Johns Hopkins CSSE Dashboard'}
              </a>
              .
            </p>
            <br />

            <ShareButtons></ShareButtons>
          </Container>
        </Container>
      </Layout>
    )
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default InfoPage
