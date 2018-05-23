import React from 'react'
import {
  View,
  FlatList
} from 'react-native'
import axios from 'axios'
import { Actions, ActionConst } from 'react-native-router-flux'

import { Header, SourceList } from '../Components'

import { apiKeyNews, newsList } from '../config'
import styles from './Styles/HomeStyles'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      data: []
    }
  }

  componentDidMount () {
    axios.get(newsList + apiKeyNews)
      .then(response => {
        console.log(response)
        this.setState({
          data: response.data.sources,
          isLoading: false
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          isLoading: false
        })
      })
  }

  renderitem = ({ item }) => {
    return (
      <SourceList
        title={item.name}
        description={item.description}
        category={item.category}
        onPress={() => this.openNewsSource(item.url, item.name)}
      />
    )
  }

  async openNewsSource (uri, newsSource) {
    let domain = await uri.replace('http://', '').replace('https://', '').replace('www.', '')
    Actions.news({
      type: ActionConst.PUSH,
      domain: domain,
      newsSource: newsSource
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <Header
          showLeftButton={false}
          isLoading={this.state.isLoading}
        />
        <FlatList
          data={this.state.data}
          renderItem={this.renderitem}
        />
      </View>
    )
  }
}

export default Home
