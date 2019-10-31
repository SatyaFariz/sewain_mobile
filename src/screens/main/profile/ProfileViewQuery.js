import React, { useContext } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import RelayContext from '../../../RelayContext'
import ProfileView from './ProfileView'
import NotLoggedView from './NotLoggedView'
import LoadingView from '../../../common/LoadingView'
import ErrorView from '../../../common/ErrorView'

const query = graphql`
  query ProfileViewQuery {
    viewer {
      id,
      isAuthenticated,
      ...ProfileView_viewer
    }  
  }
  `

const Component = _props => {
  const { environment } = useContext(RelayContext)
  return (
    <QueryRenderer
      query={query}
      variables={{}}
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
              <ProfileView viewer={props.viewer}/>
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