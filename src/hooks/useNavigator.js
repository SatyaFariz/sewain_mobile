import { useContext } from 'react'
import { NavigationContext } from 'navigation-react'

export default () => {
  const { stateNavigator } = useContext(NavigationContext)
  return {
    navigate: (key, params) => stateNavigator.navigate(key, params),
    goBack: () => stateNavigator.navigateBack(1)
  }
}