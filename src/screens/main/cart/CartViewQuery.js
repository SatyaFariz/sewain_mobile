import React, { useContext } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import RelayContext from '../../../RelayContext'
import CartView from './CartView'
import NotLoggedView from './NotLoggedView'
import LoadingView from '../../../common/LoadingView'
import ErrorView from '../../../common/ErrorView'

const query = graphql`
  query CartViewQuery {
    viewer {
      id,
      isAuthenticated,
      ...CartView_viewer
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
          const { viewer } = props
          if(viewer.isAuthenticated) {
            return (
              <CartView viewer={props.viewer}/>
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