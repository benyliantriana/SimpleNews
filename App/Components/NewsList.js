import React from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback,
  Image
} from 'react-native'

import styles from './Styles/SourceListStyles'

import { Colors } from '../Themes'

export default class NewsList extends React.PureComponent {
  render () {
    const { title, description, date, image } = this.props
    return (
      <TouchableNativeFeedback onPress={() => this.props.onPress()}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <View style={{ flex: 1 }} />
            <Text style={{ color: Colors.actionBar, fontSize: 10 }}>
              {date}
            </Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={{ uri: image }} style={styles.images} />
            <View style={{ flexDirection: 'column', flex: 1 }}>
              <Text style={{ color: Colors.actionBar, marginBottom: 5 }}>{title}</Text>
              <Text style={{ color: '#707070', marginTop: 2, fontSize: 12 }}>{description}</Text>
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    )
  }
}
