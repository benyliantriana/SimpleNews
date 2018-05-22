import React from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback
} from 'react-native'

import styles from './Styles/NewsStyles'

import { Colors } from '../Themes'

export default class News extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    const { title, description, category } = this.props
    return (
      <TouchableNativeFeedback>
        <View style={styles.container}>
          <Text style={{ color: Colors.actionBar }}>{title}</Text>
          <Text style={{ color: '#707070', marginTop: 2, fontSize: 12 }}>{description}</Text>
          <View style={{ flexDirection: 'row', marginTop: 3 }}>
            <View style={{ flex: 1 }} />
            <Text style={{ color: Colors.actionBar, fontSize: 10 }}>
              Category: {category}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}
