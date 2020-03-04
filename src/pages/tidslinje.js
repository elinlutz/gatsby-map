import React from 'react'
import Helmet from 'react-helmet'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Comments from 'components/Comments'
import Chart from 'components/Chart'

const Blog = () => {
  return (
    <Layout pageName="tidslinje">
      <Helmet>
        <title>Coronaviruset i Sverige - Tidslinje </title>
        <meta
          name="description"
          content={'Följ utvecklingen av coronaviruset COVID-19 i Sverige'}
        />
        <link rel="canonical" href="https://www.coronakartan.se/tidslinje/" />
      </Helmet>

      <Container type="timeline-content" className="text">
        <Container type="chart">
          <h1>Utveckling</h1>

          <Chart />
        </Container>

        <Container type="timeline">
          <h1>Tidslinje</h1>
          <h3>4 Mars 2020</h3>
          <li>
            Västra götaland rapporterar 2 nya fall av coronaviruset i
            Göteborgsområdet(
            <a
              className="sourceLink"
              href="https://news.cision.com/se/vastra-gotalandsregionen/r/4-mars--ytterligare-tva-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3052013"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <h3>3 Mars 2020</h3>
          <li>
            Region Stockholm rapporterar 6 ytterligare fall av coronaviruset i
            Stockholm (
            <a
              className="sourceLink"
              href="https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/ny-nyhet-corona/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <li>
            SVT rapporterar om 9 nya fall av coronaviruset, 1 i Skåne, 3 i
            Västra Götaland, 1 i Jönköping och 4 i Stockholm (
            <a
              className="sourceLink"
              href="https://www.svt.se/nyheter/inrikes/nya-fall-med-coronavirus-i-sverige"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <h3>2 Mars 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 1 nytt fall av coronaviruset i
            Stockholm (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/coronavirus-wuhan-kina-januari-2020/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <li>
            Region Skåne rapporterar 1 nytt fall av coronaviruset i Skåne
            (preliminärt) (
            <a
              className="sourceLink"
              href="http://www.mynewsdesk.com/se/region_skane/pressreleases/troligt-fall-av-covid-19-i-skaane-2978003?utm_source=rss&utm_medium=rss&utm_campaign=Subscription&utm_content=current_news"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <h3>1 Mars 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 1 nytt fall av coronaviruset i
            Västra Götaland (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/smittskydd-beredskap/utbrott/aktuella-utbrott/coronavirus-wuhan-kina-januari-2020/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <h3>29 Februari 2020</h3>
          <li>
            SR Ekot rapporterar 1 nytt fall av coronaviruset i Stockholm (
            <a
              className="sourceLink"
              href="https://sverigesradio.se/artikel/7418762"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <li>
            SR Ekot rapporterar 1 nytt fall av coronaviruset i Västra Götaland (
            <a
              className="sourceLink"
              href="https://sverigesradio.se/sida/artikel.aspx?programid=97&artikel=7418659"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <h3>28 Februari 2020</h3>
          <li>
            Folkhälsomyndigheten rapporterar 4 nya fall av coronaviruset (
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
            Folkhälsomyndigheten rapporterar 5 nya fall av coronaviruset (
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
            Folkhälsomyndigheten rapporterar 1 nytt fall av coronaviruset (
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
            Folkhälsomyndigheten rapporterar 1 nytt fall av coronaviruset (
            <a
              className="sourceLink"
              href="https://www.folkhalsomyndigheten.se/nyheter-och-press/nyhetsarkiv/2020/januari/bekraftat-fall-av-nytt-coronavirus-i-sverige/"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>{' '}
        </Container>
        <br />
        <br />
      </Container>
    </Layout>
  )
}

export default Blog
