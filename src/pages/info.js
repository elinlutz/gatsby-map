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
          Denna karta skapades för att ge en överblick över coronavirusets
          (Covid-19) spridning i Sverige på lokal och regional nivå. Jag som
          skapade den heter Elin och jag saknade en nationell karta över läget.
        </p>
        <br />
        <h2>Data</h2>

        <p>
          Antal bekräftade fall utgår ifrån officiella siffror från
          Folkhälsomyndigheten. Antal kontrollerade fall är tagna från
          nyhetskällor{' '}
          <a
            href={
              'https://www.dn.se/nyheter/sverige/nytt-fall-av-coronavirus-i-sverige-patient-vardas-pa-sahlgrenska/'
            }
            target={'_blank'}
          >
            (DN)
          </a>
          .
          {/* Datasetet uppdateras
          dagligen, och du kan ladda ned det{' '}
          <a href={'https://xxx.se'} target={'_blank'}>
            här
          </a>
          . */}
        </p>
        <br />

        <h2>Hjälp till</h2>
        <p>
          Har du idéer på förbättringar eller vill hjälpa till i projektet? Hör
          av dig via <a href={'mailto:lutz.elin@gmail.com'}>mejl</a> (problem
          med mejlen tidigare, mejla igen om ni vill få svar!).
          {/* <br /> Projektet har en öppen källkod som du hittar{' '}
          <a href={'https://github.com/elinlutz/gatsby-map'} target={'_blank'}>
            här
          </a>
        .*/}
        </p>
        <br />

        <h2>Information om coronaviruset</h2>

        <p>
          För fakta och information om nya coronaviruset Covid-19, se
          <a
            href={
              'https://www.folkhalsomyndigheten.se/smittskydd-beredskap/smittsamma-sjukdomar/coronavirus/fragor-och-svar-om-nytt-coronavirus'
            }
            target={'_blank'}
          >
            {' Folkhälsomyndighetens hemsida'}
          </a>
          .
          <br />
          För samlad data på EU-nivå och globalt, se{' '}
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
