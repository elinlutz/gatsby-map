module.exports = {
  pathPrefix: `/mapapp`,
  siteMetadata: {
    title: 'Coronakartan',
    description:
      'En karta över rapporterade fall av coronaviruset COVID-19 i Sverige',
    keywords: ['Coronavirus', 'Karta', 'covid-19', 'Sverige'],
    siteUrl: 'https://www.coronakartan.se',
    image: 'assets/images/screenshot.png',
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
    },
    `gatsby-plugin-client-side-redirect` // keep it in last in list
  ]
}
