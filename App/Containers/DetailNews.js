import React from 'react'
import {
  View,
  WebView
} from 'react-native'

import { Header } from '../Components'

class DetailNews extends React.Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Header
          showLeftButton
        />
        <WebView
          source={{uri: this.props.uri}}
        />
      </View>
    )
  }
}

export default DetailNews
