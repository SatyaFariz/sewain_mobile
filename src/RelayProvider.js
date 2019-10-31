import React, { useState } from 'react'
import RelayContext from './RelayContext'
import createRelay from './createRelay'

const Component = props => {
  const [environment, setEnvironment] = useState(createRelay())
  const [environmentID, setEnvironmentID] = useState(0)
  
  const resetEnvironment = () => {
    setEnvironment(createRelay())
    setEnvironmentID(environmentID + 1)
  }

  return (
    <RelayContext.Provider value={{
      environmentID: environmentID.toString(),
      environment,
      resetEnvironment
    }}>
      {props.children}
    </RelayContext.Provider>
  )
}

export default Component

