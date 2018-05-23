import React from 'react'
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ActivityIndicator,
  Platform
} from 'react-native'
import { Actions } from 'react-native-router-flux'
import PropTypes from 'prop-types'

import { appName } from '../config'
import { Colors, Images } from '../Themes'

import styles from './Styles/HeaderStyles'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showLeftButton: this.props.showLeftButton,
      isLoading: this.props.isLoading,
      title: this.props.title
    }
  }

  static propTypes = {
    showLeftButton: PropTypes.bool,
    isLoading: PropTypes.bool
  }

  static defaultProps = {
    showLeftButton: true,
    title: appName,
    isLoading: false
  }

  renderLeft () {
    if (this.state.showLeftButton) {
      return (
        <TouchableOpacity
          onPress={() => Actions.pop()}
          style={styles.buttonBack}
        >
          <Image source={Images.back} style={styles.icon} />
        </TouchableOpacity>
      )
    }
    return <View style={{ flex: 1 }} />
  }

  renderTitle () {
    let label = this.props.title === null ? appName : this.props.title
    let title = this.props.isLoading ? (
      <View style={styles.titleContainer}>
        <ActivityIndicator size='small' color={Colors.background} />
        <Text style={[styles.textTitle, { marginLeft: 5 }]}>
          Loading...
        </Text>
      </View>
    ) : (
      <View style={styles.titleContainer}>
        <Text style={[styles.textTitle, { marginLeft: 5 }]}>
          {label}
        </Text>
      </View>
    )
    return title
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderLeft()}
        {this.renderTitle()}
        <View style={{ flex: 1 }} />
      </View>
    )
  }
}
