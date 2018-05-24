import React from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  TextInput,
  Image,
  Text,
  TouchableOpacity
} from 'react-native'
import axios from 'axios'
import moment from 'moment'

import { Header, NewsList } from '../Components'
import { Colors, Images } from '../Themes'

import { apiKeyNews, news } from '../config'
import styles from './Styles/HomeStyles'
import { Actions, ActionConst } from 'react-native-router-flux'

class News extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      loading: false,
      domain: this.props.domain,
      data: [],
      refreshing: false,
      newsSource: this.props.newsSource,
      page: 1,
      keyword: '',
      loadmore: true
    }
  }

  componentDidMount () {
    this.firstLoadData()
  }

  firstLoadData () {
    const { page } = this.state
    console.log(news + this.props.domain + '&apiKey=' + apiKeyNews + '&page=' + page)
    axios.get(news + this.props.domain + '&apiKey=' + apiKeyNews + '&page=' + page)
      .then(response => {
        console.log(response)
        this.setState({
          data: response.data.articles,
          isLoading: false,
          page: page + 1
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          isLoading: false
        })
      })
  }

  async search () {
    const { keyword, page } = this.state
    await this.setState({
      loadmore: true
    })
    let addKeyWord = keyword !== '' ? '&q=' + keyword : ''
    console.log(page)
    axios.get(news + this.props.domain + addKeyWord + '&apiKey=' + apiKeyNews + '&page=' + 1)
      .then(response => {
        console.log(response)
        this.setState({
          data: response.data.articles,
          isLoading: false,
          page: 2
        })
      })
      .catch(error => {
        console.log(error)
        this.setState({
          isLoading: false
        })
      })
  }

  renderSearch () {
    const { keyword } = this.state
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder='Search News'
            underlineColorAndroid='transparent'
            style={{ flex: 1, color: '#707070' }}
            value={this.state.keyword}
            onChangeText={(text) => this.setState({ keyword: text })}
            autoCapitalize='none'
            autoCorrect={false}
          />
        </View>
        <TouchableOpacity
          onPress={() => this.search()}
          style={styles.search}
        >
          <Image source={Images.search} style={styles.icon} />
        </TouchableOpacity>
      </View>
    )
  }

  renderitem = ({ item }) => {
    let image
    if (item.urlToImage !== null) {
      if (item.urlToImage.includes('https') || item.urlToImage.includes('http')) {
        image = item.urlToImage
      } else {
        image = ''
      }
    } else {
      image = ''
    }
    return (
      <NewsList
        title={item.title}
        description={item.description}
        date={moment(item.publishedAt).format('dddd, MMMM Do YYYY')}
        image={image}
        onPress={() => this.openDetail(item.url)}
      />
    )
  }

  renderFooter () {
    const { loading, loadmore } = this.state
    if (loading && loadmore) {
      return (
        <View style={{ padding: 10 }}>
          <ActivityIndicator size='small' color={Colors.actionBar} />
        </View>
      )
    }
  }

  loadmore () {
    const { page, data, loading, keyword } = this.state
    let addKeyWord = keyword !== '' ? '&q=' + keyword : ''
    if (!loading) {
      this.setState({
        loading: true
      })
      console.log(news + this.props.domain + addKeyWord + '&apiKey=' + apiKeyNews + '&page=' + page)
      axios.get(news + this.props.domain + addKeyWord + '&apiKey=' + apiKeyNews + '&page=' + page)
        .then(response => {
          console.log(response)
          let loadmore = response.data.articles.length > 0 ? true : false
          this.setState({
            data: data.concat(...response.data.articles),
            loading: false,
            page: page + 1,
            loadmore: loadmore
          })
        })
        .catch(error => {
          console.log(error)
          this.setState({
            loading: false
          })
        })
    }
  }

  async onRefresh () {
    await this.setState({
      isLoading: true,
      loading: false,
      data: [],
      page: 1
    })
    this.firstLoadData()
  }

  openDetail (uri) {
    Actions.detailnews({
      type: ActionConst.PUSH,
      uri: uri
    })
  }

  render () {
    const { isLoading, data } = this.state
    if (!isLoading && data.length < 1) {
      return (
        <View style={styles.container}>
          <Header
            showLeftButton
            isLoading={this.state.isLoading}
            title={this.state.newsSource}
          />
          <Text>No news found</Text>
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Header
          showLeftButton
          isLoading={this.state.isLoading}
          title={this.state.newsSource}
        />
        {this.renderSearch()}
        <FlatList
          data={this.state.data}
          refreshing={this.state.refreshing}
          renderItem={this.renderitem}
          onRefresh={() => this.onRefresh()}
          onEndReached={() => this.loadmore()}
          ListFooterComponent={this.renderFooter()}
        />
      </View>
    )
  }
}

export default News
