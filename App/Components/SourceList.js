import React from 'react'
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform
} from 'react-native'

import styles from './Styles/SourceListStyles'

const Button = Platform.OS === 'ios' ? TouchableHighlight : TouchableNativeFeedback

export default class SourceList extends React.PureComponent {
  render () {
    const { title, description, category } = this.props
    return (
      <Button onPress={() => this.props.onPress()}>
        <View style={styles.container}>
          <Text style={styles.titleSourceNews}>{title}</Text>
          <Text style={styles.descriptionSourceNews}>{description}</Text>
          <View style={styles.rowSourceNews}>
            <View style={{ flex: 1 }} />
            <Text style={styles.categorySourceNews}>
              Category: {category}
            </Text>
          </View>
        </View>
      </Button>
    )
  }
}
