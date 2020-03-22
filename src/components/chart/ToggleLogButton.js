import React from 'react'

import ToggleButton from '@material-ui/lab/ToggleButton'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'

function ToggleLogButton({ type, setType }) {
  const handleType = (event, newType) => {
    if (newType !== null) {
      setType(newType)
    }
  }

  return (
    <div className="toggleLogButtonContainer">
      <ToggleButtonGroup value={type} exclusive onChange={handleType}>
        <ToggleButton className="toggleLogButton" value="linear">
          Linjär
        </ToggleButton>
        <ToggleButton className="toggleLogButton" value="logarithmic">
          Logaritmisk
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default ToggleLogButton
