import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import Container from 'components/Container'

const SecondPage = () => {
  return (
    <Layout pageName="info">
      <Helmet>
        <title>Information</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h2>Om</h2>
        <p>
          Denna karta är till för att visa en överblick över Coronaviruset
          2019-nCoVs spridning i Sverige på lokal och regional nivå. Kartan
          lanserades då det fanns utrymme för en ökad granuläritet i
          visualiseringar över virusets spridning som inte återfanns i nationell
          eller global statistik.
        </p>
        <br />
        <h2>Data</h2>

        <p>
          Datasetet som vi utgår från är sammanställt från officiell data går
          att ladda ned <a href={'https://freya.se'}>här</a>{' '}
        </p>
        <br />
        <h2>Information</h2>

        <p>
          För fakta och information om coronaviruset 2019-nCoV hänvisar vi till
          <a
            href={
              'https://www.folkhalsomyndigheten.se/smittskydd-beredskap/smittsamma-sjukdomar/coronavirus/fragor-och-svar-om-nytt-coronavirus'
            }
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

export default SecondPage
