module.exports = {
  pathPrefix: `/mapapp`,
  siteMetadata: {
    title: 'Geriatric Map',
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'info',
        link: '/info'
      }
    ]
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/\.*`] // ignore files starting with a dot
      }
    },
    'gatsby-plugin-react-leaflet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/icons/corona.png'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-157947693-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0
      }
    }
  ]
}
