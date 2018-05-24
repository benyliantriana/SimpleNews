import React from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
  Image
} from 'react-native'

import styles from './Styles/SourceListStyles'

const Button = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback

export default class NewsList extends React.PureComponent {
  render () {
    const { title, description, date, image } = this.props
    const thumbnail = image === '' ? <View /> : <Image source={{ uri: image }} style={styles.images} />
    return (
      <Button onPress={() => this.props.onPress()}>
        <View style={styles.container}>
          <View style={styles.rowContainer}>
            <View style={{ flex: 1 }} />
            <Text style={styles.textDate}>
              {date}
            </Text>
          </View>
          <View style={styles.content}>
            {thumbnail}
            <View style={styles.columnContainer}>
              <Text style={styles.textTitle}>{title}</Text>
              <Text style={styles.textDescription}>{description}</Text>
            </View>
          </View>
        </View>
      </Button>
    )
  }
}
