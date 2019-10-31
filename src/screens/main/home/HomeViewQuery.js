import React, { useContext } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import RelayContext from '../../../RelayContext'
import HomeRefreshableView from './HomeRefreshableView'
import LoadingView from '../../../common/LoadingView'
import ErrorView from '../../../common/ErrorView'

const query = graphql`
  query HomeViewQuery {
    viewer {
      id,
      isAuthenticated,
      ...HomeRefreshableView_viewer
    }  
  }
  `

const Component = _props => {
  const { environment } = useContext(RelayContext)
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
          return (
            <HomeRefreshableView viewer={props.viewer}/>
          )        
        }

        return (
          <LoadingView/>
        )
      }}
    />
  )
}

export default Component