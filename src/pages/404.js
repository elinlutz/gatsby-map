import React from 'react'

import Layout from 'components/Layout'
import Container from 'components/Container'

const NotFoundPage = () => {
  return (
    <Layout>
      <Container type="content" className="text-center">
        <h1>Sidan kan inte hittas</h1>
        <p>Det finns tyvärr ingen sida på den här adressen.</p>
      </Container>
    </Layout>
  )
}

export default NotFoundPage
