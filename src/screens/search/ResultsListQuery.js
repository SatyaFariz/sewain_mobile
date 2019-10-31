import React, { useContext } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import RelayContext from '../../RelayContext'
import ResultsList from './ResultsList'
import LoadingView from '../../common/LoadingView'
import ErrorView from '../../common/ErrorView'

const query = graphql`
  query ResultsListQuery($q: String!) {
    viewer {
      ...ResultsList_viewer @arguments(q: $q)
    }  
  }
  `

const Component = _props => {
  const { environment } = useContext(RelayContext)
  return (
    <QueryRenderer
      query={query}
      variables={{ q: _props.q }}
      environment={environment}
      render={({ error, props, retry }) => {
        if(error) {
          return (
            <ErrorView retry={retry}/>
          )
        } else if(props) {
          return (
            <ResultsList 
              viewer={props.viewer}
              q={_props.q}
            />
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