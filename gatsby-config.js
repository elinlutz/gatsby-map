module.exports = {
  pathPrefix: `/mapapp`,
  siteMetadata: {
    title: 'Geriatric Map',
    menuLinks: [
      {
        name:'home',
        link:'/'
      },
       {
        name:'info',
        link:'/info'
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
      ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    'gatsby-plugin-react-leaflet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'
  ]
}
