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
        <h1>Information</h1>
        <p>Denna sida är till för att hitta och recensera äldreboenden.</p>
      </Container>
    </Layout>
  )
}

export default SecondPage
