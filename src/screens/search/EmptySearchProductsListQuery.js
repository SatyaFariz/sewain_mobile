import React, { useContext } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import RelayContext from '../../RelayContext'
import EmptySearchProductsList from './EmptySearchProductsList'
import LoadingView from '../../common/LoadingView'
import ErrorView from '../../common/ErrorView'

const query = graphql`
  query EmptySearchProductsListQuery {
    viewer {
      ...EmptySearchProductsList_viewer
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
          return (
            <EmptySearchProductsList viewer={props.viewer}/>
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