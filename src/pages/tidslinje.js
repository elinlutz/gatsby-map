import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Chart from 'components/Chart'
import TimelineListElement from 'components/TimelineListElement'

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
          {/* <p>Uppdaterat: {data.site.buildTimeZone}</p> */}
          <h3>8 Mars 2020</h3>
          <h3>7 Mars 2020</h3>
          <TimelineListElement
            number={1}
            region={'Gävleborg'}
            source={
              'https://www.regiongavleborg.se/nyheter/ytterligare-ett-fall-av-covid-19-i-gavleborg/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={21}
            region={'Stockholm'}
            source={
              'https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-7-mars/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Skåne'}
            source={
              'https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-7-mars-2979793?utm_source=rss&utm_medium=rss&utm_campaign=Subscription&utm_content=current_news'
            }
          ></TimelineListElement>
          <h3>6 Mars 2020: 43</h3>
          <TimelineListElement
            number={1}
            region={'Gävleborg'}
            source={
              'https://www.svt.se/nyheter/lokalt/gavleborg/andra-fallet-av-coronavirus-i-gavleborg-bekraftat'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={21}
            region={'Stockholm'}
            source={
              'https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-6-mars/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={5}
            region={'Jönköping'}
            source={
              'https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/ytterligare-fem-bekraftade-fall-i-jonkopings-lan-av-nya-coronaviruset-covid-19-45988'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={8}
            region={'Värmland'}
            source={
              'https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/ytterligare-atta-fall-av-nya-coronaviruset-i-varmland/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Uppsala'}
            source={'https://www.regionuppsala.se/nyheter'}
          ></TimelineListElement>
          <TimelineListElement
            number={5}
            region={'Skåne'}
            source={
              'https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-6-mars-2979574?utm_source=rss&utm_medium=rss&utm_campaign=Subscription&utm_content=current_news'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={2}
            region={'Västra Götaland'}
            source={
              'https://news.cision.com/se/vastra-gotalandsregionen/r/6-mars--tva-nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3053911'
            }
          ></TimelineListElement>
          <h3>5 Mars 2020: 42</h3>
          <TimelineListElement
            number={2}
            region={'Uppsala'}
            source={'https://www.regionuppsala.se/nyheter'}
          ></TimelineListElement>
          <TimelineListElement
            number={28}
            region={'Stockholm'}
            source={
              'https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-5-mars/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Gävleborg'}
            source={
              'https://www.svt.se/nyheter/lokalt/gavleborg/forsta-fallet-av-coronaviruset-i-gavleborg'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Värmland'}
            source={
              'https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/ytterligare-tre-fall-av-nya-coronaviruset-i-varmland/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={7}
            region={'Skåne'}
            source={
              'https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-5-mars-2979148?utm_source=rss&utm_medium=rss&utm_campaign=Subscription&utm_content=current_news'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Borås, Västra Götaland'}
            source={
              'https://news.cision.com/se/vastra-gotalandsregionen/r/5-mars--ett-nytt-bekraftat-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3052981'
            }
          ></TimelineListElement>
          <h3>4 Mars 2020: 22</h3>
          <TimelineListElement
            number={16}
            region={'Stockholm'}
            source={
              'https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Örebro'}
            source={
              'https://via.tt.se/pressmeddelande/inbjudan-till-presskonferens-pa-universitetssjukhuset-orebro-i-dag-onsdag?publisherId=3235654&releaseId=3271215'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={2}
            region={'Värmland'}
            source={
              'https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/tva-fall-av-nya-coronaviruset-i-varmland/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Skåne'}
            source={
              'http://www.mynewsdesk.com/se/region_skane/news/pressbulletin-om-covid-19-4-mars-395997?utm_source=rss&utm_medium=rss&utm_campaign=Subscription&utm_content=current_news'
            }
          ></TimelineListElement>
          <li>
            2 nya fall av coronaviruset i Göteborgsområdet (
            <a
              className="sourceLink"
              href="https://news.cision.com/se/vastra-gotalandsregionen/r/4-mars--ytterligare-tva-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3052013"
              target={'_blank'}
            >
              källa
            </a>
            )
          </li>
          <h3>3 Mars 2020: 15</h3>
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
          <h3>2 Mars 2020: 1</h3>
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
          <h3>1 Mars 2020: 1</h3>
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
          <h3>29 Februari 2020: 2</h3>
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
          <h3>28 Februari 2020: 4</h3>
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
          <h3>27 Februari 2020: 5</h3>
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
          <h3>26 Februari 2020: 1</h3>
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
          <h3>31 Januari 2020: 1</h3>
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

export const query = graphql`
  query {
    site {
      buildTimeZone
    }
  }
`

export default Blog
