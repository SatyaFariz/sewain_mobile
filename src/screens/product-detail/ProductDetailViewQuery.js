import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import RelayContext from '../../RelayContext'
import ProductDetailView from './ProductDetailView'
import useEnvironment from '../../hooks/useEnvironment'
import LoadingView from '../../common/LoadingView'
import ErrorView from '../../common/ErrorView'
import NoContentView from '../../common/NoContentView'

const query = graphql`
  query ProductDetailViewQuery($productID: Int!) {
    viewer {
      id,
      product(productID: $productID) {
        id,
        ...ProductDetailView_product
      }
    }
  }
`

const Component = _props => {
  const { environment } = useEnvironment()

  return (
    <QueryRenderer
      environment={environment}
      variables={{ productID: _props.productID }}
      query={query}
      render={({ error, props, retry }) => {
        if(error) {
          return (
            <ErrorView retry={retry}/>
          )
        } else if(props) {
          const { product } = props.viewer
          if(!product)
            return <NoContentView text="Produk tidak ditemukan"/>
            
          return (
            <ProductDetailView product={product}/>
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