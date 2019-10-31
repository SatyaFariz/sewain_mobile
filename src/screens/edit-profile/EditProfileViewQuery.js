import React from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import EditProfileView from './EditProfileView'
import useEnvironment from '../../hooks/useEnvironment'
import LoadingView from '../../common/LoadingView'
import ErrorView from '../../common/ErrorView'

const query = graphql`
  query EditProfileViewQuery {
    viewer {
      id,
      userData {
        id,
        ...EditProfileView_user
      }
    }
  }
`

const Component = _props => {
  const { environment } = useEnvironment()
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
            <EditProfileView user={props.viewer.userData}/>
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