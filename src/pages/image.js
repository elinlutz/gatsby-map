import React from 'react'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <div>
    <h1>Bild GraphQL</h1>
    <Img fixed={data.file.childImageSharp.fixed} />
  </div>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "coronakartan.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 200, height: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
