import React, { useState } from 'react'
import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

function ToggleViewButton({ setView }) {
  const handleView = (event, newView) => {
    if (newView !== null) {
      setView(newView)
    }
  }

  return (
    <ToggleButtonGroup exclusive onChange={handleView}>
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
