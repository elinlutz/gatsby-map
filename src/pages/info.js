import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import Container from 'components/Container'

const InfoPage = () => {
  return (
    <Layout pageName="info">
      <Helmet>
        <title>Information</title>
      </Helmet>
      <Container type="about" className="container">
        <h2>Om</h2>
        <p>
          Denna karta skapades för att ge en överblick över Coronaviruset
          2019-nCoVs spridning i Sverige på lokal och regional nivå.
        </p>
        <p>
          Jag som bygger och uppdaterar kartan heter Elin, jag publicerade
          kartan för att jag saknade en interaktiv visualisering över läget i
          Sverige. Den är till för att visa tillgänlig information och ska inte
          ses bidra till spridning av onödig oro eller noja.
        </p>
        <br />
        <h2>Data</h2>

        <p>
          Datan som vi utgår från är sammanställd från information från
          officiella statistik från Folkhälsomyndigheten. Vi rapporterar även
          misstänkta fall som uppges av nyhetsrapporteringar. Datasetet
          uppdateras dagligen vid lunchtid, och du kan ladda ned det{' '}
          <a href={'https://freya.se'} target={'_blank'}>
            här
          </a>
          .
        </p>
        <br />

        <h2>Hjälp till</h2>
        <p>
          Har du idéer på förbättringar eller vill hjälpa till i projektet?
          <br />
          Hör av dig till mig på <a href={'mailto:elin@vuma.se'}>mejl</a>.
          Projektet har en öppen källkod som du hittar{' '}
          <a href={'https://github.com/elinlutz/gatsby-map'} target={'_blank'}>
            här
          </a>
          .
        </p>
        <br />
        <h2>Information om coronaviruset</h2>

        <p>
          För fakta och information om coronaviruset 2019-nCoV hänvisar vi till
          <a
            href={
              'https://www.folkhalsomyndigheten.se/smittskydd-beredskap/smittsamma-sjukdomar/coronavirus/fragor-och-svar-om-nytt-coronavirus'
            }
            target={'_blank'}
          >
            {' Folkhälsomyndigheten'}
          </a>
          .
          <br />
          <br />
          För samlad data lokalt och globalt se{' '}
          <a
            href={
              'https://www.ecdc.europa.eu/en/geographical-distribution-2019-ncov-cases'
            }
            target={'_blank'}
          >
            {' Europeiska Smittskyddsmyndigheten'}
          </a>
          .
        </p>
        <br />
      </Container>
    </Layout>
  )
}

export default InfoPage
