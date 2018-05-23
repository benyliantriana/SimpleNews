import { StyleSheet } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  searchContainer: {
    flex: 1,
    paddingLeft: 4,
    flexDirection: 'row',
    backgroundColor: Colors.newsBackground,
    borderRadius: 4,
    height: 40
  },
  search: {
    height: 40,
    width: 40,
    borderRadius: 4,
    backgroundColor: Colors.statusBar,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 32,
    width: 32,
    resizeMode: 'contain'
  }
})
