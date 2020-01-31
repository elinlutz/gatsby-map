import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Comment from 'components/Comment'

const Post = () => {
  return (
    <Layout pageName="Post">
      <Helmet>
        <title>Post</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Post</h1>
        <Comment></Comment>
        </Container>
    </Layout>
  )
}

export default Post
