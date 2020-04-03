const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const regionTemplate = path.resolve(`src/templates/region.js`)
  const result = await graphql(`
    query {
      allTimeSeriesConfimedConfirmedCsv {
        edges {
          node {
            Display_Name
          }
        }
      }
    }
  `)
  result.data.allTimeSeriesConfimedConfirmedCsv.edges.forEach(edge => {
    createPage({
      path: `region/${edge.node.Display_Name}`.toLowerCase(),
      component: regionTemplate,
      context: {
        region: edge.node.Display_Name
      }
    })
  })
}
