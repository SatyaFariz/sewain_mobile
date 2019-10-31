import React, { useContext } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import RelayContext from '../../RelayContext'
import CategorySearchResultsList from './CategorySearchResultsList'
import LoadingView from '../../common/LoadingView'
import ErrorView from '../../common/ErrorView'

const query = graphql`
  query CategorySearchResultsListQuery($categoryID: Int!, $q: String!) {
    viewer {
      ...CategorySearchResultsList_viewer @arguments(categoryID: $categoryID, q: $q)
    }  
  }
  `

const Component = _props => {
  const { environment } = useContext(RelayContext)
  return (
    <QueryRenderer
      query={query}
      variables={{ categoryID: _props.categoryID, q: _props.q }}
      environment={environment}
      render={({ error, props, retry }) => {
        if(error) {
          return (
            <ErrorView retry={retry}/>
          )
        } else if(props) {
          return (
            <CategorySearchResultsList 
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