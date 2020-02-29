import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Comments from 'components/Comments'
import Chart from 'components/Chart'

const Blog = () => {
  return (
    <Layout pageName="nyheter">
      <Helmet>
        <title>Nyheter</title>
      </Helmet>
      <Container type="content" className="text-center">
        <h1>Tidslinje</h1>
        <p>Tidslinje över rapporterade fall i Sverige</p>

        <br />
        <br />
        <div>
          <h3>29 Februari 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 1 nytt fall men fallet dementeras
            av Västra Götalandsregionen (
            <a
              className="sourceLink"
              href="https://sverigesradio.se/artikel/7418610"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <h3>28 Februari 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 4 nya fall av coronavirus (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/februari/fler-fall-upptackta-av-covid-19/"
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
        <br />
        <br />

        <h1>Graf</h1>
        <p>Antal rapporterade fall i Sverige sedan den 25 Februari 2020</p>

        <Container className="chart-container">
          <Container className="chart">
            <Chart />
          </Container>
        </Container>
      </Container>
    </Layout>
  )
}

export default Blog
