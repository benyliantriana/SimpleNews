import React from 'react'
import {
  View,
  FlatList
} from 'react-native'
import axios from 'axios'

import { Header, News } from '../Components'

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
      .catch(error => console.log(error))
  }

  renderitem = ({ item }) => {
    return (
      <News
        title={item.name}
        description={item.description}
        category={item.category}
      />
    )
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
