import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Container from 'components/Container'
import ShareButtons from 'components/ShareButtons'
import Bubble from 'components/Bubble'

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import SEO from '../components/SEO'

const InlineBubble = () => {
  return <span className={'inlineBubble'}></span>
}

const InfoPage = ({ data }) => {
  return (
    <Layout pageName="om">
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
        {/* <Container type="card" className="container">
          <h2>📌 Viktigt meddelande</h2>
          <p>
            Internet är kraftfullt just nu och vi har chans att använda det
            rätt.
            <br />
            <br />
            Coronakartan har över 60 000 användare i skrivande stund, med detta
            följer ett ansvar. Nu söker jag personer som vill bidra till att{' '}
            <b>#jämnautkurvan</b> (ett svenskt svar på initiativet
            <a href={'https://flattenthecurve.com'}> Flatten The Curve</a>)
            genom att sammanställa text och grafik utefter samlade riktlinjer på
            svenska. Målet är att jämna ut kurvan över antal fall genom att
            bidra till ett medmänskligt beteende. Det är viktigt att vi agerar
            snabbt. Är du duktig på till exempel epidemiologi, folkhälsa,
            statistik, medicin, hygien, design eller kommunikation? Tror du på
            transparent och evidensbaserad information?
            <br />
            <br />
            Hör av er via <a href={'mailto:info@coronakartan.se'}>mejl</a> eller
            skriv till mig på <a href={'https://twitter.com/utzle'}>twitter</a>.
          </p>
        </Container> */}

        <h2>Om {data.site.siteMetadata.title}</h2>
        <p>
          Denna sida är till för att ge en överblick över det nya coronavirusets
          bekräftade fall i Sverige, på regionnivå. Jag som skapade kartan heter
          Elin Lütz. Markeringarna på kartan visar inte exakta städer eller
          adresser, utan är placerade i den stad som utgör regionens säte.
        </p>
        <br />
        <h2>Data</h2>

        <p>
          Antal bekräftade fall i Sverige utgår från regionernas och
          Folkhälsomyndighetens rapportering. Hela datasetet kan du se{' '}
          <OutboundLink
            href={
              'https://github.com/elinlutz/gatsby-map/blob/master/src/data/Tidsserie.csv'
            }
            target={'_blank'}
          >
            här
          </OutboundLink>
          .
        </p>
        <p>
          Antal bekräftade fall i världen utgår ifrån Johns Hopkins Universitys{' '}
          <OutboundLink
            href={'https://github.com/CSSEGISandData/COVID-19'}
            target={'_blank'}
          >
            dataset
          </OutboundLink>
          . Det är samma siffror som ligger till grund för WHO:s dagliga
          rapporteringar. Siffrorna för världen uppdateras en gång om dagen och
          visar gårdagens antal fall.
        </p>
        <br />

        <h2>Hjälp till</h2>
        <p>
          Har du idéer på förbättringar eller vill hjälpa till i projektet? Hör
          av dig via <a href={'mailto:info@coronakartan.se'}>mejl</a>. Projektet
          är byggt i React med Gatsby och Leaflet, repot finns{' '}
          <a href={'https://github.com/elinlutz/gatsby-map'} target={'_blank'}>
            här
          </a>
          .
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
    </Layout>
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
