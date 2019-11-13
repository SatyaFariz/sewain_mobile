import React from 'react'
import { StyleSheet, Image, Dimensions, View } from 'react-native'
import { graphql, QueryRenderer } from 'react-relay'
import RelayContext from '../../RelayContext'
import ProductDetailView from './ProductDetailView'
import useEnvironment from '../../hooks/useEnvironment'
import LoadingView from '../../common/LoadingView'
import ErrorView from '../../common/ErrorView'
import NoContentView from '../../common/NoContentView'

const { width } = Dimensions.get('window')

const query = graphql`
  query ProductDetailViewQuery($productID: Int!) {
    viewer {
      id,
      ...ProductDetailView_viewer,
      product(productID: $productID) {
        id,
        ...ProductDetailView_product
      }
    }
  }
`

const Component = ({ productID, image, onScroll }) => {
  const { environment } = useEnvironment()

  return (
    <QueryRenderer
      environment={environment}
      variables={{ productID }}
      query={query}
      render={({ error, props, retry }) => {
        if(error) {
          return (
            <ErrorView retry={retry}/>
          )
        } else if(props) {
          const { product } = props.viewer
          if(!product)
            return (
              <View style={s.flex}>
                <Image 
                  style={s.image}
                  source={{ uri: image }}
                />
                <View style={s.flex}>
                  <NoContentView text="Produk telah dihapus"/>
                </View>
              </View>
            )
            
          return (
            <ProductDetailView 
              viewer={props.viewer}
              product={product}
              onScroll={onScroll}
            />
          )
        }

        return (
          <View style={s.flex}>
            <Image 
              style={s.image}
              source={{ uri: image }}
            />
            <View style={s.flex}>
              <LoadingView/>
            </View>
          </View>
        )
      }}
    />
  )
}

const s = StyleSheet.create({
  flex: {
    flex: 1
  },
  image: {
    height: width,
    width
  }
})

export default Component