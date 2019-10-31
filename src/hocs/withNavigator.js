import React from 'react'
import { NavigationContext } from 'navigation-react'

export default function(Component) {
  return class extends React.Component {
    static contextType = NavigationContext

    render() {
      const { stateNavigator } = this.context
      const _props = {
        navigate: (key, params) => stateNavigator.navigate(key, params),
        goBack: () => stateNavigator.navigateBack(1)
      }

      return (
        <Component {..._props} {...this.props}/>
      )
    }
  }
}