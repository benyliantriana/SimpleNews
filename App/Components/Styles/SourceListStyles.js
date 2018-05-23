import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
    marginTop: 2,
    padding: 10,
    backgroundColor: Colors.newsBackground,
    elevation: 1
  },
  images: {
    marginRight: 15,
    width: 75,
    height: 75,
    borderRadius: 4,
    resizeMode: 'cover'
  }
})
