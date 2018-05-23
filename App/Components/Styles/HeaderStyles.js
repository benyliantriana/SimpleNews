import { StyleSheet, Platform } from 'react-native'
import { Colors } from '../../Themes'

export default StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 74 : 54,
    padding: 10,
    paddingBottom: 0,
    paddingTop: Platform.OS === 'ios' ? 24 : 0,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.actionBar,
    borderBottomColor: Colors.border,
    borderBottomWidth: 1
  },
  buttonBack: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    height: 24,
    width: 24,
    resizeMode: 'contain'
  },
  titleContainer: {
    flex: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textTitle: {
    color: Colors.textActionBar
  }
})
