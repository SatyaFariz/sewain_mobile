import React from 'react'
import RelayContext from '../RelayContext'

export default function(Component) {
  return class extends React.Component {
    static contextType = RelayContext
    render() {
      return (
        <Component {...this.context}  {...this.props}/>
      )
    }
  }
}