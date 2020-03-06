import React, { useState } from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import Button from '@material-ui/core/Button'

function ToggleViewButton({ view, setView, setRegion, setCountry }) {
  const handleView = (event, newView) => {
    if (newView !== null) {
      setRegion(null)
      setCountry(null)
      setView(newView)
    }
  }

  return (
    <ToggleButtonGroup value={view} exclusive onChange={handleView}>
      <ToggleButton className="toggleViewButtonSweden" value="sweden">
        Sverige
      </ToggleButton>
      <ToggleButton className="toggleViewButtonWorld" value="world">
        Världen
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default ToggleViewButton
