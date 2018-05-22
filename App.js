import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import { Colors } from './App/Themes'
import Navigation from './App/Navigation/Navigation'

class App extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={Colors.statusBar}
          barStyle='light-content'
        />
        <Navigation />
      </View>
    )
  }
}

export default App
