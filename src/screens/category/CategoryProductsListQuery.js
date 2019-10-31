import React, { useContext } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import RelayContext from '../../RelayContext'
import CategoryProductsList from './CategoryProductsList'
import LoadingView from '../../common/LoadingView'
import ErrorView from '../../common/ErrorView'

const query = graphql`
  query CategoryProductsListQuery($categoryID: Int!) {
    viewer {
      ...CategoryProductsList_viewer @arguments(categoryID: $categoryID)
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
            <CategoryProductsList viewer={props.viewer}/>
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