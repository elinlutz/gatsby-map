import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import Container from 'components/Container'

import Comments from 'components/Comments'

const Post = ({ data }) => {
  return (
    <Layout pageName="Post">
      <Helmet>
        <title>Post</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Post</h1>
      </Container>

      <Comments />
    </Layout>
  )
}

export default Post
