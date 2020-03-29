import React from 'react'
import { Link } from 'gatsby'

import Button from '@material-ui/core/Button'
import MapIcon from '@material-ui/icons/Map'
import BubbleChart from '@material-ui/icons/BubbleChart'
import TimelineIcon from '@material-ui/icons/Timeline'
import EqualizerIcon from '@material-ui/icons/Equalizer'
import TableChartIcon from '@material-ui/icons/TableChart'
import InfoIcon from '@material-ui/icons/Info'

import Container from 'components/Container'

const Header = () => {
  return (
    <header>
      <Link className="titleContainer" to="/">
        <div className="title">
          <BubbleChart className="icon" />
          Coronakartan
        </div>
      </Link>

      <ul>
        <li>
          <Link to="/tabell/">
            <Button className="navigationLink">
              <TableChartIcon className="icon" />
              <div className="text">Tabell</div>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/tidslinje/">
            <Button className="navigationLink">
              <TimelineIcon className="icon" />
              <div className="text">Tidslinje</div>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/om/">
            <Button className="navigationLink">
              <InfoIcon className="icon" />
              <div className="text">Om</div>
            </Button>
          </Link>
        </li>
      </ul>
    </header>
  )
}

export default Header
