module.exports = {
  pathPrefix: `/mapapp`,
  siteMetadata: {
    title: 'Coronakartan',
    titleTemplate: 'Coronaviruset i Sverige',
    description:
      'Karta över rapporterade fall av coronaviruset COVID-19 i Sverige',
    keywords: ['Coronavirus', 'Karta', 'covid-19', 'Sverige'],
    siteUrl: 'https://www.coronakartan.se',
    image: '/coronakartan.png',
    twitterUsername: '@utzle',
    menuLinks: [
      {
        name: 'home',
        link: '/'
      },
      {
        name: 'om',
        link: '/om'
      },
      {
        name: 'tidslinje',
        link: '/tidslinje'
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sitemap',
      options: {
        exclude: ['/image/']
      }
    },
    {
      resolve: 'gatsby-plugin-buildtime-timezone',
      options: {
        tz: 'Europe/Stockholm',
        format: 'D/M YYYY HH:mm' // string, defaults to "MM/DD/YYYY" - pass in any acceptable date-and-time format
      }
    },
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
    {
      resolve: `gatsby-transformer-csv`,
      options: {
        noheader: false
      }
    },
    'gatsby-plugin-react-leaflet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
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
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-client-side-redirect` // keep it in last in list
  ]
}
