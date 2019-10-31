import React, { useContext } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import RelayContext from '../../../RelayContext'
import NotificationView from './NotificationView'
import NotLoggedView from './NotLoggedView'
import LoadingView from '../../../common/LoadingView'
import ErrorView from '../../../common/ErrorView'
import BottomNavigationContext from '../BottomNavigationContext'

const query = graphql`
  query NotificationViewQuery {
    viewer {
      id,
      isAuthenticated,
      ...NotificationView_viewer
    }  
  }
  `

const Component = _props => {
  const { environment } = useContext(RelayContext)
  const { notificationViewRef } = useContext(BottomNavigationContext)
  return (
    <QueryRenderer
      query={query}
      variables={{ categoryID: _props.categoryID }}
      environment={environment}
      render={({ error, props, retry }) => {
        if(error) {
          return (
            <ErrorView retry={retry}/>
          )
        } else if(props) {
          const { viewer } = props
          if(viewer.isAuthenticated) {
            return (
              <NotificationView viewer={props.viewer} ref={notificationViewRef}/>
            )
          }

          return <NotLoggedView viewer={props.viewer}/>
        }

        return (
          <LoadingView/>
        )
      }}
    />
  )
}

export default Component