import React from 'react'
import { View, Text } from 'react-native'
import { graphql, createRefetchContainer } from 'react-relay'

import NotificationsList from './NotificationsList'

class Component extends React.Component {
  state = {
    refreshing: false
  }

  refresh = () => {
    if(!this.state.refreshing) {
      this.props.relay.refetch({}, {}, () => {
        this.setState({ refreshing: false })
      }, { force: true })
      this.setState({ refreshing: true })
    }
  }

  render() {
    return (
      <NotificationsList viewer={this.props.viewer}/>
    )
  }
}

export default createRefetchContainer(Component, 
  {
    viewer: graphql`
      fragment NotificationView_viewer on Viewer {
        id,
        ...NotificationsList_viewer
      }
    `
  },
  graphql`
    query NotificationViewRefreshQuery {
      viewer {
        id,
        isAuthenticated,
        ...NotificationView_viewer
      }
    }
  `
)