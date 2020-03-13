import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import Container from 'components/Container'
import Chart from 'components/Chart'
import TimelineListElement from 'components/TimelineListElement'
import SEO from '../components/SEO'

const Blog = ({ data }) => {
  return (
    <Layout pageName="tidslinje">
      <SEO />
      <Helmet>
        <title>Coronakartan: Coronaviruset i Sverige - Tidslinje </title>
        <meta
          name="description"
          content={
            'Följ utvecklingen av det nya coronaviruset COVID-19 i Sverige dag för dag'
          }
        />
        <link rel="canonical" href="https://www.coronakartan.se/tidslinje" />
      </Helmet>

      <Container type="timeline-content" className="text">
        <Container type="chart">
          <h1>Utveckling</h1>
          <p>Uppdaterat {data.site.buildTimeZone}</p>

          <Chart />
        </Container>
        <Container type="timeline">
          <h1>Tidslinje</h1>
          <h3>13 Mars 2020</h3>
          <TimelineListElement
            number={32}
            region={'Skåne'}
            source={'https://www.mynewsdesk.com/se/region_skane/latest_news'}
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Kalmar'}
            source={
              'https://www.regionkalmar.se/nyhetslista/ett-nytt-fall-i-lanet-av-covid-19/'
            }
          ></TimelineListElement>
          <h3>12 Mars 2020</h3>
          <TimelineListElement
            number={4}
            region={'Östergötland'}
            source={
              'https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/fyra-nya-fall-av-corona-i-lanet/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Västmanland'}
            source={
              'https://newsroom.notified.com/region-vastmanland/posts/pressreleases/ett-ytterligare-bekraftat-fall-av-covid-19-i'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={14}
            region={'Uppsala'}
            source={''}
          ></TimelineListElement>
          <TimelineListElement
            number={4}
            region={'Sörmland'}
            source={
              'https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-sormland---en-person-vardas-pa-sjukhus/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Norrbotten'}
            source={''}
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Örebro'}
            source={
              'https://via.tt.se/pressmeddelande/ett-ytterligare-fall-av-coronasmitta-i-orebro-lan-pa-onsdagen?publisherId=3235654&releaseId=3272401'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={2}
            region={'Kronoberg'}
            source={
              'http://www.regionkronoberg.se/nyheter/tva-bekraftade-coronafall-i-lanet/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={2}
            region={'Kalmar'}
            source={
              'https://www.regionkalmar.se/nyhetslista/tva-nya-fall-i-lanet-av-covid-19/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Västernorrland'}
            source={
              'https://www.rvn.se/sv/Om-regionen/Aktuellt-i-Region-Vasternorrland/Nyheter/tre-nya-fall-av-covid-19-i-vasternorrland/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Jämtland Härjedalen'}
            source={
              'https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/lagesrapport200312coronacovid19.5.236a06661703ffc4fb61f800.html'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={13}
            region={'Jönköping'}
            source={''}
          ></TimelineListElement>
          <TimelineListElement
            number={2}
            region={'Gävleborg'}
            source={
              'https://www.1177.se/Gavleborg/aktuellt/aktuellt-i-gavleborg/bekraftade-fall-av-covid-19-i-lanet/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={2}
            region={'Gotland'}
            source={'https://www.gotland.se/106271'}
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Värmland'}
            source={
              'https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/tre-nya-fall-av-coronavirusinfektion-covid-19-i-varmland/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={5}
            region={'Blekinge'}
            source={
              'https://regionblekinge.se/om-webb-platsen/nyheter/nyheter-och-pressmeddelande/2020-03-12-fler-fall-av-coronasmittade-i-blekinge.html'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={34}
            region={'Stockholm'}
            source={
              'https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-12-mars/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={31}
            region={'Västra Götaland'}
            source={
              'https://news.cision.com/se/vastra-gotalandsregionen/r/12-mars--nytt-om-coronavirusinfektion-covid-19,c3058053'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={38}
            region={'Skåne'}
            source={
              'https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-12-mars-2981296'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={6}
            region={'Östergötland'}
            source={
              'https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/ytterligare-sex-coronosmittade-i-lanet/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={15}
            region={'Halland'}
            source={
              'https://www.hn.se/nyheter/halland/elever-p%C3%A5-p%C3%A5skbergsskolan-har-satts-i-karant%C3%A4n-1.25301387'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Dalarna'}
            source={
              'https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/tre-nya-fall-av-coronavirus-i-dalarna-den-12-mars/'
            }
          ></TimelineListElement>
          <h3>11 Mars 2020</h3>
          <TimelineListElement
            number={37}
            region={'Västra Götaland'}
            source={
              'https://news.cision.com/se/vastra-gotalandsregionen/r/11-mars--nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3057243'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={2}
            region={'Örebro'}
            source={
              'https://via.tt.se/pressmeddelande/lagesrapport-om-situationen-kring-coronasmitta-i-region-orebro-lan?publisherId=3235654&releaseId=3272276'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={4}
            region={'Västmanland'}
            source={
              'https://newsroom.notified.com/region-vastmanland/posts/pressreleases/fyra-konstaterade-fall-av-covid-19-i-vastmanl'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Västerbotten'}
            source={
              'https://www.mynewsdesk.com/se/regionvasterbotten/pressreleases/ytterligare-tre-personer-har-faatt-coronavirus-2980867'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={2}
            region={'Värmland'}
            source={
              'https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/tva-nya-fall-av-coronavirusinfektion-covid-19/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Uppsala'}
            source={''}
          ></TimelineListElement>
          <TimelineListElement
            number={5}
            region={'Sörmland'}
            source={
              'https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-region-sormland/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={26}
            region={'Stockholm'}
            source={
              'https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-11-mars/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={35}
            region={'Skåne'}
            source={
              'https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-11-mars-2980863'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Norrbotten'}
            source={
              'https://www.svt.se/nyheter/lokalt/norrbotten/fem-personer-i-norrbotten-har-nu-smittats-med-cornaviruset'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={7}
            region={'Kronoberg'}
            source={
              'http://www.regionkronoberg.se/nyheter/flera-nya-fall-av-covid-19-i-lanet/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Jönköping'}
            source={
              'https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/daglig-uppdatering-om-covid-19-tre-nya-konstaterade-fall--46139'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={4}
            region={'Jämtland'}
            source={
              'https://www.svt.se/nyheter/lokalt/jamtland/ytterligare-fyra-coronafall-i-jamtlands-lan'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={7}
            region={'Halland'}
            source={
              'https://www.hn.se/nyheter/halland/totalt-16-hall%C3%A4nningar-nu-smittade-en-av-dem-sjukhusanst%C3%A4lld-1.25234293'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Gävleborg'}
            source={
              'https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/forsta-fallet-av-det-nya-coronaviruset-i-dalarna/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Dalarna'}
            source={
              'https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/forsta-fallet-av-det-nya-coronaviruset-i-dalarna/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Blekinge'}
            source={
              'https://regionblekinge.se/om-webb-platsen/nyheter/nyheter-och-pressmeddelande/2020-03-11-forsta-fallet-av-bekraftad-coronasmitta-i-blekinge.html'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Dalarna'}
            source={
              'https://www.regiondalarna.se/press/nyheter-och-pressmeddelanden/forsta-fallet-av-det-nya-coronaviruset-i-dalarna/'
            }
          ></TimelineListElement>
          <h3>10 Mars 2020</h3>
          <TimelineListElement
            number={1}
            region={'Kronobergs Län'}
            source={
              'http://www.regionkronoberg.se/nyheter/en-person-i-kronobergs-lan-har-testats-positivt-for-coronavirus/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Jämtlands Län'}
            source={
              'https://www.regionjh.se/nyheter/pressmeddelanden/rjhpress/enpersonijamtlandslankonstateratsmittadavcoronaviruset.5.55412b91170402c7d222e632.html'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Värmland'}
            source={
              'https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/ytterligare-ett-fall-av-coronavirusinfektion-covid-19-i-varmland2/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={2}
            region={'Kalmar Län'}
            source={
              'https://www.regionkalmar.se/nyhetslista/annu-en-smittad-av-nya-coronaviruset/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Norrbotten'}
            source={
              'https://www.svt.se/nyheter/lokalt/norrbotten/nytt-fall-av-cornavirus-i-norrbotten'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={4}
            region={'Halland'}
            source={
              'https://www.hn.se/nyheter/halland/ytterligare-fyra-fall-av-coronasmitta-i-halland-1.25172832'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={6}
            region={'Västernorrland'}
            source={
              'https://www.rvn.se/sv/Om-regionen/Pressrum/Pressmeddelanden/tre-personer-i-vasternorrland-smittade-av-coronaviruset/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Region Sörmland'}
            source={
              'https://regionsormland.se/nyheter/nyhetslista-2019/ytterligare-fall-med-covid-19-i-sormland/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={15}
            region={'Västra Götaland'}
            source={
              'https://news.cision.com/se/vastra-gotalandsregionen/r/10-mars--nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3056443'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Örebro'}
            source={
              'https://www.regionorebrolan.se/sv/Om-regionorebrolan/Press/Nyheter/Nyheter-2020/Ytterligare-en-lansbo-smittad-av-det-nya-coronaviruset/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={60}
            region={'Stockholm'}
            source={
              'https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-10-mars2/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Skåne'}
            source={'https://www.mynewsdesk.com/se/region_skane/pressreleases/'}
          ></TimelineListElement>
          <h3>9 Mars 2020</h3>
          <TimelineListElement
            number={1}
            region={'Västra Götaland'}
            source={
              'https://news.cision.com/se/vastra-gotalandsregionen/r/bekraftat-fall-av-covid-19-pa-kungalvs-sjukhus,c3055700'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Östergötland'}
            source={
              'https://www.regionostergotland.se/Om-regionen/Pressrum/Nyheter/ett-fall-av-coronavirus-bekraftat-i-ostergotland/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={5}
            region={'Västerbotten'}
            source={
              'https://www.svt.se/nyheter/lokalt/vasterbotten/fem-personer-i-vasterbotten-smittade-av-coronaviruset'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Norrbotten'}
            source={
              'https://www.svt.se/nyheter/lokalt/norrbotten/forsta-coronafallet-i-norrbotten'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Sörmland'}
            source={
              'https://www.svt.se/nyheter/lokalt/sormland/bekraftat-fall-av-coronavirus-i-sormland'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={5}
            region={'Halland'}
            source={
              'https://www.svt.se/nyheter/lokalt/halland/fem-bekraftade-fall-av-coronavirus-i-halland'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={32}
            region={'Stockholm'}
            source={
              'https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-9-mars/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={6}
            region={'Västra Götaland'}
            source={
              'https://news.cision.com/se/vastra-gotalandsregionen/r/9-mars--sex-nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3055189'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Värmland'}
            source={
              'https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/ytterligare-ett-fall-av-coronavirusinfektion-covid-19-i-varmland/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={2}
            region={'Jönköping'}
            source={
              'https://www.rjl.se/nyheter/nyheter-och-pressmeddelanden/daglig-uppdatering-om-covid-19-ytterligare-tva-bekraftade-fall-i-jonkopings-lan-46021'
            }
          ></TimelineListElement>
          <h3>8 Mars 2020</h3>
          <TimelineListElement
            number={14}
            region={'Stockholm'}
            source={
              'https://www.sll.se/verksamhet/halsa-och-vard/nyheter-halsa-och-vard/2020/03/fall-av-nya-coronaviruset-i-stockholm-den-8-mars/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={7}
            region={'Värmland'}
            source={
              'https://www.regionvarmland.se/om-regionen/pressrum/Pressmeddelanden/2020/03/sju-nya-fall-av-coronavirusinfektion-covid-19-i-varmland/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={3}
            region={'Örebro'}
            source={
              'https://www.regionorebrolan.se/sv/Om-regionorebrolan/Press/Nyheter/Nyheter-2020/Tre-personer-fran-Orebro-lan-har-testats-positivt-for-coronavirus/'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={12}
            region={'Västra Götaland'}
            source={
              'https://news.cision.com/se/vastra-gotalandsregionen/r/8-mars--12-nya-bekraftade-fall-av-coronavirusinfektion--covid-19--i-vastra-gotaland,c3054769'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={5}
            region={'Skåne'}
            source={
              'https://www.mynewsdesk.com/se/region_skane/pressreleases/pressbulletin-om-covid-19-8-mars-2979837?utm_source=rss&utm_medium=rss&utm_campaign=Subscription&utm_content=current_news'
            }
          ></TimelineListElement>
          <TimelineListElement
            number={1}
            region={'Uppsala'}
            source={'https://www.regionuppsala.se/nyheter'}
          ></TimelineListElement>
          <h3>7 Mars 2020</h3>
          <TimelineListElement
            number={0}
            region={'Gävleborg'}
            source={
              'https://www.regiongavleborg.se/nyheter/ytterligare-ett-fall-av-covid-19-i-gavleborg/'
            }
          ></TimelineListElement>
          {'Rättelse: Dubbelrapportering, totalt 2 personer i Gävleborg.'}
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
          <h3>6 Mars 2020</h3>
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
          <h3>5 Mars 2020</h3>
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
          <h3>4 Mars 2020</h3>
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

export const query = graphql`
  query {
    site {
      buildTimeZone
    }
  }
`

export default Blog
