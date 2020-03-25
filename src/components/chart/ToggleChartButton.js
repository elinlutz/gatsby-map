import React from 'react'

import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

function ToggleChartButton({ chartType, setChartType }) {
  const handleType = (event, newType) => {
    if (newType !== null) {
      setChartType(newType)
    }
  }

  return (
    <div className="toggleLogButtonContainer">
      <ToggleButtonGroup value={chartType} exclusive onChange={handleType}>
        <ToggleButton className="toggleLogButton" value="column">
          Staplar
        </ToggleButton>
        <ToggleButton className="toggleLogButton" value="line">
          Linjer
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default ToggleChartButton
