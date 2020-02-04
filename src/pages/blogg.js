import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import Container from 'components/Container'

const Blog = () => {
  return (
    <Layout pageName="blogg">
      <Helmet>
        <title>Information</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h2>Blogg</h2>
        <p>Här kommer nyheter och inlägg publiceras.</p>
      </Container>
    </Layout>
  )
}

export default Blog
