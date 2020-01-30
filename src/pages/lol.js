import React from 'react'
import { graphql } from 'gatsby'
export default ({ data }) => (
  <div>
    <h1>About { data.site.siteMetadata.title }</h1>
    <p>We're a very cool website you should return to often.</p>
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
