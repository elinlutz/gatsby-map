import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Container from 'components/Container'
import ShareButtons from 'components/ShareButtons'

import { OutboundLink } from 'gatsby-plugin-google-analytics'

const InfoPage = ({ data }) => {
  return (
    <Layout pageName="om">
      <Helmet>
        <title>Coronaviruset i Sverige - Om</title>
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
          Denna sida är till för att ge en överblick över det nya coronavirusets
          bekräftade fall i Sverige, på regionnivå. Jag som skapade kartan heter
          Elin och jag saknade en plats för tydlig och tillgänglig information.
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
          Antal bekräftade fall ifrån andra världens länder utgår ifrån Johns
          Hopkins University dataset, det är därför landet står på engelska.
          Detta dataset finns{' '}
          <OutboundLink
            href={'https://github.com/CSSEGISandData/COVID-19'}
            target={'_blank'}
          >
            här
          </OutboundLink>
          . Siffrorna för världens fall uppdateras bara en gång om dagen (på
          morgonen).
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
          För fakta och information om nya coronaviruset COVID-19, se
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
