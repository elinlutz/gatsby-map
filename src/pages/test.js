import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <div>
    <h1>Om {data.site.siteMetadata.title}</h1>
  </div>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
