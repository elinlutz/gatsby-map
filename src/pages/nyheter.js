import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Comments from 'components/Comments'

const Blog = () => {
  return (
    <Layout pageName="nyheter">
      <Helmet>
        <title>Nyheter</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h2>Tidslinje</h2>
        <p>Tidslinje över rapporterade fall i Sverige</p>

        <br />
        <br />
        <div>
          <h3>28 Februari 2020</h3>
          <li>
            SR Ekot rapporterar 4 nya fall av coronavirus (
            <a
              className="sourceLink"
              href="https://sverigesradio.se/sida/artikel.aspx?programid=83&artikel=7418398"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>{' '}
          <h3>27 Februari 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 5 nya fall av coronavirus (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/inbjudan-till-presstraff-ytterligare-fall-av-covid-19-i-flera-regioner2/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>{' '}
          <h3>26 Februari 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 1 nytt fall av coronavirus (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/nytt-bekraftat-fall-av-covid-19/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>{' '}
          <h3>31 Januari 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 1 nytt fall av coronavirus (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/januari/bekraftat-fall-av-nytt-coronavirus-i-sverige/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>{' '}
        </div>
      </Container>
      {/* <Comments /> */}
    </Layout>
  )
}

export default Blog
